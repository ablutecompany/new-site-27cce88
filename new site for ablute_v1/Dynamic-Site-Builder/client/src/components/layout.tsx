import { ReactNode, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CreatePostDialog } from "./create-post-dialog";
import { FloatingMenu } from "./floating-menu";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Globe } from "lucide-react";
import { useMode, HealthTab } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import { Lang } from "@/i18n/translations";

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "pt", label: "Português (Portugal)" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "ar", label: "العربية" },
];

export function Layout({ children }: { children: ReactNode }) {
  const { mode, setMode, healthTab, setHealthTab, subNavVisible, setSubNavVisible } = useMode();
  const { lang, setLang, t } = useLanguage();
  const [, navigate] = useLocation();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isPilotOpen, setIsPilotOpen] = useState(false);
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [pilotForm, setPilotForm] = useState({ institution: "", contact: "", email: "", country: "", type: "" });
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-10">
              <Link href="/" className="flex items-center gap-1">
                <span style={{ fontFamily: 'Comfortaa, sans-serif' }} className={`text-2xl font-bold transition-colors duration-500 ${mode === "bathroom" ? "text-white" : "text-slate-900"}`}>
                  ablute<span className="text-cyan-400">_</span>
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-8">
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
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
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
                      onClick={() => { setHealthTab(item.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className={`text-sm font-medium transition-colors duration-300 ${
                        healthTab === item.id
                          ? "text-slate-900"
                          : "text-slate-400 hover:text-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))
                )}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {/* Language selector */}
              <div ref={langRef} className="relative">
                <button
                  data-testid="button-language-selector"
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    mode === "bathroom"
                      ? "text-white/45 hover:text-white/80 hover:bg-white/8"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                  title="Select language"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-wide">{lang}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -4 }}
                      transition={{ duration: 0.12 }}
                      className={`absolute right-0 top-full mt-2 rounded-2xl shadow-2xl border overflow-hidden z-[100] min-w-[190px] ${
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
                                ? "text-white/50 hover:bg-white/5 hover:text-white/80"
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
                <span className={`text-[10px] font-medium tracking-widest uppercase ${mode === "bathroom" ? "text-white/30" : "text-slate-400"}`}>{t.mode.label}</span>
                <div className={`flex p-1 rounded-full border transition-colors duration-500 ${
                  mode === "bathroom" ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"
                }`}>
                  <button
                    data-testid="toggle-bathroom-mode"
                    onClick={() => { setMode("bathroom"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
                    onClick={() => { setMode("health"); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
                  <span className="text-[10px] text-white/50">{t.cta.noPayment}</span>
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
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        {children}
      </main>

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
                  <button data-testid="button-pilot-submit" onClick={() => setPilotSubmitted(true)} className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all mt-2">{t.health.pilotSubmit}</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
