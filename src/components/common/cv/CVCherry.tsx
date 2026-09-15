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
  { k: 'Not Mixture-of-Experts', v: 'The closest existing thing, and the difference is instructive. MoE fixes the expert count before training and monitors nothing per expert. This grows on demand, and every part is independently monitored and repairable.' },
];

export default function CVCherry() {
  return (
    <CVSection
      id="cherry"
      phase="now"
      eyebrow="Project Cherry · Planned"
      title="The next one. Written down completely, and deliberately not started."
      lead={
        <>
          Once a network can tell you which of its parts is failing and by how much, you can do something
          nobody currently does: let it <strong>grow a new part on demand</strong>, and retire one that has
          stopped earning its place. Fixed capacity is the ceiling on every number in the research section
          above, and this is how it comes off.{' '}
          <strong>I have written the whole thing and built none of it.</strong> It is here because I would
          rather show you where this goes than have you find out later.
        </>
      }
      meta={[
        { k: 'Status', v: 'Not built' },
        { k: 'Written', v: 'Specification only' },
        { k: 'Gated on', v: 'Multi-node compute' },
        { k: 'Evidence', v: 'None yet' },
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
        .cy-p { font-size: 16px; line-height: 1.85; color: var(--pf-ink-2); max-width: 760px; margin: 0 0 30px; }
        .cy-p strong { color: var(--pf-ink); font-weight: 600; }

        .cy-not { display: flex; flex-direction: column; gap: 2px; }
        .cy-not-row { display: grid; grid-template-columns: 220px 1fr; gap: 20px; background: var(--pf-surface); border: 1px solid var(--pf-border); padding: 17px 22px; }
        @media (max-width: 700px) { .cy-not-row { grid-template-columns: 1fr; gap: 6px; } }
        .cy-not-k { font-size: 13.5px; font-weight: 700; color: var(--pf-ink); }
        .cy-not-v { font-size: 13.5px; line-height: 1.7; color: var(--pf-ink-2); }
      `}</style>

      <div className="cy-warn">
        <span className="cy-warn-t">Nothing measured</span>
        <span className="cy-warn-v">
          Every number elsewhere on this page came out of an experiment I ran. There are none here,
          because there is nothing built yet to run them on. Read this as intent.
        </span>
      </div>

      <p className="cy-p">
        ORMAS already supplies the hard part. A network that knows which of its components is dying, and
        by how much, is a network you can tell to grow a replacement. The new part can be slipped in
        with zero net effect on anything the network currently does, so nothing that already works gets
        disturbed while the new part learns its job.{' '}
        <strong>Fixed capacity is what holds down every number in the research section. This is how it
        comes off.</strong>
      </p>

      <p className="cy-label">What it would look like</p>
      <CherryVisualization />

      <div style={{ marginBottom: '40px' }} />

      <p className="cy-label">Things people will assume this is, and why it isn’t</p>
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
