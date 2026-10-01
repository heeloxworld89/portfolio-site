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
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-top: 3px solid var(--pf-accent); padding: 24px 26px 22px; margin-bottom: 14px;
        }
        .evz-h { font-family: var(--rx-sans, system-ui, sans-serif) !important; font-size: 19px; font-weight: 700; color: var(--pf-ink); margin: 0 0 6px; letter-spacing: -0.2px; }
        .evz-s { font-size: 16px; color: var(--pf-ink-2); line-height: 1.65; margin: 0 0 20px; max-width: 72ch; }
        .evz-svg { width: 100%; height: auto; display: block; }

        /* mobile: the spine becomes a numbered list, because 980px of SVG at 350px is unreadable */
        .evz-stages-m { display: none; list-style: none; margin: 0; padding: 0; counter-reset: evz; }
        .evz-stages-m li {
          counter-increment: evz; display: grid; grid-template-columns: 34px 1fr; gap: 2px 10px;
          padding: 11px 0; border-bottom: 1px solid var(--pf-border);
        }
        .evz-stages-m li::before {
          content: counter(evz, decimal-leading-zero); grid-row: span 2;
          font-family: var(--rx-mono, ui-monospace, monospace); font-size: 12px; color: var(--pf-ink-3); padding-top: 2px;
        }
        .evz-stages-m b { font-size: 15.5px; color: var(--pf-ink); }
        .evz-stages-m span { font-size: 14px; color: var(--pf-ink-2); }
        .evz-stages-m li.is-hot::before, .evz-stages-m li.is-hot b { color: var(--pf-accent); }
        .evz-branch-m { display: none; font-size: 14px; font-weight: 700; color: var(--pf-accent); margin: 12px 0 0; }
        @media (max-width: 700px) {
          .evz-svg { display: none; }
          .evz-stages-m, .evz-branch-m { display: block; }
          .evz-stages-m li { display: grid; }
          .evz-block { padding: 20px 18px 18px; }
        }

        /* travelling signal on a straight spine */
        .evz-run { animation: evzRun 7s cubic-bezier(.45,0,.55,1) infinite; }
        @keyframes evzRun {
          0%   { transform: translateX(0);   opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          97%  { opacity: 0; }
          100% { transform: translateX(860px); opacity: 0; }
        }
        .evz-ring { animation: evzRing 7s ease-out infinite; opacity: 0; }
        @keyframes evzRing {
          0%, 100% { opacity: 0; }
          6%, 17%  { opacity: 1; }
        }

        .evz-paths { display: grid; grid-template-columns: repeat(auto-fit, minmax(226px, 1fr)); gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); margin-top: 18px; }
        .evz-path { background: var(--pf-surface); padding: 16px 18px; }
        .evz-path.is-hire { background: var(--pf-surface-2); box-shadow: inset 0 3px 0 var(--pf-accent); }
        .evz-path-id { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 13px; font-weight: 600; color: var(--pf-ink); margin-bottom: 4px; }
        .evz-path.is-hire .evz-path-id { color: var(--pf-accent); }
        .evz-path-cond { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 8px; }
        .evz-path-flow { font-size: 15px; line-height: 1.55; color: var(--pf-ink-2); }

        .evz-fsm { display: grid; gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); }
        .evz-fsm-step {
          display: grid; grid-template-columns: 30px 170px 1fr; gap: 14px; align-items: baseline;
          background: var(--pf-surface); padding: 13px 18px;
        }
        .evz-fsm-step:last-child { background: var(--pf-surface-2); box-shadow: inset 3px 0 0 var(--pf-accent); }
        @media (max-width: 700px) {
          .evz-fsm-step { grid-template-columns: 30px 1fr; gap: 2px 12px; padding: 12px 14px; }
          .evz-fsm-d { grid-column: 2; }
        }
        .evz-fsm-n { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 12px; color: var(--pf-ink-3); }
        .evz-fsm-step:last-child .evz-fsm-n { color: var(--pf-accent); }
        .evz-fsm-s { font-size: 14px; font-weight: 600; color: var(--pf-ink); font-family: var(--rx-mono, ui-monospace, monospace); overflow-wrap: anywhere; }
        .evz-fsm-d { font-size: 15px; line-height: 1.6; color: var(--pf-ink-2); }

        .evz-two { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 14px; }
        @media (max-width: 900px) { .evz-two { grid-template-columns: 1fr; } }

        .evz-mem-row {
          display: grid; grid-template-columns: 120px 1fr; gap: 14px; align-items: center;
          border-top: 1px solid var(--pf-border); padding: 12px 0;
        }
        .evz-mem-row:last-of-type { border-bottom: 1px solid var(--pf-border); }
        .evz-mem-t { font-size: 15px; font-weight: 700; }
        .evz-mem-s { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11px; color: var(--pf-ink-3); margin-top: 2px; }
        .evz-mem-h { font-size: 15px; color: var(--pf-ink-2); line-height: 1.55; }

        .evz-cost-row { display: grid; grid-template-columns: 190px 1fr 64px; gap: 12px; align-items: center; margin-bottom: 12px; }
        .evz-cost-n { font-size: 14px; color: var(--pf-ink-2); line-height: 1.4; }
        .evz-cost-row.is-best .evz-cost-n { color: var(--pf-accent); font-weight: 700; }
        .evz-cost-track { height: 10px; background: rgba(var(--pf-ink-rgb), 0.06); overflow: hidden; }
        .evz-cost-fill { height: 100%; background: var(--pf-ink-3); }
        .evz-cost-fill.is-best { background: var(--pf-accent); }
        .evz-cost-v { font-family: var(--rx-mono, ui-monospace, monospace); font-size: 13px; color: var(--pf-ink-2); text-align: right; }
        .evz-cost-row.is-best .evz-cost-v { color: var(--pf-accent); font-weight: 700; }
        @media (max-width: 620px) { .evz-cost-row { grid-template-columns: 1fr 60px; } .evz-cost-track { grid-column: 1 / -1; } }

        .evz-note {
          font-size: 14.5px; line-height: 1.6; color: var(--pf-ink-2);
          margin: 16px 0 0; padding-top: 12px; border-top: 1px solid var(--pf-border);
        }
        .evz-note strong { color: var(--pf-ink); font-weight: 700; }

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
          specialist exists yet. <strong style={{ color: 'var(--pf-ink)' }}>An organisation assembles itself around the
          work</strong> and a validated deliverable comes out the other side.
        </p>

        <svg className="evz-svg" viewBox="0 0 980 132" role="img"
             aria-label="A task passes through a safety gate, a dynamic router that classifies complexity and required skills, an execution step that takes one of four paths, the Sacred Chain hierarchy, a validation and merge step, and finally a learning step that updates each agent's brain.">
          <defs>
          </defs>

          {/* straight spine, entirely behind the boxes */}
          <line x1="96" y1="62" x2="952" y2="62" stroke="var(--pf-border)" strokeWidth="1.4" />
          <g className="evz-run"><circle cx="96" cy="62" r="4.5" fill="var(--pf-ink)" stroke="var(--pf-surface)" strokeWidth="2" paintOrder="stroke" /></g>

          <text x="8" y="58" fill="var(--pf-ink-2)" fontSize="10" fontWeight="700" letterSpacing="1.2">TASK IN</text>
          <text x="8" y="72" fill="var(--pf-ink-3)" fontSize="8.5">one sentence</text>

          {stages.map((st, i) => (
            <g key={st.t}>
              <rect x={st.x} y="36" width={STAGE_W} height="52" rx="0"
                    fill="var(--pf-surface)" stroke={st.hot ? 'rgba(var(--pf-accent-rgb), 0.42)' : 'var(--pf-border-2)'} strokeWidth="1.3" />
              <rect className="evz-ring" x={st.x} y="36" width={STAGE_W} height="52" rx="0"
                    fill="none" stroke={st.hot ? 'var(--pf-accent)' : 'var(--pf-ink)'} strokeWidth="1.8"
                    style={{ animationDelay: `${i * 0.9}s` }} />
              <text x={st.x + STAGE_W / 2} y="59" textAnchor="middle" fill="var(--pf-ink)" fontSize="11.5" fontWeight="700">{st.t}</text>
              <text x={st.x + STAGE_W / 2} y="75" textAnchor="middle" fill="var(--pf-ink-2)" fontSize="9">{st.s}</text>
            </g>
          ))}

          {/* the branch, named once, centred under Execute */}
          <line x1="452" y1="88" x2="452" y2="104" stroke="rgba(var(--pf-accent-rgb), 0.42)" strokeWidth="1.2" />
          <text x="452" y="119" textAnchor="middle" fill="var(--pf-accent)" fontSize="10" fontWeight="700">
            A1 · A2 · B1 · B2 — the B-paths hire a specialist mid-task
          </text>
        </svg>

        <ol className="evz-stages-m">
          <li><b>Task in</b><span>one sentence</span></li>
          {stages.map((st) => (
            <li key={st.t} className={st.hot ? 'is-hot' : undefined}><b>{st.t}</b><span>{st.s}</span></li>
          ))}
        </ol>
        <p className="evz-branch-m">A1 · A2 · B1 · B2 — the B-paths hire a specialist mid-task</p>

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
        <h4 className="evz-h">Creating New Roles Mid-Task</h4>
        <p className="evz-s">
          Every agent framework asks you to define your agents up front. When OXIMO meets work no existing role can
          handle, it designs the role, checks it is not a duplicate, validates it, tests that it produces coherent
          output, and commits it — <strong style={{ color: 'var(--pf-ink)' }}>with no human at any step</strong>. This is the
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
          <h4 className="evz-h">Persistent, Compounding Memory</h4>
          <p className="evz-s" style={{ marginBottom: '14px' }}>
            Three memory tiers, plus an Ebbinghaus decay curve so unused knowledge fades and reinforced knowledge
            strengthens. Agents mature Nascent → Learning → Mature → Expert.
          </p>
          {[
            { t: 'Working', s: 'In-process deque', h: 'The current session', c: 'var(--pf-ink-3)' },
            { t: 'Episodic', s: 'Database, role-scoped', h: 'Task outcomes and failure lessons', c: 'var(--pf-ink-2)' },
            { t: 'Semantic', s: 'Vector store', h: 'Deep knowledge, retrievable across roles', c: 'var(--pf-ink)' },
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
          <h4 className="evz-h">Cost Efficiency</h4>
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
