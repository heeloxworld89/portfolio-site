import ExpandableSection from '../ExpandableSection';
import CVSection from './CVSection';

const skillGroups = [
  {
    title: 'Machine Learning',
    tags: ['PyTorch', 'CNN / ResNet / DAG', 'Transformers', 'PCGrad Gradient Surgery', 'Convergence Theory', 'Noise-Robust Training'],
  },
  {
    title: 'Systems Engineering',
    tags: ['Multi-Agent Orchestration', 'Constructor Injection', 'Atomic Rollback', '3-Tier Memory', 'Adversarial Filtering', 'Graph-of-Thoughts Planning'],
  },
  {
    title: 'Infrastructure & Web',
    tags: ['Docker', 'FastAPI', 'Prometheus', 'SSE Streaming', 'HMAC Webhooks', 'CI/CD', 'Pydantic', 'SQLAlchemy Async', 'ChromaDB', 'React / TS / Web3'],
  },
  {
    title: 'Programming Languages',
    tags: ['Python (Advanced / Production)', 'C++', 'LaTeX'],
  },
  {
    title: 'Spoken Languages',
    tags: ['English (Fluent)', 'Bengali (Native)'],
  },
];

const sessions = [
  '9L1WZ9PO-bI', 'JW-WqB52ugo', 'NWz7uzN_NNQ', '2rbk0J3jp6Q', 'hBwS1rivWPA',
  'n7KlERWehl4', 'kjVlV4BVDyA', '-fH4VMbQOfk', '5O2FrndmxFo', '7OEl6Mqjjds',
  'nMUVMgR0uHQ', 'TDNlIncP5O8', 'uO_3atbGzZ8', 'xvJT0aOYcgI', '1o0g0PJMtsg',
  '71q_4imOHRM', 'TDSZk97LuNY', 'E8I3CzBsyQ8', 'U88sFQVsebo', 'IDEvtbip5eE',
  'v_5z8SeqVO4', '4bKiT3zLVvM', '4S4p5EBxfXE', 'ytJxIxFwYz8', 'kLduxS4BvJQ',
  'O6Ou5i-5pCo', 'FX7Qb8-foOQ', 'QcKAifqnTCw',
];

export default function CVOriginStatement() {
  return (
    <CVSection
      id="statement"
      phase="about"
      eyebrow="Personal Statement"
      title="Personal statement: from a first venture at 12 to DeepMath 2026 in Columbus and a NeurIPS review role in Paris at 18."
      lead={
        <>
          In his own words, Rokib Al Dhin Raadh sets out how he built ORMAS and OXIEDO alone and self-funded,
          from a UK operating history to a US expansion, and the three resources the next phase requires: multi-node compute, capacity to train Project Cherry,
          and a control theorist.
        </>
      }
    >
      <style>{`
        /* ─── Merged Origin + Personal Statement — scoped to .os-* ─── */

        .os-head { max-width: 760px; margin-bottom: 34px; }
        .os-overline {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 14px;
        }
        .os-title {
          font-size: clamp(27px, 3.2vw, 40px); font-weight: 800; color: var(--pf-ink);
          margin: 0 0 10px; letter-spacing: -0.5px; line-height: 1.14;
        }
        .os-byline { font-size: 14px; color: var(--pf-ink-3); margin-bottom: 22px; line-height: 1.6; }
        .os-lead { font-size: 15.5px; line-height: 1.8; color: var(--pf-ink-2); margin: 0; }
        .os-lead strong { color: var(--pf-ink); font-weight: 600; }

        /* Evidence band */
        .os-band {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px; margin-bottom: 54px;
        }
        .os-band-cell {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-radius: 8px; padding: 18px 20px;
        }
        .os-band-val {
          font-size: 24px; font-weight: 800; color: var(--pf-ink);
          line-height: 1.1; margin-bottom: 5px;
        }
        .os-band-lbl {
          font-size: 10px; font-weight: 700; letter-spacing: 1.4px;
          text-transform: uppercase; color: var(--pf-ink-3); line-height: 1.4;
        }

        /* Act markers */
        .os-act { margin-bottom: 22px; padding-top: 8px; }
        .os-act-num {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 8px;
        }
        .os-act-title {
          font-size: clamp(20px, 2.2vw, 25px); font-weight: 700;
          color: var(--pf-ink); margin: 0; line-height: 1.25;
        }
        .os-rule {
          border: none; border-top: 1px solid rgba(var(--pf-ink-rgb), 0.07);
          margin: 52px 0 0;
        }

        /* Prose */
        .os-body { max-width: 760px; }
        .os-p {
          font-size: 15.5px; line-height: 1.9; color: var(--pf-ink-2); margin: 0 0 20px;
        }
        .os-p strong { color: var(--pf-ink); font-weight: 600; }
        .os-p:last-child { margin-bottom: 0; }
        .os-pull {
          font-size: 15.5px; line-height: 1.7; color: var(--pf-ink); font-weight: 600;
          border-left: 2px solid rgba(var(--pf-ink-rgb), 0.2);
          padding: 4px 0 4px 22px; margin: 30px 0;
        }
        .os-callout {
          background: rgba(var(--pf-ink-rgb), 0.045);
          border: 1px solid var(--pf-border); border-left: 2px solid var(--pf-ink);
          border-radius: 0 8px 8px 0; padding: 22px 26px; margin: 28px 0;
        }
        .os-callout-lead {
          font-size: 15px; line-height: 1.7; color: var(--pf-ink);
          font-weight: 600; margin: 0 0 11px;
        }
        .os-callout p { font-size: 14.5px; line-height: 1.8; color: var(--pf-ink-2); margin: 0 0 10px; }
        .os-callout p:last-child { margin-bottom: 0; }
        .os-callout strong { color: var(--pf-ink); font-weight: 600; }

        /* Foundation cards */
        .os-found {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 34px;
        }
        @media (max-width: 700px) { .os-found { grid-template-columns: 1fr; } }
        .os-card {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-radius: 8px; padding: 22px 24px; transition: border-color 0.25s;
        }
        .os-card:hover { border-color: rgba(var(--pf-ink-rgb), 0.12); }
        .os-card-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 10px;
        }
        .os-card-body { font-size: 14px; line-height: 1.75; color: var(--pf-ink-2); margin: 0; }
        .os-card-body strong { color: var(--pf-ink); }

        /* Ventures */
        .os-venture-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; }
        .os-venture {
          display: grid; grid-template-columns: 104px 1fr; gap: 18px;
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 8px;
          padding: 18px 22px; align-items: start; transition: border-color 0.25s;
        }
        .os-venture:hover { border-color: rgba(var(--pf-ink-rgb), 0.1); }
        @media (max-width: 620px) {
          .os-venture { grid-template-columns: 1fr; gap: 7px; }
        }
        .os-venture-age {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--pf-ink-3); padding-top: 3px;
        }
        .os-venture-title {
          font-size: 13.5px; font-weight: 700; color: var(--pf-ink);
          margin-bottom: 6px; letter-spacing: 0.2px;
        }
        .os-venture-lesson { font-size: 13.5px; line-height: 1.72; color: var(--pf-ink-2); }

        /* Problem → architecture map */
        .os-map { border: 1px solid var(--pf-border); border-radius: 8px; overflow: hidden; }
        .os-map-head {
          padding: 10px 18px; background: rgba(var(--pf-ink-rgb), 0.02);
          border-bottom: 1px solid var(--pf-border); font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase; color: var(--pf-ink-3);
        }
        .os-map-row {
          display: grid; grid-template-columns: 1fr auto 1fr; gap: 14px;
          align-items: center; padding: 13px 18px;
          border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.04); background: var(--pf-surface);
        }
        .os-map-row:last-child { border-bottom: none; }
        @media (max-width: 620px) {
          .os-map-row { grid-template-columns: 1fr; gap: 4px; }
          .os-map-arrow { display: none; }
        }
        .os-map-from { font-size: 13px; color: var(--pf-ink); font-weight: 600; }
        .os-map-arrow { color: var(--pf-ink-3); font-size: 13px; }
        .os-map-to { font-size: 13px; color: var(--pf-ink-2); }

        /* Reference tables */
        .os-detail {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-radius: 8px; overflow: hidden; margin-bottom: 14px;
        }
        .os-detail-head {
          padding: 10px 20px; background: rgba(var(--pf-ink-rgb), 0.02);
          border-bottom: 1px solid var(--pf-border); font-size: 11px; color: var(--pf-ink-2);
          text-transform: uppercase; letter-spacing: 2px; font-weight: 700;
        }
        .os-detail-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 13px 20px; border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.04); gap: 20px;
        }
        .os-detail-row:last-child { border-bottom: none; }
        .os-detail-label { color: var(--pf-ink); font-weight: 500; font-size: 14px; }
        .os-detail-value { color: var(--pf-ink-2); font-size: 14px; text-align: right; }

        /* Skills */
        .os-skill-block {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-radius: 8px; padding: 22px 26px; margin-bottom: 12px;
        }
        .os-skill-label {
          font-size: 11px; text-transform: uppercase; letter-spacing: 2px;
          color: var(--pf-ink-2); font-weight: 700; margin-bottom: 15px;
        }
        .os-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .os-tag {
          background: rgba(var(--pf-ink-rgb), 0.04); color: var(--pf-ink);
          padding: 6px 14px; border-radius: 4px; font-size: 13px;
          font-weight: 500; border: 1px solid var(--pf-border);
        }

        /* Sessions */
        .os-sessions { display: flex; flex-wrap: wrap; gap: 6px; }
        .os-session {
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(var(--pf-ink-rgb), 0.03); border: 1px solid var(--pf-border);
          border-radius: 4px; padding: 8px 12px; color: var(--pf-ink);
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.8px;
          text-decoration: none; transition: all 0.2s;
        }
        .os-session:hover {
          background: rgba(var(--pf-ink-rgb), 0.08); border-color: var(--pf-ink); color: var(--pf-ink);
        }

        /* Missing table */
        .os-needs { width: 100%; border-collapse: collapse; }
        .os-needs th {
          padding: 12px 20px; text-align: left; color: var(--pf-ink); font-size: 11px;
          font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          border-bottom: 1px solid var(--pf-border);
        }
        .os-needs td {
          padding: 15px 20px; font-size: 14px; color: var(--pf-ink-2); line-height: 1.7;
          border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.04); vertical-align: top;
        }
        .os-needs td:first-child { color: var(--pf-ink); font-weight: 600; }
        .os-needs tr:last-child td { border-bottom: none; }

        .os-close {
          background: rgba(var(--pf-ink-rgb), 0.06); border: 1px solid var(--pf-border-2);
          border-radius: 10px; padding: 26px 30px; margin-top: 26px;
        }
        .os-close p {
          font-size: 15.5px; line-height: 1.75; color: var(--pf-ink);
          font-weight: 600; margin: 0;
        }
        .os-sign {
          font-size: 13px; color: var(--pf-ink-3); margin-top: 30px; padding-top: 20px;
          border-top: 1px solid rgba(var(--pf-ink-rgb), 0.06); font-style: italic;
        }
      `}</style>

      <div>

        <p className="os-byline">Rokib Al Dhin Raadh · <span className="age">Age 18</span> · Founder &amp; CEO, OXIEDO · Founder, Black Bloxie LTD (England &amp; Wales)</p>

        <div className="os-band">
          {[
            { v: '14–16 hrs', l: 'A normal working day' },
            { v: '28', l: 'Working days livestreamed' },
            { v: 'Self-funded', l: 'Built on his own capital' },
            { v: 'Solo', l: 'Sole author of ORMAS' },
            { v: '100%', l: 'IP ownership' },
          ].map((s, i) => (
            <div key={i} className="os-band-cell">
              <div className="os-band-val">{s.v}</div>
              <div className="os-band-lbl">{s.l}</div>
            </div>
          ))}
        </div>

        {/* ══ ACT IV ══════════════════════════════════════════════ */}
        <div className="os-act">
          <div className="os-act-num">Part One</div>
          <h3 className="os-act-title">Built Alone, Self-Funded and on the Record</h3>
        </div>

        <div className="os-body">
          <p className="os-p">
            I started my first venture at 12 and ran five by 17. Each failed at a different layer, and together
            they showed me the constraint was coordination, not individual capability. At 15 I built and sold a
            stock-prediction system for about $10,000; that money bought the RTX 3090 that later ran every ORMAS
            experiment. OXIMO was my answer to coordination. Running it on a live UK company for twelve months
            showed that the models underneath could not learn from noisy production data, and ORMAS was my answer
            to that. OXIEDO is the company that licenses it. At 18, its stability result was accepted at
            DeepMath 2026.
          </p>
          <p className="os-p">
            I have built this work independently, without a university, research group, advisor or external
            funding. Every experiment ran on hardware I paid for, and every architectural decision was my own.
          </p>
          <p className="os-p">
            I work fourteen to sixteen hours a day. In November 2024 I livestreamed every working session
            for two weeks, producing{' '}
            <strong>28 sessions of unedited footage, submitted as a Guinness World Record application</strong>.
            The full archive is linked below.
          </p>
        </div>

        <div className="os-archive">
          <ExpandableSection
            closedLabel="Work archive and technical toolkit"
            hint="The 28 livestreamed working sessions, and the tools, frameworks and languages behind the three systems."
            meta={['28 unedited days', 'Guinness application', 'Every tool used']}
          >
            <div className="os-detail" style={{ marginBottom: '18px' }}>
              <div className="os-detail-head">Work Archive — November 2024 · 28 Sessions</div>
              <div style={{ padding: '16px 20px' }}>
                <p style={{ fontSize: '13px', color: 'var(--pf-ink-2)', marginBottom: '14px', lineHeight: 1.7 }}>
                  Unlisted livestreams recorded for the Guinness World Record application: complete,
                  unedited working sessions.
                </p>
                <div className="os-sessions">
                  {sessions.map((id, i) => (
                    <a
                      key={id}
                      className="os-session"
                      href={`https://youtube.com/live/${id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {skillGroups.map((g, i) => (
              <div key={i} className="os-skill-block">
                <div className="os-skill-label">{g.title}</div>
                <div className="os-tags">
                  {g.tags.map((t, j) => <span key={j} className="os-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </ExpandableSection>
        </div>

        <hr className="os-rule" />

        {/* ══ ACT V ═══════════════════════════════════════════════ */}
        <div className="os-act">
          <div className="os-act-num">Part Two</div>
          <h3 className="os-act-title">Three Resources the Next Phase Requires</h3>
        </div>

        <div className="os-body">
          <p className="os-p">
            The foundations are in place: the code runs, the experiments are complete, the architecture is
            public and its stability result has passed peer review.
          </p>
          <p className="os-p">
            Working alone does not scale. What the next phase needs is not drive but calibration:
            colleagues, advisors and reviewers who shorten iteration cycles and catch errors early.
          </p>
          <p className="os-p">
            What the company does next is set out at{' '}
            <a href="https://oxiedo.com/invest" target="_blank" rel="noreferrer">
              oxiedo.com
            </a>. The table below lists the three external resources that plan depends on.
          </p>
        </div>

        <div className="os-needs-wrap">
          <table className="os-needs">
            <thead>
              <tr>
                <th className="os-needs-c1">Resource</th>
                <th>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Multi-node compute</td>
                <td data-label="Why it matters">The ORMAS protocol is designed to transfer to Transformers unchanged, as the mathematics is architecture-agnostic. Demonstrating that at scale requires multi-node H100/A100 access.</td>
              </tr>
              <tr>
                <td>Capacity to train Cherry</td>
                <td data-label="Why it matters">Pre-training a language model on the three-signal architecture builds structural correction into pre-training rather than adding it afterwards through RLHF. It is a compute-intensive programme beyond a single GPU.</td>
              </tr>
              <tr>
                <td>A control theorist</td>
                <td data-label="Why it matters">The ISS characterization passed double-blind review at DeepMath 2026 by deep-learning theorists. The next step is scrutiny from control theory.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="os-close">
          <p>
            Transformer-scale validation, Project Cherry and control-theory review of the ISS result all
            require an institutional environment I have so far worked without. That is why I am raising
            capital: to build a team, so the work no longer depends on one person to check it.
          </p>
        </div>

        <div className="os-sign">Rokib Al Dhin Raadh — Founder &amp; CEO, OXIEDO — 2026</div>
      </div>

    </CVSection>
  );
}
