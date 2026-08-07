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
          color: #6b7683;
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
          color: #878e99;
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
          color: #878e99;
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
          color: #6b7683;
          font-style: italic;
        }
      `}</style>

      <div className="col-12">

        <span className="subtitle" style={{ color: '#878e99', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
          What Comes Next
        </span>
        <h2 className="title fs-2" style={{ fontWeight: 700, marginBottom: '6px' }}>
          If You Got This Far
        </h2>
        <p style={{ fontSize: '15px', color: '#878e99', marginBottom: '32px', maxWidth: '600px', lineHeight: '1.75' }}>
          The work is documented and reproducible. Here is the specific thing each type of reader can do that would actually move something forward.
        </p>

        <div className="ask-grid">
          <div className="ask-card">
            <div className="ask-for">For</div>
            <div className="ask-audience">ML Researchers &amp; Reviewers</div>
            <p className="ask-body">
              The preprint is on Zenodo. The full codebase reproduces every experiment in under one hour on a single GPU. The area where external scrutiny is most useful: the ISS convergence proof. If you find an error or a tighter bound, I want to know.
            </p>
            <a className="ask-action" href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer">
              Read the Preprint ↗
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">For</div>
            <div className="ask-audience">Investors &amp; Operators</div>
            <p className="ask-body">
              I am not raising a round. The specific unlocks for the next phase are: access to multi-node H100/A100 compute for Transformer-scale validation, and an institutional pilot environment where OXIMO can operate on proprietary domain data. If that is your world, email me.
            </p>
            <a className="ask-action" href="mailto:raadkbusiness@gmail.com">
              raadkbusiness@gmail.com
            </a>
          </div>

          <div className="ask-card">
            <div className="ask-for">For</div>
            <div className="ask-audience">Engineers &amp; Builders</div>
            <p className="ask-body">
              The reproduce.sh script runs every experiment from the paper. The OXIMO architecture is documented in the codebase. If you want to build on this, extend it, or find a flaw — the code is available and the results are verifiable.
            </p>
            <a className="ask-action" href="https://anonymous.4open.science/r/ormas-EB73/README.md" target="_blank" rel="noreferrer">
              Explore the Codebase ↗
            </a>
          </div>
        </div>

        <div className="ask-email-bar">
          <span className="ask-email-label">Direct contact —</span>
          <a className="ask-email-link" href="mailto:raadkbusiness@gmail.com">raadkbusiness@gmail.com</a>
          <span className="ask-email-note">Response within 24 hours. No pitch decks required.</span>
        </div>

      </div>

      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
      </div>
    </div>
  );
}
