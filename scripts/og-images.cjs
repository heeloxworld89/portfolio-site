// Regenerates public/og/*.png (1200x630 link previews). Needs Playwright:
//   npx -y playwright@1 install chromium && node scripts/og-images.cjs
// Run from the repo root after changing the headline facts.
const { chromium } = require('playwright');
const fs = require('fs');
const img = 'data:image/jpeg;base64,' + fs.readFileSync('public/assets/images/banner/header-left-user.jpg').toString('base64');
const cards = {
  home:        { k: 'Founder & CEO · OXIEDO', t: 'Neural networks that can see inside themselves — and fix what they find.', s: [['80.3%', 'recovery after a layer is destroyed'], ['10.0%', 'standard network'], ['383', 'controlled experiments']] },
  research:    { k: 'ORMAS · Open-access preprint', t: 'The neural network that repairs itself — and shows its work.', s: [['+70.3 pp', 'recovery gap'], ['94.6%', 'prior task retained'], ['DOI', '10.5281/zenodo.21730363']] },
  recognition: { k: 'Recognition · 2026', t: 'NeurIPS 2026 programme committee · 1752vc Ignite · Freshmango · Cosmos Institute #1', s: [['Top 1%', '1752vc final round'], ['#1', 'Cosmos grant cycle'], ['NeurIPS', 'programme committee']] },
  work:        { k: 'Track record', t: 'Five ventures, a first exit at 15, OXIMO, and a 12-month live-company study.', s: [['40,933', 'lines · OXIMO'], ['396', 'paying customers'], ['−91%', 'output on removal']] },
  about:       { k: 'About', t: 'Rokib Al Dhin Raadh — Founder & CEO of OXIEDO, inventor of ORMAS.', s: [['18', 'Dhaka, Bangladesh'], ['2023', 'OXIEDO founded'], ['ORCID', '0009-0003-1178-5296']] },
  press:       { k: 'Press kit', t: 'Approved bios, key facts and photos for press, programmes and grants.', s: [['3', 'bio lengths'], ['DOI', 'preprint'], ['PDF', 'CV & deck']] },
};
const html = (c) => `<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..800&family=Fira+Code:wght@600&display=swap" rel="stylesheet"><style>
*{margin:0;box-sizing:border-box} body{width:1200px;height:630px;background:#f1eee4;font-family:Inter,sans-serif;color:#211f1b;padding:64px 72px;display:flex;flex-direction:column;justify-content:space-between;border-top:10px solid #343b63}
.top{display:flex;align-items:center;gap:22px} .top img{width:84px;height:84px;border-radius:50%;object-fit:cover;border:3px solid #fbf9f2;box-shadow:0 0 0 1px #ded8c7}
.n{font-size:28px;font-weight:800} .r{font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#343b63;margin-top:4px}
.k{font-size:17px;font-weight:800;letter-spacing:2.6px;text-transform:uppercase;color:#343b63;margin-bottom:14px}
.t{font-size:52px;font-weight:800;line-height:1.1;letter-spacing:-1.5px;max-width:1040px}
.s{display:flex;gap:18px} .c{flex:1;background:#fbf9f2;border:1px solid #ded8c7;border-radius:14px;padding:18px 22px}
.v{font-family:'Fira Code',monospace;font-size:30px;font-weight:600;color:#343b63} .l{font-size:16px;color:#646057;margin-top:4px}
</style></head><body><div class="top"><img src="${img}"><div><div class="n">Rokib Al Dhin Raadh</div><div class="r">raadh.me</div></div></div>
<div><div class="k">${c.k}</div><div class="t">${c.t}</div></div>
<div class="s">${c.s.map(([v,l])=>`<div class="c"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('')}</div></body></html>`;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, ignoreHTTPSErrors: true });
  for (const [k, c] of Object.entries(cards)) {
    await p.setContent(html(c), { waitUntil: 'networkidle' }).catch(() => {});
    await p.waitForTimeout(600);
    await p.screenshot({ path: `public/og/${k}.png` });
  }
  await b.close();
})();
