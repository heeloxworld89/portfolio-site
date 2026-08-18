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
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 14px;
        }

        /* Second entry — same build quality; the category is carried by the label,
           not by making the card look provisional. */
        .rec-secondary {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 10px;
          padding: 28px 30px;
          margin-bottom: 24px;
          transition: border-color 0.3s;
        }
        .rec-secondary:hover { border-color: rgba(255,255,255,0.12); }
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
          Two Outside Verdicts, and What Each One Is Actually Worth
        </h2>
        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#9aa4b0", maxWidth: "700px", marginBottom: "28px" }}>
          One organization read the work. One organization read me. Those are different instruments measuring
          different things, and the difference is worth more than the flattery of collapsing them — so I have
          weighted them separately and said plainly what each one does and does not establish.
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

        </div>

        {/* Entrepreneur First — deliberately secondary: a screen, not a read */}
        <div className="rec-secondary">
          <div className="rec-logo-row">
            <div className="rec-logo-chip on-dark">
              <img src="/assets/images/logos/entrepreneur-first.svg" alt="Entrepreneur First" style={{ height: '11px' }} />
            </div>
          </div>
          <div className="rec-tag">Entrepreneur First · Talent Team · Gate 1 Screen</div>
          <h3 className="rec-name">EF Came Looking. I Was Ready for the Architecture and Not for the Obvious Question.</h3>
          <p className="rec-body">
            EF runs one of the most aggressive sourcing operations in European venture, and it found me in
            Dhaka — <strong>their talent team opened the conversation, not me</strong>. The call itself was with{' '}
            <strong>Nick Sopuch</strong>, who runs one of EF&apos;s investment teams and their SF-based bridge
            program, scouts for Ada Ventures, and is Head of Operations at Axiom Therapeutics. Mid-call he sized
            me against the kind of founder EF backs: someone who joined at 17, raised $100M+, then built a
            second company that became a unicorn inside EF&apos;s own portfolio. That was the comparison set.
          </p>
          <p className="rec-body">
            Then he asked whether I planned to finish university, and I hedged — said maybe, when the truth is I
            want to build full-time. That&apos;s the one thing I&apos;d take back: a hedge on a commitment
            question, in a conversation whose entire purpose is reading how someone thinks. Nick read it exactly
            right. Lesson learned, and the next conversation with EF is already in motion.
          </p>
          <div className="rec-stats">
            <div className="rec-stat">
              <span className="rec-stat-val">Inbound</span>
              <span className="rec-stat-lbl">EF Opened Contact</span>
            </div>
            <div className="rec-stat">
              <span className="rec-stat-val">Gate 1</span>
              <span className="rec-stat-lbl">Talent Team Screen</span>
            </div>
          </div>
        </div>

        {/* ── What this actually adds up to ──────────────────────────── */}
        <div className="rec-verdict">
          <p className="rec-verdict-lead">
            Neither of these is a credential. Read precisely, they are still the two most useful pieces of
            outside information I have.
          </p>
          <p className="rec-verdict-body">
            <strong>Cosmos read the work.</strong> They ranked it highest in the cycle and then told me exactly
            why it still would not be funded — that round backed philosophical work on AI, and ORMAS is a
            technical architecture. A ranking with a reason attached is the most valuable thing a reviewer can
            hand you, and it supports one narrow claim: <strong>when the work is read by people qualified to
            judge it, it holds.</strong>
          </p>
          <p className="rec-verdict-body">
            <strong>EF read me</strong> — for fifteen minutes, at Gate 1, by design. Different instrument,
            different measurement, and a no I earned on a question that had nothing to do with the
            architecture. Both organizations went looking in an environment where a PhD is the default and an
            eighteen-year-old without one is not, and neither discounted the work for coming out of Dhaka.
          </p>
          <p className="rec-verdict-body">
            What neither establishes is worth stating just as plainly. No funding, no offer, no advisor. Cosmos
            is a remote grant and EF admits internationally by design, so neither says anything about selection
            filters that are geographically constrained. I would rather hold two accurately weighted results
            than one inflated one — the weighting is the part that makes the rest of this page worth believing.
          </p>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.05)" }} /></div>
    </div>
  );
}
