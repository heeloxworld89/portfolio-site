import CVSection from './CVSection';
export default function CVRecognition() {
  return (
    <CVSection
      id="recognition"
      phase="now"
      eyebrow="Outside Signal"
      title="Two organisations went looking, and neither of them found me by accident."
      lead={
        <>
          Cosmos read the work and ranked it first in their cycle. Entrepreneur First read me and had a
          call booked inside twelve hours. <strong>Those measure completely different things, and I am not
          going to pretend otherwise to make the page look better.</strong> So: what each one proves, and
          what it doesn&apos;t.
        </>
      }
    >
      <style>{`
        .rec-card {
          background: var(--pf-surface);
          border: 1px solid var(--pf-border);
          border-radius: 10px;
          padding: 28px 30px;
          transition: border-color 0.3s;
          height: 100%;
        }
        .rec-card:hover { border-color: rgba(var(--pf-ink-rgb), 0.12); }
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
        .rec-logo-chip.on-white,
        .rec-logo-chip.on-dark {
          background: var(--pf-surface-2);
          border: 1px solid var(--pf-border);
        }
        .rec-logo-chip img { display: block; height: 15px; width: auto; }
        .rec-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pf-ink-3);
          margin-bottom: 12px;
        }
        .rec-name {
          font-size: 17px;
          font-weight: 700;
          color: var(--pf-ink);
          margin: 0 0 12px;
          line-height: 1.35;
        }
        .rec-body {
          font-size: 14px;
          line-height: 1.8;
          color: var(--pf-ink-2);
          margin: 0 0 20px;
        }
        .rec-body strong { color: var(--pf-ink); font-weight: 600; }
        .rec-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .rec-stat {
          background: rgba(var(--pf-ink-rgb), 0.04);
          border: 1px solid var(--pf-border);
          border-radius: 6px;
          padding: 8px 14px;
          text-align: center;
          min-width: 76px;
        }
        .rec-stat-val {
          font-size: 15px;
          font-weight: 800;
          color: var(--pf-ink);
          display: block;
          line-height: 1.2;
        }
        .rec-stat-lbl {
          font-size: 10px;
          color: var(--pf-ink-3);
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

        /* Application → 12 hrs → call booked */
        .rec-clock {
          display: grid; grid-template-columns: 1fr auto 1fr;
          gap: 14px; align-items: center;
          background: rgba(var(--pf-accent-rgb), 0.055);
          border: 1px solid rgba(var(--pf-accent-rgb), 0.3);
          border-radius: 10px; padding: 18px 22px; margin: 0 0 20px;
        }
        @media (max-width: 620px) {
          .rec-clock { grid-template-columns: 1fr; gap: 10px; text-align: center; }
        }
        .rec-clock-step { display: flex; flex-direction: column; gap: 4px; }
        .rec-clock-step.is-end { text-align: right; }
        @media (max-width: 620px) { .rec-clock-step.is-end { text-align: center; } }
        .rec-clock-k {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--pf-ink-3);
        }
        .rec-clock-v { font-size: 14px; font-weight: 700; color: var(--pf-ink); line-height: 1.35; }
        .rec-clock-gap { display: flex; align-items: center; gap: 10px; }
        @media (max-width: 620px) { .rec-clock-gap { justify-content: center; } }
        .rec-clock-line { width: 26px; height: 1px; background: rgba(var(--pf-accent-rgb), 0.45); }
        @media (max-width: 620px) { .rec-clock-line { width: 40px; } }
        .rec-clock-num {
          font-size: 20px; font-weight: 800; color: var(--pf-accent);
          letter-spacing: -0.3px; white-space: nowrap;
        }

        /* ── Quiet status line ── */
        .rec-status {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          background: rgba(var(--pf-ink-rgb), 0.035);
          border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-accent);
          border-radius: 0 8px 8px 0;
          padding: 15px 20px; margin-bottom: 24px;
        }
        .rec-status-logo {
          display: inline-flex; align-items: center; justify-content: center;
          flex-shrink: 0; padding: 9px 14px; border-radius: 6px;
          background: var(--pf-surface-2); border: 1px solid var(--pf-border);
        }
        .rec-status-logo img { display: block; height: 15px; width: auto; }
        .rec-status-body {
          display: flex; flex-direction: column; gap: 4px;
          flex: 1; min-width: 220px;
        }
        .rec-status-k {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: var(--pf-ink-3);
        }
        .rec-status-v { font-size: 14.5px; line-height: 1.6; color: var(--pf-ink-2); }
        .rec-status-v strong { color: var(--pf-ink); font-weight: 600; }
        .rec-status-d {
          font-size: 10px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; color: var(--pf-ink-3); flex-shrink: 0;
        }
        /* Stage strip — states where the process stands without narrating the wait. */
        .rec-stages { display: flex; flex-wrap: wrap; align-items: center; gap: 9px; margin-top: 9px; }
        .rec-stage {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; border-radius: 999px; padding: 4px 11px;
          color: var(--pf-ink-2); background: rgba(var(--pf-ink-rgb), 0.07);
          border: 1px solid rgba(var(--pf-ink-rgb), 0.2);
        }
        .rec-stage.is-done { color: var(--pf-pos); background: rgba(var(--pf-pos-rgb), 0.08); border-color: rgba(var(--pf-pos-rgb), 0.28); }
        .rec-stage.is-live { color: var(--pf-accent); background: rgba(var(--pf-accent-rgb), 0.08); border-color: rgba(var(--pf-accent-rgb), 0.3); }
        .rec-stage-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
        .rec-stage.is-live .rec-stage-dot { animation: recStagePulse 2.2s ease-in-out infinite; }
        @keyframes recStagePulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rec-stage.is-live .rec-stage-dot { animation: none; }
        }

        /* Second entry — same build quality; the category is carried by the label,
           not by making the card look provisional. */
        .rec-secondary {
          background: var(--pf-surface);
          border: 1px solid var(--pf-border);
          border-radius: 10px;
          padding: 28px 30px;
          margin-bottom: 24px;
          transition: border-color 0.3s;
        }
        .rec-secondary:hover { border-color: rgba(var(--pf-ink-rgb), 0.12); }
        .rec-verdict {
          background: rgba(var(--pf-ink-rgb), 0.045);
          border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-ink);
          border-radius: 0 8px 8px 0;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .rec-verdict-lead {
          font-size: 15.5px;
          line-height: 1.75;
          color: var(--pf-ink);
          font-weight: 600;
          margin: 0 0 14px;
        }
        .rec-verdict-body {
          font-size: 15px;
          line-height: 1.85;
          color: var(--pf-ink-2);
          margin: 0 0 12px;
        }
        .rec-verdict-body:last-child { margin-bottom: 0; }
        .rec-verdict-body strong { color: var(--pf-ink); font-weight: 600; }

        .rec-origin {
          background: var(--pf-surface);
          border: 1px solid var(--pf-border);
          border-radius: 10px;
          padding: 30px 32px;
          margin-bottom: 24px;
        }
        .rec-origin-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pf-ink-3);
          margin-bottom: 14px;
        }
        .rec-origin-body {
          font-size: 15px;
          line-height: 1.85;
          color: var(--pf-ink-2);
          margin: 0 0 14px;
        }
        .rec-origin-body:last-child { margin-bottom: 0; }
        .rec-origin-body strong { color: var(--pf-ink); font-weight: 600; }

        .rec-qa {
          border: 1px solid var(--pf-border);
          border-radius: 8px;
          overflow: hidden;
        }
        .rec-qa-header {
          padding: 10px 22px;
          background: rgba(var(--pf-ink-rgb), 0.02);
          border-bottom: 1px solid var(--pf-border);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pf-ink-3);
        }
        .rec-qa-item {
          padding: 20px 22px;
          border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.04);
        }
        .rec-qa-item:last-child { border-bottom: none; }
        .rec-qa-q {
          font-size: 14px;
          font-weight: 700;
          color: var(--pf-ink);
          margin: 0 0 8px;
        }
        .rec-qa-a {
          font-size: 15px;
          line-height: 1.8;
          color: var(--pf-ink-2);
          margin: 0;
        }
        .rec-qa-a strong { color: var(--pf-ink); font-weight: 600; }
      `}</style>

      <div>

        <div className="rec-grid">
          {/* Cosmos Institute */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/cosmos-institute.svg" alt="Cosmos Institute" />
              </div>
            </div>
            <div className="rec-tag">Cosmos Institute · Grants Review</div>
            <h3 className="rec-name">They Ranked It First in the Cycle, Then Told Me Why They Still Wouldn’t Fund It</h3>
            <p className="rec-body">
              I applied to a Cosmos Institute grant round and got back two things in the same email. My
              application had ranked highest in the cycle, and it was in completely the wrong round —
              that one funded philosophical work on AI, and ORMAS is an architecture. No money, and an
              instruction to come back when they open a technical track. A ranking with a reason attached
              is worth more to me than the grant would have been.
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
          <h3 className="rec-name">I Hit Submit. Twelve Hours Later I Had a Call Booked With Nick Sopuch.</h3>

          <div className="rec-clock">
            <div className="rec-clock-step">
              <span className="rec-clock-k">Application</span>
              <span className="rec-clock-v">Submitted cold</span>
            </div>
            <div className="rec-clock-gap">
              <span className="rec-clock-line" />
              <span className="rec-clock-num">12 hrs</span>
              <span className="rec-clock-line" />
            </div>
            <div className="rec-clock-step is-end">
              <span className="rec-clock-k">Response</span>
              <span className="rec-clock-v">Call booked with Nick Sopuch</span>
            </div>
          </div>

          <p className="rec-body">
            No introduction, no warm path, nobody vouching for me. A cold application out of Dhaka into one of the
            most aggressive sourcing operations in European venture. <strong>Twelve hours later their talent team
            came back to put a call in the diary.</strong> It was with <strong>Nick Sopuch</strong>, who runs one of
            EF&apos;s investment teams and their San Francisco bridge programme, scouts for Ada Ventures, and is Head
            of Operations at Axiom Therapeutics. Halfway through he reached for a comparison: a founder who joined EF
            at seventeen, raised over $100M, then built a second company that turned into a unicorn inside their own
            portfolio. That was the set he was putting me in.
          </p>
          <p className="rec-body">
            Then he asked whether I was going to finish university and I hedged. Said maybe. The truth is I am
            building this either way, and hedging on a commitment question in a conversation whose entire purpose is
            reading how somebody thinks was the one thing I got wrong that day. He read it exactly right. So let me
            answer it properly here: I have already done the coursework, MITx and Coursera and fifty-five programme
            certificates of it, and if I ever go it will be for the people, not the material.
            <strong> Money changes how fast this gets built. It does not change whether it gets built.</strong>
          </p>
          <p className="rec-body">
            That call did not resolve into a yes or a no. It resolved into a longer process, and the process is
            still running — two interviews deep into The Bridge, as of the line below.
          </p>
          <div className="rec-stats">
            <div className="rec-stat">
              <span className="rec-stat-val">12 hrs</span>
              <span className="rec-stat-lbl">Submit → Call Booked</span>
            </div>
            <div className="rec-stat">
              <span className="rec-stat-val">Gate 1</span>
              <span className="rec-stat-lbl">Talent Team Screen</span>
            </div>
          </div>
        </div>

        {/* ── Quiet current-status line. Deliberately understated: the people
             running this process may read this page. ────────────────────── */}
        <div className="rec-status">
          <span className="rec-status-logo">
            <img src="/assets/images/logos/the-bridge.png" alt="The Bridge" />
          </span>
          <span className="rec-status-body">
            <span className="rec-status-k">Current status</span>
            <span className="rec-status-v">
              Two interviews into the selection process for <strong>The Bridge</strong> — Entrepreneur
              First&apos;s eight-week San Francisco residency. Both rounds are behind me and the decision
              sits with EF. I&apos;ll update this page when it moves.
            </span>
            <span className="rec-stages">
              <span className="rec-stage is-done"><span className="rec-stage-dot" />Interview 1 · Done</span>
              <span className="rec-stage is-done"><span className="rec-stage-dot" />Interview 2 · Done</span>
              <span className="rec-stage is-live"><span className="rec-stage-dot" />Decision Pending</span>
            </span>
          </span>
          <span className="rec-status-d">Sep 2026</span>
        </div>

        {/* ── What this actually adds up to ──────────────────────────── */}
        <div className="rec-verdict">
          <p className="rec-verdict-lead">
            Neither of these is a credential and I am not going to dress them up as one. They are still the two
            most useful outside signals I have.
          </p>
          <p className="rec-verdict-body">
            <strong>Cosmos read the work.</strong> Ranked it first, then told me precisely why it still would not
            get funded. A ranking with a reason attached is the single most useful thing a reviewer can give you,
            and it supports exactly one claim, narrowly: <strong>when people qualified to judge this actually read
            it, it holds up.</strong>
          </p>
          <p className="rec-verdict-body">
            <strong>EF read me.</strong> Fifteen minutes, by design, weighted towards how I think rather than what
            I have built. It produced no verdict at all — it produced a longer process, which is where it still
            sits. Both of these happened in a field where a PhD is the baseline and an eighteen-year-old without one
            is not, and neither organisation marked the work down for coming out of Dhaka.
          </p>
          <p className="rec-verdict-body">
            Now what they do not establish. No funding, no offer, no advisor. An open process is not an
            outcome and I am not going to write it up as one. Cosmos is a remote grant and EF admits
            internationally on purpose, so neither tells you anything about the filters that are actually
            bound to geography. Two results weighted accurately beat one result inflated, and that
            weighting is the reason you should believe the rest of this page.
          </p>
        </div>
      </div>
    </CVSection>
  );
}
