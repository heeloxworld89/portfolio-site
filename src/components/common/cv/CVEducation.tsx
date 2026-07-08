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
        .edu-icon-bg {
          position: absolute;
          right: -10px;
          bottom: -10px;
          font-size: 100px;
          color: rgba(255,255,255,0.02);
          line-height: 1;
          pointer-events: none;
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
          color: #878e99;
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
          color: #878e99;
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
        <span className="subtitle" style={{ color: "#878e99", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Education</span>
        <h2 className="title mb--20" style={{ fontSize: "40px", fontWeight: "800", color: "#c4cfde" }}>Formal & Informal Training</h2>
        
        <div style={{ display: "inline-block", padding: "10px 20px", background: "rgba(255,255,255,0.05)", borderRadius: "30px", marginBottom: "40px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ color: "#fff", fontWeight: "600", fontSize: "16px" }}>12th Grade (Final Year)</span>
          <span style={{ color: "#878e99", margin: "0 10px" }}>|</span>
          <span style={{ color: "#878e99", fontWeight: "500", fontSize: "15px" }}>Prospective Undergraduate, Fall 2027</span>
        </div>
        
        <div className="content">
          <h4 style={{ fontSize: "28px", fontWeight: "700", color: "#c4cfde", marginBottom: "20px" }}>How I Learn</h4>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "30px", maxWidth: "800px" }}>
            I learn the way a researcher learns: I seek the <strong style={{ color: "#c4cfde" }}>how</strong>, not the <strong style={{ color: "#c4cfde" }}>what</strong>. I don't memorize syntax. I seek the mechanism behind the surface. This led me to study fields outside programming:
          </p>
          
          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-icon-bg">🚀</div>
              <h5 className="edu-title">Aerodynamics & Rocket Science</h5>
              <p className="edu-desc">Studied to understand the physical intuition of ISS (Input-to-State Stability) theory for ORMAS convergence proofs.</p>
            </div>
            
            <div className="edu-card">
              <div className="edu-icon-bg">🧠</div>
              <h5 className="edu-title">Sales Psychology</h5>
              <p className="edu-desc">Because automating European cold calls taught me the psychological limits of human trust in autonomous agents.</p>
            </div>
            
            <div className="edu-card">
              <div className="edu-icon-bg">📈</div>
              <h5 className="edu-title">Financial Markets</h5>
              <p className="edu-desc">Learned market micro-structure to build institutional-flow-aware stock algorithms at age 15.</p>
            </div>
            
            <div className="edu-card">
              <div className="edu-icon-bg">⚖️</div>
              <h5 className="edu-title">Company Law & AML</h5>
              <p className="edu-desc">Studied regulations to register Black Bloxie from Bangladesh directly via UK Companies House.</p>
            </div>
          </div>

          <h4 style={{ fontSize: "28px", fontWeight: "700", color: "#c4cfde", marginBottom: "30px" }}>Formal Coursework</h4>
          <div className="mb--50" style={{ background: "#191b1e", padding: "35px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontSize: "16px", color: "#878e99", marginBottom: "25px", fontStyle: "italic" }}>
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
            <p style={{ fontSize: "16px", color: "#878e99", marginBottom: "15px" }}>
              <strong style={{ color: "#fff" }}>20+ additional certifications</strong> across ML, systems architecture, and applied AI from Google, UC Davis, University of Michigan & Udemy.
            </p>
            <div style={{ background: "rgba(255,255,255,0.02)", borderLeft: "2px solid #2a2d32", padding: "15px", borderRadius: "0 8px 8px 0", marginTop: "20px" }}>
              <p style={{ margin: 0, color: "#878e99", fontSize: "14px" }}>
                All certificates verifiable on request — specific shareable credential links for any course available via{' '}
                <a href="mailto:rokib@blackbloxie.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>rokib@blackbloxie.com</a>{' · '}<a href="mailto:raadxbusiness9@gmail.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>raadxbusiness9@gmail.com</a>.
              </p>
            </div>
          </div>

          <h4 style={{ fontSize: "28px", fontWeight: "700", color: "#c4cfde", marginBottom: "30px" }}>The Honest Truth About Traditional Education</h4>
          <div className="truth-box">
            <p>
              My high school grades are not what you would expect from someone writing mathematical proofs about neural network convergence. My traditional education suffered because I was spending every available hour on research, code, and building systems.
            </p>
            <p>
              <span className="highlight-text">I skipped school to work on OXIMO. I stayed up until 4 AM debugging ORMAS. I prioritized understanding ISS convergence theory over studying for exams.</span>
            </p>
            <p>
              My formal academic record does not reflect my actual capabilities. What reflects my capabilities is the work: <strong style={{ color: "#c4cfde" }}>309 experiments on a single GPU, 40,933 lines of production code, a registered UK company generating revenue, and a 1.5-year ablation study with published-quality results.</strong>
            </p>
            <p style={{ fontSize: "22px", fontWeight: "700", marginTop: "30px", color: "#fff" }}>
              I dream of studying at MIT. I believe that with institutional support — mentorship, compute access, a community of researchers — I can scale what I've built.
            </p>
          </div>
          
        </div>
      </div>
      <div className="col-12"><hr style={{ borderColor: "rgba(255,255,255,0.05)", margin: "60px 0" }} /></div>
    </div>
  );
}
