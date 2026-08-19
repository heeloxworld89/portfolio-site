/**
 * ORMAS — silent failure vs loud failure.
 *
 * The paper's central claim is not accuracy, it is attribution: standard
 * backprop provides no architectural mechanism for per-node attribution
 * *during* training, so diagnosis is post-hoc on an already-dead model.
 * ORMAS emits the diagnosis as it happens. The most honest way to show that
 * is to put the two failure modes side by side and print the actual telemetry.
 *
 * Telemetry excerpts are verbatim from supplementary.tex §5.1–5.2.
 * Baldwin data from §5.3: peak 4.2/epoch (0–50), zero after.
 */

// Baldwin Effect — corrections per epoch. Verbatim from supplementary §5.3.
const baldwin = [
  { e: 0, v: 4.2 }, { e: 10, v: 3.1 }, { e: 20, v: 1.9 }, { e: 30, v: 1.1 },
  { e: 40, v: 0.45 }, { e: 50, v: 0.05 }, { e: 75, v: 0 }, { e: 100, v: 0 },
  { e: 150, v: 0 }, { e: 200, v: 0 },
];

const CH_W = 400, CH_H = 130, CH_X = 44, CH_Y = 14;
const px = (e: number) => CH_X + (e / 200) * CH_W;
const py = (v: number) => CH_Y + CH_H - (v / 4.5) * CH_H;
const linePath = baldwin.map((d, i) => `${i ? 'L' : 'M'} ${px(d.e).toFixed(1)} ${py(d.v).toFixed(1)}`).join(' ');
const areaPath = `${linePath} L ${px(200).toFixed(1)} ${(CH_Y + CH_H).toFixed(1)} L ${px(0).toFixed(1)} ${(CH_Y + CH_H).toFixed(1)} Z`;

export default function ResearchVisualization() {
  return (
    <div className="rvz">
      <style>{`
        .rvz { margin: 8px 0 0; }
        .rvz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        @media (max-width: 900px) { .rvz-grid { grid-template-columns: 1fr; } }

        .rvz-panel {
          background: #121417; border: 1px solid #2a2d32;
          border-radius: 12px; padding: 20px 20px 16px;
        }
        .rvz-panel.is-ormas { border-color: rgba(255,74,87,0.3); }
        .rvz-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99; margin-bottom: 5px;
        }
        .rvz-panel.is-ormas .rvz-eyebrow { color: #ff6b76; }
        .rvz-title { font-size: 16px; font-weight: 700; color: #e8edf4; margin: 0 0 3px; }
        .rvz-sub { font-size: 12.5px; color: #a6b0bc; line-height: 1.55; margin: 0 0 14px; }
        .rvz-svg { width: 100%; height: auto; display: block; }

        /* the node that dies */
        .rvz-dying { animation: rvzDie 5s ease-in-out infinite; }
        @keyframes rvzDie {
          0%, 22%   { fill: #7fd88f; opacity: 1; }
          32%, 100% { fill: #4a2024; opacity: 1; }
        }
        .rvz-alarm {
          transform-box: fill-box; transform-origin: center;
          animation: rvzAlarm 5s ease-out infinite;
        }
        @keyframes rvzAlarm {
          0%, 30%  { transform: scale(0.5); opacity: 0; }
          38%      { transform: scale(2.1); opacity: 0.7; }
          60%,100% { transform: scale(1.4); opacity: 0; }
        }
        /* standard: confusion spreads everywhere */
        .rvz-diffuse { animation: rvzDiffuse 5s ease-in-out infinite; }
        @keyframes rvzDiffuse {
          0%, 30%  { opacity: 0; }
          46%, 88% { opacity: 1; }
          100%     { opacity: 0; }
        }
        /* ORMAS: log prints */
        .rvz-logline { animation: rvzLog 5s steps(1) infinite; }
        @keyframes rvzLog { 0%, 36% { opacity: 0; } 44%, 100% { opacity: 1; } }

        .rvz-log {
          background: #0b0c0e; border: 1px solid #2a2d32; border-radius: 8px;
          padding: 14px 16px; margin-top: 12px; overflow-x: auto;
        }
        .rvz-log-h {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.4px;
          text-transform: uppercase; color: #838d99; margin-bottom: 9px;
        }
        .rvz-log code {
          display: block; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 11px; line-height: 1.75; color: #a6b0bc; white-space: pre;
        }
        .rvz-log .k { color: #7d8794; }
        .rvz-log .crit { color: #ff8a93; font-weight: 600; }
        .rvz-log .ok { color: #7fd88f; font-weight: 600; }
        .rvz-log .hl { color: #e8edf4; }

        .rvz-caption {
          font-size: 11.5px; line-height: 1.6; color: #838d99;
          margin-top: 12px; padding-top: 11px; border-top: 1px solid #22252a;
        }
        .rvz-caption strong { color: #a6b0bc; font-weight: 600; }

        /* baldwin chart */
        .rvz-chart {
          background: #121417; border: 1px solid #2a2d32;
          border-radius: 12px; padding: 20px 22px 16px;
        }
        .rvz-chart-title { font-size: 15px; font-weight: 700; color: #e8edf4; margin: 0 0 4px; }
        .rvz-chart-sub { font-size: 12.5px; color: #a6b0bc; line-height: 1.6; margin: 0 0 16px; max-width: 680px; }
        .rvz-curve { stroke-dasharray: 620; stroke-dashoffset: 620; animation: rvzDraw 3.2s ease-out forwards; }
        @keyframes rvzDraw { to { stroke-dashoffset: 0; } }

        .rvz-phases { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px; margin-top: 14px; }
        .rvz-phase { background: #191b1e; border: 1px solid #2a2d32; border-radius: 8px; padding: 14px 16px; }
        .rvz-phase-e { font-size: 9.5px; font-weight: 700; letter-spacing: 1.3px; text-transform: uppercase; color: #838d99; margin-bottom: 5px; }
        .rvz-phase-v { font-size: 19px; font-weight: 800; color: #c4cfde; line-height: 1.1; margin-bottom: 4px; }
        .rvz-phase-v.zero { color: #7fd88f; }
        .rvz-phase-t { font-size: 12px; color: #98a2ae; line-height: 1.55; }

        @media (prefers-reduced-motion: reduce) {
          .rvz-dying, .rvz-alarm, .rvz-diffuse, .rvz-logline, .rvz-curve { animation: none; }
          .rvz-diffuse, .rvz-logline { opacity: 1; }
          .rvz-curve { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="rvz-grid">

        {/* ══ STANDARD — SILENT FAILURE ═══════════════════════════════ */}
        <div className="rvz-panel">
          <div className="rvz-eyebrow">Standard backpropagation</div>
          <h4 className="rvz-title">A Node Dies Silently</h4>
          <p className="rvz-sub">One error signal, shared by everything. Nothing can report on itself.</p>

          <svg className="rvz-svg" viewBox="0 0 440 210" role="img"
               aria-label="In a standard network a node dies during training and the error signal diffuses across every parameter at once, so no component can be identified as the cause. Only the global loss curve moves.">
            <defs>
              <filter id="rvzGlowA" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="2.6" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* three layers of nodes */}
            {[70, 155, 240, 325].map((x, li) =>
              [55, 105, 155].map((y, ni) => {
                const dying = li === 1 && ni === 1;
                return (
                  <g key={`${li}-${ni}`}>
                    <circle
                      cx={x} cy={y} r="11"
                      className={dying ? 'rvz-dying' : undefined}
                      fill={dying ? '#7fd88f' : '#272b31'}
                      stroke="#3a4048" strokeWidth="1.2"
                    />
                    <circle className="rvz-diffuse" cx={x} cy={y} r="11" fill="#ff6b76" opacity="0.16" />
                  </g>
                );
              })
            )}
            {/* edges */}
            {[70, 155, 240].map((x, li) =>
              [55, 105, 155].map((y1) =>
                [55, 105, 155].map((y2, j) => (
                  <line key={`${li}-${y1}-${j}`} x1={x + 11} y1={y1} x2={[155, 240, 325][li] - 11} y2={y2}
                        stroke="#22262b" strokeWidth="0.8" />
                ))
              )
            )}

            {/* the question mark over everything */}
            <g className="rvz-diffuse">
              <text x="197" y="196" textAnchor="middle" fill="#ff8a93" fontSize="11" fontWeight="700">
                which one broke? when? why?
              </text>
            </g>
            <text x="393" y="59" textAnchor="middle" fill="#7d8794" fontSize="9">loss</text>
            <path d="M370 75 L380 78 L390 82 L400 108 L412 130" fill="none" stroke="#7d8794" strokeWidth="1.6" />
            <text x="393" y="150" textAnchor="middle" fill="#7d8794" fontSize="8.5">the only</text>
            <text x="393" y="162" textAnchor="middle" fill="#7d8794" fontSize="8.5">signal you get</text>
          </svg>

          <div className="rvz-log">
            <div className="rvz-log-h">What the operator sees</div>
            <code>{`epoch 42  loss 1.842 → 2.910
epoch 43  loss 2.910 → 3.221
`}<span className="k">{`# no node id. no cause. no timestamp.
# diagnosis is post-hoc, on a model
# that has already finished dying.`}</span></code>
          </div>

          <p className="rvz-caption">
            The paper states it plainly: standard backprop provides{' '}
            <strong>no architectural mechanism for per-node attribution during training.</strong> Rollback or full
            retrain are the only recourse.
          </p>
        </div>

        {/* ══ ORMAS — LOUD FAILURE ════════════════════════════════════ */}
        <div className="rvz-panel is-ormas">
          <div className="rvz-eyebrow">ORMAS three-signal learning</div>
          <h4 className="rvz-title">The Same Node Dies Loudly</h4>
          <p className="rvz-sub">Every node carries a second, bounded path. It can report on itself.</p>

          <svg className="rvz-svg" viewBox="0 0 440 210" role="img"
               aria-label="In ORMAS the same failing node is localised immediately. An alarm fires on that node alone, it is quarantined and repaired, and a verification pass confirms the repair improved global loss before the change is committed.">
            <defs>
              <filter id="rvzGlowB" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {[70, 155, 240, 325].map((x, li) =>
              [55, 105, 155].map((y, ni) => {
                const dying = li === 1 && ni === 1;
                return (
                  <g key={`${li}-${ni}`}>
                    {dying && <circle className="rvz-alarm" cx={x} cy={y} r="13" fill="rgba(255,107,118,0.45)" />}
                    <circle
                      cx={x} cy={y} r="11"
                      className={dying ? 'rvz-dying' : undefined}
                      fill={dying ? '#7fd88f' : '#272b31'}
                      stroke={dying ? '#ff6b76' : '#3a4048'} strokeWidth={dying ? 1.8 : 1.2}
                    />
                    {/* the bounded local readout — the whole architectural claim */}
                    <line x1={x} y1={y + 11} x2={x} y2={y + 21} stroke="#3a4048" strokeWidth="0.9" />
                    <rect x={x - 5} y={y + 21} width="10" height="5" rx="1.5"
                          fill={dying ? '#ff6b76' : '#2f343a'} />
                  </g>
                );
              })
            )}
            {[70, 155, 240].map((x, li) =>
              [55, 105, 155].map((y1) =>
                [55, 105, 155].map((y2, j) => (
                  <line key={`${li}-${y1}-${j}`} x1={x + 11} y1={y1} x2={[155, 240, 325][li] - 11} y2={y2}
                        stroke="#22262b" strokeWidth="0.8" />
                ))
              )
            )}

            <g className="rvz-logline">
              <line x1="166" y1="105" x2="250" y2="192" stroke="#ff6b76" strokeWidth="1.2" strokeDasharray="3 3" />
              <text x="256" y="196" fill="#ff8a93" fontSize="10.5" fontWeight="700">node_13 · goodness 0.04 · CRITICAL</text>
            </g>
            <text x="20" y="200" fill="#7d8794" fontSize="8.5">▪ = bounded 4-op local readout, per node</text>
          </svg>

          <div className="rvz-log">
            <div className="rvz-log-h">What the operator sees — verbatim from the paper</div>
            <code>{`[EPOCH 42 | STEP 16384] --- DIAGNOSTICS ROUND ---
[node_12] Goodness: 0.88 -> `}<span className="ok">HEALTHY</span>{`
[node_13] Goodness: 0.04 -> `}<span className="crit">CRITICAL</span>{`
   > Diagnostics: g_mag = 0.01 (DEAD),
                  g_grad = 0.11 (STAGNANT)
   > Action: `}<span className="hl">AUTONOMOUS NEUROGENESIS</span>{`
   > Constraint: zero-sum mean-subtraction,
                 ||DeltaW|| <= 10%
--- VERIFICATION FORWARD PASS ---
> Global Loss Before: 1.842
> Global Loss After:  1.791
> Result: `}<span className="ok">ACCEPTED</span>{` — node 13 re-integrated`}</code>
          </div>

          <p className="rvz-caption">
            Name, score, diagnosis, treatment, bound, and a{' '}
            <strong>verification pass that can reject its own repair</strong>. One DAG run emitted{' '}
            <strong>23,227</strong> such events. That ledger is the product; the accuracy is the evidence it works.
          </p>
        </div>
      </div>

      {/* ══ BALDWIN EFFECT ══════════════════════════════════════════ */}
      <div className="rvz-chart">
        <h4 className="rvz-chart-title">And Then It Stops Needing To</h4>
        <p className="rvz-chart-sub">
          If self-correction were just a regulariser like dropout, the intervention rate would stay flat forever.
          It does not. Corrections peak early, decay, and hit <strong style={{ color: '#7fd88f' }}>exactly zero</strong> —
          the network structurally adapted rather than being permanently propped up. This is the empirical signature the
          ISS analysis predicts.
        </p>

        <svg viewBox="0 0 460 190" className="rvz-svg" role="img"
             aria-label="Chart of self-correction events per epoch. The rate peaks at 4.2 corrections per epoch early in training, decays through epoch 50, and remains at zero from epoch 50 through epoch 200.">
          <defs>
            <linearGradient id="rvzFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff6b76" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#ff6b76" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* gridlines */}
          {[0, 1, 2, 3, 4].map((v) => (
            <g key={v}>
              <line x1={CH_X} y1={py(v)} x2={CH_X + CH_W} y2={py(v)} stroke="#22262b" strokeWidth="1" />
              <text x={CH_X - 8} y={py(v) + 3.5} textAnchor="end" fill="#7d8794" fontSize="9">{v}</text>
            </g>
          ))}
          <text x="12" y={CH_Y + CH_H / 2} fill="#838d99" fontSize="9" fontWeight="700"
                transform={`rotate(-90 12 ${CH_Y + CH_H / 2})`} textAnchor="middle">CORRECTIONS / EPOCH</text>

          {/* stabilised region */}
          <rect x={px(50)} y={CH_Y} width={px(200) - px(50)} height={CH_H} fill="rgba(127,216,143,0.05)" />
          <line x1={px(50)} y1={CH_Y} x2={px(50)} y2={CH_Y + CH_H} stroke="#7fd88f" strokeWidth="1" strokeDasharray="4 3" />
          <text x={px(125)} y={CH_Y + 22} textAnchor="middle" fill="#7fd88f" fontSize="10" fontWeight="700">ZERO CORRECTIONS · EPOCH 50 → 200</text>
          <text x={px(125)} y={CH_Y + 37} textAnchor="middle" fill="#7d8794" fontSize="9">convergence locked</text>

          <path d={areaPath} fill="url(#rvzFill)" />
          <path className="rvz-curve" d={linePath} fill="none" stroke="#ff6b76" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={px(0)} cy={py(4.2)} r="4" fill="#ff6b76" />
          <text x={px(0) + 10} y={py(4.2) - 6} fill="#ff8a93" fontSize="10" fontWeight="700">4.2 peak</text>

          {/* x axis */}
          <line x1={CH_X} y1={CH_Y + CH_H} x2={CH_X + CH_W} y2={CH_Y + CH_H} stroke="#3a4048" strokeWidth="1.2" />
          {[0, 50, 100, 150, 200].map((e) => (
            <text key={e} x={px(e)} y={CH_Y + CH_H + 16} textAnchor="middle" fill="#7d8794" fontSize="9">{e}</text>
          ))}
          <text x={CH_X + CH_W / 2} y={CH_Y + CH_H + 34} textAnchor="middle" fill="#838d99" fontSize="9" fontWeight="700">TRAINING EPOCH</text>
        </svg>

        <div className="rvz-phases">
          <div className="rvz-phase">
            <div className="rvz-phase-e">Epoch 0 – 50</div>
            <div className="rvz-phase-v">4.2 → 0.05</div>
            <div className="rvz-phase-t">Peak rate. All structural adaptation happens in this window.</div>
          </div>
          <div className="rvz-phase">
            <div className="rvz-phase-e">Epoch 50 – 100</div>
            <div className="rvz-phase-v zero">0</div>
            <div className="rvz-phase-t">The network has fully self-stabilised.</div>
          </div>
          <div className="rvz-phase">
            <div className="rvz-phase-e">Epoch 100 – 200</div>
            <div className="rvz-phase-v zero">0</div>
            <div className="rvz-phase-t">Convergence locked. Final weight variance 0.19 against a baseline&apos;s 0.86.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
