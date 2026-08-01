export default function CVJourney() {
  return (
    <div className="row mb--50" id="journey">
      <div className="col-12">
        <span className="subtitle" style={{ color: "#878e99", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Origin</span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: "700" }}>The Experimental Ground That Motivated Everything</h2>
        <p className="disc" style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", maxWidth: '680px', marginBottom: '10px' }}>
          Every system documented here emerged from a specific failure. The research did not precede the problems — the problems preceded the research.
        </p>

        <div className="content mt--30">

          {/* Phase 1 — Early Foundation */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '40px' }}>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '22px 24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '8px' }}>Age 12 — First Principles</div>
              <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#878e99', margin: 0 }}>
                Began programming at 12. Every project was constructed at the edge of current capability — which established a working pattern: learn what the problem demands, not what the curriculum offers. The discipline of self-directed inquiry formed before any formal exposure to computer science.
              </p>
            </div>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '22px 24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '8px' }}>Age 15 — First Validated Output</div>
              <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#878e99', margin: 0 }}>
                Developed a stock market price prediction system: market data ingestion → fundamental analysis → technical analysis → directional prediction. Sold for approximately <strong style={{ color: '#c4cfde' }}>$10,000 USD</strong>. The proceeds funded the RTX 3090 that would later run all 383 ORMAS experiments. More importantly: it was the first externally validated proof that the work was real.
              </p>
            </div>
          </div>

          {/* Phase 2 — The Venture Pattern */}
          <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px", color: "#c4cfde" }}>Five Ventures. Five Distinct Failure Modes. One Convergent Finding.</h4>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "24px" }}>
            Between ages 12 and 17, five independent ventures were pursued across software, automation, and e-commerce. Each failed at a structurally different layer. Each contributed a data point to the same emerging pattern.
          </p>

          <div className="timeline-container" style={{ position: "relative", padding: "10px 0 20px 20px", borderLeft: "1px solid rgba(255,255,255,0.06)", marginLeft: "10px", marginBottom: "30px" }}>
            {[
              {
                title: "Software Services",
                lesson: "Distribution, at 15, without institutional credibility or network access, is not a technical problem. It is a structural one. Enterprise procurement does not route through technical merit alone."
              },
              {
                title: "Cold-Call Automation — European Markets",
                lesson: "Human trust in autonomous agents has a hard threshold at the closing transaction. The automation covered 90% of the sales cycle reliably; the final 10% required human presence. That boundary defined the design constraint that OXIMO later addressed."
              },
              {
                title: "US-Targeted Digital Marketing",
                lesson: "The bottleneck was not distribution. It was content production at scale. The problem required a system that could generate — not one that could merely distribute."
              },
              {
                title: "Organic E-Commerce",
                lesson: "Individual tools optimizing pricing or marketing are incremental improvements. The problem is coordination across the entire pipeline: research, listing, pricing, fulfillment, service. One person cannot be the system."
              },
              {
                title: "Automation Tooling",
                lesson: "Confirmed the convergent finding across all prior ventures: the bottleneck is never individual capability. It is always coordination."
              }
            ].map((venture, index) => (
              <div key={index} className="timeline-item" style={{ position: "relative", marginBottom: index !== 4 ? "28px" : "10px", paddingLeft: "30px" }}>
                <div style={{
                  position: "absolute", left: "-21px", top: "14px", width: "8px", height: "8px",
                  borderRadius: "50%", backgroundColor: "#2a2d32", border: "1px solid #4a5568"
                }}></div>
                <div style={{ backgroundColor: "#191b1e", padding: "18px 22px", borderRadius: "8px", border: "1px solid #2a2d32" }}>
                  <h5 style={{ fontSize: "14px", fontWeight: "700", color: "#c4cfde", margin: "0 0 6px", letterSpacing: '0.3px' }}>{venture.title}</h5>
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#878e99", margin: 0 }}>
                    {venture.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* The Structural Insight */}
          <div style={{ background: "#191b1e", border: "1px solid #2a2d32", borderLeft: "2px solid #c4cfde", borderRadius: "8px", padding: "24px 28px", marginBottom: "30px" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#c4cfde", marginBottom: "12px", fontWeight: "600" }}>
              The problem is not any single component of the business pipeline. The problem is the pipeline itself — and the coordination overhead that makes it humanly intractable at scale.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#878e99", marginBottom: "12px" }}>
              Five ventures failing at five different stages constitutes a structured experiment in entrepreneurial failure modes. The root variable in every case was identical: one person attempting to occupy every role in a system that requires multiple simultaneous specialized agents operating in coordination.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#878e99", margin: 0 }}>
              That observation demanded a structural solution. <strong style={{ color: "#c4cfde" }}>OXIMO</strong> was the response: a cognitive multi-agent operating system that assembles its own organizational structure on demand, decomposes tasks autonomously, and creates new agent roles as the problem requires. When OXIMO's agents needed to learn safely from real-world production data — corrupted, contradictory, adversarial — that constraint motivated <strong style={{ color: "#c4cfde" }}>ORMAS</strong>. The failed ventures are not separate from the research. They are its experimental substrate.
            </p>
          </div>

        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.06)" }} /></div>
    </div>
  );
}
