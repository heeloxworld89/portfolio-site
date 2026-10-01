// Post-build step: render the app to static HTML and write it into
// dist/index.html, so the first response contains the full page for search
// engines, AI crawlers and link previews. Also writes /llms-full.txt, a plain
// text copy of the whole page generated from the same render.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const indexPath = path.join(dist, "index.html");

const { render } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);

// Each route gets its own HTML file with its own title, description and
// canonical URL. vercel.json sets cleanUrls, so /research serves research.html.
const SITE = "https://www.raadh.me";
const routes = [
  { path: "/", file: "index.html", mustContain: 'id="news"' },
  { path: "/research", file: "research.html", mustContain: 'id="research"' },
  { path: "/work", file: "work.html", mustContain: 'id="oximo"' },
  { path: "/about", file: "about.html", mustContain: 'id="recognition"' },
  { path: "/evidence", file: "evidence.html", mustContain: 'id="ev-research"' },
];
const { pages, schemaFor } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);

const shell = fs.readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!shell.includes(marker)) throw new Error("dist/index.html has no empty #root to fill");

const esc = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const setMeta = (html, attr, key, value) =>
  html.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), `$1${esc(value)}$2`);

const rendered = {};
for (const r of routes) {
  const appHtml = await render(r.path);
  if (appHtml.length < 8_000 || !appHtml.includes(r.mustContain)) {
    throw new Error(`Prerender of ${r.path} is incomplete (${appHtml.length} bytes)`);
  }
  rendered[r.path] = appHtml;
  const meta = pages[r.path];
  const url = SITE + (r.path === "/" ? "/" : r.path);
  let html = shell.replace(marker, `<div id="root">${appHtml}</div>`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = setMeta(html, "name", "description", meta.description);
  html = setMeta(html, "property", "og:title", meta.title);
  html = setMeta(html, "property", "og:description", meta.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", meta.title);
  html = setMeta(html, "name", "twitter:description", meta.description);
  const image = SITE + meta.image;
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:image:alt", meta.imageAlt);
  html = setMeta(html, "name", "twitter:image", image);
  html = setMeta(html, "name", "twitter:image:alt", meta.imageAlt);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  // Per-page structured data (src/site/schema.ts) replaces the shell's default graph.
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    () => `<script type="application/ld+json">${schemaFor(r.path)}</script>`,
  );
  fs.writeFileSync(path.join(dist, r.file), html);
  console.log(`prerender: ${r.path} -> ${r.file} (${(appHtml.length / 1024).toFixed(0)} KB)`);
}
const appHtml = routes.map((r) => rendered[r.path]).join("\n");

// ── llms-full.txt: the rendered page as readable text ──────────────────────
const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", mdash: "—", ndash: "–",
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", middot: "·", hellip: "…", times: "×", sigma: "σ" };
const decode = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
  .replace(/&([a-z]+);/gi, (m, n) => entities[n] ?? m);

// Main content only: skip the sidebar navigation, start at the hero.
// Main content only: drop each page's header navigation and footer.
const main = appHtml.replace(/<header class="rx-head"[\s\S]*?<\/header>/g, "").replace(/<footer class="rx-foot"[\s\S]*?<\/footer>/g, "");
let text = main
  .replace(/<(style|script|svg|noscript|iframe|button)\b[\s\S]*?<\/\1>/gi, " ")
  .replace(/<span class="katex-mathml">[\s\S]*?<\/span>/gi, " ")
  .replace(/<h([1-6])[^>]*>/gi, (_, n) => `\n\n${"#".repeat(Math.min(Number(n) + 1, 6))} `)
  .replace(/<\/h[1-6]>/gi, "\n")
  .replace(/<li[^>]*>/gi, "\n- ")
  .replace(/<(br|hr)[^>]*>/gi, "\n")
  .replace(/<\/(p|div|tr|table|ul|ol|section|header|footer|li)>/gi, "\n")
  .replace(/<\/t[dh]>/gi, " | ")
  .replace(/<\/?(span|a|b|strong|em|i|code)\b[^>]*>/gi, " ")
  .replace(/<[^>]+>/g, "")
  .replace(/<!--[\s\S]*?-->/g, "");
text = decode(text)
  .split("\n")
  .map((l) => l.replace(/[ \t]+/g, " ").replace(/ ([,.;:!?)’”%])/g, "$1").replace(/([(“‘]) /g, "$1").trim())
  .filter((l) => l !== "-" && l !== "|")
  .join("\n")
  .replace(/\n{3,}/g, "\n\n")
  .trim();

const header = `# Rokib Al Dhin Raadh — full site text

> Complete text of https://www.raadh.me/ and its pages (/research, /work, /about), generated at build time from the same render the site serves.
> Curated summary: https://www.raadh.me/llms.txt

`;
fs.writeFileSync(path.join(dist, "llms-full.txt"), header + text + "\n");

// ── evidence.json: the /evidence page as structured data ───────────────────
const { evidence, evidenceChecked } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);
const claims = evidence.flatMap((g) => g.rows.map((r) => ({ section: g.title, claim: r.claim, detail: r.detail, status: r.status, sources: r.source ?? [] })));
fs.writeFileSync(path.join(dist, "evidence.json"), JSON.stringify({
  subject: "Rokib Al Dhin Raadh",
  page: SITE + "/evidence",
  lastChecked: evidenceChecked,
  requestDocuments: "raadh@oxiedo.com",
  summary: { claims: claims.length, publicRecord: claims.filter((c) => c.status === "Public record").length },
  claims,
}, null, 2) + "\n");
console.log(`prerender: evidence.json (${claims.length} claims)`);

console.log(`prerender: llms-full.txt ${(text.length / 1024).toFixed(0)} KB`);
