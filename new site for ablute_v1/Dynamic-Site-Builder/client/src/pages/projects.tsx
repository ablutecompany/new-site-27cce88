import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Network } from "lucide-react";

const projectsMeta = [
  { name: "AquaSense", program: "FCT / ANI R&D", period: "2023 – 2025", tags: ["Biosensing", "Photonics", "Water"] },
  { name: "HealthInfra", program: "EIT Health", period: "2024 – 2026", tags: ["Preventive Health", "Smart Home", "Kidney"] },
  { name: "CircularSan", program: "Horizon Europe", period: "2024 – 2027", tags: ["Water Circular Economy", "Building Systems", "EU Funded"] },
];

const partners = [
  { name: "LNEC", fullName: "Laboratório Nacional de Engenharia Civil", type: "Research Institute", url: "#" },
  { name: "IST", fullName: "Instituto Superior Técnico", type: "University", url: "#" },
  { name: "INESC TEC", fullName: "Institute for Systems and Computer Engineering", type: "Technology Center", url: "#" },
  { name: "EPAL", fullName: "Empresa Portuguesa das Águas Livres", type: "Infrastructure Partner", url: "#" },
  { name: "INESCTEC", fullName: "Centre for Biomedical Research", type: "Clinical Partner", url: "#" },
  { name: "IPN", fullName: "Instituto Pedro Nunes", type: "Incubator", url: "#" },
  { name: "CCDR-LVT", fullName: "Regional Development Commission LVT", type: "Public Partner", url: "#" },
  { name: "Ordem Eng.", fullName: "Ordem dos Engenheiros", type: "Professional Body", url: "#" },
];

const affiliationsMeta = [
  { name: "Portugal Health Cluster", type: "Health Technology" },
  { name: "Water Europe", type: "Water Innovation" },
  { name: "Startup Portugal", type: "Innovation Ecosystem" },
  { name: "IPN TechBIO Community", type: "Industry Community" },
  { name: "COTEC Portugal", type: "Industry Association" },
  { name: "ANSAÚDE", type: "Healthcare" },
];

export default function Projects() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { mode, subNavVisible, setSubNavVisible } = useMode();
  const { t } = useLanguage();
  const [, navigate] = useLocation();
  useEffect(() => { if (mode === "health") navigate("/"); }, [mode]);
  useEffect(() => { setSubNavVisible(true); }, []);

  const tabs = [t.projectsPage.tab1, t.projectsPage.tab2, t.projectsPage.tab3];

  const consortiumProjects = [
    { ...projectsMeta[0], desc: t.projects.proj1Desc, role: t.projects.proj1Role },
    { ...projectsMeta[1], desc: t.projects.proj2Desc, role: t.projects.proj2Role },
    { ...projectsMeta[2], desc: t.projects.proj3Desc, role: t.projects.proj3Role },
  ];

  const affiliationDescs = [
    t.projects.aff1Desc,
    t.projects.aff2Desc,
    t.projects.aff3Desc,
    t.projects.aff4Desc,
    t.projects.aff5Desc,
    t.projects.aff6Desc,
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
          className="sticky top-20 z-40 border-b border-white/8 bg-[#0d0d0d]/95 backdrop-blur-md overflow-hidden"
        >
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
                  data-testid={`tab-projects-${idx}`}
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

            {/* CONSORTIUM PROJECTS */}
            {activeTabIndex === 0 && (
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.projects.consortTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.projects.consortDesc}</p>
                </div>
                <div className="space-y-5">
                  {consortiumProjects.map((proj, i) => (
                    <motion.div
                      key={proj.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="border border-white/8 rounded-2xl p-8 bg-white/[0.02] hover:border-white/16 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                        <div className="md:w-48 shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-4">
                            <Layers className="w-5 h-5 text-blue-300/80" />
                          </div>
                          <h3 className="text-lg font-light text-white">{proj.name}</h3>
                          <p className="text-xs text-white/30 font-light mt-1">{proj.program}</p>
                          <p className="text-xs text-white/25 font-mono mt-0.5">{proj.period}</p>
                        </div>
                        <div className="flex-1 space-y-4">
                          <p className="text-sm text-white/45 font-light leading-relaxed">{proj.desc}</p>
                          <div className="flex items-start gap-2">
                            <span className="text-xs text-white/25 font-medium uppercase tracking-wider shrink-0 pt-0.5">{t.projects.roleLabel}</span>
                            <p className="text-sm text-white/60 font-light">{proj.role}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {proj.tags.map((tag) => (
                              <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/35 font-normal">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* PARTNERS */}
            {activeTabIndex === 1 && (
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.projects.partnersTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.projects.partnersDesc}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {partners.map((p, i) => (
                    <motion.a
                      key={p.name}
                      href={p.url}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group border border-white/8 rounded-2xl p-6 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between min-h-[120px]"
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-lg font-light text-white/70 group-hover:text-white transition-colors">{p.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors mt-1 shrink-0" />
                      </div>
                      <div>
                        <p className="text-xs text-white/30 font-light leading-snug">{p.fullName}</p>
                        <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full border border-white/8 text-white/25">{p.type}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* AFFILIATIONS */}
            {activeTabIndex === 2 && (
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.projects.affiliationsTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.projects.affiliationsDesc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {affiliationsMeta.map((a, i) => (
                    <motion.div
                      key={a.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="border border-white/8 rounded-2xl p-7 bg-white/[0.02] hover:border-white/16 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center mb-5">
                        <Network className="w-4 h-4 text-purple-300/70" />
                      </div>
                      <div className="mb-1">
                        <span className="text-[10px] tracking-[0.14em] uppercase text-white/25 font-medium">{a.type}</span>
                      </div>
                      <h3 className="text-base font-light text-white mb-3">{a.name}</h3>
                      <p className="text-sm text-white/40 font-light leading-relaxed">{affiliationDescs[i]}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
