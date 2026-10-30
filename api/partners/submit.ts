import nodemailer from "nodemailer";
import { z } from "zod";

// Standalone Vercel serverless function mirroring server/routes.ts's
// "/api/partners/submit" handler (the Express server itself is not
// deployed on Vercel).

const schema = z.object({
  empresa: z.string().min(1),
  email: z.string().email(),
  website: z.string().min(1),
  pais: z.string().min(1),
  mensagem: z.string().min(1),
  categories: z.string().min(1),
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

  const subject = `Parceiros e Fornecedores: ${data.categories}`;
  const html = `
    <h2>Nova candidatura — Parceiros e Fornecedores</h2>
    <p><strong>Categorias de interesse:</strong> ${data.categories}</p>
    <hr/>
    <p><strong>Empresa:</strong> ${data.empresa}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Website:</strong> ${data.website}</p>
    <p><strong>País:</strong> ${data.pais}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${data.mensagem.replace(/\n/g, "<br/>")}</p>
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
        to: "partner@ablute.pt",
        subject,
        html,
        replyTo: data.email,
      });
    } else {
      console.log("[partners] SMTP not configured — email not sent. Subject:", subject);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[partners] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
