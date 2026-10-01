import Icon from '@/components/common/Icon';
import ExpandableSection from '../ExpandableSection';
import EngineeringVisualization from './EngineeringVisualization';
import CVSection from './CVSection';

/**
 * OXIMO — prior work, and closed.
 *
 * This was Layer 1 of a four-layer stack in the previous version of the site.
 * It is not a layer of anything now. It is the system that came out of the
 * ventures, produced one real finding, and was set down. Presented that way.
 */

const layers = [
  { n: '1', t: 'Foundation',      mods: [['oximo_config', 'Pydantic v2 settings'], ['oximo_models', '18 immutable domain models'], ['oximo_db', 'SQLAlchemy async ORM'], ['oximo_llm', 'Unified LLM adapter']] },
  { n: '2', t: 'Domain Engines',  mods: [['oximo_safety', 'Adversarial input/output filter'], ['oximo_cognitive', 'Brain lifecycle, 3-tier memory'], ['oximo_router', 'Graph-of-Thoughts planner'], ['oximo_execution', 'Sacred Chain, sandbox'], ['oximo_hiring', 'Self-hiring pipeline']] },
  { n: '3', t: 'Orchestration',   mods: [['oximo_orchestrator', 'Central wiring hub'], ['', '4 execution paths'], ['', 'Post-task learning']] },
  { n: '4', t: 'API',             mods: [['oximo_api', 'FastAPI routes'], ['', 'SSE streaming'], ['', 'Webhooks and Prometheus metrics']] },
];

export default function CVOximo() {
  return (
    <CVSection
      id="oximo"
      phase="before"
      eyebrow="OXIMO · 2023–2025"
      title="OXIMO: a 40,933-line multi-agent operating system that ran a live company for a year."
      lead={
        <>
          OXIMO is the multi-agent operating system Raadh built alone after five ventures showed him the same
          constraint: coordination, not individual capability. Given a one-sentence brief, it designs the
          organisation needed to deliver it and creates specialist roles when none exist.{' '}
          <strong>It ran Black Bloxie LTD, a live UK company, for twelve months. Its limit on real-world data
          is the problem ORMAS was built to solve.</strong>
        </>
      }
      meta={[
        { k: 'Status', v: 'Concluded · led to ORMAS' },
        { k: 'Scale', v: '40,933 lines, solo' },
        { k: 'Tests', v: '2,069 · 0 failures' },
        { k: 'Rebuild', v: '106k → 41k lines' },
      ]}
    >
      <style>{`
        .ox-closed {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-top: 3px solid var(--pf-ink-3);
          padding: 26px 30px; margin-bottom: 48px;
        }
        .ox-closed-k {
          font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11.5px; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 14px;
        }
        .ox-closed p { font-size: 16.5px; line-height: 1.7; color: var(--pf-ink-2); margin: 0 0 14px; max-width: 75ch; }
        .ox-closed p:last-child { margin-bottom: 0; }
        .ox-closed strong { color: var(--pf-ink); font-weight: 700; }

        .ox-pull {
          font-size: 19px; font-weight: 600; color: var(--pf-accent);
          border-left: 3px solid var(--pf-accent); padding: 2px 0 2px 20px;
          margin: 0 0 24px; line-height: 1.5; max-width: 760px;
        }

        .ox-label {
          font-size: 12px; font-weight: 800; letter-spacing: 1.6px;
          text-transform: uppercase; color: var(--pf-ink-2);
          margin: 0 0 14px;
        }
        .ox-p { font-size: 16.5px; line-height: 1.7; color: var(--pf-ink-2); max-width: 72ch; margin: 0 0 22px; }

        .ox-stats { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); margin-bottom: 40px; }
        @media (max-width: 1000px) { .ox-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (max-width: 560px) { .ox-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .ox-stat { background: var(--pf-surface); padding: 18px 16px; }
        .ox-stat-v { font-family: var(--rx-serif, Georgia, serif); font-size: 34px; font-weight: 400; color: var(--pf-accent); line-height: 1; margin-bottom: 8px; letter-spacing: -0.01em; }
        .ox-stat-l { font-size: 13px; color: var(--pf-ink-2); line-height: 1.4; }

        .ox-link { font-size: 15px; color: var(--pf-ink-3); margin: 0 0 40px; }
        .rx .ox-link a { color: var(--pf-accent); font-weight: 700; display: inline-flex; align-items: center; gap: 6px; vertical-align: baseline; min-height: 40px; }
        .rx .ox-link a:hover { color: var(--pf-ink); }

        .ox-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 30px; }
        @media (max-width: 800px) { .ox-grid2 { grid-template-columns: 1fr; } }
        .ox-card { background: var(--pf-surface); padding: 22px 24px; border: 1px solid var(--pf-border); border-top: 3px solid var(--pf-accent); min-width: 0; }
        .ox-card-h { font-size: 13px; color: var(--pf-ink); font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 14px; display: flex; align-items: baseline; gap: 10px; }
        .ox-card-n { font-family: var(--rx-mono, ui-monospace, monospace); font-weight: 500; color: var(--pf-accent); font-size: 12px; flex-shrink: 0; }
        .ox-mod { display: flex; justify-content: space-between; gap: 14px; padding: 8px 0; border-bottom: 1px solid var(--pf-border); }
        .ox-mod:last-child { border-bottom: none; }
        .ox-mod-n { font-size: 13px; font-family: var(--rx-mono, ui-monospace, monospace); color: var(--pf-ink-2); overflow-wrap: anywhere; }
        .ox-mod-d { font-size: 14px; color: var(--pf-ink-2); text-align: right; }
      `}</style>

      <div className="ox-stats">
        {[
          { v: '40,933', l: 'Lines in production' },
          { v: '2,069', l: 'Tests, none failing' },
          { v: '11', l: 'Independently deployable repos' },
          { v: '72%', l: 'Smaller after the rebuild' },
          { v: '12/12', l: 'Algorithms ported intact' },
          { v: '47', l: 'Flags across 17 phases' },
        ].map((s) => (
          <div className="ox-stat" key={s.l}>
            <div className="ox-stat-v">{s.v}</div>
            <div className="ox-stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      <p className="ox-p">
        Most multi-agent frameworks require a human in the loop to frame each task, prompt each model
        and pass outputs between steps. OXIMO&apos;s agents decompose work themselves, retain memory across
        sessions, create new roles and operate as an organisation.
      </p>

      <p className="ox-pull">Not a chatbot: an organisational structure that assembles itself.</p>

      <p className="ox-p">
        Raadh rebuilt OXIMO from a 106,000-line monolith into 40,933 lines across 11 independently
        deployable repositories: 72% smaller, all 12 critical algorithms intact, all 2,069 tests passing.
        The architecture survived a complete reconstruction.
      </p>

      <p className="ox-link">
        <a href="https://anonymous.4open.science/r/oximo-5C73/README.md" target="_blank" rel="noreferrer">
          View the codebase
          <Icon name="externalLink" size={13} />
        </a>
        {' '}&nbsp;·&nbsp; Production code, built to operate a live company.
      </p>

      <div className="ox-closed">
        <div className="ox-closed-k">Why OXIMO concluded, and how it led to ORMAS</div>
        <p>
          Each OXIMO agent is built on a third-party model whose internals cannot be inspected. That was
          workable on clean inputs, and the system operated a live company for a year (see Black Bloxie).
        </p>
        <p>
          Training on the company&apos;s own data changed that. Production data is mislabelled, contradictory
          and partly corrupted, and the established methods for handling it (DivideMix, ProMix, CoDE) all
          failed.{' '}<strong>The problem sat inside the model, beyond the reach of better orchestration.</strong>
        </p>
        <p>
          OXIMO posed the question; ORMAS, the self-repairing neural network Raadh then invented, is his
          answer. It is now his full-time focus, and the technology OXIEDO licenses.
        </p>
      </div>

      <p className="ox-label">From one sentence to an organisation</p>
      <p className="ox-p">
        Most agent frameworks require agents to be defined in advance. OXIMO derives the organisation from
        the brief and creates specialists that did not exist when the task began.
      </p>
      <EngineeringVisualization />

      <div style={{ marginBottom: '40px' }} />

      <ExpandableSection
        closedLabel="Open the architecture detail"
        hint="The four-layer module structure across eleven repositories."
        meta={['4 layers', '11 mini-repos', 'Constructor injection']}
      >
        <p className="ox-p">
          Constructor injection everywhere, no global state, every dependency declared and every boundary
          enforced. Each repo can be tested, deployed and replaced on its own.
        </p>
        <div className="ox-grid2">
          {layers.map((l) => (
            <div className="ox-card" key={l.n}>
              <div className="ox-card-h"><span className="ox-card-n">{l.n}</span>{l.t}</div>
              {l.mods.map(([n, d], i) => (
                <div className="ox-mod" key={i}>
                  <span className="ox-mod-n" style={n ? undefined : { opacity: 0 }}>{n || '—'}</span>
                  <span className="ox-mod-d">{d}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ExpandableSection>
    </CVSection>
  );
}
