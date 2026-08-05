export default function CVWhoIAm() {
  const systems = [
    {
      tag: 'Research · AAAI 2027',
      name: 'ORMAS',
      claim: 'The first neural network with a mathematical proof it can watch itself and recover.',
      body: 'When I zeroed all convolutional layers mid-training, every standard baseline collapsed permanently to chance. ORMAS detected the damage, executed 85 targeted corrections, and recovered to 80.3% — a 70.3 percentage-point gap where the standard architecture had zero recourse.',
      stats: [['383', 'Experiments'], ['80.3%', 'Recovery'], ['+70.3pp', 'Gap vs. Baseline'], ['✓', 'Convergence Proof']],
    },
    {
      tag: 'Engineering · Production',
      name: 'OXIMO',
      claim: 'A cognitive OS where agents hire other agents, remember across sessions, and operate like a company.',
      body: 'Rebuilt from a 106,000-line monolith. 72% line reduction. All 12 critical algorithms intact. 47 feature flags. 17 implementation phases. 2,011 tests. Zero failures. Not a cleanup — a proof the architecture was sound enough to survive complete reconstruction.',
      stats: [['40,933', 'Lines of Code'], ['2,011', 'Tests · 0 Fails'], ['11', 'Mini-Repos'], ['72%', 'Reduction']],
    },
    {
      tag: 'Private Equity · AI Industry Transformation · UK Registered',
      name: 'Black Bloxie LTD',
      claim: 'A private equity company. Every employee is an AI agent.',
      body: 'The thesis: AI should build, operate, and sell — without human labor in the loop. Black Bloxie holds the equity. OXIMO is the operating system. The AI does the work. Vertical 1 (e-commerce) ran as a very early-stage controlled ablation study: inject OXIMO, measure revenue; strip it, revenue drops 91%; re-inject, recovers 1,300%. We achieved four-figure revenue with fully autonomous Zero-CAC unit economics, zero ad spend, and zero human sales effort. We cannot go full scale yet due to AI governance and safety issues, so this is just a tiny fraction of what the system can do. Vertical 2, 3, and 4 (law, software, medical research) are currently running.',
      stats: [['−91%', 'On Removal'], ['+1,300%', 'On Recovery'], ['500+', 'Early Stage Customers'], ['Four-Figure', 'Autonomous Zero-CAC Revenue']],
    },
  ];

  return (
    <div className="row mb--50" id="who-i-am">
      <style>{`
        .who-sys-card {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 10px;
          padding: 32px;
          margin-bottom: 20px;
          transition: border-color 0.3s;
        }
        .who-sys-card:hover { border-color: rgba(255,255,255,0.12); }
        .who-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #878e99;
          margin-bottom: 10px;
        }
        .who-sys-name {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 6px;
          letter-spacing: -0.5px;
        }
        .who-claim {
          font-size: 16px;
          font-weight: 600;
          color: #c4cfde;
          margin: 0 0 14px;
          line-height: 1.5;
        }
        .who-body {
          font-size: 15px;
          line-height: 1.75;
          color: #878e99;
          margin: 0 0 24px;
        }
        .who-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .who-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid #2a2d32;
          border-radius: 6px;
          padding: 10px 16px;
          text-align: center;
          min-width: 80px;
        }
        .who-stat-val {
          font-size: 18px;
          font-weight: 800;
          color: #c4cfde;
          display: block;
          line-height: 1.2;
        }
        .who-stat-lbl {
          font-size: 11px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          display: block;
          margin-top: 3px;
        }
        .who-audit-row {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 8px 14px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 13px;
        }
        .who-audit-row:last-child { border-bottom: none; }
        .who-audit-key { color: #c4cfde; font-weight: 600; flex-shrink: 0; }
        .who-audit-val { color: #878e99; }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: "#878e99", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Who I Am</span>
        <h2 className="title fs-1" style={{ fontWeight: "800", color: "#fff", marginBottom: "6px" }}>Rokib Al Dhin Raadh</h2>
        <p style={{ fontSize: "17px", color: "#878e99", marginBottom: "10px" }}>
          18 · Dhaka, Bangladesh · Independent AI Researcher & Founder
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#c4cfde", fontWeight: "600", borderLeft: "2px solid #2a2d32", paddingLeft: "20px", marginBottom: "50px", maxWidth: "700px" }}>
          Neural networks fail opaquely. I built an architecture that changes that — with proof.
        </p>

        <div className="content">
          {systems.map((s, i) => (
            <div key={i} className="who-sys-card">
              <div className="who-tag">{s.tag}</div>
              <h3 className="who-sys-name">{s.name}</h3>
              <p className="who-claim">{s.claim}</p>
              <p className="who-body">{s.body}</p>
              <div className="who-stats">
                {s.stats.map(([val, lbl], j) => (
                  <div key={j} className="who-stat">
                    <span className="who-stat-val">{val}</span>
                    <span className="who-stat-lbl">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}


        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.05)" }} /></div>
    </div>
  );
}
