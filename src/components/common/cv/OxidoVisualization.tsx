/**
 * The boundary comparison.
 *
 * The single fact that decides whether a regulated institution can buy anything
 * at all is: does our data have to cross the wall? Everything else in the
 * architecture follows from that one question, so that is what this figure is
 * about. Not a feature grid — a wall, and what crosses it.
 */

const delivered = [
  {
    n: '01',
    name: 'The model',
    what: 'Deploys exactly as it would have done. Same architecture, same inference cost, no change to the serving path.',
    removes: 'Nothing. That is the point — the trade is not capability for accountability.',
    status: 'built',
  },
  {
    n: '02',
    name: 'The named parts',
    what: 'What the model learned from each source, held as a discrete addressable object, bound to the record of the data that justified it.',
    removes: 'The dead end where data enters a model and stops being something anyone can point at.',
    status: 'built',
  },
  {
    n: '03',
    name: 'Model Change Record',
    what: 'Every weight change training made: which component, at which step, under which diagnosis, by how much, inside what declared limit. Signed, tamper-evident and diffable against the last approved version.',
    removes: 'The estimate. An auditor gets a log instead of somebody’s reconstruction.',
    status: 'built',
  },
];

export default function OxidoVisualization() {
  return (
    <div className="ovz">
      <style>{`
        .ovz { margin: 8px 0 0; }
        .ovz-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 14px; margin-bottom: 14px; }
        @media (max-width: 900px) { .ovz-grid { grid-template-columns: 1fr; } }

        .ovz-panel {
          min-width: 0; background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-top: 3px solid var(--pf-ink-3); padding: 22px 22px 18px;
        }
        .ovz-panel.is-oxido { border-top-color: var(--pf-accent); }

        .ovz-eyebrow {
          font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11.5px; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 6px;
        }
        .ovz-panel.is-oxido .ovz-eyebrow { color: var(--pf-accent); }
        .ovz-title { font-family: var(--rx-sans, system-ui, sans-serif) !important; font-size: 19px; font-weight: 700; color: var(--pf-ink); margin: 0 0 4px; letter-spacing: -0.2px; }
        .ovz-sub { font-size: 15px; color: var(--pf-ink-2); line-height: 1.55; margin: 0 0 14px; }
        .ovz-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .ovz-svg { width: 100%; height: auto; display: block; }
        .ovz-swipe { display: none; }
        @media (max-width: 600px) {
          .ovz-panel { padding: 18px 16px 16px; }
          .ovz-svg { min-width: 500px; }
          .ovz-swipe {
            display: block; margin-top: 8px;
            font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: .06em;
            text-transform: uppercase; color: var(--pf-ink-3);
          }
        }

        .ovz-caption {
          font-size: 15px; line-height: 1.6; color: var(--pf-ink-2);
          margin: 14px 0 0; padding-top: 12px; border-top: 1px solid var(--pf-border);
        }
        .ovz-caption strong { color: var(--pf-ink); font-weight: 600; }
        .ovz-caption .bad { color: var(--pf-ink); font-weight: 700; }
        .ovz-caption .good { color: var(--pf-accent); font-weight: 700; }

        /* data leaving vs. data circulating: the only motion, and it carries meaning */
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
        .ovz-orbit { stroke-dasharray: 6 7; animation: ovzOrbit 2.4s linear infinite; }
        @keyframes ovzOrbit { to { stroke-dashoffset: -26; } }

        /* what is delivered */
        .ovz-stack { display: grid; gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); }
        .ovz-layer {
          display: grid; grid-template-columns: 200px minmax(0, 1fr) minmax(0, 1fr);
          gap: 24px; padding: 20px 22px; background: var(--pf-surface);
        }
        .ovz-layer.is-mcr { box-shadow: inset 3px 0 0 var(--pf-accent); }
        @media (max-width: 760px) { .ovz-layer { grid-template-columns: 1fr; gap: 8px; padding: 18px; } }
        .ovz-l-n { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11.5px; letter-spacing: .08em; color: var(--pf-ink-3); }
        .ovz-l-name { font-size: 17px; font-weight: 700; color: var(--pf-ink); margin-top: 3px; line-height: 1.3; }
        .ovz-l-badge {
          display: inline-block; margin-top: 8px;
          font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11px; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase; padding: 3px 8px;
        }
        .ovz-l-badge.built   { color: #1f6b43; background: rgba(62, 155, 98, .12); border: 1px solid rgba(62, 155, 98, .4); }
        .ovz-l-badge.unbuilt { color: var(--pf-accent); background: transparent; border: 1px dashed var(--pf-border-2); }
        .ovz-l-what { font-size: 15.5px; line-height: 1.65; color: var(--pf-ink-2); }
        .ovz-l-rm { font-size: 15.5px; line-height: 1.65; color: var(--pf-ink); }
        .ovz-l-rm span {
          display: block; font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11px;
          letter-spacing: .08em; text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ovz-leak, .ovz-return, .ovz-orbit { animation: none; }
          .ovz-leak, .ovz-return { opacity: 1; }
        }
      `}</style>

      <div className="ovz-grid">

        {/* ══ STANDARD ENTERPRISE AI ══════════════════════════════════ */}
        <div className="ovz-panel">
          <div className="ovz-eyebrow">Every other stack</div>
          <h4 className="ovz-title">The Intelligence Is Rented</h4>
          <p className="ovz-sub">So your data has to travel to reach it.</p>

          <div className="ovz-scroll"><svg className="ovz-svg" viewBox="0 0 460 290" role="img"
               aria-label="In a standard enterprise AI stack, the agent framework sits inside your infrastructure but the model does not. Your proprietary data must cross the boundary out to a vendor API on every single query.">
            <defs>
              <pattern id="ovzGridA" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="var(--pf-border)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="460" height="290" fill="url(#ovzGridA)" opacity="0.6" />

            {/* your infrastructure */}
            <rect x="14" y="46" width="188" height="200" rx="0" fill="rgba(var(--pf-ink-rgb), 0.03)" stroke="var(--pf-ink-4)" strokeWidth="1.5" />
            <text x="108" y="36" textAnchor="middle" fill="var(--pf-ink-2)" fontSize="10" fontWeight="700" letterSpacing="1.5">YOUR INFRASTRUCTURE</text>

            <rect x="34" y="72" width="148" height="52" rx="0" fill="var(--pf-surface)" stroke="var(--pf-ink-4)" strokeWidth="1.2" />
            <text x="108" y="94" textAnchor="middle" fill="var(--pf-ink)" fontSize="11" fontWeight="700">Your proprietary data</text>
            <text x="108" y="110" textAnchor="middle" fill="var(--pf-ink-3)" fontSize="9">records · positions · telemetry</text>

            <rect x="34" y="146" width="148" height="52" rx="0" fill="var(--pf-surface)" stroke="var(--pf-ink-4)" strokeWidth="1.2" />
            <text x="108" y="168" textAnchor="middle" fill="var(--pf-ink)" fontSize="11" fontWeight="700">Agent framework</text>
            <text x="108" y="184" textAnchor="middle" fill="var(--pf-ink-3)" fontSize="9">a caller. holds no intelligence.</text>

            {/* the breach */}
            <line x1="202" y1="46" x2="202" y2="246" stroke="var(--pf-accent)" strokeWidth="2.5" strokeDasharray="7 5" />
            <text x="202" y="266" textAnchor="middle" fill="var(--pf-accent)" fontSize="9.5" fontWeight="700">data crosses, every query</text>

            {/* outbound */}
            <line x1="202" y1="130" x2="316" y2="130" stroke="var(--pf-ink-4)" strokeWidth="1.4" />
            <g className="ovz-leak"><circle cx="202" cy="130" r="4" fill="var(--pf-accent)" stroke="var(--pf-surface)" strokeWidth="2" paintOrder="stroke" /></g>
            <line x1="316" y1="166" x2="202" y2="166" stroke="var(--pf-ink-4)" strokeWidth="1.4" />
            <g className="ovz-return" transform="translate(316,0)"><circle cx="0" cy="166" r="3.5" fill="var(--pf-ink)" stroke="var(--pf-surface)" strokeWidth="2" paintOrder="stroke" /></g>

            {/* vendor */}
            <rect x="316" y="92" width="130" height="112" rx="0" fill="var(--pf-surface)" stroke="var(--pf-ink-4)" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="381" y="122" textAnchor="middle" fill="var(--pf-ink-2)" fontSize="10" fontWeight="700" letterSpacing="1.2">VENDOR API</text>
            <text x="381" y="146" textAnchor="middle" fill="var(--pf-ink)" fontSize="11" fontWeight="700">Frozen model</text>
            <text x="381" y="163" textAnchor="middle" fill="var(--pf-ink-3)" fontSize="9">someone else&apos;s weights</text>
            <text x="381" y="178" textAnchor="middle" fill="var(--pf-ink-3)" fontSize="9">someone else&apos;s servers</text>
            <g transform="translate(373, 186)">
              <rect x="0" y="5" width="16" height="12" rx="2.5" fill="none" stroke="var(--pf-ink-3)" strokeWidth="1.4" />
              <path d="M3.5 5V3.2a4.5 4.5 0 0 1 9 0V5" fill="none" stroke="var(--pf-ink-3)" strokeWidth="1.4" />
            </g>
          </svg></div>
          <span className="ovz-swipe" aria-hidden="true">Scroll the diagram sideways →</span>

          <p className="ovz-caption">
            For a hospital, a fund or a defence programme, sending data off-site is often{' '}
            <span className="bad">ruled out before accuracy is even considered</span>. The framework sits inside the
            perimeter, but the intelligence does not.
          </p>
        </div>

        {/* ══ OXIEDO ═══════════════════════════════════════════════════ */}
        <div className="ovz-panel is-oxido">
          <div className="ovz-eyebrow">With ORMAS</div>
          <h4 className="ovz-title">The Training Happens Inside</h4>
          <p className="ovz-sub">So nothing has to cross the wall at all.</p>

          <div className="ovz-scroll"><svg className="ovz-svg" viewBox="0 0 460 290" role="img"
               aria-label="With ORMAS the training architecture, the resulting model and the record it produces all sit inside your own infrastructure. Data circulates internally and never crosses the boundary.">
            <defs>
              <pattern id="ovzGridB" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="var(--pf-border)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="460" height="290" fill="url(#ovzGridB)" opacity="0.6" />

            {/* sealed boundary */}
            <rect x="14" y="46" width="432" height="200" rx="0" fill="rgba(var(--pf-pos-rgb), 0.025)" stroke="var(--pf-pos)" strokeWidth="1.6" />
            <text x="230" y="36" textAnchor="middle" fill="var(--pf-pos)" fontSize="10" fontWeight="700" letterSpacing="1.5">YOUR INFRASTRUCTURE — SEALED</text>

            {/* data */}
            <rect x="34" y="118" width="118" height="56" rx="0" fill="var(--pf-surface)" stroke="var(--pf-ink-4)" strokeWidth="1.2" />
            <text x="93" y="141" textAnchor="middle" fill="var(--pf-ink)" fontSize="11" fontWeight="700">Your data</text>
            <text x="93" y="157" textAnchor="middle" fill="var(--pf-ink-3)" fontSize="9">never moves</text>

            {/* three layers */}
            {[
              { y: 66,  n: 'ORMAS',  s: 'trains on it, in your building',  c: 'var(--pf-ink)' },
              { y: 126, n: 'THE MODEL', s: 'yours, same cost as ever',      c: 'var(--pf-ink)' },
              { y: 186, n: 'THE RECORD', s: 'Model Change Record, signed', c: 'var(--pf-pos)' },
            ].map((l) => (
              <g key={l.n}>
                <rect x="188" y={l.y} width="164" height="44" rx="0" fill="var(--pf-surface)" stroke={l.c} strokeWidth="1.3" opacity="0.95" />
                <text x="270" y={l.y + 20} textAnchor="middle" fill={l.c} fontSize="11.5" fontWeight="700" letterSpacing="0.8">{l.n}</text>
                <text x="270" y={l.y + 35} textAnchor="middle" fill="var(--pf-ink-2)" fontSize="9">{l.s}</text>
              </g>
            ))}

            {/* internal circulation */}
            <path className="ovz-orbit" d="M152 146 L188 146" fill="none" stroke="var(--pf-pos)" strokeWidth="1.5" />
            <path className="ovz-orbit" d="M352 88 Q 392 88 392 146 Q 392 208 352 208" fill="none" stroke="var(--pf-pos)" strokeWidth="1.5" />
            <path className="ovz-orbit" d="M270 110 L270 126" fill="none" stroke="var(--pf-pos)" strokeWidth="1.5" />
            <path className="ovz-orbit" d="M270 170 L270 186" fill="none" stroke="var(--pf-pos)" strokeWidth="1.5" />
            <circle cx="392" cy="146" r="3.5" fill="var(--pf-pos)" stroke="var(--pf-surface)" strokeWidth="2" paintOrder="stroke" />
            <text x="408" y="150" fill="var(--pf-pos)" fontSize="8.5" fontWeight="700">loops</text>
            <text x="408" y="161" fill="var(--pf-pos)" fontSize="8.5" fontWeight="700">inside</text>

            <text x="230" y="266" textAnchor="middle" fill="var(--pf-pos)" fontSize="9.5" fontWeight="700">
              nothing crosses the boundary — there is no outbound call to make
            </text>
          </svg></div>
          <span className="ovz-swipe" aria-hidden="true">Scroll the diagram sideways →</span>

          <p className="ovz-caption">
            Everything stays inside the perimeter. For these buyers this is{' '}
            <span className="good">often the only deployable configuration</span>, and it is why the record is
            produced during training rather than recovered afterwards.
          </p>
        </div>
      </div>

      {/* ══ WHAT IS DELIVERED ═══════════════════════════════════════ */}
      <div className="ovz-stack">
        {delivered.map((l) => (
          <div className={`ovz-layer${l.status === 'unbuilt' ? ' is-unbuilt' : ''}${l.n === '03' ? ' is-mcr' : ''}`} key={l.name}>
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
