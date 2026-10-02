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
      last
      id="cherry"
      phase="now"
      eyebrow="Project Cherry · Next architecture after ORMAS · Fully specified"
      title="Project Cherry: the next architecture after ORMAS, a network that grows its own components."
      lead={
        <>
          Project Cherry is Raadh&apos;s fully specified next architecture: a network, built on ORMAS, that{' '}
          <strong>grows new components on demand</strong> and retires those that no longer contribute. It is
          designed to remove the fixed-capacity ceiling that bounds every ORMAS result above. Development begins
          once multi-node compute is in place.
        </>
      }
      meta={[
        { k: 'Status', v: 'Specification complete' },
        { k: 'Builds on', v: 'ORMAS self-correction' },
        { k: 'Next milestone', v: 'Multi-node H100 access' },
        { k: 'Results', v: 'Reported once built' },
      ]}
    >
      <div className="uxr-body uxr-cherry">
        <div className="uxr-unbuilt" role="note">
          <span className="uxr-unbuilt-t">
            <span className="uxr-unbuilt-dot" aria-hidden="true" />
            Roadmap
          </span>
          <span className="uxr-unbuilt-v">
            Every other figure on this page comes from a completed experiment. Project Cherry is a specified
            design, so it reports no results of its own; the numbers it builds on are ORMAS&apos;s.
          </span>
        </div>

        <p className="uxr-p">
          ORMAS already provides the difficult part: a network that knows which components are failing, and by
          how much, can be instructed to grow replacements. New components are introduced with zero net effect
          on current behaviour, so existing capabilities are undisturbed while they learn.{' '}
          <strong>This is how the fixed-capacity ceiling is removed.</strong>
        </p>

        <section className="uxr-sec" id="cherry-design">
          <h3 className="uxr-h">How Project Cherry is designed to work</h3>
          <CherryVisualization />
        </section>

        <section className="uxr-sec" id="cherry-differs">
          <h3 className="uxr-h">How it differs from fine-tuning, LoRA and Mixture-of-Experts, the field&apos;s standard routes to new capability</h3>
          <dl className="uxr-defs is-wide">
            {notThis.map((n) => (
              <div className="uxr-def" key={n.k}>
                <dt>{n.k}</dt>
                <dd>{n.v}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </CVSection>
  );
}
