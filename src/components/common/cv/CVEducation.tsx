export default function CVEducation() {
  return (
    <div className="row mb--50" id="education">
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
          background: #191b1e;
          border-radius: 10px;
          padding: 30px;
          border: 1px solid #2a2d32;
          position: relative;
          overflow: hidden;
          transition: 0.3s ease;
        }
        .edu-card:hover {
          background: #1e2024;
          border-color: rgba(255,255,255,0.1);
        }

        .edu-title {
          font-size: 20px;
          color: #c4cfde;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .edu-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #9aa4b0;
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
          font-size: 16px;
          color: #9aa4b0;
          line-height: 1.6;
        }
        .course-list li::before {
          content: "–";
          position: absolute;
          left: 0;
          top: 2px;
          color: #4a5568;
          font-size: 14px;
        }
        .course-list strong {
          color: #fff;
          font-weight: 600;
        }
        .truth-box {
          background: #191b1e;
          border-left: 2px solid #2a2d32;
          padding: 35px;
          border-radius: 8px;
        }
        .truth-box p {
          font-size: 18px;
          line-height: 1.8;
          color: #c4cfde;
          margin-bottom: 20px;
        }
        .truth-box p:last-child {
          margin-bottom: 0;
        }
        .highlight-text {
          color: #fff;
          font-weight: 600;
        }
      `}</style>
      <div className="col-12">
        <span className="subtitle" style={{ color: "#9aa4b0", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Education</span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: "800", color: "#c4cfde" }}>Self-Directed. Cross-Disciplinary. Evidence-Based.</h2>
        
        <div style={{ display: "inline-block", padding: "10px 20px", background: "rgba(255,255,255,0.05)", borderRadius: "30px", marginBottom: "40px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ color: "#fff", fontWeight: "600", fontSize: "16px" }}>12th Grade (Final Year)</span>
        </div>
        
        <div className="content">
          <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#9aa4b0", marginBottom: "28px", maxWidth: "700px" }}>
            Self-taught in ML, systems engineering, and theoretical CS. I go after the mechanism rather than the surface, because the surface has never once been enough to finish the thing I was working on. Along the way the work dragged me into fields most programmers never have a reason to open:
          </p>
          
          <div className="edu-grid">
            <div className="edu-card">
              <h5 className="edu-title">Physics of Complex Systems</h5>
              <p className="edu-desc">The ORMAS stability characterization rests on control theory, and I could not write it while treating the mathematics as symbols on a page. I needed the physical intuition for why a perturbed system settles — or does not.</p>
            </div>

            <div className="edu-card">
              <h5 className="edu-title">Sales Psychology</h5>
              <p className="edu-desc">Automating European cold calls showed me exactly where human trust in an autonomous agent runs out. Understanding why it runs out at the transaction, and not before, became a design constraint rather than a curiosity.</p>
            </div>

            <div className="edu-card">
              <h5 className="edu-title">Financial Markets</h5>
              <p className="edu-desc">At 15 I was building stock algorithms that had to account for institutional flow. That is not something you can infer from price data alone — it required learning market micro-structure properly.</p>
            </div>

            <div className="edu-card">
              <h5 className="edu-title">Company Law &amp; AML</h5>
              <p className="edu-desc">Registering Black Bloxie at UK Companies House from Bangladesh meant learning the filing regime, the anti-money-laundering requirements, and the director obligations myself. No lawyer, no agent.</p>
            </div>
          </div>

          <h4 className="fs-4" style={{ fontWeight: "700", color: "#c4cfde", marginBottom: "30px" }}>Formal Coursework</h4>
          <div className="mb--50 p-3 p-md-5" style={{ background: "#191b1e", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontSize: "16px", color: "#9aa4b0", marginBottom: "25px", fontStyle: "italic" }}>
              Entirely self-taught in machine learning, systems engineering, and theoretical computer science:
            </p>
            
            <h5 style={{ color: "#fff", fontSize: "20px", marginBottom: "15px", marginTop: "10px" }}>MITx</h5>
            <ul className="course-list">
              <li><a href="https://mitxonline.mit.edu/records/shared/776b490f-67be-46a2-8ddc-86d3b86bb9c0/" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>Universal AI Foundational Models</a></li>
              <li><a href="https://mitxonline.mit.edu/records/shared/cc81d799-e745-4f8e-8837-a75d4e1bfd49/" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>AI & Precision Medicine</a></li>
              <li><a href="https://mitxonline.mit.edu/records/shared/3d1aa3ad-4f07-4f64-aaf8-7dbc720913db/" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>AI and Sustainability: Energy</a></li>
              <li><a href="https://mitxonline.mit.edu/records/shared/ed8f94b2-2fb0-43fb-b5ab-9052d6e777fb/" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>AI and Sustainability: Transportation</a></li>
              <li><a href="https://mitxonline.mit.edu/records/shared/31cbd749-a3ca-488e-80ad-10ddb771a12f/" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>AI for Transportation: From Concepts to Implementation</a></li>
              <li><a href="https://mitxonline.mit.edu/records/shared/c4c84c9c-1c8e-469f-a050-2269b1fe0a3c/" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>AI & Entrepreneurship</a></li>
              <li><a href="https://mitxonline.mit.edu/records/shared/082917c3-0327-4b28-8049-10e588692dc0/" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>Holistic AI in Medicine</a></li>
            </ul>

            <h5 style={{ color: "#fff", fontSize: "20px", marginBottom: "15px", marginTop: "30px" }}>DeepLearning.AI</h5>
            <ul className="course-list">
              <li><a href="https://coursera.org/verify/specialization/R7SYBBCXR1OY" target="_blank" rel="noreferrer" style={{ color: "#c4cfde", textDecoration: "underline" }}>Deep Learning Specialization</a></li>
            </ul>

            <h5 style={{ color: "#fff", fontSize: "20px", marginBottom: "15px", marginTop: "30px" }}>Additional Credentials</h5>
            <p style={{ fontSize: "16px", color: "#9aa4b0", marginBottom: "15px" }}>
              <strong style={{ color: "#fff" }}>20+ additional certifications</strong> across ML, systems architecture, and applied AI from Google, UC Davis, University of Michigan & Udemy.
            </p>
            <div style={{ background: "rgba(255,255,255,0.02)", borderLeft: "2px solid #2a2d32", padding: "15px", borderRadius: "0 8px 8px 0", marginTop: "20px" }}>
              <p style={{ margin: 0, color: "#9aa4b0", fontSize: "14px" }}>
                All certificates verifiable on request — specific shareable credential links for any course available via{' '}
                <a href="mailto:rokib@blackbloxie.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>rokib@blackbloxie.com</a>{' · '}<a href="mailto:raadxbusiness9@gmail.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>raadxbusiness9@gmail.com</a>.
              </p>
            </div>
          </div>

          <h4 className="fs-4" style={{ fontWeight: "700", color: "#c4cfde", marginBottom: "20px" }}>The Honest Account</h4>

          {/* Big statement */}
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '10px', padding: '28px 32px', marginBottom: '16px' }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.4 }}>
              I chose research over grades — deliberately.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#9aa4b0', margin: 0 }}>
              Stability theory for the ISS characterization took priority over exam preparation, and OXIMO development took the class time. I knew what I was trading and I made the trade on purpose. The result is not recorded in a transcript. It is recorded in 383 experiments, 40,933 lines of production code, and a published preprint — and that is the evidence I would rather be judged on.
            </p>
          </div>

          {/* Evidence stat strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '40px' }}>
            {[
              { val: '383', lbl: 'GPU Experiments' },
              { val: '40,933', lbl: 'Lines of Code' },
              { val: 'AAAI 2027', lbl: 'Paper Under Review' },
              { val: 'UK Ltd', lbl: 'Registered Company' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '4px' }}>{s.val}</div>
                <div style={{ fontSize: '11px', color: '#6b7683', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.05)" }} /></div>
    </div>
  );
}
