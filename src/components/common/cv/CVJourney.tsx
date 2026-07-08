export default function CVJourney() {
  return (
    <div className="row mb--50" id="journey">
      <div className="col-12">
        <span className="subtitle" style={{ color: "#ff014f", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Origin</span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: "700" }}>The Journey — From First Certificate to Research (Age 12 to 18)</h2>
        <p className="disc" style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99" }}>
          I started coding at 12. Not freelancing, not small scripts, not tutorial projects. Every time I coded, I built something ambitious — something that was too big for my skill level, which forced me to learn fast or fail. Usually both.
        </p>
        
        <div className="content mt--30">
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong>First Professional Certificate:</strong> Google — <em>Crash Course on Python</em>. January 31, 2023. I was 15. For a kid in Dhaka with no institutional support, no mentors, and no programming community, getting certified by Google as a programmer was the single best thing that had happened to me. That certificate was proof that I was real.
          </p>

          <h4 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", marginTop: "40px" }}>The Stock Market Algorithm (Age ~15) — First Real Money</h4>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            The first project that produced real revenue was a stock market price prediction tool. Architecture: Ingest market data → Analyze fundamentals → Technical analysis → Model predicts directional movement.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            I sold the tool for approximately <strong>$10,000 USD</strong> (~1 million BDT). At 15 years old, it was the most money I had ever seen. It funded the RTX 4090 that later powered ORMAS.
          </p>

          <h4 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", marginTop: "40px" }}>The Bleeding Startups (Age 15 to 17)</h4>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "30px" }}>
            The stock market money gave me capital to start building companies. I call them <strong>bleeding startups</strong>: not dead, but never healthy. Always burning resources, always teaching, never reaching escape velocity.
          </p>
          
          <div className="timeline-container" style={{ position: "relative", padding: "10px 0 20px 20px", borderLeft: "1px solid rgba(255,255,255,0.08)", marginLeft: "10px", marginBottom: "30px" }}>
            {[
              { 
                title: "Venture 1: Software Company", 
                result: "Bled", 
                desc: "A 15-year-old in Bangladesh lacks the network for enterprise deals." 
              },
              { 
                title: "Venture 2: Cold-Calling Automation", 
                location: "(Italy/Spain)",
                result: "Bled", 
                desc: "The sales process has human trust dynamics that cannot be fully automated at the point of contact." 
              },
              { 
                title: "Venture 3: US-Targeted Digital Marketing", 
                result: "Bled", 
                desc: "The bottleneck in digital marketing is content production at scale, not distribution." 
              },
              { 
                title: "Venture 4: Organic E-Commerce", 
                result: "Bled", 
                desc: "Individual tools for pricing or marketing are incremental improvements. The problem is the pipeline itself." 
              },
              { 
                title: "Venture 5: Additional Automation Tools", 
                result: "Bled", 
                desc: "Each added another data point to the pattern." 
              }
            ].map((venture, index) => (
              <div key={index} className="timeline-item" style={{ position: "relative", marginBottom: index !== 4 ? "40px" : "10px", paddingLeft: "30px" }}>
                {/* Timeline Dot */}
                <div style={{ 
                  position: "absolute", left: "-22px", top: "8px", width: "10px", height: "10px", 
                  borderRadius: "50%", backgroundColor: "#4a5568", border: "1px solid #2a2d32"
                }}></div>
                
                {/* Timeline Content */}
                <div style={{ 
                  backgroundColor: "#191b1e", padding: "20px", borderRadius: "8px", 
                  border: "1px solid #2a2d32"
                }}>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", marginBottom: "8px", gap: "10px" }}>
                    <h5 style={{ fontSize: "17px", fontWeight: "600", color: "#c4cfde", margin: 0 }}>
                      {venture.title} {venture.location && <span style={{ color: "#878e99", fontSize: "14px", fontWeight: "normal" }}>{venture.location}</span>}
                    </h5>
                    <span style={{ 
                      padding: "2px 10px", backgroundColor: "rgba(255,255,255,0.05)", 
                      color: "#878e99", borderRadius: "4px", fontSize: "11px", 
                      fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px"
                    }}>
                      {venture.result}
                    </span>
                  </div>
                  <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#878e99", margin: 0 }}>
                    {venture.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", marginTop: "40px" }}>The Pattern</h4>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px", fontWeight: "bold" }}>
            The problem is not any single part of the business pipeline — the problem is the pipeline itself.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            Every venture failed at a different stage. But the root cause was always the same: a human bottleneck. One person — me — trying to be the CEO, developer, marketer, salesperson, and support agent.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            That insight is why <strong>OXIMO</strong> exists. And when OXIMO hit real-world data and the agents couldn't learn safely, that is why <strong>ORMAS</strong> exists. The failed startups are not separate from the research. They are the research.
          </p>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.1)" }} /></div>
    </div>
  );
}
