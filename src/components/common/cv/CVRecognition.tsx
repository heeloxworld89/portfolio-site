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
          color: #6b7683;
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
          color: #6b7683;
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

        <div className="rec-verdict">
          <p className="rec-verdict-lead">
            Cosmos and Entrepreneur First both evaluated this work at close range, and neither discounted it for Dhaka.
          </p>
          <p className="rec-verdict-body">
            Cosmos ranked it top of cycle. EF routed it to a sponsor-level investor within twelve hours. Both are
            environments where PhDs, not eighteen-year-olds without one, are the default. That is good evidence for
            exactly one claim: <strong>when the work is actually read, it holds — and expert evaluators do not discount
            it for where it came from.</strong>
          </p>
          <p className="rec-verdict-body">
            It is worth being precise about what it does not establish. Cosmos is a remote grant and EF admits
            internationally by design, relocating people as its core model — so neither result says anything about
            selection filters that are geographically constrained, and neither is an acceptance. I have not been
            accepted anywhere. What I have is two independent close reads that came back positive on the substance.
          </p>
        </div>

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
              The application was pulled by the investment team within <strong>twelve hours</strong>, bypassing
              standard screening entirely and routing straight to <strong>Nick Sopuch</strong> — an EF investor who
              runs one of their investment teams and their SF-based bridge program, an Ada Ventures scout, and Head
              of Operations at Axiom Therapeutics. The call covered the architecture, the mathematics underneath it,
              and the enterprise thesis. Mid-call he framed the kind of founder EF backs by pointing at someone who
              joined at 17, raised $100M+, then built a second company that became a unicorn inside EF's own
              portfolio. That was the stated comparison set.
            </p>
            <p className="rec-body">
              Then he asked whether I planned to finish university, and I hedged. I said maybe — when the
              truth is I want to build full-time, and university is at most something I would do alongside that,
              not the plan.
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

        {/* ── Where the proof came from ─────────────────────────────── */}
        <div className="rec-origin">
          <div className="rec-origin-tag">Where the Mathematics Came From</div>
          <p className="rec-origin-body">
            In 1989 a mathematician named Eduardo Sontag published a framework called{' '}
            <strong>Input-to-State Stability</strong>. It was built for control systems engineering — it is part of
            how engineers establish that a rocket returns to a stable trajectory after being knocked off it
            mid-flight, rather than tumbling.
          </p>
          <p className="rec-origin-body">
            I read the original paper because I had a problem with the same shape. A self-correcting network is a
            system being perturbed — by corrupted data, by structural damage, and then by its own corrections — and
            the question I could not answer was whether the correction mechanism settles or oscillates forever. That
            is not a machine learning question. It is a control theory question, and control theory had already
            answered it for a different class of system.
          </p>
          <p className="rec-origin-body">
            So I adapted the framework: treat each correction as a bounded input disturbance, treat the weight
            trajectory as the state, and characterize the conditions under which the state stays bounded.{' '}
            <strong>That produced the first formal local stability characterization for a self-correcting neural
            architecture.</strong> I derived it at seventeen. It has not yet been reviewed by a control theorist, and
            getting it in front of one is the single highest priority I have.
          </p>
        </div>

        {/* ── Prepared answers ──────────────────────────────────────── */}
        <div className="rec-qa">
          <div className="rec-qa-header">Two questions I get asked, answered straight</div>

          <div className="rec-qa-item">
            <p className="rec-qa-q">Why is the deployment so small? Why not scale it?</p>
            <p className="rec-qa-a">
              The ceiling on that study is legal, not technical: no jurisdiction currently assigns commercial
              liability to an autonomous agent, so scaling past research grade would mean operating in a gap I cannot
              indemnify. <strong>I would rather hold a clean experiment at research scale than find that boundary
              from the wrong side of it.</strong>
            </p>
          </div>

          <div className="rec-qa-item">
            <p className="rec-qa-q">Who else has looked at this?</p>
            <p className="rec-qa-a">
              Two organizations, both at close range. Cosmos Institute ranked the application highest in its cycle
              and told me plainly it was in the wrong round — that cycle funded philosophical work, and this is a
              technical architecture. Entrepreneur First pulled it inside twelve hours and put me in front of an
              investor rather than a screener; that conversation ended on a question about university where I hedged,
              which was a fair thing for them to weigh, and I was told to come back in six months. No acceptances, no
              funding, no advisor. <strong>Two close reads that held on substance, and one mistake that was mine.</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.05)" }} /></div>
    </div>
  );
}
