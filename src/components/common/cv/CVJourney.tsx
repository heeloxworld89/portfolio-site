export default function CVJourney() {
  const ventures = [
    {
      title: 'Software Services',
      age: 'Age 12–14',
      lesson: 'I could build the thing. I could not get it in front of anyone. Distribution without institutional credibility or a network is not a technical problem, and enterprise procurement does not route on technical merit alone.',
    },
    {
      title: 'Cold-Call Automation — European Markets',
      age: 'Age 14–15',
      lesson: 'Automation handled 90% of the sales cycle reliably. The last 10% — the close — needed a human in the room, every time. Trust in an autonomous agent has a hard ceiling at the transaction, and that ceiling became a design constraint I carried into OXIMO.',
    },
    {
      title: 'US-Targeted Digital Marketing',
      age: 'Age 15',
      lesson: 'I assumed the bottleneck was distribution. It was production. I did not need something that could move content around; I needed something that could make it at volume.',
    },
    {
      title: 'Organic E-Commerce',
      age: 'Age 15–16',
      lesson: 'Optimising pricing, or listings, or marketing individually buys you a few percent. The real problem is coordinating research, listing, pricing, fulfilment, and service at once. One person cannot be the whole system, however hard they work.',
    },
    {
      title: 'Automation Tooling',
      age: 'Age 16–17',
      lesson: 'The last one confirmed what the previous four had been telling me: the bottleneck was never individual capability. It was always coordination.',
    },
  ];

  return (
    <div className="row mb--50" id="journey">
      <style>{`
        /* ─── Origin — scoped to .origin-* ─── */

        .origin-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 1100px) {
          .origin-layout { grid-template-columns: 1fr; gap: 28px; }
          .origin-rail { order: -1; }
        }

        /* Foundation cards — 2-col */
        .origin-foundation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }
        @media (max-width: 640px) {
          .origin-foundation-grid { grid-template-columns: 1fr; }
        }

        .origin-card {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 22px 24px;
          transition: border-color 0.25s;
        }
        .origin-card:hover { border-color: rgba(255,255,255,0.12); }

        .origin-card-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b7683;
          margin-bottom: 10px;
        }
        .origin-card-body {
          font-size: 14px;
          line-height: 1.75;
          color: #9aa4b0;
          margin: 0;
        }
        .origin-card-body strong { color: #c4cfde; }

        /* Section header */
        .origin-section-title {
          font-size: 18px;
          font-weight: 700;
          color: #c4cfde;
          margin: 0 0 6px;
        }
        .origin-section-lead {
          font-size: 14px;
          line-height: 1.75;
          color: #9aa4b0;
          margin: 0 0 24px;
        }

        /* Venture list */
        .origin-venture-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 32px;
        }

        .origin-venture {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 16px;
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 18px 20px;
          align-items: start;
          transition: border-color 0.25s;
        }
        .origin-venture:hover { border-color: rgba(255,255,255,0.1); }

        .origin-venture-age {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #6b7683;
          padding-top: 2px;
        }

        .origin-venture-title {
          font-size: 13px;
          font-weight: 700;
          color: #c4cfde;
          margin-bottom: 6px;
          letter-spacing: 0.2px;
        }
        .origin-venture-lesson {
          font-size: 13px;
          line-height: 1.7;
          color: #9aa4b0;
        }

        /* Insight block */
        .origin-insight {
          background: rgba(196,207,222,0.045);
          border: 1px solid #2a2d32;
          border-left: 2px solid #c4cfde;
          border-radius: 0 8px 8px 0;
          padding: 22px 26px;
        }
        .origin-insight-lead {
          font-size: 16px;
          line-height: 1.75;
          color: #c4cfde;
          font-weight: 600;
          margin: 0 0 12px;
        }
        .origin-insight-body {
          font-size: 14px;
          line-height: 1.75;
          color: #9aa4b0;
          margin: 0 0 10px;
        }
        .origin-insight-body:last-child { margin: 0; }
        .origin-insight-body strong { color: #c4cfde; }

        /* Right rail */
        .origin-rail {
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: sticky;
          top: 24px;
        }

        .origin-metric {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 20px 22px;
        }
        .origin-metric-val {
          font-size: 30px;
          font-weight: 800;
          color: #c4cfde;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .origin-metric-lbl {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #6b7683;
          margin-bottom: 6px;
        }
        .origin-metric-note {
          font-size: 12px;
          color: #9aa4b0;
          line-height: 1.55;
        }

        .origin-finding-block {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          overflow: hidden;
        }
        .origin-finding-header {
          padding: 10px 18px;
          border-bottom: 1px solid #2a2d32;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b7683;
          background: rgba(255,255,255,0.02);
        }
        .origin-finding-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .origin-finding-row:last-child { border-bottom: none; }
        .origin-finding-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2a2d32;
          border: 1px solid #4a5568;
          flex-shrink: 0;
          margin-top: 5px;
        }
        .origin-finding-text {
          font-size: 12px;
          color: #9aa4b0;
          line-height: 1.6;
        }
        .origin-finding-text strong { color: #c4cfde; font-weight: 600; }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>Origin</span>
        <h2 className="title mb--10 fs-2" style={{ fontWeight: 700 }}>The Experimental Ground That Motivated Everything</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#9aa4b0', marginBottom: '40px', maxWidth: '640px' }}>
          Every system on this page came out of something that went wrong first. I did not start with research and go looking for problems. The problems came first, and none of this was planned.
        </p>

        <div className="origin-layout">

          {/* ── LEFT — Narrative ─────────────────────────────── */}
          <div>

            {/* Foundation Cards */}
            <div className="origin-foundation-grid">
              <div className="origin-card">
                <div className="origin-card-tag">Age 12 — First Principles</div>
                <p className="origin-card-body">
                  I started programming at 12, and every project since has been built slightly past what I already knew how to do. That set the pattern early: learn whatever the problem demands, not whatever the curriculum offers. The habit was fixed well before I had any formal exposure to computer science.
                </p>
              </div>
              <div className="origin-card">
                <div className="origin-card-tag">Age 15 — First Validated Output</div>
                <p className="origin-card-body">
                  I built a stock market prediction system — market data ingestion, fundamental analysis, technical analysis, directional call — and sold it for roughly <strong>$10,000 USD</strong>. That money bought the RTX 3090 that later ran all 383 ORMAS experiments. It was also the first time somebody outside my own head confirmed the work was worth something.
                </p>
              </div>
            </div>

            {/* Five Ventures */}
            <div className="origin-section-title">Five Ventures. Five Distinct Failure Modes. One Convergent Finding.</div>
            <p className="origin-section-lead">
              Between 12 and 17 I ran five ventures across software, automation, and e-commerce. Each one broke at a structurally different layer, and each one handed me the same finding from a different angle.
            </p>

            <div className="origin-venture-list">
              {ventures.map((v, i) => (
                <div key={i} className="origin-venture">
                  <div className="origin-venture-age">{v.age}</div>
                  <div>
                    <div className="origin-venture-title">{v.title}</div>
                    <div className="origin-venture-lesson">{v.lesson}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Structural Insight */}
            <div className="origin-insight">
              <p className="origin-insight-lead">
                No single piece of the pipeline was the problem. The pipeline was the problem — and the coordination cost that makes it impossible for one person to hold at scale.
              </p>
              <p className="origin-insight-body">
                Five ventures failing at five different stages is, read generously, a structured experiment in how businesses break. The variable was identical every time: one person trying to occupy every role in a system that needs several specialists working at once.
              </p>
              <p className="origin-insight-body">
                That is a structural problem, so it needed a structural answer. <strong>OXIMO</strong> was mine — an operating system that builds its own org chart on demand, splits tasks up without being told how, and creates new agent roles when the work calls for them. Then its agents needed to learn from real production data: corrupted, contradictory, adversarial. That constraint is where <strong>ORMAS</strong> came from. The failed ventures are not a preamble to the research. They are the substrate it grew out of.
              </p>
            </div>

          </div>

          {/* ── RIGHT — Evidence Rail ─────────────────────────── */}
          <div className="origin-rail">

            <div className="origin-metric">
              <div className="origin-metric-val">5</div>
              <div className="origin-metric-lbl">Ventures · Ages 12–17</div>
              <div className="origin-metric-note">Software services, cold-call automation, digital marketing, e-commerce, automation tooling. Five distinct failure modes.</div>
            </div>

            <div className="origin-metric">
              <div className="origin-metric-val">$10K</div>
              <div className="origin-metric-lbl">First Exit · Age 15</div>
              <div className="origin-metric-note">Stock market prediction system. Proceeds funded the RTX 3090 used for all 383 ORMAS experiments.</div>
            </div>

            <div className="origin-metric">
              <div className="origin-metric-val">1</div>
              <div className="origin-metric-lbl">Convergent Finding</div>
              <div className="origin-metric-note">The bottleneck is never individual capability. It is always coordination. Every venture confirmed this independently.</div>
            </div>

            <div className="origin-finding-block">
              <div className="origin-finding-header">From Problem → Architecture</div>
              {[
                { from: 'Cannot distribute at scale', to: 'OXIMO: agents that self-hire specialists' },
                { from: 'Agents break at closing', to: 'OXIMO: memory-persistent Expert agents' },
                { from: 'Production data is adversarial', to: 'ORMAS: health-gated self-correction' },
                { from: 'No structural stability proof', to: 'ISS convergence theorem' },
              ].map((r, i) => (
                <div key={i} className="origin-finding-row">
                  <div className="origin-finding-dot" />
                  <div className="origin-finding-text">
                    <strong>{r.from}</strong> → {r.to}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
      </div>
    </div>
  );
}
