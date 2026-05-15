import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import {
  Activity, Zap, Microscope, Heart, ChevronRight, FlaskConical, Brain,
  ShieldCheck, Users, Building2, Stethoscope, TrendingUp, Droplets,
  Dna, BarChart3, Lock, Mail, ArrowRight, CheckCircle2, Leaf, Clock, Star
} from "lucide-react";

export default function HealthMode() {
  const { healthTab: activeTab, setHealthTab: setActiveTab } = useMode();
  const { t } = useLanguage();
  const [activeProductTab, setActiveProductTab] = useState<"biosensing" | "ai">("biosensing");
  const [showAppModal, setShowAppModal] = useState(false);
  const [showPilotModal, setShowPilotModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [appForm, setAppForm] = useState({ name: "", email: "" });
  const [pilotForm, setPilotForm] = useState({ institution: "", contact: "", email: "", country: "", type: "" });
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [pilotSubmitted, setPilotSubmitted] = useState(false);

  const tabs: { id: HealthTab; label: string }[] = [
    { id: "product", label: "Produto" },
    { id: "science", label: "Ciência" },
    { id: "forwho", label: "Para Quem" },
    { id: "areas", label: "Áreas" },
    { id: "client", label: "Área Cliente" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f7ff]">


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f4ff] via-[#f0f9ff] to-[#e0f2fe] py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/40 to-teal-200/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-100/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {t.health.badge}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {t.health.h1a}{" "}
                <span className="text-blue-600">{t.health.h1b}</span> {t.health.h1c}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                A <span className="font-semibold text-slate-800">{t.health.brand}</span> é {t.health.desc} <strong>90% de água</strong> e transformando a sua rotina diária em cuidados preventivos de saúde.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  data-testid="button-learn-more"
                  className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-200"
                >
                  {t.health.cta1}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  data-testid="button-view-demo"
                  onClick={() => setShowDemoModal(true)}
                  className="flex items-center gap-2 px-7 py-3.5 bg-white text-slate-700 rounded-full font-bold border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  {t.health.cta2}
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4 border-t border-slate-200">
                {[
                  { value: "90%", label: t.health.statWaterLabel, icon: <Droplets className="w-4 h-4 text-teal-500" /> },
                  { value: "24/7", label: t.health.statMonitorLabel, icon: <Clock className="w-4 h-4 text-blue-500" /> },
                  { value: "0.3L", label: t.health.statFlushLabel, icon: <Leaf className="w-4 h-4 text-green-500" /> },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      {stat.icon}
                      <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                    </div>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Device Mockup with Sphere */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Sphere background */}
              <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-200/60 via-teal-100/40 to-cyan-200/50 blur-sm" />
              <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-white/40 to-blue-100/30 border border-white/60" />

              {/* Device card */}
              <div
                data-testid="device-mockup"
                onClick={() => setShowAppModal(true)}
                className="relative z-10 w-56 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-center text-sm font-bold text-slate-800" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
                  ablute<span className="text-cyan-500">_</span> app
                </p>
                <p className="text-center text-xs font-semibold text-slate-400 mt-1 tracking-wider uppercase">download app</p>

                <div className="mt-4 space-y-2">
                  {[
                    { label: t.health.deviceHydration, value: t.health.deviceHydrationVal, color: "text-teal-600" },
                    { label: t.health.deviceBiomarkers, value: t.health.deviceBiomarkersVal, color: "text-blue-600" },
                    { label: t.health.deviceScore, value: "92/100", color: "text-green-600" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-xs">
                      <span className="text-slate-500">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => setActiveTab("science")}
                className="absolute top-6 right-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg border border-white cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{t.health.badgeEco}</p>
                  <p className="text-xs font-bold text-slate-800">{t.health.badgeEcoVal}</p>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => { setActiveTab("product"); setActiveProductTab("biosensing"); }}
                className="absolute bottom-8 right-2 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg border border-white cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{t.health.badgeHealth}</p>
                  <p className="text-xs font-bold text-slate-800">{t.health.badgeHealthVal}</p>
                </div>
              </motion.div>

              {/* Floating badge 3 - AI */}
              <motion.div
                animate={{ y: [-3, 5, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => { setActiveTab("product"); setActiveProductTab("ai"); }}
                className="absolute top-1/3 left-0 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg border border-white cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-xs font-bold text-slate-800">AI Engine</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {activeTab === "product" && (
            <motion.div key="product" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <ProductTab activeProductTab={activeProductTab} setActiveProductTab={setActiveProductTab} onPilot={() => setShowPilotModal(true)} />
            </motion.div>
          )}
          {activeTab === "science" && (
            <motion.div key="science" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <ScienceTab />
            </motion.div>
          )}
          {activeTab === "forwho" && (
            <motion.div key="forwho" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <ForWhoTab onPilot={() => setShowPilotModal(true)} />
            </motion.div>
          )}
          {activeTab === "areas" && (
            <motion.div key="areas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <AreasTab />
            </motion.div>
          )}
          {activeTab === "client" && (
            <motion.div key="client" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <ClientArea loginForm={loginForm} setLoginForm={setLoginForm} loginError={loginError} setLoginError={setLoginError} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* App Modal */}
      <AnimatePresence>
        {showAppModal && (
          <Modal title={t.health.appModalTitle} onClose={() => { setShowAppModal(false); setAppSubmitted(false); }}>
            {appSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                <p className="font-bold text-slate-800 text-lg">{t.health.appThanks}</p>
                <p className="text-slate-500">{t.health.appThanksDesc}</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <Droplets className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800">{t.health.appModalDesc}</p>
                  <p className="text-sm text-slate-500 mt-1">{t.health.appModalSub}</p>
                </div>
                <div className="space-y-3">
                  <input data-testid="input-app-name" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={t.health.pilotContact} value={appForm.name} onChange={e => setAppForm({ ...appForm, name: e.target.value })} />
                  <input data-testid="input-app-email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" type="email" placeholder={t.health.pilotEmail} value={appForm.email} onChange={e => setAppForm({ ...appForm, email: e.target.value })} />
                </div>
                <button data-testid="button-app-submit" onClick={() => setAppSubmitted(true)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">{t.health.appNotify}</button>
              </div>
            )}
          </Modal>
        )}
      </AnimatePresence>

      {/* Pilot Modal */}
      <AnimatePresence>
        {showPilotModal && (
          <Modal title={t.health.pilotModalTitle} onClose={() => { setShowPilotModal(false); setPilotSubmitted(false); }}>
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
          </Modal>
        )}
      </AnimatePresence>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemoModal && (
          <Modal title={t.health.demoTitle} onClose={() => setShowDemoModal(false)}>
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold text-slate-800">{t.health.demoDesc}</p>
              <p className="text-sm text-slate-500">{t.health.demoSub}</p>
              <button onClick={() => { setShowDemoModal(false); setShowPilotModal(true); }} className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
                {t.health.demoCta}
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl font-bold leading-none">✕</button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function ProductTab({ activeProductTab, setActiveProductTab, onPilot }: { activeProductTab: "biosensing" | "ai"; setActiveProductTab: (tab: "biosensing" | "ai") => void; onPilot: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">{t.health.productTitle}</h2>
        <p className="text-slate-500 max-w-xl mx-auto">{t.health.productDesc}</p>
      </div>

      <div className="flex gap-3 justify-center">
        {([["biosensing", t.health.tabBiosensing, <FlaskConical className="w-4 h-4" />], ["ai", t.health.tabAI, <Brain className="w-4 h-4" />]] as const).map(([id, label, icon]) => (
          <button
            key={id}
            data-testid={`tab-product-${id}`}
            onClick={() => setActiveProductTab(id)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeProductTab === id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-slate-600 border border-slate-200 hover:border-blue-200"}`}
          >
            {icon}{label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeProductTab === "biosensing" ? (
          <motion.div key="biosensing" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Microscope className="w-6 h-6 text-blue-500" />, title: "Tecnologia de Biossensores", desc: "Sensores eletroquímicos integrados na superfície interna analisam a composição da urina em cada utilização, detectando biomarcadores com precisão laboratorial." },
                { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Processamento de Sinal", desc: "Circuitos de baixo consumo convertem sinais bioquímicos em dados digitais em tempo real, com filtragem avançada de interferências." },
                { icon: <Dna className="w-6 h-6 text-teal-500" />, title: "Detecção de Biomarcadores", desc: "Identificação de creatinina, glucose, proteínas, pH, e outros marcadores urinários com algoritmos de compensação de matriz." },
                { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, title: "Grau Laboratorial", desc: "Validado contra métodos laboratoriais convencionais, com precisão e reprodutibilidade equivalentes a análises clínicas." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">{t.health.pilotBanner}</h3>
                <p className="text-blue-100 text-sm">{t.health.pilotBannerSub}</p>
              </div>
              <button data-testid="button-pilot-biosensing" onClick={onPilot} className="px-7 py-3 bg-white text-blue-700 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap">
                {t.health.hostPilot}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="ai" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Brain className="w-6 h-6 text-purple-500" />, title: "Reconhecimento de Padrões", desc: "Modelos de ML detectam alterações subtis nos perfis bioquímicos longitudinais, sinalizando tendências clinicamente relevantes." },
                { icon: <BarChart3 className="w-6 h-6 text-blue-500" />, title: "Interpretação de Dados", desc: "Algoritmos de interpretação contextualizam os dados do utilizador com referências populacionais e dados históricos pessoais." },
                { icon: <TrendingUp className="w-6 h-6 text-green-500" />, title: "Monitorização Longitudinal", desc: "Acompanhamento contínuo da evolução dos biomarcadores ao longo do tempo, gerando tendências de saúde personalizadas." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{t.health.aiFlowTitle}</h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[t.health.aiStep1, "→", t.health.aiStep2, "→", t.health.aiStep3, "→", t.health.aiStep4, "→", t.health.aiStep5].map((step, i) => (
                  <div key={i}>
                    {step === "→" ? (
                      <span className="text-slate-300 font-bold text-xl">{step}</span>
                    ) : (
                      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-sm font-semibold text-blue-700">
                        {step}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScienceTab() {
  const biomarkers = [
    { name: "Creatinina", relevance: "Função Renal", insight: "Indicador da taxa de filtração glomerular; monitorização da função renal.", color: "blue" },
    { name: "Glucose", relevance: "Metabolismo", insight: "Detecção precoce de diabetes e alterações metabólicas.", color: "orange" },
    { name: "Albumina", relevance: "Saúde Renal", insight: "Marcador de lesão glomerular e risco cardiovascular.", color: "teal" },
    { name: "pH Urinário", relevance: "Equilíbrio Ácido-Base", insight: "Reflexo do equilíbrio ácido-base e função renal.", color: "purple" },
    { name: "Nitrites", relevance: "Infeção", insight: "Indicador de infecção urinária bacteriana.", color: "red" },
    { name: "Osmolaridade", relevance: "Hidratação", insight: "Avaliação do estado de hidratação e função concentradora.", color: "green" },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">A Ciência por Detrás da ablute_</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Fundações científicas sólidas em biossensores, biomarcadores urinários e engenharia biomédica.</p>
      </div>

      {/* Biomarkers */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Dna className="w-5 h-5 text-blue-500" /> Biomarcadores & Insights de Saúde</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {biomarkers.map((b) => (
            <div key={b.name} data-testid={`card-biomarker-${b.name}`} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <span className="font-bold text-slate-900">{b.name}</span>
                <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">{b.relevance}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{b.insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-teal-500" /> Investigação & Publicações</h3>
        <div className="space-y-4">
          {[
            { title: "Electrochemical biosensing for continuous urinary biomarker monitoring", journal: "Biosensors and Bioelectronics", year: "2024", type: "Artigo" },
            { title: "Non-invasive point-of-care urine analysis: opportunities and challenges", journal: "Lab on a Chip", year: "2023", type: "Revisão" },
            { title: "Smart toilet technology for preventive health monitoring — ablute_ pilot study", journal: "Nature Digital Medicine", year: "2024", type: "Estudo Piloto" },
          ].map((pub) => (
            <div key={pub.title} className="bg-white rounded-2xl p-5 border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <Microscope className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{pub.title}</h4>
                <p className="text-xs text-slate-400">{pub.journal} · {pub.year}</p>
              </div>
              <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium whitespace-nowrap">{pub.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Users className="w-5 h-5 text-purple-500" /> Conselho Científico Consultivo</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Prof. Dr. João Silva", area: "Engenharia Biomédica", institution: "IST Lisboa", orcid: "0000-0001-XXXX-XXXX" },
            { name: "Prof. Dra. Ana Ferreira", area: "Nefrologia Clínica", institution: "Hospital Santa Maria", orcid: "0000-0002-XXXX-XXXX" },
            { name: "Dr. Carlos Mendes", area: "Biossensores & MEMS", institution: "INESC-MN", orcid: "0000-0003-XXXX-XXXX" },
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mb-3 font-bold text-blue-700">
                {member.name.split(" ").slice(-1)[0][0]}
              </div>
              <h4 className="font-bold text-slate-900">{member.name}</h4>
              <p className="text-sm text-blue-600 font-medium mt-0.5">{member.area}</p>
              <p className="text-xs text-slate-400 mt-0.5">{member.institution}</p>
              <p className="text-xs text-slate-300 mt-1">ORCID: {member.orcid}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ForWhoTab({ onPilot }: { onPilot: () => void }) {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Para Quem é a ablute_?</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Benefícios para utilizadores individuais, profissionais de saúde, centros de bem-estar e seguradoras.</p>
      </div>

      {/* Users */}
      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Users className="w-5 h-5 text-blue-500" /> Utilizadores</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Heart className="w-6 h-6 text-rose-500" />, title: "Monitorização Preventiva", desc: "Acompanhamento passivo da saúde sem alterar rotinas diárias." },
            { icon: <Microscope className="w-6 h-6 text-teal-500" />, title: "Diagnóstico Não-Invasivo", desc: "Análises de saúde sem colheitas de sangue ou visitas ao laboratório." },
            { icon: <TrendingUp className="w-6 h-6 text-blue-500" />, title: "Insights Longitudinais", desc: "Tendências de saúde personalizadas ao longo do tempo." },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-2xl p-5">
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Healthcare Providers */}
      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Stethoscope className="w-5 h-5 text-teal-500" /> Profissionais de Saúde</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Building2 className="w-6 h-6 text-blue-500" />, title: "Hospitais & Clínicas", desc: "Triagem preventiva e monitorização remota de populações de risco." },
            { icon: <Stethoscope className="w-6 h-6 text-teal-500" />, title: "Médicos / Especialistas", desc: "Dados longitudinais de biomarcadores para apoio à decisão clínica." },
            { icon: <Heart className="w-6 h-6 text-rose-500" />, title: "Cuidados Primários", desc: "Rastreio passivo e alertas precoces integrados no registo do paciente." },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-2xl p-5">
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
        <button data-testid="button-request-demo" onClick={onPilot} className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
          Solicitar uma Demo <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Wellness */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Leaf className="w-5 h-5 text-green-500" /> Bem-estar & Saúde Preventiva</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Clínicas de longevidade, centros de fitness e programas de bem-estar corporativo beneficiam de monitorização de stress oxidativo, insights metabólicos e acompanhamento de recuperação.</p>
          <div className="space-y-2">
            {["Clínicas de Longevidade", "Centros de Fitness", "Programas Corporativos de Bem-estar"].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-500" /> Seguradoras</h3>
          <p className="text-slate-500 text-sm leading-relaxed">A monitorização preventiva suporta a estratificação de risco e a promoção de populações mais saudáveis, com potencial de redução de custos clínicos a longo prazo.</p>
          <div className="space-y-2">
            {["Detecção precoce de risco", "Monitorização de saúde populacional", "Programas de saúde preventiva"].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AreasTab() {
  const areas = [
    {
      title: "Saúde Cardiovascular",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      color: "rose",
      focus: "Risco vascular e função cardíaca",
      supports: "Detecção precoce de hipertensão, aterosclerose e insuficiência cardíaca",
      biomarkers: ["Albumina-Creatinina (ACR)", "Microalbuminúria", "BNP urinário"],
    },
    {
      title: "Saúde Renal",
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      color: "blue",
      focus: "Função e integridade renal",
      supports: "Avaliação da taxa de filtração glomerular e detecção de nefropatia crónica",
      biomarkers: ["Creatinina", "Proteína total", "NGAL urinário"],
    },
    {
      title: "Saúde Metabólica",
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      color: "orange",
      focus: "Metabolismo da glucose e lípidos",
      supports: "Rastreio de diabetes, pré-diabetes e dislipidémia",
      biomarkers: ["Glucose", "Corpos cetónicos", "Ácido úrico"],
    },
    {
      title: "Longevidade & Envelhecimento Saudável",
      icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
      color: "teal",
      focus: "Biomarcadores do envelhecimento",
      supports: "Monitorização de stress oxidativo, função mitocondrial e inflamação crónica",
      biomarkers: ["8-OHdG", "Isoprostanos", "Osmolaridade urinária"],
    },
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Áreas Fisiológicas Monitorizadas</h2>
        <p className="text-slate-500 max-w-xl mx-auto">A ablute_ gera insights baseados em biomarcadores em múltiplos sistemas fisiológicos.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((area) => (
          <div key={area.title} data-testid={`card-area-${area.title}`} className="bg-white rounded-3xl border border-slate-100 p-7 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">{area.icon}</div>
              <h3 className="text-lg font-bold text-slate-900">{area.title}</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Foco</p>
                <p className="text-sm text-slate-700 font-medium">{area.focus}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">O que suporta</p>
                <p className="text-sm text-slate-500">{area.supports}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Biomarcadores exemplo</p>
                <div className="flex flex-wrap gap-2">
                  {area.biomarkers.map(b => (
                    <span key={b} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientArea({ loginForm, setLoginForm, loginError, setLoginError }: {
  loginForm: { username: string; password: string };
  setLoginForm: (f: { username: string; password: string }) => void;
  loginError: boolean;
  setLoginError: (v: boolean) => void;
}) {
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError(true);
  }

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-10 w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Área Cliente</h2>
          <p className="text-sm text-slate-400">Acesso reservado a parceiros e utilizadores ablute_.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            data-testid="input-username"
            type="text"
            placeholder="Utilizador"
            value={loginForm.username}
            onChange={e => { setLoginForm({ ...loginForm, username: e.target.value }); setLoginError(false); }}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <input
            data-testid="input-password"
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={e => { setLoginForm({ ...loginForm, password: e.target.value }); setLoginError(false); }}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none"
          />
          {loginError && (
            <p data-testid="text-login-error" className="text-red-500 text-sm font-medium text-center">
              Utilizador ou password inválidos
            </p>
          )}
          <button data-testid="button-login" type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
            Entrar
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
          <Mail className="w-3.5 h-3.5" /> Sem acesso? <a href="mailto:hello@ablute.com" className="text-blue-500 hover:underline">Contacte-nos</a>
        </p>
      </div>
    </div>
  );
}
