export default function CVWhoIAm() {
  return (
    <div className="row mb--50" id="who-i-am">
      <style>{`
        .who-card {
          background: #191b1e;
          border-radius: 8px;
          padding: 30px;
          border: 1px solid #2a2d32;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .who-card:hover {
          border-color: rgba(255,255,255,0.1);
        }
        .highlight-text {
          color: #c4cfde;
          font-weight: 500;
        }
        .hero-text {
          font-size: 18px;
          line-height: 1.8;
          color: #878e99;
          letter-spacing: 0.3px;
          border-left: 2px solid #2a2d32;
          padding-left: 20px;
          margin: 30px 0;
        }
        .gradient-span {
          color: #c4cfde;
          font-weight: 700;
        }
        .flex-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
      <div className="col-12">
        <span className="subtitle" style={{ color: "#878e99", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Who I Am</span>
        <h2 className="title mb--20" style={{ fontSize: "40px", fontWeight: "800", color: "#c4cfde" }}>Rokib Al Dhin Raadh</h2>
        
        <div className="hero-text">
          I am <span className="highlight-text">Rokib Al Dhin Raadh</span>. I am 18 years old. I live in Dhaka, Bangladesh.<br/>
          I have <span className="highlight-text">no advisor, no lab, no institutional compute, no co-founders,</span> and <span className="highlight-text">no formal training</span> beyond high school.
        </div>

        <div className="content mt--40">
          <h4 style={{ fontSize: "22px", color: "#c4cfde", marginBottom: "25px", fontWeight: "600" }}>Research Systems Built From Scratch</h4>
          
          <div className="flex-container">
            <div className="who-card">
              <h3 style={{ fontSize: "24px", color: "#fff", marginBottom: "15px", fontWeight: "700" }}>
                <span className="gradient-span">ORMAS</span>
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#878e99", margin: 0 }}>
                A novel neural network training paradigm that gives networks an autonomous immune system. Networks trained with ORMAS can detect their own corruption, diagnose the specific pathology, and repair themselves — with mathematical convergence guarantees and full per-node transparency. Validated across <span className="highlight-text">309 controlled experiments</span> on 4 architectures and 6 datasets. All experiments run on a single RTX 4090. Formal ISS convergence proof included. Submitted to NeurIPS 2026.
              </p>
            </div>

            <div className="who-card">
              <h3 style={{ fontSize: "24px", color: "#fff", marginBottom: "15px", fontWeight: "700" }}>
                <span className="gradient-span">OXIMO</span>
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#878e99", margin: 0 }}>
                A cognitive multi-agent operating system where AI agents autonomously decompose tasks, create new roles on demand, learn from experience, and operate with production-grade safety guardrails. <span className="highlight-text">40,933 lines</span> of production code. <span className="highlight-text">2,011 tests</span> passing, 0 failures. Rebuilt from a 106,000-line monolith with a 72% line reduction while preserving every algorithm.
              </p>
            </div>

            <div className="who-card">
              <h3 style={{ fontSize: "24px", color: "#fff", marginBottom: "15px", fontWeight: "700" }}>
                <span className="gradient-span">Black Bloxie LTD</span>
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#878e99", margin: 0 }}>
                A UK-registered company I founded at 17 as a controlled lab-rat test for the OXIMO ecosystem. A 1.5-year ablation study proving the architecture works in production: <span className="highlight-text">£1,163+ revenue</span> with zero advertising spend, 100% of sales driven by LLM referral traffic (ChatGPT, Bing, Gemini), and documented emergent AI-to-AI market behavior.
              </p>
            </div>
          </div>
          
          <div className="mt--40 p-4" style={{ background: "#191b1e", borderRadius: "8px", border: "1px solid #2a2d32" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "0" }}>
              Five failed startups between ages 12 and 17 taught me that the problem is not any single part of a business pipeline — the problem is the pipeline itself. OXIMO was built to solve that. ORMAS was built because OXIMO's AI agents can't learn safely from real-world data. Together, they form the <strong style={{ color: "#c4cfde" }}>OXIDO Ecosystem</strong> — an autonomous system with a self-correcting brain (ORMAS), a cognitive body (OXIMO), and a language model that can think without poisoning itself (Cherry).
            </p>
          </div>
          
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px", marginTop: "30px", fontWeight: "500", letterSpacing: "0.5px" }}>
            Every line of code is mine. Every line of math is mine. Every experiment, every business registration, every failed startup — mine. The codebases are available on request.
          </p>
          
          <div style={{ display: "inline-block", marginTop: "20px", padding: "12px 28px", background: "#2a2d32", borderRadius: "6px", color: "#c4cfde", fontWeight: "600", letterSpacing: "1px", border: "1px solid rgba(255,255,255,0.1)", fontSize: "13px" }}>
            SEEKING FELLOWSHIP · MENTORSHIP · RELOCATION
          </div>
          
          {/* Paper + Verification Request Block */}
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '24px 28px', marginTop: '40px', marginBottom: '10px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '12px' }}>Paper & Verification — For Grant & Fellowship Reviewers</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '16px' }}>
              The V1 paper is complete and available exclusively to fellowship and grant reviewers. If you are evaluating this application, everything below can be requested via email — no public links, no attachments by default.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {[
                ['Research Paper (V1)', 'Full ORMAS paper with convergence proof and experimental results'],
                ['ORMAS Codebase', '10,594 lines · 61 files · anonymous GitHub link preserving ICLR anonymity'],
                ['OXIMO Codebase', '40,933 lines · 11 mini-repos · 2,011 passing tests'],
                ['Experiment Results', '309 controlled runs — terminal logs, training curves, GlassBox screenshots'],
                ['Black Bloxie Analytics', 'Shopify dashboards, per-phase ablation breakdowns, traffic attribution'],
                ['Work Ethic Verification', 'Unlisted YouTube livestream links — timestamped daily work documentation'],
              ].map(([item, desc], i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '13px' }}>
                  <span style={{ color: '#c4cfde', fontWeight: 600, minWidth: '200px', flexShrink: 0 }}>{item}</span>
                  <span style={{ color: '#4a5568' }}>·</span>
                  <span style={{ color: '#878e99' }}>{desc}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: '#878e99', margin: 0, borderTop: '1px solid #2a2d32', paddingTop: '16px' }}>
              Request verification materials via: <a href="mailto:rokib@blackbloxie.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>rokib@blackbloxie.com</a>{' · '}<a href="mailto:raadxbusiness9@gmail.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>raadxbusiness9@gmail.com</a>
            </p>
          </div>

        </div>
      </div>
      <div className="col-12"><hr style={{ borderColor: "rgba(255,255,255,0.05)", margin: "60px 0" }} /></div>
    </div>
  );
}
