export default function CVWhoIAm() {
  const systems = [
    {
      tag: 'Research · AAAI 2027',
      name: 'ORMAS',
      claim: 'The first self-correcting neural architecture carrying a formal local stability characterization. Global convergence is still open — the preprint says so on its own first page.',
      body: 'I killed all three convolutional layers at epoch 100, on a fully converged network, mid-training. Every standard baseline flatlined at 10% — chance — and stayed dead across all three seeds, with zero variance. ORMAS diagnosed its own damage, executed 85 targeted corrections, and climbed back to 80.3%. Same parameter budget, same compute, same data. A 70.3-point gap in a scenario where the standard architecture has no recourse at all.',
      stats: [['383', 'Experiments'], ['80.3%', 'Recovery'], ['+70.3pp', 'Gap vs. Baseline'], ['✓', 'Stability Characterized']],
    },
    {
      tag: 'Engineering · Production',
      name: 'OXIMO',
      claim: 'An operating system for AI agents that hire other agents, carry memory between sessions, and run an organization with nobody in the loop.',
      body: 'Rebuilt from a 106,000-line monolith down to 40,933 — 72% smaller, all 12 critical algorithms ported verbatim, 2,011 tests still green. The rebuild was not housekeeping. It was the test of whether the architecture underneath could survive being taken apart to the studs and put back together. It did.',
      stats: [['40,933', 'Lines of Code'], ['2,011', 'Tests · 0 Fails'], ['11', 'Mini-Repos'], ['72%', 'Reduction']],
    },
    {
      tag: 'Architecture Validation · 12-Month Controlled Ablation Study',
      name: 'Black Bloxie LTD',
      claim: 'A company registered at UK Companies House that exists to be an experiment. Every operational role inside it is held by an AI agent. The output ceiling is one I set, not one the architecture hit.',
      body: 'A benchmark cannot tell you whether a system survives contact with real customers, real suppliers, and real regulators. So I built somewhere it could fail in public, and ran a lesion study on my own company: deploy, measure, remove, measure, re-inject, measure. Removal collapsed commercial output 91% — simultaneously across every channel, which is precisely what rules out the market as the explanation. Re-injection recovered 1,300%. A Phase 4 event then closed a $4,386 order autonomously at $0.00 acquisition cost, which settles the question of whether this only works on commodity volume. Everything above that line was left on the table on purpose: no legal framework yet assigns commercial liability to an autonomous agent, so I held the study at research grade rather than find out where the boundary is with a live company.',
      stats: [['−91%', 'On Removal'], ['+1,300%', 'On Re-Injection'], ['$4,386', 'Largest Auto Order'], ['12 mo.', 'Study Duration']],
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
          color: #9aa4b0;
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
          color: #9aa4b0;
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
          color: #6b7683;
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
        .who-audit-val { color: #9aa4b0; }

        .who-router {
          border: 1px solid #2a2d32;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 48px;
        }
        .who-router-header {
          padding: 9px 20px;
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b7683;
        }
        .who-router-row {
          display: grid;
          grid-template-columns: 180px 1fr auto;
          align-items: center;
          padding: 13px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          gap: 16px;
          transition: background 0.2s;
        }
        .who-router-row:last-child { border-bottom: none; }
        .who-router-row:hover { background: rgba(255,255,255,0.02); }
        .who-router-audience {
          font-size: 12px;
          font-weight: 700;
          color: #c4cfde;
          letter-spacing: 0.3px;
        }
        .who-router-desc {
          font-size: 13px;
          color: #9aa4b0;
          line-height: 1.5;
        }
        .who-router-link {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #6b7683;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .who-router-link:hover { color: #c4cfde; }
        @media (max-width: 680px) {
          .who-router-row { grid-template-columns: 1fr; gap: 8px; }
          .who-router-link { display: inline-block; margin-top: 4px; padding-bottom: 2px; border-bottom: 1px solid rgba(107,118,131,0.3); align-self: start; }
        }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: "#9aa4b0", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Who I Am</span>
        <h2 className="title fs-1" style={{ fontWeight: "800", color: "#fff", marginBottom: "6px" }}>Rokib Al Dhin Raadh</h2>
        <p style={{ fontSize: "19px", fontWeight: 600, color: "#c4cfde", marginBottom: "10px", lineHeight: 1.6 }}>
          <strong style={{ fontWeight: 800, color: "#fff" }}>18 years old</strong>
          <span style={{ color: "#6b7683", margin: "0 9px" }}>·</span>
          Dhaka, Bangladesh
          <span style={{ color: "#6b7683", margin: "0 9px" }}>·</span>
          Independent AI Researcher &amp; Founder
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#c4cfde", fontWeight: "600", borderLeft: "2px solid #2a2d32", paddingLeft: "20px", marginBottom: "32px", maxWidth: "700px" }}>
          Neural networks fail silently. I built one that reports its own damage, repairs itself mid-training, and carries a formal characterization of when that repair stays stable.
        </p>

        {/* ── Audience Router ─────────────────────────────────────── */}
        <div className="who-router">
          <div className="who-router-header">Where to start — depending on why you're here</div>
          {[
            {
              audience: 'ML Researcher / Reviewer',
              desc: 'The stability result, all 383 runs, the telemetry design, and every table — including the ones where the result goes against me.',
              href: '#research',
              label: 'Research →',
            },
            {
              audience: 'VC / Angel Investor',
              desc: 'Why this licenses to institutions instead of selling as SaaS, what the incumbents structurally cannot do, and the causal evidence behind both.',
              href: '#oxido',
              label: 'OXIDO →',
            },
            {
              audience: 'Engineer / Developer',
              desc: 'Architecture internals, 40,933 lines, 2,011 tests. One script reproduces every experiment in under an hour.',
              href: '#engineering',
              label: 'Engineering →',
            },
            {
              audience: 'Enterprise Operator',
              desc: 'Eleven months of deployment data, the ablation method behind it, and two full reports to download.',
              href: '#deployment',
              label: 'Deployment →',
            },
          ].map((r, i) => (
            <div key={i} className="who-router-row">
              <div className="who-router-audience">{r.audience}</div>
              <div className="who-router-desc">{r.desc}</div>
              <a className="who-router-link" href={r.href}>{r.label}</a>
            </div>
          ))}
        </div>

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
