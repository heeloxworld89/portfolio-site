/**
 * Standard LLM vs Project Cherry — side-by-side animated comparison.
 *
 * Design intent: the left panel is deliberately inert. It runs the same
 * animation forever and ends in exactly the state it started. The right panel
 * routes sparsely, feeds back, and grows a node. The contrast between "nothing
 * changed" and "it changed while you watched" is the whole point of the figure.
 */

// ─── Cherry node mesh — dim by default, a few active, one newly grown ────────
const nodes: { x: number; y: number; state: 'dim' | 'active' | 'new'; delay: number }[] = [
  { x: 168, y: 78,  state: 'dim',    delay: 0 },
  { x: 218, y: 58,  state: 'active', delay: 0.35 },
  { x: 272, y: 74,  state: 'dim',    delay: 0 },
  { x: 322, y: 60,  state: 'dim',    delay: 0 },
  { x: 152, y: 132, state: 'dim',    delay: 0 },
  { x: 206, y: 122, state: 'active', delay: 0.7 },
  { x: 262, y: 140, state: 'active', delay: 1.05 },
  { x: 316, y: 126, state: 'dim',    delay: 0 },
  { x: 358, y: 104, state: 'dim',    delay: 0 },
  { x: 172, y: 192, state: 'dim',    delay: 0 },
  { x: 228, y: 182, state: 'dim',    delay: 0 },
  { x: 282, y: 196, state: 'active', delay: 1.4 },
  { x: 334, y: 188, state: 'dim',    delay: 0 },
  { x: 366, y: 168, state: 'new',    delay: 0 },
];

// active-path mesh edges
const edges = [
  [218, 58, 206, 122],
  [206, 122, 262, 140],
  [262, 140, 282, 196],
  [262, 140, 366, 168],
];

const compare: { k: string; std: string; cherry: string }[] = [
  { k: 'Parameters firing per query', std: 'All of them, every time', cherry: 'Only the specialists the router selects' },
  { k: 'Learning after deployment', std: 'None — frozen at the cutoff', cherry: 'Continuous, in real time' },
  { k: 'Gaining a new capability', std: 'Retrain the whole model', cherry: 'Grows a node — zero net perturbation' },
  { k: 'What it forgets when it learns', std: '47.3% of the prior task retained', cherry: '94.6% retained' },
  { k: 'Where your data has to go', std: 'Out to somebody else’s servers', cherry: 'Never leaves your infrastructure' },
  { k: 'Seeing inside it', std: 'Approximated afterwards, if at all', cherry: 'Five telemetry layers, emitted natively' },
];

export default function CherryVisualization() {
  return (
    <div className="cvz">
      <style>{`
        .cvz { margin: 8px 0 0; }

        .cvz-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;
        }
        @media (max-width: 900px) { .cvz-grid { grid-template-columns: 1fr; } }

        .cvz-panel {
          background: #121417; border: 1px solid #2a2d32;
          border-radius: 12px; padding: 20px 20px 16px; overflow: hidden;
        }
        .cvz-panel.is-cherry { border-color: rgba(255,74,87,0.32); }

        .cvz-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99; margin-bottom: 5px;
        }
        .cvz-panel.is-cherry .cvz-eyebrow { color: #ff6b76; }
        .cvz-title {
          font-size: 16px; font-weight: 700; color: #e8edf4;
          margin: 0 0 3px; line-height: 1.3;
        }
        .cvz-sub { font-size: 12.5px; color: #a6b0bc; line-height: 1.55; margin: 0 0 14px; }

        .cvz-svg { width: 100%; height: auto; display: block; }

        /* travelling signal */
        .cvz-pulse { animation: cvzFlow 3.4s cubic-bezier(0.5,0,0.5,1) infinite; }
        @keyframes cvzFlow {
          0%       { transform: translateX(0);   opacity: 0; }
          8%       { opacity: 1; }
          46%      { opacity: 1; }
          52%      { opacity: 0; }
          100%     { transform: translateX(92px); opacity: 0; }
        }
        .cvz-pulse-out { animation: cvzFlowOut 3.4s cubic-bezier(0.5,0,0.5,1) infinite; }
        @keyframes cvzFlowOut {
          0%, 55%  { transform: translateX(0);   opacity: 0; }
          62%      { opacity: 1; }
          92%      { opacity: 1; }
          100%     { transform: translateX(88px); opacity: 0; }
        }

        /* monolith — fires uniformly, changes nothing */
        .cvz-mono { animation: cvzMono 3.4s ease-in-out infinite; }
        @keyframes cvzMono {
          0%, 30%, 70%, 100% { opacity: 0; }
          45%, 55%           { opacity: 0.5; }
        }

        /* node halos */
        .cvz-halo {
          transform-box: fill-box; transform-origin: center;
          animation: cvzHalo 3.4s ease-out infinite;
        }
        @keyframes cvzHalo {
          0%, 100% { transform: scale(0.6); opacity: 0; }
          18%      { transform: scale(1.9); opacity: 0.55; }
          55%      { transform: scale(1.2); opacity: 0.18; }
        }
        .cvz-node-active { animation: cvzNodeLit 3.4s ease-out infinite; }
        @keyframes cvzNodeLit {
          0%, 100% { opacity: 0.45; }
          20%, 60% { opacity: 1; }
        }

        /* mesh edges draw in */
        .cvz-edge {
          stroke-dasharray: 90; stroke-dashoffset: 90;
          animation: cvzEdge 3.4s ease-out infinite;
        }
        @keyframes cvzEdge {
          0%, 12%  { stroke-dashoffset: 90; opacity: 0; }
          38%      { stroke-dashoffset: 0;  opacity: 1; }
          72%      { opacity: 0.9; }
          100%     { stroke-dashoffset: 0;  opacity: 0; }
        }

        /* feedback loop */
        .cvz-feedback {
          stroke-dasharray: 340; stroke-dashoffset: 340;
          animation: cvzFeedback 3.4s ease-in-out infinite;
        }
        @keyframes cvzFeedback {
          0%, 62%  { stroke-dashoffset: 340; opacity: 0; }
          70%      { opacity: 1; }
          94%      { stroke-dashoffset: 0;   opacity: 1; }
          100%     { stroke-dashoffset: 0;   opacity: 0; }
        }

        /* the node that grows */
        .cvz-new { animation: cvzGrow 6.8s ease-out infinite; }
        @keyframes cvzGrow {
          0%, 42%   { opacity: 0; transform: scale(0.2); }
          52%       { opacity: 1; transform: scale(1.25); }
          58%, 88%  { opacity: 1; transform: scale(1); }
          100%      { opacity: 0; transform: scale(1); }
        }
        .cvz-new-g { transform-box: fill-box; transform-origin: center; }

        .cvz-caption {
          font-size: 11.5px; line-height: 1.6; color: #838d99;
          margin-top: 12px; padding-top: 11px; border-top: 1px solid #22252a;
        }
        .cvz-caption strong { color: #a6b0bc; font-weight: 600; }

        /* comparison table */
        .cvz-table { border: 1px solid #2a2d32; border-radius: 12px; overflow: hidden; }
        .cvz-tr {
          display: grid; grid-template-columns: 1.05fr 1fr 1fr;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cvz-tr:last-child { border-bottom: none; }
        .cvz-tr.is-head { background: rgba(255,255,255,0.025); }
        .cvz-th {
          padding: 12px 18px; font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase; color: #838d99;
        }
        .cvz-th.std { color: #98a2ae; }
        .cvz-th.chr { color: #ff6b76; }
        .cvz-td { padding: 14px 18px; font-size: 13.5px; line-height: 1.6; }
        .cvz-td.k { color: #c4cfde; font-weight: 600; background: rgba(255,255,255,0.015); }
        .cvz-td.std { color: #98a2ae; }
        .cvz-td.chr { color: #d7dee8; background: rgba(255,74,87,0.045); font-weight: 500; }
        @media (max-width: 760px) {
          .cvz-tr { grid-template-columns: 1fr; }
          .cvz-tr.is-head { display: none; }
          .cvz-td.k { border-bottom: 1px solid rgba(255,255,255,0.04); }
          .cvz-td.std::before { content: "Standard — "; color: #7d8794; font-weight: 700; }
          .cvz-td.chr::before { content: "Cherry — ";   color: #ff6b76; font-weight: 700; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cvz-pulse, .cvz-pulse-out, .cvz-mono, .cvz-halo, .cvz-node-active,
          .cvz-edge, .cvz-feedback, .cvz-new { animation: none; }
          .cvz-edge, .cvz-feedback { stroke-dashoffset: 0; opacity: 1; }
          .cvz-new { opacity: 1; }
        }
      `}</style>

      <div className="cvz-grid">

        {/* ══ STANDARD ═══════════════════════════════════════════════ */}
        <div className="cvz-panel">
          <div className="cvz-eyebrow">How it works today</div>
          <h4 className="cvz-title">The Standard Model</h4>
          <p className="cvz-sub">One enormous brain. All of it thinks about everything.</p>

          <svg className="cvz-svg" viewBox="0 0 460 300" role="img"
               aria-label="A single frozen monolithic model. Every query activates the entire model, and nothing about it changes afterwards.">
            <defs>
              <pattern id="cvzGridA" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#1b1e22" strokeWidth="1" />
              </pattern>
              <filter id="cvzGlowA" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3.2" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            <rect width="460" height="300" fill="url(#cvzGridA)" opacity="0.65" />

            {/* input */}
            <text x="12" y="146" fill="#838d99" fontSize="10" fontWeight="700" letterSpacing="1.4">PROMPT</text>
            <line x1="58" y1="155" x2="150" y2="155" stroke="#3a4048" strokeWidth="1.5" />
            <g className="cvz-pulse">
              <circle cx="58" cy="155" r="3.5" fill="#c4cfde" filter="url(#cvzGlowA)" />
            </g>

            {/* monolith */}
            <rect x="150" y="88" width="176" height="134" rx="12" fill="#16181c" stroke="#3a4048" strokeWidth="1.5" />
            <rect className="cvz-mono" x="150" y="88" width="176" height="134" rx="12" fill="#565d68" />
            <text x="238" y="130" textAnchor="middle" fill="#c4cfde" fontSize="12" fontWeight="700" letterSpacing="0.6">ONE FROZEN MODEL</text>
            <text x="238" y="151" textAnchor="middle" fill="#98a2ae" fontSize="10">every parameter fires,</text>
            <text x="238" y="166" textAnchor="middle" fill="#98a2ae" fontSize="10">on every single query</text>
            {/* padlock */}
            <g transform="translate(230, 182)">
              <rect x="0" y="5" width="16" height="12" rx="2.5" fill="none" stroke="#7d8794" strokeWidth="1.5" />
              <path d="M3.5 5V3.2a4.5 4.5 0 0 1 9 0V5" fill="none" stroke="#7d8794" strokeWidth="1.5" />
            </g>
            <text x="238" y="212" textAnchor="middle" fill="#7d8794" fontSize="9" fontWeight="700" letterSpacing="1.2">SEALED AT TRAINING CUTOFF</text>

            {/* output */}
            <line x1="326" y1="155" x2="414" y2="155" stroke="#3a4048" strokeWidth="1.5" />
            <g className="cvz-pulse-out" transform="translate(326,0)">
              <circle cx="0" cy="155" r="3.5" fill="#c4cfde" filter="url(#cvzGlowA)" />
            </g>
            <text x="448" y="146" textAnchor="end" fill="#838d99" fontSize="10" fontWeight="700" letterSpacing="1.4">ANSWER</text>

            {/* the absent feedback loop */}
            <path d="M 400 200 Q 238 282 76 200" fill="none" stroke="#2f343a" strokeWidth="1.5" strokeDasharray="5 5" />
            <g transform="translate(238, 258)">
              <line x1="-7" y1="-7" x2="7" y2="7" stroke="#7d8794" strokeWidth="2" strokeLinecap="round" />
              <line x1="7" y1="-7" x2="-7" y2="7" stroke="#7d8794" strokeWidth="2" strokeLinecap="round" />
            </g>
            <text x="238" y="288" textAnchor="middle" fill="#7d8794" fontSize="9.5">nothing returns — the model is identical afterwards</text>
          </svg>

          <p className="cvz-caption">
            Watch it as long as you like. <strong>It ends in exactly the state it started.</strong> To teach it anything
            you stop the world, retrain, and freeze it again.
          </p>
        </div>

        {/* ══ CHERRY ═════════════════════════════════════════════════ */}
        <div className="cvz-panel is-cherry">
          <div className="cvz-eyebrow">What Cherry does instead</div>
          <h4 className="cvz-title">A Mesh That Learns While It Works</h4>
          <p className="cvz-sub">Many small specialists. Only the right ones wake up.</p>

          <svg className="cvz-svg" viewBox="0 0 460 300" role="img"
               aria-label="A router directs each prompt to a few specialised nodes out of many. They collaborate to produce an answer, feed what they learned back into the mesh in real time, and the mesh grows a new node when it meets work it cannot do.">
            <defs>
              <pattern id="cvzGridB" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#1b1e22" strokeWidth="1" />
              </pattern>
              <filter id="cvzGlowB" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="3.6" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <marker id="cvzArrow" viewBox="0 0 10 10" refX="8" refY="5"
                      markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10 z" fill="#ff6b76" />
              </marker>
            </defs>

            <rect width="460" height="300" fill="url(#cvzGridB)" opacity="0.65" />

            {/* input */}
            <text x="12" y="146" fill="#838d99" fontSize="10" fontWeight="700" letterSpacing="1.4">PROMPT</text>
            <line x1="58" y1="155" x2="92" y2="155" stroke="#3a4048" strokeWidth="1.5" />
            <g className="cvz-pulse">
              <circle cx="58" cy="155" r="3.5" fill="#c4cfde" filter="url(#cvzGlowB)" />
            </g>

            {/* router */}
            <polygon points="110,140 126,155 110,170 94,155" fill="#16181c" stroke="#c4cfde" strokeWidth="1.5" />
            <text x="110" y="192" textAnchor="middle" fill="#a6b0bc" fontSize="9" fontWeight="700" letterSpacing="1">ROUTER</text>
            <text x="110" y="205" textAnchor="middle" fill="#7d8794" fontSize="8.5">picks who wakes</text>

            {/* router → mesh */}
            <line x1="126" y1="155" x2="150" y2="132" stroke="#2f343a" strokeWidth="1.2" />
            <line x1="126" y1="155" x2="152" y2="155" stroke="#2f343a" strokeWidth="1.2" />
            <line x1="126" y1="155" x2="150" y2="185" stroke="#2f343a" strokeWidth="1.2" />

            {/* active mesh edges */}
            {edges.map(([x1, y1, x2, y2], i) => (
              <line key={i} className="cvz-edge" x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#ff6b76" strokeWidth="1.4" strokeLinecap="round"
                    style={{ animationDelay: `${0.3 + i * 0.22}s` }} />
            ))}

            {/* nodes */}
            {nodes.map((n, i) => {
              if (n.state === 'new') {
                return (
                  <g key={i} className="cvz-new-g">
                    <g className="cvz-new">
                      <circle cx={n.x} cy={n.y} r="13" fill="rgba(127,216,143,0.12)" stroke="#7fd88f" strokeWidth="1.3" strokeDasharray="3 2.5" />
                      <circle cx={n.x} cy={n.y} r="5.5" fill="#7fd88f" filter="url(#cvzGlowB)" />
                      <text x={n.x} y={n.y + 30} textAnchor="middle" fill="#7fd88f" fontSize="8.5" fontWeight="700" letterSpacing="0.8">NEW NODE</text>
                    </g>
                  </g>
                );
              }
              if (n.state === 'active') {
                return (
                  <g key={i}>
                    <circle className="cvz-halo" cx={n.x} cy={n.y} r="11" fill="rgba(255,107,118,0.3)"
                            style={{ animationDelay: `${n.delay}s` }} />
                    <circle className="cvz-node-active" cx={n.x} cy={n.y} r="7" fill="#ff6b76"
                            filter="url(#cvzGlowB)" style={{ animationDelay: `${n.delay}s` }} />
                  </g>
                );
              }
              return <circle key={i} cx={n.x} cy={n.y} r="5.5" fill="#272b31" stroke="#3a4048" strokeWidth="1" />;
            })}

            {/* output */}
            <line x1="380" y1="140" x2="414" y2="155" stroke="#3a4048" strokeWidth="1.5" />
            <g className="cvz-pulse-out" transform="translate(346,0)">
              <circle cx="34" cy="146" r="3.5" fill="#c4cfde" filter="url(#cvzGlowB)" />
            </g>
            <text x="448" y="146" textAnchor="end" fill="#838d99" fontSize="10" fontWeight="700" letterSpacing="1.4">ANSWER</text>

            {/* feedback — the whole point */}
            <path className="cvz-feedback" d="M 404 172 Q 240 288 120 196"
                  fill="none" stroke="#ff6b76" strokeWidth="1.8" strokeLinecap="round"
                  markerEnd="url(#cvzArrow)" />
            <text x="252" y="272" textAnchor="middle" fill="#ff6b76" fontSize="9.5" fontWeight="700">
              learns from this — now, not next quarter
            </text>
          </svg>

          <p className="cvz-caption">
            Only a handful of nodes wake for any one question. The answer loops back and{' '}
            <strong>the mesh is different afterwards</strong> — and when it meets work nothing can handle, it grows a
            node rather than overwriting one.
          </p>
        </div>
      </div>

      {/* ══ THE DIFFERENCES, PLAINLY ═════════════════════════════════ */}
      <div className="cvz-table">
        <div className="cvz-tr is-head">
          <div className="cvz-th" />
          <div className="cvz-th std">Standard model</div>
          <div className="cvz-th chr">Project Cherry</div>
        </div>
        {compare.map((r) => (
          <div className="cvz-tr" key={r.k}>
            <div className="cvz-td k">{r.k}</div>
            <div className="cvz-td std">{r.std}</div>
            <div className="cvz-td chr">{r.cherry}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
