import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/hooks/use-language";
import { getAreasData, type AreaKey, type AreaContent } from "@/i18n/areas-data";
import { getHealthContent } from "@/i18n/health-content";
import {
  Activity, Zap, Microscope, Heart, ChevronRight, FlaskConical, Brain,
  ShieldCheck, Users, Building2, Stethoscope, TrendingUp, TrendingDown, Droplets,
  Dna, BarChart3, ArrowRight, CheckCircle2, Leaf, Clock,
  Star, FileText, BookOpen, Globe, Globe2, Bot, Timer, Cpu, X, Download,
} from "lucide-react";
import chipRealisticSrc from "@assets/chip_bioFET_1772920609977.png";
import assentoSensorialSrc from "@assets/assento_sensorial_ablute__1772966927779.png";
import esquemaBioFetSrc from "@assets/Esquema_1773159363048.png";

const auraWaves = [10, 22, 35, 48, 62, 75, 87];
const auraDots = [
  { x: 8, y: 15 }, { x: 22, y: 42 }, { x: 45, y: 8 }, { x: 67, y: 31 },
  { x: 81, y: 58 }, { x: 14, y: 70 }, { x: 55, y: 82 }, { x: 92, y: 20 },
  { x: 33, y: 55 }, { x: 76, y: 72 }, { x: 50, y: 45 }, { x: 88, y: 88 },
];

function DataAura() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <style>{`@keyframes aura-wave { from { transform: translateX(0%); } to { transform: translateX(20%); } }`}</style>
      {auraWaves.map((top, i) => (
        <div key={i} style={{
          position: "absolute", left: "-20%", width: "140%", top: `${top}%`,
          height: 1, opacity: 0.06,
          background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.7) 25%, rgba(99,210,255,0.9) 50%, rgba(56,189,248,0.7) 75%, transparent 100%)",
          animation: `aura-wave ${20 + i * 5}s linear infinite`,
          animationDelay: `${i * -4}s`,
        }} />
      ))}
      {auraDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`, top: `${dot.y}%`,
            width: 4, height: 4, marginLeft: -2, marginTop: -2,
            background: "rgba(56,189,248,1)",
          }}
          animate={{ opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

export default function HealthMode() {
  const { healthTab, setHealthTab, healthSubTab } = useMode();
  const { t, lang } = useLanguage();
  const hc = getHealthContent(lang);

  const [showAppModal, setShowAppModal] = useState(false);
  const [showPilotModal, setShowPilotModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showBioFetModal, setShowBioFetModal] = useState(false);
  const [showSensingModal, setShowSensingModal] = useState(false);
  const [showScientificUpdatesModal, setShowScientificUpdatesModal] = useState(false);
  const [showGetInvolvedModal, setShowGetInvolvedModal] = useState(false);
  const [appForm, setAppForm] = useState({ name: "", email: "" });
  const [pilotForm, setPilotForm] = useState({ institution: "", contact: "", email: "", country: "", type: "" });
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [scientificInterested, setScientificInterested] = useState(false);
  const [scientificForm, setScientificForm] = useState({ name: "", email: "" });
  const [scientificSubmitted, setScientificSubmitted] = useState(false);
  const [scientificLoading, setScientificLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  const [getInvolvedLoading, setGetInvolvedLoading] = useState(false);
  const [pilotLoading, setPilotLoading] = useState(false);
  const [getInvolvedForm, setGetInvolvedForm] = useState({ name: "", email: "", institution: "", role: "", roleOther: "", subject: "" });
  const [getInvolvedSubmitted, setGetInvolvedSubmitted] = useState(false);
  const [curiousDisabled, setCuriousDisabled] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f7ff]">
      <DataAura />

      <AnimatePresence mode="wait">
        {healthTab === "home" && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <LandingPage
              onNavigate={(tab) => { setHealthTab(tab); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              onAppModal={() => setShowAppModal(true)}
              onPilot={() => setShowPilotModal(true)}
              onAiModal={() => setShowAiModal(true)}
              onBioFetModal={() => setShowBioFetModal(true)}
              onSensingModal={() => setShowSensingModal(true)}
              onScientificUpdates={() => setShowScientificUpdatesModal(true)}
              onGetInvolved={() => { if (!curiousDisabled) setShowGetInvolvedModal(true); }}
              curiousDisabled={curiousDisabled}
            />
          </motion.div>
        )}

        {healthTab === "product" && (
          <motion.div key="product" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {healthSubTab === "areas-application" ? (
              <AreasPage />
            ) : (
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <ProductPage onPilot={() => setShowPilotModal(true)} />
              </div>
            )}
          </motion.div>
        )}

        {healthTab === "science" && (
          <motion.div key="science" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <SciencePage />
          </motion.div>
        )}

        {healthTab === "forwho" && (
          <motion.div key="forwho" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <ForWhoPage onPilot={() => setShowPilotModal(true)} />
          </motion.div>
        )}

      </AnimatePresence>

      {/* App Modal */}
      <AnimatePresence>
        {showAppModal && (
          <Modal title={t.health.appModalTitle} onClose={() => { setShowAppModal(false); setAppSubmitted(false); }}>
            {appSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                <p className="font-bold text-slate-800 text-lg">{t.health.appThanks}</p>
                <p className="text-slate-500 text-sm">{t.health.appThanksDesc}</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-700">{t.health.appModalDesc}</p>
                    <p className="text-xs text-amber-600 mt-0.5">{t.health.appModalSub}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{t.health.appDesc1}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t.health.appDesc2}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t.health.appDesc3}</p>
                <div className="space-y-3 pt-2">
                  <input data-testid="input-app-name" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder="Name" value={appForm.name} onChange={e => setAppForm({ ...appForm, name: e.target.value })} />
                  <input data-testid="input-app-email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" type="email" placeholder="Email" value={appForm.email} onChange={e => setAppForm({ ...appForm, email: e.target.value })} />
                </div>
                <button data-testid="button-app-submit" disabled={appLoading} onClick={async () => {
                  if (!appForm.name || !appForm.email) return;
                  setAppLoading(true);
                  try {
                    const res = await fetch("/api/app-notify/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(appForm) });
                    if (res.ok) setAppSubmitted(true);
                  } finally {
                    setAppLoading(false);
                  }
                }} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-60">{appLoading ? "…" : t.health.appNotify}</button>
              </div>
            )}
          </Modal>
        )}
      </AnimatePresence>

      {/* AI Engine Modal */}
      <AnimatePresence>
        {showAiModal && (
          <Modal title={hc.modals.ai.title} onClose={() => setShowAiModal(false)}>
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.ai.intro1}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.ai.intro2}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest pt-2">{hc.modals.ai.tasksLabel}</p>
              <div className="space-y-3">
                {[
                  { title: hc.modals.ai.task1Title, body: hc.modals.ai.task1Body },
                  { title: hc.modals.ai.task2Title, body: hc.modals.ai.task2Body },
                  { title: hc.modals.ai.task3Title, body: hc.modals.ai.task3Body },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Flow diagram */}
              <div className="flex items-center justify-between gap-1 pt-3 bg-blue-50 rounded-2xl px-4 py-3">
                {[hc.modals.ai.flow1, hc.modals.ai.flow2, hc.modals.ai.flow3, hc.modals.ai.flow4].map((label, i, arr) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-1">
                        {[<Cpu className="w-4 h-4 text-blue-500" />, <Zap className="w-4 h-4 text-teal-500" />, <Brain className="w-4 h-4 text-purple-500" />, <Activity className="w-4 h-4 text-green-500" />][i]}
                      </div>
                      <p className="text-[9px] text-slate-600 font-medium">{label}</p>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-slate-300 shrink-0 -mt-3" />}
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* BioFET Modal */}
      <AnimatePresence>
        {showBioFetModal && (
          <Modal title={hc.modals.bioFet.title} onClose={() => setShowBioFetModal(false)}>
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.bioFet.intro1}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.bioFet.intro2}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest pt-2">{hc.modals.bioFet.advLabel}</p>
              <div className="grid grid-cols-2 gap-2">
                {[hc.modals.bioFet.adv1, hc.modals.bioFet.adv2, hc.modals.bioFet.adv3, hc.modals.bioFet.adv4].map(adv => (
                  <div key={adv} className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1" />
                    <p className="text-xs text-slate-600">{adv}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.bioFet.body3}</p>
              <div className="bg-blue-50 rounded-2xl p-4 text-center">
                <FlaskConical className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-xs text-slate-600 font-medium">{hc.modals.bioFet.caption}</p>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Sensing Platform Modal */}
      <AnimatePresence>
        {showSensingModal && (
          <Modal title={hc.modals.sensing.title} onClose={() => setShowSensingModal(false)}>
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.sensing.intro}</p>
              <div className="space-y-3">
                {[
                  { title: hc.modals.sensing.item1Title, icon: <Heart className="w-4 h-4 text-rose-500" />, body: hc.modals.sensing.item1Body },
                  { title: hc.modals.sensing.item2Title, icon: <Microscope className="w-4 h-4 text-violet-500" />, body: hc.modals.sensing.item2Body },
                  { title: hc.modals.sensing.item3Title, icon: <Globe className="w-4 h-4 text-teal-500" />, body: hc.modals.sensing.item3Body },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 italic">{hc.modals.sensing.note}</p>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Scientific Updates Modal */}
      <AnimatePresence>
        {showScientificUpdatesModal && (
          <Modal title={hc.modals.sciUpdates.title} onClose={() => { setShowScientificUpdatesModal(false); setScientificInterested(false); setScientificSubmitted(false); }}>
            {scientificSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                <p className="font-bold text-slate-800">{hc.modals.sciUpdates.registered}</p>
                <p className="text-slate-500 text-sm">{hc.modals.sciUpdates.registeredDesc}</p>
              </div>
            ) : scientificInterested ? (
              <div className="space-y-4">
                <p className="text-sm text-slate-600">{hc.modals.sciUpdates.formIntro}</p>
                <input className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.modals.getInvolved.namePlaceholder} value={scientificForm.name} onChange={e => setScientificForm({ ...scientificForm, name: e.target.value })} />
                <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.modals.getInvolved.emailPlaceholder} value={scientificForm.email} onChange={e => setScientificForm({ ...scientificForm, email: e.target.value })} />
                <button data-testid="button-scientific-submit" disabled={scientificLoading} onClick={async () => {
                  if (!scientificForm.name || !scientificForm.email) return;
                  setScientificLoading(true);
                  try {
                    const res = await fetch("/api/scientific-alerts/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(scientificForm) });
                    if (res.ok) setScientificSubmitted(true);
                  } finally {
                    setScientificLoading(false);
                  }
                }} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-60">{scientificLoading ? "…" : hc.modals.sciUpdates.formSubmit}</button>
              </div>
            ) : (
              <div className="space-y-5">
                <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.sciUpdates.intro1}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.sciUpdates.intro2}</p>
                <p className="text-sm text-slate-500">{hc.modals.sciUpdates.intro3}</p>
                <p className="text-xs text-slate-400 italic">{hc.modals.sciUpdates.note}</p>
                <div className="flex gap-3 pt-2">
                  <button data-testid="button-scientific-interested" onClick={() => setScientificInterested(true)} className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all uppercase tracking-wider">{hc.modals.sciUpdates.interested}</button>
                  <button onClick={() => setShowScientificUpdatesModal(false)} className="flex-1 py-3 border border-slate-200 text-slate-500 rounded-xl text-sm font-medium hover:border-slate-300 transition-all">{hc.modals.sciUpdates.close}</button>
                </div>
              </div>
            )}
          </Modal>
        )}
      </AnimatePresence>

      {/* Get Involved Modal */}
      <AnimatePresence>
        {showGetInvolvedModal && (
          <Modal title={hc.modals.getInvolved.title} onClose={() => { setShowGetInvolvedModal(false); setGetInvolvedSubmitted(false); }}>
            {getInvolvedSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                <p className="font-bold text-slate-800">{hc.modals.getInvolved.thanks}</p>
                <p className="text-slate-500 text-sm">{hc.modals.getInvolved.thanksDesc}</p>
              </div>
            ) : (
              <div className="space-y-3">
                <input data-testid="input-involved-name" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.modals.getInvolved.namePlaceholder} value={getInvolvedForm.name} onChange={e => setGetInvolvedForm({ ...getInvolvedForm, name: e.target.value })} />
                <input data-testid="input-involved-email" type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.modals.getInvolved.emailPlaceholder} value={getInvolvedForm.email} onChange={e => setGetInvolvedForm({ ...getInvolvedForm, email: e.target.value })} />
                <input data-testid="input-involved-institution" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.modals.getInvolved.institutionPlaceholder} value={getInvolvedForm.institution} onChange={e => setGetInvolvedForm({ ...getInvolvedForm, institution: e.target.value })} />
                <select
                  data-testid="select-involved-role"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none bg-white text-slate-700"
                  value={getInvolvedForm.role}
                  onChange={e => setGetInvolvedForm({ ...getInvolvedForm, role: e.target.value, roleOther: "" })}
                >
                  <option value="">{hc.modals.getInvolved.roleLabel}</option>
                  {[
                    { value: "physician", label: hc.modals.getInvolved.rolePhysician },
                    { value: "healthcare", label: hc.modals.getInvolved.roleHealthcare },
                    { value: "hospital", label: hc.modals.getInvolved.roleHospital },
                    { value: "medical_clinic", label: hc.modals.getInvolved.roleClinic },
                    { value: "research", label: hc.modals.getInvolved.roleResearch },
                    { value: "university", label: hc.modals.getInvolved.roleUniversity },
                    { value: "lab", label: hc.modals.getInvolved.roleLab },
                    { value: "government", label: hc.modals.getInvolved.roleGov },
                    { value: "other_health", label: t.float.invRoleOtherHealth },
                    { value: "curious", label: hc.modals.getInvolved.roleCurious },
                  ].map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
                {getInvolvedForm.role === "other_health" && (
                  <input data-testid="input-involved-role-other" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.modals.getInvolved.roleSpecify} value={getInvolvedForm.roleOther} onChange={e => setGetInvolvedForm({ ...getInvolvedForm, roleOther: e.target.value })} />
                )}
                <input
                  data-testid="input-involved-subject"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none"
                  placeholder={t.float.invSubjectPlaceholder}
                  value={getInvolvedForm.subject}
                  onChange={e => setGetInvolvedForm({ ...getInvolvedForm, subject: e.target.value })}
                />
                {getInvolvedForm.role === "curious" ? (
                  <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed">{hc.modals.getInvolved.curiousText1}</p>
                    <p className="text-sm text-slate-500">{hc.modals.getInvolved.curiousText2}</p>
                    <button data-testid="button-curious-close" onClick={() => { setShowGetInvolvedModal(false); setCuriousDisabled(true); }} className="w-full py-2.5 bg-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-300 transition-all">{hc.modals.getInvolved.curiousClose}</button>
                  </div>
                ) : (
                  <button
                    data-testid="button-involved-submit"
                    disabled={getInvolvedLoading || !getInvolvedForm.name || !getInvolvedForm.email || !getInvolvedForm.role || (getInvolvedForm.role === "other_health" && !getInvolvedForm.roleOther)}
                    onClick={async () => {
                      setGetInvolvedLoading(true);
                      try {
                        const res = await fetch("/api/get-involved/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(getInvolvedForm) });
                        if (res.ok) setGetInvolvedSubmitted(true);
                      } finally { setGetInvolvedLoading(false); }
                    }}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {getInvolvedLoading ? "…" : hc.modals.getInvolved.submitBtn}
                  </button>
                )}
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

/* ─────────────────────────────────────────────
   LANDING PAGE
───────────────────────────────────────────── */
function LandingPage({
  onNavigate, onAppModal, onPilot, onAiModal, onBioFetModal, onSensingModal, onScientificUpdates, onGetInvolved, curiousDisabled,
}: {
  onNavigate: (tab: "product" | "science" | "forwho") => void;
  onAppModal: () => void;
  onPilot: () => void;
  onAiModal: () => void;
  onBioFetModal: () => void;
  onSensingModal: () => void;
  onScientificUpdates: () => void;
  onGetInvolved: () => void;
  curiousDisabled: boolean;
}) {
  const { t } = useLanguage();
  const [activeSat, setActiveSat] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f4ff] via-[#f0f9ff] to-[#e0f2fe] pt-4 pb-12 lg:pt-6 lg:pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/40 to-teal-200/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-100/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {t.health.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {t.health.h1a}{" "}
                <span className="text-blue-600">{t.health.h1b}</span>
              </h1>

              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.22em]">
                {t.health.heroDescriptor}
              </p>

              <div className="space-y-3 max-w-xl">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.health.heroPara1}
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  {t.health.heroPara2}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  data-testid="button-scientific-updates"
                  onClick={onScientificUpdates}
                  className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-200"
                >
                  <BookOpen className="w-4 h-4" />
                  {t.health.heroCta1}
                </button>
                <button
                  data-testid="button-get-involved"
                  onClick={onGetInvolved}
                  disabled={curiousDisabled}
                  className="flex items-center gap-2 px-7 py-3.5 bg-white text-slate-700 rounded-full font-bold border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {t.health.heroCta2}
                </button>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 border-t border-slate-200">
                {[
                  { label: t.health.heroFeat1, sublabel: t.health.heroFeat1Sub, icon: <Bot className="w-4 h-4 text-teal-600" /> },
                  { label: "< 3 Min to Results", sublabel: t.health.heroFeat2Sub, icon: <Timer className="w-4 h-4 text-blue-500" /> },
                  { label: t.health.heroFeat3, sublabel: t.health.heroFeat3Sub, icon: <Cpu className="w-4 h-4 text-indigo-500" /> },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      {stat.icon}
                      <span className="text-sm font-bold text-slate-900">{stat.label}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col gap-6 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center lg:mt-16"
            >
              {/* Background ambient rings — desktop only; on mobile they overflow and clutter the composition */}
              <div className="hidden lg:block lg:absolute w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-200/60 via-teal-100/40 to-cyan-200/50 blur-sm pointer-events-none" />
              <div className="hidden lg:block lg:absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-white/40 to-blue-100/30 border border-white/60 pointer-events-none" />

              {/* Pulsating rings — desktop only */}
              <motion.div
                className="hidden lg:block lg:absolute z-[8] rounded-full border-2 border-blue-300/40 pointer-events-none"
                style={{ width: 248, height: 248 }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="hidden lg:block lg:absolute z-[7] rounded-full border border-blue-200/25 pointer-events-none"
                style={{ width: 288, height: 288 }}
                animate={{ scale: [1, 1.10, 1], opacity: [0.25, 0.08, 0.25] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Mobile-only soft glow — replaces orbital rings with a simple, calm backdrop */}
              <div className="lg:hidden absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-200/50 via-teal-100/25 to-cyan-200/35 blur-3xl pointer-events-none" />

              {/* Center card — ablute_ app */}
              <motion.div
                data-testid="device-mockup"
                onClick={onAppModal}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 w-56 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 cursor-pointer"
                style={{ boxShadow: "0 8px 32px -8px rgba(59,130,246,0.18), 0 2px 8px rgba(0,0,0,0.08)" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/0 to-cyan-50/0 hover:from-blue-50/60 hover:to-cyan-50/40 transition-all duration-300 pointer-events-none" />
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-center text-sm font-bold text-slate-800" style={{ fontFamily: 'Comfortaa, sans-serif' }}>
                  ablute<span className="text-cyan-500">_</span> app
                </p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <style>{`@keyframes shimmer-download{0%{background-position:200% center}100%{background-position:-200% center}}`}</style>
                  <Download className="w-3 h-3 text-cyan-500" />
                  <span
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{
                      background: "linear-gradient(90deg,#3b82f6,#06b6d4,#818cf8,#06b6d4,#3b82f6)",
                      backgroundSize: "200% auto",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      animation: "shimmer-download 2.5s linear infinite",
                    }}
                  >
                    {t.health.appDownload}
                  </span>
                </div>
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
                <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-blue-500 font-semibold">
                  <span>{t.health.appRegister}</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>

              {/* Satellites — mobile only: horizontal row below the card */}
              <div className="lg:hidden mt-4 flex flex-wrap justify-center gap-2">
                {([
                  { id: "ai", category: t.health.satAICategory, label: t.health.satAILabel, icon: <Brain className="w-4 h-4 text-purple-600" />, iconBg: "bg-purple-100", onExplore: onAiModal },
                  { id: "lab", category: t.health.satLabCategory, label: t.health.satLabLabel, icon: <FlaskConical className="w-4 h-4 text-blue-600" />, iconBg: "bg-blue-100", onExplore: onBioFetModal },
                  { id: "bio", category: t.health.satBioCategory, label: t.health.satBioLabel, icon: <Dna className="w-4 h-4 text-teal-600" />, iconBg: "bg-teal-100", onExplore: () => onNavigate("science") },
                ] as const).map((sat) => (
                  <button
                    key={sat.id}
                    data-testid={`satellite-mobile-${sat.id}`}
                    onClick={sat.onExplore}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-md border border-white"
                  >
                    <div className={`w-6 h-6 ${sat.iconBg} rounded-lg flex items-center justify-center`}>
                      {sat.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] text-slate-400 leading-none">{sat.category}</p>
                      <p className="text-[11px] font-bold text-slate-800 leading-snug">{sat.label}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Satellites — translated, data-driven with inline info popovers, desktop only */}
              {([
                {
                  id: "ai",
                  category: t.health.satAICategory,
                  label: t.health.satAILabel,
                  icon: <Brain className="w-4 h-4 text-purple-600" />,
                  iconBg: "bg-purple-100 group-hover:bg-purple-200",
                  pos: "top-4 right-2",
                  popoverSide: "right" as const,
                  animY: [-4, 4, -4] as number[],
                  dur: 3,
                  title: t.health.satAITitle,
                  desc: t.health.satAIDesc,
                  btn: t.health.satAIBtn,
                  onExplore: onAiModal,
                },
                {
                  id: "lab",
                  category: t.health.satLabCategory,
                  label: t.health.satLabLabel,
                  icon: <FlaskConical className="w-4 h-4 text-blue-600" />,
                  iconBg: "bg-blue-100 group-hover:bg-blue-200",
                  pos: "bottom-6 right-0",
                  popoverSide: "right" as const,
                  animY: [4, -4, 4] as number[],
                  dur: 3.5,
                  title: t.health.satLabTitle,
                  desc: t.health.satLabDesc,
                  btn: t.health.satLabBtn,
                  onExplore: onBioFetModal,
                },
                {
                  id: "bio",
                  category: t.health.satBioCategory,
                  label: t.health.satBioLabel,
                  icon: <Dna className="w-4 h-4 text-teal-600" />,
                  iconBg: "bg-teal-100 group-hover:bg-teal-200",
                  pos: "top-1/3 left-0",
                  popoverSide: "left" as const,
                  animY: [-3, 5, -3] as number[],
                  dur: 4,
                  title: t.health.satBioTitle,
                  desc: t.health.satBioDesc,
                  btn: t.health.satBioBtn,
                  onExplore: () => onNavigate("science"),
                },
              ] as const).map((sat) => (
                <div key={sat.id} className={`hidden lg:block absolute ${sat.pos} ${activeSat === sat.id ? 'z-40' : 'z-20'}`}>
                  <motion.div
                    animate={{ y: sat.animY }}
                    transition={{ duration: sat.dur, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <button
                      data-testid={`satellite-${sat.id}`}
                      onClick={() => setActiveSat(activeSat === sat.id ? null : sat.id)}
                      className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg border border-white cursor-pointer hover:scale-105 transition-transform group whitespace-nowrap"
                    >
                      <div className={`w-7 h-7 ${sat.iconBg} rounded-lg flex items-center justify-center transition-colors`}>
                        {sat.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400">{sat.category}</p>
                        <p className="text-xs font-bold text-slate-800">{sat.label}</p>
                      </div>
                    </button>

                    <AnimatePresence>
                      {activeSat === sat.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -4 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute top-full mt-2 ${sat.popoverSide === "left" ? "left-0" : "right-0"} w-[230px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-30`}
                          style={{ boxShadow: "0 8px 32px -8px rgba(59,130,246,0.18), 0 2px 12px rgba(0,0,0,0.10)" }}
                        >
                          <button
                            onClick={() => setActiveSat(null)}
                            className="absolute top-2.5 right-2.5 w-5 h-5 flex items-center justify-center rounded-full text-slate-300 hover:text-slate-500 hover:bg-slate-50 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{sat.category}</p>
                          <h4 className="text-sm font-bold text-slate-900 mb-2 pr-5 leading-snug">{sat.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed mb-3">{sat.desc}</p>
                          <button
                            onClick={() => { setActiveSat(null); sat.onExplore(); }}
                            className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                          >
                            {sat.btn}
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* WHY IS IT NEEDED */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 shadow-sm lg:mt-40"
            >
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.22em] mb-4">
                {t.health.whyTitle}
              </p>
              <ul className="space-y-3">
                {([
                  { icon: ShieldCheck, color: "text-teal-500 bg-teal-50", text: t.health.why1 },
                  { icon: Activity,    color: "text-blue-500 bg-blue-50",  text: t.health.why2 },
                  { icon: Users,       color: "text-indigo-500 bg-indigo-50", text: t.health.why3 },
                  { icon: Clock,       color: "text-violet-500 bg-violet-50", text: t.health.why4 },
                  { icon: TrendingUp,  color: "text-emerald-500 bg-emerald-50", text: t.health.why5 },
                ] as const).map(({ icon: Icon, color, text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center ${color.split(" ")[1]}`}>
                      <Icon className={`w-3.5 h-3.5 ${color.split(" ")[0]}`} />
                    </span>
                    <span className="text-sm text-slate-600 leading-snug pt-0.5">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">{t.health.pilotBanner}</h3>
            <p className="text-blue-100 text-sm">{t.health.pilotBannerSub}</p>
          </div>
          <button
            data-testid="button-pilot-landing"
            onClick={onPilot}
            className="px-7 py-3 bg-white text-blue-700 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap"
          >
            {t.health.hostPilot}
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT PAGE
───────────────────────────────────────────── */
function ProductPage({ onPilot }: { onPilot: () => void }) {
  const { t, lang } = useLanguage();
  const hc = getHealthContent(lang);
  const { healthSubTab } = useMode();
  const activeTab = (healthSubTab === "ai" ? "ai" : healthSubTab === "biofet" ? "biofet" : "biosensing") as "biosensing" | "biofet" | "ai";
  const [bioFETLightbox, setBioFETLightbox] = useState(false);

  return (
    <div className="space-y-10">
      <AnimatePresence mode="wait">
        {activeTab === "biosensing" ? (
          <motion.div key="biosensing" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-16">

            {/* ═══════════════════════════════════════════════════
                PARTE 1 — PLATAFORMA MULTIMODAL DE BIOSSENSORES
            ═══════════════════════════════════════════════════ */}

            {/* ── INTRO + PLATFORM IMAGE ── */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-start">
              <div className="space-y-5">
                <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.22em]">
                  {hc.biosensing.topLabel}
                </p>
                <h2 className="text-2xl font-bold text-slate-900 leading-snug">
                  {hc.biosensing.topTitle}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {hc.biosensing.topIntro1}
                </p>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {hc.biosensing.topIntro2}
                </p>
              </div>
              <figure className="flex flex-col gap-2 items-center self-start pt-2">
                <div className="rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm">
                  <img
                    src={assentoSensorialSrc}
                    alt={hc.biosensing.chipAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-[9px] text-slate-400 text-center tracking-wide font-light italic">
                  {hc.biosensing.chipCaption}
                </figcaption>
              </figure>
            </div>

            {/* ── MULTIMODAL ARCHITECTURE ── */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-[3px] h-6 rounded-full bg-blue-500" />
                <h2 className="text-xl font-bold text-slate-900">{hc.biosensing.archMultiTitle}</h2>
              </div>
              <div className="max-w-3xl space-y-4">
                <p className="text-slate-600 leading-relaxed">{hc.biosensing.archMultiIntro1}</p>
                <p className="text-slate-500 leading-relaxed text-sm">{hc.biosensing.archMultiIntro2}</p>
                <p className="text-slate-500 leading-relaxed text-sm">{hc.biosensing.archMultiIntro3}</p>
              </div>
            </div>

            {/* ── 5 MULTIMODAL MINI-CARDS ── */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: hc.biosensing.pillar1Title, desc: hc.biosensing.pillar1Desc, icon: <Dna className="w-4 h-4 text-blue-500" />, accent: "bg-blue-50 border-blue-100" },
                { title: hc.biosensing.pillar2Title, desc: hc.biosensing.pillar2Desc, icon: <Cpu className="w-4 h-4 text-teal-500" />, accent: "bg-teal-50 border-teal-100" },
                { title: hc.biosensing.pillar3Title, desc: hc.biosensing.pillar3Desc, icon: <Activity className="w-4 h-4 text-indigo-500" />, accent: "bg-indigo-50 border-indigo-100" },
                { title: hc.biosensing.pillar4Title, desc: hc.biosensing.pillar4Desc, icon: <ArrowRight className="w-4 h-4 text-cyan-500" />, accent: "bg-cyan-50 border-cyan-100" },
                { title: hc.biosensing.pillar5Title, desc: hc.biosensing.pillar5Desc, icon: <Globe2 className="w-4 h-4 text-violet-500" />, accent: "bg-violet-50 border-violet-100" },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 border ${card.accent}`}>{card.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">{card.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* ── CONVERGENCE VALUE ── */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-10 space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-[3px] h-6 rounded-full bg-indigo-400" />
                <h2 className="text-xl font-bold text-slate-900">{hc.biosensing.convergTitle}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed max-w-3xl">{hc.biosensing.convergIntro1}</p>
              <p className="text-slate-500 leading-relaxed text-sm max-w-3xl">{hc.biosensing.convergIntro2}</p>
            </div>

            {/* ── PILOT BANNER ── */}
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
        ) : activeTab === "biofet" ? (
          <motion.div key="biofet" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-14">
            {/* ═══════════════════════════════════════════════════
                PARTE 2 — BIOCHIP MULTIPARAMÉTRICO PARA ANÁLISE URINÁRIA
            ═══════════════════════════════════════════════════ */}

            {/* ── 1. INTRO TEXT ── */}
            <div className="max-w-3xl space-y-5">
              <p className="text-[10px] font-semibold text-indigo-500 uppercase tracking-[0.22em]">
                {hc.biosensing.biochipLabel}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 leading-snug">
                {hc.biosensing.biochipTitle}
              </h2>
              <p className="text-slate-600 leading-relaxed">{hc.biosensing.biochipIntro1}</p>
              <p className="text-slate-500 leading-relaxed text-sm">{hc.biosensing.biochipIntro2}</p>
            </div>

            {/* ── 2. BIOFET SCHEMATIC — compact, below device diagram ── */}
            <div className="bg-slate-50 rounded-3xl p-7 lg:p-9 space-y-7">
              <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-[3px] h-6 rounded-full bg-indigo-400" />
                    <h2 className="text-xl font-bold text-slate-900">Camada BioFET do sistema ablute_</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{hc.biosensing.bioFetIntro1}</p>
                  <p className="text-slate-500 leading-relaxed text-sm">{hc.biosensing.bioFetIntro2}</p>
                </div>

                {/* Clickable BioFET schematic */}
                <figure className="flex flex-col gap-2">
                  <button
                    data-testid="button-biofet-enlarge"
                    onClick={() => setBioFETLightbox(true)}
                    className="relative group rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow cursor-zoom-in w-full"
                    aria-label={hc.biosensing.bioFetEnlargeLabel}
                  >
                    <img
                      src={esquemaBioFetSrc}
                      alt="Esquema BioFET — ablute_ sensing layer"
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/8 transition-colors duration-200" />
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-600">
                        <path d="M1 1h4M1 1v4M10 10H6M10 10V6" />
                      </svg>
                    </div>
                  </button>
                  <figcaption className="text-[9px] text-slate-400 text-center tracking-wide font-light italic leading-tight">
                    Tecnologia BioFET para análise urinária — camada de sensorização ablute_
                  </figcaption>
                </figure>
              </div>

              {/* ── 3. SYSTEM CONTEXT LINE ── */}
              <div className="border-t border-slate-200 pt-5 space-y-2">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Esta camada BioFET suporta leitura recorrente de parâmetros urinários através de uma arquitetura de sensorização e eletrónica dedicada.
                </p>
                <p className="text-[11px] text-slate-400 font-light tracking-wide">
                  Amostra urinária → superfície sensorial → eletrónica de leitura → interpretação do sinal
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: hc.biosensing.bioFetAdv1Title, desc: hc.biosensing.bioFetAdv1Desc },
                  { title: hc.biosensing.bioFetAdv2Title, desc: hc.biosensing.bioFetAdv2Desc },
                  { title: hc.biosensing.bioFetAdv3Title, desc: hc.biosensing.bioFetAdv3Desc },
                  { title: hc.biosensing.bioFetAdv4Title, desc: hc.biosensing.bioFetAdv4Desc },
                ].map((card) => (
                  <div key={card.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <h4 className="font-semibold text-slate-900 text-sm mb-1.5">{card.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── METHODS & MEASUREMENT LOGIC ── */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-[3px] h-6 rounded-full bg-teal-400" />
                <h2 className="text-xl font-bold text-slate-900">{hc.biosensing.methodsTitle}</h2>
              </div>
              <div className="max-w-3xl space-y-4">
                <p className="text-slate-600 leading-relaxed">{hc.biosensing.methodsIntro1}</p>
                <p className="text-slate-500 leading-relaxed text-sm">{hc.biosensing.methodsIntro2}</p>
              </div>
            </div>

            {/* ── URINARY BIOMARKERS ── */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-[3px] h-6 rounded-full bg-cyan-400" />
                <h2 className="text-xl font-bold text-slate-900">{hc.biosensing.markersTitle}</h2>
              </div>
              <div className="max-w-3xl space-y-3">
                <p className="text-slate-600 leading-relaxed">{hc.biosensing.markersIntro1}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{hc.biosensing.markersIntro2}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {hc.biosensing.markersList.map((bm) => (
                  <span key={bm} className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium rounded-full">{bm}</span>
                ))}
              </div>
            </div>

            {/* ── LONGITUDINAL MONITORING ── */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-10 space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-[3px] h-6 rounded-full bg-blue-400" />
                <h2 className="text-xl font-bold text-slate-900">{hc.biosensing.longTitle}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed max-w-3xl">{hc.biosensing.longIntro1}</p>
              <p className="text-slate-500 leading-relaxed text-sm max-w-3xl">{hc.biosensing.longIntro2}</p>
            </div>

            {/* ── CLINICAL / TRANSLATIONAL VALUE + IP ── */}
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-[3px] h-6 rounded-full bg-violet-400" />
                  <h2 className="text-xl font-bold text-slate-900">{hc.biosensing.clinicalTitle}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">{hc.biosensing.clinicalIntro1}</p>
                <p className="text-slate-500 leading-relaxed text-sm">{hc.biosensing.clinicalIntro2}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center border border-violet-100">
                  <ShieldCheck className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{hc.biosensing.ipTitle}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{hc.biosensing.ipDesc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-violet-600 font-semibold bg-violet-50 border border-violet-100 px-3 py-1.5 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                  {hc.biosensing.ipBadge}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="ai" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-12">

            {/* ── Heading + intro ── */}
            <div className="max-w-3xl space-y-5">
              <p className="text-[10px] font-semibold text-indigo-500 uppercase tracking-[0.22em]">{hc.ai.layerLabel}</p>
              <h2 className="text-2xl font-bold text-slate-900 leading-snug">{hc.ai.sectionTitle}</h2>
              <p className="text-slate-600 leading-relaxed">{hc.ai.sectionIntro1}</p>
              <p className="text-slate-500 leading-relaxed text-sm">{hc.ai.sectionIntro2}</p>
            </div>

            {/* ── 5 product-specific capability cards ── */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <BarChart3 className="w-5 h-5 text-blue-600" />, accent: "bg-blue-50 border-blue-100", title: hc.ai.card1Title, desc: hc.ai.card1Desc },
                { icon: <Activity className="w-5 h-5 text-indigo-600" />, accent: "bg-indigo-50 border-indigo-100", title: hc.ai.card2Title, desc: hc.ai.card2Desc },
                { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, accent: "bg-teal-50 border-teal-100", title: hc.ai.card3Title, desc: hc.ai.card3Desc },
                { icon: <Brain className="w-5 h-5 text-violet-600" />, accent: "bg-violet-50 border-violet-100", title: hc.ai.card4Title, desc: hc.ai.card4Desc },
                { icon: <ShieldCheck className="w-5 h-5 text-slate-600" />, accent: "bg-slate-100 border-slate-200", title: hc.ai.card5Title, desc: hc.ai.card5Desc },
              ].map(card => (
                <div key={card.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${card.accent}`}>{card.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* ── Process flow ── */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-1">{hc.ai.flowLogicLabel}</p>
                <h3 className="text-lg font-bold text-slate-900">{hc.ai.flowLogicTitle}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[hc.ai.step1, hc.ai.step2, hc.ai.step3, hc.ai.step4, hc.ai.step5].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-indigo-100 rounded-xl px-4 py-2 text-sm font-semibold text-indigo-700 whitespace-nowrap">{step}</div>
                    {i < arr.length - 1 && (
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="shrink-0 text-slate-300">
                        <path d="M1 5h12M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Two governance blocks ── */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
                  <h4 className="font-bold text-slate-900 text-sm">{hc.ai.gov1Title}</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{hc.ai.gov1Desc}</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600 shrink-0" />
                  <h4 className="font-bold text-slate-900 text-sm">{hc.ai.gov2Title}</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{hc.ai.gov2Desc}</p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BioFET Lightbox / Click-to-enlarge ── */}
      <AnimatePresence>
        {bioFETLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[400] flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(10,12,18,0.78)", backdropFilter: "blur(6px)" }}
            onClick={() => setBioFETLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full"
            >
              <button
                data-testid="button-biofet-lightbox-close"
                onClick={() => setBioFETLightbox(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white transition-colors shadow-sm"
                aria-label={hc.biosensing.closeLabel}
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={esquemaBioFetSrc}
                alt={hc.biosensing.bioFetLightboxAlt}
                className="w-full h-auto object-contain"
              />
              <div className="px-6 py-3 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 text-center tracking-wide font-light italic">
                  {hc.biosensing.bioFetLightboxCaption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SCIENCE PAGE (with sub-nav)
───────────────────────────────────────────── */
function SciencePage() {
  const { healthSubTab } = useMode();
  const subTab = (["research", "biomarkers", "evidence"].includes(healthSubTab)
    ? healthSubTab
    : "research") as "research" | "biomarkers" | "evidence";

  return (
    <div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {subTab === "research" && (
            <motion.div key="research" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <ResearchContent />
            </motion.div>
          )}
          {subTab === "biomarkers" && (
            <motion.div key="biomarkers" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <BiomarkersContent />
            </motion.div>
          )}
          {subTab === "evidence" && (
            <motion.div key="evidence" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <ClinicalEvidenceContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ResearchContent() {
  const { lang } = useLanguage();
  const hc = getHealthContent(lang);
  const [sciForm, setSciForm] = useState({ name: "", email: "" });
  const [sciSubmitted, setSciSubmitted] = useState(false);
  const [sciLoading, setSciLoading] = useState(false);
  const [sciExpanded, setSciExpanded] = useState(false);
  const publications = [
    {
      title: "Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review",
      journal: "Biomedicines",
      year: "2023",
      type: hc.science.typeReview,
      doi: "https://doi.org/10.3390/biomedicines11041051",
      summary: hc.science.pub1Summary,
    },
    {
      title: "Nucleic Acid Aptamer-Based Biosensors: A Review",
      journal: "Biomedicines",
      year: "2023",
      type: hc.science.typeReview,
      doi: "https://doi.org/10.3390/biomedicines11123201",
      summary: hc.science.pub2Summary,
    },
    {
      title: "Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection",
      journal: "Engineering Proceedings",
      year: "2024",
      type: hc.science.typeProceedings,
      doi: "https://doi.org/10.3390/engproc2024073007",
      summary: hc.science.pub3Summary,
    },
  ];

  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 space-y-4">
          <p className="text-slate-600 leading-relaxed">{hc.science.intro1}</p>
          <p className="text-slate-500 leading-relaxed text-sm">{hc.science.intro2}</p>
        </div>
        <div className="lg:w-60 w-full shrink-0 bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-3">
          {sciSubmitted ? (
            <div className="text-center py-3 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-teal-500 mx-auto" />
              <p className="font-semibold text-slate-800 text-sm">{hc.modals.sciUpdates.registered}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{hc.modals.sciUpdates.registeredDesc}</p>
            </div>
          ) : sciExpanded ? (
            <>
              <div className="flex items-center gap-2">
                <Dna className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <p className="text-xs font-semibold text-slate-800 leading-snug">{hc.modals.sciUpdates.title}</p>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{hc.modals.sciUpdates.intro3}</p>
              <input
                data-testid="input-sci-alert-name"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-300 outline-none text-slate-700 placeholder:text-slate-400"
                placeholder={hc.modals.getInvolved.namePlaceholder}
                value={sciForm.name}
                onChange={e => setSciForm({ ...sciForm, name: e.target.value })}
              />
              <input
                data-testid="input-sci-alert-email"
                type="email"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-300 outline-none text-slate-700 placeholder:text-slate-400"
                placeholder={hc.modals.getInvolved.emailPlaceholder}
                value={sciForm.email}
                onChange={e => setSciForm({ ...sciForm, email: e.target.value })}
              />
              <button
                data-testid="button-sci-alert-submit"
                disabled={sciLoading}
                onClick={async () => {
                  if (!sciForm.name || !sciForm.email) return;
                  setSciLoading(true);
                  try {
                    const res = await fetch("/api/scientific-alerts/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(sciForm) });
                    if (res.ok) setSciSubmitted(true);
                  } finally {
                    setSciLoading(false);
                  }
                }}
                className="w-full py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all disabled:opacity-60 flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                {sciLoading ? "…" : hc.modals.sciUpdates.formSubmit}
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Dna className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <p className="text-xs font-semibold text-slate-800 leading-snug">{hc.modals.sciUpdates.title}</p>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed">{hc.modals.sciUpdates.note}</p>
              <button
                data-testid="button-sci-alert-aderir"
                onClick={() => setSciExpanded(true)}
                className="sci-pulse-btn w-full py-2 rounded-xl text-xs font-bold transition-none flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                {hc.modals.sciUpdates.interested}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Scientific Foundation */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <FlaskConical className="w-5 h-5 text-blue-500" /> {hc.science.foundTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Microscope className="w-5 h-5 text-blue-500" />, title: hc.science.found1Title, desc: hc.science.found1Desc },
            { icon: <Dna className="w-5 h-5 text-teal-500" />, title: hc.science.found2Title, desc: hc.science.found2Desc },
            { icon: <Droplets className="w-5 h-5 text-cyan-500" />, title: hc.science.found3Title, desc: hc.science.found3Desc },
            { icon: <Activity className="w-5 h-5 text-green-500" />, title: hc.science.found4Title, desc: hc.science.found4Desc },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3">{item.icon}</div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-teal-500" /> {hc.science.pubsTitle}
        </h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <div key={pub.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-slate-900 text-sm leading-snug flex-1 min-w-0 pr-2">{pub.title}</h4>
                    <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium whitespace-nowrap shrink-0">{pub.type}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{pub.journal} · {pub.year}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{pub.summary}</p>
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] text-blue-600 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-full transition-colors font-medium"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {hc.science.doiLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scientific Team */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-500" /> Equipa Científica
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Prof. Hugo Alexandre Ferreira", area: "Físico & Médico | PhD Física", institution: "Faculdade de Ciências UL / IBEB", orcid: "0000-0002-4323-3942" },
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mb-3 font-bold text-blue-700">
                {member.name.split(" ").slice(-1)[0][0]}
              </div>
              <h4 className="font-bold text-slate-900">{member.name}</h4>
              <p className="text-sm text-blue-600 font-medium mt-0.5">{member.area}</p>
              <p className="text-xs text-slate-400 mt-0.5">{member.institution}</p>
              <p className="text-xs text-slate-300 mt-1">
                ORCID:{" "}
                <a href={`https://orcid.org/${member.orcid}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {member.orcid}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BiomarkersContent() {
  const { lang } = useLanguage();
  const hc = getHealthContent(lang);

  const biomarkers = [
    { name: hc.biomarkers.bm1Name, relevance: hc.biomarkers.bm1Relevance, color: "blue",   desc: hc.biomarkers.bm1Desc },
    { name: hc.biomarkers.bm2Name, relevance: hc.biomarkers.bm2Relevance, color: "orange", desc: hc.biomarkers.bm2Desc },
    { name: hc.biomarkers.bm3Name, relevance: hc.biomarkers.bm3Relevance, color: "teal",   desc: hc.biomarkers.bm3Desc },
    { name: hc.biomarkers.bm4Name, relevance: hc.biomarkers.bm4Relevance, color: "purple", desc: hc.biomarkers.bm4Desc },
    { name: hc.biomarkers.bm5Name, relevance: hc.biomarkers.bm5Relevance, color: "green",  desc: hc.biomarkers.bm5Desc },
    { name: hc.biomarkers.bm6Name, relevance: hc.biomarkers.bm6Relevance, color: "red",    desc: hc.biomarkers.bm6Desc },
    { name: hc.biomarkers.bm7Name, relevance: hc.biomarkers.bm7Relevance, color: "sky",    desc: hc.biomarkers.bm7Desc },
    { name: hc.biomarkers.bm8Name, relevance: hc.biomarkers.bm8Relevance, color: "amber",  desc: hc.biomarkers.bm8Desc },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    teal: "bg-teal-50 text-teal-700 border-teal-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    green: "bg-green-50 text-green-700 border-green-100",
    red: "bg-red-50 text-red-700 border-red-100",
    sky: "bg-sky-50 text-sky-700 border-sky-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
  };

  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <p className="text-slate-600 leading-relaxed">{hc.biomarkers.intro1}</p>
        <p className="text-slate-500 leading-relaxed text-sm">{hc.biomarkers.intro2}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {biomarkers.map((b) => (
          <div
            key={b.name}
            data-testid={`card-biomarker-${b.name}`}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3 gap-3">
              <span className="font-bold text-slate-900 text-base">{b.name}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium border shrink-0 ${colorMap[b.color]}`}>
                {b.relevance}
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-3xl p-7 border border-blue-100">
        <p className="text-xs tracking-widest uppercase text-blue-400 font-medium mb-2">{hc.biomarkers.noteLabel}</p>
        <p className="text-sm text-blue-800 leading-relaxed">{hc.biomarkers.note}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FOR WHO PAGE (with sub-nav)
───────────────────────────────────────────── */
function ForWhoPage({ onPilot }: { onPilot: () => void }) {
  const { healthSubTab } = useMode();
  const subTab = (["providers", "wellness", "insurers", "rd"].includes(healthSubTab)
    ? healthSubTab
    : "providers") as "providers" | "wellness" | "insurers" | "rd";

  return (
    <div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {subTab === "providers" && (
            <motion.div key="providers" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <HealthProvidersContent onPilot={onPilot} />
            </motion.div>
          )}
          {subTab === "wellness" && (
            <motion.div key="wellness" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <WellnessContent />
            </motion.div>
          )}
          {subTab === "insurers" && (
            <motion.div key="insurers" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <InsurersContent />
            </motion.div>
          )}
          {subTab === "rd" && (
            <motion.div key="rd" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <RDContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function HealthProvidersContent({ onPilot }: { onPilot: () => void }) {
  const { lang } = useLanguage();
  const hc = getHealthContent(lang);
  const [innerTab, setInnerTab] = useState<"hospitals" | "doctors">("hospitals");
  const [demoForm, setDemoForm] = useState({ nome: "", instituicao: "", cargo: "", email: "", mensagem: "", tipo: "" });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);

  return (
    <div>
      {/* ── Inner sub-sub-tab strip ── */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-[#f0f7ff]/95 backdrop-blur-sm mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto scrollbar-none">
            {([
              { id: "hospitals", label: hc.forWho.hospitalsLabel },
              { id: "doctors",   label: hc.forWho.doctorsLabel },
            ] as const).map(tab => (
              <button
                key={tab.id}
                data-testid={`subtab-providers-${tab.id}`}
                onClick={() => setInnerTab(tab.id)}
                className={`py-2.5 px-4 text-sm whitespace-nowrap border-b-2 transition-all duration-200 ${
                  innerTab === tab.id
                    ? "border-blue-600 text-slate-900 font-semibold"
                    : "border-transparent text-slate-500 font-medium hover:text-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">

        {innerTab === "hospitals" && (
          <motion.div key="hospitals" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="space-y-12">

            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{hc.forWho.hospitals.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{hc.forWho.hospitals.intro1}</p>
              <p className="text-slate-500 leading-relaxed text-sm">{hc.forWho.hospitals.intro2}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[hc.forWho.hospitals.bullet1, hc.forWho.hospitals.bullet2, hc.forWho.hospitals.bullet3, hc.forWho.hospitals.bullet4, hc.forWho.hospitals.bullet5].map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{hc.forWho.hospitals.opTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{hc.forWho.hospitals.opIntro}</p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{hc.forWho.hospitals.opCasesLabel}</p>
                {[hc.forWho.hospitals.opCase1, hc.forWho.hospitals.opCase2, hc.forWho.hospitals.opCase3].map((uc, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {uc}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-[3px] h-6 rounded-full bg-blue-500" />
                <h2 className="text-xl font-bold text-slate-900">{hc.forWho.hospitals.opValTitle}</h2>
              </div>
              <div className="max-w-3xl space-y-4">
                <p className="text-slate-600 leading-relaxed">{hc.forWho.hospitals.opValIntro1}</p>
                <p className="text-slate-500 leading-relaxed text-sm">{hc.forWho.hospitals.opValIntro2}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: hc.forWho.hospitals.opValCard1Title, desc: hc.forWho.hospitals.opValCard1Desc, icon: <TrendingDown className="w-4 h-4 text-blue-500" /> },
                  { title: hc.forWho.hospitals.opValCard2Title, desc: hc.forWho.hospitals.opValCard2Desc, icon: <Zap className="w-4 h-4 text-amber-500" /> },
                  { title: hc.forWho.hospitals.opValCard3Title, desc: hc.forWho.hospitals.opValCard3Desc, icon: <Activity className="w-4 h-4 text-teal-500" /> },
                  { title: hc.forWho.hospitals.opValCard4Title, desc: hc.forWho.hospitals.opValCard4Desc, icon: <Users className="w-4 h-4 text-indigo-500" /> },
                  { title: hc.forWho.hospitals.opValCard5Title, desc: hc.forWho.hospitals.opValCard5Desc, icon: <Heart className="w-4 h-4 text-rose-500" /> },
                ].map(card => (
                  <div key={card.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center mb-3 border border-slate-100">{card.icon}</div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1.5">{card.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed italic max-w-2xl border-l-2 border-slate-200 pl-4">{hc.forWho.hospitals.opValNote}</p>
            </div>

            <div className="border-t border-slate-200 pt-10 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{hc.forWho.hospitals.demoTitle}</h2>
                <p className="text-slate-500 text-sm">{hc.forWho.hospitals.demoDesc}</p>
              </div>
              {demoSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                  <p className="font-bold text-slate-800 text-lg">{hc.forWho.hospitals.demoSent}</p>
                  <p className="text-slate-500 text-sm">{hc.forWho.hospitals.demoSentDesc}</p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-5 max-w-2xl">
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-widest">{hc.forWho.hospitals.demoIdLabel}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[hc.forWho.hospitals.demoType1, hc.forWho.hospitals.demoType2].map((tipo) => (
                        <button key={tipo} onClick={() => setDemoForm({ ...demoForm, tipo })}
                          className={`text-sm px-4 py-2 rounded-full border transition-all ${demoForm.tipo === tipo ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"}`}>
                          {tipo}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.hospitals.demoNameLabel}</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.forWho.hospitals.demoNamePlaceholder} value={demoForm.nome} onChange={e => setDemoForm({ ...demoForm, nome: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.hospitals.demoInstLabel}</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.forWho.hospitals.demoInstPlaceholder} value={demoForm.instituicao} onChange={e => setDemoForm({ ...demoForm, instituicao: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.hospitals.demoClinLabel}</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.forWho.hospitals.demoClinPlaceholder} value={demoForm.cargo} onChange={e => setDemoForm({ ...demoForm, cargo: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.hospitals.demoEmailLabel}</label>
                      <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none" placeholder={hc.forWho.hospitals.demoEmailPlaceholder} value={demoForm.email} onChange={e => setDemoForm({ ...demoForm, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.hospitals.demoMsgLabel}</label>
                    <textarea rows={3} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-300 outline-none resize-none" placeholder={hc.forWho.hospitals.demoMsgPlaceholder} value={demoForm.mensagem} onChange={e => setDemoForm({ ...demoForm, mensagem: e.target.value })} />
                  </div>
                  <button data-testid="button-request-demo" disabled={demoLoading} onClick={async () => {
                    if (!demoForm.nome || !demoForm.email) return;
                    setDemoLoading(true);
                    try {
                      const res = await fetch("/api/demo/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(demoForm) });
                      if (res.ok) setDemoSubmitted(true);
                    } finally { setDemoLoading(false); }
                  }}
                    className="flex items-center gap-2 px-7 py-3 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all disabled:opacity-60">
                    {demoLoading ? "…" : hc.forWho.hospitals.demoSubmit} {!demoLoading && <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {innerTab === "doctors" && (
          <motion.div key="doctors" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="space-y-10">

            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">{hc.forWho.doctors.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{hc.forWho.doctors.intro}</p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6">
              <h3 className="font-bold text-slate-900">{hc.forWho.doctors.qTitle}</h3>
              <div className="space-y-5">
                {[
                  { num: "1", q: hc.forWho.doctors.q1, a: hc.forWho.doctors.q1a, color: "blue" },
                  { num: "2", q: hc.forWho.doctors.q2, a: hc.forWho.doctors.q2a, color: "teal" },
                  { num: "3", q: hc.forWho.doctors.q3, a: hc.forWho.doctors.q3a, color: "indigo" },
                ].map(item => (
                  <div key={item.num} className="flex gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      item.color === "blue" ? "bg-blue-100 text-blue-700" : item.color === "teal" ? "bg-teal-100 text-teal-700" : "bg-indigo-100 text-indigo-700"
                    }`}>{item.num}</div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm mb-1">{item.q}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-slate-900 text-sm">{hc.forWho.doctors.aiTitle}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{hc.forWho.doctors.aiDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[hc.forWho.doctors.feat1, hc.forWho.doctors.feat2, hc.forWho.doctors.feat3, hc.forWho.doctors.feat4, hc.forWho.doctors.feat5].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white rounded-xl p-4 border border-slate-100">
                  <Star className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-snug">{point}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-10 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{hc.forWho.doctors.demoTitle}</h2>
                <p className="text-slate-500 text-sm">{hc.forWho.doctors.demoDesc}</p>
              </div>
              {demoSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                  <p className="font-bold text-slate-800 text-lg">{hc.forWho.doctors.demoSent}</p>
                  <p className="text-slate-500 text-sm">{hc.forWho.doctors.demoSentDesc}</p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-5 max-w-2xl">
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-widest">{hc.forWho.doctors.demoIdLabel}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[hc.forWho.doctors.demoType1, hc.forWho.doctors.demoType2].map((tipo) => (
                        <button key={tipo} onClick={() => setDemoForm({ ...demoForm, tipo })}
                          className={`text-sm px-4 py-2 rounded-full border transition-all ${demoForm.tipo === tipo ? "bg-teal-600 text-white border-teal-600" : "bg-white text-slate-600 border-slate-200 hover:border-teal-300"}`}>
                          {tipo}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.doctors.demoNameLabel}</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" placeholder={hc.forWho.doctors.demoNamePlaceholder} value={demoForm.nome} onChange={e => setDemoForm({ ...demoForm, nome: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.doctors.demoSpecLabel}</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" placeholder={hc.forWho.doctors.demoSpecPlaceholder} value={demoForm.cargo} onChange={e => setDemoForm({ ...demoForm, cargo: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.doctors.demoInstLabel}</label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" placeholder={hc.forWho.doctors.demoInstPlaceholder} value={demoForm.instituicao} onChange={e => setDemoForm({ ...demoForm, instituicao: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.doctors.demoEmailLabel}</label>
                      <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none" placeholder={hc.forWho.doctors.demoEmailPlaceholder} value={demoForm.email} onChange={e => setDemoForm({ ...demoForm, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5">{hc.forWho.doctors.demoMsgLabel}</label>
                    <textarea rows={3} className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-300 outline-none resize-none" placeholder={hc.forWho.doctors.demoMsgPlaceholder} value={demoForm.mensagem} onChange={e => setDemoForm({ ...demoForm, mensagem: e.target.value })} />
                  </div>
                  <button data-testid="button-request-demo-doctors" disabled={demoLoading} onClick={async () => {
                    if (!demoForm.nome || !demoForm.email) return;
                    setDemoLoading(true);
                    try {
                      const res = await fetch("/api/demo/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(demoForm) });
                      if (res.ok) setDemoSubmitted(true);
                    } finally { setDemoLoading(false); }
                  }}
                    className="flex items-center gap-2 px-7 py-3 bg-teal-600 text-white rounded-full text-sm font-bold hover:bg-teal-700 transition-all disabled:opacity-60">
                    {demoLoading ? "…" : hc.forWho.doctors.demoSubmit} {!demoLoading && <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

function WellnessContent() {
  const { lang } = useLanguage();
  const hc = getHealthContent(lang);
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">{hc.forWho.wellness.title}</h2>
        <p className="text-slate-600 leading-relaxed">{hc.forWho.wellness.intro}</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { icon: <TrendingUp className="w-6 h-6 text-green-500" />, title: hc.forWho.wellness.card1Title, desc: hc.forWho.wellness.card1Desc },
          { icon: <Activity className="w-6 h-6 text-blue-500" />, title: hc.forWho.wellness.card2Title, desc: hc.forWho.wellness.card2Desc },
          { icon: <Building2 className="w-6 h-6 text-indigo-500" />, title: hc.forWho.wellness.card3Title, desc: hc.forWho.wellness.card3Desc },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border border-green-100 space-y-5">
        <h3 className="font-bold text-slate-900 text-lg">{hc.forWho.wellness.benefitsTitle}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[hc.forWho.wellness.benefit1, hc.forWho.wellness.benefit2, hc.forWho.wellness.benefit3, hc.forWho.wellness.benefit4].map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              {b}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 border-t border-green-100 pt-4">{hc.forWho.wellness.note}</p>
      </div>
    </div>
  );
}

function InsurersContent() {
  const { lang } = useLanguage();
  const hc = getHealthContent(lang);
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">{hc.forWho.insurers.title}</h2>
        <p className="text-slate-600 leading-relaxed">{hc.forWho.insurers.intro1}</p>
        <p className="text-sm text-slate-500 leading-relaxed font-medium italic">{hc.forWho.insurers.intro2}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { icon: <ShieldCheck className="w-6 h-6 text-blue-500" />, title: hc.forWho.insurers.card1Title, desc: hc.forWho.insurers.card1Desc },
          { icon: <Users className="w-6 h-6 text-teal-500" />, title: hc.forWho.insurers.card2Title, desc: hc.forWho.insurers.card2Desc },
          { icon: <TrendingUp className="w-6 h-6 text-green-500" />, title: hc.forWho.insurers.card3Title, desc: hc.forWho.insurers.card3Desc },
          { icon: <BarChart3 className="w-6 h-6 text-indigo-500" />, title: hc.forWho.insurers.card4Title, desc: hc.forWho.insurers.card4Desc },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <p className="text-xs tracking-widest uppercase text-slate-400 font-medium mb-4">{hc.forWho.insurers.positionLabel}</p>
        <p className="text-slate-700 leading-relaxed font-medium">{hc.forWho.insurers.positionText}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   I&D CONTENT
───────────────────────────────────────────── */
function RDContent() {
  const { lang } = useLanguage();
  const hc = getHealthContent(lang);
  const [rdForm, setRdForm] = useState({ nome: "", instituicao: "", area: "", email: "", objetivo: "" });
  const [rdSubmitted, setRdSubmitted] = useState(false);
  const [rdLoading, setRdLoading] = useState(false);

  return (
    <div className="space-y-16">

      <div className="max-w-3xl space-y-4">
        <p className="text-slate-600 leading-relaxed">{hc.forWho.rd.intro1}</p>
        <p className="text-slate-500 leading-relaxed text-sm">{hc.forWho.rd.intro2}</p>
      </div>

      <div className="border-t border-slate-200" />

      {/* Section 1 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <FlaskConical className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">{hc.forWho.rd.s1Title}</h2>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-3xl">{hc.forWho.rd.s1Intro1}</p>
        <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">{hc.forWho.rd.s1Intro2}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[hc.forWho.rd.s1b1, hc.forWho.rd.s1b2, hc.forWho.rd.s1b3, hc.forWho.rd.s1b4].map((point, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="text-sm text-blue-800 leading-relaxed italic">{hc.forWho.rd.s1Note}</p>
        </div>
      </div>

      <div className="border-t border-slate-200" />

      {/* Section 2 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">{hc.forWho.rd.s2Title}</h2>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-3xl">{hc.forWho.rd.s2Intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: hc.forWho.rd.s2c1Title, desc: hc.forWho.rd.s2c1Desc },
            { title: hc.forWho.rd.s2c2Title, desc: hc.forWho.rd.s2c2Desc },
            { title: hc.forWho.rd.s2c3Title, desc: hc.forWho.rd.s2c3Desc },
            { title: hc.forWho.rd.s2c4Title, desc: hc.forWho.rd.s2c4Desc },
            { title: hc.forWho.rd.s2c5Title, desc: hc.forWho.rd.s2c5Desc },
            { title: hc.forWho.rd.s2c6Title, desc: hc.forWho.rd.s2c6Desc },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <p className="font-semibold text-slate-900 text-sm mb-1.5">{item.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200" />

      {/* Section 3 — Swarm Mode */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
            <Cpu className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">{hc.forWho.rd.s3Title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <p className="text-slate-600 leading-relaxed">{hc.forWho.rd.s3Intro1}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{hc.forWho.rd.s3Intro2}</p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{hc.forWho.rd.swarmLabel}</p>
              <p className="text-sm text-slate-700 leading-relaxed"><span className="font-medium">{hc.forWho.rd.swarmText1}</span> {hc.forWho.rd.swarmText2}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{hc.forWho.rd.swarmText3}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{hc.forWho.rd.swarmRelLabel}</p>
              {[hc.forWho.rd.swarm1, hc.forWho.rd.swarm2, hc.forWho.rd.swarm3, hc.forWho.rd.swarm4, hc.forWho.rd.swarm5].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <line x1="80" y1="60" x2="160" y2="110" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="80" y1="60" x2="60" y2="160" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="160" y1="110" x2="240" y2="80" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="160" y1="110" x2="200" y2="190" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="160" y1="110" x2="60" y2="160" stroke="#c7d2fe" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="240" y1="80" x2="260" y2="170" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="60" y1="160" x2="120" y2="230" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="200" y1="190" x2="120" y2="230" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="200" y1="190" x2="260" y2="170" stroke="#bfdbfe" strokeWidth="1" />
                <line x1="240" y1="80" x2="200" y2="190" stroke="#c7d2fe" strokeWidth="1" strokeDasharray="4 3" />
                <circle cx="160" cy="110" r="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
                <circle cx="160" cy="110" r="5" fill="#3b82f6" />
                {[
                  { cx: 80, cy: 60, r: 8, fill: "#f0fdf4", stroke: "#14b8a6" },
                  { cx: 240, cy: 80, r: 8, fill: "#f0fdf4", stroke: "#14b8a6" },
                  { cx: 60, cy: 160, r: 8, fill: "#f0fdf4", stroke: "#14b8a6" },
                  { cx: 260, cy: 170, r: 8, fill: "#f0fdf4", stroke: "#14b8a6" },
                  { cx: 200, cy: 190, r: 8, fill: "#f0fdf4", stroke: "#14b8a6" },
                  { cx: 120, cy: 230, r: 8, fill: "#f0fdf4", stroke: "#14b8a6" },
                ].map((node, i) => (
                  <g key={i}>
                    <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.fill} stroke={node.stroke} strokeWidth="1.5" />
                    <circle cx={node.cx} cy={node.cy} r="3" fill={node.stroke} />
                  </g>
                ))}
                <text x="160" y="135" textAnchor="middle" fontSize="7" fill="#64748b" fontFamily="Inter, sans-serif">{hc.forWho.rd.networkHub}</text>
                <text x="80" y="52" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="Inter, sans-serif">{hc.forWho.rd.nodeA}</text>
                <text x="240" y="72" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="Inter, sans-serif">{hc.forWho.rd.nodeB}</text>
                <text x="60" y="152" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="Inter, sans-serif">{hc.forWho.rd.nodeC}</text>
                <text x="266" y="162" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="Inter, sans-serif">{hc.forWho.rd.nodeD}</text>
                <text x="204" y="208" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="Inter, sans-serif">{hc.forWho.rd.nodeE}</text>
                <text x="120" y="248" textAnchor="middle" fontSize="6.5" fill="#64748b" fontFamily="Inter, sans-serif">{hc.forWho.rd.nodeF}</text>
              </svg>
              <p className="text-center text-[10px] text-slate-400 mt-2 tracking-wide">{hc.forWho.rd.networkCaption}</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
          <p className="text-sm text-indigo-800 leading-relaxed">{hc.forWho.rd.s3Note}</p>
        </div>
      </div>

      <div className="border-t border-slate-200" />

      {/* Section 4 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center shrink-0">
            <Brain className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">{hc.forWho.rd.s4Title}</h2>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-3xl">{hc.forWho.rd.s4Intro}</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{hc.forWho.rd.researchAreasLabel}</p>
            {[hc.forWho.rd.area1, hc.forWho.rd.area2, hc.forWho.rd.area3, hc.forWho.rd.area4, hc.forWho.rd.area5, hc.forWho.rd.area6].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{hc.forWho.rd.infraLabel}</p>
            {[
              { role: hc.forWho.rd.infra1Role, desc: hc.forWho.rd.infra1Desc },
              { role: hc.forWho.rd.infra2Role, desc: hc.forWho.rd.infra2Desc },
              { role: hc.forWho.rd.infra3Role, desc: hc.forWho.rd.infra3Desc },
              { role: hc.forWho.rd.infra4Role, desc: hc.forWho.rd.infra4Desc },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                <p className="font-semibold text-slate-800 text-sm">{item.role}</p>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200" />

      {/* CTA */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-slate-900 mb-2">{hc.forWho.rd.ctaTitle}</h2>
          <p className="text-slate-500 text-sm leading-relaxed">{hc.forWho.rd.ctaDesc}</p>
        </div>

        {rdSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto" />
            <p className="font-bold text-slate-800">{hc.forWho.rd.formSent}</p>
            <p className="text-slate-500 text-sm">{hc.forWho.rd.formSentDesc}</p>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <input data-testid="input-rd-nome" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-300 outline-none"
                placeholder={hc.forWho.rd.formNamePlaceholder} value={rdForm.nome} onChange={e => setRdForm({ ...rdForm, nome: e.target.value })} />
              <input data-testid="input-rd-instituicao" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-300 outline-none"
                placeholder={hc.forWho.rd.formInstPlaceholder} value={rdForm.instituicao} onChange={e => setRdForm({ ...rdForm, instituicao: e.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input data-testid="input-rd-area" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-300 outline-none"
                placeholder={hc.forWho.rd.formAreaPlaceholder} value={rdForm.area} onChange={e => setRdForm({ ...rdForm, area: e.target.value })} />
              <input data-testid="input-rd-email" type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-300 outline-none"
                placeholder={hc.forWho.rd.formEmailPlaceholder} value={rdForm.email} onChange={e => setRdForm({ ...rdForm, email: e.target.value })} />
            </div>
            <textarea data-testid="input-rd-objetivo" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-300 outline-none resize-none"
              placeholder={hc.forWho.rd.formGoalPlaceholder} rows={3} value={rdForm.objetivo} onChange={e => setRdForm({ ...rdForm, objetivo: e.target.value })} />
            <button data-testid="button-rd-submit"
              disabled={rdLoading || !rdForm.nome || !rdForm.email || !rdForm.instituicao}
              onClick={async () => {
                setRdLoading(true);
                try {
                  const res = await fetch("/api/rd-collab/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(rdForm) });
                  if (res.ok) setRdSubmitted(true);
                } finally { setRdLoading(false); }
              }}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm">
              {rdLoading ? "…" : hc.forWho.rd.formSubmit}
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   CLINICAL EVIDENCE CONTENT
───────────────────────────────────────────── */
function ClinicalEvidenceContent() {
  const { lang } = useLanguage();
  const hc = getHealthContent(lang);

  const blocks = [
    {
      id: "foundations",
      icon: <FlaskConical className="w-5 h-5 text-blue-500" />,
      title: hc.science.ev1Title,
      body: hc.science.ev1Body,
      bullets: [hc.science.ev1b1, hc.science.ev1b2, hc.science.ev1b3, hc.science.ev1b4, hc.science.ev1b5],
      footer: hc.science.ev1Footer,
    },
    {
      id: "validation",
      icon: <ShieldCheck className="w-5 h-5 text-teal-500" />,
      title: hc.science.ev2Title,
      body: hc.science.ev2Body,
      bullets: [hc.science.ev2b1, hc.science.ev2b2, hc.science.ev2b3, hc.science.ev2b4],
      footer: hc.science.ev2Footer,
    },
    {
      id: "pilots",
      icon: <Microscope className="w-5 h-5 text-violet-500" />,
      title: hc.science.ev3Title,
      body: hc.science.ev3Body,
      bullets: [hc.science.ev3b1, hc.science.ev3b2, hc.science.ev3b3, hc.science.ev3b4],
      footer: hc.science.ev3Footer,
    },
    {
      id: "ai",
      icon: <Brain className="w-5 h-5 text-cyan-600" />,
      title: hc.science.ev4Title,
      body: hc.science.ev4Body,
      bullets: [hc.science.ev4b1, hc.science.ev4b2, hc.science.ev4b3],
      footer: hc.science.ev4Footer,
    },
    {
      id: "future",
      icon: <Globe2 className="w-5 h-5 text-indigo-500" />,
      title: hc.science.ev5Title,
      body: hc.science.ev5Body,
      bullets: [hc.science.ev5b1, hc.science.ev5b2, hc.science.ev5b3, hc.science.ev5b4],
      footer: hc.science.ev5Footer,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">{hc.science.evTitle}</h2>
        <p className="text-slate-500 leading-relaxed">{hc.science.evIntro1}</p>
        <p className="text-slate-500 leading-relaxed">{hc.science.evIntro2}</p>
      </div>

      {/* Evidence blocks */}
      <div className="grid md:grid-cols-2 gap-5">
        {blocks.map((block) => (
          <div
            key={block.id}
            data-testid={`card-evidence-${block.id}`}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                {block.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">{block.title}</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{block.body}</p>
            <ul className="space-y-1.5">
              {block.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                  {b}
                </li>
              ))}
            </ul>
            {block.footer && (
              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-50 pt-3">{block.footer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Future publications placeholder */}
      <div className="border border-dashed border-slate-200 rounded-2xl p-8">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-4">Publicações & Marcos Regulatórios</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { type: "White Paper", title: "Passive Urinary Biomarker Monitoring — A Framework", year: "2025", venue: "Internal Research Report" },
            { type: "Conference", title: "Longitudinal Physiological Sensing in Ambient Environments", year: "2025", venue: "MedTech Europe — Abstract Submitted" },
          ].map((pub) => (
            <div key={pub.title} className="bg-slate-50 rounded-xl p-4 space-y-1">
              <p className="text-[10px] text-blue-600 uppercase tracking-widest font-semibold">{pub.type}</p>
              <p className="text-sm font-medium text-slate-700 leading-snug">{pub.title}</p>
              <p className="text-xs text-slate-400">{pub.year} · {pub.venue}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-5 text-center">Publicações peer-reviewed e dados de estudos clínicos serão disponibilizados progressivamente.</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AREAS PAGE (with internal sub-nav, local state, full i18n)
───────────────────────────────────────────── */

const AREA_ICON_MAP: Record<AreaKey, React.ReactNode> = {
  cardiovascular: <Heart className="w-6 h-6 text-rose-500" />,
  renal: <Droplets className="w-6 h-6 text-blue-500" />,
  metabolic: <Activity className="w-6 h-6 text-orange-500" />,
  longevity: <TrendingUp className="w-6 h-6 text-teal-500" />,
};

const AREA_ACCENT_MAP: Record<AreaKey, { dot: string; badge: string; bg: string; border: string }> = {
  cardiovascular: { dot: "bg-rose-400", badge: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
  renal: { dot: "bg-blue-400", badge: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  metabolic: { dot: "bg-orange-400", badge: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
  longevity: { dot: "bg-teal-400", badge: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
};

const AREA_ORDER: AreaKey[] = ["cardiovascular", "renal", "metabolic", "longevity"];

function AreasPage() {
  const { lang } = useLanguage();
  const [subTab, setSubTab] = useState<AreaKey>("cardiovascular");
  const data = getAreasData(lang);
  const area = data.areas[subTab];
  const accent = AREA_ACCENT_MAP[subTab];

  return (
    <div>
      {/* Internal area sub-tabs strip */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-[#f0f7ff]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto scrollbar-none">
            {AREA_ORDER.map(id => (
              <button
                key={id}
                data-testid={`subtab-area-${id}`}
                onClick={() => setSubTab(id)}
                className={`py-2.5 px-4 text-sm whitespace-nowrap border-b-2 transition-all duration-200 ${
                  subTab === id
                    ? "border-blue-600 text-slate-900 font-semibold"
                    : "border-transparent text-slate-500 font-medium hover:text-slate-800"
                }`}
              >
                {data.areas[id].tabLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={subTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <AreaSectionContent
              icon={AREA_ICON_MAP[subTab]}
              accent={accent}
              area={area}
              disclaimer={data.disclaimer}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function AreaSectionContent({
  icon, accent, area, disclaimer,
}: {
  icon: React.ReactNode;
  accent: { dot: string; badge: string; bg: string; border: string };
  area: AreaContent;
  disclaimer: string;
}) {
  return (
    <div className="max-w-4xl space-y-10">

      {/* Header block */}
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">{area.domain}</h2>
          <p className={`text-xs font-semibold uppercase tracking-widest ${accent.badge}`}>{area.tagline}</p>
          <p className="text-slate-500 leading-relaxed pt-1">{area.intro}</p>
          <p className="text-slate-500 leading-relaxed">{area.body}</p>
        </div>
      </div>

      {/* Biomarkers grid */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
        <p className={`text-xs font-semibold uppercase tracking-widest ${accent.badge}`}>{area.biomarkersLabel}</p>
        <div className="flex flex-wrap gap-2">
          {area.biomarkers.map(bm => (
            <span
              key={bm}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${accent.bg} ${accent.border} border text-slate-700`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
              {bm}
            </span>
          ))}
        </div>
      </div>

      {/* Clinical relevance + Possible observations */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-3 shadow-sm">
          <p className={`text-xs font-semibold uppercase tracking-widest ${accent.badge}`}>{area.clinicalLabel}</p>
          <ul className="space-y-2">
            {area.clinical.map(s => (
              <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                <div className={`w-1.5 h-1.5 rounded-full ${accent.dot} shrink-0 mt-1.5`} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${accent.bg} border ${accent.border} rounded-2xl p-6 space-y-3`}>
          <p className={`text-xs font-semibold uppercase tracking-widest ${accent.badge}`}>{area.insightsLabel}</p>
          <ul className="space-y-2">
            {area.insights.map(s => (
              <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                <div className={`w-1.5 h-1.5 rounded-full ${accent.dot} shrink-0 mt-1.5`} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Physician value */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
        <p className={`text-xs font-semibold uppercase tracking-widest ${accent.badge}`}>{area.physicianLabel}</p>
        <ul className="space-y-2">
          {area.physician.map(s => (
            <li key={s} className="flex items-start gap-2.5 text-sm text-slate-700">
              <ShieldCheck className={`w-3.5 h-3.5 shrink-0 mt-0.5 opacity-60 ${accent.badge}`} />
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Market relevance */}
      <div className="bg-slate-900 rounded-2xl p-6 space-y-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{area.marketLabel}</p>
        <p className="text-sm text-slate-300 leading-relaxed">{area.market}</p>
      </div>

      {/* Disclaimer */}
      <div className="bg-slate-50 rounded-2xl px-7 py-5 border border-slate-100">
        <p className="text-xs text-slate-400 leading-relaxed">{disclaimer}</p>
      </div>
    </div>
  );
}


