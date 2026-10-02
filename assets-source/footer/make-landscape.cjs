// Engraved landscape for the site footer: teal ink on the site's paper colour.
// Run: node assets-source/footer/make-landscape.cjs  → public/assets/images/footer-landscape.svg
const fs = require("fs");
const path = require("path");

const W = 1600, H = 340;
const INK = "#0b404d", PAPER = "#e7e7e2";

let seed = 20261002;
const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const lattice = Array.from({ length: 512 }, rnd);
const vnoise = (x) => { const i = Math.floor(x), f = x - i, u = (1 - Math.cos(f * Math.PI)) / 2; return lattice[i & 511] * (1 - u) + lattice[(i + 1) & 511] * u; };
const fbm = (x) => { let a = 0.5, s = 0, t = 0; for (let o = 0; o < 5; o++) { s += a * (vnoise(x) * 2 - 1); t += a; x *= 2.03; a *= 0.5; } return s / t; };
const g = (x, c, w) => Math.exp(-(((x - c) / w) ** 2));

const far = (x) => 118 + 34 * fbm(x / 210) - 92 * g(x, 1090, 125) - 34 * g(x, 300, 150) - 22 * g(x, 1480, 110);
const mid = (x) => 184 + 20 * fbm(x / 150 + 11) - 30 * g(x, 560, 150) - 14 * g(x, 1320, 120);
const near = (x) => 236 + 12 * fbm(x / 110 + 37) - 8 * g(x, 860, 200);

const r1 = (v) => Math.round(v * 10) / 10;
// Painter's order: each ridge emits its paper fill, then its own ink, so a
// nearer ridge hides the hatching of the one behind it.
const out = [];
let strokes = {}; // width -> [path data] for the current layer
const add = (w, d) => { (strokes[w] = strokes[w] || []).push(d); };
const flush = () => {
  for (const [w, ds] of Object.entries(strokes)) out.push(`<path stroke-width="${w}" d="${ds.join("")}"/>`);
  strokes = {};
};
const polyline = (pts) => "M" + pts.map((p) => `${r1(p[0])} ${r1(p[1])}`).join("L");

const STEP = 6;

function layer(top, below, opts) {
  // Paper fill hides whatever sits behind this ridge.
  const pts = [];
  for (let x = 0; x <= W + STEP; x += STEP) pts.push([x, top(x)]);
  flush();
  out.push(`<path fill="${PAPER}" stroke="none" d="${polyline(pts)}L${W} ${H}L0 ${H}Z"/>`);
  add(1.4, polyline(pts)); // ridge line

  // Contour hatching that follows the ridge, broken into engraved dashes.
  for (let k = 1; k <= opts.lines; k++) {
    const d = k * opts.gap * (1 + k * 0.06);
    const w = k < 4 ? 1.0 : k < 9 ? 0.8 : 0.6;
    let seg = [];
    for (let x = 0; x <= W + STEP; x += STEP) {
      const y = top(x) + d;
      const slope = (top(x + 3) - top(x - 3)) / 6;
      const lit = slope < -0.05 && k > 4 && rnd() < 0.4; // sunlit faces fade out
      if (y > below(x) - 2 || lit || rnd() < 0.035) {
        if (seg.length > 1) add(w, polyline(seg));
        seg = [];
      } else seg.push([x + (rnd() - 0.5) * 0.8, y + (rnd() - 0.5) * 0.6]);
    }
    if (seg.length > 1) add(w, polyline(seg));
  }

  // Extra cross-hatch on shaded slopes (terrain falling to the right).
  for (let k = 0; k < opts.shade; k++) {
    const d = (k + 0.5) * opts.gap * 0.9;
    let seg = [];
    for (let x = 0; x <= W + 4; x += 4) {
      const slope = (top(x + 3) - top(x - 3)) / 6;
      const y = top(x) + d;
      if (slope > 0.12 && y < below(x) - 3) seg.push([x, y]);
      else { if (seg.length > 1) add(0.6, polyline(seg)); seg = []; }
    }
    if (seg.length > 1) add(0.6, polyline(seg));
  }
}

layer(far, mid, { lines: 22, gap: 3.0, shade: 10 });
layer(mid, near, { lines: 12, gap: 3.2, shade: 6 });
layer(near, () => H, { lines: 4, gap: 3.0, shade: 2 });

// Plain: scattered horizontal strokes, wider apart toward the viewer.
let y = 252;
while (y < H) {
  const t = (y - 240) / (H - 240);
  let x = rnd() * 30;
  while (x < W) {
    const len = 6 + rnd() * (18 + 30 * t);
    if (rnd() < 0.55) add(t < 0.4 ? 0.6 : 0.8, `M${r1(x)} ${r1(y + (rnd() - 0.5))}h${r1(len)}`);
    x += len + 6 + rnd() * (16 + 40 * t);
  }
  y += 3.2 + t * 7;
}

// Grass tufts, larger and denser in the foreground.
for (let i = 0; i < 320; i++) {
  const t = Math.pow(rnd(), 0.7);
  const ty = 250 + t * (H - 250);
  const tx = rnd() * W;
  const s = 3 + t * 19 * (0.7 + rnd() * 0.6);
  const blades = 4 + Math.floor(rnd() * 5 + t * 5);
  for (let b = 0; b < blades; b++) {
    const a = -Math.PI / 2 + (rnd() - 0.5) * 1.9;
    const len = s * (0.5 + rnd() * 0.6);
    const ex = tx + Math.cos(a) * len, ey = ty + Math.sin(a) * len;
    const cx = tx + Math.cos(a) * len * 0.5 + (rnd() - 0.5) * 3, cy = ty + Math.sin(a) * len * 0.6;
    add(t > 0.6 ? 0.9 : 0.7, `M${r1(tx + (rnd() - 0.5) * s * 0.3)} ${r1(ty)}Q${r1(cx)} ${r1(cy)} ${r1(ex)} ${r1(ey)}`);
  }
}

flush();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice"><g fill="none" stroke="${INK}" stroke-linecap="round" stroke-linejoin="round">${out.join("")}</g></svg>`;
const file = path.join(__dirname, "../../public/assets/images/footer-landscape.svg");
fs.writeFileSync(file, svg);
console.log(file, (svg.length / 1024).toFixed(0) + " KB");
