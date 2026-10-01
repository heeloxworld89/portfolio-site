import CVSection from './CVSection';
export default function CVEducation() {
  return (
    <CVSection
      id="education"
      phase="about"
      eyebrow="Education"
      title="Self-taught across machine learning, systems and theory."
      lead={
        <>
          At <span className="age">18</span>, Raadh is completing his final year of secondary school and has learned his field independently,
          without a university or advisor. He studies what each problem requires, and the work has taken him
          into control theory, market microstructure and company law alongside machine learning.
        </>
      }
    >
      <style>{`
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr; }
        }
        .edu-card {
          background: var(--pf-surface);
          border-radius: 10px;
          padding: 30px;
          border: 1px solid var(--pf-border);
          position: relative;
          overflow: hidden;
          transition: 0.3s ease;
        }
        .edu-card:hover {
          background: var(--pf-surface-2);
          border-color: rgba(var(--pf-ink-rgb), 0.1);
        }

        .edu-title {
          font-size: 20px;
          color: var(--pf-ink);
          font-weight: 700;
          margin-bottom: 15px;
        }
        .edu-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--pf-ink-2);
          margin: 0;
        }
        .course-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .course-list li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 20px;
          font-size: 15px;
          color: var(--pf-ink-2);
          line-height: 1.6;
        }
        .course-list li::before {
          content: "–";
          position: absolute;
          left: 0;
          top: 2px;
          color: var(--pf-ink-3);
          font-size: 14px;
        }
        .course-list strong {
          color: var(--pf-ink);
          font-weight: 600;
        }
        .truth-box {
          background: var(--pf-surface);
          border-left: 2px solid var(--pf-border);
          padding: 35px;
          border-radius: 8px;
        }
        .truth-box p {
          font-size: 16.5px;
          line-height: 1.8;
          color: var(--pf-ink);
          margin-bottom: 20px;
        }
        .truth-box p:last-child {
          margin-bottom: 0;
        }
        .highlight-text {
          color: var(--pf-ink);
          font-weight: 600;
        }
        .fiap-note {
          margin-top: 30px;
          background: rgba(var(--pf-accent-rgb), 0.045);
          border: 1px solid rgba(var(--pf-accent-rgb), 0.28);
          border-radius: 10px;
          padding: 30px 32px;
        }
        .fiap-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .fiap-logo-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 16px;
          border-radius: 6px;
          background: rgba(var(--pf-ink-rgb), 0.05);
          border: 1px solid var(--pf-border);
        }
        .fiap-logo-chip img { display: block; height: 16px; width: auto; }
        .fiap-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pf-ink-3);
        }
      `}</style>
      <div>
        
        <div style={{ display: "inline-block", padding: "10px 20px", background: "rgba(var(--pf-ink-rgb), 0.05)", borderRadius: "30px", marginBottom: "40px", border: "1px solid rgba(var(--pf-ink-rgb), 0.1)" }}>
          <span style={{ color: "var(--pf-ink)", fontWeight: "600", fontSize: "16px" }}>12th Grade (Final Year)</span>
        </div>
        
        <div className="content">
          <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--pf-ink-2)", marginBottom: "28px", maxWidth: "700px" }}>
            Self-taught in machine learning, systems engineering and theoretical computer science, with a focus on underlying mechanisms. The work has also required expertise well beyond software:
          </p>
          
          <div className="edu-grid">
            <div className="edu-card">
              <h5 className="edu-title">Control theory, for the stability proof</h5>
              <p className="edu-desc">The ORMAS stability characterization rests on control theory, which required a working intuition for why a perturbed system settles, or fails to.</p>
            </div>

            <div className="edu-card">
              <h5 className="edu-title">The limits of trust in automation</h5>
              <p className="edu-desc">Automating European cold calls showed precisely where human trust in an autonomous agent ends: at the transaction. That boundary became a design constraint in his later systems.</p>
            </div>

            <div className="edu-card">
              <h5 className="edu-title">Market microstructure, at fifteen</h5>
              <p className="edu-desc">The stock-prediction system he built and sold at 15 had to account for institutional order flow, which cannot be inferred from price data alone.</p>
            </div>

            <div className="edu-card">
              <h5 className="edu-title">UK company law</h5>
              <p className="edu-desc">Incorporating Black Bloxie LTD at UK Companies House from Bangladesh, without a lawyer or agent, meant mastering the filing regime, anti-money-laundering requirements and director obligations.</p>
            </div>
          </div>

          {/* MIT Open Learning: the strongest external marks on his education, stated exactly. */}
          <div className="mit-card">
            <p className="mit-k">MIT Open Learning · MITx</p>
            <h4 className="mit-h">Seven MIT programmes. <em>Before finishing school.</em></h4>
            <p className="mit-lede">
              While still in his final year of secondary school, Raadh completed seven programmes from MIT Open Learning,
              covering foundation models, AI in medicine, energy and transport, and AI entrepreneurship: the same
              regulated sectors OXIEDO now sells into. After an admissions call about his work, he was offered a 40%
              scholarship on a further MIT programme, which he could not take up for financial and logistical
              reasons.
            </p>
            <div className="mit-stats">
              <div><b>7</b><span>MIT programmes completed</span></div>
              <div><b>40%</b><span>Scholarship offered on a further MIT programme</span></div>
              <div><b>Sponsored</b><span>Into MIT Open Learning&apos;s Universal AI programme by FIAP</span></div>
            </div>
          </div>

          <div className="mit-courses">
            {[
              ["Universal AI Foundational Models", "https://mitxonline.mit.edu/records/shared/776b490f-67be-46a2-8ddc-86d3b86bb9c0/", "Foundation models"],
              ["AI & Precision Medicine", "https://mitxonline.mit.edu/records/shared/cc81d799-e745-4f8e-8837-a75d4e1bfd49/", "Medicine"],
              ["Holistic AI in Medicine", "https://mitxonline.mit.edu/records/shared/082917c3-0327-4b28-8049-10e588692dc0/", "Medicine"],
              ["AI and Sustainability: Energy", "https://mitxonline.mit.edu/records/shared/3d1aa3ad-4f07-4f64-aaf8-7dbc720913db/", "Energy"],
              ["AI and Sustainability: Transportation", "https://mitxonline.mit.edu/records/shared/ed8f94b2-2fb0-43fb-b5ab-9052d6e777fb/", "Transport"],
              ["AI for Transportation: From Concepts to Implementation", "https://mitxonline.mit.edu/records/shared/31cbd749-a3ca-488e-80ad-10ddb771a12f/", "Transport"],
              ["AI & Entrepreneurship", "https://mitxonline.mit.edu/records/shared/c4c84c9c-1c8e-469f-a050-2269b1fe0a3c/", "Venture"],
            ].map(([t, href, k]) => (
              <a key={t} className="mit-course" href={href} target="_blank" rel="noreferrer">
                <span className="mit-course-k">MITx · {k}</span>
                <span className="mit-course-t">{t}</span>
                <span className="mit-course-go">View record ↗</span>
              </a>
            ))}
          </div>
          <p className="mit-note">
            MITx Online sometimes fails to load shared records; full records, certificates and grade reports are
            available on request.
          </p>

          <div className="mit-more">
            <div>
              <span className="mit-course-k">DeepLearning.AI</span>
              <p>
                <a href="https://coursera.org/verify/specialization/R7SYBBCXR1OY" target="_blank" rel="noreferrer">Andrew Ng&apos;s Deep Learning Specialization</a>,
                the five-course programme from the co-founder of Google Brain and Coursera.
              </p>
            </div>
            <div>
              <span className="mit-course-k">20+ further certifications</span>
              <p>
                Machine learning, systems architecture and applied AI from <b>Google</b>, <b>UC Davis</b> and the{" "}
                <b>University of Michigan</b>. Verifiable on request from{" "}
                <a href="mailto:raadh@oxiedo.com">raadh@oxiedo.com</a>.
              </p>
            </div>
            <div>
              <span className="mit-course-k">FIAP · São Paulo</span>
              <p>
                One of Brazil&apos;s leading technology schools made him a member in early 2026 and sponsored his place in
                MIT Open Learning&apos;s Universal AI programme.
              </p>
            </div>
          </div>
          <h4 className="fs-4" style={{ fontWeight: "700", color: "var(--pf-ink)", marginBottom: "20px" }}>Research over grades</h4>

          {/* Big statement */}
          <div style={{ background: 'var(--pf-surface)', border: '1px solid var(--pf-border)', borderRadius: '10px', padding: '28px 32px', marginBottom: '16px' }}>
            <p style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--pf-ink)', marginBottom: '12px', lineHeight: 1.4 }}>
              A deliberate choice to prioritise research.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--pf-ink-2)', margin: 0 }}>
              Work on the ISS characterization and OXIMO took priority over exam preparation. The results are recorded not in a transcript but in 383 experiments, 40,933 lines of production code, a public preprint and a peer-reviewed DeepMath 2026 acceptance.
            </p>
          </div>

          {/* Evidence stat strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '40px' }}>
            {[
              { val: '383', lbl: 'GPU Experiments' },
              { val: '40,933', lbl: 'Lines of Code' },
              { val: 'DeepMath 2026', lbl: 'Accepted · Poster' },
              { val: 'UK Ltd', lbl: 'Registered Company' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--pf-surface)', border: '1px solid var(--pf-border)', borderRadius: '8px', padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--pf-ink)', lineHeight: 1.1, marginBottom: '4px' }}>{s.val}</div>
                <div style={{ fontSize: '11px', color: 'var(--pf-ink-3)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </CVSection>
  );
}
