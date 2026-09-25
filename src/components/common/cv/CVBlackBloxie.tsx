import ExpandableSection from '../ExpandableSection';
import CVSection from './CVSection';

/**
 * Black Bloxie LTD — the experiment run on OXIMO.
 *
 * Its own section, deliberately. This is not a business result and it is not
 * evidence for ORMAS. It is the controlled study that tested whether OXIMO
 * caused commercial output, and it belongs next to OXIMO rather than inside it.
 */

const removal = [
  { m: 'Commercial output',        p: '−91%',  n: 'Phase 1 baseline → Phase 2 dead zone' },
  { m: 'New customer acquisition', p: '−100%', n: 'Complete cessation, every channel at once' },
  { m: 'Conversion rate',          p: '−77%',  n: 'Cross-channel collapse rules out seasonality' },
  { m: 'Order volume',             p: '−72%',  n: 'Residual orders from pre-existing sessions only' },
];

const recovery = [
  { m: 'Commercial output', p: '+1,300%', n: 'Against the Phase 2 ablated baseline' },
  { m: 'Sessions',          p: '+1,422%', n: 'Full LLM referral channel rebuild' },
  { m: 'Order volume',      p: '+340%',   n: 'Exceeded the Phase 1 average by 3.3×' },
  { m: 'Conversion rate',   p: '+214%',   n: 'Compounded memory advantage over Phase 1' },
];

const rungs = [
  { n: '01', phase: 'Phase 1 · Aug–Oct 2025 · Cold start', q: 'Can an autonomous system originate commercial demand at all?', a: 'The hardest starting condition available: a brand-new UK entity, zero domain authority, zero brand equity, zero advertising budget, no human in the acquisition loop. The store went live cold. Customers arrived, every one through LLM-referred channels.', v: 'Yes. Demand originated where there was none.' },
  { n: '02', phase: 'Phase 1 · Baseline established', q: 'How much can it sell, and at what unit economics?', a: 'A capability claim is worthless without a cost structure. The pipeline produced a complete 12-asset product suite for $0.0043 against a $50–$150 human benchmark. Baseline output was locked across all channels as the control condition.', v: 'The marginal cost of output collapses to near zero.' },
  { n: '03', phase: 'Phase 2 · Nov 2025–Feb 2026 · The lesion', q: 'Strip the system out. Was it ever the architecture, or was it the market?', a: 'The rung the whole study exists for. Every generated asset was removed and the store reverted to bare platform defaults — same products, same prices, same supplier, same category, same seasonality. One variable withdrawn.', v: 'The architecture was the causal variable, not the market.' },
  { n: '04', phase: 'Phase 2 · Dead zone', q: 'What does total system death look like?', a: 'Not decay. Cessation. Acquisition went to zero and stayed there for four months. The collapse landed across every channel on the same day rather than tapering channel by channel — the specific signature that rules out seasonality and macro conditions.', v: '−100% acquisition. Simultaneous, not gradual.' },
  { n: '05', phase: 'Phase 3 · Mar–Jul 2026 · Re-injection', q: 'Is the collapse reversible?', a: 'A one-directional result is half a proof. If the system caused the output, restoring it should restore the output — and if it does not, the causal claim fails from the other side. Redeployed into the same dead entity with no other change.', v: 'Yes. The dead zone was a lesion, not a wound.' },
  { n: '06', phase: 'Phase 3 · Recovery ablation', q: 'Does it return to baseline, or past it?', a: 'It overshot, and the overshoot is the most interesting result in the study. The knowledge graph had retained everything learned in Phase 1, so the system restarted with twelve months of accumulated memory instead of starting cold. It came back knowing things it did not know the first time.', v: 'Recovery compounds. Institutional memory survives.' },
  { n: '07', phase: 'Phase 4 · 13 Aug 2026 · High-value test', q: 'Can it close a high-value transaction, or does trust break at the price point?', a: 'The residual objection: low-consideration purchases are easy. So the final phase listed high-value inventory and let the architecture run the entire funnel unassisted — discovery, positioning, objection handling, close.', v: 'A $4,386 order closed at $0.00 acquisition cost.' },
];

export default function CVBlackBloxie() {
  return (
    <CVSection
      id="black-bloxie"
      phase="before"
      eyebrow="Black Bloxie LTD · 2025–2026"
      title="I spent a year trying to prove my own system didn’t work."
      lead={
        <>
          Anybody can run an AI system and post the revenue. It proves nothing, because you never find out
          whether the market would have done it anyway. So I registered a real company in the UK, let
          OXIMO run it with a real supplier and real customers in ten countries, and then{' '}
          <strong>tore the system out to see whether the business died.</strong> It died. Then I put it
          back to see whether it would come alive again. It came back bigger than before.
        </>
      }
      meta={[
        { k: 'What it tests', v: 'OXIMO. Not ORMAS.' },
        { k: 'Duration', v: '12 months, 7 rungs' },
        { k: 'On removal', v: '−91% output' },
        { k: 'On restoration', v: '+1,300% back' },
      ]}
    >
      <style>{`
        .bb-note {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-ink-4); border-radius: 0 10px 10px 0;
          padding: 20px 24px; margin-bottom: 36px;
        }
        .bb-note p { font-size: 15px; line-height: 1.75; color: var(--pf-ink-2); margin: 0; }
        .bb-note strong { color: var(--pf-ink); font-weight: 600; }

        .bb-headline { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 36px; }
        @media (max-width: 700px) { .bb-headline { grid-template-columns: 1fr; } }
        .bb-hcell { background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 10px; padding: 24px 26px; }
        .bb-hcell.down { border-left: 2px solid var(--pf-accent); border-radius: 0 10px 10px 0; }
        .bb-hcell.up   { border-left: 2px solid var(--pf-pos); border-radius: 0 10px 10px 0; }
        .bb-hv { font-size: 38px; font-weight: 800; line-height: 1; letter-spacing: -1.5px; margin-bottom: 8px; }
        .bb-hcell.down .bb-hv { color: var(--pf-accent); }
        .bb-hcell.up   .bb-hv { color: var(--pf-pos); }
        .bb-hl { font-size: 14px; font-weight: 700; color: var(--pf-ink); margin-bottom: 4px; }
        .bb-hs { font-size: 13px; color: var(--pf-ink-3); line-height: 1.6; }

        .bb-label {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: var(--pf-ink-3);
          margin: 0 0 16px; padding-bottom: 9px; border-bottom: 1px solid var(--pf-border);
        }

        .bb-tables { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 40px; }
        @media (max-width: 820px) { .bb-tables { grid-template-columns: 1fr; } }
        .bb-table { border: 1px solid var(--pf-border); border-radius: 10px; overflow: hidden; }
        .bb-table-h {
          padding: 12px 18px; background: rgba(var(--pf-ink-rgb), 0.02); border-bottom: 1px solid var(--pf-border);
          font-size: 10px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: var(--pf-ink-3);
        }
        .bb-tr { display: grid; grid-template-columns: 1fr auto; gap: 14px; align-items: baseline; padding: 13px 18px; background: var(--pf-surface); border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.04); }
        .bb-tr:last-child { border-bottom: none; }
        .bb-tm { font-size: 13.5px; color: var(--pf-ink); font-weight: 600; }
        .bb-tn { font-size: 11.5px; color: var(--pf-ink-3); line-height: 1.5; margin-top: 3px; }
        .bb-tp { font-size: 15px; font-weight: 800; font-family: ui-monospace, Menlo, monospace; white-space: nowrap; }
        .bb-table.down .bb-tp { color: var(--pf-accent); }
        .bb-table.up   .bb-tp { color: var(--pf-pos); }

        .bb-money { background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 10px; padding: 24px 26px; margin-bottom: 40px; }
        .bb-money-h { font-size: 15px; font-weight: 700; color: var(--pf-ink); margin-bottom: 10px; }
        .bb-money-p { font-size: 14.5px; line-height: 1.75; color: var(--pf-ink-2); margin: 0 0 18px; }
        .bb-money-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); border-radius: 8px; overflow: hidden; }
        .bb-money-cell { background: var(--pf-surface); padding: 16px 18px; }
        .bb-money-cell.is-hero { background: rgba(var(--pf-accent-rgb), 0.06); }
        .bb-money-v { font-size: 20px; font-weight: 800; color: var(--pf-ink); line-height: 1.1; margin-bottom: 5px; }
        .bb-money-cell.is-hero .bb-money-v { color: var(--pf-accent); }
        .bb-money-l { font-size: 12px; font-weight: 700; color: var(--pf-ink); }
        .bb-money-s { font-size: 11.5px; color: var(--pf-ink-3); margin-top: 3px; line-height: 1.5; }
        .bb-money-note { font-size: 14px; line-height: 1.75; color: var(--pf-ink-2); margin: 18px 0 0; }
        .bb-money-note strong { color: var(--pf-ink); font-weight: 600; }

        .bb-rung { display: grid; grid-template-columns: 46px 1fr; gap: 18px; background: var(--pf-surface); border: 1px solid var(--pf-border); padding: 20px 24px; margin-bottom: 2px; }
        .bb-rung.is-final { border-color: rgba(var(--pf-accent-rgb), 0.3); }
        @media (max-width: 640px) { .bb-rung { grid-template-columns: 1fr; gap: 8px; } }
        .bb-rung-n { font-size: 20px; font-weight: 800; color: var(--pf-ink-3); font-family: ui-monospace, Menlo, monospace; line-height: 1; }
        .bb-rung.is-final .bb-rung-n { color: var(--pf-accent); }
        .bb-rung-p { font-size: 10px; font-weight: 800; letter-spacing: 1.3px; text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 7px; }
        .bb-rung.is-final .bb-rung-p { color: var(--pf-accent); }
        .bb-rung-q { font-size: 15px; font-weight: 700; color: var(--pf-ink); margin: 0 0 8px; line-height: 1.5; }
        .bb-rung-a { font-size: 14px; line-height: 1.75; color: var(--pf-ink-2); margin: 0 0 10px; }
        .bb-rung-v { font-size: 12.5px; font-weight: 700; color: var(--pf-pos); margin: 0; }
        .bb-rung.is-final .bb-rung-v { color: var(--pf-accent); }

        .bb-ceiling {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-accent); border-radius: 0 10px 10px 0;
          padding: 24px 28px; margin-top: 40px;
        }
        .bb-ceiling-k { font-size: 10px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: var(--pf-accent); margin-bottom: 12px; }
        .bb-ceiling p { font-size: 15.5px; line-height: 1.8; color: var(--pf-ink-2); margin: 0 0 13px; }
        .bb-ceiling p:last-child { margin-bottom: 0; }
        .bb-ceiling strong { color: var(--pf-ink); font-weight: 600; }
      `}</style>

      <div className="bb-note">
        <p>
          <strong>Read this carefully before you credit me with too much.</strong> What got tested here is
          OXIMO, an orchestration layer sitting on top of models somebody else trained. It proves nothing
          whatsoever about ORMAS, which is separate work with its own separate evidence. It would be very
          easy to blur those two together on a page like this. I am not going to.
        </p>
      </div>

      <div className="bb-headline">
        <div className="bb-hcell down">
          <div className="bb-hv">−91%</div>
          <div className="bb-hl">On system removal</div>
          <div className="bb-hs">All commercial output collapsed, across every channel simultaneously.</div>
        </div>
        <div className="bb-hcell up">
          <div className="bb-hv">+1,300%</div>
          <div className="bb-hl">On re-injection</div>
          <div className="bb-hs">Recovery exceeded the Phase 1 average by 3.3×.</div>
        </div>
      </div>

      <div className="bb-tables">
        <div className="bb-table down">
          <div className="bb-table-h">Phase 2 · I took the system out</div>
          {removal.map((r) => (
            <div className="bb-tr" key={r.m}>
              <div><div className="bb-tm">{r.m}</div><div className="bb-tn">{r.n}</div></div>
              <div className="bb-tp">{r.p}</div>
            </div>
          ))}
        </div>
        <div className="bb-table up">
          <div className="bb-table-h">Phase 3 · I put it back</div>
          {recovery.map((r) => (
            <div className="bb-tr" key={r.m}>
              <div><div className="bb-tm">{r.m}</div><div className="bb-tn">{r.n}</div></div>
              <div className="bb-tp">{r.p}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bb-money">
        <div className="bb-money-h">Now the money, before you go looking for it</div>
        <p className="bb-money-p">
          People get this wrong in both directions. Half assume the big number is the total and half assume
          the total is a rounding error. So here is every pound the company ever took.
        </p>
        <div className="bb-money-grid">
          {[
            { v: '$6,691.68', l: 'Total verified revenue', s: 'Everything the company earned in 12 months' },
            { v: '79+', l: 'Orders', s: 'Across 10 countries' },
            { v: '~$30', l: 'Typical order', s: 'The other 78 orders average $29.56' },
            { v: '$4,386', l: 'Largest single order', s: 'The Rung 7 test · 13 Aug 2026 · $0.00 CAC', hero: true },
          ].map((m) => (
            <div className={`bb-money-cell${m.hero ? ' is-hero' : ''}`} key={m.l}>
              <div className="bb-money-v">{m.v}</div>
              <div className="bb-money-l">{m.l}</div>
              <div className="bb-money-s">{m.s}</div>
            </div>
          ))}
        </div>
        <p className="bb-money-note">
          <strong>One order is 65% of everything that company ever earned.</strong> That was the whole
          purpose of it. I wanted to know whether an autonomous system could carry somebody through a
          genuinely expensive decision, so I set one up and it did. The honest total is{' '}
          <strong>under seven thousand dollars</strong>, and it is small because I held it there
          deliberately.
        </p>
      </div>

      <ExpandableSection
        closedLabel="Open the falsification ladder — seven questions, twelve months"
        hint="Each rung is a test the thesis could have failed. They are in the order they were run, with the verdict on each."
        meta={['7 rungs', '12 months', 'Designed to fail']}
      >
        {rungs.map((r) => (
          <div className={`bb-rung${r.n === '07' ? ' is-final' : ''}`} key={r.n}>
            <div className="bb-rung-n">{r.n}</div>
            <div>
              <div className="bb-rung-p">{r.phase}</div>
              <p className="bb-rung-q">{r.q}</p>
              <p className="bb-rung-a">{r.a}</p>
              <p className="bb-rung-v">{r.v}</p>
            </div>
          </div>
        ))}
      </ExpandableSection>

      <div className="bb-ceiling">
        <div className="bb-ceiling-k">Why I stopped it, and where it sent me</div>
        <p>
          I capped the study on purpose. No country has decided yet who is liable when an autonomous agent
          signs a contract, and I would rather keep a clean experiment than discover that boundary from the
          wrong side of it.
        </p>
        <p>
          The technical reason mattered more. Rung 6 overshot because the system had built up a year of
          real memory, and the obvious next move was to let it learn from the company&apos;s own data.
          That data was a mess: mislabelled, contradictory, half of it corrupted. Which is what production
          data always is. I tried every published method for it and watched all of them fail.{' '}
          <strong>That wall is the whole reason the next thing I built was research and not another
          product.</strong>
        </p>
      </div>
    </CVSection>
  );
}
