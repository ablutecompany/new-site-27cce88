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
    "Portuguese company developing a smart toilet with built-in bioFET biosensors that analyse urine during normal use. Pilot phase.",
  address: { "@type": "PostalAddress", addressCountry: "PT" },
  founder: [
    { "@type": "Person", name: "Nuno Marujo", jobTitle: "Co-Founder & CEO" },
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
