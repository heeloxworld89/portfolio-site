/**
 * Build-time pre-rendering.
 *
 * After `vite build` (client) and `vite build --ssr` (server entry), this
 * renders every route to static HTML with its own <head>: title, description,
 * canonical, Open Graph/Twitter tags, JSON-LD and — on /research — Google
 * Scholar citation tags. It also writes robots.txt, sitemap.xml, llms.txt and
 * llms-full.txt from the same facts the pages use, so none of them can drift.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const ssr = await import(pathToFileURL(path.join(ssrDir, entry)).href);
const { render, routes, notFound, jsonLdFor, person, links, paper, company, ormas, recognition, bios, SITE_URL } = ssr;

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headFor(meta, pathForUrl) {
  const url = `${SITE_URL}${pathForUrl === '/' ? '/' : pathForUrl}`;
  const img = `${SITE_URL}${meta.og}`;
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="author" content="${esc(person.name)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${pathForUrl === '/research' ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="${esc(person.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  ];
  if (pathForUrl === '/research') {
    tags.push(
      `<meta name="citation_title" content="${esc(paper.title)}" />`,
      `<meta name="citation_author" content="${esc(paper.author)}" />`,
      `<meta name="citation_publication_date" content="${paper.published.replace(/-/g, '/')}" />`,
      `<meta name="citation_doi" content="${paper.doi}" />`,
      `<meta name="citation_publisher" content="Zenodo" />`,
      `<meta name="citation_pdf_url" content="${esc(links.preprintPdf)}" />`,
      `<meta name="citation_abstract_html_url" content="${esc(links.preprint)}" />`,
    );
  }
  const ld = JSON.stringify(jsonLdFor(pathForUrl === '/404' ? '/' : pathForUrl)).replace(/</g, '\\u003c');
  tags.push(`<script type="application/ld+json">${ld}</script>`);
  return tags.join('\n    ');
}

function writePage(routePath, meta, outFile) {
  const html = template
    .replace('<!--app-head-->', headFor(meta, routePath))
    .replace('<!--app-html-->', render(routePath === '/404' ? '/__not-found__' : routePath));
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`  prerendered ${routePath.padEnd(14)} → ${path.relative(root, outFile)}`);
}

for (const r of routes) {
  const out = r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, `${r.path.slice(1)}.html`);
  writePage(r.path, r, out);
}
writePage('/404', notFound, path.join(dist, '404.html'));

// ── robots.txt ────────────────────────────────────────────────────────────
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

// ── sitemap.xml ───────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        (r) =>
          `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod><priority>${r.path === '/' ? '1.0' : '0.8'}</priority></url>`,
      )
      .join('\n') +
    `\n</urlset>\n`,
);

// ── llms.txt / llms-full.txt ──────────────────────────────────────────────
const llms = `# ${person.name}

> ${person.role}. Inventor of ORMAS, a neural-network training architecture that diagnoses, attributes and repairs its own structural failures while it trains. Based in ${person.location}.

${bios.medium}

## Company
- [OXIEDO](${links.company}): ${company.what} Founded ${company.founded}. Stage: ${company.stage}. ${company.entity}.
- [Investors](${links.invest})

## Research
- [ORMAS preprint](${links.doi}): ${paper.title}. ${paper.author}. Zenodo, ${paper.publishedLabel}, ${paper.version}, DOI ${paper.doi}. ${paper.status}.
- Key result: after a layer is destroyed mid-training, ORMAS recovers to ${ormas.lesion.ormas} (${ormas.lesion.ormasSd}) while parameter-matched baselines stay at ${ormas.lesion.base} — a ${ormas.lesion.gap} gap. ${ormas.experiments} controlled experiments across ${ormas.families} architecture families on one RTX 3090.
- [Research page](${SITE_URL}/research)

## Recognition
${recognition.map((r) => `- ${r.org} (${r.date}): ${r.headline}.`).join('\n')}

## Pages
${routes.map((r) => `- [${r.nav}](${SITE_URL}${r.path === '/' ? '/' : r.path}): ${r.description}`).join('\n')}

## Contact
- Email: ${person.email}
- ORCID: ${links.orcid}
- GitHub: ${links.github}
`;
fs.writeFileSync(path.join(dist, 'llms.txt'), llms);

const full = `${llms}
## Full biography
${bios.long}

## Abstract (ORMAS)
${paper.abstract}

## How to cite
${paper.apa}

\`\`\`bibtex
${paper.bibtex}
\`\`\`
`;
fs.writeFileSync(path.join(dist, 'llms-full.txt'), full);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('  wrote robots.txt, sitemap.xml, llms.txt, llms-full.txt');
