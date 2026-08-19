/**
 * OXIMO — what actually happens to a task, and what makes it production rather
 * than a demo.
 *
 * Previous version fanned four bezier curves out of the router and back, which
 * tangled and put a translucent highlight over the stage labels. Rebuilt as a
 * straight spine: the four paths are named once in the spine and detailed in
 * cards, and the "current stage" is shown by a moving stroke rather than a fill
 * overlay so labels never lose contrast.
 *
 * Figures from the OXIMO README and docs/architecture.md.
 */

const stages = [
  { x: 100, t: 'Safety Gate',    s: '7-check cascade' },
  { x: 244, t: 'Dynamic Router', s: 'complexity + skills' },
  { x: 388, t: 'Execute',        s: 'one of four paths', hot: true },
  { x: 532, t: 'Sacred Chain',   s: 'Master → Dept → Emp' },
  { x: 676, t: 'Validate',       s: 'multi-stage merge' },
  { x: 820, t: 'Learn',          s: 'brain updated' },
];
const STAGE_W = 128;

const paths = [
  { id: 'A1', cond: 'Simple · skills exist', flow: 'Context assembly → single agent → validate', hire: false },
  { id: 'A2', cond: 'Complex · team exists', flow: 'Sacred Chain → parallel departments → merge', hire: false },
  { id: 'B1', cond: 'Simple · skill missing', flow: 'Self-hire → materialise role → run as A1', hire: true },
  { id: 'B2', cond: 'Complex · skill missing', flow: 'Self-hire → build team → run as A2', hire: true },
];

const hiringFSM = [
  { n: '1', s: 'RealizationBlock', d: 'An LLM designs the role — persona, skills, department, seniority.' },
  { n: '2', s: 'PersonaMatcher', d: 'Vector search against existing roles so it never hires a duplicate.' },
  { n: '3', s: 'HireValidator', d: 'Seven checks: ID format, duplicates, reporting chain, skill coherence.' },
  { n: '4', s: 'PromptTester', d: 'One cheap call verifies the new role produces coherent output.' },
  { n: '5', s: 'RoleMaterializer', d: 'Atomic transaction — role, brain, and audit record commit together.' },
  { n: '6', s: 'Rollback', d: 'Any step fails and the whole hire reverses. No orphaned agents, ever.' },
];

const costs = [
  { n: 'GPT-4 Turbo · single-shot', v: 180, label: '~$180' },
  { n: 'Claude 3.5 · single-shot', v: 54, label: '~$54' },
  { n: 'GPT-4o · single-shot', v: 45, label: '~$45' },
  { n: 'OXIMO specialised cascade', v: 3.5, label: '~$3.50', best: true },
];

export default function EngineeringVisualization() {
  return (
    <div className="evz">
      <style>{`
        .evz-block {
          background: #121417; border: 1px solid #2a2d32;
          border-radius: 12px; padding: 22px 24px 20px; margin-bottom: 14px;
        }
        .evz-h { font-size: 15px; font-weight: 700; color: #e8edf4; margin: 0 0 4px; }
        .evz-s { font-size: 12.5px; color: #a6b0bc; line-height: 1.6; margin: 0 0 18px; max-width: 720px; }
        .evz-svg { width: 100%; height: auto; display: block; }

        /* travelling signal on a straight spine */
        .evz-run { animation: evzRun 7s cubic-bezier(.45,0,.55,1) infinite; }
        @keyframes evzRun {
          0%   { transform: translateX(0);   opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          97%  { opacity: 0; }
          100% { transform: translateX(860px); opacity: 0; }
        }
        /* current stage: a moving STROKE, never a fill over the label */
        .evz-ring { animation: evzRing 7s ease-out infinite; opacity: 0; }
        @keyframes evzRing {
          0%, 100% { opacity: 0; }
          6%, 17%  { opacity: 1; }
        }

        .evz-paths { display: grid; grid-template-columns: repeat(auto-fit, minmax(226px, 1fr)); gap: 10px; margin-top: 16px; }
        .evz-path { background: #191b1e; border: 1px solid #2a2d32; border-radius: 9px; padding: 15px 17px; }
        .evz-path.is-hire { border-color: rgba(255,74,87,0.32); background: rgba(255,74,87,0.04); }
        .evz-path-id { font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #c4cfde; margin-bottom: 4px; }
        .evz-path.is-hire .evz-path-id { color: #ff6b76; }
        .evz-path-cond { font-size: 10px; font-weight: 700; letter-spacing: 1.1px; text-transform: uppercase; color: #838d99; margin-bottom: 8px; }
        .evz-path-flow { font-size: 12.5px; line-height: 1.6; color: #9aa4b0; }

        .evz-fsm { display: flex; flex-direction: column; gap: 2px; }
        .evz-fsm-step {
          display: grid; grid-template-columns: 30px 158px 1fr; gap: 14px; align-items: baseline;
          background: #191b1e; border: 1px solid #2a2d32; padding: 13px 18px;
        }
        .evz-fsm-step:first-child { border-radius: 9px 9px 0 0; }
        .evz-fsm-step:last-child  { border-radius: 0 0 9px 9px; border-color: rgba(255,74,87,0.28); background: rgba(255,74,87,0.04); }
        @media (max-width: 700px) { .evz-fsm-step { grid-template-columns: 30px 1fr; } .evz-fsm-d { grid-column: 2; } }
        .evz-fsm-n {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #2a2d32; color: #c4cfde; font-size: 11px; font-weight: 700;
        }
        .evz-fsm-step:last-child .evz-fsm-n { background: rgba(255,74,87,0.18); color: #ff6b76; }
        .evz-fsm-s { font-size: 13px; font-weight: 700; color: #c4cfde; font-family: ui-monospace, Menlo, monospace; }
        .evz-fsm-d { font-size: 13px; line-height: 1.6; color: #9aa4b0; }

        .evz-two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 900px) { .evz-two { grid-template-columns: 1fr; } }

        .evz-mem-row {
          display: grid; grid-template-columns: 82px 1fr; gap: 14px; align-items: center;
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 8px; padding: 13px 16px; margin-bottom: 8px;
        }
        .evz-mem-row:last-child { margin-bottom: 0; }
        .evz-mem-t { font-size: 12.5px; font-weight: 700; }
        .evz-mem-s { font-size: 10px; color: #7d8794; margin-top: 2px; }
        .evz-mem-h { font-size: 12.5px; color: #9aa4b0; line-height: 1.55; }

        .evz-cost-row { display: grid; grid-template-columns: 168px 1fr 62px; gap: 12px; align-items: center; margin-bottom: 10px; }
        .evz-cost-row:last-child { margin-bottom: 0; }
        .evz-cost-n { font-size: 12px; color: #98a2ae; line-height: 1.4; }
        .evz-cost-row.is-best .evz-cost-n { color: #7fd88f; font-weight: 700; }
        .evz-cost-track { height: 10px; background: rgba(255,255,255,0.05); border-radius: 5px; overflow: hidden; }
        .evz-cost-fill { height: 100%; border-radius: 5px; background: #4a5058; }
        .evz-cost-fill.is-best { background: #7fd88f; }
        .evz-cost-v { font-size: 12.5px; font-weight: 700; color: #98a2ae; text-align: right; }
        .evz-cost-row.is-best .evz-cost-v { color: #7fd88f; }
        @media (max-width: 620px) { .evz-cost-row { grid-template-columns: 1fr 52px; } .evz-cost-track { grid-column: 1 / -1; } }

        .evz-note {
          font-size: 11.5px; line-height: 1.6; color: #838d99;
          margin-top: 14px; padding-top: 11px; border-top: 1px solid #22252a;
        }
        .evz-note strong { color: #a6b0bc; font-weight: 600; }

        @media (prefers-reduced-motion: reduce) {
          .evz-run, .evz-ring { animation: none; }
          .evz-run { opacity: 1; }
        }
      `}</style>

      {/* ══ THE PIPELINE ════════════════════════════════════════════ */}
      <div className="evz-block">
        <h4 className="evz-h">What Happens to a Task</h4>
        <p className="evz-s">
          A task arrives as one sentence. Nobody has said who should do it, how to split it, or whether the right
          specialist exists yet. <strong style={{ color: '#c4cfde' }}>An organisation assembles itself around the
          work</strong> and a validated deliverable comes out the other side.
        </p>

        <svg className="evz-svg" viewBox="0 0 980 132" role="img"
             aria-label="A task passes through a safety gate, a dynamic router that classifies complexity and required skills, an execution step that takes one of four paths, the Sacred Chain hierarchy, a validation and merge step, and finally a learning step that updates each agent's brain.">
          <defs>
            <filter id="evzGlow" x="-70%" y="-70%" width="240%" height="240%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* straight spine, entirely behind the boxes */}
          <line x1="96" y1="62" x2="952" y2="62" stroke="#262a30" strokeWidth="1.4" />
          <g className="evz-run"><circle cx="96" cy="62" r="4.5" fill="#c4cfde" filter="url(#evzGlow)" /></g>

          <text x="8" y="58" fill="#a6b0bc" fontSize="10" fontWeight="700" letterSpacing="1.2">TASK IN</text>
          <text x="8" y="72" fill="#7d8794" fontSize="8.5">one sentence</text>

          {stages.map((st, i) => (
            <g key={st.t}>
              <rect x={st.x} y="36" width={STAGE_W} height="52" rx="9"
                    fill="#191b1e" stroke={st.hot ? 'rgba(255,74,87,0.42)' : '#343941'} strokeWidth="1.3" />
              <rect className="evz-ring" x={st.x} y="36" width={STAGE_W} height="52" rx="9"
                    fill="none" stroke={st.hot ? '#ff6b76' : '#c4cfde'} strokeWidth="1.8"
                    style={{ animationDelay: `${i * 0.9}s` }} />
              <text x={st.x + STAGE_W / 2} y="59" textAnchor="middle" fill="#e8edf4" fontSize="11.5" fontWeight="700">{st.t}</text>
              <text x={st.x + STAGE_W / 2} y="75" textAnchor="middle" fill="#98a2ae" fontSize="9">{st.s}</text>
            </g>
          ))}

          {/* the branch, named once, centred under Execute */}
          <line x1="452" y1="88" x2="452" y2="104" stroke="rgba(255,74,87,0.42)" strokeWidth="1.2" />
          <text x="452" y="119" textAnchor="middle" fill="#ff8a93" fontSize="10" fontWeight="700">
            A1 · A2 · B1 · B2 — the B-paths hire a specialist mid-task
          </text>
        </svg>

        <div className="evz-paths">
          {paths.map((p) => (
            <div className={`evz-path${p.hire ? ' is-hire' : ''}`} key={p.id}>
              <div className="evz-path-id">{p.id}</div>
              <div className="evz-path-cond">{p.cond}</div>
              <div className="evz-path-flow">{p.flow}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ SELF-HIRING ═════════════════════════════════════════════ */}
      <div className="evz-block">
        <h4 className="evz-h">The Branch Nobody Else Has — Hiring, Mid-Task</h4>
        <p className="evz-s">
          Every agent framework asks you to define your agents up front. When OXIMO meets work no existing role can
          handle, it designs the role, checks it is not a duplicate, validates it, tests that it produces coherent
          output, and commits it — <strong style={{ color: '#c4cfde' }}>with no human at any step</strong>. This is the
          orchestration-layer ancestor of Silent Node Injection.
        </p>
        <div className="evz-fsm">
          {hiringFSM.map((s) => (
            <div className="evz-fsm-step" key={s.n}>
              <div className="evz-fsm-n">{s.n}</div>
              <div className="evz-fsm-s">{s.s}</div>
              <div className="evz-fsm-d">{s.d}</div>
            </div>
          ))}
        </div>
        <p className="evz-note">
          Step 6 is why this is safe to run unattended: a partially-created agent is impossible.{' '}
          <strong>Either the whole hire commits, or none of it did.</strong>
        </p>
      </div>

      {/* ══ MEMORY + COST ═══════════════════════════════════════════ */}
      <div className="evz-two">
        <div className="evz-block" style={{ marginBottom: 0 }}>
          <h4 className="evz-h">Why It Gets Better Where It Sits</h4>
          <p className="evz-s" style={{ marginBottom: '14px' }}>
            Three memory tiers, plus an Ebbinghaus decay curve so unused knowledge fades and reinforced knowledge
            strengthens. Agents mature Nascent → Learning → Mature → Expert.
          </p>
          {[
            { t: 'Working', s: 'In-process deque', h: 'The current session', c: '#7d8794' },
            { t: 'Episodic', s: 'Database, role-scoped', h: 'Task outcomes and failure lessons', c: '#a6b0bc' },
            { t: 'Semantic', s: 'Vector store', h: 'Deep knowledge, retrievable across roles', c: '#c4cfde' },
          ].map((m) => (
            <div className="evz-mem-row" key={m.t}>
              <div>
                <div className="evz-mem-t" style={{ color: m.c }}>{m.t}</div>
                <div className="evz-mem-s">{m.s}</div>
              </div>
              <div className="evz-mem-h">{m.h}</div>
            </div>
          ))}
          <p className="evz-note">
            This is what the ablation measured. Removing an embedded system does not migrate it —{' '}
            <strong>it discards twelve months of accumulated memory, and output fell 91%.</strong>
          </p>
        </div>

        <div className="evz-block" style={{ marginBottom: 0 }}>
          <h4 className="evz-h">Why It Is Affordable to Run</h4>
          <p className="evz-s" style={{ marginBottom: '18px' }}>
            OXIMO does not call one expensive frontier model. It cascades cheaper specialised models across six stages,
            each tuned to one kind of work — for equivalent output quality.
          </p>
          {costs.map((c) => (
            <div className={`evz-cost-row${c.best ? ' is-best' : ''}`} key={c.n}>
              <div className="evz-cost-n">{c.n}</div>
              <div className="evz-cost-track">
                <div className={`evz-cost-fill${c.best ? ' is-best' : ''}`}
                     style={{ width: `${Math.max((c.v / 180) * 100, 2)}%` }} />
              </div>
              <div className="evz-cost-v">{c.label}</div>
            </div>
          ))}
          <p className="evz-note">
            A <strong>~51× reduction</strong>, achieved by specialisation rather than compromise. It is also the
            argument for Cherry in miniature: many small specialists beat one large generalist, at a fraction of the
            cost.
          </p>
        </div>
      </div>
    </div>
  );
}
