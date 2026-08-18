import Icon from '@/components/common/Icon';
export default function CVClosingAsk() {
  return (
    <div className="row mb--50" id="contact">
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
          background: #191b1e;
          border: 1px solid #2a2d32;
          padding: 28px 26px;
          transition: border-color 0.25s;
        }
        .ask-card:hover { border-color: rgba(255,255,255,0.12); }

        .ask-for {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #838d99;
          margin-bottom: 10px;
        }
        .ask-audience {
          font-size: 16px;
          font-weight: 700;
          color: #c4cfde;
          margin-bottom: 12px;
        }
        .ask-body {
          font-size: 13px;
          line-height: 1.75;
          color: #9aa4b0;
          margin: 0 0 18px;
        }
        .ask-action {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #c4cfde;
          text-decoration: none;
          border-bottom: 1px solid rgba(196,207,222,0.2);
          padding-bottom: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .ask-action:hover { color: #fff; border-color: rgba(255,255,255,0.5); }

        .ask-email-bar {
          background: #191b1e;
          border: 1px solid #2a2d32;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .ask-email-label {
          font-size: 13px;
          color: #9aa4b0;
        }
        .ask-email-link {
          font-size: 15px;
          font-weight: 700;
          color: #c4cfde;
          text-decoration: none;
          letter-spacing: 0.2px;
          transition: color 0.2s;
        }
        .ask-email-link:hover { color: #fff; }
        .ask-email-note {
          font-size: 12px;
          color: #838d99;
          font-style: italic;
        }
      `}</style>

      <div className="col-12">

        <span className="subtitle" style={{ color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
          What Comes Next
        </span>
        <h2 className="title fs-2" style={{ fontWeight: 700, marginBottom: '6px' }}>
          If You Got This Far
        </h2>
        <p style={{ fontSize: '15px', color: '#9aa4b0', marginBottom: '32px', maxWidth: '600px', lineHeight: '1.75' }}>
          The work is documented and reproducible. Here is the one thing each kind of reader could do that would move something forward.
        </p>

        <div className="ask-grid">
          <div className="ask-card">
            <div className="ask-for">For</div>
            <div className="ask-audience">ML Researchers &amp; Reviewers</div>
            <p className="ask-body">
              The preprint is on Zenodo and the codebase reproduces every experiment in under an hour on one GPU. The place scrutiny would help most is the ISS local stability characterization. If you find an error in it, or a tighter bound, I would genuinely rather hear it from you than find out later.
            </p>
            <a className="ask-action" href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer">
              Read the Preprint
              <Icon name="externalLink" size={14} />
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">For</div>
            <div className="ask-audience">Investors &amp; Operators</div>
            <p className="ask-body">
              The next phase needs two things: multi-node H100/A100 compute for Transformer-scale validation, and institutional pilot environments where OXIMO can run against real proprietary data. If you have either, that is the conversation worth having.
            </p>
            <a className="ask-action" href="#fundraising">
              The Fundraising Case
              <Icon name="arrowRight" size={14} />
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">For</div>
            <div className="ask-audience">Engineers &amp; Builders</div>
            <p className="ask-body">
              One script, reproduce.sh, runs every experiment in the paper. The OXIMO architecture is documented inside the codebase. Build on it, extend it, or go looking for the flaw — the code is there and the results check out or they do not.
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
          <span className="ask-email-note">Response within 24 hours. No pitch decks required.</span>
        </div>

      </div>

      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
      </div>
    </div>
  );
}
