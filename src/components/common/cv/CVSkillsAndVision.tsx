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
        { label: 'Study Duration',       value: '12 months · Substrate 1 complete' },
        { label: 'Ablation Signal',      value: '−91% on removal · +1,300% on re-injection' },
        { label: 'Single Test Order (Not Revenue)', value: '$4,386 · $0.00 acquisition cost' },
        { label: 'Infrastructure Cost',  value: '99% reduction via specialized agent cascade' },
        { label: 'Scale Ceiling',        value: 'Self-imposed — regulatory, not architectural' },
      ],
    },
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
          color: #9aa4b0;
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
          color: #9aa4b0;
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
        .detail-value { color: #9aa4b0; font-size: 14px; text-align: right; }
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
          color: #9aa4b0;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .vision-title { color: #c4cfde; font-weight: 600; font-size: 15px; margin-bottom: 3px; }
        .vision-note  { color: #9aa4b0; font-size: 14px; font-style: italic; }
        .needs-table { width: 100%; border-collapse: collapse; }
        .needs-table th { padding: 12px 20px; text-align: left; color: #c4cfde; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .needs-table td { padding: 14px 20px; font-size: 14px; color: #9aa4b0; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: top; }
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
        <span className="subtitle" style={{ color: "#9aa4b0", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Skills, Vision &amp; Metrics</span>
        <h2 className="title mb--40 fs-1" style={{ fontWeight: "800", color: "#c4cfde" }}>Everything I Had to Learn to Build This</h2>
        
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

          {/* Reference Tables */}
          <h4 className="section-header">The Numbers, By Project</h4>
          <p style={{ fontSize: '15px', color: '#9aa4b0', marginBottom: '24px', maxWidth: '640px', lineHeight: 1.7 }}>
            Everything above is the skill set. This is where it landed — the exact scope of each of the
            three systems, in one place for reference rather than repeated as headline stats.
          </p>

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

          {/* ── OXIDO: The Convergence ─────────────────────────────── */}
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderLeft: '2px solid #c4cfde', borderRadius: '0 8px 8px 0', padding: '24px 28px', marginBottom: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#838d99', marginBottom: '10px' }}>OXIDO — The Convergence</div>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#c4cfde', margin: '0 0 10px', lineHeight: 1.6 }}>
              OXIMO the operating system, ORMAS the immune system, Cherry the self-correcting model: a multi-agent stack that depends on no intelligence but its own.
            </p>
            <p style={{ fontSize: '14px', color: '#9aa4b0', margin: 0, lineHeight: 1.75 }}>
              None of the three was designed as part of a grand plan. Each exists because the one before it hit a wall I could not engineer around. Together they turn out to be self-sustaining. The architecture is validated; what is left is scale.
            </p>
          </div>

          {/* Bridge */}
          <p style={{ fontSize: '14px', color: '#838d99', fontStyle: 'italic', marginBottom: '32px', paddingLeft: '4px' }}>
            Two years ago I would have said this out loud and sounded delusional. The distance closed the only way it could: the code runs, the experiments are finished, and the architecture is published where anyone can check it.
          </p>

          {/* What's actually needed next — three concrete, unordered requirements */}
          <h4 className="section-header">Three Things Still Missing</h4>
          <p style={{ fontSize: '15px', color: '#9aa4b0', marginBottom: '20px', maxWidth: '640px', lineHeight: 1.7 }}>
            The <a href="#oxido" style={{ color: '#c4cfde', textDecoration: 'underline' }}>OXIDO roadmap</a> above is what happens next, in order. This is different: not a phased plan, but the three external resources that phase depends on — they run in parallel, and none of them depends on the others.
          </p>
          <div style={{ background: "#191b1e", border: "1px solid #2a2d32", borderRadius: "8px", overflowX: "auto", marginBottom: "40px" }}>
            <table className="needs-table">
               <thead>
                <tr>
                  <th style={{ width: '35%' }}>What's Missing</th>
                  <th>Why It's the Blocker</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Multi-node compute</td>
                  <td>The ORMAS protocol carries over to Transformers unchanged — the mathematics is architecture-agnostic. What's missing isn't a research result, it's H100/A100 access at multi-node scale.</td>
                </tr>
                <tr>
                  <td>A reason to train Cherry</td>
                  <td>Pre-training a language model on the three-signal architecture from scratch means structural correction happens during pre-training instead of being bolted on afterward as RLHF. That's a compute-heavy bet I'm not going to make alone on a single GPU.</td>
                </tr>
                <tr>
                  <td>A control theorist</td>
                  <td>The ISS characterization needs someone qualified trying to break it before I submit it anywhere, not after.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
