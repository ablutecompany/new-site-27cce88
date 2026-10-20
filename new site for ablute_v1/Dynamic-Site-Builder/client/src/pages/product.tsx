import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/hooks/use-language";
import { useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Droplets, Zap, Wind, User, Shield, FileText, ChevronDown, CheckCircle2, AlertTriangle, Lock, Wrench, Award } from "lucide-react";

import plantsImg from "@assets/produto_em_wc_(2)_1772854526382.png";
import marbleImg from "@assets/produto_em_wc_(1)_1772854526383.jpg";
import wcRoomImg from "@assets/ablute__wc_1773159363046.jpeg";
import technicalDrawingImg from "@assets/desenho_tecnico_1772879729924.png";

function playDownloadClick() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.25);
    setTimeout(() => ctx.close(), 400);
  } catch { }
}

const techIcons = [Droplets, Zap, Wind, User];
const safetyIcons = [Zap, Lock, Shield, Wrench];

const stageStatuses = ["done", "done", "done", "active", "upcoming"] as const;

export default function Product() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [pilotOpen, setPilotOpen] = useState(false);
  const [imgLightboxOpen, setImgLightboxOpen] = useState(false);
  const { mode, subNavVisible, setSubNavVisible } = useMode();
  const { t } = useLanguage();
  const [, navigate] = useLocation();
  useEffect(() => { if (mode === "health") navigate("/"); }, [mode]);
  useEffect(() => { setSubNavVisible(true); }, []);

  const tabs = [t.productPage.tab1, t.productPage.tab2, t.productPage.tab3, t.productPage.tab4];

  const techCards = [
    { icon: techIcons[0], title: t.product.tech1Title, desc: t.product.tech1Desc, points: [t.product.tech1p1, t.product.tech1p2, t.product.tech1p3] },
    { icon: techIcons[2], title: t.product.tech3Title, desc: t.product.tech3Desc, points: [t.product.tech3p1, t.product.tech3p2, t.product.tech3p3] },
  ];

  const safetyCards = [
    { icon: safetyIcons[0], title: t.product.safe1Title, desc: t.product.safe1Desc, points: [t.product.safe1p1, t.product.safe1p2, t.product.safe1p3] },
    { icon: safetyIcons[1], title: t.product.safe2Title, desc: t.product.safe2Desc, points: [t.product.safe2p1, t.product.safe2p2, t.product.safe2p3] },
    { icon: safetyIcons[2], title: t.product.safe3Title, desc: t.product.safe3Desc, points: [t.product.safe3p1, t.product.safe3p2, t.product.safe3p3] },
    { icon: safetyIcons[3], title: t.product.safe4Title, desc: t.product.safe4Desc, points: [t.product.safe4p1, t.product.safe4p2, t.product.safe4p3] },
  ];

  const stages = [
    { id: 1, label: t.product.stage1, status: stageStatuses[0], desc: t.product.stage1d },
    { id: 2, label: t.product.stage2, status: stageStatuses[1], desc: t.product.stage2d },
    { id: 3, label: t.product.stage3, status: stageStatuses[2], desc: t.product.stage3d },
    { id: 4, label: t.product.stage4, status: stageStatuses[3], desc: t.product.stage4d },
    { id: 5, label: t.product.stage5, status: stageStatuses[4], desc: t.product.stage5d },
  ];

  const specRows = [
    [t.product.specInstall, t.product.specInstallDet],
    [t.product.specDim, t.product.specDimDet],
    [t.product.specVolt, t.product.specVoltDet],
    [t.product.specWater, t.product.specWaterDet],
    [t.product.specDrain, t.product.specDrainDet],
    [t.product.specSensor, t.product.specSensorDet],
    [t.product.specIp, t.product.specIpDet],
  ];

  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const showcaseY = useTransform(showcaseProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Layout>
      <div className="bg-anthracite flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* Secondary Nav */}
        <AnimatePresence>
        {subNavVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="sticky top-20 z-40 border-b border-white/8 bg-[#0d0d0d]/95 backdrop-blur-md overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-20">
            <div className="flex items-center gap-8 overflow-x-auto scrollbar-none">
              <button
                data-testid="button-toggle-subnav"
                onClick={() => setSubNavVisible(false)}
                className="flex items-center justify-center w-5 h-5 shrink-0 text-white/38 hover:text-white/70 transition-colors duration-200 text-xl leading-none pb-0.5"
              >
                −
              </button>
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  data-testid={`tab-product-${idx}`}
                  onClick={() => { setActiveTabIndex(idx); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className={`py-4 whitespace-nowrap border-b-2 transition-all duration-200 ${
                    activeTabIndex === idx
                      ? "border-white text-white text-sm font-bold"
                      : "border-transparent text-white/48 hover:text-white/70 text-sm font-normal"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        )}
        </AnimatePresence>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="max-w-7xl mx-auto px-4 md:px-20 py-16"
          >

            {/* TECHNOLOGY */}
            {activeTabIndex === 0 && (
              <div className="space-y-24">

                {/* Header */}
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.product.techTitle}</h2>
                  <p className="text-white/58 font-light leading-relaxed">{t.product.techDesc}</p>
                </div>

                {/* SECTION 1 — HERO VISUAL: split text + image */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
                  {/* Left text — 42% */}
                  <div className="md:w-[42%] flex flex-col justify-center gap-8">
                    <div className="space-y-4">
                      <p className="text-[11px] tracking-[0.22em] uppercase text-white/38 font-medium">{t.product.tech5sub}</p>
                      <h3 className="text-3xl font-extralight text-white leading-snug tracking-tight">
                        {t.product.tech5Title1}<br />
                        <span className="text-white/63">{t.product.tech5Title2}</span>
                      </h3>
                    </div>
                    <p className="text-sm text-white/53 font-light leading-relaxed">
                      {t.product.tech5Desc}
                    </p>
                    <ul className="space-y-3">
                      {[
                        t.product.tech5p1,
                        t.product.tech5p2,
                        t.product.tech5p3,
                        t.product.tech5p4,
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-xs text-white/48 font-light">
                          <div className="w-1 h-1 rounded-full bg-cyan-400/60 shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right image — 58% */}
                  <div className="md:w-[58%] overflow-hidden rounded-2xl relative h-[400px] md:h-[520px]">
                    <motion.img
                      src={plantsImg}
                      alt="ablute_ — integração arquitetónica com parede verde"
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{ scale: [1.02, 1.05, 1.02] }}
                      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                    {/* Micro-interaction labels */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {["< 1L por ciclo", "Limpeza autónoma", "Sensing integrado"].map((label) => (
                        <span
                          key={label}
                          className="text-[10px] px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-white/65 font-light tracking-wide"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* TECH CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techCards.map((card, i) => (
                    <div key={i} className="border border-white/8 rounded-2xl p-8 hover:border-white/16 transition-all duration-300 bg-white/[0.02]">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                          <card.icon className="w-5 h-5 text-blue-300/80" />
                        </div>
                        <h3 className="text-lg font-light text-white pt-1">{card.title}</h3>
                      </div>
                      <p className="text-white/53 text-sm font-light leading-relaxed mb-5">{card.desc}</p>
                      <ul className="space-y-2">
                        {card.points.filter(p => p).map((p, j) => {
                          const parts = p.split(/(\*\*[^*]+\*\*)/g);
                          return (
                            <li key={j} className="flex items-center gap-2.5 text-xs text-white/43 font-normal">
                              <div className="w-1 h-1 rounded-full bg-cyan-400/60 shrink-0" />
                              {parts.map((part, k) =>
                                part.startsWith("**") && part.endsWith("**")
                                  ? <strong key={k} className="text-white/70">{part.slice(2, -2)}</strong>
                                  : part
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* SECTION 2 — DESIGN GALLERY: clean 2-image grid */}
                <div className="space-y-8">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-light text-white mb-3">{t.product.tech6Title}</h3>
                    <p className="text-sm text-white/53 font-light leading-relaxed">
                      {t.product.tech6Desc}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { src: wcRoomImg, label: t.product.tech6tag2, caption: t.product.tech6tag1 },
                      { src: marbleImg, label: t.product.tech6tag4, caption: t.product.tech6tag3 },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="group relative h-[300px] md:h-[360px] rounded-2xl overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-[10px] text-white/50 tracking-widest uppercase font-medium mb-1">{item.caption}</p>
                          <p className="text-sm text-white/80 font-light">{item.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* SECTION 3 — ARCHITECTURAL SHOWCASE */}

                {/* Mobile: 16:9 horizontal image, tap to open lightbox */}
                <div className="md:hidden space-y-3">
                  <button
                    data-testid="button-interior-lightbox-mobile"
                    onClick={() => setImgLightboxOpen(true)}
                    className="group relative w-full overflow-hidden rounded-2xl cursor-zoom-in block"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <img
                      src={marbleImg}
                      alt="ablute_ — ambiente residencial de luxo"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M1 1h6M1 1v6M15 15H9M15 15V9"/><line x1="1" y1="1" x2="7" y2="7" strokeWidth="1.5" stroke="white"/><line x1="15" y1="15" x2="9" y2="9" strokeWidth="1.5" stroke="white"/></svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[10px] text-white/50 tracking-widest uppercase font-medium mb-1">Produto</p>
                      <p className="text-sm text-white/80 font-light">Integrado na arquitetura</p>
                    </div>
                  </button>
                  <p className="text-[10px] text-white/30 text-center tracking-wide">Toque para ampliar</p>
                </div>

                {/* Desktop: full-width bleed parallax */}
                <div ref={showcaseRef} className="hidden md:block -mx-4 md:-mx-20 relative overflow-hidden cursor-zoom-in" style={{ height: "75vh" }} onClick={() => setImgLightboxOpen(true)}>
                  <motion.img
                    src={marbleImg}
                    alt="ablute_ — ambiente residencial de luxo"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ y: showcaseY }}
                  />
                  <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 pointer-events-none" />
                  <motion.div
                    className="absolute bottom-12 left-6 md:left-20 max-w-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-[10px] tracking-[0.22em] uppercase text-white/43 font-medium mb-3">{t.product.tech7sub}</p>
                    <h3 className="text-2xl font-extralight text-white mb-3 leading-snug">{t.product.tech7Title}</h3>
                    <p className="text-sm text-white/53 font-light leading-relaxed">
                      {t.product.tech7Desc}
                    </p>
                  </motion.div>
                </div>

                {/* SECTION 4 — VIDEO BLOCK */}
                <div className="space-y-6">
                  <div className="max-w-2xl">
                    <p className="text-[10px] tracking-[0.22em] uppercase text-white/38 font-medium mb-3">{t.product.tech8sub}</p>
                    <h3 className="text-2xl font-light text-white mb-3">{t.product.tech8Title}</h3>
                    <p className="text-sm text-white/53 font-light leading-relaxed">
                      {t.product.tech8Desc}
                    </p>
                  </div>
                  <button
                    data-testid="button-open-video"
                    onClick={() => setVideoOpen(true)}
                    className="group relative w-full overflow-hidden rounded-2xl cursor-pointer block"
                    style={{ aspectRatio: "9/16", maxHeight: "70vh" }}
                  >
                    <img
                      src="/video/ablute_thumb.jpg"
                      alt="ablute_ — produto em contexto real"
                      className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/15 border border-white/35 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1.5">
                          <polygon points="5,3 19,12 5,21"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-transparent">
                      <p className="text-[10px] text-white/50 tracking-widest uppercase font-medium mb-1">Vídeo · ablute_</p>
                      <p className="text-sm text-white/80 font-light">{t.product.tech8tag}</p>
                    </div>
                  </button>
                </div>

              </div>
            )}

            {/* PRODUCT SHEET */}
            {activeTabIndex === 1 && (
              <div className="space-y-16">

                {/* Header + drawing + specs */}
                <div className="space-y-10">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-light text-white mb-3">{t.product.sheetTitle}</h2>
                    <p className="text-white/58 font-light leading-relaxed">{t.product.sheetDesc}</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Technical drawing */}
                    <div className="w-full md:w-[380px] shrink-0 border border-white/10 rounded-2xl overflow-hidden bg-white flex flex-col">
                      <div className="px-5 py-3 border-b border-white/10 bg-white">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-black/30 font-medium">{t.product.sheetDrawing}</span>
                      </div>
                      <div className="flex-1 bg-white flex items-center justify-center p-4">
                        <img
                          src={technicalDrawingImg}
                          alt="ablute_ technical drawing"
                          className="w-full h-auto object-contain"
                          data-testid="img-technical-drawing"
                        />
                      </div>
                    </div>
                    {/* Specs + download */}
                    <div className="space-y-6 flex-1">
                      <div className="space-y-0">
                        {specRows.map(([k, v]) => (
                          <div key={k} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3.5 border-b border-white/6 gap-1">
                            <span className="text-xs tracking-wide uppercase text-white/38 font-medium shrink-0">{k}</span>
                            <span className="text-sm text-white/70 font-light sm:text-right">{v}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        data-testid="button-download-spec"
                        href="/docs/ablute_installation_guide_EN.pdf"
                        download="ablute_installation_guide_EN.pdf"
                        onClick={playDownloadClick}
                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-all"
                      >
                        <ChevronDown className="w-4 h-4 text-cyan-400" />
                        {t.product.sheetDownload}
                      </a>
                      <p className="text-xs text-white/33 font-light">{t.product.sheetVersion}</p>
                      <p className="text-xs text-white/28 font-light">
                        {t.product.sheetLangNote}{" "}
                        <a href="mailto:client@ablute.pt" className="text-white/43 hover:text-white/60 transition-colors underline underline-offset-2">
                          client@ablute.pt
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/6" />

                {/* Installation Guide section */}
                <div className="space-y-10">
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-light text-white mb-3">{t.product.installGuideTitle}</h3>
                    <p className="text-white/53 font-light leading-relaxed text-sm">{t.product.installGuideDesc}</p>
                  </div>

                  {/* 5 guide steps + image side-by-side */}
                  <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Steps */}
                    <div className="flex-1 space-y-0">
                      {[
                        [t.product.installStep1Title, t.product.installStep1Desc],
                        [t.product.installStep2Title, t.product.installStep2Desc],
                        [t.product.installStep3Title, t.product.installStep3Desc],
                        [t.product.installStep4Title, t.product.installStep4Desc],
                        [t.product.installStep5Title, t.product.installStep5Desc],
                      ].map(([title, desc], i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ delay: i * 0.07 }}
                          className="flex gap-5 py-5 border-b border-white/6 group"
                        >
                          <div className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-cyan-400/40 transition-colors duration-300">
                            <span className="text-[10px] font-mono text-white/38 group-hover:text-cyan-400/70 transition-colors duration-300">{i + 1}</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white/75 mb-1.5 group-hover:text-white transition-colors duration-300">{title}</h4>
                            <p className="text-xs text-white/43 font-light leading-relaxed group-hover:text-white/58 transition-colors duration-300">{desc}</p>
                          </div>
                        </motion.div>
                      ))}

                      {/* Guide download */}
                      <div className="pt-6">
                        <a
                          data-testid="button-download-guide"
                          href="/docs/ablute_installation_guide_EN.pdf"
                          download="ablute_installation_guide_EN.pdf"
                          onClick={playDownloadClick}
                          className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/15 text-white/65 text-sm font-medium hover:border-white/35 hover:text-white hover:bg-white/[0.07] transition-all"
                        >
                          <ChevronDown className="w-4 h-4 text-cyan-400" />
                          {t.product.installGuideDownload}
                        </a>
                        <p className="mt-3 text-xs text-white/26 font-light">
                          {t.product.sheetLangNote}{" "}
                          <a href="mailto:client@ablute.pt" className="text-white/36 hover:text-white/63 transition-colors underline underline-offset-2">
                            client@ablute.pt
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Subtle image — right side, desktop only */}
                    <div className="hidden lg:block lg:w-[280px] xl:w-[320px] shrink-0 sticky top-28 self-start" style={{ height: "520px" }}>
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <img
                          src={plantsImg}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover object-top opacity-35"
                        />
                        {/* Left edge fade */}
                        <div className="absolute inset-y-0 left-0 w-20 pointer-events-none" style={{ background: "linear-gradient(to right, #0e0e0e, transparent)" }} />
                        {/* Top fade */}
                        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, #0e0e0e, transparent)" }} />
                        {/* Bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" style={{ background: "linear-gradient(to top, #0e0e0e, transparent)" }} />
                        {/* Subtle cyan base glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(0,200,255,0.06), transparent)" }} />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* SAFETY & COMPLIANCE */}
            {activeTabIndex === 2 && (
              <div className="space-y-16">
                <div className="flex items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-light text-white mb-3">{t.product.safetyTitle}</h2>
                    <p className="text-white/58 font-light leading-relaxed">{t.product.safetyDesc}</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2.5 border border-emerald-400/25 bg-emerald-500/8 rounded-2xl px-4 py-3">
                    <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-light text-emerald-300 whitespace-nowrap">Garantia pós-venda de 5 anos</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {safetyCards.map((card, i) => (
                    <div key={i} className="border border-white/8 rounded-2xl p-8 hover:border-white/16 transition-all duration-300 bg-white/[0.02]">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                          <card.icon className="w-5 h-5 text-emerald-300/80" />
                        </div>
                        <h3 className="text-lg font-light text-white pt-1">{card.title}</h3>
                      </div>
                      <p className="text-white/53 text-sm font-light leading-relaxed mb-5">{card.desc}</p>
                      <ul className="space-y-2">
                        {card.points.map((p, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-xs text-white/43 font-normal">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400/50 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 p-5 rounded-xl border border-amber-400/15 bg-amber-400/5 max-w-2xl">
                  <AlertTriangle className="w-4 h-4 text-amber-400/60 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/43 font-light leading-relaxed">{t.product.safetyNote}</p>
                </div>
              </div>
            )}

            {/* DEVELOPMENT STAGES */}
            {activeTabIndex === 3 && (
              <div className="space-y-10">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.product.stagesTitle}</h2>
                  <p className="text-white/58 font-light leading-relaxed">{t.product.stagesDesc}</p>
                </div>

                {/* All stages — single grid */}
                <div className="grid md:grid-cols-[1fr_320px] gap-8 items-start">
                  <div className="relative space-y-4">
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-white/8 hidden md:block" />
                    {stages.slice(0, 2).map((stage, i) => (
                      <motion.div
                        key={stage.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="relative flex items-start gap-6 p-6 rounded-2xl border border-white/8 bg-white/[0.02]"
                      >
                        <div className="relative shrink-0">
                          <div className="w-10 h-10 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 flex items-center justify-center text-sm font-light">
                            {i + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-light text-white mb-2">{stage.label}</h3>
                          <p className="text-sm text-white/48 font-light leading-relaxed">{stage.desc}</p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Mobile video block */}
                    <div className="md:hidden">
                      <button
                        onClick={() => setPilotOpen(true)}
                        className="relative w-full rounded-xl overflow-hidden bg-black border border-blue-400/20 group"
                        style={{ aspectRatio: "16/9" }}
                        data-testid="button-pilot-video-mobile"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-slate-900/80 to-black" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <div className="w-12 h-12 rounded-full border border-white/30 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">Reproduzir</span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-[9px] tracking-[0.16em] uppercase text-white/35 font-light">Registo real de demonstração piloto</p>
                        </div>
                      </button>
                    </div>

                    {/* Stage 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 * 0.08 }}
                      className="relative flex items-start gap-6 p-6 rounded-2xl border border-white/8 bg-white/[0.02]"
                    >
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 flex items-center justify-center text-sm font-light">
                          {stages[2].id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-light text-white mb-2">{stages[2].label}</h3>
                        <p className="text-sm text-white/48 font-light leading-relaxed">{stages[2].desc}</p>
                      </div>
                    </motion.div>

                    {/* Stage 4 */}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3 * 0.08 }}
                      className="relative flex items-start gap-6 p-6 rounded-2xl border border-white/8 bg-white/[0.02]"
                    >
                      <div className="relative shrink-0">
                        <motion.div
                          className="absolute -inset-1.5 rounded-full"
                          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 70%)" }}
                          animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.85, 1.15, 0.85] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="relative w-10 h-10 rounded-full border border-blue-400/60 bg-blue-500/15 text-blue-200 flex items-center justify-center text-sm font-light">
                          {stages[3].id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-2 mb-2">
                          <h3 className="text-base font-light text-white">{stages[3].label}</h3>
                          <span className="inline-flex items-center text-[10px] tracking-[0.12em] uppercase font-light text-cyan-400/70 border border-cyan-400/25 rounded-full px-2.5 py-0.5">
                            {t.product.stage4e}
                          </span>
                        </div>
                        <p className="text-sm text-white/48 font-light leading-relaxed">{stages[3].desc}</p>
                      </div>
                    </motion.div>

                    {/* Stage 5 */}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 4 * 0.08 }}
                      className="relative flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-transparent opacity-45"
                    >
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full border border-white/15 text-white/33 flex items-center justify-center text-sm font-light">
                          {stages[4].id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-light text-white mb-2">{stages[4].label}</h3>
                        <p className="text-sm text-white/48 font-light leading-relaxed">{stages[4].desc}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* RIGHT: pilot video */}
                  <div className="hidden md:flex flex-col items-center justify-start pt-[260px] space-y-3">
                    <div style={{ width: "60%" }}>
                      <button
                        onClick={() => setPilotOpen(true)}
                        className="relative w-full rounded-xl overflow-hidden bg-black border border-blue-400/20 group cursor-pointer"
                        style={{ aspectRatio: "4/3" }}
                        data-testid="button-pilot-video-desktop"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-slate-900/85 to-black" />
                        <div className="absolute inset-0 opacity-8" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <motion.div
                            className="w-10 h-10 rounded-full border border-white/30 bg-white/8 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/16 group-hover:border-white/50 transition-all duration-300"
                            whileHover={{ scale: 1.08 }}
                          >
                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </motion.div>
                          <div className="text-center px-1">
                            <p className="text-[9px] font-light text-white/70 tracking-wide">{t.product.PilotVidTitle}</p>
                          </div>
                        </div>
                        <div className="absolute top-1.5 left-1.5">
                          <span className="inline-flex items-center gap-1 text-[7px] tracking-[0.12em] uppercase font-medium text-blue-300/70 border border-blue-400/20 rounded-full px-1.5 py-0.5 bg-blue-500/10 backdrop-blur-sm">
                            Fórum Braga 2024/25
                            <motion.span
                              className="w-1 h-1 rounded-full bg-cyan-400 inline-block"
                              animate={{ opacity: [1, 0.15, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-[7px] tracking-[0.14em] uppercase text-white/38 font-light"> {t.product.PilotVidtag1}</p>
                        </div>
                      </button>
                      <p className="text-[9px] text-white/25 font-light leading-relaxed px-0.5 mt-2">
                        {t.product.PilotVidtag2}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-sm"
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                data-testid="button-close-video-modal"
                onClick={() => setVideoOpen(false)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm tracking-widest uppercase font-light transition-colors"
              >
                Fechar ✕
              </button>
              <div className="overflow-hidden rounded-2xl bg-black shadow-2xl" style={{ aspectRatio: "1080/1096" }}>
                <video
                  src={import.meta.env.VITE_VIDEO_HERO_URL || "/video/ablute_hero.mp4"}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <p className="mt-3 text-[9px] text-white/25 text-center tracking-wider">
                Música: SoundHelix — CC Attribution 3.0 · T. Schürger
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PILOT VIDEO MODAL */}
      <AnimatePresence>
        {pilotOpen && (
          <motion.div
            className="fixed inset-0 z-[201] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPilotOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                data-testid="button-close-pilot-modal"
                onClick={() => setPilotOpen(false)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm tracking-widest uppercase font-light transition-colors"
              >
                Fechar ✕
              </button>
              <div className="overflow-hidden rounded-2xl bg-black shadow-2xl" style={{ aspectRatio: "16/9" }}>
                <video
                  src={import.meta.env.VITE_VIDEO_PILOT_URL || "/api/stream/ablute_pilot.mp4"}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-[9px] text-white/25 text-center tracking-wider">
                Registo real de demonstração piloto · Fase 3 — Não é footage comercial final
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {imgLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImgLightboxOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                data-testid="button-close-img-lightbox"
                onClick={() => setImgLightboxOpen(false)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm tracking-widest uppercase font-light transition-colors"
              >
                Fechar ✕
              </button>
              <img
                src={marbleImg}
                alt="ablute_ — ambiente residencial de luxo"
                className="w-full h-auto rounded-2xl object-contain shadow-2xl"
                style={{ maxHeight: "85vh" }}
              />
              <p className="mt-3 text-[10px] text-white/30 text-center tracking-wide">
                Suite residencial de luxo — ablute_
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </Layout>
  );
}
