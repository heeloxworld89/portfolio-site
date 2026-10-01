import Icon from '@/components/common/Icon';
import CVSection from './CVSection';
export default function CVRecognition() {
  return (
    <CVSection
      id="recognition"
      phase="now"
      eyebrow="Recognition · 2026"
      title={<>Ten independent selections in 2026, at <span className="age">18</span>.</>}
      lead={
        <>
          Rokib Al Dhin Raadh earned ten independent selections in 2026, all from cold applications, across
          peer review, AI conferences and venture. In research: DeepMath 2026 accepted his stability result
          after double-blind review, NeurIPS 2026 made him a reviewer for its Trustworthy AI for Good workshop,
          Cosmos Institute ranked the work highest in its grant cycle, IARCO 2026 named him a finalist, and
          Cohere Labs admitted him to its Open Science Community. In venture: Freshmango and 1752vc Ignite (top
          1%) offered OXIEDO places, Onstage invited him to its W26 pre-pitch event (demo-day decision pending), Entrepreneur First interviewed
          him in London, and The Bridge in San Francisco is holding him in its final round.
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
        .rec-logo-chip.on-ink { background: #0b2a5b; border: 1px solid #0b2a5b; }
        .rec-logo-chip.on-ink img { height: 44px; max-width: 200px; }
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
          display: grid; grid-template-columns: repeat(5, 1fr);
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

        /* Application → first-round call */
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

        /* ── Live diary. The section's newest layer: what is actually in the
             calendar this week, sitting above the three-month record. ───── */
        .rec-week {
          border: 1px solid var(--pf-border-2);
          border-top: 3px solid var(--pf-accent);
          border-radius: 10px;
          overflow: hidden;
          background: var(--pf-surface);
          box-shadow: var(--pf-shadow-lg);
          margin-bottom: 26px;
        }
        /* Banner head. The loudest block in the section, but the weight comes
           from the accent rule above it, the type scale and the lift — not from
           inverting the surface. The page stays one light family throughout. */
        .rec-week-banner {
          background: var(--pf-surface-2);
          border-bottom: 1px solid var(--pf-border);
          padding: 27px 30px 25px;
        }
        .rec-week-top {
          display: flex; align-items: center; justify-content: space-between;
          gap: 14px; flex-wrap: wrap; margin-bottom: 17px;
        }
        .rec-week-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10.5px; font-weight: 800; letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--pf-pos);
          background: rgba(var(--pf-pos-rgb), 0.09);
          border: 1px solid rgba(var(--pf-pos-rgb), 0.32);
          border-radius: 999px; padding: 6px 14px;
        }
        .rec-week-badge .rec-date-dot { background: var(--pf-pos); }
        .rec-week-stamp {
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--pf-ink-4);
        }
        .rec-week-t {
          font-size: 25px; font-weight: 800; letter-spacing: -0.5px;
          line-height: 1.25; color: var(--pf-ink); margin: 0 0 13px;
        }
        .rec-week-l {
          font-size: 14px; line-height: 1.75; max-width: 90ch;
          color: var(--pf-ink-2); margin: 0 0 22px;
        }
        .rec-week-l strong { color: var(--pf-ink); font-weight: 600; }

        /* Logo wall. Marks sit on light chips rather than on the band itself,
           so a dark wordmark and a light one can share a row. */
        .rec-week-wall {
          display: flex; flex-wrap: wrap; align-items: stretch; gap: 10px;
          padding-top: 21px;
          border-top: 1px solid var(--pf-border);
        }
        .rec-week-mark {
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 54px; padding: 12px 20px;
          background: var(--pf-surface);
          border: 1px solid var(--pf-border);
          border-radius: 8px;
        }
        /* Explicit height, not auto: these marks carry a viewBox with no
           intrinsic width/height, so auto resolves to zero. */
        /* Monochrome wall: one brand colour shouting next to four black marks
           reads as an ad, not a record. Colour returns on hover. */
        .rec-week-mark img {
          display: block; height: 26px; width: auto;
          max-width: 152px; object-fit: contain;
          filter: grayscale(1) contrast(1.05);
          opacity: 0.82;
          transition: filter 0.25s, opacity 0.25s;
        }
        .rec-week-mark:hover img { filter: none; opacity: 1; }
        /* EF's orange desaturates to a mid grey, which reads lighter than the
           black marks beside it — pulled down to match their weight. */
        .rec-week-mark.is-bright img { filter: grayscale(1) brightness(0.4) contrast(1.05); }
        /* EF's lockup is ~14:1 — sized by width so it reads at the same
           optical weight as the squarer marks beside it. */
        .rec-week-mark.is-wide img { height: 13px; max-width: 184px; }
        .rec-week-mark.is-type {
          font-size: 15.5px; font-weight: 800; letter-spacing: -0.2px;
          color: var(--pf-ink);
        }

        .rec-week-row {
          display: grid;
          grid-template-columns: 126px minmax(0, 1fr) auto;
          gap: 18px; align-items: baseline;
          padding: 17px 26px;
          border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.055);
        }
        .rec-week-row:last-of-type { border-bottom: none; }
        .rec-week-when { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .rec-week-d {
          font-size: 11.5px; font-weight: 800; letter-spacing: 1.1px;
          text-transform: uppercase; color: var(--pf-ink);
        }
        .rec-week-h {
          font-size: 11px; font-weight: 600; letter-spacing: 0.4px; color: var(--pf-ink-4);
        }
        .rec-week-body { display: block; min-width: 0; }
        .rec-week-who {
          display: block;
          font-size: 14.5px; font-weight: 700; color: var(--pf-ink);
          line-height: 1.35; margin-bottom: 5px;
        }
        .rec-week-what { display: block; font-size: 13px; line-height: 1.7; color: var(--pf-ink-2); }
        .rec-week-what strong { color: var(--pf-ink); font-weight: 600; }
        .rec-week-pill {
          display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;
          font-size: 9.5px; font-weight: 800; letter-spacing: 1.2px;
          text-transform: uppercase; white-space: nowrap;
          border-radius: 999px; padding: 5px 11px;
          color: var(--pf-ink-2); background: var(--pf-surface-2);
          border: 1px solid var(--pf-border);
        }
        .rec-week-pill.is-now {
          color: var(--pf-pos);
          background: rgba(var(--pf-pos-rgb), 0.08);
          border-color: rgba(var(--pf-pos-rgb), 0.32);
        }
        .rec-week-foot {
          padding: 13px 26px;
          border-top: 1px solid var(--pf-border);
          background: rgba(var(--pf-ink-rgb), 0.025);
          font-size: 11px; font-weight: 600; letter-spacing: 0.4px;
          color: var(--pf-ink-4);
        }
        @media (max-width: 700px) {
          /* A 190px mark plus the date pill overruns a 390px card, so the
             chips step down rather than pushing the row wide. */
          .rec-logo-row { flex-wrap: wrap; gap: 10px; }
          .rec-logo-chip { min-height: 46px; padding: 10px 14px; }
          .rec-logo-chip img { height: 24px; max-width: 132px; }
          .rec-status-logo { min-height: 44px; padding: 9px 13px; }
          .rec-status-logo img { height: 22px; max-width: 124px; }

          .rec-week-banner { padding: 22px 18px 20px; }
          .rec-week-t { font-size: 21px; }
          .rec-week-mark { min-height: 46px; padding: 10px 15px; }
          .rec-week-mark img { height: 21px; max-width: 118px; }
          .rec-week-mark.is-wide img { height: 11px; max-width: 152px; }
          .rec-week-mark.is-type { font-size: 13.5px; }
          .rec-week-row {
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 9px 14px; padding: 16px 18px;
          }
          /* Date and status share the top line; the entry sits under both,
             so the title never has to wrap around the pill. */
          .rec-week-when {
            grid-column: 1; grid-row: 1;
            flex-direction: row; align-items: baseline; gap: 9px;
          }
          .rec-week-pill { grid-column: 2; grid-row: 1; justify-self: end; }
          .rec-week-body { grid-column: 1 / -1; grid-row: 2; }
          .rec-week-foot { padding: 12px 18px; }
        }
      `}</style>

      <div>

        {/* ── The diary. Runs above the three-month record because it is the
             more current layer: these are live, dated, and named. ──────── */}
        <div className="rec-label">Latest decision</div>
        <div className="rec-week">
          <div className="rec-week-banner">
            <div className="rec-week-top">
              <span className="rec-week-badge">
                <span className="rec-date-dot" aria-hidden="true" />
                Accepted
              </span>
              <span className="rec-week-stamp">30 Sep 2026</span>
            </div>

            <h3 className="rec-week-t">
              Stability result accepted at DeepMath 2026.
            </h3>
            <p className="rec-week-l">
              <strong>DeepMath</strong> is the Conference on the Mathematical Theory of Deep Neural Networks,
              this year hosted by <strong>Ohio State University</strong> in Columbus on 29&ndash;30 October, with an
              organising committee drawn from Johns Hopkins, Michigan and Ohio State. It takes theory only, and
              reviews it <strong>double-blind</strong>, so reviewers assessed the work without knowledge of
              his background. The paper, <em>&ldquo;Self-Repair as a Bounded Disturbance: Input-to-State
              Stability of Neural Network Training Dynamics&rdquo;</em>, was accepted for poster presentation.
              It formalises the stability guarantee underlying ORMAS. The 2026 invited speakers come from Stanford,
              Michigan, UPenn and the University of Washington, and past editions have been supported by the
              National Science Foundation and the Simons Foundation. DeepMath does not publish proceedings.
            </p>
            <p className="rec-week-l">
              Two further decisions are pending: <strong>Onstage</strong> is ranking its W26 cohort by interest
              from 350 venture funds, and <strong>The Bridge</strong> is holding him in its final round.
            </p>

            <div className="rec-week-wall">
              <span className="rec-week-mark is-type">DeepMath 2026</span>
              <span className="rec-week-mark is-type">Ohio State University</span>
              <span className="rec-week-mark is-wide is-bright">
                <img src="/assets/images/logos/entrepreneur-first.svg" alt="Entrepreneur First" />
              </span>
              <span className="rec-week-mark is-type">Onstage</span>
            </div>
          </div>

          {[
            {
              d: '30 Sep',
              h: 'Columbus, Ohio',
              who: 'DeepMath 2026 \u00b7 Mathematical Theory of Deep Neural Networks',
              what: <><strong>Accept (Poster)</strong> after double-blind review. The input-to-state stability result behind ORMAS, presented at Ohio State on 29&ndash;30 October.</>,
              pill: 'Accepted',
              now: true,
            },
            {
              d: 'W26 cohort',
              h: 'Top 100 pending',
              who: 'Onstage \u00b7 W26 Demo Day',
              what: <><strong>Invited to the pre-pitch event</strong> in Central London; the W26 demo-day decision is still pending. Onstage ranks applicants by interest from <strong>350 VC partners</strong>, including a16z, Sequoia, Balderton and LocalGlobe.</>,
              pill: 'Pending',
              now: false,
            },
            {
              d: 'Since Sep',
              h: 'San Francisco',
              who: 'Entrepreneur First \u00b7 The Bridge',
              what: <>Two interview rounds completed; holding in the final round. Details below.</>,
              pill: 'Holding',
              now: false,
            },
          ].map((r) => (
            <div className="rec-week-row" key={r.who}>
              <span className="rec-week-when">
                <span className="rec-week-d">{r.d}</span>
                <span className="rec-week-h">{r.h}</span>
              </span>
              <span className="rec-week-body">
                <span className="rec-week-who">{r.who}</span>
                <span className="rec-week-what">{r.what}</span>
              </span>
              <span className={`rec-week-pill${r.now ? ' is-now' : ''}`}>
                {r.now ? <span className="rec-date-dot" aria-hidden="true" /> : null}
                {r.pill}
              </span>
            </div>
          ))}

          <div className="rec-week-foot">
            Status as of 30 September 2026
          </div>
        </div>

        <div className="rec-label">2026, month by month</div>
        <div className="rec-run">
          {[
            { m: 'Jul', y: '2026', who: 'Cosmos Institute', what: 'Ranked highest in cycle', state: 'done' },
            { m: 'Aug', y: '2026', who: 'Entrepreneur First', what: 'Cold application → first-round call', state: 'done' },
            { m: 'Sep', y: '2026', who: 'DeepMath · Freshmango · 1752vc · IARCO · Cohere Labs', what: 'Peer-reviewed acceptance, two accelerator places, a research-competition final, Cohere Labs membership.', state: 'live' },
            { m: 'Oct', y: '2026', who: 'DeepMath 2026', what: 'Poster, Ohio State, Columbus', state: 'ahead' },
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

        <div className="rec-label">The selections</div>
        <div className="rec-grid">
          {/* NeurIPS — AI4GOOD workshop reviewer */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/neurips.svg" alt="NeurIPS" />
              </div>
              <span className="rec-date">Dec 2026</span>
            </div>
            <div className="rec-tag">NeurIPS 2026 · AI4GOOD Workshop · Reviewer</div>
            <h3 className="rec-name">Reviewer, NeurIPS 2026 Trustworthy AI for Good Workshop</h3>
            <p className="rec-body">
              Raadh is a reviewer for <strong>Trustworthy AI for Good</strong> at NeurIPS
              2026 in Paris, reviewing submitted papers on mechanistic interpretability, attribution, auditing and
              post-deployment monitoring. The ICML edition of this workshop took <strong>539 submissions and accepted 34%</strong>,
              assessed by a committee of 237 reviewers drawn from Oxford, MIT, Toronto, Berkeley, Stanford
              and Mila.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">237</span>
                <span className="rec-stat-lbl">Reviewers on the committee</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">34%</span>
                <span className="rec-stat-lbl">Acceptance rate, ICML edition</span>
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
            <h3 className="rec-name">Ranked Highest in the Cosmos Institute Grant Cycle</h3>
            <p className="rec-body">
              Cosmos Institute ranked the ORMAS application highest in its grant cycle. The round funded
              philosophical work on AI rather than technical architectures, so no award was made; Cosmos
              invited Raadh to reapply when it opens a technical track.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">Highest</span>
                <span className="rec-stat-lbl">Rank in the cycle</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">Invited</span>
                <span className="rec-stat-lbl">To reapply, technical track</span>
              </div>
            </div>
          </div>

        </div>

        {/* September's two outcomes. Both are decided, so they sit in the record
            rather than in the live diary above. */}
        <div className="rec-grid">

          {/* Freshmango — accepted, equity-free, unsigned by choice */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/freshmango.png" alt="Freshmango" />
              </div>
              <span className="rec-date">Sep 2026</span>
            </div>
            <div className="rec-tag">Freshmango &middot; Equity-Free Accelerator &middot; Accepted</div>
            <h3 className="rec-name">Accepted to Freshmango, the Equity-Free Accelerator</h3>
            <p className="rec-body">
              On 22 September Freshmango offered OXIEDO a place in its equity-free programme after a single
              interview: access to a <strong>5,000-founder network</strong>, <strong>$4M in AI credits</strong>{' '}
              and introductions across <strong>160 venture funds</strong>, with no equity or fees.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">0%</span>
                <span className="rec-stat-lbl">Equity taken</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">$4M</span>
                <span className="rec-stat-lbl">In AI credits</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">160</span>
                <span className="rec-stat-lbl">Venture funds</span>
              </div>
            </div>
          </div>

          {/* 1752vc — accepted, then declined */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/1752vc.png" alt="1752vc" />
              </div>
              <span className="rec-date">Sep 2026</span>
            </div>
            <div className="rec-tag">1752vc &middot; Ignite &middot; Accepted</div>
            <h3 className="rec-name">Accepted to 1752vc Ignite from the Top 1% of Applicants</h3>
            <p className="rec-body">
              1752vc placed the application in the top 5% of its intake, then held a final round to select
              the <strong>top 1%</strong>. OXIEDO was offered a place in the limited <strong>Ignite</strong>{' '}
              cohort, chosen from <strong>thousands of applications</strong> across three stages.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">Top 1%</span>
                <span className="rec-stat-lbl">Final-round selection</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">Accepted</span>
                <span className="rec-stat-lbl">Ignite cohort</span>
              </div>
            </div>
          </div>

        </div>

        {/* September, continued: a research competition final and a research
            community. Both decided, so both sit in the record. */}
        <div className="rec-grid">

          {/* IARCO 2026 — advanced to the final stage */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-ink">
                <img src="/assets/images/logos/iarco.png" alt="IARCO — International Academic Research Competition" />
              </div>
              <span className="rec-date">Sep 2026</span>
            </div>
            <div className="rec-tag">IARCO 2026 &middot; International Academic Research Competition &middot; Final Round</div>
            <h3 className="rec-name">Finalist, IARCO 2026 International Academic Research Competition</h3>
            <p className="rec-body">
              The International Academic Research Competition is hosted by YRJ, sponsored by
              {' '}<strong>SaveMyExams</strong> with <strong>Domain.ME</strong>, and this year drew
              {' '}<strong>more than 500 submissions from over 60 countries</strong>. Only <strong>30%</strong> of
              participants advanced. ORMAS was selected for the final stage, a recorded research presentation.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">500+</span>
                <span className="rec-stat-lbl">Submissions</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">60+</span>
                <span className="rec-stat-lbl">Countries</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">30%</span>
                <span className="rec-stat-lbl">Selected for the final</span>
              </div>
            </div>
          </div>

          {/* Cohere Labs — Open Science Community membership */}
          <div className="rec-card">
            <div className="rec-logo-row">
              <div className="rec-logo-chip on-white">
                <img src="/assets/images/logos/cohere.svg" alt="Cohere Labs" />
              </div>
              <span className="rec-date">Sep 2026</span>
            </div>
            <div className="rec-tag">Cohere Labs &middot; Open Science Community &middot; Member</div>
            <h3 className="rec-name">Member, Cohere Labs Open Science Community</h3>
            <p className="rec-body">
              Cohere Labs is the research lab of <strong>Cohere</strong>, one of the leading foundation-model
              companies. On 25 September it welcomed Raadh into its <strong>Open Science Community</strong>, noting
              that the solo development of ORMAS across 383 controlled experiments
              {' '}<strong>&ldquo;demonstrates remarkable initiative in ML safety and auditability.&rdquo;</strong>{' '}
              The lab pointed to its <strong>BIRDS</strong> and <strong>Safety &amp; Alignment</strong>
              {' '}programmes as a route to extending the architecture to a transformer backbone.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">Member</span>
                <span className="rec-stat-lbl">Open Science Community</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">ORMAS</span>
                <span className="rec-stat-lbl">Cited in the welcome</span>
              </div>
            </div>
          </div>

        </div>

        {/* Antler Australia — in the programme process; cancelled because participation
            needs an Australian work permit. A logistics boundary, not an assessment. */}
        <div className="rec-label">Other processes</div>
        <div className="rec-grid is-pair">
        <div className="rec-card rec-secondary">
          <div className="rec-logo-row">
            <div className="rec-logo-chip on-white">
              <img src="/assets/images/logos/antler.svg" alt="Antler Australia" />
            </div>
            <span className="rec-date">Sep 2026</span>
          </div>
          <div className="rec-tag">Antler Australia &middot; Programme Process &middot; Work Permit</div>
          <h3 className="rec-name">Antler Australia: Programme Process Cancelled Over Work-Permit Logistics</h3>
          <p className="rec-body">
            Raadh was <strong>in the programme process</strong> with Antler Australia, part of Antler, one of the largest early-stage
            investment programmes in the world. Taking part required an Australian work permit he does not yet
            hold, so the process was cancelled for logistical reasons, not on the merits of the work.
          </p>
          <div className="rec-stats">
            <div className="rec-stat">
              <span className="rec-stat-val">In process</span>
              <span className="rec-stat-lbl">Antler Australia programme</span>
            </div>
            <div className="rec-stat">
              <span className="rec-stat-val">Work permit</span>
              <span className="rec-stat-lbl">Why it was cancelled</span>
            </div>
          </div>
        </div>

        {/* Entrepreneur First — deliberately secondary: a screen, not a read */}
        <div className="rec-card rec-secondary">
          <div className="rec-logo-row">
            <div className="rec-logo-chip on-dark">
              <img src="/assets/images/logos/entrepreneur-first.svg" alt="Entrepreneur First" />
            </div>
            <span className="rec-date">Aug 2026</span>
          </div>
          <div className="rec-tag">Entrepreneur First · London · First Screen</div>
          <h3 className="rec-name">Entrepreneur First: First-Round Interview, London</h3>

          <div className="rec-clock">
            <div className="rec-clock-step">
              <span className="rec-clock-k">Application</span>
              <span className="rec-clock-v">Submitted cold</span>
            </div>
            <div className="rec-clock-gap">
              <span className="rec-clock-line" />
              <span className="rec-clock-num">Gate 1</span>
              <span className="rec-clock-line" />
            </div>
            <div className="rec-clock-step is-end">
              <span className="rec-clock-k">Response</span>
              <span className="rec-clock-v">First-round call booked</span>
            </div>
          </div>

          <p className="rec-body">
            An unsolicited application to one of European venture&apos;s most selective sourcing programmes led
            EF&apos;s talent team to invite Raadh to a first-round interview.
          </p>
          <p className="rec-body">
            EF&apos;s first screen assesses how a founder thinks rather than the idea itself. The conversation
            covered why interpretability is an architecture problem rather than a tooling one, and where ORMAS
            goes next.
          </p>
          <p className="rec-body">
            It led to The Bridge, below.
          </p>
          <div className="rec-stats">
            <div className="rec-stat">
              <span className="rec-stat-val">Cold</span>
              <span className="rec-stat-lbl">Unsolicited application</span>
            </div>
            <div className="rec-stat">
              <span className="rec-stat-val">15 min</span>
              <span className="rec-stat-lbl">First-round interview</span>
            </div>
          </div>
        </div>
        </div>

        <div className="rec-label">In the final round</div>
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
              Sep 2026 · Holding in Final Round
            </span>
          </div>

          <p className="rec-status-v">
            The Bridge is Entrepreneur First&apos;s <strong>eight-week residency in San Francisco</strong>,
            where they place a small cohort of technical founders alongside the US investor and operator
            network, and back those who come through it with company-building capital. It is EF&apos;s route
            for founders who have already built something.
          </p>
          <p className="rec-status-v">
            Raadh has <strong>completed two interview rounds</strong> and is <strong>holding in the final round</strong>.
          </p>

          <span className="rec-stages">
            <span className="rec-stage is-done"><span className="rec-stage-dot" />Interview 1 · Done</span>
            <span className="rec-stage is-done"><span className="rec-stage-dot" />Interview 2 · Done</span>
            <span className="rec-stage is-live"><span className="rec-stage-dot" />Holding · Final Round</span>
          </span>
        </div>

        <div className="rec-label">What it adds up to</div>
        {/* ── What this actually adds up to ──────────────────────────── */}
        <div className="rec-verdict">
          <p className="rec-verdict-lead">
            What the 2026 record establishes, and what it does not.
          </p>
          <p className="rec-verdict-body">
            <strong>Peer review.</strong> DeepMath 2026 accepted the ORMAS stability result after double-blind
            review by specialists in deep-learning theory. It is a poster acceptance; the conference publishes no
            proceedings.
          </p>
          <p className="rec-verdict-body">
            <strong>Standing in the field.</strong> NeurIPS 2026 brought Raadh in as a reviewer for
            the Trustworthy AI for Good workshop, reviewing papers in interpretability and model auditing, the
            area his own research addresses.
          </p>
          <p className="rec-verdict-body">
            <strong>Independent assessment.</strong> Cosmos Institute ranked the work highest in its cycle.
            Freshmango and 1752vc each offered places after competitive selection, Antler Australia&rsquo;s programme
            process was cancelled only over an Australian work permit, and The Bridge in San Francisco is holding him in its final round. Every one began as an unsolicited application.
          </p>
          <p className="rec-verdict-body">
            <strong>Not yet established.</strong> OXIEDO has raised no outside capital, and no accelerator
            agreement has been signed. Those remain open.
          </p>
        </div>

        {/* ── Every claim above has a route to check it ─────────────── */}
        <div className="rec-verify">
          <span className="rec-verify-body">
            <span className="rec-verify-k">Made to be checked</span>
            <span className="rec-verify-t">
              Each item above has a named source and a date: the Cosmos correspondence, the NeurIPS reviewer assignment, the
              EF stage records, the Companies House filings. Documentation is available on request, and every claim is listed with its source on the <a href="/evidence">Evidence page</a>.
            </span>
          </span>
          <a
            className="rec-verify-cta"
            href="mailto:raadh@oxiedo.com?subject=Verifying%20a%20claim%20on%20raadh.me"
          >
            <Icon name="mail" size={14} />
            Request documentation
          </a>
        </div>

      </div>
    </CVSection>
  );
}
