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
const appHtml = await render("/");

if (appHtml.length < 20_000 || !appHtml.includes('id="research"')) {
  throw new Error(`Prerender produced an incomplete page (${appHtml.length} bytes)`);
}

const shell = fs.readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!shell.includes(marker)) throw new Error("dist/index.html has no empty #root to fill");
fs.writeFileSync(indexPath, shell.replace(marker, `<div id="root">${appHtml}</div>`));

// ── llms-full.txt: the rendered page as readable text ──────────────────────
const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", mdash: "—", ndash: "–",
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", middot: "·", hellip: "…", times: "×", sigma: "σ" };
const decode = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
  .replace(/&([a-z]+);/gi, (m, n) => entities[n] ?? m);

// Main content only: skip the sidebar navigation, start at the hero.
const homeAt = appHtml.indexOf('id="home"');
const main = homeAt > 0 ? appHtml.slice(appHtml.lastIndexOf("<", homeAt)) : appHtml;
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

> Complete text of https://www.raadh.me/, generated at build time from the same render the site serves.
> Curated summary: https://www.raadh.me/llms.txt

`;
fs.writeFileSync(path.join(dist, "llms-full.txt"), header + text + "\n");

console.log(`prerender: index.html +${(appHtml.length / 1024).toFixed(0)} KB, llms-full.txt ${(text.length / 1024).toFixed(0)} KB`);
