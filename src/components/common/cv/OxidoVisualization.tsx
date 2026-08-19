/**
 * OXIDO — the boundary comparison.
 *
 * The single fact that decides whether a regulated institution can buy anything
 * at all is: does our data have to cross the wall? Everything else in the
 * architecture follows from that one question, so that is what this figure is
 * about. Not a feature grid — a wall, and what crosses it.
 */

const layers = [
  {
    n: 'Layer 1',
    name: 'OXIMO',
    what: 'The operating system. Agents that decompose work, hire specialists when no skill exists, and remember across sessions.',
    removes: 'The human in the middle of every task.',
    status: 'built',
  },
  {
    n: 'Layer 2',
    name: 'ORMAS',
    what: 'The training architecture. Per-node self-assessment, health-gated repair, and a causal audit trail emitted natively.',
    removes: 'The black box — and with it, the reason regulated data stays locked.',
    status: 'built',
  },
  {
    n: 'Layer 3',
    name: 'Project Cherry',
    what: 'A model trained by ORMAS from scratch, owned by the institution it runs inside.',
    removes: 'The external API dependency — the last thing that forces data across the wall.',
    status: 'unbuilt',
  },
];

export default function OxidoVisualization() {
  return (
    <div className="ovz">
      <style>{`
        .ovz { margin: 8px 0 0; }
        .ovz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }
        @media (max-width: 900px) { .ovz-grid { grid-template-columns: 1fr; } }

        .ovz-panel {
          background: #121417; border: 1px solid #2a2d32;
          border-radius: 12px; padding: 20px 20px 16px;
        }
        .ovz-panel.is-oxido { border-color: rgba(127,216,143,0.3); }

        .ovz-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99; margin-bottom: 5px;
        }
        .ovz-panel.is-oxido .ovz-eyebrow { color: #7fd88f; }
        .ovz-title { font-size: 16px; font-weight: 700; color: #e8edf4; margin: 0 0 3px; }
        .ovz-sub { font-size: 12.5px; color: #a6b0bc; line-height: 1.55; margin: 0 0 14px; }
        .ovz-svg { width: 100%; height: auto; display: block; }

        .ovz-caption {
          font-size: 11.5px; line-height: 1.6; color: #838d99;
          margin-top: 12px; padding-top: 11px; border-top: 1px solid #22252a;
        }
        .ovz-caption strong { color: #a6b0bc; font-weight: 600; }
        .ovz-caption .bad { color: #ff8a93; font-weight: 600; }
        .ovz-caption .good { color: #7fd88f; font-weight: 600; }

        /* data leaving — the alarming one */
        .ovz-leak { animation: ovzLeak 3.2s ease-in-out infinite; }
        @keyframes ovzLeak {
          0%   { transform: translateX(0);   opacity: 0; }
          10%  { opacity: 1; }
          48%  { opacity: 1; }
          55%  { opacity: 0; }
          100% { transform: translateX(128px); opacity: 0; }
        }
        .ovz-return { animation: ovzReturn 3.2s ease-in-out infinite; }
        @keyframes ovzReturn {
          0%, 55% { transform: translateX(0); opacity: 0; }
          62%     { opacity: 1; }
          92%     { opacity: 1; }
          100%    { transform: translateX(-128px); opacity: 0; }
        }
        .ovz-breach { animation: ovzBreach 3.2s ease-in-out infinite; }
        @keyframes ovzBreach {
          0%, 12%, 60%, 100% { opacity: 0.25; }
          25%, 45%           { opacity: 1; }
        }

        /* internal circulation — stays inside */
        .ovz-orbit {
          stroke-dasharray: 6 7;
          animation: ovzOrbit 2.4s linear infinite;
        }
        @keyframes ovzOrbit { to { stroke-dashoffset: -26; } }

        .ovz-layerglow { animation: ovzLayer 4.2s ease-in-out infinite; }
        @keyframes ovzLayer {
          0%, 100% { opacity: 0.18; }
          50%      { opacity: 0.5; }
        }

        /* layer stack */
        .ovz-stack { display: flex; flex-direction: column; gap: 2px; }
        .ovz-layer {
          display: grid; grid-template-columns: 92px 1fr 1fr;
          gap: 18px; padding: 17px 20px;
          background: #191b1e; border: 1px solid #2a2d32;
        }
        .ovz-layer:first-child { border-radius: 10px 10px 0 0; }
        .ovz-layer:last-child  { border-radius: 0 0 10px 10px; }
        .ovz-layer.is-unbuilt { background: rgba(255,74,87,0.04); border-color: rgba(255,74,87,0.24); }
        @media (max-width: 760px) {
          .ovz-layer { grid-template-columns: 1fr; gap: 7px; }
        }
        .ovz-l-n { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #838d99; }
        .ovz-l-name { font-size: 15px; font-weight: 700; color: #c4cfde; margin-top: 3px; }
        .ovz-l-badge {
          display: inline-block; margin-top: 6px;
          font-size: 9px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; padding: 3px 8px; border-radius: 999px;
        }
        .ovz-l-badge.built   { color: #7fd88f; background: rgba(127,216,143,0.1); border: 1px solid rgba(127,216,143,0.3); }
        .ovz-l-badge.unbuilt { color: #ff6b76; background: rgba(255,74,87,0.1);  border: 1px solid rgba(255,74,87,0.32); }
        .ovz-l-what { font-size: 13.5px; line-height: 1.65; color: #9aa4b0; }
        .ovz-l-rm { font-size: 13.5px; line-height: 1.65; color: #c4cfde; }
        .ovz-l-rm span {
          display: block; font-size: 9.5px; font-weight: 700; letter-spacing: 1.3px;
          text-transform: uppercase; color: #838d99; margin-bottom: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ovz-leak, .ovz-return, .ovz-breach, .ovz-orbit, .ovz-layerglow { animation: none; }
          .ovz-leak, .ovz-return { opacity: 1; }
          .ovz-breach { opacity: 1; }
        }
      `}</style>

      <div className="ovz-grid">

        {/* ══ STANDARD ENTERPRISE AI ══════════════════════════════════ */}
        <div className="ovz-panel">
          <div className="ovz-eyebrow">Every other stack</div>
          <h4 className="ovz-title">The Intelligence Is Rented</h4>
          <p className="ovz-sub">So your data has to travel to reach it.</p>

          <svg className="ovz-svg" viewBox="0 0 460 290" role="img"
               aria-label="In a standard enterprise AI stack, the agent framework sits inside your infrastructure but the model does not. Your proprietary data must cross the boundary out to a vendor API on every single query.">
            <defs>
              <pattern id="ovzGridA" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#1b1e22" strokeWidth="1" />
              </pattern>
              <filter id="ovzGlowA" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="460" height="290" fill="url(#ovzGridA)" opacity="0.6" />

            {/* your infrastructure */}
            <rect x="14" y="46" width="188" height="200" rx="10" fill="rgba(196,207,222,0.03)" stroke="#3a4048" strokeWidth="1.5" />
            <text x="108" y="36" textAnchor="middle" fill="#a6b0bc" fontSize="10" fontWeight="700" letterSpacing="1.5">YOUR INFRASTRUCTURE</text>

            <rect x="34" y="72" width="148" height="52" rx="7" fill="#16181c" stroke="#3a4048" strokeWidth="1.2" />
            <text x="108" y="94" textAnchor="middle" fill="#c4cfde" fontSize="11" fontWeight="700">Your proprietary data</text>
            <text x="108" y="110" textAnchor="middle" fill="#7d8794" fontSize="9">records · positions · telemetry</text>

            <rect x="34" y="146" width="148" height="52" rx="7" fill="#16181c" stroke="#3a4048" strokeWidth="1.2" />
            <text x="108" y="168" textAnchor="middle" fill="#c4cfde" fontSize="11" fontWeight="700">Agent framework</text>
            <text x="108" y="184" textAnchor="middle" fill="#7d8794" fontSize="9">a caller. holds no intelligence.</text>

            {/* the breach */}
            <line className="ovz-breach" x1="202" y1="46" x2="202" y2="246" stroke="#ff6b76" strokeWidth="2.5" strokeDasharray="7 5" />
            <text x="202" y="266" textAnchor="middle" fill="#ff8a93" fontSize="9.5" fontWeight="700">data crosses, every query</text>

            {/* outbound */}
            <line x1="202" y1="130" x2="316" y2="130" stroke="#3a4048" strokeWidth="1.4" />
            <g className="ovz-leak"><circle cx="202" cy="130" r="4" fill="#ff6b76" filter="url(#ovzGlowA)" /></g>
            <line x1="316" y1="166" x2="202" y2="166" stroke="#3a4048" strokeWidth="1.4" />
            <g className="ovz-return" transform="translate(316,0)"><circle cx="0" cy="166" r="3.5" fill="#c4cfde" filter="url(#ovzGlowA)" /></g>

            {/* vendor */}
            <rect x="316" y="92" width="130" height="112" rx="10" fill="#16181c" stroke="#3a4048" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="381" y="122" textAnchor="middle" fill="#a6b0bc" fontSize="10" fontWeight="700" letterSpacing="1.2">VENDOR API</text>
            <text x="381" y="146" textAnchor="middle" fill="#c4cfde" fontSize="11" fontWeight="700">Frozen model</text>
            <text x="381" y="163" textAnchor="middle" fill="#7d8794" fontSize="9">someone else&apos;s weights</text>
            <text x="381" y="178" textAnchor="middle" fill="#7d8794" fontSize="9">someone else&apos;s servers</text>
            <g transform="translate(373, 186)">
              <rect x="0" y="5" width="16" height="12" rx="2.5" fill="none" stroke="#7d8794" strokeWidth="1.4" />
              <path d="M3.5 5V3.2a4.5 4.5 0 0 1 9 0V5" fill="none" stroke="#7d8794" strokeWidth="1.4" />
            </g>
          </svg>

          <p className="ovz-caption">
            For a hospital, a fund, or a defence programme this is <span className="bad">disqualified at the first
            request</span> — before anyone asks how accurate it is. The framework is inside the wall. The intelligence
            never was.
          </p>
        </div>

        {/* ══ OXIDO ═══════════════════════════════════════════════════ */}
        <div className="ovz-panel is-oxido">
          <div className="ovz-eyebrow">The OXIDO stack</div>
          <h4 className="ovz-title">The Intelligence Is Yours</h4>
          <p className="ovz-sub">So nothing has to cross the wall at all.</p>

          <svg className="ovz-svg" viewBox="0 0 460 290" role="img"
               aria-label="In the OXIDO stack all three layers — the agent operating system, the training architecture, and the model itself — sit inside your infrastructure. Data circulates internally and never crosses the boundary.">
            <defs>
              <pattern id="ovzGridB" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#1b1e22" strokeWidth="1" />
              </pattern>
              <filter id="ovzGlowB" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="460" height="290" fill="url(#ovzGridB)" opacity="0.6" />

            {/* sealed boundary */}
            <rect x="14" y="46" width="432" height="200" rx="10" fill="rgba(127,216,143,0.025)" stroke="#7fd88f" strokeWidth="1.6" />
            <text x="230" y="36" textAnchor="middle" fill="#7fd88f" fontSize="10" fontWeight="700" letterSpacing="1.5">YOUR INFRASTRUCTURE — SEALED</text>

            {/* data */}
            <rect x="34" y="118" width="118" height="56" rx="7" fill="#16181c" stroke="#3a4048" strokeWidth="1.2" />
            <text x="93" y="141" textAnchor="middle" fill="#c4cfde" fontSize="11" fontWeight="700">Your data</text>
            <text x="93" y="157" textAnchor="middle" fill="#7d8794" fontSize="9">never moves</text>

            {/* three layers */}
            {[
              { y: 66,  n: 'OXIMO',  s: 'agents that organise themselves', c: '#c4cfde' },
              { y: 126, n: 'ORMAS',  s: 'trains on it · audits itself',     c: '#c4cfde' },
              { y: 186, n: 'CHERRY', s: 'the model you own',                c: '#7fd88f' },
            ].map((l) => (
              <g key={l.n}>
                <rect className="ovz-layerglow" x="188" y={l.y} width="164" height="44" rx="7" fill={l.c} />
                <rect x="188" y={l.y} width="164" height="44" rx="7" fill="#16181c" stroke={l.c} strokeWidth="1.3" opacity="0.95" />
                <text x="270" y={l.y + 20} textAnchor="middle" fill={l.c} fontSize="11.5" fontWeight="700" letterSpacing="0.8">{l.n}</text>
                <text x="270" y={l.y + 35} textAnchor="middle" fill="#98a2ae" fontSize="9">{l.s}</text>
              </g>
            ))}

            {/* internal circulation */}
            <path className="ovz-orbit" d="M152 146 L188 146" fill="none" stroke="#7fd88f" strokeWidth="1.5" />
            <path className="ovz-orbit" d="M352 88 Q 392 88 392 146 Q 392 208 352 208" fill="none" stroke="#7fd88f" strokeWidth="1.5" />
            <path className="ovz-orbit" d="M270 110 L270 126" fill="none" stroke="#7fd88f" strokeWidth="1.5" />
            <path className="ovz-orbit" d="M270 170 L270 186" fill="none" stroke="#7fd88f" strokeWidth="1.5" />
            <circle cx="392" cy="146" r="3.5" fill="#7fd88f" filter="url(#ovzGlowB)" />
            <text x="408" y="150" fill="#7fd88f" fontSize="8.5" fontWeight="700">loops</text>
            <text x="408" y="161" fill="#7fd88f" fontSize="8.5" fontWeight="700">inside</text>

            <text x="230" y="266" textAnchor="middle" fill="#7fd88f" fontSize="9.5" fontWeight="700">
              nothing crosses the boundary — there is no outbound call to make
            </text>
          </svg>

          <p className="ovz-caption">
            Same wall, everything inside it. That is not a privacy feature bolted on — it is{' '}
            <span className="good">the only configuration these buyers can legally deploy</span>, and it is why all
            three layers had to exist.
          </p>
        </div>
      </div>

      {/* ══ WHAT EACH LAYER REMOVES ═════════════════════════════════ */}
      <div className="ovz-stack">
        {layers.map((l) => (
          <div className={`ovz-layer${l.status === 'unbuilt' ? ' is-unbuilt' : ''}`} key={l.name}>
            <div>
              <div className="ovz-l-n">{l.n}</div>
              <div className="ovz-l-name">{l.name}</div>
              <span className={`ovz-l-badge ${l.status}`}>{l.status === 'built' ? 'Built' : 'Not built'}</span>
            </div>
            <div className="ovz-l-what">{l.what}</div>
            <div className="ovz-l-rm"><span>Removes</span>{l.removes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
