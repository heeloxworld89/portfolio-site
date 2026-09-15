import CVSection from './CVSection';

/**
 * Ventures — the phase before any of the systems.
 *
 * Five businesses and one exit, ages 12 to 17. Kept as its own section because
 * it is its own phase: this is where the finding that produced OXIMO came from,
 * and burying it inside a personal statement lost that.
 */

const ventures = [
  {
    n: '01',
    title: 'Software Services',
    age: 'Age 12–14',
    broke: 'Distribution',
    lesson: 'I could build the thing. I could not get it in front of anyone. Distribution without institutional credibility is not a technical problem, and enterprise procurement does not route on technical merit alone.',
  },
  {
    n: '02',
    title: 'Cold-Call Automation — European Markets',
    age: 'Age 14–15',
    broke: 'Trust at the transaction',
    lesson: 'Automation handled 90% of the sales cycle reliably. The last 10% — the close — needed a human in the room every time. Trust in an autonomous agent has a hard ceiling at the transaction, and that ceiling became a design constraint I carried into everything after.',
  },
  {
    n: '03',
    title: 'US-Targeted Digital Marketing',
    age: 'Age 15',
    broke: 'The wrong bottleneck',
    lesson: 'I assumed the bottleneck was distribution. It was production. I did not need something that could move content around; I needed something that could make it at volume.',
  },
  {
    n: '04',
    title: 'Organic E-Commerce',
    age: 'Age 15–16',
    broke: 'Coordination',
    lesson: 'Optimising pricing, or listings, or marketing individually buys a few percent. The real problem is coordinating research, listing, pricing, fulfilment and service at once. One person cannot be the whole system, however hard they work.',
  },
  {
    n: '05',
    title: 'Automation Tooling',
    age: 'Age 16–17',
    broke: 'Coordination, again',
    lesson: 'The last one confirmed what the previous four had been saying. The bottleneck was never individual capability. It was always coordination.',
  },
];

export default function CVVentures() {
  return (
    <CVSection
      id="ventures"
      phase="before"
      eyebrow="Ventures · 2020–2025"
      title="Five businesses and an exit, all of it before I turned eighteen."
      lead={
        <>
          I started my first company at twelve. Four more followed and every one of them broke somewhere
          different. Somewhere in the middle I built a stock-prediction system good enough that somebody
          paid me around ten thousand dollars for it, at fifteen.{' '}
          <strong>The five failures all pointed at the same thing, and that one sentence is the reason
          the rest of this page exists.</strong>
        </>
      }
      meta={[
        { k: 'Ventures', v: 'Five' },
        { k: 'Exit', v: '~$10,000 · age 15' },
        { k: 'Span', v: 'Ages 12–17' },
        { k: 'Outcome', v: 'One finding' },
      ]}
    >
      <style>{`
        .vn-exit {
          display: grid; grid-template-columns: auto 1fr; gap: 26px; align-items: center;
          background: #191b1e; border: 1px solid #2a2d32;
          border-left: 2px solid #7fd88f; border-radius: 0 10px 10px 0;
          padding: 24px 28px; margin-bottom: 40px;
        }
        @media (max-width: 640px) { .vn-exit { grid-template-columns: 1fr; gap: 14px; } }
        .vn-exit-v { font-size: 34px; font-weight: 800; color: #8fd89c; line-height: 1; letter-spacing: -1px; }
        .vn-exit-k { font-size: 10px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: #838d99; margin-top: 8px; }
        .vn-exit-h { font-size: 17px; font-weight: 700; color: #fff; margin: 0 0 8px; }
        .vn-exit-p { font-size: 14.5px; line-height: 1.75; color: #9aa4b0; margin: 0; }
        .vn-exit-p strong { color: #c4cfde; font-weight: 600; }

        .vn-label {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99;
          margin: 0 0 16px; padding-bottom: 9px; border-bottom: 1px solid #2a2d32;
        }

        .vn-list { display: flex; flex-direction: column; gap: 2px; margin-bottom: 40px; }
        .vn-row {
          display: grid; grid-template-columns: 44px 1fr; gap: 20px;
          background: #191b1e; border: 1px solid #2a2d32; padding: 20px 24px;
        }
        .vn-num { font-size: 12px; font-weight: 800; color: #565d68; font-family: ui-monospace, Menlo, monospace; padding-top: 3px; }
        .vn-top { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; margin-bottom: 4px; }
        .vn-title { font-size: 15.5px; font-weight: 700; color: #c4cfde; }
        .vn-age { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #7d8794; }
        .vn-broke {
          display: inline-block; font-size: 10px; font-weight: 800; letter-spacing: 1.2px;
          text-transform: uppercase; color: #ff8189;
          background: rgba(255,74,87,0.09); border: 1px solid rgba(255,74,87,0.28);
          border-radius: 999px; padding: 3px 10px; margin-bottom: 10px;
        }
        .vn-lesson { font-size: 14px; line-height: 1.75; color: #9aa4b0; margin: 0; }
        @media (max-width: 640px) { .vn-row { grid-template-columns: 1fr; gap: 8px; } .vn-num { display: none; } }

        .vn-finding {
          background: #191b1e; border: 1px solid #2a2d32;
          border-left: 2px solid #ff4a57; border-radius: 0 10px 10px 0;
          padding: 26px 30px;
        }
        .vn-finding-k { font-size: 10px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: #ff8189; margin-bottom: 12px; }
        .vn-finding p { font-size: 16.5px; line-height: 1.8; color: #c4cfde; margin: 0 0 14px; }
        .vn-finding p:last-child { margin-bottom: 0; }
        .vn-finding strong { color: #fff; font-weight: 700; }
      `}</style>

      <div className="vn-exit">
        <div>
          <div className="vn-exit-v">~$10,000</div>
          <div className="vn-exit-k">Built and exited · age 15</div>
        </div>
        <div>
          <h3 className="vn-exit-h">A stock-prediction system, built and sold at fifteen</h3>
          <p className="vn-exit-p">
            The first time anybody outside my own head put a number on the work. It matters for a reason
            that has nothing to do with the money itself:{' '}
            <strong>I spent it on the RTX 3090 that ran all 383 ORMAS experiments.</strong> Every result on
            this page was paid for by something I built and sold before I could drive.
          </p>
        </div>
      </div>

      <p className="vn-label">Five companies, five different ways to break</p>
      <div className="vn-list">
        {ventures.map((v) => (
          <div className="vn-row" key={v.n}>
            <div className="vn-num">{v.n}</div>
            <div>
              <div className="vn-top">
                <span className="vn-title">{v.title}</span>
                <span className="vn-age">{v.age}</span>
              </div>
              <span className="vn-broke">Broke at: {v.broke}</span>
              <p className="vn-lesson">{v.lesson}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="vn-finding">
        <div className="vn-finding-k">What all five were telling me</div>
        <p>
          Every one broke in a different place. Every one broke for the same reason.{' '}
          <strong>The limit was never how capable I was. It was always coordination.</strong>
        </p>
        <p>
          Which means working harder was never going to fix it. A structural problem needs a structural
          answer, and that realisation is where OXIMO came from — and OXIMO, eventually, is where the
          research came from.
        </p>
      </div>
    </CVSection>
  );
}
