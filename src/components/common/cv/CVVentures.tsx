import CVSection from './CVSection';

/**
 * Ventures — the phase before any of the systems.
 *
 * Five businesses and one exit, ages 12 to 17. Kept as its own section because
 * it is its own phase: this is where the finding that produced OXIMO came from,
 * and burying it inside a personal statement lost that.
 */

// In order, ages 12 to 17. Per-venture ages are left out where they are not on record.
const ventures = [
  {
    n: '01',
    title: 'Tournament Gaming App',
    age: 'Co-founder',
    broke: 'Trust before distribution',
    lesson: 'A gaming app in which players competed in tournaments for points they could later cash out. The product could be built; reaching players and earning their trust in the payouts was the obstacle.',
  },
  {
    n: '02',
    title: 'EWM Trading Algorithm',
    age: 'Sold at 15',
    broke: 'Signal hidden in order flow',
    lesson: 'A trading algorithm that matured into the EWM model and was sold to a U.S. client for about $10,000. Building it meant learning market microstructure: order flow that cannot be inferred from price data alone.',
  },
  {
    n: '03',
    title: 'Web-Development Sales Agency',
    age: 'Services',
    broke: 'Trust limits at the close',
    lesson: 'A sales operation selling website development. Automation could carry most of the sales cycle, but every close required a human: trust in an autonomous agent stops at the transaction.',
  },
  {
    n: '04',
    title: 'E-Commerce Store',
    age: 'Retail',
    broke: 'Coordination at scale',
    lesson: 'Optimising pricing, listings or marketing one at a time yields a few percent. The real work was coordinating research, listing, pricing, fulfilment and service at once, which no single operator can sustain.',
  },
  {
    n: '05',
    title: 'Blockchain Software Project',
    age: 'Discontinued',
    broke: 'Confirmation of the pattern',
    lesson: 'A software company building blockchain-based cryptographic products, discontinued before launch. It confirmed the pattern: the constraint was coordination, not individual capability. That finding became the design brief for OXIMO.',
  },
];

export default function CVVentures() {
  return (
    <CVSection
      id="ventures"
      phase="before"
      eyebrow="Ventures · 2020–2025"
      title={<>Five ventures from age 12, and a ~$10,000 sale at 15.</>}
      lead={
        <>
          Raadh started his first venture at 12 and four more by 17, and at 15 he sold the EWM trading
          algorithm to a U.S. client for about $10,000. Each venture hit a different limit.{' '}
          <strong>Together they identified the constraint every later system was built to remove:
          coordination, not individual capability.</strong>
        </>
      }
      meta={[
        { k: 'Ventures', v: 'Five, ages 12–17' },
        { k: 'Exit', v: '~$10,000 at fifteen' },
        { k: 'Reinvested in', v: 'The RTX 3090' },
        { k: 'Key finding', v: 'Coordination → OXIMO' },
      ]}
    >
      <style>{`
        .vn-exit {
          display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: center;
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-top: 3px solid var(--pf-accent);
          padding: 26px 30px; margin-bottom: 48px;
        }
        @media (max-width: 640px) { .vn-exit { grid-template-columns: 1fr; gap: 14px; padding: 22px 20px; } }
        .vn-exit-v { font-family: var(--rx-serif, Georgia, serif); font-size: 56px; font-weight: 400; color: var(--pf-accent); line-height: 1; letter-spacing: -0.02em; }
        .vn-exit-k { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--pf-ink-3); margin-top: 10px; }
        .rx .vn-exit-h { font-family: var(--rx-sans, system-ui, sans-serif); font-size: 19px; font-weight: 700; color: var(--pf-ink); margin: 0 0 8px; letter-spacing: -0.2px; }
        .vn-exit-p { font-size: 16.5px; line-height: 1.65; color: var(--pf-ink-2); margin: 0; max-width: 75ch; }
        .vn-exit-p strong { color: var(--pf-ink); font-weight: 700; }

        .vn-label {
          font-size: 12px; font-weight: 800; letter-spacing: 1.6px;
          text-transform: uppercase; color: var(--pf-ink-2);
          margin: 0 0 14px;
        }

        .vn-list { list-style: none; padding: 0; display: grid; gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); margin: 0 0 48px; }
        .vn-row { margin: 0; display: grid; grid-template-columns: 56px minmax(0, 1fr); gap: 20px; background: var(--pf-surface); padding: 22px 26px; }
        .vn-num { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 13px; color: var(--pf-accent); padding-top: 3px; }
        .vn-top { display: flex; align-items: baseline; gap: 6px 14px; flex-wrap: wrap; margin-bottom: 8px; }
        .vn-title { font-size: 18px; font-weight: 700; color: var(--pf-ink); line-height: 1.35; }
        .vn-age { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 12px; letter-spacing: .06em; text-transform: uppercase; color: var(--pf-ink-3); }
        .vn-broke {
          display: inline-block; font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11.5px; font-weight: 500;
          letter-spacing: .06em; text-transform: uppercase; color: var(--pf-accent); line-height: 1.4;
          background: transparent; border: 1px solid var(--pf-border-2); padding: 4px 9px; margin-bottom: 10px;
        }
        .vn-lesson { font-size: 16px; line-height: 1.65; color: var(--pf-ink-2); margin: 0; max-width: 78ch; }
        @media (max-width: 640px) {
          .vn-row { grid-template-columns: 1fr; gap: 6px; padding: 20px 18px; }
        }

        .vn-finding {
          background: linear-gradient(135deg, #082f39, #0b404d 55%, #155e5a);
          padding: 30px 32px;
        }
        @media (max-width: 640px) { .vn-finding { padding: 24px 20px; } }
        .vn-finding-k { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11.5px; letter-spacing: .08em; text-transform: uppercase; color: #d8ee96; margin-bottom: 14px; }
        .vn-finding p { font-size: 17px; line-height: 1.7; color: rgba(251, 251, 249, .86); margin: 0 0 14px; max-width: 75ch; }
        .vn-finding p:last-child { margin-bottom: 0; }
        .vn-finding strong { color: #fbfbf9; font-weight: 700; }
      `}</style>

      <div className="vn-exit">
        <div>
          <div className="vn-exit-v">~$10,000</div>
          <div className="vn-exit-k">Built and exited · age 15</div>
        </div>
        <div>
          <h3 className="vn-exit-h">The EWM trading algorithm, built and sold at fifteen</h3>
          <p className="vn-exit-p">
            Sold to a U.S. client for about $10,000.{' '}
            <strong>The proceeds funded the RTX 3090 that ran all 383 ORMAS experiments</strong>, so the
            research behind OXIEDO was financed by a product he built and sold himself.
          </p>
        </div>
      </div>

      <p className="vn-label">Five ventures, five limits found</p>
      <ol className="vn-list">
        {ventures.map((v) => (
          <li className="vn-row" key={v.n}>
            <div className="vn-num">{v.n}</div>
            <div>
              <div className="vn-top">
                <span className="vn-title">{v.title}</span>
                <span className="vn-age">{v.age}</span>
              </div>
              <span className="vn-broke">Limit found: {v.broke}</span>
              <p className="vn-lesson">{v.lesson}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="vn-finding">
        <div className="vn-finding-k">What five ventures taught him</div>
        <p>
          Each venture failed at a different point, and all for the same reason.{' '}
          <strong>The constraint was coordination, not individual capability.</strong>
        </p>
        <p>
          A structural problem needed a structural answer. That conclusion produced OXIMO; OXIMO&apos;s limit
          on real-world data produced ORMAS; ORMAS is the technology OXIEDO licenses.
        </p>
      </div>
    </CVSection>
  );
}
