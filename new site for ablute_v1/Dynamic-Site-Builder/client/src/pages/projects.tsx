import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Network, X, FileText } from "lucide-react";
import prrLogoWhite from "@assets/BARRA_LOGOS_PRR_1772981508125.png";
import compete2030Logo from "@assets/BarraAssinaturas_RGBBranco_1772983231237.png";

type Bilingual = { pt: string; en: string };

// Funded / consortium R&D projects — new 5-part card anatomy + HTML fact sheet.
// Figures and dates reproduced here are exactly as confirmed by Nuno; anything
// not yet confirmed documentally is explicitly flagged as pending rather than
// invented (compliance constraint from the 30/10/2026 footer/Projects brief).
type FundedProject = {
  id: string;
  category: Bilingual;
  title: string;
  objective: Bilingual;
  scope: Bilingual;
  fundingBadge: "prr" | "compete2030";
  pdfHref?: string;
  sheet: {
    designation: Bilingual;
    operationCode: string;
    period: Bilingual;
    beneficiary: string;
    program: Bilingual;
    partners?: string[];
    activitiesResults: Bilingual;
    funding: Bilingual;
    fundingConfirmed: boolean;
  };
};

const fundedProjects: FundedProject[] = [
  {
    id: "tprism",
    category: { pt: "Portugal 2030 · I&D em consórcio", en: "Portugal 2030 · R&D consortium" },
    title: "T-PRISM",
    objective: {
      pt: "Plataforma sanitária inteligente para monitorização não invasiva da saúde, combinando sensores bioquímicos e fisiológicos com inteligência artificial.",
      en: "A smart sanitary platform for non-invasive health monitoring, combining biochemical and physiological sensors with artificial intelligence.",
    },
    scope: {
      pt: "Integração de análise multiparamétrica de urina, ECG, PPG, bioimpedância, temperatura e análise fecal, com validação pré-clínica.",
      en: "Integration of multiparametric urinalysis, ECG, PPG, bioimpedance, temperature and faecal analysis, with pre-clinical validation.",
    },
    fundingBadge: "compete2030",
    pdfHref: "/docs/ficha-tprism.pdf",
    sheet: {
      designation: {
        pt: "T-PRISM — Toilet Platform for Real-time Integrated Sensing and Monitoring for Analysis",
        en: "T-PRISM — Toilet Platform for Real-time Integrated Sensing and Monitoring for Analysis",
      },
      operationCode: "Operação n.º 24841 · COMPETE2030-FEDER-02975800",
      period: { pt: "fevereiro de 2026 a janeiro de 2029", en: "February 2026 to January 2029" },
      beneficiary: "Exotictarget, Lda. (promotor)",
      program: {
        pt: "Portugal 2030 · COMPETE 2030 · Cofinanciado pela União Europeia",
        en: "Portugal 2030 · COMPETE 2030 · Co-financed by the European Union",
      },
      partners: ["Exotictarget", "CardioID", "DestinyCloud", "CCG/ZGDV", "PIEP", "CeNTI", "INESC-MN"],
      activitiesResults: {
        pt: "Desenvolvimento e validação pré-clínica de uma plataforma sanitária multiparamétrica para monitorização de saúde, integrando sensores biomédicos e algoritmos de IA. As capacidades previstas não devem ser interpretadas como funcionalidades já validadas clinicamente ou certificadas comercialmente.",
        en: "Development and pre-clinical validation of a multiparametric sanitary platform for health monitoring, integrating biomedical sensors and AI algorithms. Anticipated capabilities should not be read as clinically validated or commercially certified functionalities.",
      },
      funding: {
        pt: "Montante de apoio a confirmar documentalmente antes da publicação.",
        en: "Funding amount pending documentary confirmation before publication.",
      },
      fundingConfirmed: false,
    },
  },
  {
    id: "hfpt",
    category: { pt: "PRR · Agenda Mobilizadora", en: "PRR · Mobilising Agenda" },
    title: "PRR — Health from Portugal",
    objective: {
      pt: "Tecnologia de biossensores para deteção e quantificação de biomarcadores urinários, integrada na plataforma sanitária inteligente.",
      en: "Biosensor technology for the detection and quantification of urinary biomarkers, integrated into the smart sanitary platform.",
    },
    scope: {
      pt: "Desenvolvimento e validação técnica de biossensorização, microfluídica, eletrónica de aquisição e integração funcional no equipamento ablute_.",
      en: "Development and technical validation of biosensing, microfluidics, acquisition electronics, and functional integration into the ablute_ equipment.",
    },
    fundingBadge: "prr",
    pdfHref: "/docs/ficha-prr-hfpt.pdf",
    sheet: {
      designation: {
        pt: "Agenda Health from Portugal (HfPT) — participação da Exotictarget na PPS A1.09",
        en: "Health from Portugal (HfPT) Agenda — Exotictarget's participation in PPS A1.09",
      },
      operationCode: "Agenda Mobilizadora Health from Portugal · PPS A1.09",
      period: { pt: "a confirmar no termo de aceitação", en: "pending confirmation in the acceptance agreement" },
      beneficiary: "Exotictarget, Lda. (participante na Agenda)",
      program: {
        pt: "PRR · Plano de Recuperação e Resiliência · Fundos da União Europeia — NextGenerationEU",
        en: "PRR · Recovery and Resilience Plan · European Union funds — NextGenerationEU",
      },
      activitiesResults: {
        pt: "Objetivos científicos e tecnológicos de biossensorização urinária, com principais resultados técnicos esperados na deteção e na integração funcional no equipamento.",
        en: "Scientific and technological objectives in urinary biosensing, with expected technical results in detection and functional integration into the equipment.",
      },
      funding: {
        pt: "Apoio PRR atribuído à Exotictarget: cerca de €381,25 mil, segundo o portal Mais Transparência. Valor exato a confirmar no termo de aceitação antes da publicação — distinto do montante global da Agenda Health from Portugal.",
        en: "PRR support awarded to Exotictarget: approximately €381.25 thousand, per the \"Mais Transparência\" portal. Exact figure pending confirmation in the acceptance agreement before publication — distinct from Health from Portugal's overall Agenda amount.",
      },
      fundingConfirmed: false,
    },
  },
  {
    id: "voucher-prr",
    category: { pt: "PRR · Voucher para Startups", en: "PRR · Startup Voucher" },
    title: "Voucher PRR",
    objective: {
      pt: "Demonstração da operacionalidade do hardware da sanita ablute_ e preparação dos processos de certificação necessários à sua evolução tecnológica.",
      en: "Demonstrating the operability of the ablute_ toilet hardware and preparing the certification processes needed for its technological evolution.",
    },
    scope: {
      pt: "Desenvolvimento funcional e demonstração do equipamento, consolidação da solução tecnológica e preparação das etapas de certificação.",
      en: "Functional development and demonstration of the equipment, consolidation of the technology solution, and preparation of certification steps.",
    },
    fundingBadge: "prr",
    pdfHref: "/docs/ficha-prr-voucher-startups.pdf",
    sheet: {
      designation: {
        pt: "Demonstração de operacionalidade do hardware e início de processos certificativos",
        en: "Demonstrating the operability of the hardware and initiating certification processes",
      },
      operationCode: "10/C16-i02/2022.P1548",
      period: { pt: "02/01/2023 a 03/07/2023", en: "02/01/2023 to 03/07/2023" },
      beneficiary: "Exotictarget, Lda.",
      program: {
        pt: "PRR · Componente 16 — Empresas 4.0 · Fundos da União Europeia — NextGenerationEU",
        en: "PRR · Component 16 — Companies 4.0 · European Union funds — NextGenerationEU",
      },
      activitiesResults: {
        pt: "A preparação dos processos de certificação foi apoiada; este apoio não implica que a certificação do equipamento esteja concluída.",
        en: "Preparation of certification processes was supported; this support does not imply that the equipment's certification has been concluded.",
      },
      funding: {
        pt: "Apoio aprovado: €30.000.",
        en: "Approved funding: €30,000.",
      },
      fundingConfirmed: true,
    },
  },
];

// Programmes/accelerators and distinctions — not R&D-funded operations.
// No objective/scope copy is invented for Rebuild or Innomed Catalyst since no
// documented description has been confirmed yet; flagged in the open-items list.
const awards: { name: string; category: Bilingual; description?: Bilingual; href?: string }[] = [
  { name: "Rebuild", category: { pt: "Programa de inovação", en: "Innovation programme" } },
  { name: "Innomed Catalyst", category: { pt: "Programa de inovação", en: "Innovation programme" } },
  {
    name: "Women in Tech EU",
    category: { pt: "Prémio — Carla Dias, co-fundadora & CTO", en: "Award — Carla Dias, co-founder & CTO" },
    description: {
      pt: "Distinção individual a Carla Dias, co-fundadora e CTO da ablute_, no âmbito da iniciativa Women in Tech EU.",
      en: "Individual distinction for Carla Dias, ablute_'s co-founder and CTO, awarded under the Women in Tech EU initiative.",
    },
    href: "/docs/ficha-women-in-tech-eu.pdf",
  },
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

function FundingBadgeLogo({ badge }: { badge: "prr" | "compete2030" }) {
  const src = badge === "prr" ? prrLogoWhite : compete2030Logo;
  const alt =
    badge === "prr"
      ? "PRR — Plano de Recuperação e Resiliência / República Portuguesa / União Europeia — NextGenerationEU"
      : "COMPETE 2030 / Portugal 2030 / Cofinanciado pela União Europeia";
  return <img src={src} alt={alt} className="h-7 w-auto object-contain object-left" style={{ opacity: 0.85 }} />;
}

function ProjectSheetModal({ project, onClose, lang, sheetLinkLabel }: {
  project: FundedProject;
  onClose: () => void;
  lang: string;
  sheetLinkLabel: string;
}) {
  const L = (b: Bilingual) => (lang === "pt" ? b.pt : b.en);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-[160] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(4,5,6,0.72)" }}
        onClick={onClose}
      >
        <motion.div
          key="panel"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl"
          style={{ backgroundColor: "#0b0d0e" }}
        >
          <div className="flex items-start justify-between gap-4 px-7 pt-6 pb-4 border-b border-white/8">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-blue-300/70 font-medium mb-1.5">
                {L(project.category)}
              </p>
              <h3 className="text-xl font-light text-white">{project.title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              data-testid="button-close-project-sheet"
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-7 py-6 space-y-5">
            <FundingBadgeLogo badge={project.fundingBadge} />

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                  {lang === "pt" ? "Designação" : "Designation"}
                </dt>
                <dd className="text-white/75 font-light leading-relaxed">{L(project.sheet.designation)}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                  {lang === "pt" ? "Código da operação" : "Operation code"}
                </dt>
                <dd className="text-white/75 font-light">{project.sheet.operationCode}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                  {lang === "pt" ? "Beneficiário" : "Beneficiary"}
                </dt>
                <dd className="text-white/75 font-light">{project.sheet.beneficiary}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                  {lang === "pt" ? "Período" : "Period"}
                </dt>
                <dd className="text-white/75 font-light">{L(project.sheet.period)}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                  {lang === "pt" ? "Programa de financiamento" : "Funding programme"}
                </dt>
                <dd className="text-white/75 font-light leading-relaxed">{L(project.sheet.program)}</dd>
              </div>
              {project.sheet.partners && (
                <div className="sm:col-span-2">
                  <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                    {lang === "pt" ? "Consórcio" : "Consortium"}
                  </dt>
                  <dd className="text-white/75 font-light leading-relaxed">{project.sheet.partners.join(" · ")}</dd>
                </div>
              )}
              <div className="sm:col-span-2">
                <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                  {lang === "pt" ? "Atividades e resultados" : "Activities and results"}
                </dt>
                <dd className="text-white/60 font-light leading-relaxed">{L(project.sheet.activitiesResults)}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[10px] tracking-[0.12em] uppercase text-white/30 mb-1">
                  {lang === "pt" ? "Apoio financeiro" : "Financial support"}
                </dt>
                <dd className={`font-light leading-relaxed ${project.sheet.fundingConfirmed ? "text-white/75" : "text-amber-200/70"}`}>
                  {L(project.sheet.funding)}
                </dd>
              </div>
            </dl>
          </div>

          {project.pdfHref && (
            <div className="px-7 py-4 border-t border-white/8">
              <a
                href={project.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-project-sheet-pdf-${project.id}`}
                className="inline-flex items-center gap-2 text-xs text-white/45 hover:text-white/75 transition-colors duration-200 font-light"
              >
                <FileText className="w-3.5 h-3.5" />
                {sheetLinkLabel} (PDF) ↗
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const { mode, subNavVisible, setSubNavVisible } = useMode();
  const { t, lang } = useLanguage();
  const [, navigate] = useLocation();
  useEffect(() => { if (mode === "health") navigate("/"); }, [mode]);
  useEffect(() => { setSubNavVisible(true); }, []);

  const L = (b: Bilingual) => (lang === "pt" ? b.pt : b.en);

  // Partners and Affiliations tabs are hidden until their lists are confirmed.
  const tabs = [t.projectsPage.tab1, t.projectsPage.tabAwards];

  const affiliationDescs = [
    t.projects.aff1Desc,
    t.projects.aff2Desc,
    t.projects.aff3Desc,
    t.projects.aff4Desc,
    t.projects.aff5Desc,
    t.projects.aff6Desc,
  ];

  const openProject = fundedProjects.find((p) => p.id === openProjectId) || null;

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

            {/* FUNDED & CONSORTIUM PROJECTS */}
            {activeTabIndex === 0 && (
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.projects.consortTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {fundedProjects.map((proj, i) => (
                    <motion.div
                      key={proj.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex flex-col h-full border border-white/8 rounded-2xl p-7 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.035] transition-all duration-300"
                    >
                      <p className="text-[11px] tracking-[0.14em] uppercase text-blue-300/70 font-medium mb-2.5">
                        {L(proj.category)}
                      </p>
                      <h3 className="text-lg md:text-xl font-light text-white mb-3">{proj.title}</h3>
                      <p className="text-sm text-white/65 font-light leading-relaxed mb-2.5">{L(proj.objective)}</p>
                      <p className="text-[13px] text-white/40 font-light leading-relaxed mb-5">{L(proj.scope)}</p>
                      <button
                        type="button"
                        onClick={() => setOpenProjectId(proj.id)}
                        data-testid={`button-open-project-${proj.id}`}
                        className="mt-auto inline-flex items-center gap-1.5 text-[13px] text-cyan-300/70 hover:text-cyan-200 transition-colors duration-200 font-light self-start"
                      >
                        {t.projectsPage.projectSheetLink}
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* AWARDS */}
            {activeTabIndex === 1 && (
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.projectsPage.tabAwards}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {awards.map((proj, i) => {
                    const Card = (
                      <motion.div
                        key={proj.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className={`border border-white/8 rounded-2xl p-8 bg-white/[0.02] transition-all duration-300 ${
                          proj.href ? "hover:border-white/24 hover:bg-white/[0.04] cursor-pointer" : "hover:border-white/16"
                        }`}
                      >
                        <p className="text-[11px] tracking-[0.14em] uppercase text-white/30 font-medium mb-2">
                          {L(proj.category)}
                        </p>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-light text-white">{proj.name}</h3>
                          {proj.href && <ExternalLink className="w-3.5 h-3.5 text-white/25" />}
                        </div>
                        {proj.description && (
                          <p className="text-sm text-white/45 font-light leading-relaxed mt-3">{L(proj.description)}</p>
                        )}
                      </motion.div>
                    );
                    return proj.href ? (
                      <a
                        key={proj.name}
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-award-${proj.name}`}
                        className="block"
                      >
                        {Card}
                      </a>
                    ) : (
                      Card
                    );
                  })}
                </div>
              </div>
            )}

            {/* PARTNERS */}
            {activeTabIndex === 2 && (
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
            {activeTabIndex === 3 && (
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

        {openProject && (
          <ProjectSheetModal
            project={openProject}
            onClose={() => setOpenProjectId(null)}
            lang={lang}
            sheetLinkLabel={t.projectsPage.projectSheetLink}
          />
        )}
      </div>
    </Layout>
  );
}
