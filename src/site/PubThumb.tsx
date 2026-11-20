import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import "./ux/pubthumb.css";

/* Publication thumbnails: small animated figures drawn from each paper's own
   results. Without JavaScript, or with reduced motion, each one renders in its
   final state; with JavaScript it plays once when it scrolls into view. */

export type PubThumbKind = "deepmath" | "resets" | "ormas" | "oximo" | "iarco";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/* DeepMath Figure 1 (fig-run), traced from the published plot: CIFAR-10 CNN,
   two conv layers zeroed after epoch 100, mean of three seeds. */
const RUN_ORMAS = "M30.0 66.8 L31.4 57.8 L32.7 51.1 L34.1 47.7 L35.5 44.6 L36.9 43.2 L38.2 42.4 L39.6 41.0 L41.0 40.0 L42.3 39.3 L43.7 38.4 L45.1 37.4 L46.4 36.4 L47.8 36.4 L49.2 34.8 L50.5 35.5 L51.9 33.8 L53.3 34.3 L54.7 34.3 L56.0 32.9 L57.4 33.1 L58.8 32.9 L60.1 32.6 L61.5 32.6 L62.9 31.7 L64.2 31.4 L65.6 31.9 L67.0 31.1 L68.4 31.2 L69.7 30.4 L71.1 31.2 L72.5 30.5 L73.8 30.0 L75.2 29.9 L76.6 30.2 L78.0 29.9 L79.3 28.8 L80.7 29.0 L82.1 28.8 L83.4 29.3 L84.8 28.8 L86.2 28.8 L87.5 29.7 L88.9 29.3 L90.3 28.1 L91.7 27.8 L93.0 28.0 L94.4 28.1 L95.8 27.8 L97.1 28.0 L98.5 27.3 L99.9 27.1 L101.2 27.1 L102.6 27.3 L104.0 27.1 L105.3 27.5 L106.7 27.3 L108.1 27.3 L109.5 27.3 L110.8 27.3 L112.2 27.6 L113.6 27.5 L114.9 26.4 L116.3 27.0 L117.7 26.8 L119.0 26.3 L120.4 26.4 L121.8 27.1 L123.2 26.3 L124.5 26.1 L125.9 26.1 L127.3 26.3 L128.6 25.8 L130.0 25.8 L131.4 26.8 L132.8 26.3 L134.1 25.9 L135.5 25.8 L136.9 25.6 L138.2 25.9 L139.6 26.3 L141.0 25.2 L142.3 25.8 L143.7 25.8 L145.1 25.9 L146.4 24.7 L147.8 25.2 L149.2 25.9 L150.6 25.9 L151.9 26.3 L153.3 25.9 L154.7 25.9 L156.0 25.4 L157.4 25.6 L158.8 25.6 L160.2 25.4 L161.5 24.7 L162.9 25.2 L164.3 25.2 L165.6 24.4 L167.0 24.4 L168.4 152.9 L169.7 147.8 L171.1 133.4 L172.5 116.4 L173.8 106.0 L175.2 99.0 L176.6 92.8 L178.0 88.4 L179.3 82.7 L180.7 76.6 L182.1 73.2 L183.4 70.2 L184.8 67.2 L186.2 65.1 L187.6 62.4 L188.9 60.5 L190.3 58.6 L191.7 56.4 L193.0 56.9 L194.4 55.4 L195.8 55.5 L197.1 56.6 L198.5 52.8 L199.9 52.4 L201.2 52.1 L202.6 52.3 L204.0 50.9 L205.4 51.6 L206.7 50.9 L208.1 49.5 L209.5 49.2 L210.8 49.5 L212.2 49.2 L213.6 48.0 L214.9 47.3 L216.3 46.3 L217.7 45.6 L219.1 44.9 L220.4 45.6 L221.8 45.3 L223.2 44.1 L224.5 44.1 L225.9 43.5 L227.3 43.9 L228.7 42.9 L230.0 43.7 L231.4 42.7 L232.8 42.5 L234.1 43.2 L235.5 41.8 L236.9 41.7 L238.2 42.0 L239.6 40.8 L241.0 41.2 L242.3 41.8 L243.7 41.3 L245.1 41.5 L246.5 40.5 L247.8 40.3 L249.2 40.6 L250.6 39.6 L251.9 39.3 L253.3 39.6 L254.7 39.3 L256.1 39.1 L257.4 38.4 L258.8 38.8 L260.2 38.4 L261.5 37.2 L262.9 37.7 L264.3 38.4 L265.6 37.7 L267.0 37.9 L268.4 36.2 L269.8 35.7 L271.1 36.4 L272.5 36.5 L273.9 36.7 L275.2 36.7 L276.6 36.5 L278.0 36.2 L279.3 36.0 L280.7 35.3 L282.1 34.7 L283.4 35.3 L284.8 35.3 L286.2 35.2 L287.6 35.7 L288.9 36.4 L290.3 35.5 L291.7 35.2 L293.0 34.0 L294.4 33.8 L295.8 34.0 L297.1 33.3 L298.5 33.1 L299.9 32.8 L301.3 32.8 L302.6 32.8 L304.0 32.8";
const RUN_STD = "M30.0 60.5 L31.4 60.5 L32.7 47.8 L34.1 43.2 L35.5 41.2 L36.9 40.3 L38.2 40.5 L39.6 38.8 L41.0 37.4 L42.3 36.9 L43.7 36.0 L45.1 34.5 L46.4 33.5 L47.8 33.1 L49.2 32.1 L50.5 32.1 L51.9 31.1 L53.3 30.7 L54.7 29.9 L56.0 29.7 L57.4 29.5 L58.8 30.2 L60.1 28.8 L61.5 29.5 L62.9 28.3 L64.2 28.0 L65.6 27.8 L67.0 29.0 L68.4 27.8 L69.7 26.8 L71.1 27.0 L72.5 27.0 L73.8 27.1 L75.2 26.8 L76.6 26.8 L78.0 27.1 L79.3 26.8 L80.7 27.0 L82.1 26.6 L83.4 26.3 L84.8 26.1 L86.2 26.1 L87.5 26.3 L88.9 26.3 L90.3 25.8 L91.7 25.9 L93.0 25.9 L94.4 25.6 L95.8 25.6 L97.1 25.6 L98.5 26.1 L99.9 25.6 L101.2 25.2 L102.6 24.9 L104.0 25.2 L105.3 25.2 L106.7 24.7 L108.1 24.9 L109.5 25.6 L110.8 25.2 L112.2 25.4 L113.6 25.6 L114.9 24.9 L116.3 25.4 L117.7 25.2 L119.0 24.7 L120.4 24.6 L121.8 24.9 L123.2 24.7 L124.5 24.7 L125.9 24.4 L127.3 24.4 L128.6 23.9 L130.0 24.0 L131.4 25.2 L132.8 24.9 L134.1 24.4 L135.5 24.2 L136.9 24.2 L138.2 24.2 L139.6 24.2 L141.0 23.7 L142.3 24.2 L143.7 24.0 L145.1 24.2 L146.4 24.0 L147.8 23.7 L149.2 23.7 L150.6 23.7 L151.9 24.0 L153.3 24.4 L154.7 24.0 L156.0 24.0 L157.4 24.0 L158.8 24.0 L160.2 23.9 L161.5 23.7 L162.9 23.7 L164.3 23.5 L165.6 23.5 L167.0 23.4 L168.4 152.9 L169.7 152.9 L171.1 152.9 L172.5 152.9 L173.8 152.9 L175.2 152.9 L176.6 152.9 L178.0 152.9 L179.3 152.9 L180.7 152.9 L182.1 152.9 L183.4 152.9 L184.8 152.9 L186.2 152.9 L187.6 152.9 L188.9 152.9 L190.3 152.9 L191.7 152.9 L193.0 152.9 L194.4 152.9 L195.8 152.9 L197.1 152.9 L198.5 152.9 L199.9 152.9 L201.2 152.9 L202.6 152.9 L204.0 152.9 L205.4 152.9 L206.7 152.9 L208.1 152.9 L209.5 152.9 L210.8 152.9 L212.2 152.9 L213.6 152.9 L214.9 152.9 L216.3 152.9 L217.7 152.9 L219.1 152.9 L220.4 152.9 L221.8 152.9 L223.2 152.9 L224.5 152.9 L225.9 152.9 L227.3 152.9 L228.7 152.9 L230.0 152.9 L231.4 152.9 L232.8 152.9 L234.1 152.9 L235.5 152.9 L236.9 152.9 L238.2 152.9 L239.6 152.9 L241.0 152.9 L242.3 152.9 L243.7 152.9 L245.1 152.9 L246.5 152.9 L247.8 152.9 L249.2 152.9 L250.6 152.9 L251.9 152.9 L253.3 152.9 L254.7 152.9 L256.1 152.9 L257.4 152.9 L258.8 152.9 L260.2 152.9 L261.5 152.9 L262.9 152.9 L264.3 152.9 L265.6 152.9 L267.0 152.9 L268.4 152.9 L269.8 152.9 L271.1 152.9 L272.5 152.9 L273.9 152.9 L275.2 152.9 L276.6 152.9 L278.0 152.9 L279.3 152.9 L280.7 152.9 L282.1 152.9 L283.4 152.9 L284.8 152.9 L286.2 152.9 L287.6 152.9 L288.9 152.9 L290.3 152.9 L291.7 152.9 L293.0 152.9 L294.4 152.9 L295.8 152.9 L297.1 152.9 L298.5 152.9 L299.9 152.9 L301.3 152.9 L302.6 152.9 L304.0 152.9";

function DeepMath() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-labelledby="pt-dm-t">
      <title id="pt-dm-t">Test accuracy over 200 epochs: after two layers are zeroed at epoch 100, ORMAS recovers to 80.3% while standard training stays at 10.00%.</title>
      <g className="pt-axis">
        <line x1="30" y1="170" x2="304" y2="170" />
        <line x1="30" y1="16" x2="30" y2="170" />
        <line className="pt-grid" x1="30" y1="152.9" x2="304" y2="152.9" />
      </g>
      <text className="pt-tick" x="25" y="19.0" textAnchor="end">90</text>
      <text className="pt-tick" x="25" y="155.9" textAnchor="end">10</text>
      <text className="pt-tick" x="30" y="186">0</text>
      <text className="pt-tick" x="304" y="186" textAnchor="end">200 epochs</text>
      <line className="pt-lesion" x1="167.0" y1="16" x2="167.0" y2="170" />
      <text className="pt-note pt-fade" style={d(0.9)} x="163.0" y="96" textAnchor="end">layers</text>
      <text className="pt-note pt-fade" style={d(0.9)} x="163.0" y="107" textAnchor="end">zeroed</text>
      <path className="pt-line pt-gray pt-draw" style={d(0)} d={RUN_STD} pathLength={1} />
      <path className="pt-line pt-teal pt-draw" style={d(0)} d={RUN_ORMAS} pathLength={1} />
      <text className="pt-val pt-tealtxt pt-fade" style={d(2.1)} x="302" y="26.6" textAnchor="end">80.3%</text>
      <text className="pt-val pt-graytxt pt-fade" style={d(2.1)} x="302" y="147.9" textAnchor="end">10.00%</text>
    </svg>
  );
}

/* Redrawn from Figure 1 of "Dead BatchNorm–ReLU Units Need Resets". */
function Resets() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-labelledby="pt-rs-t">
      <title id="pt-rs-t">Training with repair as a hybrid system: gradient steps fall into the dead set and stay there; only a redraw that resets BatchNorm returns training to the stable region.</title>
      <defs>
        <pattern id="pt-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" className="pt-hatchline" />
        </pattern>
        <marker id="pt-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="pt-arrowhead" />
        </marker>
        <mask id="pt-redraw-mask" maskUnits="userSpaceOnUse">
          <path className="pt-draw" style={d(1.5)} d="M252 138 C 246 182, 190 186, 168 146" pathLength={1} stroke="#fff" strokeWidth="6" fill="none" />
        </mask>
      </defs>
      <ellipse className="pt-omega" cx="108" cy="104" rx="94" ry="66" />
      <ellipse className="pt-ring" cx="108" cy="104" rx="64" ry="45" />
      <ellipse className="pt-ring" cx="108" cy="104" rx="40" ry="28" />
      <ellipse className="pt-band" cx="108" cy="104" rx="20" ry="14" />
      <circle cx="108" cy="104" r="2.6" className="pt-star" />
      <text className="pt-math pt-blue" x="22" y="48">Ω<tspan dy="3" fontSize="9">c</tspan></text>
      <text className="pt-math" x="84" y="102">X*</text>
      <path className="pt-dead" d="M232 72 C 262 60, 300 72, 302 106 C 304 140, 272 156, 246 150 C 218 144, 206 118, 212 96 C 216 82, 222 76, 232 72 Z" />
      <text className="pt-lbl pt-verm" x="300" y="64" textAnchor="end">dead set</text>
      <path className="pt-line pt-green pt-draw" style={d(0)} d="M186 26 C 214 32, 238 58, 250 92 C 258 114, 274 116, 272 102 C 270 90, 254 92, 258 106" pathLength={1} />
      <circle cx="186" cy="26" r="2.6" className="pt-dot-green" />
      <circle cx="252" cy="138" r="2.6" className="pt-arrowhead" />
      <path className="pt-redraw" mask="url(#pt-redraw-mask)" d="M252 138 C 246 182, 190 186, 168 146" markerEnd="url(#pt-arrow)" />
      <text className="pt-lbl pt-purple pt-fade" style={d(2.1)} x="214" y="194" textAnchor="middle">redraw: reset BatchNorm</text>
      <path className="pt-line pt-green pt-draw" style={d(2.6)} d="M166 142 L 146 128 L 136 114 L 122 110" pathLength={1} />
    </svg>
  );
}

/* Illustration of ORMAS: a node fails, is diagnosed, repaired and logged. */
function Ormas() {
  const cols = [64, 160, 256];
  const rows = [40, 76, 112, 148];
  const edges: ReactNode[] = [];
  for (let c = 0; c < 2; c++)
    for (const a of rows)
      for (const b of rows)
        edges.push(
          <line
            key={`${c}-${a}-${b}`}
            className={`pt-edge${c === 1 && a === 112 ? " pt-edge-out" : ""}${c === 0 && b === 112 ? " pt-edge-in" : ""}`}
            x1={cols[c]} y1={a} x2={cols[c + 1]} y2={b}
          />,
        );
  return (
    <svg viewBox="0 0 320 200" role="img" aria-labelledby="pt-or-t">
      <title id="pt-or-t">Illustration: one node in a network fails, ORMAS detects it, repairs it during training and logs the repair.</title>
      <g className="pt-fade" style={d(0)}>{edges}</g>
      {cols.map((x) =>
        rows.map((y) =>
          x === 160 && y === 112 ? null : <circle key={`${x}-${y}`} cx={x} cy={y} r="8" className="pt-node" />,
        ),
      )}
      <circle cx="160" cy="112" r="8" className="pt-pulse" />
      <circle cx="160" cy="112" r="8" className="pt-node pt-sick" />
      <path className="pt-x" d="M156 108 L164 116 M164 108 L156 116" />
      <path className="pt-check pt-fade" style={d(2.3)} d="M155.5 112 L158.8 115.2 L164.5 108.8" />
      <g className="pt-fade" style={d(2.5)}>
        <rect x="74" y="166" width="172" height="22" rx="2" className="pt-chip" />
        <text className="pt-log" x="160" y="181" textAnchor="middle">node 3 · dead → repaired · logged</text>
      </g>
    </svg>
  );
}

/* OXIMO/AX09: removing OXIMO cut output by 91% (twelve-month ablation). */
function Oximo() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-labelledby="pt-ox-t">
      <title id="pt-ox-t">Twelve-month ablation on a live company: removing OXIMO cut output by 91%.</title>
      <line className="pt-base" x1="40" y1="160" x2="280" y2="160" />
      <rect className="pt-bar pt-grow" style={d(0)} x="74" y="30" width="64" height="130" />
      <rect className="pt-bar-off pt-grow" style={d(0.5)} x="182" y="148.3" width="64" height="11.7" />
      <text className="pt-cap" x="106" y="176" textAnchor="middle">OXIMO on</text>
      <text className="pt-cap" x="214" y="176" textAnchor="middle">OXIMO removed</text>
      <g className="pt-fade" style={d(1.3)}>
        <rect x="180" y="104" width="68" height="28" rx="2" className="pt-chip" />
        <text className="pt-big" x="214" y="124" textAnchor="middle">−91%</text>
      </g>
      <text className="pt-tick" x="40" y="22">output, 12-month ablation</text>
    </svg>
  );
}

/* IARCO proposal: can a person read a machine's own incident log? */
function Iarco() {
  const lines = [
    ["INCIDENT", "conv2 · channels dead"],
    ["CAUSE", "BatchNorm shift < 0"],
    ["ACTION", "reset scale + shift"],
    ["RESULT", "channels active"],
  ];
  return (
    <svg viewBox="0 0 320 200" role="img" aria-labelledby="pt-ia-t">
      <title id="pt-ia-t">Illustration: an automatically generated incident log from a neural network, and the question of whether a person can read it.</title>
      <rect x="36" y="22" width="248" height="114" rx="3" className="pt-term" />
      <circle cx="50" cy="34" r="2.6" className="pt-termdot" />
      <circle cx="59" cy="34" r="2.6" className="pt-termdot" />
      <circle cx="68" cy="34" r="2.6" className="pt-termdot" />
      {lines.map(([k, v], i) => (
        <g key={k} className="pt-fade pt-rise" style={d(0.2 + i * 0.45)}>
          <text className="pt-logk" x="50" y={60 + i * 20}>{k}</text>
          <text className="pt-logv" x="124" y={60 + i * 20}>{v}</text>
        </g>
      ))}
      <text className="pt-q pt-fade" style={d(2.2)} x="160" y="172" textAnchor="middle">Can a person read this?</text>
    </svg>
  );
}

const MAP: Record<PubThumbKind, () => ReactNode> = {
  deepmath: DeepMath, resets: Resets, ormas: Ormas, oximo: Oximo, iarco: Iarco,
};

export default function PubThumb({ kind }: { kind: PubThumbKind }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("pt-armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Fig = MAP[kind];
  return (
    <div className={`pt pt-${kind}`} ref={ref}>
      <Fig />
    </div>
  );
}
