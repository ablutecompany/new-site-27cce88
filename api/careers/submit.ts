import nodemailer from "nodemailer";
import multer from "multer";
import { z } from "zod";

// Standalone Vercel serverless function mirroring server/routes.ts's
// "/api/careers/submit" handler, including CV/cover-letter file uploads.
// multer's memoryStorage middleware is just a (req,res,next) function that
// reads the raw multipart body off `req` — it works the same way against a
// Vercel Node function's req/res as it does under Express, as long as
// Vercel's default JSON body-parsing doesn't run first (it only parses
// bodies declared as JSON/urlencoded, so multipart/form-data is left raw).

export const config = {
  api: {
    bodyParser: false,
  },
};

const memStorage = multer.memoryStorage();
const upload = multer({
  storage: memStorage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = [".pdf", ".doc", ".docx", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const ok = allowed.some((a) => file.originalname.toLowerCase().endsWith(a) || file.mimetype === a);
    cb(null, ok);
  },
});

const uploadFields = upload.fields([
  { name: "cv", maxCount: 1 },
  { name: "carta", maxCount: 1 },
]);

function runMiddleware(req: any, res: any, fn: any): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      resolve();
    });
  });
}

const schema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  morada: z.string().default(""),
  telefone: z.string().default(""),
  linkedin: z.string().default(""),
  nota: z.string().default(""),
  jobTitle: z.string().min(1),
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    await runMiddleware(req, res, uploadFields);
  } catch (err) {
    console.error("[careers] Upload error:", err);
    res.status(400).json({ message: "Erro ao processar ficheiros." });
    return;
  }

  let data: z.infer<typeof schema>;
  try {
    data = schema.parse(req.body);
  } catch {
    res.status(400).json({ message: "Dados inválidos. Nome e email são obrigatórios." });
    return;
  }

  const files = req.files as Record<string, Express.Multer.File[]> | undefined;
  const cvFile = files?.cv?.[0];

  if (!cvFile) {
    res.status(400).json({ message: "O CV é obrigatório." });
    return;
  }

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const dateStr = `${dd}-${mm}-${yyyy}`;
  const parts = data.nome.trim().split(" ");
  const candidateName = parts.length >= 2 ? `${parts[0]} ${parts[parts.length - 1]}` : data.nome.trim();
  const subject = `${data.jobTitle} : ${candidateName} : ${dateStr}`;

  const html = `
    <h2>${data.jobTitle}</h2>
    <hr/>
    <p><strong>Nome:</strong> ${data.nome}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telefone:</strong> ${data.telefone || "—"}</p>
    <p><strong>Morada:</strong> ${data.morada || "—"}</p>
    ${data.linkedin ? `<p><strong>LinkedIn/Portfólio:</strong> ${data.linkedin}</p>` : ""}
    ${data.nota ? `<p><strong>Nota:</strong></p><p>${data.nota.replace(/\n/g, "<br/>")}</p>` : ""}
    <hr/>
    <p style="color:#888;font-size:12px">Candidatura recebida via ablute.pt em ${dateStr}</p>
  `;

  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  if (cvFile) attachments.push({ filename: cvFile.originalname, content: cvFile.buffer, contentType: cvFile.mimetype });
  const cartaFile = files?.carta?.[0];
  if (cartaFile) attachments.push({ filename: cartaFile.originalname, content: cartaFile.buffer, contentType: cartaFile.mimetype });

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        tls: { rejectUnauthorized: false },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: "talent@ablute.pt",
        subject,
        html,
        replyTo: data.email,
        attachments,
      });
      console.log("[careers] Email sent. Subject:", subject);
    } else {
      console.log("[careers] SMTP not configured. Subject:", subject, "| Candidate:", data.email);
      res.status(503).json({ message: "SMTP_NOT_CONFIGURED" });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[careers] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar candidatura." });
  }
}
