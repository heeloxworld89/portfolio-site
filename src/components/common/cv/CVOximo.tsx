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
      title="Agents that hire agents. Built, run in production, and set down."
      lead={
        <>
          Five ventures said the bottleneck was coordination, so I built the structural answer: an
          operating system where a sentence becomes an org chart, and where the system designs and hires
          a specialist when no existing agent has the skill.{' '}
          <strong>I am not building on OXIMO any more. It is prior work, and it is on this page because
          of what it taught me rather than what it became.</strong>
        </>
      }
      meta={[
        { k: 'Status', v: 'Closed · prior work' },
        { k: 'Scale', v: '40,933 lines' },
        { k: 'Tests', v: '2,011 · 0 failures' },
        { k: 'Rebuild', v: '72% smaller' },
      ]}
    >
      <style>{`
        .ox-closed {
          background: #191b1e; border: 1px solid #2a2d32;
          border-left: 2px solid #565d68; border-radius: 0 10px 10px 0;
          padding: 24px 28px; margin-bottom: 40px;
        }
        .ox-closed-k { font-size: 10px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: #838d99; margin-bottom: 12px; }
        .ox-closed p { font-size: 15.5px; line-height: 1.8; color: #9aa4b0; margin: 0 0 13px; }
        .ox-closed p:last-child { margin-bottom: 0; }
        .ox-closed strong { color: #c4cfde; font-weight: 600; }

        .ox-pull {
          font-size: 18px; font-weight: 600; font-style: italic; color: #c4cfde;
          border-left: 2px solid rgba(255,255,255,0.12); padding-left: 20px;
          margin: 0 0 32px; line-height: 1.7;
        }

        .ox-label {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99;
          margin: 0 0 16px; padding-bottom: 9px; border-bottom: 1px solid #2a2d32;
        }
        .ox-p { font-size: 16px; line-height: 1.85; color: #9aa4b0; max-width: 760px; margin: 0 0 22px; }

        .ox-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(128px, 1fr)); gap: 12px; margin-bottom: 40px; }
        .ox-stat { background: #191b1e; border: 1px solid #2a2d32; border-radius: 8px; padding: 16px; text-align: center; }
        .ox-stat-v { font-size: 21px; font-weight: 800; color: #c4cfde; line-height: 1.1; margin-bottom: 5px; }
        .ox-stat-l { font-size: 10.5px; color: #838d99; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }

        .ox-link { font-size: 13px; color: #838d99; margin-bottom: 30px; }
        .ox-link a { color: #c4cfde; text-decoration: underline; display: inline-flex; align-items: center; gap: 6px; vertical-align: middle; }
        .ox-link a:hover { color: #fff; }

        .ox-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 30px; }
        @media (max-width: 800px) { .ox-grid2 { grid-template-columns: 1fr; } }
        .ox-card { background: #191b1e; border-radius: 10px; padding: 22px 24px; border: 1px solid #2a2d32; }
        .ox-card-h { font-size: 14px; color: #c4cfde; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .ox-card-n { background: #2a2d32; color: #fff; width: 27px; height: 27px; display: flex; align-items: center; justify-content: center; border-radius: 6px; font-size: 12px; font-weight: 800; flex-shrink: 0; }
        .ox-mod { display: flex; justify-content: space-between; gap: 14px; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .ox-mod:last-child { border-bottom: none; }
        .ox-mod-n { font-size: 12.5px; font-family: ui-monospace, Menlo, monospace; color: #9aa4b0; }
        .ox-mod-d { font-size: 12.5px; color: #838d99; text-align: right; }
      `}</style>

      <div className="ox-stats">
        {[
          { v: '40,933', l: 'Lines of code' },
          { v: '2,011', l: 'Tests · 0 failures' },
          { v: '11', l: 'Mini-repos' },
          { v: '72%', l: 'Line reduction' },
          { v: '12/12', l: 'Algorithms ported' },
          { v: '47', l: 'Feature flags' },
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
        {' '}&nbsp;·&nbsp; Production research infrastructure, not a demo. The code is not polished.
      </p>

      <div className="ox-closed">
        <div className="ox-closed-k">Why it is closed</div>
        <p>
          OXIMO orchestrates calls to models it does not own. That was the right shape for the problem I
          had, and it ran a real company for twelve months — which is the section directly after this
          one. But it kept running into a limit that was not an orchestration limit at all.
        </p>
        <p>
          Every agent in it was ultimately a wrapper around a network nobody could see inside. When the
          business data got messy — mislabelled, contradictory, corrupted, which is what production data
          actually is — no amount of better coordination fixed it, because the failure was one layer
          down, inside the model.{' '}
          <strong>That is the wall that sent me into the research, and the research is where I stayed.</strong>
        </p>
        <p>
          So OXIMO is not Layer 1 of anything. It is the project that produced the question ORMAS
          answers, and I have stopped developing it.
        </p>
      </div>

      <p className="ox-label">How a task became an organization</p>
      <p className="ox-p">
        Every agent framework asks you to define the agents first. This one was handed a sentence and
        worked out the org chart itself — including hiring a specialist that did not exist when the task
        started.
      </p>
      <EngineeringVisualization />

      <div style={{ marginBottom: '40px' }} />

      <ExpandableSection
        closedLabel="Open the architecture detail"
        hint="The four-layer module breakdown across eleven mini-repos, for anyone who wants to see how it was actually put together."
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
