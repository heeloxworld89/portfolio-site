import Icon from '@/components/common/Icon';
import CVSection from './CVSection';
export default function CVClosingAsk() {
  return (
    <CVSection
      id="contact"
      phase="about"
      eyebrow="Contact"
      title="Review the research, reproduce the results, or discuss OXIEDO."
      lead="Rokib Al Dhin Raadh, founder and CEO of OXIEDO, takes direct enquiries from researchers reviewing the ORMAS stability result, investors and partners in compute and regulated data, and engineers reproducing the 383 experiments. Each has a starting point below."
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
            <div className="ask-for">Researchers</div>
            <div className="ask-audience">Stress-test the DeepMath 2026 stability result</div>
            <p className="ask-body">
              The preprint is on Zenodo, and the codebase reproduces the core claims in under an hour on a single GPU. Feedback on the ISS stability result, including potential errors or tighter bounds, is particularly welcome.
            </p>
            <a className="ask-action" href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer">
              Read the Preprint
              <Icon name="externalLink" size={14} />
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">Investors and partners</div>
            <div className="ask-audience">Fund the next phase: compute and regulated data</div>
            <p className="ask-body">
              The next phase requires multi-node compute for Transformer-scale validation and a data partner with regulated data. The round, milestones and risk register are set out on the company site.
            </p>
            <a className="ask-action" href="https://oxiedo.com/invest" target="_blank" rel="noreferrer">
              The Investment Case
              <Icon name="externalLink" size={14} />
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">Engineers</div>
            <div className="ask-audience">Reproduce the core claims in under an hour</div>
            <p className="ask-body">
              A single script, reproduce.sh, runs every experiment in the paper, so every result can be independently verified or extended.
            </p>
            <a className="ask-action" href="https://anonymous.4open.science/r/ormas-EB73/README.md" target="_blank" rel="noreferrer">
              Explore the Codebase
              <Icon name="externalLink" size={14} />
            </a>
          </div>
        </div>

        <div className="ask-email-bar">
          <span className="ask-email-label">Write to the founder directly</span>
          <a className="ask-email-link" href="mailto:raadh@oxiedo.com">raadh@oxiedo.com</a>
          <span className="ask-email-note">Replies are typically sent within one working day.</span>
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
