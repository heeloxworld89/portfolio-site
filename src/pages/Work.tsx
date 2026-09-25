import Icon from '@/components/common/Icon';
import EngineeringVisualization from '@/components/viz/EngineeringVisualization';
import { blackBloxie, links, oximo, ventures } from '@/data/facts';
import { ContactBand, PageHead, SecHead, Stats, Timeline } from '@/components/site/blocks';

const rungs = [
  { n: '01', phase: 'Phase 1 · Aug–Oct 2025 · Cold start', q: 'Can an autonomous system create demand from nothing?', v: 'Yes. A brand-new UK entity with zero brand, zero ad budget and no human in the acquisition loop — customers arrived through AI-referred channels.' },
  { n: '02', phase: 'Phase 1 · Baseline', q: 'At what unit economics?', v: 'A complete 12-asset product suite for $0.0043, against a $50–$150 human benchmark. Baseline locked as the control.' },
  { n: '03', phase: 'Phase 2 · Nov 2025–Feb 2026 · Removal', q: 'Was it the system, or the market?', v: 'Every generated asset removed; same products, prices, supplier and season. Output fell 91% across every channel on the same day — the signature of a causal variable, not seasonality.' },
  { n: '04', phase: 'Phase 2 · Dead zone', q: 'What does removal look like?', v: 'New-customer acquisition went to zero and stayed there for four months.' },
  { n: '05', phase: 'Phase 3 · Mar–Jul 2026 · Restoration', q: 'Is the collapse reversible?', v: 'Redeployed into the same entity with no other change. Output returned.' },
  { n: '06', phase: 'Phase 3 · Overshoot', q: 'Back to baseline, or past it?', v: 'Past it: order volume exceeded the Phase 1 average by 3.3×, because the system kept twelve months of accumulated memory.' },
  { n: '07', phase: 'Phase 4 · 13 Aug 2026 · High value', q: 'Does trust break at a high price point?', v: `No. A ${blackBloxie.largestOrder} order closed end-to-end by the system at $0 acquisition cost.` },
];

export default function Work() {
  return (
    <div className="container">
      <PageHead
        k="Track record"
        title={<>Everything before OXIEDO <em>was building toward it.</em></>}
        lead="Five ventures from age twelve, a first exit at fifteen, a 40,933-line agent operating system, and a real company run as a twelve-month controlled experiment. Each step hit a wall that the next one was built to break."
      >
        <Timeline />
      </PageHead>

      {/* ══ OXIMO ═════════════════════════════════════════════════ */}
      <section className="sec" id="oximo">
        <SecHead
          k={`OXIMO · ${oximo.years}`}
          title="An operating system where AI agents hire their own staff."
          lead="Hand OXIMO one sentence and it works out the org chart itself — decomposing the work, and designing, validating and hiring a new specialist agent when no existing one has the skill. Built alone."
        />
        <Stats
          items={[
            { v: oximo.lines, l: 'Lines of production code', a: true },
            { v: oximo.tests, l: 'Passing tests' },
            { v: String(oximo.repos), l: 'Independently deployable repos' },
            { v: oximo.reduction, l: `Smaller after the rebuild from a ${oximo.monolith}-line monolith` },
            { v: oximo.algorithms, l: 'Critical algorithms ported intact' },
          ]}
        />
        <div style={{ marginTop: 22 }}>
          <EngineeringVisualization />
        </div>
        <div className="note-x">
          <p className="p">
            <strong>Why it led to ORMAS.</strong> Every OXIMO agent runs on somebody else’s model. When the system began learning
            from a real company’s messy production data, every published noise-handling method failed — the problem was inside
            the model, one floor below anything orchestration could reach. That wall became the ORMAS research question.
          </p>
        </div>
      </section>

      {/* ══ Black Bloxie ══════════════════════════════════════════ */}
      <section className="sec" id="black-bloxie">
        <SecHead
          k={`Black Bloxie LTD · ${blackBloxie.years}`}
          title="A real company, run by OXIMO, used as a controlled experiment."
          lead="Anyone can deploy an AI system and post revenue — it proves nothing, because you never learn whether the market would have delivered anyway. So OXIMO ran a registered UK company for twelve months, and was removed and restored to measure exactly what it caused."
        />
        <Stats
          items={[
            { v: blackBloxie.removal, l: 'Commercial output when the system was removed', a: true },
            { v: blackBloxie.restore, l: 'Output on restoration, against the removal baseline' },
            { v: String(blackBloxie.customers), l: `Paying customers in ${blackBloxie.countries} countries` },
            { v: `${blackBloxie.months} months`, l: 'Seven-stage falsification study' },
          ]}
        />
        <div className="kv" style={{ marginTop: 14 }}>
          <div className="kv-row"><div className="kv-k">What it tests</div><div className="kv-v">OXIMO, the orchestration layer. ORMAS has its own, separate evidence.</div></div>
          <div className="kv-row"><div className="kv-k">Commercial record</div><div className="kv-v">{blackBloxie.customers} paying customers · {blackBloxie.orders} orders · {blackBloxie.revenue} verified revenue · largest single order {blackBloxie.largestOrder} at $0 acquisition cost</div></div>
          <div className="kv-row"><div className="kv-k">Scale</div><div className="kv-v">Research-scale by design: no jurisdiction yet assigns commercial liability to an autonomous agent, so the study was capped deliberately.</div></div>
          <div className="kv-row"><div className="kv-k">Reports</div><div className="kv-v">
            <a className="lnk" href={links.bbCommercial} target="_blank" rel="noreferrer">Commercial evidence report <Icon name="externalLink" size={12} /></a>{' · '}
            <a className="lnk" href={links.bbTechnical} target="_blank" rel="noreferrer">System architecture paper <Icon name="externalLink" size={12} /></a>
          </div></div>
        </div>

        <details className="dz">
          <summary><span><div className="dz-t">The falsification ladder</div><div className="dz-s">Seven questions, each one a test the thesis could have failed</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <div className="tl" style={{ marginTop: 18 }}>
              {rungs.map((r) => (
                <div className="tl-row" key={r.n}>
                  <div className="tl-when"><div className="tl-y">{r.n}</div></div>
                  <div className="tl-sp"><span className="tl-dot" /></div>
                  <div className="tl-body">
                    <div className="card-k" style={{ marginBottom: 4 }}>{r.phase}</div>
                    <div className="tl-t">{r.q}</div>
                    <div className="tl-d">{r.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ══ Ventures ══════════════════════════════════════════════ */}
      <section className="sec" id="ventures">
        <SecHead
          k="Ventures · 2020–2025"
          title="Five ventures and a first exit, from age twelve."
          lead="Each broke at a different layer. All five pointed at the same finding — and the ~$10,000 exit at fifteen paid for the GPU that ran every ORMAS experiment."
        />
        <div className="g2">
          <div className="card-x">
            <div className="card-k">First exit · age 15</div>
            <h3 className="h3">A stock-prediction system, built and sold for ~$10,000</h3>
            <p className="p">Built on market microstructure and institutional flow. The proceeds bought the RTX 3090 behind all 383 ORMAS experiments.</p>
          </div>
          {ventures.map((v) => (
            <div className="card-x" key={v.n}>
              <div className="card-k">{v.n} · age {v.age}</div>
              <h3 className="h3">{v.title}</h3>
              <p className="p">{v.lesson}</p>
            </div>
          ))}
        </div>
        <div className="note-x">
          <p className="p"><strong>The finding.</strong> The limit was never individual capability. It was coordination — a structural problem that needed a structural answer. That answer was OXIMO.</p>
        </div>
      </section>

      <section className="sec"><ContactBand /></section>
    </div>
  );
}
