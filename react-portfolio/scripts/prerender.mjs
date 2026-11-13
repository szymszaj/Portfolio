import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const SSR_ENTRY = path.join(ROOT, "dist-ssr", "entry-server.js");
const ROOT_PLACEHOLDER = '<div id="root"></div>';

const serialize = (data) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const { render, fetchCmsContent } = await import(
  pathToFileURL(SSR_ENTRY).href
);

let cmsContent = null;
try {
  const content = await fetchCmsContent();
  if (content && Object.keys(content).length > 0) {
    cmsContent = content;
    console.log(
      `[prerender] treść z Sanity: ${Object.keys(content).join(", ")}`,
    );
  } else {
    console.warn("[prerender] Sanity zwróciło pustą treść, używam fallbacku");
  }
} catch (error) {
  console.warn(
    `[prerender] nie udało się pobrać treści z Sanity (${error.message}), używam fallbacku z translations.js`,
  );
}

const appHtml = await render(cmsContent);

const templatePath = path.join(DIST, "index.html");
const template = await fs.readFile(templatePath, "utf8");

if (!template.includes(ROOT_PLACEHOLDER)) {
  throw new Error(
    `[prerender] nie znalazłem ${ROOT_PLACEHOLDER} w dist/index.html`,
  );
}

const snapshot = cmsContent
  ? `\n    <script>window.__CMS_CONTENT__=${serialize(cmsContent)}</script>`
  : "";

await fs.writeFile(
  templatePath,
  template.replace(
    ROOT_PLACEHOLDER,
    `<div id="root">${appHtml}</div>${snapshot}`,
  ),
  "utf8",
);

const sitemapPath = path.join(DIST, "sitemap.xml");
try {
  const sitemap = await fs.readFile(sitemapPath, "utf8");
  const today = new Date().toISOString().slice(0, 10);
  await fs.writeFile(
    sitemapPath,
    sitemap.replace(
      /<lastmod>[^<]*<\/lastmod>/g,
      `<lastmod>${today}</lastmod>`,
    ),
    "utf8",
  );
} catch (error) {
  console.warn(`[prerender] pomijam sitemap.xml (${error.message})`);
}

console.log(
  `[prerender] dist/index.html: ${(appHtml.length / 1024).toFixed(1)} kB treści`,
);
