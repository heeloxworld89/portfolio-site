import ExpandableSection from '../ExpandableSection';
import CherryVisualization from './CherryVisualization';

// OXIMO (orchestration) → Cherry (weight space). The correspondence is the thesis.
const correspondence = [
  { from: 'RoleTable — agent identity, skills, department', to: 'Node identity and position in the graph' },
  { from: 'BrainTable — maturity stage, confidence score', to: 'The node’s weights and its goodness score' },
  { from: 'KnowledgeCellTable — categorised domain knowledge', to: 'Weight-bound categorised memory' },
  { from: 'Self-Hiring Pipeline — creates an agent when no skill exists', to: 'Silent Node Injection — a node enters live, zero net perturbation' },
  { from: 'Sacred Chain — Master → Department → Employee', to: 'The layered mesh structure of the network' },
  { from: 'DynamicRouter — classifies task, picks execution path', to: 'Learned routing across the node graph' },
  { from: 'PostTaskLearner — updates brain confidence, records lessons', to: 'Health gate updating node goodness in real time' },
  { from: 'DecayManager — Ebbinghaus curve on unused knowledge', to: 'Goodness decay on unused nodes' },
  { from: 'Circuit Breaker — isolates a failing provider', to: 'Health-gated isolation and repair of a failing node' },
];

const notThis = [
  { k: 'Not fine-tuning', v: 'Fine-tuning is a discrete event against a frozen base, and it forgets. Cherry has no frozen base and no discrete event.' },
  { k: 'Not LoRA or adapters', v: 'Adapters need a task ID at inference — you must already know which one to load. Here, which nodes activate is the result of routing, not an input to it.' },
  { k: 'Not Mixture-of-Experts', v: 'The closest existing thing, and the difference is instructive. MoE fixes the expert count before training, freezes its gate, and monitors nothing per-expert. Cherry’s node count is unknown in advance and grows on demand, and every node is independently monitored and repairable.' },
  { k: 'Not an agent framework', v: 'CrewAI, LangGraph and AutoGen orchestrate calls to somebody else’s frozen model. The intelligence is rented and the data leaves. Cherry’s intelligence is the mesh itself.' },
  { k: 'Not a frontier-scale general model', v: 'A deliberate refusal, not a shortfall in ambition. The industry is racing toward trillion-parameter generalists. This goes the other way and bets the correct unit is many small specialists.' },
];

export default function CVProjectCherry() {
  return (
    <div className="row mb--50" id="cherry">
      <style>{`
        .ch-lead { font-size: 17px; line-height: 1.85; color: #9aa4b0; max-width: 760px; margin: 0 0 20px; }
        .ch-lead strong { color: #c4cfde; font-weight: 600; }

        .ch-status {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(255,74,87,0.08); border: 1px solid rgba(255,74,87,0.3);
          border-radius: 999px; padding: 7px 16px; margin-bottom: 24px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: #ff6b76;
        }
        .ch-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #ff6b76;
        }

        .ch-label {
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #c4cfde;
          margin: 46px 0 16px; padding-bottom: 9px;
          border-bottom: 1px solid #2a2d32;
        }
        .ch-p { font-size: 16px; line-height: 1.85; color: #9aa4b0; margin: 0 0 16px; max-width: 780px; }
        .ch-p strong { color: #c4cfde; font-weight: 600; }
        .ch-p:last-child { margin-bottom: 0; }

        .ch-hero {
          background: #191b1e; border: 1px solid #2a2d32;
          border-left: 2px solid #ff4a57; border-radius: 0 10px 10px 0;
          padding: 26px 30px; margin-bottom: 34px;
        }
        .ch-hero p { font-size: 17px; line-height: 1.8; color: #c4cfde; margin: 0; font-weight: 500; }
        .ch-hero strong { color: #fff; font-weight: 700; }

        .ch-lifecycle { border: 1px solid #2a2d32; border-radius: 10px; overflow: hidden; margin-bottom: 16px; }
        .ch-lc-head {
          display: grid; grid-template-columns: 150px 1fr; gap: 18px;
          padding: 11px 20px; background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32;
          font-size: 10px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: #838d99;
        }
        .ch-lc-row {
          display: grid; grid-template-columns: 150px 1fr; gap: 18px;
          padding: 14px 20px; background: #191b1e;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .ch-lc-row:last-child { border-bottom: none; }
        .ch-lc-stage { font-size: 13px; font-weight: 700; color: #ff6b76; }
        .ch-lc-why { font-size: 14px; line-height: 1.7; color: #9aa4b0; }
        @media (max-width: 640px) {
          .ch-lc-head { display: none; }
          .ch-lc-row { grid-template-columns: 1fr; gap: 5px; }
        }

        .ch-map { border: 1px solid #2a2d32; border-radius: 10px; overflow: hidden; margin-bottom: 16px; }
        .ch-map-head {
          display: grid; grid-template-columns: 1fr 32px 1fr; gap: 14px;
          padding: 11px 20px; background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32;
          font-size: 10px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: #838d99;
        }
        .ch-map-row {
          display: grid; grid-template-columns: 1fr 32px 1fr; gap: 14px;
          align-items: center; padding: 13px 20px; background: #191b1e;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .ch-map-row:last-child { border-bottom: none; }
        .ch-map-from { font-size: 13px; color: #9aa4b0; line-height: 1.6; }
        .ch-map-arrow { color: #ff6b76; text-align: center; font-size: 14px; }
        .ch-map-to { font-size: 13px; color: #c4cfde; font-weight: 600; line-height: 1.6; }
        @media (max-width: 700px) {
          .ch-map-head { display: none; }
          .ch-map-row { grid-template-columns: 1fr; gap: 5px; }
          .ch-map-arrow { display: none; }
        }

        .ch-not { display: flex; flex-direction: column; gap: 2px; }
        .ch-not-row {
          display: grid; grid-template-columns: 230px 1fr; gap: 20px;
          background: #191b1e; border: 1px solid #2a2d32; padding: 18px 22px;
        }
        @media (max-width: 700px) { .ch-not-row { grid-template-columns: 1fr; gap: 6px; } }
        .ch-not-k { font-size: 14px; font-weight: 700; color: #c4cfde; }
        .ch-not-v { font-size: 14px; line-height: 1.7; color: #9aa4b0; }

        .ch-tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; }
        .ch-tier { background: #191b1e; border: 1px solid #2a2d32; border-radius: 10px; padding: 22px 24px; }
        .ch-tier-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; margin-bottom: 10px;
        }
        .ch-tier.is-built .ch-tier-tag { color: #7fd88f; }
        .ch-tier.is-gated .ch-tier-tag { color: #c4cfde; }
        .ch-tier.is-open  .ch-tier-tag { color: #ff6b76; }
        .ch-tier ul { list-style: none; padding: 0; margin: 0; }
        .ch-tier li {
          font-size: 13.5px; line-height: 1.7; color: #9aa4b0;
          padding-left: 15px; position: relative; margin-bottom: 9px;
        }
        .ch-tier li:last-child { margin-bottom: 0; }
        .ch-tier li::before {
          content: ""; position: absolute; left: 0; top: 9px;
          width: 4px; height: 4px; border-radius: 50%; background: #565d68;
        }
        .ch-tier li strong { color: #c4cfde; font-weight: 600; }

        .ch-chain {
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 10px;
          padding: 8px; display: flex; flex-direction: column; gap: 2px;
        }
        .ch-chain-step {
          position: relative; padding: 15px 20px; border-radius: 6px;
          background: rgba(255,255,255,0.015);
        }
        .ch-chain-name { font-size: 14px; font-weight: 700; color: #c4cfde; margin-bottom: 4px; }
        .ch-chain-wall { font-size: 13px; line-height: 1.65; color: #a6b0bc; }
        .ch-chain-wall em { color: #ff6b76; font-style: normal; font-weight: 600; }
        .ch-chain-step.is-end { background: rgba(255,74,87,0.06); border: 1px solid rgba(255,74,87,0.28); }
        .ch-chain-step.is-end .ch-chain-name { color: #fff; }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
          Layer 3 — The End of the Chain
        </span>
        <h2 className="title fs-2" style={{ fontWeight: 800, color: '#fff', marginBottom: '14px' }}>
          Project Cherry
        </h2>

        <div className="ch-status"><span className="ch-status-dot" /> Not Built · Specified by OXIMO, Enabled by ORMAS</div>

        <p className="ch-lead">
          Every frontier lab is building the same shape of object: one enormous general model, trained once, frozen at a
          cutoff, then wrapped in retrieval and guardrails and sold into every context — including ones it structurally
          cannot serve. That shape is excellent for consumers. It fails for regulated institutions, and it fails for a
          reason no amount of scale repairs.
        </p>

        <div className="ch-hero">
          <p>
            Cherry is a different shape of object. <strong>Not one large model but a growing mesh of small, deeply
            specialised models</strong> — each carrying its own weights and its own categorised memory, routed
            dynamically, learning continuously in real time, and inspectable throughout because the architecture emits
            its own telemetry. The industry is trying to make the general model work for the institution. This inverts
            it: the model is built inside the institution, on its data, and specialises there permanently.
          </p>
        </div>

        {/* ── Why the current shape fails ─────────────────────────────── */}
        <div className="ch-label">Why the Standard Lifecycle Cannot Serve These Buyers</div>
        <p className="ch-p">
          The standard sequence is <strong>train → freeze → deploy → fine-tune → freeze again</strong>. For a consumer
          that is fine. For an institution whose data cannot leave and whose regulator asks what changed, every stage is
          a defect.
        </p>
        <div className="ch-lifecycle">
          <div className="ch-lc-head"><div>Stage</div><div>Why it fails the institutional case</div></div>
          {[
            ['Train', 'On public data. The institution’s actual knowledge — the thing that makes it valuable — is not in there, and cannot be put in there without moving it.'],
            ['Freeze', 'The model stops at a cutoff. Institutional reality does not.'],
            ['Deploy', 'Inference is an API call. For locked data that is disqualifying before any accuracy question is asked.'],
            ['Fine-tune', 'Catastrophic forgetting. Teach it the new thing, lose the old thing — and every workaround needs replay buffers, task boundaries, or task IDs at inference, none of which a live deployment can supply.'],
            ['Freeze again', 'Back to a static artefact, with the record of what changed reconstructed after the fact, if it exists at all.'],
          ].map(([s, w]) => (
            <div className="ch-lc-row" key={s}>
              <div className="ch-lc-stage">{s}</div>
              <div className="ch-lc-why">{w}</div>
            </div>
          ))}
        </div>
        <p className="ch-p">
          The industry&apos;s answer is to make the general model bigger and wrap it in more scaffolding — RAG,
          guardrails, adapters, evaluation harnesses. That is engineering <em>around</em> the shape rather than changing
          it. <strong>The shape is the problem.</strong>
        </p>

        {/* ── The correspondence ──────────────────────────────────────── */}
        <div className="ch-label">OXIMO Is Already the Blueprint</div>
        <p className="ch-p">
          This is the part most easily missed, and it is what makes Cherry a build rather than a research programme.
          <strong> OXIMO already implements Cherry&apos;s topology — in software orchestration instead of weight
          space.</strong> An OXIMO agent is a role definition, plus a brain state, plus a set of knowledge cells,
          persisted across three database tables. Read those records as weight files and the correspondence is exact.
        </p>
        <div className="ch-map">
          <div className="ch-map-head"><div>OXIMO today — orchestration layer</div><div /><div>Cherry — weight layer</div></div>
          {correspondence.map((r) => (
            <div className="ch-map-row" key={r.from}>
              <div className="ch-map-from">{r.from}</div>
              <div className="ch-map-arrow">→</div>
              <div className="ch-map-to">{r.to}</div>
            </div>
          ))}
        </div>
        <p className="ch-p">
          OXIMO is not a precursor to Cherry. <strong>OXIMO is Cherry&apos;s specification — already written, already
          debugged, and already validated for eighteen months on a live company.</strong> Cherry is that same
          organisation collapsed out of the orchestration layer and down into the weights. And the collapse matters
          commercially as much as technically: today OXIMO&apos;s nodes are external API calls, which disqualifies the
          stack for a data-locked institution at the first request. When the nodes become weights the institution owns,
          the disqualifier disappears.
        </p>

        <ExpandableSection
          closedLabel="Why this requires ORMAS — and could not have been built before it"
          hint="Real-time learning, growth without collapse, specialisation without forgetting, and why a local stability bound is the enabling condition rather than a limitation."
          meta={['4 mechanisms', '94.6% retention', 'Zero-perturbation injection']}
        >
          <p className="ch-p">
            <strong>Real-time learning.</strong> Cherry has no train/deploy boundary — a node improves while operating.
            Standard backpropagation offers one global error signal with no mechanism for any unit to assess its own
            state, so there is nothing to build continuous per-node learning on top of. ORMAS&apos;s per-node local
            objective is the precondition.
          </p>
          <p className="ch-p">
            <strong>Growth without collapse.</strong> Cherry adds nodes when it meets work it cannot do — the direct
            analogue of OXIMO&apos;s self-hiring. Standard networks cannot: the parameter space changes dimension, the
            optimiser&apos;s momentum buffers become wrong-shaped, and the conserved quantity from weight-rescaling
            symmetry is violated. Mean-subtracted initialisation makes the new node&apos;s weights sum to zero, so it
            enters contributing <strong>zero net perturbation</strong> and every existing conserved quantity survives.
          </p>
          <p className="ch-p">
            <strong>Specialisation without forgetting.</strong> A mesh of specialists is worthless if specialising node
            B degrades node A. Measured: <strong>94.6% prior-task retention against ResNet-18&apos;s 47.3%</strong>, no
            replay buffer, no task labels — gradient conflict forces competing representations into physically separate
            regions of weight space.
          </p>
          <p className="ch-p">
            <strong>Locality as the enabling condition.</strong> A global convergence proof is defined over a fixed
            parameter space; the instant the mesh grows a node, that space changes dimension and the proof stops
            referring to anything. Locality is what buys topological freedom. A globally coupled, globally proven system
            could not grow. This one can.
          </p>
          <p className="ch-p">
            <strong>Observability under dynamism.</strong> A mesh whose size and shape are emergent would ordinarily be
            ungovernable. The five-layer telemetry is a physical byproduct of the forward and backward pass rather than
            a reconstruction, so the structure stays auditable precisely while it is changing. You do not know how many
            nodes there will be. You know exactly what every one of them is doing.
          </p>
        </ExpandableSection>

        {/* ── What it is not ──────────────────────────────────────────── */}
        <div className="ch-label">What It Is Not</div>
        <div className="ch-not">
          {notThis.map((r) => (
            <div className="ch-not-row" key={r.k}>
              <div className="ch-not-k">{r.k}</div>
              <div className="ch-not-v">{r.v}</div>
            </div>
          ))}
        </div>

        {/* ── The bet ─────────────────────────────────────────────────── */}
        <div className="ch-label">The Bet Underneath It</div>
        <p className="ch-p">
          For a bounded domain, a small model specialised on that domain outperforms a much larger general model at a
          fraction of the compute. If that holds, a correctly routed mesh of specialists beats one generalist across its
          coverage — provided three problems are solved: routing between specialists, specialising them continuously,
          and doing so without forgetting. ORMAS answers the second and third. OXIMO&apos;s router is a validated answer
          to the first, in orchestration form.
        </p>
        <p className="ch-p">
          The economics are already visible in production. Cascading specialised cheap models instead of single-shotting
          a frontier model produced roughly <strong>$3.50 against ~$180</strong> for equivalent output — a 99%
          reduction achieved through specialisation rather than compromise. Cherry pushes that same principle down from
          the orchestration layer into the architecture itself.
        </p>

        {/* ── Status ──────────────────────────────────────────────────── */}
        <div className="ch-label">Honest Status</div>
        <div className="ch-tiers">
          <div className="ch-tier is-built">
            <div className="ch-tier-tag">Built and validated</div>
            <ul>
              <li><strong>OXIMO</strong> — 40,933 lines, 2,069 tests, eighteen months on a live company. The topology works.</li>
              <li><strong>ORMAS</strong> — 383 experiments, four architecture families, 94.6% retention, 80.3% lesion recovery. The mechanism works.</li>
              <li><strong>Black Bloxie</strong> — −91% on removal, +1,300% on re-injection. The composition produces real output.</li>
            </ul>
          </div>
          <div className="ch-tier is-gated">
            <div className="ch-tier-tag">Designed · compute-gated</div>
            <ul>
              <li><strong>Silent Node Injection</strong> — mathematics worked from the conservation constraint; not yet run on a live network.</li>
              <li><strong>ORMAS-T</strong> — the machinery is architecture-agnostic; attention needs a pathology taxonomy, roughly sixty lines of plug-in diagnostics.</li>
              <li><strong>Cherry itself</strong> — the composition. Not started.</li>
            </ul>
          </div>
          <div className="ch-tier is-open">
            <div className="ch-tier-tag">Genuinely open</div>
            <ul>
              <li>Whether attention heads behave like conv nodes under the conservation constraint.</li>
              <li>The ceiling on node count before the graph becomes impractical.</li>
              <li>Routing quality across a large dynamic mesh — validated in orchestration, not in weight space.</li>
              <li>No clinical, financial, or defense data has touched any part of this.</li>
            </ul>
          </div>
        </div>
        <p className="ch-p" style={{ marginTop: '18px' }}>
          Projected and labelled as such: ~99% retention with dedicated per-node capacity, and a zero-shot ceiling of
          85–92%. Those are reasoned projections from measured telemetry, not results. The current 58.8% is a
          fixed-capacity artefact — Node 3 died and was resurrected <strong>eleven times</strong> because two tasks were
          competing for one block in a static graph.
        </p>

        {/* ── The chain ───────────────────────────────────────────────── */}
        <div className="ch-label">The Dependency Chain, End to End</div>
        <p className="ch-p">
          Nothing here was planned in advance. Each layer exists because the one before it hit a wall that could not be
          engineered around.
        </p>
        <div className="ch-chain">
          {[
            { n: 'Five failed ventures · ages 12–17', w: 'Finding: the bottleneck is coordination, never individual capability.' },
            { n: 'OXIMO — agents that hire agents, remember, and organise themselves', w: 'Wall: its agents must learn from real operational data, and real operational data is adversarial.' },
            { n: 'ORMAS — per-node objectives, health-gated self-correction, native telemetry', w: 'Wall: proven on a static graph. Fixed capacity caps it at 58.8%.' },
            { n: 'ORMAS-T + Silent Node Injection — dynamic capacity, growth without collapse', w: 'Wall: OXIMO still rents intelligence from an external API, so locked data stays locked.' },
          ].map((s) => (
            <div className="ch-chain-step" key={s.n}>
              <div className="ch-chain-name">{s.n}</div>
              <div className="ch-chain-wall"><em>↳</em> {s.w}</div>
            </div>
          ))}
          <div className="ch-chain-step is-end">
            <div className="ch-chain-name">Project Cherry — the OXIMO organisation collapsed into weight space</div>
            <div className="ch-chain-wall">
              A growing mesh of specialised models, learning in real time, owned by the institution, auditable by
              construction. An autonomous organisation that runs inside a firewall, gets better at that institution&apos;s
              specific work every day, and can prove what it learned. The point at which the stack stops depending on
              any intelligence but its own.
            </div>
          </div>
        </div>

        {/* ── The picture ─────────────────────────────────────────────── */}
        <div className="ch-label">What It Actually Looks Like</div>
        <p className="ch-p">
          Two systems answering the same question. Watch the left one for as long as you like — it ends in exactly the
          state it started, because that is what &ldquo;frozen&rdquo; means. Then watch the right one change while
          you&apos;re looking at it.
        </p>
        <CherryVisualization />

      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} /></div>
    </div>
  );
}
