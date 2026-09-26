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
      title="40,933 lines of an operating system where the agents hire their own staff."
      lead={
        <>
          Five businesses had told me the same thing five times over, all of them before I was seventeen:
          the limit was never how good I was, it was coordination. So I stopped trying harder and built the answer as a system. Hand it one
          sentence and it works out the org chart itself, then designs and hires a specialist when nobody
          on staff can do the job.{' '}
          <strong>It ran a real company for a year. I have stopped developing it, and I say exactly why
          further down.</strong>
        </>
      }
      meta={[
        { k: 'Status', v: 'Closed by choice' },
        { k: 'Scale', v: '40,933 lines, alone' },
        { k: 'Tests', v: '2,069 · 0 failures' },
        { k: 'Rebuild', v: '106k → 41k lines' },
      ]}
    >
      <style>{`
        .ox-closed {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-ink-4); border-radius: 0 10px 10px 0;
          padding: 24px 28px; margin-bottom: 40px;
        }
        .ox-closed-k { font-size: 10px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 12px; }
        .ox-closed p { font-size: 15.5px; line-height: 1.8; color: var(--pf-ink-2); margin: 0 0 13px; }
        .ox-closed p:last-child { margin-bottom: 0; }
        .ox-closed strong { color: var(--pf-ink); font-weight: 600; }

        .ox-pull {
          font-size: 16.5px; font-weight: 600; font-style: italic; color: var(--pf-ink);
          border-left: 2px solid rgba(var(--pf-ink-rgb), 0.12); padding-left: 20px;
          margin: 0 0 32px; line-height: 1.7;
        }

        .ox-label {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: var(--pf-ink-3);
          margin: 0 0 16px; padding-bottom: 9px; border-bottom: 1px solid var(--pf-border);
        }
        .ox-p { font-size: 15px; line-height: 1.85; color: var(--pf-ink-2); max-width: 760px; margin: 0 0 22px; }

        .ox-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(128px, 1fr)); gap: 12px; margin-bottom: 40px; }
        .ox-stat { background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 8px; padding: 16px; text-align: center; }
        .ox-stat-v { font-size: 21px; font-weight: 800; color: var(--pf-ink); line-height: 1.1; margin-bottom: 5px; }
        .ox-stat-l { font-size: 10.5px; color: var(--pf-ink-3); text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }

        .ox-link { font-size: 13px; color: var(--pf-ink-3); margin-bottom: 30px; }
        .ox-link a { color: var(--pf-ink); text-decoration: underline; display: inline-flex; align-items: center; gap: 6px; vertical-align: middle; }
        .ox-link a:hover { color: var(--pf-ink); }

        .ox-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 30px; }
        @media (max-width: 800px) { .ox-grid2 { grid-template-columns: 1fr; } }
        .ox-card { background: var(--pf-surface); border-radius: 10px; padding: 22px 24px; border: 1px solid var(--pf-border); }
        .ox-card-h { font-size: 14px; color: var(--pf-ink); font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .ox-card-n { background: var(--pf-border); color: var(--pf-ink); width: 27px; height: 27px; display: flex; align-items: center; justify-content: center; border-radius: 6px; font-size: 12px; font-weight: 800; flex-shrink: 0; }
        .ox-mod { display: flex; justify-content: space-between; gap: 14px; padding: 7px 0; border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.04); }
        .ox-mod:last-child { border-bottom: none; }
        .ox-mod-n { font-size: 12.5px; font-family: ui-monospace, Menlo, monospace; color: var(--pf-ink-2); }
        .ox-mod-d { font-size: 12.5px; color: var(--pf-ink-3); text-align: right; }
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
        Every multi-agent framework I studied needed a human in the middle — someone to frame each task,
        prompt each model, carry the output to the next step. I wanted agents that break work apart
        themselves, remember what happened last session, hire other agents, and run like a company.
      </p>

      <p className="ox-pull">Not a chatbot. A full organizational structure that assembles itself.</p>

      <p className="ox-p">
        I rebuilt it from a 106,000-line monolith: 72% fewer lines, every critical algorithm intact, not
        one test failing at the end. The rebuild was never housekeeping. It was the experiment showing
        the architecture underneath was sound enough to survive complete reconstruction.
      </p>

      <p className="ox-link">
        <a href="https://anonymous.4open.science/r/oximo-5C73/README.md" target="_blank" rel="noreferrer">
          View the codebase
          <Icon name="externalLink" size={13} />
        </a>
        {' '}&nbsp;·&nbsp; This had to run a live company, not a demo. The code shows it.
      </p>

      <div className="ox-closed">
        <div className="ox-closed-k">Why I stopped</div>
        <p>
          Every agent in OXIMO is, underneath, a wrapper around somebody else&apos;s model that nobody can
          see inside. That was fine while the work was clean. It ran a real company for a year, which is
          the next section.
        </p>
        <p>
          Then I tried to train on the company&apos;s own data. Real production data is mislabelled,
          contradictory and half corrupted, and I watched every published method for handling it fail in
          turn. DivideMix, ProMix, CoDE. None of them helped, and it took me a while to accept why: I was
          trying to fix a coordination problem that was not a coordination problem.{' '}
          <strong>The failure was one floor down, inside the model, and no amount of better orchestration
          was ever going to reach it.</strong>
        </p>
        <p>
          So I went down a floor and stayed there. OXIMO is the project that handed me the question. ORMAS
          is the answer, and it is where all of my time goes now.
        </p>
      </div>

      <p className="ox-label">Watch a sentence turn into a company</p>
      <p className="ox-p">
        Every other agent framework makes you define the agents up front. This one was handed a sentence
        and worked out the org chart on its own, hiring a specialist that did not exist when the job
        started.
      </p>
      <EngineeringVisualization />

      <div style={{ marginBottom: '40px' }} />

      <ExpandableSection
        closedLabel="Open the architecture detail"
        hint="The four-layer module breakdown across eleven mini-repos, for anyone who wants to see how it was put together."
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
