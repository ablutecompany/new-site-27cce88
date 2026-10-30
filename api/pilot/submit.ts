import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  institution: z.string().min(1),
  contact: z.string().default(""),
  email: z.string().email(),
  country: z.string().default(""),
  type: z.string().default(""),
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

  const subject = `PILOT_site: ${data.institution} — ${data.type || "N/A"}`;
  const html = `<h2>Host a Pilot — ablute.pt</h2><p><strong>Instituição:</strong> ${data.institution}</p><p><strong>Contacto:</strong> ${data.contact || "—"}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>País:</strong> ${data.country || "—"}</p><p><strong>Tipo:</strong> ${data.type || "—"}</p>`;

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
      console.log("[pilot] SMTP not configured. Subject:", subject);
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[pilot] Email error:", err);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
}
