/**
 * OXIMO — what actually happens to a task.
 *
 * The distinguishing fact is not "multi-agent". It is that the human never
 * specifies the org chart: the router decides complexity, and if no agent has
 * the required skill the system designs, validates, tests, and materialises one
 * mid-task, with atomic rollback if any step fails. That branch — B1/B2 — is
 * the thing no other framework does, so the figure is built around it.
 *
 * Pipeline, paths, hiring FSM, memory tiers and cost figures are from the
 * OXIMO README and docs/architecture.md.
 */

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
  { n: '4', s: 'PromptTester', d: 'One cheap call verifies the new role actually produces coherent output.' },
  { n: '5', s: 'RoleMaterializer', d: 'Atomic transaction — role, brain, and audit record committed together.' },
  { n: '6', s: 'Rollback', d: 'Any step fails and the whole hire reverses. No orphaned agents, ever.' },
];

const memory = [
  { t: 'Working', s: 'In-process deque', h: 'The current session', c: '#7d8794' },
  { t: 'Episodic', s: 'Database, role-scoped', h: 'Task outcomes and failure lessons', c: '#a6b0bc' },
  { t: 'Semantic', s: 'Vector store', h: 'Deep knowledge, retrievable across roles', c: '#c4cfde' },
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
        .evz { margin: 8px 0 0; }
        .evz-block {
          background: #121417; border: 1px solid #2a2d32;
          border-radius: 12px; padding: 22px 24px 18px; margin-bottom: 14px;
        }
        .evz-h { font-size: 15px; font-weight: 700; color: #e8edf4; margin: 0 0 4px; }
        .evz-s { font-size: 12.5px; color: #a6b0bc; line-height: 1.6; margin: 0 0 18px; max-width: 700px; }
        .evz-svg { width: 100%; height: auto; display: block; }

        .evz-run { animation: evzRun 6s ease-in-out infinite; }
        @keyframes evzRun {
          0%    { transform: translateX(0);   opacity: 0; }
          6%    { opacity: 1; }
          88%   { opacity: 1; }
          94%   { opacity: 0; }
          100%  { transform: translateX(376px); opacity: 0; }
        }
        .evz-stage { animation: evzStage 6s ease-out infinite; }
        @keyframes evzStage {
          0%, 100% { opacity: 0; }
          12%, 30% { opacity: 1; }
        }
        .evz-hirebranch { animation: evzHire 6s ease-in-out infinite; }
        @keyframes evzHire {
          0%, 34%  { opacity: 0.25; }
          46%, 66% { opacity: 1; }
          78%,100% { opacity: 0.25; }
        }

        /* paths */
        .evz-paths { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 10px; margin-top: 4px; }
        .evz-path { background: #191b1e; border: 1px solid #2a2d32; border-radius: 9px; padding: 15px 17px; }
        .evz-path.is-hire { border-color: rgba(255,74,87,0.3); background: rgba(255,74,87,0.035); }
        .evz-path-id { font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #c4cfde; margin-bottom: 4px; }
        .evz-path.is-hire .evz-path-id { color: #ff6b76; }
        .evz-path-cond { font-size: 10px; font-weight: 700; letter-spacing: 1.1px; text-transform: uppercase; color: #838d99; margin-bottom: 8px; }
        .evz-path-flow { font-size: 12.5px; line-height: 1.6; color: #9aa4b0; }

        /* hiring FSM */
        .evz-fsm { display: flex; flex-direction: column; gap: 2px; }
        .evz-fsm-step {
          display: grid; grid-template-columns: 30px 158px 1fr; gap: 14px; align-items: baseline;
          background: #191b1e; border: 1px solid #2a2d32; padding: 13px 18px;
        }
        .evz-fsm-step:first-child { border-radius: 9px 9px 0 0; }
        .evz-fsm-step:last-child  { border-radius: 0 0 9px 9px; border-color: rgba(255,74,87,0.28); background: rgba(255,74,87,0.035); }
        @media (max-width: 700px) { .evz-fsm-step { grid-template-columns: 30px 1fr; } .evz-fsm-d { grid-column: 2; } }
        .evz-fsm-n {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #2a2d32; color: #c4cfde; font-size: 11px; font-weight: 700;
        }
        .evz-fsm-step:last-child .evz-fsm-n { background: rgba(255,74,87,0.16); color: #ff6b76; }
        .evz-fsm-s { font-size: 13px; font-weight: 700; color: #c4cfde; font-family: ui-monospace, Menlo, monospace; }
        .evz-fsm-d { font-size: 13px; line-height: 1.6; color: #9aa4b0; }

        /* memory + cost split */
        .evz-two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 860px) { .evz-two { grid-template-columns: 1fr; } }

        .evz-mem { display: flex; flex-direction: column; gap: 8px; }
        .evz-mem-row {
          display: grid; grid-template-columns: 82px 1fr; gap: 14px; align-items: center;
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 8px; padding: 13px 16px;
        }
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
          .evz-run, .evz-stage, .evz-hirebranch { animation: none; opacity: 1; }
        }
      `}</style>

      {/* ══ THE LIFECYCLE ═══════════════════════════════════════════ */}
      <div className="evz-block">
        <h4 className="evz-h">What Happens to a Task</h4>
        <p className="evz-s">
          A task arrives as one sentence of natural language. Nobody has told the system who should do it, how to split
          it, or whether the right specialist exists yet. <strong style={{ color: '#c4cfde' }}>An organisation assembles
          itself around the work</strong> and a validated deliverable comes out the other side.
        </p>

        <svg className="evz-svg" viewBox="0 0 900 240" role="img"
             aria-label="A task passes through a safety gate, then a dynamic router which classifies complexity and required skills, then branches to one of four execution paths. If no agent has the required skill the system hires one mid-task. Output is validated, merged, and the agents learn from the result.">
          <defs>
            <filter id="evzGlow" x="-70%" y="-70%" width="240%" height="240%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <marker id="evzArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="#3a4048" />
            </marker>
          </defs>

          {/* spine */}
          <line x1="96" y1="112" x2="812" y2="112" stroke="#2a2d32" strokeWidth="1.4" markerEnd="url(#evzArr)" />
          <g className="evz-run"><circle cx="96" cy="112" r="4.5" fill="#c4cfde" filter="url(#evzGlow)" /></g>

          {/* input */}
          <text x="14" y="108" fill="#838d99" fontSize="10" fontWeight="700" letterSpacing="1.3">TASK IN</text>
          <text x="14" y="123" fill="#7d8794" fontSize="9">one sentence</text>

          {/* stages */}
          {[
            { x: 130, t: 'Safety Gate', s: '7-check cascade' },
            { x: 268, t: 'Dynamic Router', s: 'complexity + skills' },
            { x: 560, t: 'Sacred Chain', s: 'Master → Dept → Emp' },
            { x: 700, t: 'Validate & Merge', s: 'multi-stage' },
            { x: 812, t: 'Learn', s: 'brain updated' },
          ].map((s, i) => (
            <g key={s.t}>
              <rect x={s.x - 56} y="88" width="112" height="48" rx="8" fill="#16181c" stroke="#3a4048" strokeWidth="1.3" />
              <rect className="evz-stage" x={s.x - 56} y="88" width="112" height="48" rx="8" fill="#c4cfde" opacity="0.07"
                    style={{ animationDelay: `${i * 0.55}s` }} />
              <text x={s.x} y="108" textAnchor="middle" fill="#c4cfde" fontSize="10.5" fontWeight="700">{s.t}</text>
              <text x={s.x} y="123" textAnchor="middle" fill="#7d8794" fontSize="8.5">{s.s}</text>
            </g>
          ))}

          {/* four-path fan */}
          <text x="412" y="34" textAnchor="middle" fill="#838d99" fontSize="9.5" fontWeight="700" letterSpacing="1.2">FOUR EXECUTION PATHS</text>
          {[
            { y: 52,  id: 'A1', hire: false },
            { y: 80,  id: 'A2', hire: false },
            { y: 148, id: 'B1', hire: true },
            { y: 176, id: 'B2', hire: true },
          ].map((p) => (
            <g key={p.id} className={p.hire ? 'evz-hirebranch' : undefined}>
              <path d={`M324 112 Q 370 112 380 ${p.y + 11} L 424 ${p.y + 11}`} fill="none"
                    stroke={p.hire ? '#ff6b76' : '#3a4048'} strokeWidth="1.2" />
              <rect x="424" y={p.y} width="80" height="22" rx="5"
                    fill="#16181c" stroke={p.hire ? '#ff6b76' : '#3a4048'} strokeWidth="1.2" />
              <text x="464" y={p.y + 15} textAnchor="middle" fill={p.hire ? '#ff6b76' : '#a6b0bc'} fontSize="10" fontWeight="700">{p.id}</text>
              <path d={`M504 ${p.y + 11} Q 536 ${p.y + 11} 548 112`} fill="none"
                    stroke={p.hire ? '#ff6b76' : '#3a4048'} strokeWidth="1.2" />
            </g>
          ))}

          <g className="evz-hirebranch">
            <text x="464" y="212" textAnchor="middle" fill="#ff8a93" fontSize="10" fontWeight="700">
              B1 / B2 — no agent has the skill, so it hires one mid-task
            </text>
            <text x="464" y="227" textAnchor="middle" fill="#7d8794" fontSize="9">
              this branch is the part no other framework has
            </text>
          </g>
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

      {/* ══ SELF-HIRING FSM ═════════════════════════════════════════ */}
      <div className="evz-block">
        <h4 className="evz-h">The Branch Nobody Else Has — Hiring, Mid-Task</h4>
        <p className="evz-s">
          Every agent framework asks you to define your agents up front. When OXIMO meets work no existing role can
          handle, it designs the role itself, checks it is not a duplicate, validates it, tests it produces coherent
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
          <div className="evz-mem">
            {memory.map((m) => (
              <div className="evz-mem-row" key={m.t}>
                <div>
                  <div className="evz-mem-t" style={{ color: m.c }}>{m.t}</div>
                  <div className="evz-mem-s">{m.s}</div>
                </div>
                <div className="evz-mem-h">{m.h}</div>
              </div>
            ))}
          </div>
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
