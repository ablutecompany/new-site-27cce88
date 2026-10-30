import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  assunto: z.string().default(""),
  mensagem: z.string().min(1),
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

  const subject = `CONTACT_site: ${data.nome} — ${data.assunto || "Geral"}`;
  const html = `<h2>Contacto — ablute.pt</h2><p><strong>Nome:</strong> ${data.nome}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Assunto:</strong> ${data.assunto || "—"}</p><p><strong>Mensagem:</strong></p><p>${data.mensagem.replace(/\n/g, "<br/>")}</p>`;

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        tls: { rejectUnauthorized: false },
      });
      await transporter.sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: "info@ablute.pt", subject, html, replyTo: data.email });
    } else {
      console.log("[contacts] SMTP not configured. Subject:", subject);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contacts] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
