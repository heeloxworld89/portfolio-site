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
          Outside Signal
        </span>
        <h2 className="title fs-2" style={{ fontWeight: "800", color: "#fff", marginBottom: "10px" }}>
          What Happened When I Sent It Out
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#9aa4b0", maxWidth: "700px", marginBottom: "28px" }}>
          I sent the work to two places that see far more applications than they can act on. Neither outcome is a credential, and I am not presenting them as one. Both are written here as they happened — including the part I got wrong.
        </p>

        <div className="rec-grid">
          {/* Cosmos Institute */}
          <div className="rec-card">
            <div className="rec-tag">Cosmos Institute · Grants Review</div>
            <h3 className="rec-name">Highest-Ranked Application in the Cycle</h3>
            <p className="rec-body">
              I applied to a Cosmos Institute grant round. They came back with two things at once: the
              application ranked highest in the cycle, and it was in the wrong round — that cycle funded
              philosophical work on AI, and ORMAS is a technical architecture. So, no grant, and a clear
              instruction to come back when they open a technical track. I would rather have the honest
              read than the money.
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
              I applied to one of Entrepreneur First's newest cohorts. Twelve hours later the investment
              team had pulled the application — no standard screening call, straight to{' '}
              <strong>Nick Sopuch</strong>, an EF investor who runs their SF-based bridge program. We spent
              the call on ORMAS: the architecture, the mathematics under it, the enterprise thesis behind
              OXIDO. Partway through, he described the kind of person EF backs by pointing at a founder who
              joined at 17, raised over $100M, then built a second company that became a unicorn inside EF's
              own portfolio. That was the comparison set.
            </p>
            <p className="rec-body">
              Then he asked whether I planned to finish university, and I hedged. I said maybe — when the
              truth is I want to build full-time and treat university as a networking option, not the plan.
              In an interview about committing to a company, a hedge on that question reads as exactly what
              it was. Fair call on his part, and the reason the conversation ended where it did: not a
              rejection, just Nick telling me plainly to come back in six months. A strong technical
              conversation and one clean, ownable mistake. Next time the answer arrives before the question
              finishes.
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
