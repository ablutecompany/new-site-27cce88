import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { useMode } from "@/context/mode-context";
import { useLanguage } from "@/context/language-context";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Award, Leaf, Cpu, Heart } from "lucide-react";

const valueIcons = [Leaf, Cpu, Heart];

const certYears = ["2023", "2024", "2023", "2022"];

const founders = [
  {
    firstName: "Nuno",
    lastName: "Marujo",
    name: "Nuno Marujo",
    role: "Co-Founder & CEO",
    bio: "Responsible for company strategy, partnerships and business development, leading the growth and global positioning of the ablute_ platform.",
    linkedin: "https://www.linkedin.com/in/nunomarujo/",
    orcid: null,
  },
  {
    firstName: "Carla",
    lastName: "Dias",
    name: "Carla Dias",
    role: "Co-Founder & CTO",
    bio: "Leads the technical architecture of the ablute_ platform, including system design, software development and integration of sensing technologies. EU Woman in Tech Award recipient.",
    linkedin: "https://www.linkedin.com/in/carla-dias-ablute/",
    orcid: null,
  },
  {
    firstName: "Bruno",
    lastName: "Nascimento",
    name: "Bruno Nascimento",
    role: "Chief Medical Officer",
    bio: "Medical doctor responsible for the clinical vision of the ablute_ platform, connecting biomarker monitoring with preventive and personalised healthcare.",
    linkedin: "https://www.linkedin.com/in/bruno-nascimento-942b7520/",
    orcid: null,
  },
  {
    firstName: "Hugo",
    lastName: "Ferreira",
    name: "Hugo Ferreira",
    role: "Science Lead",
    bio: "Researcher specialised in nanotechnology and biosensors for in vitro diagnostics, responsible for the scientific direction of the ablute_ sensing technologies.",
    linkedin: "https://www.linkedin.com/in/hugo-alexandre-ferreira-1b130b2/",
    orcid: "#",
  },
];

const rdTeam = [
  {
    firstName: "Alexandra",
    lastName: "Meira",
    name: "Alexandra Meira",
    role: "PhD — R&D Project Director",
    bio: "Coordinates research and development activities and contributes to the scientific and technological advancement of the ablute_ platform.",
    linkedin: "#",
    orcid: "#",
  },
  {
    firstName: "Beatriz",
    lastName: "Antunes",
    name: "Beatriz Antunes",
    role: "PhD Candidate",
    bio: "Researcher working on biosensing technologies and biomarker detection systems associated with the ablute_ platform.",
    linkedin: "#",
    orcid: "#",
  },
  {
    firstName: "Joana",
    lastName: "Roque",
    name: "Joana Roque",
    role: "MSc Biotechnology",
    bio: "Contributes to biotechnology and biomarker research supporting the development of the ablute_ biosensing system.",
    linkedin: "#",
    orcid: "#",
  },
  {
    firstName: "Nuno",
    lastName: "Aragão",
    name: "Nuno Aragão",
    role: "Electronics Engineer",
    bio: "Responsible for electronic system development and hardware integration within the ablute_ platform.",
    linkedin: "#",
    orcid: null,
  },
];

function ProfilePhoto({ firstName, lastName, size = "lg" }: { firstName: string; lastName: string; size?: "founder" | "lg" | "md" }) {
  const slug = `${firstName}_${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`;
  const [imgSrc, setImgSrc] = useState(`/team/${slug}.jpg`);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (imgSrc.endsWith(".jpg")) {
      setImgSrc(`/team/${slug}.png`);
    } else {
      setFailed(true);
    }
  };

  const dimClass = size === "founder" ? "w-32 h-32" : size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const textClass = size === "founder" ? "text-2xl" : size === "lg" ? "text-lg" : "text-base";
  const shapeClass = size === "founder" ? "rounded-full" : "rounded-xl";

  if (failed) {
    return (
      <div className={`${dimClass} ${shapeClass} bg-gradient-to-br from-[#1a2535] to-[#0d1520] border border-white/10 flex items-center justify-center text-white/30 ${textClass} font-light shrink-0`}>
        {initials}
      </div>
    );
  }

  return (
    <div className={`${dimClass} ${shapeClass} overflow-hidden border border-white/12 shrink-0 shadow-[0_4px_24px_rgba(0,0,0,0.5)]`}>
      <img
        src={imgSrc}
        alt={`${firstName} ${lastName}`}
        onError={handleError}
        className="w-full h-full object-cover object-top"
        style={{ filter: "brightness(1.06) contrast(1.08) saturate(0.88)" }}
      />
    </div>
  );
}

function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="ORCID">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.862 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z" />
    </svg>
  );
}

function TeamCard({ member, variant = "founder" }: { member: typeof founders[0]; variant?: "founder" | "rd" }) {
  if (variant === "founder") {
    return (
      <motion.div
        whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.14)" }}
        transition={{ duration: 0.2 }}
        className="border border-white/8 rounded-2xl p-7 bg-white/[0.02] transition-colors duration-300 flex flex-col items-center text-center gap-5"
      >
        <ProfilePhoto firstName={member.firstName} lastName={member.lastName} size="founder" />
        <div className="w-full">
          <h3 className="text-base font-light text-white leading-snug">{member.name}</h3>
          <p className="text-sm text-white/40 font-light mt-1 leading-snug">{member.role}</p>
          <div className="flex items-center justify-center gap-3 mt-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                data-testid={`link-linkedin-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`}
                className="text-white/25 hover:text-white/60 transition-colors duration-200"
                aria-label={`LinkedIn — ${member.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {member.orcid && (
              <a
                href={member.orcid}
                data-testid={`link-orcid-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`}
                className="text-white/25 hover:text-[#a6ce39]/70 transition-colors duration-200"
                aria-label={`ORCID — ${member.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <OrcidIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-white/35 font-light leading-relaxed text-left w-full border-t border-white/6 pt-4">{member.bio}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.14)" }}
      transition={{ duration: 0.2 }}
      className="border border-white/8 rounded-2xl p-5 bg-white/[0.02] transition-colors duration-300 flex flex-col gap-4"
    >
      <div className="flex items-start gap-4">
        <ProfilePhoto firstName={member.firstName} lastName={member.lastName} size="lg" />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-light text-white leading-snug">{member.name}</h3>
          <p className="text-sm text-white/40 font-light mt-0.5 leading-snug">{member.role}</p>
          <div className="flex items-center gap-3 mt-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                data-testid={`link-linkedin-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`}
                className="text-white/25 hover:text-white/60 transition-colors duration-200"
                aria-label={`LinkedIn — ${member.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {member.orcid && (
              <a
                href={member.orcid}
                data-testid={`link-orcid-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`}
                className="text-white/25 hover:text-[#a6ce39]/70 transition-colors duration-200"
                aria-label={`ORCID — ${member.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <OrcidIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-white/35 font-light leading-relaxed">{member.bio}</p>
    </motion.div>
  );
}

export default function Company() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { mode, subNavVisible, setSubNavVisible } = useMode();
  const { t } = useLanguage();
  const [, navigate] = useLocation();
  useEffect(() => { if (mode === "health") navigate("/"); }, [mode]);
  useEffect(() => { setSubNavVisible(true); }, []);

  const tabs = [t.companyPage.tab1, t.companyPage.tab2, t.companyPage.tab3];

  const values = [
    { icon: valueIcons[0], title: t.company.val1Title, desc: t.company.val1Desc },
    { icon: valueIcons[1], title: t.company.val2Title, desc: t.company.val2Desc },
    { icon: valueIcons[2], title: t.company.val3Title, desc: t.company.val3Desc },
  ];

  const certifications = [
    { title: t.company.cert1Title, year: certYears[0], desc: t.company.cert1Desc },
    { title: t.company.cert2Title, year: certYears[1], desc: t.company.cert2Desc },
    { title: t.company.cert3Title, year: certYears[2], desc: t.company.cert3Desc },
    { title: t.company.cert4Title, year: certYears[3], desc: t.company.cert4Desc },
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
                  data-testid={`tab-company-${idx}`}
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

            {/* MISSION & VALUES */}
            {activeTabIndex === 0 && (
              <div className="space-y-16">
                <div className="max-w-3xl space-y-5">
                  <h2 className="text-2xl font-light text-white">{t.company.missionTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed text-lg">{t.company.missionP1}</p>
                  <p className="text-white/35 font-light leading-relaxed">{t.company.missionP2}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {values.map((v, i) => (
                    <div key={i} className="border border-white/8 rounded-2xl p-8 bg-white/[0.02] hover:border-white/16 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-5">
                        <v.icon className="w-5 h-5 text-blue-300/80" />
                      </div>
                      <h3 className="text-base font-light text-white mb-3">{v.title}</h3>
                      <p className="text-sm text-white/40 font-light leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="border-l-2 border-white/10 pl-8 max-w-2xl">
                  <blockquote className="text-xl font-extralight text-white/60 leading-relaxed italic">
                    {t.company.quote}
                  </blockquote>
                  <p className="mt-4 text-xs text-white/30 tracking-widest uppercase">{t.company.quoteAttr}</p>
                </div>
              </div>
            )}

            {/* TEAM */}
            {activeTabIndex === 1 && (
              <div className="space-y-20">

                {/* Founders & Leadership */}
                <div>
                  <div className="mb-10">
                    <h2 className="text-sm tracking-[0.18em] uppercase text-white/30 font-medium mb-3">{t.company.foundersLabel}</h2>
                    <p className="text-white/35 font-light leading-relaxed max-w-2xl text-sm">{t.company.foundersIntro}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {founders.map((f) => (
                      <TeamCard key={f.name} member={f} variant="founder" />
                    ))}
                  </div>
                </div>

                {/* Research & Development */}
                <div>
                  <div className="mb-10">
                    <h2 className="text-sm tracking-[0.18em] uppercase text-white/30 font-medium mb-3">{t.company.rdLabel}</h2>
                    <p className="text-white/35 font-light leading-relaxed max-w-2xl text-sm">{t.company.rdIntro}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {rdTeam.map((m) => (
                      <TeamCard key={m.name} member={m} variant="rd" />
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* CERTIFICATIONS */}
            {activeTabIndex === 2 && (
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-light text-white mb-3">{t.company.certsTitle}</h2>
                  <p className="text-white/50 font-light leading-relaxed">{t.company.certsDesc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="border border-white/8 rounded-2xl p-8 bg-white/[0.02] hover:border-white/16 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center">
                          <Award className="w-5 h-5 text-amber-300/70" />
                        </div>
                        <span className="text-xs font-mono text-white/25">{cert.year}</span>
                      </div>
                      <h3 className="text-base font-light text-white mb-3">{cert.title}</h3>
                      <p className="text-sm text-white/40 font-light leading-relaxed">{cert.desc}</p>
                    </div>
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
