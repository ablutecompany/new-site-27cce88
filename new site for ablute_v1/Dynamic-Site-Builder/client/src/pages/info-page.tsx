import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Layout } from "@/components/layout";
import { useLanguage } from "@/context/language-context";
import { getSeoPage, langPrefix, pageLangs, PageLang, SeoPage } from "@/content/seo-pages";

// A language prefix in the URL (/en, /fr, ...) wins; at the root, follow the site language selector.
function usePageLang(): PageLang {
  const [location] = useLocation();
  const { lang } = useLanguage();
  const fromUrl = pageLangs.find((l) => l !== "pt" && location.startsWith(`${langPrefix[l]}/`));
  if (fromUrl) return fromUrl;
  return pageLangs.includes(lang as PageLang) ? (lang as PageLang) : "en";
}

const nav: { slug: SeoPage["slug"]; group: SeoPage["group"]; label: Record<PageLang, string> }[] = [
  { slug: "about", group: "health", label: { pt: "Sobre", en: "About", fr: "À propos", de: "Über uns", it: "Chi siamo", ar: "من نحن" } },
  { slug: "technology", group: "health", label: { pt: "Tecnologia", en: "Technology", fr: "Technologie", de: "Technologie", it: "Tecnologia", ar: "التكنولوجيا" } },
  { slug: "health-faq", group: "health", label: { pt: "Perguntas frequentes", en: "FAQ", fr: "FAQ", de: "FAQ", it: "FAQ", ar: "الأسئلة الشائعة" } },
  { slug: "faq", group: "bathroom", label: { pt: "Perguntas frequentes", en: "FAQ", fr: "FAQ", de: "FAQ", it: "FAQ", ar: "الأسئلة الشائعة" } },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
      >
        <h3 className="text-base md:text-lg font-light text-white">{q}</h3>
        <span className="text-white/40 text-xl leading-none shrink-0">{open ? "−" : "+"}</span>
      </button>
      {/* Answer stays in the HTML when collapsed so crawlers can read it. */}
      <p className={`text-white/50 font-light leading-relaxed pb-6 pr-10 ${open ? "" : "hidden"}`}>{a}</p>
    </div>
  );
}

export default function InfoPage({ slug }: { slug: SeoPage["slug"] }) {
  const lang = usePageLang();
  const page = getSeoPage(lang, slug);
  const prefix = langPrefix[lang];

  return (
    <Layout>
      <div className="min-h-screen bg-anthracite" style={{ fontFamily: "Inter, sans-serif" }}>
        <article dir={lang === "ar" ? "rtl" : "ltr"} className="max-w-3xl mx-auto px-4 md:px-8 pt-32 pb-24">
          <nav aria-label="breadcrumb" className="flex flex-wrap gap-x-6 gap-y-2 mb-12 text-sm">
            {nav.filter((n) => n.group === page.group).map((n) => (
              <Link
                key={n.slug}
                href={`${prefix}/${n.slug}`}
                className={n.slug === slug ? "text-white" : "text-white/40 hover:text-white/70 transition-colors duration-200"}
              >
                {n.label[lang]}
              </Link>
            ))}
          </nav>

          <h1 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">{page.h1}</h1>
          <p className="text-lg text-white/60 font-light leading-relaxed mb-14">{page.lead}</p>

          {page.sections.map((s) => (
            <section key={s.heading} className="mb-12">
              <h2 className="text-xl md:text-2xl font-light text-white mb-4">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-white/50 font-light leading-relaxed mb-4">{p}</p>
              ))}
              {s.list && (
                <ul className="space-y-2 mt-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 text-white/50 font-light leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {page.faqs && (
            <div className="border-t border-white/8">
              {page.faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          )}
        </article>
      </div>
    </Layout>
  );
}
