import Icon from '@/components/common/Icon';
import CVSection from './CVSection';
export default function CVRecognition() {
  return (
    <CVSection
      id="recognition"
      phase="now"
      eyebrow="Recent · Jul – Dec 2026"
      title="All of this happened in the last three months."
      lead={
        <>
          July: Cosmos ranked the work highest in their cycle. August: Entrepreneur First went from cold
          application to a booked call in twelve hours. September: two rounds into The Bridge in San
          Francisco. December: I review for a NeurIPS workshop in Paris.{' '}
          <strong>None of it was asked for, and none of it has stopped.</strong> Here is what each one
          proves — and, because it matters more, what it doesn&apos;t.
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
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
        }
        /* Date stamp — same treatment on every entry, so the section reads
           as a dated record rather than a set of unrelated claims. */
        .rec-date {
          display: inline-flex; align-items: center; gap: 7px; flex-shrink: 0;
          font-size: 10.5px; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--pf-ink-3);
          background: var(--pf-surface-2);
          border: 1px solid var(--pf-border);
          border-radius: 999px; padding: 6px 13px;
        }
        .rec-date svg { opacity: 0.6; }
        .rec-date.is-live {
          color: var(--pf-pos);
          background: rgba(var(--pf-pos-rgb), 0.08);
          border-color: rgba(var(--pf-pos-rgb), 0.32);
        }
        .rec-date-dot {
          width: 6px; height: 6px; border-radius: 50%; background: currentColor;
          animation: recLive 2.2s ease-in-out infinite;
        }
        @keyframes recLive {
          0%, 100% { opacity: 1;   box-shadow: 0 0 0 0 rgba(var(--pf-pos-rgb), 0.45); }
          70%      { opacity: 0.5; box-shadow: 0 0 0 6px rgba(var(--pf-pos-rgb), 0); }
        }
        @media (prefers-reduced-motion: reduce) { .rec-date-dot { animation: none; } }
        .rec-logo-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 58px;
          padding: 12px 20px;
          border-radius: 8px;
        }
        .rec-logo-chip.on-white,
        .rec-logo-chip.on-dark {
          background: var(--pf-surface-2);
          border: 1px solid var(--pf-border);
        }
        .rec-logo-chip img { display: block; height: 34px; width: auto; max-width: 190px; object-fit: contain; }
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
        @media (max-width: 900px) { .rec-grid { grid-template-columns: 1fr !important; } }
        /* Run of months — the section's argument is momentum, so show it
           before any of the individual entries. */
        .rec-run {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: var(--pf-border);
          border: 1px solid var(--pf-border);
          border-radius: 10px; overflow: hidden; margin-bottom: 26px;
        }
        @media (max-width: 860px) { .rec-run { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 460px) { .rec-run { grid-template-columns: 1fr; } }
        .rec-run-cell { background: var(--pf-surface); padding: 15px 17px; }
        .rec-run-cell.is-live { background: rgba(var(--pf-pos-rgb), 0.05); }
        .rec-run-cell.is-ahead { background: var(--pf-surface-2); }
        .rec-run-m {
          display: flex; align-items: center; gap: 7px;
          font-size: 14px; font-weight: 800; letter-spacing: -0.2px;
          color: var(--pf-ink); margin-bottom: 6px;
        }
        .rec-run-m span { font-size: 11px; font-weight: 700; color: var(--pf-ink-4); letter-spacing: 0.5px; }
        .rec-run-cell.is-live .rec-run-m { color: var(--pf-pos); }
        .rec-run-who { font-size: 12.5px; font-weight: 700; color: var(--pf-ink-2); margin-bottom: 3px; }
        .rec-run-what { font-size: 11.5px; line-height: 1.5; color: var(--pf-ink-3); }

        .rec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
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
        .rec-status-head {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .rec-status-meta { display: flex; flex-direction: column; gap: 3px; flex: 1; min-width: 200px; }
        .rec-status-t { font-size: 18px; font-weight: 800; color: var(--pf-ink); letter-spacing: -0.3px; }
        .rec-status p.rec-status-v { margin: 0 0 12px; }
        .rec-status p.rec-status-v:last-of-type { margin-bottom: 16px; }

        .rec-status {
          display: block;
          background: rgba(var(--pf-ink-rgb), 0.035);
          border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-accent);
          border-radius: 0 10px 10px 0;
          padding: 24px 28px; margin-bottom: 24px;
        }
        .rec-status-logo {
          display: inline-flex; align-items: center; justify-content: center;
          flex-shrink: 0; min-height: 52px; padding: 11px 18px; border-radius: 8px;
          background: var(--pf-surface-2); border: 1px solid var(--pf-border);
        }
        .rec-status-logo img { display: block; height: 26px; width: auto; max-width: 170px; object-fit: contain; }
        .rec-status-body {
          display: flex; flex-direction: column; gap: 4px;
          flex: 1; min-width: 220px;
        }
        .rec-status-k {
          font-size: 10px; font-weight: 800; letter-spacing: 1.8px;
          text-transform: uppercase; color: var(--pf-ink-3);
        }
        .rec-status-v { font-size: 14.5px; line-height: 1.75; color: var(--pf-ink-2); }
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
        .rec-stage.is-done { color: var(--pf-ink-2); background: var(--pf-surface-2); border-color: var(--pf-border); }
        .rec-stage.is-live { color: var(--pf-pos); background: rgba(var(--pf-pos-rgb), 0.08); border-color: rgba(var(--pf-pos-rgb), 0.32); }
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
        /* Verification block — the section makes the page's largest claims,
           so it closes by handing the reader the route to check them. */
        .rec-verify {
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          background: var(--pf-surface);
          border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-accent);
          border-radius: 0 10px 10px 0;
          padding: 18px 24px;
        }
        .rec-verify-body { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 280px; }
        .rec-verify-k {
          font-size: 10px; font-weight: 800; letter-spacing: 1.8px;
          text-transform: uppercase; color: var(--pf-accent);
        }
        .rec-verify-t { font-size: 14px; line-height: 1.7; color: var(--pf-ink-2); }
        .rec-verify-t strong { color: var(--pf-ink); font-weight: 600; }
        .rec-verify-cta {
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          padding: 10px 17px; border-radius: 7px; text-decoration: none;
          font-size: 12px; font-weight: 700; letter-spacing: 0.3px;
          color: var(--pf-on-accent); background: var(--pf-accent);
          border: 1px solid var(--pf-accent); transition: background .22s;
        }
        .rec-verify-cta:hover { background: var(--pf-accent-2); color: var(--pf-on-accent); }

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

        <div className="rec-run">
          {[
            { m: 'Jul', y: '2026', who: 'Cosmos Institute', what: 'Ranked highest in cycle', state: 'done' },
            { m: 'Aug', y: '2026', who: 'Entrepreneur First', what: 'Cold application → call in 12 hrs', state: 'done' },
            { m: 'Sep', y: '2026', who: 'The Bridge · EF', what: 'Two interviews in, decision pending', state: 'live' },
            { m: 'Dec', y: '2026', who: 'NeurIPS · AI4GOOD', what: 'Reviewing, Paris', state: 'ahead' },
          ].map((r) => (
            <div className={`rec-run-cell is-${r.state}`} key={r.m}>
              <div className="rec-run-m">
                {r.state === 'live' ? <span className="rec-date-dot" aria-hidden="true" /> : null}
                {r.m} <span>{r.y}</span>
              </div>
              <div className="rec-run-who">{r.who}</div>
              <div className="rec-run-what">{r.what}</div>
            </div>
          ))}
        </div>

        <div className="rec-grid">
          {/* NeurIPS — AI4GOOD workshop programme committee */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/neurips.svg" alt="NeurIPS" />
              </div>
              <span className="rec-date">Dec 2026</span>
            </div>
            <div className="rec-tag">NeurIPS 2026 · AI4GOOD Workshop · Programme Committee</div>
            <h3 className="rec-name">At Eighteen, I Am on the Committee Deciding What Gets Into a NeurIPS Workshop</h3>
            <p className="rec-body">
              I sit on the programme committee of <strong>Trustworthy AI for Good</strong> at NeurIPS 2026
              in Paris, reviewing submissions on mechanistic interpretability, attribution, auditing and
              post-deployment monitoring. The same subject I work in, judged from the other side of the
              desk. The ICML edition of this workshop took <strong>539 submissions and accepted 34%</strong>,
              assessed by a committee of 237 reviewers drawn from Oxford, MIT, Toronto, Berkeley, Stanford
              and Mila.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">237</span>
                <span className="rec-stat-lbl">On a committee of this size</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">34%</span>
                <span className="rec-stat-lbl">Acceptance rate I help set</span>
              </div>
            </div>
          </div>

          {/* Cosmos Institute */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/cosmos-institute.svg" alt="Cosmos Institute" />
              </div>
              <span className="rec-date">Jul 2026</span>
            </div>
            <div className="rec-tag">Cosmos Institute · Grants Review</div>
            <h3 className="rec-name">They Ranked It Highest in the Cycle, Then Told Me Why They Still Wouldn’t Fund It</h3>
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
                <span className="rec-stat-lbl">Ranked, of that cycle</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">$0</span>
                <span className="rec-stat-lbl">Right score, wrong round</span>
              </div>
            </div>
          </div>

        </div>

        {/* Entrepreneur First — deliberately secondary: a screen, not a read */}
        <div className="rec-secondary">
          <div className="rec-logo-row">
            <div className="rec-logo-chip on-dark">
              <img src="/assets/images/logos/entrepreneur-first.svg" alt="Entrepreneur First" />
            </div>
            <span className="rec-date">Aug 2026</span>
          </div>
          <div className="rec-tag">Entrepreneur First · London · First Screen</div>
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
            Fifteen minutes, by design. EF are explicit that a first screen is not about the idea — it is about how
            somebody thinks. We covered why the black box is an architecture problem rather than a tooling one, the
            three signals, and where I want to take it. He asked whether I planned to finish university, and the
            answer I gave him is the one on this page: I have already done the coursework, MITx and Coursera and
            fifty-five programme certificates of it, and if I ever go it will be for the people rather than the
            material. <strong>Money changes how fast this gets built. It does not change whether it gets
            built.</strong>
          </p>
          <p className="rec-body">
            It was a first conversation and it did what a first conversation does. The one below is where it went
            next.
          </p>
          <div className="rec-stats">
            <div className="rec-stat">
              <span className="rec-stat-val">12 hrs</span>
              <span className="rec-stat-lbl">Cold submit to booked call</span>
            </div>
            <div className="rec-stat">
              <span className="rec-stat-val">15 min</span>
              <span className="rec-stat-lbl">To decide how I think</span>
            </div>
          </div>
        </div>

        {/* ── Quiet current-status line. Deliberately understated: the people
             running this process may read this page. ────────────────────── */}
        <div className="rec-status">
          <div className="rec-status-head">
            <span className="rec-status-logo">
              <img src="/assets/images/logos/the-bridge.png" alt="The Bridge" />
            </span>
            <span className="rec-status-meta">
              <span className="rec-status-k">Entrepreneur First</span>
              <span className="rec-status-t">The Bridge — San Francisco</span>
            </span>
            <span className="rec-date is-live">
              <span className="rec-date-dot" aria-hidden="true" />
              Sep 2026 · In Progress
            </span>
          </div>

          <p className="rec-status-v">
            The Bridge is Entrepreneur First&apos;s <strong>eight-week residency in San Francisco</strong>,
            where they place a small cohort of technical founders alongside the US investor and operator
            network and back the ones who come out of it with company-building capital. It is the route EF
            runs for founders who already have something built rather than an idea to test.
          </p>
          <p className="rec-status-v">
            This one is happening right now. <strong>Two interview rounds are behind me</strong>, EF have the
            decision, and nothing has come back yet. That is the whole of it as of September 2026 — this
            line gets updated the day it moves.
          </p>

          <span className="rec-stages">
            <span className="rec-stage is-done"><span className="rec-stage-dot" />Interview 1 · Done</span>
            <span className="rec-stage is-done"><span className="rec-stage-dot" />Interview 2 · Done</span>
            <span className="rec-stage is-live"><span className="rec-stage-dot" />Decision Pending</span>
          </span>
        </div>

        {/* ── What this actually adds up to ──────────────────────────── */}
        <div className="rec-verdict">
          <p className="rec-verdict-lead">
            None of these is a degree, and I am not going to dress them up as one. They are still the three
            most useful outside signals I have.
          </p>
          <p className="rec-verdict-body">
            <strong>NeurIPS put me on a programme committee.</strong> That is the one I would point a
            researcher at. It is not a paper and it is not an award — it is the field deciding I am
            qualified to judge other people&apos;s work in the exact area I publish in, which is a
            different kind of statement from anything I could write about myself.
          </p>
          <p className="rec-verdict-body">
            <strong>Cosmos read the work.</strong> Ranked it highest, then told me precisely why it still would not
            get funded. A ranking with a reason attached is the single most useful thing a reviewer can give you,
            and it supports exactly one claim, narrowly: <strong>when people qualified to judge this read it
            properly, it holds up.</strong>
          </p>
          <p className="rec-verdict-body">
            <strong>EF read me.</strong> Fifteen minutes in London in August, weighted towards how I think rather
            than what I have built, and it opened a conversation that is still going — two rounds into The Bridge
            in September. All of this happened in a field where a PhD is the baseline and an eighteen-year-old
            without one is not, and nobody marked the work down for coming out of Dhaka.
          </p>
          <p className="rec-verdict-body">
            Now what they do not establish. No funding, no offer, no advisor. An open process is not an
            outcome and I am not going to write it up as one. Cosmos is a remote grant and EF admits
            internationally on purpose, so neither tells you anything about the filters that are actually
            bound to geography. Two results weighted accurately beat one result inflated, and that
            weighting is the reason you should believe the rest of this page.
          </p>
        </div>

        {/* ── Every claim above has a route to check it ─────────────── */}
        <div className="rec-verify">
          <span className="rec-verify-body">
            <span className="rec-verify-k">Made to be checked</span>
            <span className="rec-verify-t">
              Every claim here has a name, a date and someone other than me who can confirm it — the Cosmos
              email, the committee list, the EF stage, the Companies House filings.{' '}
              <strong>Ask and I will send them, including the parts that do not flatter me.</strong>
            </span>
          </span>
          <a
            className="rec-verify-cta"
            href="mailto:raadxbusiness9@gmail.com?subject=Verifying%20a%20claim%20on%20raadh.me"
          >
            <Icon name="mail" size={14} />
            Ask me to prove it
          </a>
        </div>

      </div>
    </CVSection>
  );
}
