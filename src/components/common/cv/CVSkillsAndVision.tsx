export default function CVSkillsAndVision() {
  const skillGroups = [
    {
      title: 'Machine Learning',
      tags: ['PyTorch', 'CNN / ResNet / DAG', 'Transformers', 'PCGrad Gradient Surgery', 'ISS Convergence Theory', 'Noise-Robust Training'],
    },
    {
      title: 'Systems Engineering',
      tags: ['Multi-Agent Orchestration', 'Constructor Injection', 'Atomic Rollback', '3-Tier Memory', 'Adversarial Filtering', 'Graph-of-Thoughts Planning'],
    },
    {
      title: 'Infrastructure & Web',
      tags: ['Docker', 'FastAPI', 'Prometheus', 'SSE Streaming', 'HMAC Webhooks', 'CI/CD', 'Pydantic', 'SQLAlchemy Async', 'ChromaDB', 'React / TS / Web3'],
    },
  ];

  const metrics = [
    { value: '18',    label: 'Years Old' },
    { value: '78K+',  label: 'Lines of Code Written' },
    { value: '309',   label: 'Experiments Run' },
    { value: '100%',  label: 'IP Ownership' },
  ];

  const detailGroups = [
    {
      title: 'The Foundation',
      rows: [
        { label: 'Institutional Affiliation', value: 'None' },
        { label: 'External Funding',           value: '$0' },
        { label: 'Work Ethic',                 value: '2+ years of 14–16 hr daily work' },
      ],
    },
    {
      title: 'ORMAS Project',
      rows: [
        { label: 'Codebase',      value: '10,594 lines · 61 files · PyTorch' },
        { label: 'Hardware Used', value: 'Single RTX 4090' },
      ],
    },
    {
      title: 'OXIMO OS',
      rows: [
        { label: 'Production Code', value: '40,933 lines · 11 mini-repos' },
        { label: 'Test Suite',      value: '27,228 lines · 2,011 passing · 0 failures' },
      ],
    },
    {
      title: 'Black Bloxie LTD',
      rows: [
        { label: 'Revenue (Zero Ad Spend)', value: '£1,163+' },
        { label: 'Ablation Result',         value: '−91% revenue on removal · +1,300% on re-injection' },
      ],
    },
  ];

  const visionSteps = [
    { n: '1', title: 'Failed Startups (Age 12–15)',  note: '"The pipeline is the problem."' },
    { n: '2', title: 'OXIMO (Age 16–17)',            note: '"Build the autonomous pipeline."' },
    { n: '3', title: 'Black Bloxie LTD (Age 17)',   note: '"Test it in production."' },
    { n: '4', title: 'ORMAS (Age 17–18)',            note: '"Fix the learning problem."' },
    { n: '5', title: 'Cherry (Next)',                note: '"Build the self-correcting LLM."' },
    { n: '★', title: 'OXIDO (Endgame)',              note: '"Deploy everywhere."' },
  ];

  return (
    <div className="row mb--50" id="skills-vision">
      <style>{`
        .skills-group-block {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 24px 28px;
          margin-bottom: 16px;
        }
        .skills-group-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #878e99;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag {
          background: rgba(255,255,255,0.04);
          color: #c4cfde;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid #2a2d32;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        @media (max-width: 992px) { .metrics-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 576px)  { .metrics-grid { grid-template-columns: 1fr; } }
        .metric-card {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 28px 20px;
          text-align: center;
        }
        .metric-value {
          font-size: 36px;
          font-weight: 800;
          color: #c4cfde;
          margin-bottom: 6px;
        }
        .metric-label {
          font-size: 11px;
          color: #878e99;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
        .detail-block {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        .detail-group-header {
          padding: 10px 20px;
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32;
          font-size: 11px;
          color: #878e99;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 13px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          gap: 20px;
        }
        .detail-row:last-child { border-bottom: none; }
        .detail-label { color: #c4cfde; font-weight: 500; font-size: 14px; }
        .detail-value { color: #878e99; font-size: 14px; text-align: right; }
        .vision-list { list-style: none; padding: 0; margin: 0; }
        .vision-item {
          display: flex;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          align-items: flex-start;
        }
        .vision-item:last-child { border-bottom: none; }
        .vision-num {
          min-width: 28px;
          height: 28px;
          background: #2a2d32;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #878e99;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .vision-title { color: #c4cfde; font-weight: 600; font-size: 15px; margin-bottom: 3px; }
        .vision-note  { color: #878e99; font-size: 14px; font-style: italic; }
        .needs-table { width: 100%; border-collapse: collapse; }
        .needs-table th { padding: 12px 20px; text-align: left; color: #c4cfde; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .needs-table td { padding: 14px 20px; font-size: 14px; color: #878e99; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: top; }
        .needs-table td:first-child { color: #c4cfde; font-weight: 600; white-space: nowrap; }
        .needs-table tr:last-child td { border-bottom: none; }
        .section-header {
          font-size: 22px;
          font-weight: 700;
          color: #c4cfde;
          margin-top: 50px;
          margin-bottom: 24px;
        }
        .lang-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 576px) { .lang-grid { grid-template-columns: 1fr; } }
      `}</style>
      
      <div className="col-12">
        <span className="subtitle" style={{ color: "#ff014f", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Skills, Vision &amp; Metrics</span>
        <h2 className="title mb--40" style={{ fontSize: "40px", fontWeight: "800", color: "#c4cfde" }}>Technical Skills</h2>
        
        <div className="content">
          {/* Skill Groups */}
          {skillGroups.map((g, i) => (
            <div key={i} className="skills-group-block">
              <div className="skills-group-label">{g.title}</div>
              <div className="skill-tags">
                {g.tags.map((t, j) => <span key={j} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}

          {/* Languages & Spoken */}
          <div className="lang-grid" style={{ marginBottom: '16px' }}>
            <div className="skills-group-block" style={{ marginBottom: 0 }}>
              <div className="skills-group-label">Programming Languages</div>
              <div className="skill-tags">
                <span className="skill-tag">Python (Advanced / Production)</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">LaTeX</span>
              </div>
            </div>
            <div className="skills-group-block" style={{ marginBottom: 0 }}>
              <div className="skills-group-label">Spoken Languages</div>
              <div className="skill-tags">
                <span className="skill-tag">English (Fluent)</span>
                <span className="skill-tag">Bengali (Native)</span>
              </div>
            </div>
          </div>

          {/* By The Numbers */}
          <h4 className="section-header">By The Numbers</h4>
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="metric-card">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Detail Rows */}
          {detailGroups.map((g, i) => (
            <div key={i} className="detail-block">
              <div className="detail-group-header">{g.title}</div>
              {g.rows.map((r, j) => (
                <div key={j} className="detail-row">
                  <div className="detail-label">{r.label}</div>
                  <div className="detail-value">{r.value}</div>
                </div>
              ))}
            </div>
          ))}

          {/* Work Ethic */}
          <h4 className="section-header">The Work Ethic — Documented</h4>
          <div style={{ padding: "28px 32px", background: "#191b1e", borderRadius: "8px", border: "1px solid #2a2d32", borderLeft: "3px solid #2a2d32" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#c4cfde", marginBottom: "16px" }}>
              I maintained a documented <strong>14–16 hour daily work schedule</strong> for over 2 years. Continuously. To prove this was real, I applied for a Guinness World Record for sustained productivity. My evidence: continuous unlisted YouTube livestreams of every working day.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#c4cfde", marginBottom: "16px" }}>
              Guinness declined the application on health grounds. The point was never the certificate. The point was the documentation. When someone wonders <em>"How did an 18-year-old in Bangladesh build all of this?"</em> — the livestreams are the answer. Not luck. Not privilege. Hours.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#878e99", margin: 0 }}>
              Coding is my passion. It has been my passion since I was a child. I am not forcing myself to sit at a desk for 16 hours. I am doing the thing I love for 16 hours. The difference matters.
            </p>
          </div>

          {/* How I Fund Everything */}
          <h4 className="section-header">How I Fund Everything</h4>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
            <table className="needs-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Item</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RTX 4090</td>
                  <td>Purchased with savings from stock market algorithm sold at 15 (~$10,000 USD / ~1M BDT)</td>
                </tr>
                <tr>
                  <td>Black Bloxie</td>
                  <td>Zero capital investment. Runs on API calls costing dollars. Revenue (£1,163+) exceeds operational cost.</td>
                </tr>
                <tr>
                  <td>Research Costs</td>
                  <td>LLM provider API bills (DeepSeek, Gemini, OpenAI) — dollars per month, not thousands.</td>
                </tr>
                <tr>
                  <td>Personal Expenses</td>
                  <td>Minimal. Living at home in Dhaka. Cost of living is a fraction of Western researchers.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#878e99", marginBottom: "30px" }}>
            The proof-of-concept is self-funded. The scaling requires institutional support — Transformer-scale experiments, frontier model access, conference travel, and Cherry training compute.
          </p>

          {/* What Makes This Different */}
          <h4 className="section-header">What Makes This Different</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
            {[
              { label: '100% IP Ownership', desc: 'No co-founders, no university claims, no employer IP agreements. Every line of code, every line of math.' },
              { label: 'Zero Institutional Support', desc: 'Zero external compute grants. Every experiment run on a single personal RTX 4090. Every business registered through personal savings.' },
              { label: 'Cross-Disciplinary Self-Education', desc: 'Aerodynamics (ISS theory), financial markets (stock algorithms), sales psychology (cold-calling), company law (UK formation), control theory (convergence proofs).' },
              { label: 'Documented Journey', desc: 'Two years ago, ORMAS and OXIMO sounded delusional. The gap between vision and credibility has closed — because the code exists, the experiments are run, the company is registered.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '14px 20px', background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#c4cfde', fontWeight: 600, fontSize: '14px', minWidth: '200px', flexShrink: 0 }}>{item.label}</span>
                <span style={{ color: '#878e99', fontSize: '14px' }}>{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Vision Pipeline */}
          <h4 className="section-header">The Vision — Where Everything Connects</h4>
          <div style={{ background: "#191b1e", border: "1px solid #2a2d32", borderRadius: "8px", overflow: "hidden", marginBottom: "40px" }}>
            <ul className="vision-list" style={{ padding: "8px 24px" }}>
              {visionSteps.map((s, i) => (
                <li key={i} className="vision-item">
                  <div className="vision-num">{s.n}</div>
                  <div>
                    <div className="vision-title">{s.title}</div>
                    <div className="vision-note">{s.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Need */}
          <h4 className="section-header">What I Need</h4>
          <div style={{ background: "#191b1e", border: "1px solid #2a2d32", borderRadius: "8px", overflow: "hidden", marginBottom: "40px" }}>
            <table className="needs-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Resource</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fellowship / Grant</td>
                  <td>Fund Transformer-scale experiments, frontier model access, and Cherry training compute.</td>
                </tr>
                <tr>
                  <td>Institutional Mentorship</td>
                  <td>Refine this work to publication standards (ICLR 2027, ICSE SEIP).</td>
                </tr>
                <tr>
                  <td>Relocation</td>
                  <td>To London (UK) or New York (US).</td>
                </tr>
                <tr>
                  <td>PhD Admission</td>
                  <td>MIT is the dream. With institutional support — mentorship, compute access, a community of researchers — I can scale what I've built.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
