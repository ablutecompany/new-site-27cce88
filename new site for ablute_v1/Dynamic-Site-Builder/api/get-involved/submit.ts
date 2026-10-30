import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  institution: z.string().default(""),
  role: z.string().default(""),
  roleOther: z.string().default(""),
  subject: z.string().default(""),
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

  const role = data.roleOther || data.role;
  const subject = `INVOLVE_site: ${data.name} — ${role}`;
  const html = `<h2>Quero Envolver-me — ablute.pt</h2><p><strong>Nome:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Instituição:</strong> ${data.institution || "—"}</p><p><strong>Perfil:</strong> ${role || "—"}</p><p><strong>Assunto:</strong> ${data.subject || "—"}</p>`;

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
      console.log("[get-involved] SMTP not configured. Subject:", subject);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[get-involved] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
