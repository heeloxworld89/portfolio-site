// Renders the link-preview (Open Graph) images in public/og/ with the site's
// own fonts and colours. Run from the repo root: node assets-source/og/make.cjs
// (needs Playwright). Bump VERSION when the images change, so WhatsApp,
// LinkedIn and X fetch the new file instead of a cached one.
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const VERSION = "v3";
const dir = __dirname;
const b64 = (f) => fs.readFileSync(path.join(dir, f)).toString("base64");
const portrait = "data:image/webp;base64," + fs.readFileSync("public/assets/images/portrait.webp").toString("base64");
const font = (fam, file, style = "normal") =>
  `@font-face{font-family:'${fam}';font-style:${style};font-weight:300 800;src:url(data:font/woff2;base64,${b64("fonts/" + file)}) format('woff2')}`;
const fonts = [
  font("Funnel Sans", "FunnelSans.woff2"),
  font("Instrument Serif", "InstrumentSerif.woff2"),
  font("Instrument Serif", "InstrumentSerif-Italic.woff2", "italic"),
  font("JetBrains Mono", "JetBrainsMono.woff2"),
].join("");

const cards = {
  home: {
    k: "Founder & CEO, OXIEDO · Dhaka",
    name: true,
    t: "The 18-year-old founder of OXIEDO and inventor of ORMAS, the self-repairing neural network.",
    chips: [["DeepMath 2026", "Accepted"], ["1752vc", "Top 1%"], ["Cosmos Institute", "Ranked #1"]],
    right: "portrait",
  },
  research: {
    k: "Technology · ORMAS",
    h: "The neural network that <em>repairs itself.</em>",
    t: "Finds, fixes and records its own failures mid-training. Stability proof accepted at DeepMath 2026.",
    chips: [["383", "experiments"], ["DeepMath 2026", "Accepted"], ["Open", "preprint + code"]],
    right: "result",
  },
  work: {
    k: "Company · OXIEDO",
    h: "An audit trail for <em>what AI learned.</em>",
    t: "OXIEDO licenses ORMAS to banks, hospitals and other regulated teams, on their own servers.",
    chips: [["Founded", "2023"], ["OXIMO", "40,933 lines"], ["Black Bloxie", "12-month live study"]],
    right: "company",
  },
  about: {
    k: "About · Founder & CEO, OXIEDO",
    name: true,
    t: "Self-taught, eighteen, and selected by DeepMath, NeurIPS, 1752vc and Cosmos Institute in one year.",
    chips: [["7", "MIT programmes"], ["10", "selections in 2026"], ["Age 12", "first venture"]],
    right: "portrait",
  },
};

const right = {
  portrait: `<div class="pwrap"><div class="ring"></div><img class="portrait" src="${portrait}"></div>`,
  result: `<div class="panel"><div class="pk">One layer destroyed mid-training</div>
    <div class="bar"><div class="bt"><span>ORMAS</span><b>80.3%</b></div><div class="tr"><i style="width:80.3%"></i></div></div>
    <div class="bar bad"><div class="bt"><span>Standard network</span><b>10.0%</b></div><div class="tr"><i style="width:10%"></i></div></div>
    <div class="pf">+70.3 points recovered · CIFAR-10 · 3 seeds</div></div>`,
  company: `<div class="panel co"><div class="pk">OXIEDO</div><div class="cob">Model Change<br>Record</div>
    <div class="pf">A tamper-evident log of every weight change in training, built for SR 26-2 and the EU AI Act.</div></div>`,
};

const html = (c) => `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;position:relative;background:#e7e7e2;font-family:'Funnel Sans',sans-serif;color:#0f1516}
.field{position:absolute;right:-260px;top:-200px;width:1000px;height:760px;filter:blur(70px);opacity:.8;transform:rotate(-12deg);
  background:radial-gradient(40% 45% at 60% 38%,rgba(100,205,221,.85),transparent 70%),radial-gradient(38% 40% at 42% 66%,rgba(152,224,160,.8),transparent 70%),radial-gradient(30% 34% at 30% 80%,rgba(216,238,150,.75),transparent 70%)}
.top{position:absolute;left:0;right:0;top:0;height:8px;background:#0b404d}
.l{position:absolute;left:72px;top:70px;width:640px;bottom:64px;display:flex;flex-direction:column}
.k{display:flex;align-items:center;gap:12px;font-family:'JetBrains Mono',monospace;font-size:17px;letter-spacing:.1em;text-transform:uppercase;color:#273033}
.k i{width:10px;height:10px;border-radius:50%;background:#3e9b62;box-shadow:0 0 0 5px rgba(62,155,98,.18)}
.n{font-family:'Instrument Serif',serif;font-size:84px;line-height:.95;letter-spacing:-.02em;color:#0b404d;margin-top:26px}
.h{font-family:'Instrument Serif',serif;font-size:72px;line-height:.98;letter-spacing:-.02em;color:#0b404d;margin-top:24px}
.h em{font-style:italic;color:#146273}
.t{font-size:29px;line-height:1.38;color:#273033;margin-top:24px;max-width:630px}
.chips{display:flex;gap:10px;margin-top:auto}
.chip{background:rgba(251,251,249,.85);border:1px solid rgba(11,64,77,.28);border-top:3px solid #0b404d;padding:14px 18px}
.chip b{display:block;font-size:22px;font-weight:700;color:#0f1516}
.chip span{display:block;font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:#4d575a;margin-top:3px}
.url{position:absolute;right:56px;bottom:40px;font-family:'JetBrains Mono',monospace;font-size:18px;letter-spacing:.06em;color:#0b404d}
.pwrap{position:absolute;right:70px;top:78px;width:400px;height:400px}
.ring{position:absolute;inset:-18px;border-radius:50%;border:1.5px dashed rgba(11,64,77,.4)}
.portrait{width:400px;height:400px;border-radius:50%;object-fit:cover;object-position:50% 30%;box-shadow:0 30px 60px -30px rgba(11,64,77,.6)}
.panel{position:absolute;right:64px;top:90px;width:410px;background:linear-gradient(135deg,#082f39,#0b404d 55%,#155e5a);color:#eef6f3;padding:34px 34px 30px}
.pk{font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.1em;text-transform:uppercase;color:#d8ee96;margin-bottom:22px}
.bar{margin-bottom:22px}.bt{display:flex;justify-content:space-between;align-items:baseline;font-size:18px;font-weight:600}
.bt b{font-family:'Instrument Serif',serif;font-weight:400;font-size:52px;color:#fbfbf9}
.bad .bt b{color:#e7a08d}.tr{height:10px;background:rgba(255,255,255,.14);margin-top:6px}.tr i{display:block;height:100%;background:#d8ee96}.bad .tr i{background:#e7a08d}
.pf{font-size:16px;line-height:1.5;color:rgba(240,247,245,.85);border-top:1px solid rgba(240,247,245,.2);padding-top:14px}
.cob{font-family:'Instrument Serif',serif;font-size:60px;line-height:.98;color:#fbfbf9;margin-bottom:24px}
</style></head><body><div class="field"></div><div class="top"></div>
<div class="l"><div class="k"><i></i>${c.k}</div>
${c.name ? `<div class="n">Rokib Al Dhin Raadh</div>` : `<div class="h">${c.h}</div>`}
<div class="t">${c.t}</div>
<div class="chips">${c.chips.map(([b, s]) => `<div class="chip"><b>${b}</b><span>${s}</span></div>`).join("")}</div></div>
${right[c.right]}<div class="url">raadh.me</div></body></html>`;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const [k, c] of Object.entries(cards)) {
    await p.setContent(html(c), { waitUntil: "load" });
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    const out = `public/og/${k}-${VERSION}.jpg`;
    await p.screenshot({ path: out, type: "jpeg", quality: 90 });
    console.log(out);
  }
  await b.close();
})();
