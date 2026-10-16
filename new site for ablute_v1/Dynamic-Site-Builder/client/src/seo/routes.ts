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
  address: { "@type": "PostalAddress", addressCountry: "PT" },
  sameAs: ["https://www.linkedin.com/company/ablute", "https://app.dealroom.co/companies/ablute"],
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
