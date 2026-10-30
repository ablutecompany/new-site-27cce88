import nodemailer from "nodemailer";
import { z } from "zod";

// Standalone Vercel serverless function — the Express server in server/
// is NOT deployed as-is on Vercel (no vercel.json / functions config),
// so form endpoints under /api/* need to exist here individually.
// This mirrors server/routes.ts's "/api/app-notify/submit" handler.

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
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

  const subject = `APP_notify: ${data.name} — ${data.email}`;
  const html = `
    <h2>Notificação App — Nova Subscrição</h2>
    <p><strong>Nome:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
  `;

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: { rejectUnauthorized: false },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: "client@ablute.pt",
        subject,
        html,
        replyTo: data.email,
      });
    } else {
      console.log("[app-notify] SMTP not configured — email not sent. Subject:", subject);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[app-notify] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
