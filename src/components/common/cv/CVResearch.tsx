import { useEffect, useRef, useState, type ReactNode } from 'react';
import Icon from '@/components/common/Icon';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ResearchVisualization from './ResearchVisualization';
import CVSection from './CVSection';

/*
 * Presentation for this section lives in src/site/ux/research.css (scoped to
 * .ux-research). Class names are prefixed `uxr-`.
 */

const RECORD_ID = 'research-record';
const RECORD_BODY_ID = 'research-record-body';

/** Table wrapper: hairline frame + horizontal scroll on narrow screens. */
function TableWrap({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="uxr-table-wrap" role="region" aria-label={label} tabIndex={0}>
      {children}
    </div>
  );
}

function Note({ kicker, children, tone }: { kicker: ReactNode; children: ReactNode; tone?: 'accent' }) {
  return (
    <aside className={`uxr-note${tone === 'accent' ? ' is-accent' : ''}`}>
      <p className="uxr-note-k">{kicker}</p>
      {children}
    </aside>
  );
}

export default function CVResearch() {
  const noiseData = [
    { name: 'ORMAS CNN', best: 78.1, final: 75.6 },
    { name: 'Standard CNN', best: 77.4, final: 69.6 },
    { name: 'Mixup', best: 46.9, final: 36.5 },
  ];

  const pathologies = [
    { name: 'Dead Neuron',    symptom: 'Output permanently near zero',  treatment: 'Kaiming reinitialisation' },
    { name: 'Exploded',       symptom: 'Activations > 500.0',           treatment: '90% Anti-Hebbian scale reduction' },
    { name: 'Saturated',      symptom: 'Outputs stuck at max',           treatment: 'Self-referential magnitude dampening' },
    { name: 'Oscillating',    symptom: 'Weights swinging wildly',        treatment: 'Momentum-based directional fixing' },
    { name: 'Loss Stagnant',  symptom: 'Stuck on a plateau',             treatment: 'Escalated noise perturbation' },
    { name: 'Gradient Dead',  symptom: 'Zero gradient flow',             treatment: 'Weight scaling to restart flow' },
    { name: 'Low Confidence', symptom: 'Uncertain output',               treatment: 'Targeted noise perturbation' },
  ];

  const recoveryRows = [
    { sigma: 'σ = 0.1', postBlast: '77.1% → 80.2%', ormas: '80.2%', std: '82.1%', gap: '−1.9pp' },
    { sigma: 'σ = 0.5', postBlast: '66.9% → 78.6%', ormas: '78.6%', std: '74.8%', gap: '+3.8pp' },
    { sigma: 'σ = 1.0', postBlast: '41.4% → 75.4%', ormas: '75.4%', std: '59.0%', gap: '+16.4pp' },
    { sigma: 'σ = 2.0', postBlast: '10.0% → 62.1%', ormas: '62.1%', std: '38.2%', gap: '+23.9pp' },
  ];

  // Asymmetric noise full table (from supplementary)
  const asymNoiseRows = [
    { noise: 'Sym 40% (final)', ormas: '75.6% ±0.8%', std: '69.6% ±0.9%', mixup: '36.5%', note: 'Peak decay: ORMAS 2.5pp vs CNN 7.8pp' },
    { noise: 'Asym 20%', ormas: '84.3% ±0.3%', std: '83.3% ±0.4%', mixup: '53.6%', note: '' },
    { noise: 'Asym 30%', ormas: '83.1% ±0.1%', std: '81.5% ±0.6%', mixup: '52.0%', note: '' },
    { noise: 'Asym 40%', ormas: '80.6% ±0.3%', std: '78.0% ±0.2%', mixup: '50.0%', note: 'Mixup collapses — ORMAS +2.6pp' },
    { noise: 'CIFAR-10N (Real)', ormas: '83.9%', std: '83.8%', mixup: '—', note: 'Real human annotator noise. Decay: ORMAS 2.7pp, CNN 3.7pp (1.4× more)' },
  ];

  // Full Table 2 from the paper — Extreme Scenarios
  const extremeScenarios = [
    { scenario: 'Simultaneous Full-Hierarchy Lesion', standard: '10.0% ± 0.0%', ormas: '70.8% ± 2.2%', gap: '+60.8pp', note: 'All 3 conv layers zeroed at epoch 100' },
    { scenario: 'Compounded Structural + 40% Noise', standard: '10.0% ± 0.0%', ormas: 'Per seed: 31.8 / 76.9 / 69.4%', gap: 'Edge-of-chaos', note: 'Dual attack: noise + lesion simultaneously' },
    { scenario: 'High-Cardinality (CIFAR-100)', standard: '1.0% ± 0.0%', ormas: 'Per seed: 7.4 / 25.8 / 27.1%', gap: 'Boundary found', note: '100-class partial failure — scope limit' },
    { scenario: 'Adversarial Weight Injection', standard: '84.1% ± 0.3%', ormas: '83.1% ± 0.3%', gap: '−1.0pp', note: 'Expected scope boundary — crafted to evade diagnostics' },
    { scenario: 'Weight Explosion (100×)', standard: '86.0% ± 0.1%', ormas: '85.1% ± 0.4%', gap: '−0.9pp', note: 'System does not overcorrect on mild damage' },
  ];

  // Zero-Shot Table 3 from paper
  const zeroShotRows = [
    { model: 'Standard ResNet-18', phase1: '83.6%', phase2: '91.4%', retention: '47.3%', retentionState: 'bad', zeroShot: '51.1%', gap: '+26.1pp' },
    { model: 'ORMAS Three-Signal', phase1: '94.6%', phase2: '96.5%', retention: '94.6%', retentionState: 'good', zeroShot: '58.8%', gap: '+33.8pp' },
  ];

  const stats = [
    { val: '80.3%',   lbl: 'Recovered after a layer is destroyed (baseline 10.0%)' },
    { val: '+70.3pp', lbl: 'Gap over a parameter-matched baseline' },
    { val: '94.6%',   lbl: 'Task retention (ResNet-18: 47.3%)' },
    { val: '+60.8pp', lbl: 'Gap with all three layers destroyed' },
    { val: '58.8%',   lbl: 'Zero-shot compositional (chance 25%)' },
    { val: '383',     lbl: 'Experiments, reproducible from seed' },
    { val: '+52.1pp', lbl: 'Recovery from a σ = 2.0 weight shock' },
    { val: '4.5×',    lbl: 'Lower late-stage weight variance' },
    { val: '22,014',  lbl: 'Autonomous corrections per DAG run' },
    { val: '<0.8%',   lbl: 'Accuracy variance, 16× bottleneck sweep' },
  ];

  // `fig` is the headline number already stated in each title, pulled out so it can be scanned.
  const results = [
    {
      n: '01',
      fig: '+70.3pp',
      title: 'A destroyed layer, rebuilt: 80.3% versus 10.0% (+70.3pp)',
      body: 'After a converged convolutional layer is zeroed at epoch 100, ORMAS recovers to 80.3% accuracy while the standard CNN stays at chance (10.0% ± 0.0%) on all three seeds: a +70.3pp gap. ORMAS gets there with 85 targeted corrections between epochs 100 and 110. A checkpoint rollback can also restore accuracy, but it discards all learning since the checkpoint and gives no account of what failed or why.'
    },
    {
      n: '02',
      fig: '+60.8pp',
      title: 'All three layers destroyed: 70.8% versus 10.0% (+60.8pp)',
      body: 'With every convolutional layer zeroed at epoch 100, removing every learned representation, ORMAS recovers to 70.8% ± 2.2% across three seeds while the standard CNN remains at 10.0% ± 0.0%: a +60.8pp gap. One run logged 72 corrections (54 oscillating, 18 dead) and reached 72.9%. Recovery is lower than in the single-layer case, as expected when every stage must be rebuilt at once.'
    },
    {
      n: '03',
      fig: '2.5pp',
      title: 'Label noise: 2.5pp decay versus 7.8pp, with no second network',
      body: 'Under 40% symmetric label noise over 200 epochs, ORMAS decays 2.5pp from its peak and settles at 75.6% ± 0.8%, while the standard CNN decays 7.8pp, with no co-training, second network or specialised objective. Heavy dropout (p = 0.5) matches ORMAS on label noise but collapses to chance when a layer is lesioned: regularisation can mask noise, but it cannot diagnose and repair structural damage.'
    },
    {
      n: '04',
      fig: '94.6%',
      title: 'Sequential learning: 94.6% retention versus 47.3% for ResNet-18, and 58.8% zero-shot',
      body: 'Taught shape first and colour second, ORMAS retains 94.6% on shape while a standard ResNet-18 retains 47.3%. ORMAS keeps both tasks (94.6% shape, 96.5% colour) and scores 58.8% zero-shot on unseen shape–colour pairings, +33.8pp above chance. The PCGrad ablation reaches 59.1% ± 3.6%, statistically indistinguishable, isolating self-correction as the driver. The behaviour was not designed; it emerged from the health gate.'
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="uxr-tip">
          <p className="uxr-tip-h">{label}</p>
          {payload.map((entry: any, i: number) => (
            <p key={i} className="uxr-tip-row">
              <span className="uxr-tip-sw" style={{ background: entry.color }} aria-hidden="true" />
              {entry.name}: <strong>{entry.value}%</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  /* ── Full technical record: disclosure that keeps its content in the DOM ── */
  const [open, setOpen] = useState(false);
  const recordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const record = recordRef.current;
    if (!record) return;

    // Open the record when an in-page link (or the initial URL hash) points inside it.
    const reveal = (hash: string) => {
      if (!hash || hash.length < 2) return false;
      let target: HTMLElement | null = null;
      try { target = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return false; }
      if (!target || !record.contains(target) || target.id === RECORD_ID) return false;
      setOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => target!.scrollIntoView({ block: 'start' })));
      return true;
    };

    reveal(window.location.hash);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute('href') || '';
      if (reveal(hash)) {
        e.preventDefault();
        if (window.history?.replaceState) window.history.replaceState(null, '', hash);
      }
    };
    const onHash = () => { reveal(window.location.hash); };
    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHash);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  const collapse = () => {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(RECORD_ID)?.scrollIntoView({ block: 'start' });
      (document.querySelector(`#${RECORD_ID} .uxr-rec-toggle`) as HTMLButtonElement | null)?.focus({ preventScroll: true });
    });
  };

  return (
    <CVSection
      id="research"
      phase="now"
      eyebrow="ORMAS · Self-repairing neural network · Peer-reviewed at DeepMath 2026, Columbus"
      title="ORMAS: a self-repairing neural network that rebuilds a destroyed layer to 80.3% accuracy while a standard network stays at chance."
      lead={
        <>
          ORMAS, invented by Rokib Al Dhin Raadh, is a neural network architecture that detects its own
          failing components during training, repairs them without stopping, and logs every correction with
          its cause. Existing interpretability methods (SHAP, LIME, integrated gradients, attention maps,
          probing classifiers, circuit discovery) analyse a model from the outside, after training, and
          reconstruct what probably happened; those reconstructions cannot be verified.{' '}
          <strong>In ORMAS the record is produced by the same computation that performs the learning</strong>,
          so it is measured rather than inferred. The work is in the open: a citable preprint, public code and the
          full results archive, for any laboratory to check.
        </>
      }
      meta={[
        { k: 'Peer review', v: 'DeepMath 2026 · Ohio State · poster' },
        { k: 'Experiments', v: '383 · reproducible from seed' },
        { k: 'Architectures', v: 'Four, on one RTX 3090' },
        { k: 'Open record', v: 'Zenodo DOI · public code' },
      ]}
    >
      <div className="uxr-body">
        <div className="uxr-venue">
          <span className="uxr-venue-tag">Accepted · DeepMath 2026 · Ohio State University, Columbus, USA · Poster</span>
          <p className="uxr-venue-txt">
            <strong>Peer-reviewed: the first formal local stability characterisation of a self-correcting neural
            architecture.</strong> Raadh&apos;s paper{' '}
            <em>&ldquo;Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training
            Dynamics&rdquo;</em> was accepted after double-blind review for poster presentation at DeepMath 2026, the
            Conference on the Mathematical Theory of Deep Neural Networks (Ohio State University, Columbus,
            29&ndash;30 October 2026). DeepMath is an international meeting on the mathematical foundations of deep
            learning: its organisers are drawn from Johns Hopkins, Michigan, Ohio State and Konstanz, its invited
            speakers from Stanford, the University of Pennsylvania, Michigan and the University of Washington, and past
            editions have been supported by the NSF and the Simons Foundation. The complete ORMAS preprint is open and
            citable on Zenodo (DOI 10.5281/zenodo.21730363).
          </p>
          <p className="uxr-venue-txt" style={{ marginTop: 10 }}>
            In the same cycle Raadh serves as a reviewer for the NeurIPS 2026 Trustworthy AI for Good workshop (Paris,
            12&ndash;13 December 2026), and he is a member of the Cohere Labs Open Science Community.
          </p>
        </div>

        <p className="uxr-role">
          <strong>Inventor and principal researcher, independent | 2024 – present | PyTorch · 16,316 lines · 85 files</strong>
          <span>383 controlled experiments across four architectures (FC-DAG, CNN, Fat CNN, ResNet-18), all run on a single RTX 3090 and every one reproducible from seed. The stability result is local; global convergence is stated as open. The paper, the codebase that reproduces all 383 runs and the full results archive are open and linked below.</span>
        </p>

        {/* Action Link Bar */}
        <div className="uxr-links">
          {([
            { icon: 'fileText', label: 'Paper', sub: 'Open, citable preprint · Zenodo DOI', href: 'https://zenodo.org/records/21730363' },
            { icon: 'flask', label: 'Codebase', sub: 'Public code · reproduce all 383 runs', href: 'https://anonymous.4open.science/r/ormas-EB73/README.md' },
            { icon: 'archive', label: 'Results Archive', sub: 'Every experiment log, open', href: 'https://drive.google.com/file/d/1CDaMIpTZ_8Mkot9D-O7JU29mDopq_Bdl/view?usp=drive_link' },
          ] as const).map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer" className="uxr-link">
              <span className="uxr-link-icon" aria-hidden="true"><Icon name={link.icon} size={17} /></span>
              <span className="uxr-link-text">
                <span className="uxr-link-label">{link.label}</span>
                <span className="uxr-link-sub">{link.sub}</span>
              </span>
              <span className="uxr-link-out" aria-hidden="true"><Icon name="externalLink" size={14} /></span>
            </a>
          ))}
        </div>

        {/* ── The section's own overview video, after the headline facts ── */}
        <div className="uxr-video">
          <div className="uxr-video-side">
            <div className="uxr-video-eyebrow">
              <Icon name="play" size={14} />
              Presentation · 7 min 40 sec
            </div>
            <h3 className="uxr-video-h">Explaining ORMAS: Transparent Neural Networks That Self-Heal</h3>
            <p className="uxr-video-p">
              A presentation of the full research record: the three learning signals, the 383 experiments,
              the ISS derivation and the complete results, <strong>in under eight minutes</strong>.
            </p>
            <ul className="uxr-video-list">
              <li>Autonomous recovery from catastrophic mid-training failure</li>
              <li>Compositional memory that emerges without replay buffers</li>
              <li>Why transparency is an engineering problem, not a philosophy question</li>
            </ul>
          </div>
          <div className="uxr-video-embed">
            <iframe
              src="https://www.loom.com/embed/59caaa73445443cb8d345b4d594a8347"
              allowFullScreen
              loading="lazy"
              title="Explaining ORMAS: Transparent Neural Networks That Self-Heal"
            />
          </div>
        </div>

        {/* ── Key results ── */}
        <section className="uxr-sec" id="research-results" aria-labelledby="research-results-h">
          <h3 className="uxr-kicker" id="research-results-h">Key results</h3>
          <div className="uxr-stats">
            {stats.map((s, i) => (
              <div className="uxr-stat" key={i}>
                <div className="uxr-stat-v">{s.val}</div>
                <div className="uxr-stat-k">{s.lbl}</div>
              </div>
            ))}
          </div>

          <ol className="uxr-results">
            {results.map((c) => (
              <li className="uxr-result" key={c.n}>
                <div className="uxr-result-fig" aria-hidden="true">
                  <span className="uxr-result-n">{c.n}</span>
                  <span className="uxr-result-v">{c.fig}</span>
                </div>
                <div className="uxr-result-body">
                  <h4 className="uxr-result-t">{c.title}</h4>
                  <p className="uxr-result-p">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="uxr-sec" id="research-why">
          <h3 className="uxr-h">Why Raadh built ORMAS: agents learning from corrupted production data</h3>
          <p className="uxr-p">
            ORMAS grew out of <strong>OXIMO</strong>, Raadh&apos;s multi-agent system for autonomous business operations (<a href="https://anonymous.4open.science/r/oximo-5C73/README.md" target="_blank" rel="noreferrer">codebase</a>). Its agents had to learn from real production data, with corrupted labels, adversarial inputs and contradictory signals. Every noise-robust method he tested was an external filter applied to a network that remained blind to its own internal state.
          </p>
          <p className="uxr-p">
            The requirement was a network that could detect corruption during training, repair it without stopping or human intervention, and come with a formal account of when that repair remains stable. No such architecture existed. ORMAS was designed to meet that requirement.
          </p>
        </section>

        <section className="uxr-sec" id="research-compare">
          <h3 className="uxr-h">Standard backpropagation versus ORMAS: the same node failure, side by side</h3>
          <p className="uxr-p">
            The central claim of ORMAS is not accuracy but <strong>attribution</strong>: every
            failure is named, diagnosed and logged with its cause. The same node failure is shown in both architectures; the
            telemetry on the right is quoted verbatim from the supplementary material.
          </p>
          <ResearchVisualization />
        </section>

        {/* ── Full technical record ── */}
        <section className={`uxr-rec${open ? ' is-open' : ''}`} id={RECORD_ID} ref={recordRef}>
          <button
            type="button"
            className="uxr-rec-toggle"
            aria-expanded={open}
            aria-controls={RECORD_BODY_ID}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="uxr-rec-text">
              <span className="uxr-rec-kicker">For peer reviewers and research engineers</span>
              <span className="uxr-rec-label">{open ? 'Hide the full technical record' : 'View the full technical record'}</span>
              <span className="uxr-rec-hint">The three-signal mathematics, every experimental table, the Input-to-State Stability derivation and the ablations: the record a reviewer needs to check every claim.</span>
              <span className="uxr-rec-meta">
                {['383 experiments', 'ISS stability derivation', 'Ablation tables', 'Reproducible from seed'].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </span>
            </span>
            <span className="uxr-rec-action" aria-hidden="true">
              <span className="uxr-rec-word">{open ? 'Collapse' : 'Expand'}</span>
              <span className="uxr-rec-chev">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </span>
          </button>

          <div className="uxr-rec-body" id={RECORD_BODY_ID} data-collapsed={open ? 'false' : 'true'}>
            <div className="uxr-rec-inner">

          <section className="uxr-sec" id="research-signals">
            <h3 className="uxr-h">How ORMAS works: three simultaneous learning signals</h3>
            <p className="uxr-p">
              ORMAS replaces the single-signal paradigm with three simultaneous learning signals:
            </p>
            <ul className="uxr-signals">
              <li><strong>Signal 1 — Global Backpropagation:</strong> The standard cross-entropy loss backpropagated through the entire network. This is what every neural network already does.</li>
              <li><strong>Signal 2 — Per-Node Local Loss (The Intrinsic Anchor):</strong> Each node gets its own independent assessment computed through a <strong>shared bottleneck readout</strong> (4,416 parameters, <InlineMath math="d_b = 32 \ll d_{\max} = 128" />) that classifies the input using only that node's local features. It cannot memorise noise, so it is forced to learn structural features.</li>
              <li><strong>Signal 3 — Health-Gated Autonomous Self-Correction:</strong> Each node continuously computes a Multiplicative Bottleneck Goodness Score. When it drops below its own historical average by 2.5 standard deviations, the system diagnoses the specific pathology and applies the targeted treatment. A 0.3 gate floor prevents the dead-ReLU trap.</li>
            </ul>

            <div className="uxr-math">
              <BlockMath math="g_i = \text{loss\_health}_i \cdot \text{gradient\_health}_i \cdot \text{output\_stability}_i" />
              <BlockMath math="w_{t+1}^{(i)} = w_t^{(i)} - \underbrace{\eta_i \nabla \mathcal{L}_{\text{global}}}_{\text{Signal 1}} - \underbrace{\eta_i \beta(t) \tilde{\nabla} \mathcal{L}_{\text{local}}^{(i)}}_{\text{Signal 2 (PCGrad-projected)}} + \underbrace{\Delta_{\text{corr}}^{(i)}}_{\text{Signal 3}}" />
            </div>
          </section>

          {/* Pathology Diagnostic Table */}
          <section className="uxr-sec" id="research-pathologies">
            <h3 className="uxr-h">Seven failure modes ORMAS detects and repairs during training</h3>
            <p className="uxr-p">
              ORMAS detects and treats seven distinct node pathologies in real time during training. <strong>Defence in depth:</strong> PCGrad operates at the gradient level (before weight updates); self-correction operates at the weight level (after updates). Any unmodelled pathology ultimately manifests as gradient death, triggering the fallback Kaiming reinitialisation: graceful degradation without requiring learned policies.
            </p>
            <TableWrap label="Seven node pathologies and their treatments">
              <table className="uxr-table">
                <thead>
                  <tr>
                    <th scope="col">Pathology</th>
                    <th scope="col">Symptom</th>
                    <th scope="col">Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  {pathologies.map((p, i) => (
                    <tr key={i}>
                      <th scope="row" className="is-code">{p.name}</th>
                      <td>{p.symptom}</td>
                      <td>{p.treatment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>
          </section>

          <section className="uxr-sec" id="research-glassbox">
            <h3 className="uxr-h">GlassBox: five layers of per-node telemetry, emitted during training</h3>
            <p className="uxr-p">
              Traditional neural networks fail <strong>silently</strong>. ORMAS reverses this with the <strong>Loud Failure Paradigm</strong>. GlassBox emits a <strong>5-layer causal audit trail</strong> per node: (1) health status and goodness score, (2) correction traces with pathology diagnosis, (3) gradient conflict measurement (cosine similarity between global and local gradients), (4) topology census (active/suppressed routing per input region), (5) training pulse timeline.
            </p>
            <p className="uxr-p">
              A single ORMAS DAG training run emitted up to <strong>23,227 autonomous correction events</strong> over 200 epochs. On the 50-node fully-connected DAG under 30% continuous noise — a maximally dense graph where uncorrected architectures collapse to NaN — ORMAS maintained numerical stability across 200 epochs via <strong>22,014 autonomous corrections</strong> per run (mean of 3 seeds). Every correction is tagged with its pathology, node ID, and diagnostic evidence.
            </p>
            <dl className="uxr-cells is-3">
              {[
                { label: 'What it tells you', val: 'Per-node health, correction trigger, EMA baseline, cosine gradient conflict, spatial routing map' },
                { label: 'Next extension', val: 'Mapping each failing node to the visual concept it encoded, before and after repair' },
                { label: 'Why that matters', val: 'Structural telemetry is the foundation semantic interpretability builds on. Bridging the two is the primary extension direction.' },
              ].map((item, i) => (
                <div className="uxr-cell" key={i}>
                  <dt className="uxr-cell-k">{item.label}</dt>
                  <dd className="uxr-cell-v">{item.val}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="uxr-sec" id="research-experiments">
            <h3 className="uxr-h">383 controlled experiments against compute- and parameter-matched baselines</h3>
            <p className="uxr-p">
              All baselines are strictly compute- and parameter-matched. 383 experiments on a single RTX 3090. 4 architectures (FC-DAG, CNN, Fat CNN 11.24M, ResNet-18). 6 noise regimes. 10 baselines. All trained for 200 epochs.
            </p>

            {/* Bar Chart — Noise Robustness */}
            <h4 className="uxr-h4">40% label noise: ORMAS ends at 75.6%, the standard CNN at 69.6%</h4>
            <p className="uxr-cap">Best accuracy vs. final accuracy after 200 epochs of training under label noise.</p>
            <div className="uxr-chart">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={noiseData} margin={{ top: 10, right: 16, left: -8, bottom: 6 }} barGap={4}>
                  <CartesianGrid stroke="rgba(11, 64, 77, 0.12)" vertical={false} />
                  <XAxis dataKey="name" interval={0} stroke="var(--rx-ink-2)" tick={{ fill: 'var(--rx-ink-2)', fontSize: 13 }} axisLine={{ stroke: 'rgba(11, 64, 77, 0.42)' }} tickLine={false} />
                  <YAxis stroke="var(--rx-ink-3)" tick={{ fill: 'var(--rx-ink-3)', fontSize: 12 }} domain={[0, 100]} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(11, 64, 77, 0.05)' }} />
                  <Legend iconType="square" wrapperStyle={{ paddingTop: '14px', fontSize: '13px', color: 'var(--rx-ink-2)' }} />
                  <Bar dataKey="best" name="Best Accuracy (%)" fill="#0b404d" maxBarSize={72} />
                  <Bar dataKey="final" name="Final Accuracy (%)" fill="#8fb0b7" maxBarSize={72} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="uxr-p">
              Asymmetric noise: <strong>80.6%</strong> (Mixup: 50.0%). Real-world CIFAR-10N: <strong>83.9%</strong>.
            </p>

            {/* Full Noise Regime Table */}
            <h4 className="uxr-h4">All Noise Regimes, Including Adverse Results</h4>
            <TableWrap label="All noise regimes">
              <table className="uxr-table is-wide">
                <thead>
                  <tr>
                    <th scope="col">Noise Regime</th>
                    <th scope="col" className="num">ORMAS</th>
                    <th scope="col" className="num">Standard CNN</th>
                    <th scope="col" className="num">Mixup</th>
                  </tr>
                </thead>
                <tbody>
                  {asymNoiseRows.map((r, i) => (
                    <tr key={i}>
                      <th scope="row">
                        {r.noise}
                        {r.note ? <span className="uxr-td-note">{r.note}</span> : null}
                      </th>
                      <td className="num is-strong">{r.ormas}</td>
                      <td className="num">{r.std}</td>
                      <td className="num">{r.mixup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>
            <p className="uxr-foot">All results CIFAR-10 unless noted. Equal-compute (200 epochs, same hardware). Framing note: each accuracy result shows that the mechanism works; none is offered as a competitive accuracy benchmark.</p>
            <Note kicker="Why heavy dropout is not the same capability">
              <p>
                Heavy Dropout (p=0.5) also matches ORMAS on label noise — then collapses permanently to chance under a dead-layer attack. <strong>Regularisation masks noise. Structural transparency diagnoses and repairs it.</strong> Those are different capabilities, not different amounts of the same one.
              </p>
            </Note>

            {/* Recovery Table */}
            <h4 className="uxr-h4">Gaussian weight shock: the ORMAS advantage grows with the damage, to +23.9pp</h4>
            <p className="uxr-p">
              A σ-Gaussian weight perturbation is injected at training step 1,000, destroying all learned representations. ORMAS recovers autonomously; Mixup collapses permanently to 33.3%.
            </p>
            <TableWrap label="Gaussian weight shock recovery">
              <table className="uxr-table">
                <thead>
                  <tr>
                    <th scope="col">Perturbation σ</th>
                    <th scope="col" className="num">ORMAS Final</th>
                    <th scope="col" className="num">Standard Final</th>
                    <th scope="col" className="num">Recovery Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {recoveryRows.map((r, i) => (
                    <tr key={i}>
                      <th scope="row" className="is-code">{r.sigma}</th>
                      <td className="num is-strong">{r.ormas}</td>
                      <td className="num">{r.std}</td>
                      <td className="num is-strong">{r.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>
            <p className="uxr-foot">
              The gap widens monotonically with perturbation scale. At σ=2.0, ORMAS recovers 52.1pp vs Standard CNN's 28.2pp — nearly 2× the net recovery from the same catastrophic shock.
            </p>
            <p className="uxr-p">
              <strong>Scaling:</strong> The 11.24M-parameter Fat CNN also recovers from catastrophic weight explosion: 88.9% → crash to 22.7% → recovery to 69.3%. The three-signal mechanism scales from 637K to 11M parameters.
            </p>
            <p className="uxr-p">
              <strong>ResNet-18 Scale:</strong> Stages 2+3 killed at epoch 100. ORMAS-ResNet: 264 corrections → 91.7%. Vanilla ResNet-18: 92.6% (blind recovery). The accuracy gap is −0.9pp. But the blind baseline has no audit trail — it cannot tell the operator which nodes failed, when, why, or with what pathway. An accuracy number tells you a network recovered. The telemetry tells you how, which makes the recovery auditable.
            </p>
            <Note kicker="Where the Diagnostic Advantage Shows Up, and Where It Does Not">
              <p>
                At σ=1.0 the standard CNN partially recovers to 59.0% via blind relearning; ORMAS reaches 75.4% via targeted correction — a +16.4pp gap, and the baseline still has no idea what broke. At σ=0.1 the damage is mild and the standard CNN finishes slightly ahead (82.1% against 80.2%) — from there the gap widens monotonically as damage gets worse, to +23.9pp at σ=2.0. Measured as recovery from the post-blast low, ORMAS recovers more at every scale tested: +3.1pp against +2.7pp at σ=0.1, and <strong>+52.1pp against +28.2pp at σ=2.0</strong>.
              </p>
            </Note>

            <p className="uxr-p">
              <strong>The Baldwin Effect:</strong> Under 40% noise, ORMAS triggers an average of 67.6 surgical self-corrections per run. Epochs 0–50: a peak of 4.2 corrections/epoch, 1.35 on average. Epochs 50–200: zero. The network learns to not need correction — architectural immunity as an emergent property.
            </p>

            {/* Baldwin Effect Decay Table */}
            <TableWrap label="Corrections per epoch">
              <table className="uxr-table is-narrow">
                <thead>
                  <tr>
                    <th scope="col">Epoch Range</th>
                    <th scope="col" className="num">Corrections / Epoch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row" className="is-code">Epochs 0–50</th><td className="num is-strong">1.35 / epoch (peak 4.2)</td></tr>
                  <tr><th scope="row" className="is-code">Epochs 50–100</th><td className="num">0 / epoch</td></tr>
                  <tr><th scope="row" className="is-code">Epochs 100–200</th><td className="num">0 / epoch</td></tr>
                </tbody>
              </table>
            </TableWrap>
          </section>

          {/* EXTREME SCENARIOS — Full Table 2 */}
          <section className="uxr-sec" id="research-stress">
            <h3 className="uxr-h">Stress tests: five extreme failure scenarios, every result reported</h3>
            <p className="uxr-p">
              With all three layers destroyed at once, ORMAS recovers to 70.8% while the standard CNN stays at 10.0%; the compound and 100-class scenarios mark where recovery becomes seed-dependent or partial. The bifurcated results are not measurement error — they are a physical phenomenon. Under compounded structural-noise perturbation, the network sits at the edge of a topological bifurcation: small initialisation differences determine whether the self-correction mechanism achieves stable recovery or collapses. This is the honest edge of the capability.
            </p>
            <Note kicker="Bifurcation — Edge of Chaos" tone="accent">
              <p>
                Under the compound attack (40% noise + full-hierarchy lesion), ORMAS seed outcomes: <strong>31.8%, 76.9%, 69.4%</strong>. Recovery from the most severe compound damage depends on the seed, so it is reported per run rather than averaged. Under the same attack, the standard CNN is deterministically dead at 10.0% ± 0.0% across all seeds.
              </p>
            </Note>
            <TableWrap label="Extreme failure scenarios">
              <table className="uxr-table is-wide">
                <thead>
                  <tr>
                    <th scope="col">Scenario</th>
                    <th scope="col" className="num">Standard Final</th>
                    <th scope="col" className="num">ORMAS Final</th>
                    <th scope="col" className="num">Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {extremeScenarios.map((r, i) => {
                    const tone = r.gap.startsWith('+') ? 'is-strong' : r.gap.startsWith('−') ? '' : 'is-accent';
                    return (
                      <tr key={i}>
                        <th scope="row">
                          {r.scenario}
                          <span className="uxr-td-note">{r.note}</span>
                        </th>
                        <td className="num">{r.standard}</td>
                        <td className={`num ${tone}`}>{r.ormas}</td>
                        <td className={`num ${tone || 'is-muted'}`}>{r.gap}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TableWrap>
          </section>

          {/* Zero-Shot Compositional Generalization — Full Table 3 */}
          <section className="uxr-sec" id="research-zeroshot">
            <h3 className="uxr-h">Zero-shot compositional generalisation: 94.6% retention and 58.8% on unseen combinations</h3>
            <p className="uxr-p">
              ORMAS holds both tasks in sequential training and generalises to shape–colour combinations it was never shown; a standard ResNet-18 catastrophically forgets shape while learning colour. Phase 1: shape classification. Phase 2: colour classification. Test: accuracy on novel shape + colour combinations.
            </p>
            <TableWrap label="Zero-shot compositional generalisation">
              <table className="uxr-table is-wide">
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col" className="num">Phase 1 Shape</th>
                    <th scope="col" className="num">Phase 2 Colour</th>
                    <th scope="col" className="num">Shape Retention</th>
                    <th scope="col" className="num">Zero-Shot 4-way</th>
                    <th scope="col" className="num">vs. Chance</th>
                  </tr>
                </thead>
                <tbody>
                  {zeroShotRows.map((r, i) => (
                    <tr key={i}>
                      <th scope="row">{r.model}</th>
                      <td className="num">{r.phase1}</td>
                      <td className="num">{r.phase2}</td>
                      <td className="num">
                        <span className={`uxr-ret is-${r.retentionState}`}>
                          <Icon name={r.retentionState === 'good' ? 'check' : 'alert'} size={14} />
                          {r.retention}
                        </span>
                      </td>
                      <td className="num is-strong">{r.zeroShot}</td>
                      <td className="num">{r.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>
            <p className="uxr-p">
              The ceiling is 91.3% (statistical independence: 0.946 × 0.965). ORMAS reaches 58.8% — strong but incomplete spatial separation. An emergent structural bias, not strict orthogonality. PCGrad ablation (remove Signal 2, retain Signal 3): 59.1% ± 3.6% — statistically indistinguishable. <strong>Self-correction is the necessary and sufficient driver.</strong>
            </p>
          </section>

          <section className="uxr-sec" id="research-stability">
            <h3 className="uxr-h">The stability result: Input-to-State Stability for a self-correcting network, accepted after double-blind review at DeepMath 2026</h3>

            <div className="uxr-card">
              <p className="uxr-note-k">Where the Mathematics Came From</p>
              <p>
                In 1989 the mathematician Eduardo Sontag introduced{' '}
                <strong>Input-to-State Stability</strong>, a control-theory framework used to establish that a perturbed system, such as a rocket knocked off course, returns to a stable trajectory.
              </p>
              <p>
                A self-correcting network is a perturbed system: by corrupted data, by structural damage and by its own corrections. Whether its correction mechanism settles or oscillates is therefore a control-theory question, one the field had already answered for other classes of system.
              </p>
              <p>
                Raadh adapted the framework by treating each correction as a bounded input disturbance and the weight trajectory as the state, then characterising the conditions under which the state remains bounded.{' '}
                <strong>The result is the first formal local stability characterisation of a self-correcting neural architecture.</strong> Derived at seventeen, it was accepted after double-blind review at DeepMath 2026, at Ohio State University in Columbus, for poster presentation.
              </p>
            </div>

            <p className="uxr-p">
              <strong>Local stability characterisation, the first for a self-correcting neural architecture.</strong> Under standard regularity assumptions, the conservation constraint (<InlineMath math="\sum \Delta w = 0" />) bounds each correction's L² norm via mean-subtraction (weight magnitude is redistributed, not created). Empirical validation: late-stage parameter variance reduces from 0.86 (Standard CNN) to 0.19 (ORMAS) — a 4.5× reduction.
            </p>
            <div className="uxr-math">
              <BlockMath math="\limsup_{t \to \infty} \|\theta(t) - \theta^*\| \leq \gamma(\varepsilon) = \frac{\varepsilon}{\mu \eta}" />
            </div>

            {/* ── Why local is the point, not the caveat ─────────────────────── */}
            <Note kicker="Why the Bound Is Local — and Why That Is the Design, Not the Compromise">
              <p>
                A local-only result usually reads as a weaker version of something better. Here it is the opposite, and the
                reason matters more than the bound itself. <strong>A global convergence proof is
                defined over a fixed parameter space</strong> <InlineMath math="\theta \in \mathbb{R}^n" />. The moment the
                graph grows a node, <InlineMath math="n" /> changes — and the proof does not weaken, it stops referring to
                anything at all.
              </p>
              <p>
                Locality is what buys the freedom to change topology mid-training. Every node carries its own objective, so a
                newly added node has something to learn from the instant it exists rather than waiting for a global gradient to
                find it. Mean-subtracted initialisation (<InlineMath math="\sum_j w_{\text{new},j} = 0" />) means it enters
                contributing zero net perturbation, leaving every existing conserved quantity undisturbed. And because the
                stability bound is stated per node, an injection is simply another bounded perturbation of exactly the class
                the mechanism already absorbs — 22,014 times in a single 200-epoch run.
              </p>
              <p>
                <strong>A globally coupled, globally proven system could not grow. This one
                can.</strong> A global proof would have foreclosed the architecture rather than strengthened it.
              </p>
            </Note>
          </section>

          {/* Ablation Study */}
          <section className="uxr-sec" id="research-ablations">
            <h3 className="uxr-h">Ablations: on the DAG, removing either mechanism collapses training</h3>
            <p className="uxr-p">
              On the DAG architecture under 30% noise:
            </p>
            <TableWrap label="Ablations on the DAG">
              <table className="uxr-table">
                <thead>
                  <tr>
                    <th scope="col">Configuration</th>
                    <th scope="col" className="num">Final Accuracy</th>
                    <th scope="col">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Full ORMAS</th>
                    <td className="num is-strong">40.1% (best 49.9%)</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <th scope="row">Remove Self-Correction (Signal 3)</th>
                    <td className="num">NaN (best 14.2%)</td>
                    <td>Training collapsed</td>
                  </tr>
                  <tr>
                    <th scope="row">Remove PCGrad</th>
                    <td className="num">NaN (best 12.1%)</td>
                    <td>Training collapsed</td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
            <p className="uxr-p">
              On the DAG, removing either mechanism collapses training outright. On the CNN, removing PCGrad leaves accuracy unchanged (78.1% final) but forces the self-correction mechanism to work far harder — disabling one defence layer triggers proportional activation of the other. This is the intended behaviour: two independent defence layers.
            </p>
            <Note kicker="PCGrad Removal — The Correction Explosion" tone="accent">
              <p>
                Without PCGrad on CNN, accuracy stays at 80.0% — but correction count explodes from <strong>61 corrections per run → more than 12,400 corrections per run (200× more)</strong>. The network survives but is under extreme structural stress throughout. PCGrad is what keeps the correction overhead tractable; Signal 3 (self-correction) is what maintains structural health when PCGrad is absent. Both mechanisms are individually necessary for stable operation at scale.
              </p>
            </Note>
          </section>

          <section className="uxr-sec" id="research-reproducibility">
            <h3 className="uxr-h">Reproducibility: all 383 experiments regenerate from seed on one RTX 3090</h3>
            <ul className="uxr-list">
              <li>Tiered experiment infrastructure: 383+ configurations with automated seed sweeps.</li>
              <li>Shipped an interactive <code>reproduce.sh</code> — one command reproduces every experiment. Core claims reproducible in under one hour.</li>
              <li>10-step training pipeline (<code>ORMASTrainer</code>), multi-round forward loop with selective rollback tracking. After each correction, a verification forward pass runs; if both global and node-local loss worsen by more than 2%, that node's weights selectively roll back — typically affecting fewer than 30% of corrected nodes.</li>
              <li>All 383 experiments on a single RTX 3090 (24 GB VRAM, 30 GB RAM, 8 vCPU). Consumer hardware. 16,316 lines of research code.</li>
            </ul>

            {/* Hyperparameter Robustness */}
            <h4 className="uxr-h4">Hyperparameter robustness: under 0.8% accuracy variance across a 16× sweep</h4>
            <p className="uxr-p">ORMAS's accuracy is nearly insensitive to its own hyperparameters — a strong indicator of mechanistic robustness, not overfitting to a narrow configuration:</p>
            <dl className="uxr-cells is-4">
              {[
                { param: 'β_max ∈ [0.1, 0.5]', result: 'Accuracy bounded 80.0%–80.1%', note: '<0.1% variation' },
                { param: 'Gate threshold τ ∈ [0.2, 0.6]', result: 'Accuracy 79.8%–80.0%', note: '<0.2% variation' },
                { param: 'Bottleneck d_b ∈ {8, 32, 64, 128}', result: 'Accuracy variance <0.8%', note: '16× parameter range' },
                { param: 'Health threshold σ_self 2.5→3.5', result: '65→41 corrections (37% fewer), accuracy unchanged', note: '79.7% vs 80.0%' },
              ].map((item, i) => (
                <div className="uxr-cell" key={i}>
                  <dt className="uxr-cell-code">{item.param}</dt>
                  <dd className="uxr-cell-v">{item.result}</dd>
                  <dd className="uxr-cell-n">{item.note}</dd>
                </div>
              ))}
            </dl>

            {/* Expert Immunity System */}
            <h4 className="uxr-h4">Safeguards: healthy components are never touched</h4>
            <dl className="uxr-defs">
              {[
                { label: 'Expert Immunity', desc: 'Nodes achieving EMA confidence ≥ 0.55 OR local loss < 0.20 become "experts" — immune from convergence penalties. Prevents disruption of already-converged features.' },
                { label: 'High-Distress Override', desc: 'Expert immunity is overridden when goodness drops to ≤ 0.30. Forces immediate diagnosis regardless of expert status. No node hides catastrophic failure behind past performance.' },
                { label: 'Adaptive Cooldown', desc: 'Post-correction cooldown C ∈ [10, 200] steps. Shrinks 20% on >60% success rate; expands 50% on <30% success rate. Prevents destructive oscillation while allowing rapid iterative repair.' },
                { label: 'Selective Rollback', desc: 'After each correction, a verification forward pass runs. If global AND local loss both worsen by >2%, the node rolls back. Typically affects <30% of corrected nodes per training run.' },
              ].map((item, i) => (
                <div className="uxr-def" key={i}>
                  <dt>{item.label}</dt>
                  <dd>{item.desc}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="uxr-sec" id="research-roadmap">
            <h3 className="uxr-h">Research roadmap: the next four experiments</h3>
            <ol className="uxr-roadmap">
              {[
                { title: 'Preemptive Immune Filtering', body: 'V1 is reactive: damage happens, then it gets repaired. V2 uses local loss disagreement as a per-sample gate, stopping corrupted samples before they ever reach the gradient path. Repair becomes immunity.' },
                { title: 'Transformer Architecture Extension', body: 'Carry three-signal learning onto attention. Each head gets an independent local loss anchored through a shared key-query bottleneck, which makes per-head health monitoring and surgical correction possible. Scale brings its own pathology classes to catalogue: attention collapse, entropy death, feature saturation.' },
                { title: 'Bridging Structural to Semantic Telemetry', body: 'GlassBox reports structure — which nodes failed, when, and how. It cannot tell you what concept a failing node encoded. The disentanglement result hints at the bridge: nodes that lock during Phase 2 are the ones preserving Phase 1 shape representations. Formalising that through CAVs or Grad-CAM trajectories across the correction lifecycle is the central open question.' },
                { title: 'Cherry — Self-Correcting Language Model', body: 'A language model trained from scratch on three-signal learning, rather than fine-tuned. It would be the first LLM able to catch and repair its own training pathologies while they happen.' },
              ].map((d, i) => (
                <li key={i}>
                  <h4 className="uxr-roadmap-t">{d.title}</h4>
                  <p className="uxr-roadmap-p">{d.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="uxr-rec-end">
            <button type="button" className="uxr-rec-close" aria-controls={RECORD_BODY_ID} aria-expanded={open} onClick={collapse}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square" aria-hidden="true">
                <polyline points="6 15 12 9 18 15" />
              </svg>
              Collapse the technical record
            </button>
          </div>

            </div>
          </div>
        </section>

        <section className="uxr-sec" id="research-synthesis">
          <h3 className="uxr-h">One architectural decision, three results: repair, noise robustness and zero-shot generalisation</h3>
          <p className="uxr-p">
            Structural recovery, noise robustness, zero-shot generalisation — these are not three findings. They are one structural property showing up three times. Bounding the local gradient chain produces an attribution signal. The attribution signal makes the health gate possible. The health gate delivers both the repair and the spatial separation of competing representations.
          </p>
          <p className="uxr-p">
            Which points at something larger: continuous autonomous correction may be sufficient on its own to make modular internal structure emerge — no explicit modularity constraints, no replay buffers. If that holds, it is a research direction for the field rather than an engineering result.
          </p>
        </section>
      </div>
    </CVSection>
  );
}
