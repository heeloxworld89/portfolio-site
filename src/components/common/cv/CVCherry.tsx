import CherryVisualization from './CherryVisualization';
import CVSection from './CVSection';

/**
 * Project Cherry — planned, not built.
 *
 * Previously 1,715 words presented as "Layer 3" of a stack. There is no stack.
 * This is one thing I intend to build and have not started, and the only honest
 * way to show it is short.
 */

const notThis = [
  { k: 'Not fine-tuning',    v: 'Fine-tuning is a discrete event against a frozen base, and it forgets. There is no frozen base here and no discrete event.' },
  { k: 'Not LoRA or adapters', v: 'Adapters need a task ID at inference — you must already know which one to load. Here, which parts activate is the result of routing, not an input to it.' },
  { k: 'Not Mixture-of-Experts', v: 'The closest existing approach. MoE fixes the number of experts before training and does not monitor them individually. Cherry grows components on demand, and each is independently monitored and repairable.' },
];

export default function CVCherry() {
  return (
    <CVSection
      id="cherry"
      phase="now"
      eyebrow="Project Cherry · Planned"
      title="A network that grows its own components."
      lead={
        <>
          Once a network can report which of its parts is failing and by how much, it can be allowed to{' '}
          <strong>grow new components on demand</strong> and retire those that no longer contribute. Project
          Cherry removes the fixed-capacity ceiling that limits every result in the research section. It is
          fully specified; development will begin once multi-node compute is in place.
        </>
      }
      meta={[
        { k: 'Status', v: 'Specification complete' },
        { k: 'Written', v: 'Full specification' },
        { k: 'Gated on', v: 'Multi-node H100 access' },
        { k: 'Experiments', v: 'None yet' },
      ]}
    >
      <style>{`
        .cy-warn {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
          background: rgba(var(--pf-accent-rgb), 0.06); border: 1px solid rgba(var(--pf-accent-rgb), 0.3);
          border-radius: 10px; padding: 16px 22px; margin-bottom: 36px;
        }
        .cy-warn-t {
          font-size: 10px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--pf-accent); background: rgba(var(--pf-accent-rgb), 0.12);
          border: 1px solid rgba(var(--pf-accent-rgb), 0.36); border-radius: 999px; padding: 4px 12px; flex-shrink: 0;
        }
        .cy-warn-v { font-size: 14.5px; line-height: 1.65; color: var(--pf-ink-2); flex: 1; min-width: 240px; }

        .cy-label {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: var(--pf-ink-3);
          margin: 0 0 16px; padding-bottom: 9px; border-bottom: 1px solid var(--pf-border);
        }
        .cy-p { font-size: 15px; line-height: 1.85; color: var(--pf-ink-2); max-width: 760px; margin: 0 0 30px; }
        .cy-p strong { color: var(--pf-ink); font-weight: 600; }

        .cy-not { display: flex; flex-direction: column; gap: 2px; }
        .cy-not-row { display: grid; grid-template-columns: 220px 1fr; gap: 20px; background: var(--pf-surface); border: 1px solid var(--pf-border); padding: 17px 22px; }
        @media (max-width: 700px) { .cy-not-row { grid-template-columns: 1fr; gap: 6px; } }
        .cy-not-k { font-size: 13.5px; font-weight: 700; color: var(--pf-ink); }
        .cy-not-v { font-size: 13.5px; line-height: 1.7; color: var(--pf-ink-2); }
      `}</style>

      <div className="cy-warn">
        <span className="cy-warn-t">Planned work</span>
        <span className="cy-warn-v">
          Every other figure on this page comes from a completed experiment. This section describes planned
          work, so it contains no results.
        </span>
      </div>

      <p className="cy-p">
        ORMAS already provides the difficult part: a network that knows which components are failing, and by
        how much, can be instructed to grow replacements. New components are introduced with zero net effect
        on current behaviour, so existing capabilities are undisturbed while they learn.{' '}
        <strong>This is how the fixed-capacity ceiling is removed.</strong>
      </p>

      <p className="cy-label">How it would work</p>
      <CherryVisualization />

      <div style={{ marginBottom: '40px' }} />

      <p className="cy-label">How it differs from existing methods</p>
      <div className="cy-not">
        {notThis.map((n) => (
          <div className="cy-not-row" key={n.k}>
            <div className="cy-not-k">{n.k}</div>
            <div className="cy-not-v">{n.v}</div>
          </div>
        ))}
      </div>
    </CVSection>
  );
}
