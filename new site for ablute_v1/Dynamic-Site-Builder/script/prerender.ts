// Post-build step: renders each public route to static HTML so crawlers and AI
// assistants receive the full text without running JavaScript. The browser still
// boots the SPA from the same bundle (main.tsx), so nothing changes for visitors.
import { build as viteBuild } from "vite";
import { mkdir, readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "dist/public");
const ssrDir = path.join(root, "dist/ssr");

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function prerender() {
  await viteBuild({
    configFile: path.join(root, "vite.config.ts"),
    logLevel: "warn",
    build: {
      ssr: path.join(root, "client/src/entry-server.tsx"),
      outDir: ssrDir,
      emptyOutDir: true,
    },
  });

  const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
  const seo = await import(pathToFileURL(path.join(root, "client/src/seo/routes.ts")).href);
  const { SITE_URL, publicRoutes, organizationJsonLd, websiteJsonLd } = seo;
  const seoLangs = await import(pathToFileURL(path.join(root, "client/src/content/seo-pages.ts")).href);
  const template = await readFile(path.join(outDir, "index.html"), "utf-8");

  for (const route of publicRoutes) {
    const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
    const jsonLd: object[] = [organizationJsonLd, websiteJsonLd, ...(route.jsonLd ?? [])];
    const htmlLang = route.lang ? seoLangs.htmlLang[route.lang] : "pt-PT";
    if (route.breadcrumb) {
      jsonLd.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ablute_", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: route.breadcrumb, item: url },
        ],
      });
    }
    const head = [
      `<title>${esc(route.title)}</title>`,
      `<meta name="description" content="${esc(route.description)}" />`,
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="ablute_" />`,
      `<meta property="og:locale" content="${htmlLang.replace("-", "_")}" />`,
      ...(route.alternates
        ? [
            ...route.alternates.map(
              (a: { lang: string; path: string }) =>
                `<link rel="alternate" hreflang="${seoLangs.htmlLang[a.lang]}" href="${SITE_URL}${a.path}" />`,
            ),
            `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${route.alternates.find((a: { lang: string }) => a.lang === "en").path}" />`,
          ]
        : []),
      `<meta property="og:title" content="${esc(route.title)}" />`,
      `<meta property="og:description" content="${esc(route.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${SITE_URL}/og-image.png" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(route.title)}" />`,
      `<meta name="twitter:description" content="${esc(route.description)}" />`,
      `<meta name="twitter:image" content="${SITE_URL}/og-image.png" />`,
      ...jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`),
    ].join("\n    ");

    const html = template
      .replace('<html lang="pt-PT">', `<html lang="${htmlLang}"${route.lang === "ar" ? ' dir="rtl"' : ""}>`)
      .replace("<!--seo-head-->", head)
      .replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`);

    const file = route.path === "/" ? path.join(outDir, "index.html") : path.join(outDir, route.path, "index.html");
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html);
    console.log(`prerendered ${route.path} -> ${path.relative(root, file)}`);
  }

  const today = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes
  .map(
    (r: { path: string; changefreq: string; priority: number }) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
  await writeFile(path.join(outDir, "sitemap.xml"), sitemap);
  await rm(ssrDir, { recursive: true, force: true });
}
