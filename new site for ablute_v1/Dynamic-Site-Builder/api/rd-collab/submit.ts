import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(1),
  instituicao: z.string().min(1),
  area: z.string().default(""),
  email: z.string().email(),
  objetivo: z.string().default(""),
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  let data: z.infer<typeof schema>;
  try {
    data = schema.parse(req.body);
  } catch {
    res.status(400).json({ message: "Dados inválidos." });
    return;
  }

  const subject = `RD_site: ${data.nome} — ${data.instituicao}`;
  const html = `<h2>Colaboração I&D — ablute.pt</h2><p><strong>Nome:</strong> ${data.nome}</p><p><strong>Instituição:</strong> ${data.instituicao}</p><p><strong>Área:</strong> ${data.area || "—"}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Objetivo:</strong></p><p>${(data.objetivo || "—").replace(/\n/g, "<br/>")}</p>`;

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        tls: { rejectUnauthorized: false },
      });
      await transporter.sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: "partner@ablute.pt", subject, html, replyTo: data.email });
    } else {
      console.log("[rd-collab] SMTP not configured. Subject:", subject);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[rd-collab] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
