import nodemailer from "nodemailer";
import { z } from "zod";

// Standalone Vercel serverless function mirroring server/routes.ts's
// "/api/waitinglist/submit" handler. NOTE: the DB-persistence step from
// the Express handler (storage.createWaitingListSubmission) is
// intentionally NOT replicated here — importing server/db.ts would throw
// at module load if DATABASE_URL isn't set on this Vercel project, which
// can't be verified from this session. Email delivery is kept, which is
// the part the user actually relies on.

const schema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  country: z.string().min(1),
  interestType: z.string().min(1),
  intendedTimeline: z.string().min(1),
  units: z.string().optional(),
  intendedSetting: z.string().optional(),
  mainReason: z.string().optional(),
  followUpPreference: z.string().optional(),
  notes: z.string().optional(),
  orgType: z.string().optional(),
  pilotInterest: z.string().optional(),
  venueType: z.string().optional(),
  venueScale: z.string().optional(),
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
    res.status(400).json({ message: "Invalid submission data." });
    return;
  }

  const now = new Date();
  const dateStr = now.toLocaleString("en-GB", { timeZone: "Europe/Lisbon", dateStyle: "full", timeStyle: "short" });
  const subject = `Waiting List Reservation — ${data.interestType} — ${data.fullName}`;

  const row = (k: string, v: string | undefined) =>
    v ? `<tr><td style="padding:6px 12px 6px 0;color:#888;font-size:13px;vertical-align:top;white-space:nowrap">${k}</td><td style="padding:6px 0;font-size:13px;color:#111">${v}</td></tr>` : "";

  const html = `
<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="background:#0d0f11;padding:28px 32px 24px">
    <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.35)">ablute_ · Waiting List</p>
    <h1 style="margin:10px 0 0;font-size:20px;color:#fff;font-weight:600">${data.fullName}</h1>
    <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.45)">${data.interestType} · ${data.intendedTimeline}</p>
  </div>
  <div style="padding:28px 32px">
    <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af">Step 1 — Reservation</p>
    <table style="border-collapse:collapse;width:100%">
      ${row("Full Name", data.fullName)}
      ${row("Email", data.email)}
      ${row("Country", data.country)}
      ${row("Interest Type", data.interestType)}
      ${row("Intended Timeline", data.intendedTimeline)}
    </table>
    ${(data.units || data.intendedSetting || data.mainReason || data.followUpPreference || data.notes || data.orgType || data.pilotInterest || data.venueType || data.venueScale) ? `
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
    <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af">Step 2 — Qualification</p>
    <table style="border-collapse:collapse;width:100%">
      ${row("Number of Units", data.units)}
      ${row("Intended Setting", data.intendedSetting)}
      ${row("Main Reason", data.mainReason)}
      ${row("Follow-up Preference", data.followUpPreference)}
      ${row("Org Type", data.orgType)}
      ${row("Pilot Interest", data.pilotInterest)}
      ${row("Venue Type", data.venueType)}
      ${row("Venue Scale", data.venueScale)}
      ${data.notes ? `<tr><td colspan="2" style="padding-top:12px"><p style="margin:0 0 4px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.1em">Notes</p><p style="margin:0;font-size:13px;color:#374151;line-height:1.6">${data.notes.replace(/\n/g, "<br/>")}</p></td></tr>` : ""}
    </table>
    ` : ""}
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
    <p style="margin:0;font-size:11px;color:#9ca3af">Submitted ${dateStr} via ablute.pt</p>
  </div>
</div>`;

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      const waitingListRecipientMap: Record<string, string> = {
        "Home": "client@ablute.pt",
        "Hospitality": "partner@ablute.pt",
        "Clinic / Health Provider": "partner@ablute.pt",
        "Wellness": "partner@ablute.pt",
        "Investor / Partner": "nunomarujo@ablute.pt",
        "Other": "info@ablute.pt",
      };
      const recipient = waitingListRecipientMap[data.interestType] || "info@ablute.pt";

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: recipient,
        subject,
        html,
        replyTo: data.email,
      });
      console.log("[waitinglist] Email sent:", subject);
    } else {
      console.log("[waitinglist] SMTP not configured. Subject:", subject);
    }
  } catch (emailErr) {
    console.error("[waitinglist] Email send error (non-fatal):", emailErr);
  }

  res.status(200).json({ ok: true });
}
