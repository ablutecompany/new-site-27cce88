import nodemailer from "nodemailer";
import { z } from "zod";

// Standalone Vercel serverless function mirroring server/routes.ts's
// "/api/investors/submit" handler.

const schema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  telefone: z.string().min(1),
  empresa: z.string().default(""),
  area: z.string().default(""),
  mensagem: z.string().default(""),
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

  const subject = `INVESTOR_site: ${data.nome}${data.empresa ? " — " + data.empresa : ""}`;
  const html = `
    <h2>Novo contacto de investidor — ablute_</h2>
    <p><strong>Nome:</strong> ${data.nome}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telefone:</strong> ${data.telefone}</p>
    ${data.empresa ? `<p><strong>Empresa / Fundo:</strong> ${data.empresa}</p>` : ""}
    ${data.area ? `<p><strong>Área de interesse:</strong> ${data.area}</p>` : ""}
    ${data.mensagem ? `<p><strong>Mensagem:</strong></p><p>${data.mensagem.replace(/\n/g, "<br/>")}</p>` : ""}
  `;

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
        to: "nunomarujo@ablute.pt",
        subject,
        html,
        replyTo: data.email,
      });
    } else {
      console.log("[investors] SMTP not configured — email not sent. Subject:", subject);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[investors] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
