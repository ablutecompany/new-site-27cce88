import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Zap, Wind, User, Shield, FileText, ChevronDown, CheckCircle2, AlertTriangle, Lock, Wrench } from "lucide-react";

const techIcons = [Droplets, Zap, Wind, User];
const safetyIcons = [Zap, Lock, Shield, Wrench];

const stageStatuses = ["done", "done", "active", "upcoming", "upcoming"] as const;

export default function Product() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { mode, subNavVisible, setSubNavVisible } = useMode();
  const { t } = useLanguage();
  const [, navigate] = useLocation();
  useEffect(() => { if (mode === "health") navigate("/"); }, [mode]);
  useEffect(() => { setSubNavVisible(true); }, []);

  const tabs = [t.productPage.tab1, t.productPage.tab2, t.productPage.tab3, t.productPage.tab4];

  const techCards = [
    { icon: techIcons[0], title: t.product.tech1Title, desc: t.product.tech1Desc, points: [t.product.tech1p1, t.product.tech1p2, t.product.tech1p3] },
    { icon: techIcons[1], title: t.product.tech2Title, desc: t.product.tech2Desc, points: [t.product.tech2p1, t.product.tech2p2, t.product.tech2p3] },
    { icon: techIcons[2], title: t.product.tech3Title, desc: t.product.tech3Desc, points: [t.product.tech3p1, t.product.tech3p2, t.product.tech3p3] },
    { icon: techIcons[3], title: t.product.tech4Title, desc: t.product.tech4Desc, points: [t.product.tech4p1, t.product.tech4p2, t.product.tech4p3] },
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
    [t.product.specDim, "500 × 380 × 420 mm (W × D × H)"],
    [t.product.specVolt, "12V DC (external adapter)"],
    [t.product.specWater, "Standard G3/4 inlet"],
    [t.product.specDrain, "DN40 / DN50 compatible"],
    [t.product.specSensor, "Optical, chemical, pressure"],
    [t.product.specWifi, "BLE 5.2 / Wi-Fi 802.11ac"],
    [t.product.specWeight, "12.4 kg (unit only)"],
    [t.product.specIp, "IPX5 (electronics enclosure)"],
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-anthracite" style={{ fontFamily: 'Inter, sans-serif' }}>

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
                className="flex items-center justify-center w-5 h-5 shrink-0 text-white/30 hover:text-white/70 transition-colors duration-200 text-xl leading-none pb-0.5"
              >
                −
              </button>
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  data-testid={`tab-product-${idx}`}
                  onClick={() => setActiveTabIndex(idx)}
                  className={`py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                    activeTabIndex === idx
                      ? "border-white text-white"
                      : "border-transparent text-white/40 hover:text-white/70"
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
              <div className="space-y-16">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.product.techTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.product.techDesc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techCards.map((card, i) => (
                    <div key={i} className="border border-white/8 rounded-2xl p-8 hover:border-white/16 transition-all duration-300 bg-white/[0.02]">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                          <card.icon className="w-5 h-5 text-blue-300/80" />
                        </div>
                        <h3 className="text-lg font-light text-white pt-1">{card.title}</h3>
                      </div>
                      <p className="text-white/45 text-sm font-light leading-relaxed mb-5">{card.desc}</p>
                      <ul className="space-y-2">
                        {card.points.map((p, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-xs text-white/35 font-normal">
                            <div className="w-1 h-1 rounded-full bg-cyan-400/60 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCT SHEET */}
            {activeTabIndex === 1 && (
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.product.sheetTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.product.sheetDesc}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="w-full md:w-[380px] shrink-0 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] aspect-[4/5] flex flex-col items-center justify-center gap-4 relative">
                    <div className="absolute inset-4 border border-dashed border-white/10 rounded-xl" />
                    <div className="absolute top-8 left-8 w-16 h-0.5 bg-white/15" />
                    <div className="absolute top-8 left-8 w-0.5 h-16 bg-white/15" />
                    <div className="absolute bottom-8 right-8 w-16 h-0.5 bg-white/15" />
                    <div className="absolute bottom-8 right-8 w-0.5 h-16 bg-white/15" />
                    <FileText className="w-14 h-14 text-white/15" />
                    <span className="text-[11px] tracking-[0.15em] uppercase text-white/25 font-medium">{t.product.sheetDrawing}</span>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-8">
                      {["A", "B", "C"].map((l) => (
                        <span key={l} className="text-[9px] font-mono text-white/20">{l}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6 flex-1">
                    <div className="space-y-4">
                      {specRows.map(([k, v]) => (
                        <div key={k} className="flex justify-between items-center py-3 border-b border-white/6">
                          <span className="text-sm text-white/40 font-normal">{k}</span>
                          <span className="text-sm text-white/75 font-light">{v}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      data-testid="button-download-spec"
                      className="flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-all"
                    >
                      <ChevronDown className="w-4 h-4 text-cyan-400" />
                      {t.product.sheetDownload}
                    </button>
                    <p className="text-xs text-white/25 font-light">{t.product.sheetVersion}</p>
                  </div>
                </div>
              </div>
            )}

            {/* SAFETY & COMPLIANCE */}
            {activeTabIndex === 2 && (
              <div className="space-y-16">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.product.safetyTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.product.safetyDesc}</p>
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
                      <p className="text-white/45 text-sm font-light leading-relaxed mb-5">{card.desc}</p>
                      <ul className="space-y-2">
                        {card.points.map((p, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-xs text-white/35 font-normal">
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
                  <p className="text-xs text-white/35 font-light leading-relaxed">{t.product.safetyNote}</p>
                </div>
              </div>
            )}

            {/* DEVELOPMENT STAGES */}
            {activeTabIndex === 3 && (
              <div className="space-y-16">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.product.stagesTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.product.stagesDesc}</p>
                </div>
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-white/8 hidden md:block" />
                  <div className="space-y-4">
                    {stages.map((stage, i) => (
                      <motion.div
                        key={stage.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className={`relative flex items-start gap-6 p-6 rounded-2xl border transition-all ${
                          stage.status === "active"
                            ? "border-blue-400/30 bg-blue-500/5"
                            : stage.status === "done"
                            ? "border-white/8 bg-white/[0.02]"
                            : "border-white/5 bg-transparent opacity-50"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 text-sm font-light ${
                          stage.status === "done"
                            ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                            : stage.status === "active"
                            ? "border-blue-400/50 bg-blue-500/15 text-blue-200"
                            : "border-white/15 text-white/25"
                        }`}>
                          {stage.status === "done" ? <CheckCircle2 className="w-4 h-4" /> : stage.id}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-base font-light text-white">{stage.label}</h3>
                            {stage.status === "active" && (
                              <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-blue-300/80 border border-blue-400/25 rounded-full px-2.5 py-0.5">{t.product.inProgress}</span>
                            )}
                          </div>
                          <p className="text-sm text-white/40 font-light leading-relaxed">{stage.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
