import Icon from '@/components/common/Icon';
import CVSection from './CVSection';
export default function CVClosingAsk() {
  return (
    <CVSection
      id="contact"
      phase="about"
      eyebrow="What Comes Next"
      title="You read the whole thing."
      lead="Then you already know more about this work than almost anybody alive. One thing each kind of reader could do from here that would genuinely move it forward."
      last
    >
      <style>{`
        /* ─── Closing Ask — scoped to .ask-* ─── */

        .ask-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2px;
          margin-bottom: 2px;
        }
        @media (max-width: 900px) { .ask-grid { grid-template-columns: 1fr; } }

        .ask-card {
          background: var(--pf-surface);
          border: 1px solid var(--pf-border);
          padding: 28px 26px;
          transition: border-color 0.25s;
        }
        .ask-card:hover { border-color: rgba(var(--pf-ink-rgb), 0.12); }

        .ask-for {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pf-ink-3);
          margin-bottom: 10px;
        }
        .ask-audience {
          font-size: 15px;
          font-weight: 700;
          color: var(--pf-ink);
          margin-bottom: 12px;
        }
        .ask-body {
          font-size: 13px;
          line-height: 1.75;
          color: var(--pf-ink-2);
          margin: 0 0 18px;
        }
        .ask-action {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: var(--pf-ink);
          text-decoration: none;
          border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.2);
          padding-bottom: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .ask-action:hover { color: var(--pf-ink); border-color: rgba(var(--pf-ink-rgb), 0.5); }

        .ask-email-bar {
          background: var(--pf-surface);
          border: 1px solid var(--pf-border);
          padding: 22px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .ask-email-label {
          font-size: 13px;
          color: var(--pf-ink-2);
        }
        .ask-email-link {
          font-size: 15px;
          font-weight: 700;
          color: var(--pf-ink);
          text-decoration: none;
          letter-spacing: 0.2px;
          transition: color 0.2s;
        }
        .ask-email-link:hover { color: var(--pf-ink); }
        .ask-email-note {
          font-size: 12px;
          color: var(--pf-ink-3);
          font-style: italic;
        }
        .ask-site {
          display: inline-flex; align-items: center; gap: 9px;
          text-decoration: none; padding: 9px 16px; border-radius: 999px;
          background: rgba(var(--pf-accent-rgb), 0.1); border: 1px solid rgba(var(--pf-accent-rgb), 0.42);
          font-size: 13px; font-weight: 700; color: var(--pf-ink); letter-spacing: 0.2px;
          transition: background 0.22s, border-color 0.22s;
        }
        .ask-site:hover {
          background: rgba(var(--pf-accent-rgb), 0.19); border-color: rgba(var(--pf-accent-rgb), 0.75); color: var(--pf-ink);
        }
        .ask-site-dot {
          width: 7px; height: 7px; border-radius: 50%; background: var(--pf-accent);
          animation: askSiteLive 2.2s ease-in-out infinite;
        }
        @keyframes askSiteLive { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @media (prefers-reduced-motion: reduce) { .ask-site-dot { animation: none; } }
      `}</style>

      <div>

        <div className="ask-grid">
          <div className="ask-card">
            <div className="ask-for">If you review papers</div>
            <div className="ask-audience">Try to break the stability bound</div>
            <p className="ask-body">
              The preprint is on Zenodo and the codebase reproduces all 383 runs in under an hour on one GPU. The place I most want someone looking is the ISS stability result. If there is an error in it, or a tighter bound available, I would far rather hear it from you now than find out from a reviewer in six months.
            </p>
            <a className="ask-action" href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer">
              Read the Preprint
              <Icon name="externalLink" size={14} />
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">If you fund things</div>
            <div className="ask-audience">Two things unlock the next result</div>
            <p className="ask-body">
              The next phase needs two things: multi-node compute for Transformer-scale validation, and a dataset partner willing to let the architecture run against data that carries a real obligation. If you have either, that is the conversation worth having. The round, the milestones and the risk register are set out in full on the company site.
            </p>
            <a className="ask-action" href="https://oxiedo.com/invest" target="_blank" rel="noreferrer">
              The Investment Case
              <Icon name="externalLink" size={14} />
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">If you trust code over claims</div>
            <div className="ask-audience">Run it yourself in under an hour</div>
            <p className="ask-body">
              One script, reproduce.sh, runs every experiment in the paper. Build on it, extend it, or go hunting for the flaw. The code is sitting there and either the numbers come out or they do not.
            </p>
            <a className="ask-action" href="https://anonymous.4open.science/r/ormas-EB73/README.md" target="_blank" rel="noreferrer">
              Explore the Codebase
              <Icon name="externalLink" size={14} />
            </a>
          </div>
        </div>

        <div className="ask-email-bar">
          <span className="ask-email-label">Direct contact —</span>
          <a className="ask-email-link" href="mailto:raadxbusiness9@gmail.com">raadxbusiness9@gmail.com</a>
          <span className="ask-email-note">I answer every one myself, usually within a day.</span>
          <a className="ask-site" href="https://oxiedo.com" target="_blank" rel="noreferrer">
            <span className="ask-site-dot" aria-hidden="true" />
            oxiedo.com
            <Icon name="externalLink" size={14} />
          </a>
        </div>

      </div>
    </CVSection>
  );
}
