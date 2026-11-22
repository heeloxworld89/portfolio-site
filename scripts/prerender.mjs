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
  { path: "/deepmath", file: "deepmath.html", mustContain: 'id="dm-results"' },
  { path: "/dead-channels", file: "dead-channels.html", mustContain: 'id="dc-proof"' },
  { path: "/lunar-fire-safety", file: "lunar-fire-safety.html", mustContain: 'id="lf-fm2"' },
  // The article list is short by design, so it gets a lower size floor.
  { path: "/articles", file: "articles.html", mustContain: 'href="/dead-channels"', minBytes: 3_000 },
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
  if (appHtml.length < (r.minBytes ?? 8_000) || !appHtml.includes(r.mustContain)) {
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

// ── sitemap.xml: generated on every build ──────────────────────────────────
// Each URL's <lastmod> is the date its content last changed. A short hash of
// the rendered page (header, footer and scripts removed) or of the file is
// kept in scripts/sitemap-state.json; when the hash changes, lastmod becomes
// the build date. Commit the state file after a local build so deploys keep
// the dates. Add new pages and documents to SITEMAP below.
import crypto from "node:crypto";
const statePath = path.join(root, "scripts/sitemap-state.json");
const state = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, "utf8")) : {};
const today = new Date().toISOString().slice(0, 10);
const digest = (v) => crypto.createHash("sha256").update(v).digest("hex").slice(0, 16);
const pageBody = (html) => html
  .replace(/<header class="rx-head"[\s\S]*?<\/header>/g, "")
  .replace(/<footer class="rx-foot"[\s\S]*?<\/footer>/g, "")
  .replace(/<script[\s\S]*?<\/script>/g, "");
const SITEMAP = [
  { loc: "/", freq: "weekly", prio: "1.0", name: "Home", note: "Profile, publications, news and talks" },
  { loc: "/research", freq: "monthly", prio: "0.9", name: "Research: ORMAS", note: "The self-repairing neural network: method, 383 experiments, stability analysis" },
  { loc: "/evidence", freq: "monthly", prio: "0.9", name: "Evidence", note: "Every claim on the site, with its source" },
  { loc: "/work", freq: "monthly", prio: "0.8", name: "Work: OXIEDO, OXIMO, Black Bloxie", note: "The company, the multi-agent system and the twelve-month live study" },
  { loc: "/about", freq: "monthly", prio: "0.8", name: "About", note: "Recognition, background, education and contact" },
  { loc: "/deepmath", freq: "weekly", prio: "0.7", name: "DeepMath 2026 paper and poster", note: "Peer-reviewed stability paper, poster, figures and questions" },
  { loc: "/lunar-fire-safety", freq: "monthly", prio: "0.7", name: "Lunar fire safety", note: "A fire-safety problem in NASA's plans for the Moon, with registered predictions" },
  { loc: "/dead-channels", freq: "monthly", prio: "0.7", name: "VGG-19-BN spends 18.6% of its compute on dead channels", note: "Article, November 2026" },
  { loc: "/articles", freq: "weekly", prio: "0.6", name: "Articles", note: "Writing on neural network training" },
  { loc: "/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf", file: "dist/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf", freq: "monthly", prio: "0.8", name: "Curriculum vitae" },
  { loc: "/assets/pdf/oxiedo_academic_research_paper.pdf", file: "dist/assets/pdf/oxiedo_academic_research_paper.pdf", freq: "yearly", prio: "0.6", name: "OXIMO technical report" },
  { loc: "/assets/pdf/oxiedo_investor_whitepaper.pdf", file: "dist/assets/pdf/oxiedo_investor_whitepaper.pdf", freq: "yearly", prio: "0.6", name: "OXIEDO whitepaper" },
  { loc: "/assets/pdf/oxiedo_pitch_deck.pdf", file: "dist/assets/pdf/oxiedo_pitch_deck.pdf", freq: "monthly", prio: "0.6", name: "OXIEDO pitch deck" },
  { loc: "/llms.txt", file: "dist/llms.txt", freq: "weekly", prio: "0.5", name: "llms.txt: profile for AI assistants" },
  { loc: "/llms-full.txt", file: "dist/llms-full.txt", freq: "weekly", prio: "0.5", name: "llms-full.txt: full site text" },
];
const missing = routes.filter((r) => !SITEMAP.some((e) => e.loc === r.path)).map((r) => r.path);
if (missing.length) throw new Error(`sitemap: add ${missing.join(", ")} to SITEMAP in scripts/prerender.mjs`);
const xmlEsc = (v) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const nextState = {};
const urls = SITEMAP.map((e) => {
  const content = e.file
    ? fs.readFileSync(path.join(root, e.file))
    : pageBody(rendered[e.loc]) + JSON.stringify(pages[e.loc]);
  const h = digest(content);
  const prev = state[e.loc];
  const lastmod = prev && (prev.hash === h || prev.hash === null) ? prev.lastmod : today;
  nextState[e.loc] = { lastmod, hash: h };
  const image = !e.file && pages[e.loc]?.image
    ? `\n    <image:image>\n      <image:loc>${SITE}${xmlEsc(pages[e.loc].image)}</image:loc>\n    </image:image>`
    : "";
  e.lastmod = lastmod;
  return `  <url>\n    <loc>${SITE}${xmlEsc(e.loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.freq}</changefreq>\n    <priority>${e.prio}</priority>${image}\n  </url>`;
});
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="/sitemap.css"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`);
fs.writeFileSync(statePath, JSON.stringify(nextState, null, 2) + "\n");
const changed = SITEMAP.filter((e) => nextState[e.loc].lastmod === today).length;
console.log(`prerender: sitemap.xml (${urls.length} URLs, ${changed} dated ${today})`);

// ── /sitemap: the same list as a page for people, with copy buttons ─────────
// Generated here (not a React route) from SITEMAP, so it is always in step
// with sitemap.xml. Served at /sitemap through cleanUrls.
const htmlEsc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const latest = SITEMAP.map((e) => e.lastmod).sort().at(-1);
const groups = [
  ["Pages", SITEMAP.filter((e) => !e.file)],
  ["Documents", SITEMAP.filter((e) => e.file && e.loc.endsWith(".pdf"))],
  ["For AI assistants", SITEMAP.filter((e) => e.file && e.loc.endsWith(".txt"))],
];
const card = (e) => {
  const url = SITE + e.loc;
  const img = !e.file && pages[e.loc]?.image;
  return `<li class="row">
  <div class="main"><a class="name" href="${htmlEsc(e.loc)}">${htmlEsc(e.name)}</a>${e.note ? `<p class="note">${htmlEsc(e.note)}</p>` : ""}<span class="url">${htmlEsc(url.replace("https://", ""))}</span></div>
  <div class="meta"><span><b>Updated</b>${e.lastmod}</span><span class="prio"><b>Priority</b><i><em style="width:${Number(e.prio) * 100}%"></em></i></span></div>
  ${img ? `<a class="thumb" href="${htmlEsc(e.loc)}" tabindex="-1" aria-hidden="true"><img src="${htmlEsc(img)}" alt="" loading="lazy" width="150" height="79"></a>` : `<span class="thumb is-empty"></span>`}
</li>`;
};
const allUrls = SITEMAP.map((e) => SITE + e.loc).join("\n");
const sitemapPage = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sitemap · Rokib Al Dhin Raadh</title>
<meta name="description" content="Every page, document and AI-readable file on raadh.me, with when each last changed.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${SITE}/sitemap">
<link rel="icon" href="/favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;600&display=swap">
<style>
:root{--bg:#e7e7e2;--paper:#fbfbf9;--ink:#0f1516;--ink2:#4d575a;--teal:#0b404d;--lime:#d8ee96;--line:rgba(11,64,77,.16)}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:"Funnel Sans",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.top{height:6px;background:var(--teal)}
.wrap{max-width:1080px;margin:0 auto;padding:48px 24px 72px}
.brand{font-family:"Instrument Serif",Georgia,serif;font-size:26px;color:var(--teal);text-decoration:none}
.eb{font-family:"JetBrains Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink2);margin:44px 0 10px;display:flex;align-items:center;gap:10px}
.eb::before{content:"";width:28px;height:1px;background:var(--teal)}
h1{font-family:"Instrument Serif",Georgia,serif;font-weight:400;font-size:clamp(44px,7vw,72px);line-height:.98;letter-spacing:-.02em;color:var(--teal);margin:0 0 18px}
h1 em{font-style:italic;color:#146273}
.lead{font-size:17px;line-height:1.6;color:var(--ink2);max-width:62ch;margin:0 0 28px}
.copy{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;margin:0 0 28px}
.copy-box{background:var(--paper);border:1px solid var(--line);border-top:3px solid var(--teal);padding:14px 16px}
.copy-box label{display:block;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:8px}
.copy-row{display:flex;gap:8px;align-items:stretch}
.copy-row input,.copy-row textarea{flex:1;min-width:0;font-family:"JetBrains Mono",monospace;font-size:13px;color:var(--ink);background:#f1f1ec;border:1px solid var(--line);padding:9px 10px;resize:none;line-height:1.5}
.copy-row textarea{white-space:pre;overflow-x:auto}
.copy-row button{flex:none;font-family:"JetBrains Mono",monospace;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:var(--teal);border:0;padding:0 16px;cursor:pointer;min-height:40px}
.copy-row button:hover{background:#146273}.copy-row button.ok{background:#3e9b62}
.copy-hint{margin:8px 0 0;font-size:12.5px;line-height:1.5;color:var(--ink2)}
.copy-hint a{color:var(--teal)}
.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);margin:0 0 40px}
.stat{background:var(--teal);color:#e9f1f2;padding:16px 18px}
.stat b{display:block;font-family:"Instrument Serif",Georgia,serif;font-weight:400;font-size:36px;line-height:1;color:var(--lime)}
.stat span{font-size:13px}
h2{font-family:"JetBrains Mono",monospace;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin:36px 0 12px;display:flex;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:10px}
h2 small{color:var(--ink2);font-weight:400}
ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.row{display:grid;grid-template-columns:minmax(0,1fr) 210px 150px;gap:20px;align-items:center;background:var(--paper);border:1px solid var(--line);padding:16px 18px;transition:border-color .2s,transform .2s}
.row:hover{border-color:rgba(11,64,77,.42);transform:translateY(-1px)}
.name{font-size:18px;font-weight:600;color:var(--ink);text-decoration:none}
.name:hover{color:var(--teal);text-decoration:underline;text-underline-offset:3px}
.note{margin:4px 0 6px;font-size:14px;line-height:1.45;color:var(--ink2)}
.url{display:block;font-family:"JetBrains Mono",monospace;font-size:12px;color:#6b7477;word-break:break-all}
.meta{display:flex;flex-direction:column;gap:8px;font-family:"JetBrains Mono",monospace;font-size:12px;color:var(--ink2)}
.meta b{display:inline-block;width:70px;font-weight:400;text-transform:uppercase;letter-spacing:.06em;font-size:10.5px;color:#6b7477}
.prio{display:flex;align-items:center}.prio i{display:inline-block;width:110px;height:6px;background:rgba(11,64,77,.12)}.prio em{display:block;height:100%;background:var(--teal)}
.thumb{display:block;width:150px}.thumb img{display:block;width:150px;height:auto;aspect-ratio:1200/630;object-fit:cover;border:1px solid var(--line)}
.foot{margin-top:44px;padding-top:18px;border-top:1px solid var(--line);font-size:13.5px;line-height:1.6;color:var(--ink2)}
.foot a{color:var(--teal)}
@media (max-width:820px){.copy{grid-template-columns:1fr}.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.row{grid-template-columns:1fr;gap:12px}.meta{flex-direction:row;flex-wrap:wrap;gap:14px}.thumb,.thumb img{width:100%;max-width:360px}.thumb.is-empty{display:none}}
</style>
</head>
<body>
<div class="top"></div>
<main class="wrap">
<a class="brand" href="/">Rokib Al Dhin Raadh</a>
<p class="eb">Sitemap</p>
<h1>Every page on <em>raadh.me.</em></h1>
<p class="lead">This is the list search engines and AI assistants use to find the site. Every page, document and AI-readable file is below, with when it last changed. It is rebuilt on every deploy.</p>
<div class="copy">
  <div class="copy-box">
    <label for="sm-url">Sitemap URL</label>
    <div class="copy-row"><input id="sm-url" readonly value="${SITE}/sitemap.xml"><button type="button" data-copy="sm-url">Copy</button></div>
    <p class="copy-hint">Paste into Google Search Console or Bing Webmaster Tools, under Sitemaps. <a href="/sitemap.xml">Open the XML</a>.</p>
  </div>
  <div class="copy-box">
    <label for="sm-all">All ${SITEMAP.length} URLs, one per line</label>
    <div class="copy-row"><textarea id="sm-all" readonly rows="3" wrap="off">${htmlEsc(allUrls)}</textarea><button type="button" data-copy="sm-all">Copy</button></div>
    <p class="copy-hint">For requesting indexing page by page. Last change: <b>${latest}</b>.</p>
  </div>
</div>
<div class="stats">
  <div class="stat"><b>${SITEMAP.length}</b><span>URLs in total</span></div>
  ${groups.map(([t, l]) => `<div class="stat"><b>${l.length}</b><span>${t === "For AI assistants" ? "files for AI assistants" : t.toLowerCase()}</span></div>`).join("")}
</div>
${groups.filter(([, l]) => l.length).map(([t, l]) => `<h2>${t} <small>${l.length}</small></h2>\n<ul>\n${l.map(card).join("\n")}\n</ul>`).join("\n")}
<p class="foot">Machine-readable version: <a href="/sitemap.xml">sitemap.xml</a> (Sitemaps protocol 0.9, with image extensions). Every claim on the site is listed with its source on the <a href="/evidence">evidence page</a>.<br>© Rokib Al Dhin Raadh · <a href="/">raadh.me</a></p>
</main>
<script>
document.addEventListener("click", function (e) {
  var b = e.target.closest && e.target.closest("[data-copy]");
  if (!b) return;
  var el = document.getElementById(b.getAttribute("data-copy"));
  var done = function () { var t = b.textContent; b.textContent = "Copied"; b.classList.add("ok"); setTimeout(function () { b.textContent = t; b.classList.remove("ok"); }, 1600); };
  var fallback = function () { el.focus(); el.select(); try { document.execCommand("copy"); } catch (x) {} done(); };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(el.value).then(done, fallback); else fallback();
});
document.querySelectorAll("#sm-url, #sm-all").forEach(function (el) { el.addEventListener("focus", function () { el.select(); }); });
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(dist, "sitemap.html"), sitemapPage);
console.log("prerender: /sitemap -> sitemap.html");
