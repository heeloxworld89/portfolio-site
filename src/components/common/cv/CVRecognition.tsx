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
          application to a booked call in twelve hours. September: accepted by two accelerators in
          one week, and two rounds into The Bridge in San Francisco. December: I review for a NeurIPS workshop in Paris.{' '}
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
        <div className="rec-week">
          <div className="rec-week-banner">
            <div className="rec-week-top">
              <span className="rec-week-badge">
                <span className="rec-date-dot" aria-hidden="true" />
                Ongoing
              </span>
              <span className="rec-week-stamp">Week of 22 Sep 2026</span>
            </div>

            <h3 className="rec-week-t">
              Three processes are live, and one of them interviews me at five in the morning.
            </h3>
            <p className="rec-week-l">
              <strong>Antler</strong> interview me on Wednesday at five in the morning Dhaka time,
              because that is when London is awake. <strong>Onstage</strong> are ranking me for the W26
              cohort against 350 venture funds. <strong>Entrepreneur First</strong> are sitting on a
              Bridge decision. Two acceptances landed this week as well, recorded below. Not one of
              these came from an introduction &mdash; every one
              started as a cold application from Dhaka, written by an eighteen-year-old.
            </p>

            <div className="rec-week-wall">
              <span className="rec-week-mark">
                <img src="/assets/images/logos/antler.svg" alt="Antler" />
              </span>
              <span className="rec-week-mark is-wide is-bright">
                <img src="/assets/images/logos/entrepreneur-first.svg" alt="Entrepreneur First" />
              </span>
              <span className="rec-week-mark is-type">Onstage</span>
            </div>
          </div>

          {[
            {
              d: 'Wed 23 Sep',
              h: '05:00 Dhaka',
              who: 'Antler \u2014 first interview',
              what: <>The investment-process interview for <strong>Antler&rsquo;s Residency</strong>, with Stefan Knight. Their scouting team read the application and put it in the diary.</>,
              pill: 'Tomorrow',
              now: true,
            },
            {
              d: 'W26 cohort',
              h: 'Top 100 pending',
              who: 'Onstage \u00b7 W26 Demo Day',
              what: <><strong>Invited to the pre-pitch party</strong> in Central London, and in the pool for the winter cohort. Onstage rank every application by investor interest across <strong>350 VC partners</strong> &mdash; a16z, Sequoia, Balderton, LocalGlobe &mdash; and the top 100 is named shortly.</>,
              pill: 'Pending',
              now: false,
            },
            {
              d: 'Since Sep',
              h: 'San Francisco',
              who: 'Entrepreneur First \u00b7 The Bridge',
              what: <>Two interview rounds done, decision sitting with EF. Full detail further down this page.</>,
              pill: 'Pending',
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
            Status as of 22 September 2026 &middot; this list is updated the day anything on it moves
          </div>
        </div>

        <div className="rec-run">
          {[
            { m: 'Jul', y: '2026', who: 'Cosmos Institute', what: 'Ranked highest in cycle', state: 'done' },
            { m: 'Aug', y: '2026', who: 'Entrepreneur First', what: 'Cold application → call in 12 hrs', state: 'done' },
            { m: 'Sep', y: '2026', who: 'Freshmango · 1752vc', what: 'Accepted by both, one week.', state: 'live' },
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
            <h3 className="rec-name">They Gave Me a Place, and It Costs Me No Equity and No Fee</h3>
            <p className="rec-body">
              Freshmango bill themselves as the best equity-free accelerator in the world. On 22 September
              they took twenty minutes with me and offered a place in it: a <strong>5,000-founder
              network</strong> to find a co-founder in, <strong>$4M in AI credits</strong>, and
              introductions across <strong>160 venture funds</strong> &mdash; for no equity and no fee.
              <strong> Twenty minutes was all it took them to decide</strong>, and the founder agreement
              followed the same day.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">0%</span>
                <span className="rec-stat-lbl">Equity they take</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">$4M</span>
                <span className="rec-stat-lbl">In AI credits</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">160</span>
                <span className="rec-stat-lbl">Funds on the list</span>
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
            <h3 className="rec-name">Accepted Into Ignite, Out of Thousands of Applications</h3>
            <p className="rec-body">
              1752vc put the application in the <strong>top 5% of everyone who applied</strong>, ran a
              final round, and came back with a place in their <strong>Ignite</strong> cohort. They run
              limited cohorts on purpose, and in their own words the offer came{' '}
              <strong>after thousands of applications</strong>. Three stages, no introduction behind any
              of them, and a cold submission out of Dhaka at the front of it.
            </p>
            <div className="rec-stats">
              <div className="rec-stat">
                <span className="rec-stat-val">Top 5%</span>
                <span className="rec-stat-lbl">Of every applicant</span>
              </div>
              <div className="rec-stat">
                <span className="rec-stat-val">Accepted</span>
                <span className="rec-stat-lbl">Into the Ignite cohort</span>
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
