import { ReactNode, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CreatePostDialog } from "./create-post-dialog";
import { FloatingMenu } from "./floating-menu";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Globe, Menu, X } from "lucide-react";
import { SensorGrid } from "./sensor-grid";
import { useMode, HealthTab } from "@/context/mode-context";
import { useLanguage } from "@/hooks/use-language";
import { Lang } from "@/i18n/translations";
import prrLogoWhite from "@assets/BARRA_LOGOS_PRR_1772981508125.png";
import norte2030Logo from "@assets/NORTE2030_BarraCofinan_Designacao_Ass_White_2880px_1772983222562.png";
import compete2030Logo from "@assets/BarraAssinaturas_RGBBranco_1772983231237.png";

function playModeChime() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.055, ctx.currentTime + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.78);
    [[880, 0, 0.78], [1320, 0.04, 0.74], [1760, 0.09, 0.60]].forEach(([freq, start, dur]) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      oscGain.gain.setValueAtTime(freq === 880 ? 1 : freq === 1320 ? 0.45 : 0.2, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(gain);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    });
    setTimeout(() => ctx.close(), 1100);
  } catch {
    // Fail silently — never block the UI
  }
}

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
  { code: "ar", label: "AR" },
];

const DELIGHT_MESSAGES: Record<string, string[]> = {
  pt: ["Obrigado, gosto muito de ti.", "Ahaha, isso faz cócegas.", "Estamos juntos — eu acredito em ti.", "Obrigado por estares desse lado.", "Pequenos cliques, grandes futuros.", "Boa escolha.", "Seguimos juntos.", "Há beleza em quem repara nos detalhes.", "Obrigado por tocares no coração da ablute_.", "Tu és dos bons."],
  en: ["Thank you — I really like you too.", "Haha, that tickles.", "We're in this together — I believe in you.", "Thanks for being here.", "Small clicks, big futures.", "Good choice.", "We move forward together.", "There's beauty in people who notice details.", "Thanks for touching the heart of ablute_.", "You're one of the good ones."],
  fr: ["Merci — j'aime beaucoup ça aussi.", "Ha ha, ça chatouille.", "On est ensemble — je crois en toi.", "Merci d'être là.", "Petits clics, grands avenirs.", "Bon choix.", "On avance ensemble.", "Il y a de la beauté en ceux qui remarquent les détails.", "Merci de toucher le cœur d'ablute_.", "Tu es l'un des bons."],
  de: ["Danke — ich mag dich auch sehr.", "Haha, das kitzelt.", "Wir sind gemeinsam — ich glaube an dich.", "Danke, dass du da bist.", "Kleine Klicks, große Zukünfte.", "Gute Wahl.", "Wir gehen gemeinsam vorwärts.", "Es gibt Schönheit in Menschen, die Details bemerken.", "Danke, dass du das Herz von ablute_ berührst.", "Du gehörst zu den Guten."],
  it: ["Grazie — anch'io ti voglio molto bene.", "Haha, fa il solletico.", "Siamo insieme — credo in te.", "Grazie per essere qui.", "Piccoli clic, grandi futuri.", "Buona scelta.", "Andiamo avanti insieme.", "C'è bellezza in chi nota i dettagli.", "Grazie per toccare il cuore di ablute_.", "Sei tra i buoni."],
  ar: ["شكراً لك — أنا أحبك كثيراً أيضاً.", "هاها، هذا يُدغدغ.", "نحن معاً — أنا أؤمن بك.", "شكراً لوجودك هنا.", "نقرات صغيرة، مستقبلات كبيرة.", "اختيار جيد.", "نتقدم معاً.", "هناك جمال في من يلاحظ التفاصيل.", "شكراً لمسّ قلب ablute_.", "أنت من الطيبين."],
};

const SPARK_ANGLES = Array.from({ length: 12 }, (_, i) => ({
  angle: (i / 12) * 360,
  distance: 38 + (i % 3) * 14,
  size: 2.5 + (i % 4) * 0.8,
  color: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#ffffff" : "#93c5fd",
  dur: 0.75 + (i % 4) * 0.12,
  delay: (i % 5) * 0.04,
}));

function SparkParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {SPARK_ANGLES.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const tx = Math.cos(rad) * p.distance;
        const ty = Math.sin(rad) * p.distance;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ opacity: 0, x: tx, y: ty, scale: 0.2 }}
            transition={{ duration: p.dur, delay: p.delay, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
              marginLeft: -p.size / 2,
              marginTop: -p.size / 2,
            }}
          />
        );
      })}
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { mode, setMode, healthTab, setHealthTab, subNavVisible, setSubNavVisible, healthSubTab, setHealthSubTab } = useMode();
  const [prrMenuOpen, setPrrMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const [location, navigate] = useLocation();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [engineeringOpen, setEngineeringOpen] = useState(false);
  const [delightOpen, setDelightOpen] = useState(false);
  const [delightMessage, setDelightMessage] = useState("");
  const logoClickTimesRef = useRef<number[]>([]);
  const singleClickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const delightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPilotOpen, setIsPilotOpen] = useState(false);
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [pilotLoading, setPilotLoading] = useState(false);
  const [pilotForm, setPilotForm] = useState({ institution: "", contact: "", email: "", country: "", type: "" });
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const healthSubTabConfig: Partial<Record<string, { id: string; label: string }[]>> = {
    product: [
      { id: "biosensing", label: t.health.tabBiosensing },
      { id: "biofet", label: t.health.tabBioFET },
      { id: "ai", label: t.health.tabAI },
      { id: "areas-application", label: t.health.tabAreasApplication },
    ],
    science: [
      { id: "research", label: t.health.subResearch },
      { id: "biomarkers", label: t.health.subBiomarkers },
      { id: "evidence", label: t.health.subEvidence },
    ],
    forwho: [
      { id: "providers", label: t.health.subProviders },
      { id: "wellness", label: t.health.subWellness },
      { id: "insurers", label: t.health.subInsurers },
      { id: "rd", label: t.health.subRD },
    ],
  };

  function selectHealthTab(id: string) {
    setHealthTab(id as import("@/context/mode-context").HealthTab);
    const subTabs = healthSubTabConfig[id];
    if (subTabs) {
      if (!subTabs.some(st => st.id === healthSubTab)) {
        setHealthSubTab(subTabs[0].id);
      }
      setSubNavVisible(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (!engineeringOpen) return;
    const t = setTimeout(() => setEngineeringOpen(false), 9000);
    return () => clearTimeout(t);
  }, [engineeringOpen]);

  useEffect(() => {
    return () => {
      if (delightTimerRef.current) clearTimeout(delightTimerRef.current);
      if (singleClickTimerRef.current) clearTimeout(singleClickTimerRef.current);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      mode === "bathroom"
        ? "bg-anthracite text-white"
        : "bg-[#f8fafc] text-slate-900"
    }`}>
      <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-500 ${
        mode === "bathroom" ? "border-white/5" : "border-slate-200 bg-white/80"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 lg:h-20">

            {/* Left — logo + desktop nav */}
            <div className="flex items-center gap-10 flex-1">
              <Link
                href="/"
                className="flex items-center gap-1"
                onClick={() => {
                  if (mode === "bathroom" && location === "/") {
                    const now = Date.now();
                    logoClickTimesRef.current = logoClickTimesRef.current.filter(ts => now - ts < 1200);
                    logoClickTimesRef.current.push(now);
                    const count = logoClickTimesRef.current.length;
                    if (count >= 5) {
                      logoClickTimesRef.current = [];
                      if (singleClickTimerRef.current) clearTimeout(singleClickTimerRef.current);
                      setEngineeringOpen(o => !o);
                    } else if (count === 1) {
                      if (singleClickTimerRef.current) clearTimeout(singleClickTimerRef.current);
                      singleClickTimerRef.current = setTimeout(() => {
                        if (logoClickTimesRef.current.length === 1 && !delightOpen) {
                          logoClickTimesRef.current = [];
                          const msgs = DELIGHT_MESSAGES[lang] ?? DELIGHT_MESSAGES["en"];
                          setDelightMessage(msgs[Math.floor(Math.random() * msgs.length)]);
                          setDelightOpen(true);
                          if (delightTimerRef.current) clearTimeout(delightTimerRef.current);
                          delightTimerRef.current = setTimeout(() => {
                            setDelightOpen(false);
                            setTimeout(() => window.location.reload(), 350);
                          }, 2200);
                        }
                      }, 320);
                    } else {
                      if (singleClickTimerRef.current) clearTimeout(singleClickTimerRef.current);
                    }
                  }
                  if (mode === "health") {
                    setHealthTab("home");
                  }
                }}
              >
                <span dir="ltr" style={{ fontFamily: 'Comfortaa, sans-serif' }} className={`text-2xl font-bold transition-colors duration-500 ${mode === "bathroom" ? "text-white" : "text-slate-900"}`}>
                  ablute<span className="text-cyan-400">_</span>
                </span>
              </Link>

              <nav className="hidden lg:flex items-center gap-8">
                {mode === "bathroom" ? (
                  <>
                    {[
                      { label: t.nav.product, href: "/product" },
                      { label: t.nav.company, href: "/company" },
                      { label: t.nav.projects, href: "/projects" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`font-medium transition-colors duration-300 ${
                          location === item.href
                            ? "text-[15px] font-bold text-white"
                            : "text-sm text-white/63 hover:text-white"
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  ([
                    { id: "product" as HealthTab, label: t.health.tabProduct },
                    { id: "science" as HealthTab, label: t.health.tabScience },
                    { id: "forwho" as HealthTab, label: t.health.tabForWho },
                  ]).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => selectHealthTab(item.id)}
                      className={`transition-colors duration-300 pb-0.5 border-b-2 ${
                        healthTab === item.id
                          ? "text-[15px] font-bold text-slate-900 border-blue-600"
                          : "text-sm font-medium text-slate-400 hover:text-slate-700 border-transparent"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))
                )}
              </nav>
            </div>

            {/* Right — toggle (mobile) + hamburger (mobile) + desktop controls */}
            <div className="flex-1 flex justify-end items-center gap-3">

            {/* Bathroom / Health toggle (mobile only) — reduced size for visual balance */}
            <div className={`flex lg:hidden p-[3px] rounded-full border transition-colors duration-500 ${
              mode === "bathroom" ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"
            }`}>
              <button
                data-testid="toggle-bathroom-mode-mobile"
                onClick={() => { playModeChime(); setMode("bathroom"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`px-2.5 py-[3px] rounded-full text-[10px] font-medium transition-all ${
                  mode === "bathroom" ? "bg-white text-black shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {t.mode.bathroom}
              </button>
              <button
                data-testid="toggle-health-mode-mobile"
                onClick={() => { playModeChime(); setMode("health"); setHealthTab("home"); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`px-2.5 py-[3px] rounded-full text-[10px] font-medium transition-all ${
                  mode === "health" ? "bg-white text-black shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {t.mode.health}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              data-testid="button-mobile-menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen
                ? <X className={`w-5 h-5 ${mode === "bathroom" ? "text-white" : "text-slate-800"}`} />
                : (
                  <motion.span
                    animate={{
                      color: mode === "bathroom"
                        ? ["rgba(255,255,255,0.5)", "rgba(255,255,255,1)", "rgba(255,255,255,0.5)"]
                        : ["rgba(30,41,59,0.7)", "rgba(30,41,59,1)", "rgba(30,41,59,0.7)"],
                    }}
                    transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 3.3, ease: "easeInOut" }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )
              }
            </button>

            <div className="hidden lg:flex items-center gap-4">
              {/* Language selector */}
              <div ref={langRef} className="relative">
                <button
                  data-testid="button-language-selector"
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    mode === "bathroom"
                      ? "text-white/53 hover:text-white/80 hover:bg-white/8"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                  title="Select language"
                >
                  <Globe className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -4 }}
                      transition={{ duration: 0.12 }}
                      className={`absolute right-0 top-full mt-2 rounded-2xl shadow-2xl border overflow-hidden z-[100] min-w-[80px] ${
                        mode === "bathroom"
                          ? "bg-[#111111] border-white/10"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          data-testid={`lang-option-${l.code}`}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${
                            lang === l.code
                              ? mode === "bathroom"
                                ? "bg-white/8 text-white font-medium"
                                : "bg-slate-50 text-slate-900 font-medium"
                              : mode === "bathroom"
                                ? "text-white/58 hover:bg-white/5 hover:text-white/80"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                          }`}
                        >
                          {lang === l.code && <div className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />}
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mode toggle */}
              <div className="flex flex-col items-center gap-1">
                <span className={`text-[10px] font-medium tracking-widest uppercase ${mode === "bathroom" ? "text-white/38" : "text-slate-400"}`}>{t.mode.label}</span>
                <div className={`flex p-1 rounded-full border transition-colors duration-500 ${
                  mode === "bathroom" ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"
                }`}>
                  <button
                    data-testid="toggle-bathroom-mode"
                    onClick={() => { playModeChime(); setMode("bathroom"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      mode === "bathroom"
                        ? "bg-white text-black shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {t.mode.bathroom}
                  </button>
                  <button
                    data-testid="toggle-health-mode"
                    onClick={() => { playModeChime(); setMode("health"); setHealthTab("home"); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      mode === "health"
                        ? "bg-white text-black shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {t.mode.health}
                  </button>
                </div>
              </div>

              {/* CTA button */}
              <div className="flex flex-col items-center gap-1">
                {mode === "bathroom" && (
                  <span className="text-[10px] text-white/58">{t.cta.noPayment}</span>
                )}
                <button
                  data-testid="button-header-cta"
                  onClick={() => mode === "bathroom" ? setIsCreateOpen(true) : setIsPilotOpen(true)}
                  className={`px-7 py-2.5 rounded-full font-bold transition-all duration-300 active:scale-95 text-sm ${
                    mode === "bathroom"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.8)]"
                      : "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                  }`}
                >
                  {mode === "bathroom" ? t.cta.waiting : t.cta.pilot}
                </button>
              </div>
            </div>
            </div>{/* end right flex-1 */}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden overflow-hidden border-t ${
                mode === "bathroom" ? "border-white/10 bg-[#111111]" : "border-slate-200 bg-white"
              }`}
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {/* Nav links */}
                <nav className="flex flex-col gap-1">
                  {mode === "bathroom" ? (
                    <>
                      {[
                        { label: t.nav.product, href: "/product" },
                        { label: t.nav.company, href: "/company" },
                        { label: t.nav.projects, href: "/projects" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`py-2 transition-colors ${location === item.href ? "text-[17px] font-bold text-white" : "text-base font-medium text-white/70 hover:text-white"}`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    ([
                      { id: "product" as HealthTab, label: t.health.tabProduct },
                      { id: "science" as HealthTab, label: t.health.tabScience },
                      { id: "forwho" as HealthTab, label: t.health.tabForWho },
                    ]).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => { selectHealthTab(item.id); setMobileMenuOpen(false); }}
                        className={`py-2 text-left transition-colors ${
                          healthTab === item.id ? "text-[17px] font-bold text-slate-900" : "text-base font-medium text-slate-400 hover:text-slate-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))
                  )}
                </nav>

                <div className={`border-t ${mode === "bathroom" ? "border-white/10" : "border-slate-100"}`} />

                {/* Language selector mobile */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap gap-2">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          lang === l.code
                            ? mode === "bathroom"
                              ? "bg-white/15 text-white"
                              : "bg-slate-900 text-white"
                            : mode === "bathroom"
                              ? "text-white/48 hover:text-white/70"
                              : "text-slate-400 hover:text-slate-700"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA mobile */}
                <button
                  onClick={() => { if (mode === "bathroom") { setIsCreateOpen(true); } else { setIsPilotOpen(true); } setMobileMenuOpen(false); }}
                  className={`w-full py-3 rounded-full font-bold text-sm transition-all ${
                    mode === "bathroom"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {mode === "bathroom" ? t.cta.waiting : t.cta.pilot}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Health Mode Sub-bar — compact strip directly below main nav */}
        <AnimatePresence>
          {mode === "health" && healthSubTabConfig[healthTab] && subNavVisible && (
            <motion.div
              key={healthTab}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden border-t border-slate-200 bg-white/90 backdrop-blur-sm"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center overflow-x-auto scrollbar-none">
                    {healthSubTabConfig[healthTab]!.map((tab) => (
                      <button
                        key={tab.id}
                        data-testid={`subnav-${tab.id}`}
                        onClick={() => { setHealthSubTab(tab.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className={`py-2.5 px-4 whitespace-nowrap border-b-2 transition-all duration-200 ${
                          healthSubTab === tab.id
                            ? "text-[15px] font-bold border-blue-600 text-slate-900"
                            : "text-sm font-medium border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <button
                    data-testid="button-collapse-subnav"
                    onClick={() => setSubNavVisible(false)}
                    className="ml-2 shrink-0 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 text-xl font-light leading-none transition-colors rounded-lg hover:bg-slate-100"
                    aria-label="Collapse sub-navigation"
                  >
                    –
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Engineering Curiosity Panel — logo click on home in Bathroom Mode */}
      <AnimatePresence>
        {engineeringOpen && (
          <>
            <div className="fixed inset-0 z-[145]" onClick={() => setEngineeringOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-[72px] left-4 md:left-8 z-[150] w-[280px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="bg-[#0d0f11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="px-5 pt-4 pb-2 border-b border-white/6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-cyan-400/60 font-medium">Engineering Curiosity</p>
                </div>
                {[
                  { label: "Sensors", desc: "12 non-invasive biosensors per unit; 0.02mm precision" },
                  { label: "Hydraulic System", desc: "Passive flow harvesting, zero added consumption" },
                  { label: "Data Processing", desc: "Edge inference in <200ms, fully on-device" },
                  { label: "AI Layer", desc: "Longitudinal biomarker models, updated weekly" },
                ].map((row, i) => (
                  <div key={row.label} className={`px-5 py-3.5 ${i > 0 ? "border-t border-white/5" : ""}`}>
                    <p className="text-xs font-medium text-white/70 mb-0.5">{row.label}</p>
                    <p className="text-[11px] text-white/43 font-light leading-snug">{row.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Delight popup — single logo click on home in Bathroom Mode */}
      <AnimatePresence>
        {delightOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-[72px] left-4 md:left-8 z-[155] pointer-events-none"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="relative">
              <SparkParticles />
              <div
                className="bg-[#0c0e10]/96 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 shadow-2xl max-w-[260px]"
                style={{ boxShadow: "0 0 28px rgba(0,180,255,0.07), 0 8px 32px rgba(0,0,0,0.65)" }}
              >
                <p className="text-[10px] tracking-[0.18em] uppercase text-cyan-400/50 font-medium mb-2">ablute_</p>
                <p className="text-sm font-light text-white/80 leading-relaxed">{delightMessage}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sensor grid — fixed faint background on non-home bathroom pages (T002) */}
      {mode === "bathroom" && location !== "/" && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <SensorGrid opacity={0.10} />
        </div>
      )}

      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>

      {/* PRR Institutional Footer — Home and Projects only */}
      {mode === "bathroom" && (location === "/" || location === "/projects") && (
        <footer className="w-full border-t border-white/[0.06]" style={{ background: "#07090a" }}>

          {/* Row 1 — Institutional lockup */}
          <div className="max-w-7xl mx-auto px-4 md:px-20 pt-8 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

              {/* Logos — each opens its project sheet (PRR has two) */}
              <div className="flex items-end gap-6 flex-wrap">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setPrrMenuOpen((v) => !v)}
                    aria-expanded={prrMenuOpen}
                    aria-label="Fichas de projeto PRR"
                    data-testid="button-footer-prr"
                    className="block group"
                  >
                    <img
                      src={prrLogoWhite}
                      alt="PRR — Plano de Recuperação e Resiliência / República Portuguesa / União Europeia — NextGenerationEU"
                      className="h-8 w-auto object-contain object-left transition-opacity duration-200 group-hover:opacity-75"
                      style={{ opacity: 0.52 }}
                    />
                  </button>
                  {prrMenuOpen && (
                    <div className="absolute bottom-full left-0 mb-3 w-72 rounded-xl border border-white/10 bg-[#0d1012] shadow-xl py-2 z-50">
                      {[
                        { label: "HfPT — Health from Portugal (PRR)", href: "/docs/ficha-prr-hfpt.pdf" },
                        { label: "Voucher para Startups — Novos Produtos Verdes e Digitais (PRR)", href: "/docs/ficha-prr-voucher-startups.pdf" },
                      ].map((d) => (
                        <a
                          key={d.href}
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setPrrMenuOpen(false)}
                          className="block px-4 py-2.5 text-[11px] leading-snug text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {d.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a href="/docs/ficha-norte2030.pdf" target="_blank" rel="noopener noreferrer" data-testid="link-footer-norte2030" className="block group">
                  <img
                    src={norte2030Logo}
                    alt="NORTE2030 — Programa Regional do Norte / Portugal 2030 / Cofinanciado pela União Europeia"
                    className="h-8 w-auto object-contain object-left transition-opacity duration-200 group-hover:opacity-75"
                    style={{ opacity: 0.52 }}
                  />
                </a>
                <Link href="/projects">
                  <img
                    src={compete2030Logo}
                    alt="COMPETE 2030 / Portugal 2030 / Cofinanciado pela União Europeia"
                    className="h-6 w-auto object-contain object-left transition-opacity duration-200 hover:opacity-75 cursor-pointer"
                    style={{ opacity: 0.52 }}
                  />
                </Link>
              </div>

              {/* Official link */}
              <a
                href="https://recuperarportugal.gov.pt/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-recuperar-portugal"
                className="text-[10px] tracking-widest uppercase text-white/38 hover:text-white/63 transition-colors duration-200 font-light"
              >
                recuperarportugal.gov.pt&nbsp;↗
              </a>
            </div>
          </div>

          {/* Row 2 — Legal documents */}
          <div className="max-w-7xl mx-auto px-4 md:px-20 pb-7 pt-1">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "Ablute_ Gender Policy", href: "/docs/ablute-gender-policy.pdf" },
                { label: "Termos & Condições", href: "/docs/ablute-termos-condicoes.pdf" },
                { label: "Política de Privacidade", href: "/docs/ablute-politica-privacidade.pdf" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center gap-1.5 text-[10px] tracking-wide text-white/20 hover:text-white/42 transition-colors duration-200 font-light group"
                >
                  <svg className="w-2.5 h-2.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  {label}
                </a>
              ))}
            </div>
          </div>

        </footer>
      )}

      <FloatingMenu />

      <CreatePostDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />

      {/* Pilot Modal for Health Mode */}
      <AnimatePresence>
        {isPilotOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => { setIsPilotOpen(false); setPilotSubmitted(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">{t.health.pilotModalTitle}</h3>
                <button onClick={() => { setIsPilotOpen(false); setPilotSubmitted(false); }} className="text-slate-400 hover:text-slate-600 text-xl font-bold leading-none">✕</button>
              </div>
              {pilotSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                  <p className="font-bold text-slate-800 text-lg">{t.health.pilotSent}</p>
                  <p className="text-slate-500">{t.health.pilotSentDesc}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <input data-testid="input-pilot-institution" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" placeholder={t.health.pilotInstitution} value={pilotForm.institution} onChange={e => setPilotForm({ ...pilotForm, institution: e.target.value })} />
                  <input data-testid="input-pilot-contact" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" placeholder={t.health.pilotContact} value={pilotForm.contact} onChange={e => setPilotForm({ ...pilotForm, contact: e.target.value })} />
                  <input data-testid="input-pilot-email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" type="email" placeholder={t.health.pilotEmail} value={pilotForm.email} onChange={e => setPilotForm({ ...pilotForm, email: e.target.value })} />
                  <input data-testid="input-pilot-country" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" placeholder={t.health.pilotCountry} value={pilotForm.country} onChange={e => setPilotForm({ ...pilotForm, country: e.target.value })} />
                  <select data-testid="select-pilot-type" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none bg-white text-slate-700" value={pilotForm.type} onChange={e => setPilotForm({ ...pilotForm, type: e.target.value })}>
                    <option value="">{t.health.pilotType}</option>
                    <option value="hospital">{t.health.pilotTypeHospital}</option>
                    <option value="clinic">{t.health.pilotTypeClinic}</option>
                    <option value="research">{t.health.pilotTypeResearch}</option>
                    <option value="university">{t.health.pilotTypeUniversity}</option>
                    <option value="wellness">{t.health.pilotTypeWellness}</option>
                  </select>
                  <button data-testid="button-pilot-submit" disabled={pilotLoading} onClick={async () => {
                    if (!pilotForm.institution || !pilotForm.email) return;
                    setPilotLoading(true);
                    try {
                      const res = await fetch("/api/pilot/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(pilotForm) });
                      if (res.ok) setPilotSubmitted(true);
                    } finally { setPilotLoading(false); }
                  }} className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all mt-2 disabled:opacity-60">{pilotLoading ? "…" : t.health.pilotSubmit}</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
