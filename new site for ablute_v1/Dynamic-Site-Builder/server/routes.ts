import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";
import multer from "multer";
import fs from "fs";
import path from "path";

const memStorage = multer.memoryStorage();
const upload = multer({
  storage: memStorage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = [".pdf", ".doc", ".docx", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const ok = allowed.some(a => file.originalname.toLowerCase().endsWith(a.replace(".", ".")) || file.mimetype === a);
    cb(null, ok);
  },
});


export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.posts.list.path, async (req, res) => {
    const postsList = await storage.getPosts();
    res.json(postsList);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPost(Number(req.params.id));
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  app.post(api.posts.create.path, async (req, res) => {
    try {
      const input = api.posts.create.input.parse(req.body);
      const post = await storage.createPost(input);
      res.status(201).json(post);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.comments.list.path, async (req, res) => {
    const postId = Number(req.params.postId);
    const commentsList = await storage.getComments(postId);
    res.json(commentsList);
  });

  app.post(api.comments.create.path, async (req, res) => {
    try {
      const bodyWithPostId = { ...req.body, postId: Number(req.params.postId) };
      const input = api.comments.create.input.parse(bodyWithPostId);
      const comment = await storage.createComment(input);
      res.status(201).json(comment);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Partners & Suppliers form submission → send email
  app.post("/api/partners/submit", async (req, res) => {
    const schema = z.object({
      empresa: z.string().min(1),
      email: z.string().email(),
      website: z.string().min(1),
      pais: z.string().min(1),
      mensagem: z.string().min(1),
      categories: z.string().min(1),
    });

    let data;
    try {
      data = schema.parse(req.body);
    } catch {
      return res.status(400).json({ message: "Dados inválidos." });
    }

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
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: "partner@ablute.pt",
          subject,
          html,
          replyTo: data.email,
        });
      } else {
        console.log("[partners] SMTP not configured — email not sent. Subject:", subject);
        console.log("[partners] Data:", JSON.stringify(data));
      }
      res.json({ ok: true });
    } catch (err) {
      console.error("[partners] Email error:", err);
      res.status(500).json({ message: "Erro ao enviar email." });
    }
  });

  // Investor contact form → send email to nunomarujo@ablute.pt
  app.post("/api/investors/submit", async (req, res) => {
    const schema = z.object({
      nome: z.string().min(1),
      email: z.string().email(),
      telefone: z.string().min(1),
      empresa: z.string().default(""),
      area: z.string().default(""),
      mensagem: z.string().default(""),
    });

    let data;
    try {
      data = schema.parse(req.body);
    } catch {
      return res.status(400).json({ message: "Dados inválidos." });
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

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: "nunomarujo@ablute.pt",
          subject,
          html,
          replyTo: data.email,
        });
      } else {
        console.log("[investors] SMTP not configured — email not sent. Subject:", subject);
        console.log("[investors] Data:", JSON.stringify(data));
      }
      res.json({ ok: true });
    } catch (err) {
      console.error("[investors] Email error:", err);
      res.status(500).json({ message: "Erro ao enviar email." });
    }
  });

  // Careers application → send email to talent@ablute.pt
  app.post("/api/careers/submit", upload.fields([{ name: "cv", maxCount: 1 }, { name: "carta", maxCount: 1 }]), async (req, res) => {
    const schema = z.object({
      nome: z.string().min(1),
      email: z.string().email(),
      morada: z.string().default(""),
      telefone: z.string().default(""),
      linkedin: z.string().default(""),
      nota: z.string().default(""),
      jobTitle: z.string().min(1),
    });

    let data;
    try {
      data = schema.parse(req.body);
    } catch {
      return res.status(400).json({ message: "Dados inválidos. Nome e email são obrigatórios." });
    }

    const files = req.files as Record<string, Express.Multer.File[]> | undefined;
    const cvFile = files?.cv?.[0];

    if (!cvFile) {
      return res.status(400).json({ message: "O CV é obrigatório." });
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

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
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
        return res.status(503).json({ message: "SMTP_NOT_CONFIGURED" });
      }
      res.json({ ok: true });
    } catch (err) {
      console.error("[careers] Email error:", err);
      res.status(500).json({ message: "Erro ao enviar candidatura." });
    }
  });

  // Waiting List / Pre-reservation submission → save to DB + send email to client@ablute.pt
  app.post("/api/waitinglist/submit", async (req, res) => {
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

    let data;
    try {
      data = schema.parse(req.body);
    } catch {
      return res.status(400).json({ message: "Invalid submission data." });
    }

    // Always persist to database first
    try {
      await storage.createWaitingListSubmission(data);
    } catch (dbErr) {
      console.error("[waitinglist] DB save error:", dbErr);
      return res.status(500).json({ message: "Failed to save submission." });
    }

    // Attempt email delivery — graceful degradation if SMTP not configured
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
        console.log("[waitinglist] SMTP not configured — saved to DB only. Subject:", subject);
        console.log("[waitinglist] Submission:", JSON.stringify({ ...data, submittedAt: dateStr }));
      }
    } catch (emailErr) {
      console.error("[waitinglist] Email send error (non-fatal, DB already saved):", emailErr);
    }

    res.json({ ok: true });
  });

  // Contacts form → send email to info@ablute.pt
  app.post("/api/contacts/submit", async (req, res) => {
    const schema = z.object({
      nome: z.string().min(1),
      email: z.string().email(),
      assunto: z.string().default(""),
      mensagem: z.string().min(1),
    });
    let data;
    try { data = schema.parse(req.body); } catch { return res.status(400).json({ message: "Dados inválidos." }); }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });
    const subject = `CONTACT_site: ${data.nome} — ${data.assunto || "Geral"}`;
    const html = `<h2>Contacto — ablute.pt</h2><p><strong>Nome:</strong> ${data.nome}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Assunto:</strong> ${data.assunto || "—"}</p><p><strong>Mensagem:</strong></p><p>${data.mensagem.replace(/\n/g, "<br/>")}</p>`;
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: "info@ablute.pt", subject, html, replyTo: data.email });
      } else { console.log("[contacts] SMTP not configured. Subject:", subject); }
      res.json({ ok: true });
    } catch (err) { console.error("[contacts] Email error:", err); res.status(500).json({ message: "Erro ao enviar email." }); }
  });

  // Get Involved / Quero envolver-me → partner@ablute.pt
  app.post("/api/get-involved/submit", async (req, res) => {
    const schema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      institution: z.string().default(""),
      role: z.string().default(""),
      roleOther: z.string().default(""),
      subject: z.string().default(""),
    });
    let data;
    try { data = schema.parse(req.body); } catch { return res.status(400).json({ message: "Dados inválidos." }); }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });
    const role = data.roleOther || data.role;
    const subject = `INVOLVE_site: ${data.name} — ${role}`;
    const html = `<h2>Quero Envolver-me — ablute.pt</h2><p><strong>Nome:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Instituição:</strong> ${data.institution || "—"}</p><p><strong>Perfil:</strong> ${role || "—"}</p><p><strong>Assunto:</strong> ${data.subject || "—"}</p>`;
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: "partner@ablute.pt", subject, html, replyTo: data.email });
      } else { console.log("[get-involved] SMTP not configured. Subject:", subject); }
      res.json({ ok: true });
    } catch (err) { console.error("[get-involved] Email error:", err); res.status(500).json({ message: "Erro ao enviar email." }); }
  });

  // Host a Pilot → partner@ablute.pt
  app.post("/api/pilot/submit", async (req, res) => {
    const schema = z.object({
      institution: z.string().min(1),
      contact: z.string().default(""),
      email: z.string().email(),
      country: z.string().default(""),
      type: z.string().default(""),
    });
    let data;
    try { data = schema.parse(req.body); } catch { return res.status(400).json({ message: "Dados inválidos." }); }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });
    const subject = `PILOT_site: ${data.institution} — ${data.type || "N/A"}`;
    const html = `<h2>Host a Pilot — ablute.pt</h2><p><strong>Instituição:</strong> ${data.institution}</p><p><strong>Contacto:</strong> ${data.contact || "—"}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>País:</strong> ${data.country || "—"}</p><p><strong>Tipo:</strong> ${data.type || "—"}</p>`;
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: "partner@ablute.pt", subject, html, replyTo: data.email });
      } else { console.log("[pilot] SMTP not configured. Subject:", subject); }
      res.json({ ok: true });
    } catch (err) { console.error("[pilot] Email error:", err); res.status(500).json({ message: "Erro ao enviar email." }); }
  });

  // Request Demo → partner@ablute.pt
  app.post("/api/demo/submit", async (req, res) => {
    const schema = z.object({
      nome: z.string().min(1),
      instituicao: z.string().default(""),
      cargo: z.string().default(""),
      email: z.string().email(),
      mensagem: z.string().default(""),
      tipo: z.string().default(""),
    });
    let data;
    try { data = schema.parse(req.body); } catch { return res.status(400).json({ message: "Dados inválidos." }); }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });
    const subject = `DEMO_site: ${data.nome} — ${data.instituicao || "N/A"}`;
    const html = `<h2>Solicitar Demo — ablute.pt</h2><p><strong>Nome:</strong> ${data.nome}</p><p><strong>Instituição:</strong> ${data.instituicao || "—"}</p><p><strong>Cargo:</strong> ${data.cargo || "—"}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Tipo:</strong> ${data.tipo || "—"}</p><p><strong>Mensagem:</strong></p><p>${(data.mensagem || "—").replace(/\n/g, "<br/>")}</p>`;
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: "partner@ablute.pt", subject, html, replyTo: data.email });
      } else { console.log("[demo] SMTP not configured. Subject:", subject); }
      res.json({ ok: true });
    } catch (err) { console.error("[demo] Email error:", err); res.status(500).json({ message: "Erro ao enviar email." }); }
  });

  // R&D Collaboration / Biomarker validation → partner@ablute.pt
  app.post("/api/rd-collab/submit", async (req, res) => {
    const schema = z.object({
      nome: z.string().min(1),
      instituicao: z.string().min(1),
      area: z.string().default(""),
      email: z.string().email(),
      objetivo: z.string().default(""),
    });
    let data;
    try { data = schema.parse(req.body); } catch { return res.status(400).json({ message: "Dados inválidos." }); }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });
    const subject = `RD_site: ${data.nome} — ${data.instituicao}`;
    const html = `<h2>Colaboração I&D — ablute.pt</h2><p><strong>Nome:</strong> ${data.nome}</p><p><strong>Instituição:</strong> ${data.instituicao}</p><p><strong>Área:</strong> ${data.area || "—"}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Objetivo:</strong></p><p>${(data.objetivo || "—").replace(/\n/g, "<br/>")}</p>`;
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: "partner@ablute.pt", subject, html, replyTo: data.email });
      } else { console.log("[rd-collab] SMTP not configured. Subject:", subject); }
      res.json({ ok: true });
    } catch (err) { console.error("[rd-collab] Email error:", err); res.status(500).json({ message: "Erro ao enviar email." }); }
  });

  // Scientific alerts subscription → send email to news@ablute.pt
  app.post("/api/scientific-alerts/submit", async (req, res) => {
    const schema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
    });

    let data;
    try {
      data = schema.parse(req.body);
    } catch {
      return res.status(400).json({ message: "Dados inválidos." });
    }

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

    const subject = `SCIENCE_site: ${data.name} — ${data.email}`;
    const html = `
      <h2>Alerta de Publicações Científicas — Nova Subscrição</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `;

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: "news@ablute.pt",
          subject,
          html,
          replyTo: data.email,
        });
      } else {
        console.log("[scientific-alerts] SMTP not configured — email not sent. Subject:", subject);
      }
      res.json({ ok: true });
    } catch (err) {
      console.error("[scientific-alerts] Email error:", err);
      res.status(500).json({ message: "Erro ao enviar email." });
    }
  });

  // App notify subscription → send email to client@ablute.pt
  app.post("/api/app-notify/submit", async (req, res) => {
    const schema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
    });

    let data;
    try {
      data = schema.parse(req.body);
    } catch {
      return res.status(400).json({ message: "Dados inválidos." });
    }

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

    const subject = `APP_notify: ${data.name} — ${data.email}`;
    const html = `
      <h2>Notificação App — Nova Subscrição</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `;

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
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
      res.json({ ok: true });
    } catch (err) {
      console.error("[app-notify] Email error:", err);
      res.status(500).json({ message: "Erro ao enviar email." });
    }
  });

  // Seed database
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  // Database is empty, ready for new content
}
