export default function CVRecognition() {
  return (
    <div className="row mb--50" id="recognition">
      <style>{`
        .rec-card {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 10px;
          padding: 28px 30px;
          transition: border-color 0.3s;
          height: 100%;
        }
        .rec-card:hover { border-color: rgba(255,255,255,0.12); }
        .rec-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b7683;
          margin-bottom: 12px;
        }
        .rec-name {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          line-height: 1.35;
        }
        .rec-body {
          font-size: 14px;
          line-height: 1.8;
          color: #9aa4b0;
          margin: 0 0 20px;
        }
        .rec-body strong { color: #c4cfde; font-weight: 600; }
        .rec-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .rec-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid #2a2d32;
          border-radius: 6px;
          padding: 8px 14px;
          text-align: center;
          min-width: 76px;
        }
        .rec-stat-val {
          font-size: 15px;
          font-weight: 800;
          color: #c4cfde;
          display: block;
          line-height: 1.2;
        }
        .rec-stat-lbl {
          font-size: 10px;
          color: #6b7683;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-weight: 600;
          display: block;
          margin-top: 3px;
        }
        .rec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 900px) {
          .rec-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: "#9aa4b0", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
          External Validation
        </span>
        <h2 className="title fs-2" style={{ fontWeight: "800", color: "#fff", marginBottom: "10px" }}>
          Recognized Before I Asked to Be
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#9aa4b0", maxWidth: "700px", marginBottom: "28px" }}>
          Two independent signals, unprompted — from organizations that see far more applications than they can act on. Neither is a credential I'm claiming. Both are read exactly as they happened.
        </p>

        <div className="rec-grid">
          {/* Cosmos Institute */}
          <div className="rec-card">
            <div className="rec-tag">Cosmos Institute · Grants Review</div>
            <h3 className="rec-name">Highest-Ranked Application in the Cycle</h3>
            <p className="rec-body">
              Cosmos Institute reviewed my application for one of their AI grant rounds and rated it the
              highest of the cycle — despite the round itself being reserved for philosophical AI work,
              not technical research like ORMAS. Their reviewers were direct about the mismatch: this
              round isn't the right fit, but the application stood above the pool anyway, and I've been
              pointed toward a future technical-track round when one opens.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">#1</span>
                <span className="rec-stat-lbl">Ranked, Cycle</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">Off-Track</span>
                <span className="rec-stat-lbl">Wrong Round, Right Score</span>
              </div>
            </div>
          </div>

          {/* Entrepreneur First */}
          <div className="rec-card">
            <div className="rec-tag">Entrepreneur First · Investment Team</div>
            <h3 className="rec-name">A 12-Hour Response, Then a Direct Line to the Investment Team</h3>
            <p className="rec-body">
              I applied to one of Entrepreneur First's newest cohorts. The application was picked up by
              the investment team in 12 hours — not routed through a standard screening call, but straight
              to <strong>Nick Sopuch</strong>, an EF investor who runs their SF-based bridge program.
              We spent the call going through ORMAS's architecture, the mathematics behind it, and the
              enterprise thesis behind OXIDO. In that same conversation, he described the kind of builder
              EF looks for by pointing to founders they'd backed as teenagers — including one who joined
              at 17, built a company that raised over $100M, and then built a second that became a unicorn
              inside EF's own portfolio. That's the bar the conversation was being measured against.
            </p>
            <p className="rec-body">
              At one point Nick asked me directly whether I planned to finish university. I hedged — said
              maybe I would, when the honest answer is that I want to build full-time and treat university
              as a networking option, not the plan. In an interview about starting a company, that hedge
              reads exactly the way it's supposed to: as ambiguity about commitment. It was a fair read on
              their part, and it's the specific reason the call ended the way it did — not a rejection,
              but Nick telling me straight: not this cycle, come back in six months. That's the actual
              experience — a strong technical conversation, and one clear, ownable mistake I know exactly
              how to fix before the next one. Next time, that answer arrives before the question finishes.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">12 hrs</span>
                <span className="rec-stat-lbl">To First Response</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">Direct</span>
                <span className="rec-stat-lbl">To Investment Team</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">6 mo.</span>
                <span className="rec-stat-lbl">Invited to Reapply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.05)" }} /></div>
    </div>
  );
}
