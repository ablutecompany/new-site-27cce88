import { seoPages, PageLang, pageLangs, langPrefix, htmlLang } from "../content/seo-pages";

// Per-route metadata injected into the pre-rendered HTML (script/prerender.ts).
// Copy here is DRAFT until approved in site-copy-ablute.md — [confirmar] items must not ship as-is.
export const SITE_URL = "https://www.ablute.pt";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  changefreq: "weekly" | "monthly";
  priority: number;
  breadcrumb?: string;
  lang?: PageLang;
  // The same page in every language, for hreflang.
  alternates?: { lang: PageLang; path: string }[];
  jsonLd?: object[];
}


// Peer-reviewed work by the ablute_ scientific team (DOIs verified on the publisher pages).
const people = {
  hugo: { "@type": "Person", "@id": `${SITE_URL}/#hugo-ferreira`, name: "Hugo Alexandre Ferreira", jobTitle: "Science Lead, ablute_; Professor, Faculdade de Ciências, Universidade de Lisboa", affiliation: [{ "@type": "Organization", name: "Instituto de Biofísica e Engenharia Biomédica (IBEB), Faculdade de Ciências, Universidade de Lisboa" }, { "@id": `${SITE_URL}/#organization` }], sameAs: ["https://orcid.org/0000-0002-4323-3942", "https://www.linkedin.com/in/hugo-alexandre-ferreira-1b130b2/"] },
  beatriz: { "@type": "Person", "@id": `${SITE_URL}/#beatriz-sequeira-antunes`, name: "Beatriz Sequeira-Antunes", jobTitle: "PhD candidate", affiliation: [{ "@type": "Organization", name: "Instituto de Biofísica e Engenharia Biomédica (IBEB), Faculdade de Ciências, Universidade de Lisboa" }], sameAs: ["https://orcid.org/0000-0001-8746-0541", "https://www.linkedin.com/in/beatriz-sequeira-antunes-a28450252/"] },
  nuno: { "@type": "Person", "@id": `${SITE_URL}/#nuno-marujo`, name: "Nuno Marujo", jobTitle: "Co-Founder & CEO, ablute_", worksFor: { "@id": `${SITE_URL}/#organization` }, sameAs: ["https://orcid.org/0009-0005-2823-783X", "https://www.linkedin.com/in/nunomarujo/"] },
};
const ref = (p: { "@id": string }) => ({ "@id": p["@id"] });
const scholarlyJsonLd: object[] = [
  { "@context": "https://schema.org", "@type": "ScholarlyArticle", name: "Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection", datePublished: "2024-10-29", isPartOf: { "@type": "PublicationIssue", name: "Engineering Proceedings 73(1), 7 — 4th International Electronic Conference on Biosensors" }, url: "https://doi.org/10.3390/engproc2024073007", sameAs: "https://doi.org/10.3390/engproc2024073007", author: [{ "@type": "Person", name: "Beatriz Sequeira-Antunes", sameAs: "https://orcid.org/0000-0001-8746-0541" }, { "@type": "Person", name: "Ana S. Viana" }, { "@type": "Person", name: "Ana Francisca Martins" }, { "@type": "Person", name: "Nuno Marujo", sameAs: "https://orcid.org/0009-0005-2823-783X" }, { "@type": "Person", name: "Susana Cardoso" }, { "@type": "Person", name: "Hugo Alexandre Ferreira", sameAs: "https://orcid.org/0000-0002-4323-3942" }], about: ["field-effect transistor biosensor", "pH sensing", "IgG detection"] },
  { "@context": "https://schema.org", "@type": "ScholarlyArticle", name: "Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review", datePublished: "2023-03-29", isPartOf: { "@type": "PublicationIssue", name: "Biomedicines 11(4), 1051" }, url: "https://doi.org/10.3390/biomedicines11041051", sameAs: "https://doi.org/10.3390/biomedicines11041051", author: [{ "@type": "Person", name: "Beatriz Sequeira-Antunes", sameAs: "https://orcid.org/0000-0001-8746-0541" }, { "@type": "Person", name: "Hugo Alexandre Ferreira", sameAs: "https://orcid.org/0000-0002-4323-3942" }], about: ["urinary biomarkers", "point-of-care urinalysis devices"] },
  { "@context": "https://schema.org", "@type": "ScholarlyArticle", name: "Nucleic Acid Aptamer-Based Biosensors: A Review", datePublished: "2023-12-01", isPartOf: { "@type": "PublicationIssue", name: "Biomedicines 11(12), 3201" }, url: "https://doi.org/10.3390/biomedicines11123201", sameAs: "https://doi.org/10.3390/biomedicines11123201", author: [{ "@type": "Person", name: "Beatriz Sequeira-Antunes", sameAs: "https://orcid.org/0000-0001-8746-0541" }, { "@type": "Person", name: "Hugo Alexandre Ferreira", sameAs: "https://orcid.org/0000-0002-4323-3942" }], about: ["aptamer biosensors"] },
];

export const publicRoutes: RouteMeta[] = [
  {
    path: "/",
    title: "ablute_ (Ablute) — Sanita inteligente com biossensores | Inovação portuguesa",
    description:
      "A ablute_ (Ablute) é uma empresa portuguesa de deep-tech que desenvolve uma sanita inteligente com biossensores que analisam a urina de forma não invasiva, com lavagem autónoma e poupança de água.",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/product",
    title: "Produto — ablute_ (Ablute) | Tecnologia, especificações e segurança",
    description:
      "Como funciona a sanita ablute_: sistema de eficiência hídrica, deteção inteligente com biossensores, modos de lavagem, segurança e fases de desenvolvimento.",
    changefreq: "monthly",
    priority: 0.9,
    breadcrumb: "Produto",
  },
  {
    path: "/company",
    title: "Empresa — ablute_ (Ablute) | Missão, equipa e reconhecimento",
    description:
      "A missão, a equipa fundadora e de I&D e o reconhecimento institucional da ablute_ (Ablute), empresa portuguesa de saneamento inteligente.",
    changefreq: "monthly",
    priority: 0.8,
    breadcrumb: "Empresa",
  },
  {
    path: "/projects",
    title: "Projetos — ablute_ (Ablute) | I&D colaborativa, parceiros e afiliações",
    description:
      "Projetos de I&D em consórcio, rede de parceiros e afiliações da ablute_ (Ablute) em Portugal e na Europa.",
    changefreq: "monthly",
    priority: 0.8,
    breadcrumb: "Projetos",
  },
  ...pageLangs.flatMap((lang) =>
    seoPages[lang].map((p): RouteMeta => {
      const path = `${langPrefix[lang]}/${p.slug}`;
      const jsonLd: object[] = [];
      if (p.faqs) {
        jsonLd.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: htmlLang[lang],
          mainEntity: p.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        });
      } else {
        jsonLd.push({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.h1,
          description: p.description,
          inLanguage: htmlLang[lang],
          url: `${SITE_URL}${path}`,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          about: { "@id": `${SITE_URL}/#organization` },
        });
      }
      if (p.slug === "technology") jsonLd.push(...scholarlyJsonLd, people.hugo, people.beatriz, people.nuno);
      return {
        path,
        title: p.title,
        description: p.description,
        changefreq: "monthly",
        priority: 0.8,
        breadcrumb: p.h1,
        lang,
        alternates: pageLangs.map((l) => ({ lang: l, path: `${langPrefix[l]}/${p.slug}` })),
        jsonLd,
      };
    }),
  ),
];

// [confirmar] Every field and every sameAs URL must be confirmed by Nuno before deploy.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ablute_",
  alternateName: "Ablute",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Portuguese company developing a residential-size smart toilet with built-in bioFET biosensors that measure urinary biomarkers, stool analysis (in development), seat-integrated ECG, PPG, weight and temperature sensing, and autonomous washing of bowl and seat with about 0.5 litres of water. Pilot phase.",
  address: { "@type": "PostalAddress", addressCountry: "PT" },
  knowsAbout: ["smart toilet health monitoring", "self-cleaning toilet", "stool analysis", "occult blood detection", "bioFET biosensors", "field-effect transistor biosensors", "urinalysis", "urinary biomarkers", "creatinine", "smart toilet", "in-toilet urine analysis"],
  founder: [
    { "@type": "Person", "@id": `${SITE_URL}/#nuno-marujo`, name: "Nuno Marujo", jobTitle: "Co-Founder & CEO", sameAs: ["https://orcid.org/0009-0005-2823-783X", "https://www.linkedin.com/in/nunomarujo/"] },
    { "@type": "Person", name: "Carla Dias", jobTitle: "Co-Founder & CTO", award: "Women in Tech EU" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/ablute",
    "https://www.crunchbase.com/organization/ablute",
    "https://app.dealroom.co/companies/ablute",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "ablute_",
  alternateName: "Ablute",
  url: `${SITE_URL}/`,
  inLanguage: "pt-PT",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
