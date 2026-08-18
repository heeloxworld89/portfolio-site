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
        .rec-logo-row {
          display: flex;
          align-items: center;
          margin-bottom: 18px;
        }
        .rec-logo-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 16px;
          border-radius: 6px;
        }
        .rec-logo-chip.on-white {
          background: #fff;
        }
        .rec-logo-chip.on-dark {
          background: rgba(255,255,255,0.04);
          border: 1px solid #2a2d32;
        }
        .rec-logo-chip img { display: block; height: 15px; width: auto; }
        .rec-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #838d99;
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
          color: #838d99;
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
        .rec-verdict {
          background: rgba(196,207,222,0.045);
          border: 1px solid #2a2d32;
          border-left: 2px solid #c4cfde;
          border-radius: 0 8px 8px 0;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .rec-verdict-lead {
          font-size: 17px;
          line-height: 1.75;
          color: #c4cfde;
          font-weight: 600;
          margin: 0 0 14px;
        }
        .rec-verdict-body {
          font-size: 15px;
          line-height: 1.85;
          color: #9aa4b0;
          margin: 0 0 12px;
        }
        .rec-verdict-body:last-child { margin-bottom: 0; }
        .rec-verdict-body strong { color: #c4cfde; font-weight: 600; }

        .rec-origin {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 10px;
          padding: 30px 32px;
          margin-bottom: 24px;
        }
        .rec-origin-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #838d99;
          margin-bottom: 14px;
        }
        .rec-origin-body {
          font-size: 16px;
          line-height: 1.85;
          color: #9aa4b0;
          margin: 0 0 14px;
        }
        .rec-origin-body:last-child { margin-bottom: 0; }
        .rec-origin-body strong { color: #c4cfde; font-weight: 600; }

        .rec-qa {
          border: 1px solid #2a2d32;
          border-radius: 8px;
          overflow: hidden;
        }
        .rec-qa-header {
          padding: 10px 22px;
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #838d99;
        }
        .rec-qa-item {
          padding: 20px 22px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .rec-qa-item:last-child { border-bottom: none; }
        .rec-qa-q {
          font-size: 14px;
          font-weight: 700;
          color: #c4cfde;
          margin: 0 0 8px;
        }
        .rec-qa-a {
          font-size: 15px;
          line-height: 1.8;
          color: #9aa4b0;
          margin: 0;
        }
        .rec-qa-a strong { color: #c4cfde; font-weight: 600; }
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
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/cosmos-institute.svg" alt="Cosmos Institute" />
              </div>
            </div>
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
                <span className="rec-stat-val">Highest</span>
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
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-dark">
                <img src="/assets/images/logos/entrepreneur-first.svg" alt="Entrepreneur First" style={{ height: '12px' }} />
              </div>
            </div>
            <div className="rec-tag">Entrepreneur First · Investment Team</div>
            <h3 className="rec-name">A 12-Hour Response, Then a Direct Line to the Investment Team</h3>
            <p className="rec-body">
              The application was pulled by the investment team within <strong>twelve hours</strong>. The call
              itself was with <strong>Nick Sopuch</strong> — who runs one of EF's investment teams and their
              SF-based bridge program, scouts for Ada Ventures, and is Head of Operations at Axiom
              Therapeutics. We spent it on the architecture, the mathematics underneath it, and the enterprise
              thesis behind OXIDO — not a script. Mid-call he sized me against the kind of founder EF backs:
              someone who joined at 17, raised $100M+, then built a second company that became a unicorn
              inside EF's own portfolio. That was the comparison set.
            </p>
            <p className="rec-body">
              Then he asked whether I planned to finish university, and I hedged — said maybe, when the
              truth is I want to build full-time. That's the one thing I'd take back: a hedge on a
              commitment question, in a conversation about committing to a company. Nick read it exactly
              right. Lesson learned, and the next conversation with EF is already in motion.
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
            </div>
          </div>
        </div>

        {/* ── What the two reads add up to ───────────────────────────── */}
        <div className="rec-verdict">
          <p className="rec-verdict-lead">
            Two independent close reads, and neither discounted the work for coming out of Dhaka.
          </p>
          <p className="rec-verdict-body">
            Both are environments where a PhD is the default and an eighteen-year-old without one is not. Taken
            together they support exactly one claim, and it is a narrow one: <strong>when the work is actually read
            by people qualified to judge it, it holds.</strong>
          </p>
          <p className="rec-verdict-body">
            What they do not establish is equally worth stating. Cosmos is a remote grant and EF admits
            internationally by design, so neither result says anything about selection filters that are
            geographically constrained. Neither is an acceptance. No funding, no offer, no advisor. What I have is
            two organizations that looked closely and came back positive on the substance — and one mistake in the
            second conversation that was entirely mine.
          </p>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.05)" }} /></div>
    </div>
  );
}
