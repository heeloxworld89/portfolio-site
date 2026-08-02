export default function CVSkillsAndVision() {
  const skillGroups = [
    {
      title: 'Machine Learning',
      tags: ['PyTorch', 'CNN / ResNet / DAG', 'Transformers', 'PCGrad Gradient Surgery', 'Convergence Theory', 'Noise-Robust Training'],
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
    { value: '383',     label: 'Controlled Experiments' },
    { value: '+70.3pp', label: 'ORMAS Recovery Gap' },
    { value: '99%',     label: 'API Cost Reduction' },
    { value: '1',       label: 'Formal Convergence Proof' },
  ];

  const detailGroups = [
    {
      title: 'Foundation',
      rows: [
        { label: 'Institutional Affiliation', value: 'None' },
        { label: 'External Funding',           value: '$0' },
        { label: 'IP Ownership',               value: '100%' },
      ],
    },
    {
      title: 'ORMAS Project',
      rows: [
        { label: 'Codebase',           value: '10,594 lines · 61 files · PyTorch' },
        { label: 'Hardware (Expts)',   value: 'Single RTX 3090' },
        { label: 'Hardware (Personal)', value: 'RTX 4090' },
      ],
    },
    {
      title: 'OXIMO OS',
      rows: [
        { label: 'Production Code', value: '40,933 lines · 11 mini-repos' },
        { label: 'Test Suite',      value: '2,011 passing · 0 failures' },
        { label: 'Refactor',        value: '72% reduction from 106K-line monolith' },
      ],
    },
    {
      title: 'Black Bloxie LTD',
      rows: [
        { label: 'Study Duration',       value: '1.5–2 years · Vertical 1 complete' },
        { label: 'Ablation Result',      value: '−91% on removal · +1,300% on re-injection' },
        { label: 'Infrastructure Cost',  value: '99% reduction via specialized agent cascade' },
      ],
    },
  ];

  const achievementSteps = [
    { n: '01', title: 'ORMAS — Self-Correcting Neural Architecture',
      note: 'First formal convergence proof for any self-correcting architecture. 383 experiments across 4 architectures. +70.3pp recovery gap where baselines permanently collapse.' },
    { n: '02', title: 'OXIMO — Cognitive Multi-Agent OS',
      note: '40,933 lines of production code. 2,011 tests, zero failures. Rebuilt from a 106,000-line monolith at 72% reduction. Agents that hire agents, with 3-tier persistent memory.' },
    { n: '03', title: 'Black Bloxie LTD — Private Equity AI Lab',
      note: '1.5–2 year controlled ablation study across e-commerce. −91% revenue on OXIMO removal, +1,300% on recovery. 500+ customers. $0 ad spend. Law, software, and medical verticals ongoing.' },
    { n: '04', title: 'OXIDO — The Convergence',
      note: 'OXIMO (cognitive OS) + ORMAS (immune system) + Cherry (self-correcting LLM) = an autonomous multi-agent system with no external intelligence dependency. The endgame.' },
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
          font-size: 24px;
          font-weight: 700;
          color: #c4cfde;
          margin-top: 50px;
          margin-bottom: 24px;
        }
        .lang-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (min-width: 768px) {
          .section-header { font-size: 28px; }
          .diff-label { min-width: 200px; width: auto; margin-bottom: 0; }
        }
        .diff-label {
          color: #c4cfde;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
          width: 100%;
          margin-bottom: 8px;
        }
      `}</style>
      
      <div className="col-12">
        <span className="subtitle" style={{ color: "#ff014f", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Skills, Vision &amp; Metrics</span>
        <h2 className="title mb--40 fs-1" style={{ fontWeight: "800", color: "#c4cfde" }}>The Technical Stack</h2>
        
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
          <h4 className="section-header">Portfolio Summary</h4>
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

          <h4 className="section-header">The Output Pipeline</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '22px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '5px' }}>14–16 hrs</div>
              <div style={{ fontSize: '11px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Daily Engineering Focus</div>
            </div>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '22px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '5px' }}>100%</div>
              <div style={{ fontSize: '11px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Sole IP Ownership</div>
            </div>
          </div>


          {/* How I Fund Everything */}
          <h4 className="section-header">Entirely Self-Funded</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '40px' }}>
            {[
              { item: 'RTX 3090', src: 'All 383 ORMAS experiments. Dedicated research hardware.' },
              { item: 'Personal RTX 4090', src: 'Day-to-day development machine. Funded from $10K stock algorithm sale at age 15.' },
              { item: 'Black Bloxie', src: 'Zero capital. API costs = dollars/month. Revenue exceeds cost.' },
              { item: 'Research', src: 'LLM API bills — DeepSeek, Gemini, OpenAI. Dollars, not thousands.' },

            ].map((r, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '18px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#c4cfde', marginBottom: '6px', letterSpacing: '0.5px' }}>{r.item}</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#878e99' }}>{r.src}</div>
              </div>
            ))}
          </div>

          {/* What Makes This Different */}
          <h4 className="section-header">What Makes This Different</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
            {[
              { label: '100% IP Ownership', desc: 'No co-founders. No university claims. No employer agreements. Every line of code and math is mine.' },
              { label: 'Zero Institutional Support', desc: 'Zero compute grants. Every experiment on a personal RTX 3090. Every company registered from personal savings.' },
              { label: 'Cross-Disciplinary', desc: 'Control theory → stability proofs. Financial markets → stock algorithms. Company law → UK registration. The research demanded breadth.' },
              { label: 'Documented', desc: 'Two years ago this sounded delusional. The gap closed — because the code runs, the experiments are done, the company generates revenue.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 16px', padding: '12px 18px', background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', alignItems: 'baseline' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#c4cfde', letterSpacing: '1px', textTransform: 'uppercase', flexShrink: 0 }}>{item.label}</span>
                <span style={{ color: '#878e99', fontSize: '14px' }}>{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Vision Pipeline */}
          <h4 className="section-header">The Work — What Has Been Built</h4>
          <div style={{ background: "#191b1e", border: "1px solid #2a2d32", borderRadius: "8px", overflow: "hidden", marginBottom: "40px" }}>
            <ul className="vision-list" style={{ padding: "8px 24px" }}>
              {achievementSteps.map((s, i) => (
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

          {/* Scaling Requirements */}
          <h4 className="section-header">Strategic Roadmap</h4>
          <div style={{ background: "#191b1e", border: "1px solid #2a2d32", borderRadius: "8px", overflowX: "auto", marginBottom: "40px" }}>
            <table className="needs-table">
               <thead>
                <tr>
                  <th style={{ width: '35%' }}>Phase</th>
                  <th>Execution Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Compute Scaling (Transformer Integration)</td>
                  <td>Migrate the validated ORMAS protocol from CNN/DAG architectures to Transformer-scale constraints. The mathematics are architecture-agnostic; execution requires access to multi-node H100/A100 clusters.</td>
                </tr>
                <tr>
                  <td>Project Cherry (Self-Correcting Foundation Model)</td>
                  <td>Pre-train an LLM using the three-signal loss architecture from scratch. This replaces post-hoc alignment (RLHF) with intrinsic, step-by-step structural correction during the pre-training phase.</td>
                </tr>
                <tr>
                  <td>Formal Verification &amp; Peer Review</td>
                  <td>Subject the Input-to-State Stability (ISS) convergence proofs to rigorous scrutiny by applied mathematicians and control theorists prior to open submission.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
