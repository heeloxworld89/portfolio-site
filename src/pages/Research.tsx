import { Link } from 'react-router-dom';
import Icon from '@/components/common/Icon';
import ResearchVisualization from '@/components/viz/ResearchVisualization';
import CherryVisualization from '@/components/viz/CherryVisualization';
import { links, ormas } from '@/data/facts';
import { PageHead, PaperCard, SecHead, Stats, ContactBand } from '@/components/site/blocks';

type Row = (string | { v: string; hi?: boolean })[];

function Table({ head, rows, cap }: { head: string[]; rows: Row[]; cap?: string }) {
  return (
    <>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => {
                  const cell = typeof c === 'string' ? { v: c } : c;
                  return <td key={j} className={`${j > 0 ? 'num' : ''}${cell.hi ? ' hi' : ''}`}>{cell.v}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cap ? <p className="tbl-cap">{cap}</p> : null}
    </>
  );
}

const hi = (v: string) => ({ v, hi: true });

export default function Research() {
  return (
    <div className="container">
      <PageHead
        k="Research · ORMAS"
        title={<>The neural network that repairs itself — <em>and shows its work.</em></>}
        lead={
          <>
            ORMAS is a training architecture in which every component of a network continuously reports its own health.
            When a part fails, the network knows which one, diagnoses why, repairs it mid-training and logs every step.
            It is the technology OXIEDO licenses, published open-access so anyone can read, cite and test it.
          </>
        }
      >
        <PaperCard withCite />
      </PageHead>

      {/* ══ Plain English ═════════════════════════════════════════ */}
      <section className="sec">
        <SecHead k="In plain English" title="Three sentences for anyone who isn’t a machine-learning researcher." />
        <div className="g3">
          <div className="card-x">
            <div className="card-k">The problem</div>
            <p className="p">In a standard network one error signal touches every parameter at once. When something breaks inside, no number anywhere says what — the failure is invisible until the whole model degrades.</p>
          </div>
          <div className="card-x">
            <div className="card-k">The idea</div>
            <p className="p">Give every component a short, bounded path to its own local score. Now each part can tell healthy from broken, and a failure stays attributable to the part that caused it.</p>
          </div>
          <div className="card-x">
            <div className="card-k">The result</div>
            <p className="p">A network that detects, repairs and documents its own failures while it trains — the audit trail regulated institutions need before they can let a model learn from their data.</p>
          </div>
        </div>
      </section>

      {/* ══ Headline results ══════════════════════════════════════ */}
      <section className="sec">
        <SecHead
          k="Headline results"
          title={`${ormas.experiments} controlled experiments. Four architecture families. One GPU.`}
          lead="Every figure below is from the preprint, measured against standard networks of matched size and compute."
        />
        <Stats
          items={[
            { v: ormas.lesion.ormas, l: `Recovery after a layer is destroyed mid-training. Standard network: ${ormas.lesion.base}, permanently.`, a: true },
            { v: ormas.allLayer.ormas, l: `Recovery after every convolutional layer is destroyed at once. Standard: ${ormas.allLayer.base}.` },
            { v: ormas.retention.ormas, l: `Earlier task retained after learning a new one, no replay buffer. Standard ResNet-18: ${ormas.retention.base}.` },
            { v: ormas.zeroShot.ormas, l: `Accuracy on combinations never seen in training (chance: ${ormas.zeroShot.chance}).` },
            { v: ormas.noise.ormasDecay, l: `Accuracy lost with 40% of labels wrong. Standard network: ${ormas.noise.baseDecay}.` },
            { v: `${ormas.decay.peak} → ${ormas.decay.after}`, l: 'Repairs per epoch, from peak to zero — the network stops needing them.' },
          ]}
        />
      </section>

      {/* ══ Video ═════════════════════════════════════════════════ */}
      <section className="sec">
        <div className="hero" style={{ alignItems: 'center' }}>
          <div>
            <span className="k"><Icon name="play" size={13} /> Presentation · 7 min 40 s</span>
            <h2 className="h2">The whole argument, out loud.</h2>
            <p className="p">Autonomous recovery from catastrophic failure, memory that emerges without replay buffers, and why transparency is an engineering problem rather than a philosophical one.</p>
          </div>
          <div className="video">
            <iframe src={links.videoResearch} allowFullScreen loading="lazy" title="Explaining ORMAS: transparent neural networks that self-heal" />
          </div>
        </div>
      </section>

      {/* ══ One picture ═══════════════════════════════════════════ */}
      <section className="sec">
        <SecHead
          k="The difference"
          title="The same failure, in two architectures."
          lead="The headline claim is not accuracy — it is attribution. Here is one node dying in a standard network and in ORMAS, with the telemetry quoted from the paper."
        />
        <ResearchVisualization />
      </section>

      {/* ══ How it works ══════════════════════════════════════════ */}
      <section className="sec">
        <SecHead k="How it works" title="Three learning signals instead of one." />
        <div className="g3">
          <div className="card-x">
            <div className="card-k">Signal 1 · Global</div>
            <h3 className="h3">Standard backpropagation</h3>
            <p className="p">The usual training signal, unchanged. ORMAS keeps everything a normal network already does well.</p>
          </div>
          <div className="card-x">
            <div className="card-k">Signal 2 · Local</div>
            <h3 className="h3">A health score for every part</h3>
            <p className="p">Each node is scored through a small shared bottleneck on its own features — a baseline it cannot cheat by memorising noise.</p>
          </div>
          <div className="card-x">
            <div className="card-k">Signal 3 · Repair</div>
            <h3 className="h3">Health-gated self-correction</h3>
            <p className="p">When a node’s health drops, ORMAS diagnoses one of {ormas.pathologies} pathology types, applies a targeted, bounded repair, and verifies it before committing.</p>
          </div>
        </div>
        <div className="note-x">
          <p className="p">
            <strong>{ormas.telemetryLayers} layers of telemetry come out of the training pass itself</strong> — system health, component
            conflict, per-node diagnosis, correction trace and per-parameter attribution. Nothing is reconstructed afterwards.
            That record is the product OXIEDO sells: <a className="lnk" href={links.company} target="_blank" rel="noreferrer">see oxiedo.com</a>.
          </p>
        </div>
      </section>

      {/* ══ For reviewers ═════════════════════════════════════════ */}
      <section className="sec" id="reviewers">
        <SecHead
          k="For reviewers"
          title="Every table, straight from the preprint."
          lead="Method, full results, ablations, stability analysis and scope — for reviewers, engineers and technical due diligence."
        />

        <details className="dz">
          <summary><span><div className="dz-t">Structural recovery</div><div className="dz-s">Mid-training attacks, extreme scenarios, weight perturbation, scale</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <div className="tbl-h">Table 1 · Mid-training attack recovery (clean CIFAR-10, attack at epoch 100)</div>
            <Table
              head={['Attack', 'ORMAS', 'Baseline', 'Gap', 'Corrections']}
              rows={[
                ['Dead-layer lesion', hi('80.3 ± 1.6%'), '10.0 ± 0.0%', hi('+70.3 pp'), '85 ± 11'],
                ['Full-hierarchy lesion (single seed)', hi('72.9%'), '10.0%', hi('+62.9 pp'), '72'],
              ]}
              cap="Mean ± std over 3 seeds. Telemetry flags the damaged node within one epoch; the 85 corrections concentrate in the 15 epochs after the attack. Per seed: 79.9%, 81.9%, 79.0% (Table S17)."
            />
            <div className="tbl-h">Table 2 · Extreme scenarios</div>
            <Table
              head={['Scenario', 'Standard', 'ORMAS', 'Gap']}
              rows={[
                ['Simultaneous full-hierarchy lesion', '10.0 ± 0.0%', hi('70.8 ± 2.2%'), hi('+60.8 pp')],
                ['Compounded structural + 40% noise*', '10.0 ± 0.0%', '31.8, 76.9, 69.4%', 'Seed-dependent'],
                ['High-cardinality lesion (CIFAR-100)*', '1.0 ± 0.0%', '7.4, 25.8, 27.1%', 'Seed-dependent'],
                ['Adversarial weight injection', '84.1 ± 0.3%', '83.1 ± 0.3%', '−1.0 pp'],
                ['Weight explosion (100×)', '86.0 ± 0.1%', '85.1 ± 0.4%', '−0.9 pp'],
              ]}
              cap="* Recovery varies widely across seeds, so per-run accuracies are reported rather than a mean. Adversarial weights are crafted to keep activation statistics nominal — outside the intended threat model."
            />
            <div className="tbl-h">Table S15 · Gaussian weight perturbation at step 1,000 (CNN, 3 seeds)</div>
            <Table
              head={['σ', 'Standard final', 'ORMAS final', 'Standard recovery', 'ORMAS recovery']}
              rows={[
                ['0.1', '82.1%', '80.2%', '+2.7 pp', '+3.1 pp'],
                ['0.5', '74.8%', hi('78.6%'), '+6.5 pp', hi('+11.7 pp')],
                ['1.0', '59.0%', hi('75.4%'), '+17.6 pp', hi('+34.0 pp')],
                ['2.0', '38.2%', hi('62.1%'), '+28.2 pp', hi('+52.1 pp')],
              ]}
              cap="The recovery advantage grows with the severity of the damage. Mixup collapses to 33.3% at σ = 1.0 and does not recover."
            />
            <div className="tbl-h">Scale</div>
            <p className="p">An 11.24M-parameter Fat CNN recovers from catastrophic weight perturbation: 88.9% → 22.7% → 69.3% (Table S13). On ResNet-18 with two stages destroyed, ORMAS recovers to 91.7% through 264 logged corrections; the vanilla ResNet-18 recovers blindly to 92.6%. At that scale the contribution is the audit trail, not accuracy.</p>
          </div>
        </details>

        <details className="dz">
          <summary><span><div className="dz-t">Noise robustness</div><div className="dz-s">Symmetric, asymmetric and real human-annotator noise; CIFAR-100</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <div className="tbl-h">Table S14 · 200 epochs at 40% symmetric label noise (CIFAR-10)</div>
            <Table
              head={['Model', 'Peak', 'Final', 'Decay']}
              rows={[
                ['Standard CNN', '77.4 ± 0.4%', '69.6 ± 0.9%', '7.8 pp'],
                ['ORMAS CNN', hi('78.1 ± 0.4%'), hi('75.6 ± 0.8%'), hi('2.5 pp')],
              ]}
              cap="Equal compute. ORMAS n = 5, Standard n = 3."
            />
            <div className="tbl-h">Table S9 · Asymmetric (class-flipping) noise</div>
            <Table
              head={['Method', 'Asym 20%', 'Asym 30%', 'Asym 40%']}
              rows={[
                ['ORMAS CNN', hi('84.3 ± 0.3%'), hi('83.1 ± 0.1%'), hi('80.6 ± 0.3%')],
                ['Standard CNN', '83.3 ± 0.4%', '81.5 ± 0.6%', '78.0 ± 0.2%'],
                ['Mixup', '53.6 ± 0.4%', '52.0 ± 0.1%', '50.0 ± 0.1%'],
              ]}
            />
            <div className="tbl-h">Table S11 · Real human-annotator noise (CIFAR-10N)</div>
            <Table
              head={['Method', 'Worse labels', 'Aggregate labels']}
              rows={[
                ['ORMAS CNN', hi('76.1 ± 0.1%'), hi('83.9 ± 0.0%')],
                ['Standard CNN', '75.3 ± 0.3%', '83.8 ± 0.0%'],
              ]}
              cap="Decay from best to final: ORMAS 2.7 pp, standard 3.7 pp."
            />
            <div className="tbl-h">Table S10 · CIFAR-100</div>
            <Table
              head={['Method', 'Clean', 'Sym 30%', 'Sym 40%']}
              rows={[
                ['ORMAS CNN', '57.0 ± 0.4%', hi('49.3 ± 1.2%'), hi('45.4 ± 0.8%')],
                ['Standard CNN', '58.1 ± 0.2%', '48.4 ± 0.3%', '44.1 ± 0.4%'],
              ]}
            />
            <p className="p">Heavy Dropout (p = 0.5) matches ORMAS on label noise (78.1% at 40%) — and collapses to 10.0% under the dead-layer lesion. Regularisation masks noise; structural transparency diagnoses and repairs damage.</p>
          </div>
        </details>

        <details className="dz">
          <summary><span><div className="dz-t">Memory and composition</div><div className="dz-s">Sequential learning with no replay buffer; zero-shot combinations</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <div className="tbl-h">Table 3 · Zero-shot compositional generalisation (3 seeds)</div>
            <Table
              head={['Model', 'Phase 1 shape', 'Phase 2 colour', 'Shape retained', 'Zero-shot 4-way', 'vs chance']}
              rows={[
                ['Standard ResNet-18', '83.6%', '91.4%', '47.3%', '51.1%', '+26.1 pp'],
                ['ORMAS three-signal', hi('94.6%'), hi('96.5%'), hi('94.6%'), hi('58.8%'), hi('+33.8 pp')],
              ]}
              cap="Trained on shape, then colour, with no replay buffer. The independence ceiling is 91.3%. Ablating PCGrad while keeping self-correction gives 59.1 ± 3.6% — indistinguishable — pointing to the self-correction lifecycle as the driver."
            />
          </div>
        </details>

        <details className="dz">
          <summary><span><div className="dz-t">Method, ablations and diagnoses</div><div className="dz-s">What each signal contributes; the eight diagnostic categories; hyperparameters; cost</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <div className="tbl-h">Update rule</div>
            <div className="fx">
              w<sub>t+1</sub> = w<sub>t</sub> − η ∇L<sub>global</sub> − η β(t) ∇̃L<sub>local</sub> + Δ<sub>corr</sub>
            </div>
            <p className="p">Signal 2’s local gradient is PCGrad-projected against the global one; Signal 3’s corrections Δ<sub>corr</sub> are mean-subtracted (Σ Δw = 0), so they redistribute weight magnitude rather than create it. Node health is a multiplicative goodness score g = loss-health × gradient-health × output-stability, floored at 0.3.</p>

            <div className="tbl-h">Table S2 · Ablation (CIFAR-10, 30% symmetric noise)</div>
            <Table
              head={['Configuration', 'Arch.', 'Best', 'Final', 'Corrections / run']}
              rows={[
                ['Full ORMAS', 'DAG', '49.9%', '40.1%', '22,014'],
                ['− Self-correction', 'DAG', '14.2%', 'NaN (collapse)', '0'],
                ['− PCGrad', 'DAG', '12.1%', 'NaN (collapse)', '—'],
                ['− Signal 2 (βmax = 0)', 'CNN', '80.0 ± 0.3%', '77.99 ± 0.98%', '0'],
                ['Full ORMAS', 'CNN', '80.0 ± 0.2%', '78.1 ± 0.3%', '61'],
                ['− PCGrad', 'CNN', '80.0 ± 0.2%', '78.1 ± 0.2%', '> 12,400'],
              ]}
              cap="On the 50-node DAG, removing either mechanism collapses training. On the CNN, removing PCGrad leaves accuracy intact but forces over 12,400 corrections per run instead of 61 — PCGrad is the gradient-level buffer, self-correction the weight-level one."
            />

            <div className="tbl-h">Table S18 · Diagnoses and treatments</div>
            <Table
              head={['Diagnosis', 'Trigger', 'Treatment', 'Clip']}
              rows={[
                ['Exploded', 'Output > 500', '90% anti-Hebbian scale reduction', '90%'],
                ['Dead (transient)', 'Zero output < τdead epochs', 'Anti-Hebbian rescaling to Kaiming scale', '30%'],
                ['Dead (chronic)', 'Zero output ≥ τdead epochs', 'Full Kaiming reinitialisation', 'n/a'],
                ['Saturated', 'Output > 2× historical median', 'Magnitude dampening', '30%'],
                ['Oscillating', 'Sign changes in > 60% of updates', 'Momentum-based fixing', '10%'],
                ['Loss stagnant', 'Local loss flat for 50 steps', 'Escalated noise perturbation', '10%'],
                ['Gradient dead', '‖∇‖ < 10⁻⁵ for 3+ epochs', 'Weight-scaling restart', '25%'],
                ['Low confidence', 'Goodness < 0.20, no other diagnosis', 'Targeted noise perturbation', '15%'],
              ]}
              cap="Seven pathology types; the dead-node pathology has transient and chronic treatments. Every correction is verified by a forward pass and rolled back if both global and local loss worsen."
            />

            <div className="tbl-h">Table S19 · Corrections fade as the network stabilises (CNN, 40% noise, 5 seeds)</div>
            <Table
              head={['Epochs', 'Mean corrections / epoch', 'Total', 'Phase']}
              rows={[
                ['0–50', '1.35 (peak 4.2)', '67.6', 'Calibration'],
                ['50–100', hi('0.00'), '0', 'Self-stabilised'],
                ['100–200', hi('0.00'), '0', 'Converged'],
              ]}
              cap="On the 50-node DAG the rate falls from 4.2 to 0.05 per epoch."
            />

            <div className="tbl-h">Hyperparameters and cost</div>
            <p className="p">Across seven hyperparameter configurations accuracy varies by at most 0.3 pp (Table S5); across a 16× range of bottleneck widths, variance stays under 0.8%. Per-step overhead is 1.35× on the DAG — the algorithmic floor — and 2.16× wall-clock on the CNN, where unfused Python loops dominate (Table S7).</p>
          </div>
        </details>

        <details className="dz">
          <summary><span><div className="dz-t">Stability analysis</div><div className="dz-s">A local Input-to-State Stability characterisation of the correction mechanism</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <p className="p" style={{ marginTop: 14 }}>
              A self-correcting network is a system perturbed by corrupted data, by structural damage and by its own corrections.
              ORMAS adapts Sontag’s Input-to-State Stability framework from control theory: each correction is treated as a bounded
              input disturbance and the weight trajectory as the state. The conservation constraint bounds every correction, giving
              a local ultimate bound on the trajectory:
            </p>
            <div className="fx">lim sup<sub>t→∞</sub> ‖θ(t) − θ*‖ ≤ γ(ε) = ε / (μη)</div>
            <p className="p">
              Empirically, late-stage parameter variance falls from 0.86 in a standard CNN to 0.19 with ORMAS — a 4.5× reduction — and as
              corrections fade to zero the bound tightens. The characterisation is local by design: a global proof is defined over a fixed
              parameter space, and a network that can grow new components changes that space.
            </p>
          </div>
        </details>

        <details className="dz">
          <summary><span><div className="dz-t">Scope, reproducibility and data</div><div className="dz-s">What the paper claims, what it doesn’t, and how to check it</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <div className="kv" style={{ marginTop: 14 }}>
              <div className="kv-row"><div className="kv-k">Claim</div><div className="kv-v">A single network can match standard accuracy while providing per-node causal attribution — and that attribution is what enables recovery standard architectures cannot achieve. Accuracy is the evidence; transparency is the contribution.</div></div>
              <div className="kv-row"><div className="kv-k">Evaluated on</div><div className="kv-v">CIFAR-10 and CIFAR-100; FC-DAG, CNN, 11M Fat CNN and ResNet-18.</div></div>
              <div className="kv-row"><div className="kv-k">Known boundaries</div><div className="kv-v">Over-parameterised residual networks already recover blindly; the most severe compound damage is seed-dependent; adversarial weights are out of scope; telemetry is structural, not semantic.</div></div>
              <div className="kv-row"><div className="kv-k">Hardware</div><div className="kv-v">All {ormas.experiments} experiments on a single RTX 3090 (24 GB). Core claims reproduce in under an hour; the full suite needs proportionally more GPU time.</div></div>
              <div className="kv-row"><div className="kv-k">Code</div><div className="kv-v">{ormas.codeLines} lines of research infrastructure with a one-command reproduction harness. Available to reviewers on request while the paper is under double-blind review.</div></div>
              <div className="kv-row"><div className="kv-k">Data</div><div className="kv-v"><a className="lnk" href={links.telemetry} target="_blank" rel="noreferrer">GlassBox telemetry archive <Icon name="externalLink" size={12} /></a> — every correction event, per node, per epoch.</div></div>
            </div>
          </div>
        </details>
      </section>

      {/* ══ What's next ═══════════════════════════════════════════ */}
      <section className="sec" id="next">
        <SecHead
          k="What’s next"
          title="From CNNs to Transformers — then a network that grows."
          lead="The mechanism is architecture-agnostic. The next milestones are the ones OXIEDO’s round funds."
        />
        <div className="g2">
          <div className="card-x">
            <div className="card-k">Next · ORMAS-T</div>
            <h3 className="h3">Transformer-scale validation</h3>
            <p className="p">Carry three-signal learning onto attention: per-head health, and a pathology catalogue for dead, saturated and gradient-dead heads. Gated on multi-node H100/A100 compute.</p>
          </div>
          <div className="card-x">
            <div className="card-k">Then · Project Cherry</div>
            <h3 className="h3">A mesh of small specialists that grows its own capacity</h3>
            <p className="p">Once a network knows which part is failing, it can add a part — with zero net disturbance to what already works. Cherry is fully specified and deliberately not yet started.</p>
          </div>
        </div>
        <details className="dz">
          <summary><span><div className="dz-t">Project Cherry, in one picture</div><div className="dz-s">The design, compared with today’s monolithic models</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b" style={{ paddingTop: 18 }}><CherryVisualization /></div>
        </details>
      </section>

      <section className="sec">
        <ContactBand
          title="Review it. Cite it. Build on it."
          body={<>Questions about the method, requests for code access, or collaboration — email directly. For the commercial side, see <Link className="lnk" style={{ color: 'inherit', textDecoration: 'underline' }} to="/#company">OXIEDO</Link>.</>}
        />
      </section>
    </div>
  );
}
