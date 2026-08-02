import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CVResearch() {
  const noiseData = [
    { name: 'ORMAS CNN', best: 78.1, final: 75.6 },
    { name: 'Standard CNN', best: 77.4, final: 69.6 },
    { name: 'Mixup', best: 46.9, final: 36.5 },
  ];

  const pathologies = [
    { name: 'Dead Neuron',    symptom: 'Output permanently near zero',  treatment: 'Kaiming reinitialization' },
    { name: 'Exploded',       symptom: 'Activations > 50.0',            treatment: '90% Anti-Hebbian scale reduction' },
    { name: 'Saturated',      symptom: 'Outputs stuck at max',           treatment: 'Self-referential magnitude dampening' },
    { name: 'Oscillating',    symptom: 'Weights swinging wildly',        treatment: 'Momentum-based directional fixing' },
    { name: 'Loss Stagnant',  symptom: 'Stuck on a plateau',             treatment: 'Escalated noise perturbation' },
    { name: 'Gradient Dead',  symptom: 'Zero gradient flow',             treatment: 'Weight scaling to restart flow' },
    { name: 'Low Confidence', symptom: 'Uncertain output',               treatment: 'Targeted noise perturbation' },
  ];

  const recoveryRows = [
    { sigma: 'σ = 0.1', postBlast: '84.2% → 85.7%', ormas: '85.7%', std: '82.1%', gap: '+3.6pp' },
    { sigma: 'σ = 0.5', postBlast: '66.9% → 78.6%', ormas: '78.6%', std: '74.8%', gap: '+3.8pp' },
    { sigma: 'σ = 1.0', postBlast: '41.4% → 75.4%', ormas: '75.4%', std: '59.0%', gap: '+16.4pp' },
    { sigma: 'σ = 2.0', postBlast: '10.0% → 62.1%', ormas: '62.1%', std: '38.2%', gap: '+23.9pp' },
  ];

  // Asymmetric noise full table (from supplementary)
  const asymNoiseRows = [
    { noise: 'Sym 40% (final)', ormas: '77.5% ±0.7%', std: '75.6% ±1.4%', mixup: '36.5%', note: 'Peak decay: ORMAS 2.5pp vs CNN 7.8pp' },
    { noise: 'Asym 20%', ormas: '84.3% ±0.3%', std: '83.3% ±0.4%', mixup: '53.6%', note: '' },
    { noise: 'Asym 30%', ormas: '83.1% ±0.1%', std: '81.5% ±0.6%', mixup: '52.0%', note: '' },
    { noise: 'Asym 40%', ormas: '80.6% ±0.3%', std: '78.0% ±0.2%', mixup: '50.0% ⚠️', note: 'Mixup collapses — ORMAS +2.6pp' },
    { noise: 'CIFAR-10N (Real)', ormas: '83.9%', std: '83.8%', mixup: '—', note: 'Real human annotator noise. Decay: ORMAS 2.7pp, CNN 3.7pp (1.4× more)' },
  ];

  // Full Table 2 from the paper — Extreme Scenarios
  const extremeScenarios = [
    { scenario: 'Simultaneous Full-Hierarchy Lesion', standard: '10.0% ± 0.0%', ormas: '70.8% ± 2.2%', gap: '+60.8pp', note: 'All 3 conv layers zeroed at epoch 100' },
    { scenario: 'Compounded Structural + 40% Noise', standard: '10.0% ± 0.0%', ormas: 'Bifurcated: 82.1 / 77.2 / 18.9%', gap: 'Edge-of-chaos', note: 'Dual attack: noise + lesion simultaneously' },
    { scenario: 'High-Cardinality (CIFAR-100)', standard: '1.0% ± 0.0%', ormas: 'Bifurcated: 31.0 / 27.2 / 2.1%', gap: 'Boundary found', note: '100-class partial failure — honest scope limit' },
    { scenario: 'Adversarial Weight Injection', standard: '84.1% ± 0.3%', ormas: '83.1% ± 0.3%', gap: '−1.0pp', note: 'Expected scope boundary — crafted to evade diagnostics' },
    { scenario: 'Weight Explosion (100×)', standard: '85.9%', ormas: '85.3%', gap: '−0.6pp', note: '45 corrections — system does not overcorrect on mild damage' },
  ];

  // Zero-Shot Table 3 from paper
  const zeroShotRows = [
    { model: 'Standard ResNet-18', phase1: '83.6%', phase2: '91.4%', retention: '47.3% ⚠️', zeroShot: '51.1%', gap: '+26.1pp' },
    { model: 'ORMAS Three-Signal', phase1: '94.6%', phase2: '96.5%', retention: '94.6% ✓', zeroShot: '58.8%', gap: '+33.8pp' },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: '#1e2024', border: '1px solid #2a2d32', borderRadius: '6px', padding: '10px 14px' }}>
          <p style={{ color: '#c4cfde', margin: '0 0 6px', fontWeight: 600, fontSize: '13px' }}>{label}</p>
          {payload.map((entry: any, i: number) => (
            <p key={i} style={{ color: entry.color, margin: '2px 0', fontSize: '13px' }}>
              {entry.name}: <strong>{entry.value}%</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const tableCell: React.CSSProperties = {
    padding: '13px 18px',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    fontSize: '14px',
    color: '#878e99',
    verticalAlign: 'top',
  };

  return (
    <div className="row mb--50" id="research">
      <style>{`
        .research-table { width: 100%; border-collapse: collapse; }
        .research-table th { padding: 12px 18px; text-align: left; color: #c4cfde; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .research-table td { padding: 13px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: #878e99; vertical-align: top; }
        .research-table td:first-child { color: #c4cfde; font-family: 'Fira Code', monospace; font-weight: 600; white-space: nowrap; }
        .research-table tr:last-child td { border-bottom: none; }
        .recovery-table { width: 100%; border-collapse: collapse; }
        .recovery-table th { padding: 12px 18px; text-align: left; color: #c4cfde; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .recovery-table td { padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: #878e99; font-family: 'Fira Code', monospace; }
        .recovery-table td:first-child { color: #c4cfde; }
        .recovery-table td:last-child { color: #c4cfde; font-weight: 600; }
        .recovery-table tr:last-child td { border-bottom: none; }
        .ablation-table { width: 100%; border-collapse: collapse; }
        .ablation-table th { padding: 12px 18px; text-align: left; color: #c4cfde; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .ablation-table td { padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: #878e99; font-family: 'Fira Code', monospace; }
        .ablation-table td:first-child { color: #c4cfde; }
        .ablation-table tr:last-child td { border-bottom: none; }
        .decay-table { width: 100%; border-collapse: collapse; }
        .decay-table th { padding: 12px 18px; text-align: left; color: #c4cfde; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .decay-table td { padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: #878e99; font-family: 'Fira Code', monospace; }
        .decay-table td:first-child { color: #c4cfde; }
        .decay-table tr:last-child td { border-bottom: none; }
        .extreme-table { width: 100%; border-collapse: collapse; min-width: 580px; }
        .extreme-table th { padding: 12px 18px; text-align: left; color: #c4cfde; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .extreme-table td { padding: 13px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 13px; color: #878e99; vertical-align: top; }
        .extreme-table td:first-child { color: #c4cfde; font-weight: 600; min-width: 160px; }
        .extreme-table tr:last-child td { border-bottom: none; }
        .zero-shot-table { width: 100%; border-collapse: collapse; min-width: 520px; }
        .zero-shot-table th { padding: 12px 18px; text-align: left; color: #c4cfde; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; border-bottom: 1px solid #2a2d32; }
        .zero-shot-table td { padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 14px; color: #878e99; font-family: 'Fira Code', monospace; }
        .zero-shot-table td:first-child { color: #c4cfde; font-family: inherit; }
        .zero-shot-table tr:last-child td { border-bottom: none; }
        .section-header { font-size: 20px; font-weight: 700; margin-bottom: 12px; margin-top: 48px; color: #c4cfde; }
        .bifurcation-callout { background: linear-gradient(135deg, rgba(255,74,87,0.06) 0%, rgba(25,27,30,1) 60%); border: 1px solid rgba(255,74,87,0.2); border-left: 3px solid #ff4a57; border-radius: 8px; padding: 20px 24px; margin-bottom: 20px; }
        .honest-gap-box { background: #191b1e; border: 1px solid #2a2d32; border-radius: 8px; padding: 20px 24px; margin-bottom: 30px; }
      `}</style>
      <div className="col-12">
        <span className="subtitle" style={{ color: "#878e99", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Independent Research</span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: "700" }}>ORMAS — A Neural Network That Can Watch Itself</h2>
        <p className="disc" style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: '20px' }}>
          <strong>Principal Researcher (Solo, Unaffiliated) | 2024 – Present | PyTorch · 10,594 lines · 61 files</strong><br />
          383 controlled experiments. One RTX 3090. Four architectures. The first local-stability convergence proof for any self-correcting architecture (global convergence remains open). Preprint with full 36-page supplementary, reproducible codebase, and complete experimental results archive.
        </p>

        {/* Action Link Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
          {[
            { icon: '📄', label: 'Paper', sub: 'Zenodo DOI', href: 'https://zenodo.org/records/21730363' },
            { icon: '⚗️', label: 'Codebase', sub: 'Reproduce all 383 runs', href: 'https://anonymous.4open.science/r/ormas-EB73/README.md' },
            { icon: '📦', label: 'Results Archive', sub: 'All experiment logs', href: 'https://drive.google.com/file/d/1CDaMIpTZ_8Mkot9D-O7JU29mDopq_Bdl/view?usp=drive_link' },
          ].map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px',
              padding: '12px 18px', textDecoration: 'none', transition: 'border-color 0.2s',
              flex: '1 1 180px', minWidth: '160px', maxWidth: '260px'
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#c4cfde')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2d32')}
            >
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{link.icon}</span>
              <span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#c4cfde', lineHeight: 1.2 }}>{link.label}</div>
                <div style={{ fontSize: '11px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '3px' }}>{link.sub}</div>
              </span>
              <span style={{ marginLeft: 'auto', color: '#4a5568', fontSize: '12px' }}>↗</span>
            </a>
          ))}
        </div>

        <div className="content mt--30">

          {/* KEY RESULTS STAT STRIP — 10 cards, forced 5-col layout */}
          <style>{`
            .stat-strip { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 40px; }
            @media (max-width: 900px) { .stat-strip { grid-template-columns: repeat(3, 1fr); } }
            @media (max-width: 600px) { .stat-strip { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
          <div className="stat-strip">
            {[
              { val: '383',     lbl: 'Controlled Experiments' },
              { val: '+70.3pp', lbl: 'Dead-Layer Recovery' },
              { val: '+60.8pp', lbl: 'Total Annihilation' },
              { val: '+52.1pp', lbl: 'σ=2.0 Blast Recovery' },
              { val: '80.3%',   lbl: 'Autonomous Recovery' },
              { val: '58.8%',   lbl: 'Zero-Shot Generalization' },
              { val: '94.6%',   lbl: 'Shape Memory Retained' },
              { val: '4.5×',    lbl: 'Weight Variance Reduction' },
              { val: '22,014',  lbl: 'DAG Autonomous Corrections' },
              { val: '<0.8%',   lbl: 'Hyperparameter Sensitivity' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '6px' }}>{s.val}</div>
                <div style={{ fontSize: '10px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700, lineHeight: 1.4 }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* WHAT IT PROVED — 4 CARDS (added Total Kill + Shape Memory) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '50px' }}>
            {[
              {
                n: '01',
                title: 'Autonomous Structural Repair — Dead-Layer Lesion',
                body: 'Mid-training dead-layer attack at epoch 100 (full convergence). Standard CNN: permanent collapse to 10.0% ± 0.0% across all 3 seeds — zero variance, deterministic structural death. ORMAS: 85 targeted corrections in epochs 100–110 → recovered to 80.3% (+70.3pp gap). The network diagnosed its own damage. It fixed itself. Checkpoint rollback could recover accuracy — but only by discarding all post-checkpoint learning and with zero causal attribution for the failure.'
              },
              {
                n: '02',
                title: 'Total Annihilation — All Three Layers Killed Simultaneously',
                body: 'Protocol escalated: all three convolutional layers zeroed at epoch 100 — destroying every learned representation. Standard CNN: permanent death at 10.0%. ORMAS: 72 corrections (54 "oscillating", 18 "dead"), steadily climbed from 10% → 72.9% over 100 epochs (+60.8pp). Reconstructed feature extractors from zero. Recovery is slower than single-layer (72.9% vs 80.3%) — reflecting the compounding difficulty of rebuilding all three convolutional stages simultaneously.'
              },
              {
                n: '03',
                title: 'Noise Robustness Without Ensemble Tricks',
                body: 'Under 40% symmetric label noise over 200 epochs, the Standard CNN decayed 7.8pp from its peak. ORMAS decayed only 2.5pp — anchoring at 77.5% ± 0.7%. No multi-network co-training (DivideMix). No specialized noisy-label objective. Heavy Dropout (p=0.5) matches ORMAS on label noise — but permanently collapses to chance under structural lesion. It can mask noise; it cannot diagnose and repair physical damage. That distinction is the entire point.'
              },
              {
                n: '04',
                title: 'Emergent Zero-Shot Compositional Generalization — Shape Memory',
                body: 'Sequential training: Phase 1 teaches Shape, Phase 2 teaches Color. Standard ResNet-18 catastrophically forgets: Shape retention drops to 47.3%. ORMAS holds both simultaneously: 94.6% Shape, 96.5% Color — and achieves 58.8% zero-shot accuracy on novel Shape+Color combinations never seen in training (+33.8pp above 25% chance). PCGrad ablation: 59.1% ± 3.6% — statistically indistinguishable. Self-correction alone is the necessary and sufficient driver. This was not designed. It emerged from the health gate.'
              },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '24px' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px #2a2d32', flexShrink: 0, lineHeight: 1, paddingTop: '4px' }}>{c.n}</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#c4cfde', marginBottom: '8px' }}>{c.title}</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.75', color: '#878e99' }}>{c.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "#c4cfde" }}>Why This Exists</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "14px" }}>
            I was building <strong style={{ color: '#c4cfde' }}>OXIMO</strong> — a multi-agent OS for autonomous business operations (<a href="https://anonymous.4open.science/r/oximo-5C73/README.md" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline' }}>codebase ↗</a> — architecture is all there; production code, not polished) — and I hit the problem I couldn't engineer around. The agents needed to learn safely from real-world data: corrupted labels, adversarial inputs, contradictory signals. Every existing noise-robust framework was an external filter system bolted on top of a network that remained fundamentally blind to its own internal state.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "50px" }}>
            I needed a neural network that could detect corruption in real time, during training, and repair it — without stopping, without a human, with mathematical proof the correction wouldn't create a new instability. That requirement produced ORMAS.
          </p>

          <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px", color: "#c4cfde" }}>The Three-Signal Architecture</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            ORMAS replaces the single-signal paradigm with three simultaneous learning signals:
          </p>
          <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
            <li style={{ marginBottom: "12px" }}><strong style={{ color: "#c4cfde" }}>Signal 1 — Global Backpropagation:</strong> The standard cross-entropy loss backpropagated through the entire network. This is what every neural network already does.</li>
            <li style={{ marginBottom: "12px" }}><strong style={{ color: "#c4cfde" }}>Signal 2 — Per-Node Local Loss (The Intrinsic Anchor):</strong> Each node gets its own independent assessment computed through a <strong>shared bottleneck readout</strong> (4,416 parameters, <InlineMath math="d_b = 32 \ll d_{\max} = 128" />) that classifies the input using only that node's local features. It cannot memorize noise — it is forced to learn structural features.</li>
            <li style={{ marginBottom: "12px" }}><strong style={{ color: "#c4cfde" }}>Signal 3 — Health-Gated Autonomous Self-Correction:</strong> Each node continuously computes a Multiplicative Bottleneck Goodness Score. When it drops below its own historical average by 2.5 standard deviations, the system diagnoses the specific pathology and applies the targeted treatment. A 0.3 gate floor prevents the dead-ReLU trap.</li>
          </ul>

          <BlockMath math="g_i = \text{loss\_health}_i \cdot \text{gradient\_health}_i \cdot \text{output\_stability}_i" />
          <BlockMath math="w_{t+1}^{(i)} = w_t^{(i)} - \underbrace{\eta_i \nabla \mathcal{L}_{\text{global}}}_{\text{Signal 1}} - \underbrace{\eta_i \beta(t) \tilde{\nabla} \mathcal{L}_{\text{local}}^{(i)}}_{\text{Signal 2 (PCGrad-projected)}} + \underbrace{\Delta_{\text{corr}}^{(i)}}_{\text{Signal 3}}" />

          {/* Pathology Diagnostic Table */}
          <h4 className="section-header">Autonomous Pathology Diagnosis</h4>
          <p style={{ fontSize: "16px", color: "#878e99", marginBottom: "20px" }}>
            ORMAS detects and treats 7 distinct node pathologies in real-time during training. <strong style={{ color: "#c4cfde" }}>Defense-in-depth:</strong> PCGrad operates at the gradient level (before weight updates); self-correction operates at the weight level (after updates). Any unmodeled pathology ultimately manifests as gradient death, triggering the fallback Kaiming reinitialization — graceful degradation without requiring learned policies.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table className="research-table">
              <thead>
                <tr>
                  <th>Pathology</th>
                  <th>Symptom</th>
                  <th>Treatment</th>
                </tr>
              </thead>
              <tbody>
                {pathologies.map((p, i) => (
                  <tr key={i}>
                    <td style={tableCell}>{p.name}</td>
                    <td style={tableCell}>{p.symptom}</td>
                    <td style={tableCell}>{p.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="section-header">GlassBox — 5-Layer Causal Telemetry</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "16px" }}>
            Traditional neural networks fail <strong>silently</strong>. ORMAS reverses this with the <strong>Loud Failure Paradigm</strong>. GlassBox emits a <strong>5-layer causal audit trail</strong> per node: (1) health status and goodness score, (2) correction traces with pathology diagnosis, (3) gradient conflict measurement (cosine similarity between global and local gradients), (4) topology census (active/suppressed routing per input region), (5) training pulse timeline.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "16px" }}>
            In a single CNN training run under 40% noise, ORMAS emits <strong style={{ color: "#c4cfde" }}>23,721 Algorithmic Distress Signals</strong>. On the 50-node fully-connected DAG under 30% continuous noise — a maximally dense graph where uncorrected architectures collapse to NaN — ORMAS maintained numerical stability across 200 epochs via <strong style={{ color: "#c4cfde" }}>22,014 autonomous corrections</strong>. Every correction is tagged with its pathology, node ID, and diagnostic evidence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '40px' }}>
            {[
              { label: 'What it tells you', val: 'Per-node health, correction trigger, EMA baseline, cosine gradient conflict, spatial routing map' },
              { label: 'What it does NOT tell you', val: 'What visual concept a failing node encoded, or whether post-repair it encodes the same concept' },
              { label: 'Why that matters', val: 'Structural telemetry ≠ semantic interpretability. The gap between the two is the primary extension direction.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '18px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#4a5568', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{item.label}</div>
                <div style={{ fontSize: '13px', lineHeight: '1.65', color: '#878e99' }}>{item.val}</div>
              </div>
            ))}
          </div>

          <h4 className="section-header">Experimental Validation — 383 Experiments Across 4 Architectures</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "25px" }}>
            All baselines are strictly compute- and parameter-matched. 383 experiments on a single RTX 3090. 4 architectures (FC-DAG, CNN, Fat CNN 11.24M, ResNet-18). 6 noise regimes. 10 baselines. All trained for 200 epochs.
          </p>

          {/* Bar Chart — Noise Robustness */}
          <h5 style={{ fontSize: "16px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Noise Robustness — 40% Symmetric Noise, CIFAR-10</h5>
          <p style={{ fontSize: "14px", color: "#878e99", marginBottom: "20px" }}>Best accuracy vs. final accuracy after 200 epochs of training under label noise.</p>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '24px 24px 16px', marginBottom: '20px', position: 'relative', minWidth: 0, boxSizing: 'border-box' }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={noiseData} margin={{ top: 10, right: 40, left: 0, bottom: 10 }} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="name" stroke="#878e99" tick={{ fill: '#878e99', fontSize: 13 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#878e99" tick={{ fill: '#878e99', fontSize: 12 }} domain={[0, 100]} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Legend wrapperStyle={{ paddingTop: '16px', fontSize: '13px', color: '#878e99' }} />
                <Bar dataKey="best" name="Best Accuracy (%)" fill="#c4cfde" radius={[3, 3, 0, 0]} />
                <Bar dataKey="final" name="Final Accuracy (%)" fill="#4a5568" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '16px' }}>
            Asymmetric noise: <strong style={{ color: '#c4cfde' }}>80.6%</strong> (Mixup: 50.0%). Real-world CIFAR-10N: <strong style={{ color: '#c4cfde' }}>83.9%</strong>.
          </p>

          {/* Full Noise Regime Table */}
          <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#c4cfde', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>All Noise Regimes — Full Table</h5>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 18px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Noise Regime</th>
                  <th style={{ padding: '12px 18px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>ORMAS</th>
                  <th style={{ padding: '12px 18px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Standard CNN</th>
                  <th style={{ padding: '12px 18px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Mixup</th>
                </tr>
              </thead>
              <tbody>
                {asymNoiseRows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#c4cfde', fontWeight: 600, fontSize: '13px' }}>
                      {r.noise}
                      {r.note ? <div style={{ fontSize: '11px', color: '#4a5568', fontWeight: 400, marginTop: '3px' }}>{r.note}</div> : null}
                    </td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#c4cfde', fontWeight: 700, fontSize: '13px', fontFamily: "'Fira Code', monospace" }}>{r.ormas}</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#878e99', fontSize: '13px', fontFamily: "'Fira Code', monospace" }}>{r.std}</td>
                    <td style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#878e99', fontSize: '13px', fontFamily: "'Fira Code', monospace" }}>{r.mixup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '12px', color: '#4a5568', marginBottom: '40px', lineHeight: '1.6' }}>All results CIFAR-10 unless noted. Equal-compute (200 epochs, same hardware). Framing note: every accuracy result is proof the mechanism functions — not a competitive accuracy benchmark.</p>
          <div className="honest-gap-box" style={{ marginBottom: '40px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#c4cfde', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Honest Note — Early Stopping & Heavy Dropout</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', margin: '0 0 10px' }}>
              Standard CNN at its oracle-optimal epoch (~39) achieves 77.6% — within 0.5pp of ORMAS's best. However, early stopping requires a clean validation oracle unavailable under label corruption. ORMAS achieves comparable peak accuracy <strong style={{ color: '#c4cfde' }}>without requiring early stopping</strong>.
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', margin: 0 }}>
              Heavy Dropout (p=0.5) matches ORMAS on label noise. But under a dead-layer structural attack it permanently collapses to chance. <strong style={{ color: '#c4cfde' }}>Regularization masks noise. Structural transparency diagnoses and repairs it.</strong> That is a categorically different capability.
            </p>
          </div>

          {/* Recovery Table */}
          <h5 style={{ fontSize: "16px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Catastrophic Recovery — Autonomous Structural Self-Repair</h5>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            We inject σ-Gaussian weight perturbation at training step 1,000 — destroying all learned representations. Mixup permanently collapses to 33.3%. ORMAS recovers autonomously.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '14px' }}>
            <table className="recovery-table">
              <thead>
                <tr>
                  <th>Perturbation σ</th>
                  <th>ORMAS Final</th>
                  <th>Standard Final</th>
                  <th>Recovery Gap</th>
                </tr>
              </thead>
              <tbody>
                {recoveryRows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.sigma}</td>
                    <td style={{ color: '#c4cfde', fontWeight: 700 }}>{r.ormas}</td>
                    <td style={{ color: '#878e99' }}>{r.std}</td>
                    <td style={{ color: '#c4cfde', fontWeight: 700 }}>{r.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px' }}>
            The gap widens monotonically with perturbation scale. At σ=2.0, ORMAS recovers 52.1pp vs Standard CNN's 28.2pp — nearly 2× the net recovery from the same catastrophic shock.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '10px' }}>
            <strong style={{ color: '#c4cfde' }}>Scaling:</strong> The 11.24M-parameter Fat CNN also recovers from catastrophic weight explosion: 88.9% → crash to 22.7% → recovery to 69.3%. The three-signal mechanism scales from 637K to 11M parameters.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '10px' }}>
            <strong style={{ color: '#c4cfde' }}>ResNet-18 Scale:</strong> Stages 2+3 killed at epoch 100. ORMAS-ResNet: 264 corrections → 91.7%. Vanilla ResNet-18: 92.6% (blind recovery). The accuracy gap is −0.9pp. But the blind baseline has no audit trail — it cannot tell the operator which nodes failed, when, why, or with what pathway. An accuracy number tells you a network recovered. The telemetry tells you how, and proves it will recover predictably.
          </p>
          <div className="honest-gap-box" style={{ marginBottom: '20px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#c4cfde', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Honest Gap — σ=1.0</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', margin: 0 }}>
              Standard CNN recovers to 80.2% at σ=1.0 — nominally surpassing ORMAS (75.4%). However, this "recovery" is blind SGD relearning with zero diagnostic observability. At σ=0.1, ORMAS achieves <strong style={{ color: '#c4cfde' }}>99.1% recovery</strong> — the diagnostic advantage emerges under severe perturbation where targeted repair outperforms undirected gradient descent.
            </p>
          </div>

          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>The Baldwin Effect:</strong> Under 40% noise, ORMAS triggers an average of 67.6 surgical self-corrections per run. Epochs 0–50: 4.2 corrections/epoch. Epochs 100–200: 0.05 corrections/epoch. The network learns to not need correction — architectural immunity as an emergent property.
          </p>

          {/* Baldwin Effect Decay Table */}
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '40px' }}>
            <table className="decay-table">
              <thead>
                <tr>
                  <th>Epoch Range</th>
                  <th>Corrections / Epoch</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Epochs 0–50</td><td>4.2 / epoch</td></tr>
                <tr><td>Epochs 50–100</td><td>1.1 / epoch</td></tr>
                <tr><td>Epochs 100–200</td><td>0.05 / epoch</td></tr>
              </tbody>
            </table>
          </div>

          {/* EXTREME SCENARIOS — Full Table 2 */}
          <h4 className="section-header">Extreme Scenario Evaluation — Full Table 2</h4>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "16px" }}>
            Beyond single-layer ablations: five simultaneous extreme perturbations. The bifurcated results are not measurement error — they are a physical phenomenon. Under compounded structural-noise perturbation, the network sits at the edge of a topological bifurcation: small initialization differences determine whether the self-correction mechanism achieves stable recovery or collapses. This is the honest edge of the capability.
          </p>
          <div className="bifurcation-callout" style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ff4a57', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Bifurcation — Edge of Chaos</strong>
            <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#c4cfde', marginTop: '8px', marginBottom: 0 }}>
              Under the compound attack (40% noise + full-hierarchy lesion), ORMAS seed outcomes: <strong>82.1%, 77.2%, 18.9%</strong>. The variance reflects a topological bifurcation in the loss landscape — not implementation instability. Under the same attack, Standard CNN is deterministically dead at 10.0% ± 0.0% across all seeds. One architecture has a 2-in-3 chance of surviving an attack that kills every other architecture outright.
            </p>
          </div>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '40px' }}>
            <table className="extreme-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Standard Final</th>
                  <th>ORMAS Final</th>
                  <th>Gap</th>
                </tr>
              </thead>
              <tbody>
                {extremeScenarios.map((r, i) => (
                  <tr key={i}>
                    <td>
                      <div style={{ color: '#c4cfde', fontWeight: 600, marginBottom: '4px', fontFamily: 'inherit' }}>{r.scenario}</div>
                      <div style={{ fontSize: '12px', color: '#4a5568', fontFamily: 'inherit' }}>{r.note}</div>
                    </td>
                    <td style={{ color: '#878e99', fontFamily: "'Fira Code', monospace" }}>{r.standard}</td>
                    <td style={{ color: r.gap.startsWith('+') ? '#c4cfde' : r.gap === 'Edge-of-chaos' ? '#ff4a57' : '#878e99', fontFamily: "'Fira Code', monospace", fontWeight: r.gap.startsWith('+') ? 700 : 400 }}>{r.ormas}</td>
                    <td style={{ color: r.gap.startsWith('+') ? '#c4cfde' : r.gap.startsWith('−') ? '#878e99' : '#ff4a57', fontWeight: 700, fontFamily: "'Fira Code', monospace" }}>{r.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Zero-Shot Compositional Generalization — Full Table 3 */}
          <h4 className="section-header">Zero-Shot Compositional Generalization — Full Table 3</h4>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "16px" }}>
            Sequential training: Phase 1 → Shape classification. Phase 2 → Color classification. The test: accuracy on novel Shape+Color combinations never seen. Standard ResNet-18 catastrophically forgets Shape while learning Color. ORMAS holds both — and generalizes to novel combinations.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '20px' }}>
            <table className="zero-shot-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Phase 1 Shape</th>
                  <th>Phase 2 Color</th>
                  <th>Shape Retention</th>
                  <th>Zero-Shot 4-way</th>
                  <th>vs. Chance</th>
                </tr>
              </thead>
              <tbody>
                {zeroShotRows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ color: '#c4cfde', fontFamily: 'inherit', fontWeight: 600 }}>{r.model}</td>
                    <td>{r.phase1}</td>
                    <td>{r.phase2}</td>
                    <td style={{ color: r.retention.includes('⚠️') ? '#878e99' : '#c4cfde', fontWeight: r.retention.includes('✓') ? 700 : 400 }}>{r.retention}</td>
                    <td style={{ color: '#c4cfde', fontWeight: 700 }}>{r.zeroShot}</td>
                    <td style={{ color: '#c4cfde' }}>{r.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '40px' }}>
            The ceiling is 91.3% (statistical independence: 0.946 × 0.965). ORMAS reaches 58.8% — strong but incomplete spatial separation. An emergent structural bias, not strict orthogonality. PCGrad ablation (remove Signal 2, retain Signal 3): 59.1% ± 3.6% — statistically indistinguishable. <strong style={{ color: '#c4cfde' }}>Self-correction is the necessary and sufficient driver.</strong>
          </p>

          <h4 className="section-header">Theoretical Contributions</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>Local Stability Proof — the first for any self-correcting architecture (global convergence remains open).</strong> Under standard regularity assumptions, the conservation constraint (<InlineMath math="\sum \Delta w = 0" />) bounds each correction's L² norm via mean-subtraction (weight magnitude is redistributed, not created). Empirical validation: late-stage parameter variance reduces from 0.86 (Standard CNN) to 0.19 (ORMAS) — a 4.5× reduction.
          </p>
          <BlockMath math="\limsup_{t \to \infty} \|\theta(t) - \theta^*\| \leq \gamma(\varepsilon) = \frac{\varepsilon}{\mu \eta}" />

          {/* Ablation Study */}
          <h4 className="section-header">Ablation Study — Do All Three Signals Matter?</h4>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#878e99', marginBottom: '20px' }}>
            On the DAG architecture under 30% noise:
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '20px' }}>
            <table className="ablation-table">
              <thead>
                <tr>
                  <th>Configuration</th>
                  <th>Final Accuracy</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full ORMAS</td>
                  <td>49.9%</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Remove Self-Correction (Signal 3)</td>
                  <td>39.7%</td>
                  <td style={{ color: '#878e99' }}>−10.2 pp</td>
                </tr>
                <tr>
                  <td>Remove PCGrad (Signal 2)</td>
                  <td>41.0%</td>
                  <td style={{ color: '#878e99' }}>−8.9 pp</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '14px' }}>
            On CNN: Removing PCGrad does not reduce accuracy (80.0% vs 80.0%) but increases correction frequency by 15% (74 vs 64 corrections). The redundant defense architecture means disabling one mechanism triggers proportional activation of the other. This is the intended behavior — two independent defense layers.
          </p>
          <div className="bifurcation-callout" style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ff4a57', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>PCGrad Removal — The Correction Explosion</strong>
            <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#c4cfde', marginTop: '8px', marginBottom: 0 }}>
              Without PCGrad on CNN, accuracy stays at 80.0% — but correction count explodes from <strong>61 corrections per run → more than 12,400 corrections per run (200× more)</strong>. The network survives but is under extreme structural stress throughout. PCGrad is what keeps the correction overhead tractable; Signal 3 (self-correction) is what maintains structural health when PCGrad is absent. Both mechanisms are individually necessary for stable operation at scale.
            </p>
          </div>

          <h4 className="section-header">Engineering & Reproducibility</h4>
          <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Tiered experiment infrastructure: 383+ configurations with automated seed sweeps.</li>
            <li style={{ marginBottom: "10px" }}>Shipped an interactive <code>reproduce.sh</code> — one command reproduces every experiment. Core claims reproducible in under one hour.</li>
            <li style={{ marginBottom: "10px" }}>10-step training pipeline (<code>ORMASTrainer</code>), multi-round forward loop with selective rollback tracking. After each correction, a verification forward pass runs; if both global and node-local loss worsen by more than 2%, that node's weights selectively roll back — typically affecting fewer than 30% of corrected nodes.</li>
            <li style={{ marginBottom: "10px" }}>All 383 experiments on a single RTX 3090 (24 GB VRAM, 30 GB RAM, 8 vCPU). Consumer hardware. 37,000 lines of custom infrastructure.</li>
          </ul>

          {/* Hyperparameter Robustness — NOT on website */}
          <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#c4cfde', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Hyperparameter Robustness</h5>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '14px' }}>ORMAS's accuracy is nearly insensitive to its own hyperparameters — a strong indicator of mechanistic robustness, not overfitting to a narrow configuration:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '40px' }}>
            {[
              { param: 'β_max ∈ [0.1, 0.5]', result: 'Accuracy bounded 80.0%–80.1%', note: '<0.1% variation' },
              { param: 'Gate threshold τ ∈ [0.2, 0.6]', result: 'Accuracy 79.8%–80.0%', note: '<0.2% variation' },
              { param: 'Bottleneck d_b ∈ {8, 32, 64, 128}', result: 'Accuracy variance <0.8%', note: '16× parameter range' },
              { param: 'Health threshold σ_self 2.5→3.5', result: '65→41 corrections (37% fewer), accuracy unchanged', note: '79.7% vs 80.0%' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '16px 18px' }}>
                <div style={{ fontSize: '12px', fontFamily: "'Fira Code', monospace", color: '#c4cfde', marginBottom: '6px', fontWeight: 600 }}>{item.param}</div>
                <div style={{ fontSize: '13px', color: '#878e99', lineHeight: '1.55', marginBottom: '4px' }}>{item.result}</div>
                <div style={{ fontSize: '11px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.note}</div>
              </div>
            ))}
          </div>

          {/* Expert Immunity System — NOT on website */}
          <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#c4cfde', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Expert Immunity & Adaptive Cooldown</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '30px' }}>
            {[
              { label: 'Expert Immunity', desc: 'Nodes achieving EMA confidence ≥ 0.55 OR local loss < 0.20 become "experts" — immune from convergence penalties. Prevents disruption of already-converged features.' },
              { label: 'High-Distress Override', desc: 'Expert immunity is overridden when goodness drops to ≤ 0.30. Forces immediate diagnosis regardless of expert status. No node hides catastrophic failure behind past performance.' },
              { label: 'Adaptive Cooldown', desc: 'Post-correction cooldown C ∈ [10, 200] steps. Shrinks 20% on >60% success rate; expands 50% on <30% success rate. Prevents destructive oscillation while allowing rapid iterative repair.' },
              { label: 'Selective Rollback', desc: 'After each correction, a verification forward pass runs. If global AND local loss both worsen by >2%, the node rolls back. Typically affects <30% of corrected nodes per training run.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', padding: '12px 18px', background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', alignItems: 'baseline' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#c4cfde', letterSpacing: '0.8px', textTransform: 'uppercase', flexShrink: 0 }}>{item.label}</span>
                <span style={{ color: '#878e99', fontSize: '13px', lineHeight: '1.6' }}>{item.desc}</span>
              </div>
            ))}
          </div>

          <h4 className="section-header">Scope & Current Boundaries</h4>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "14px" }}>
            The architecture is validated on CNNs and DAGs. The <code>ORMASModel</code> protocol is architecture-agnostic by design — extension to Transformers is a compute and integration problem, not an architecture one. The convergence proof establishes a local stability guarantee; global convergence properties remain an open theoretical question, as they do for every architecture that currently exists.
          </p>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "14px" }}>
            There is a real computational overhead: PCGrad's dual backward passes introduce a persistent <strong style={{ color: '#c4cfde' }}>1.35× algorithmic floor</strong>. The 2.16× wall-clock overhead on CNNs reflects optimizable Python loop latency, not algorithmic complexity. On the architectures that actually matter — the ones deep enough that silent failure is a real production risk — the overhead is the price of structural transparency.
          </p>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "14px" }}>
            CIFAR-100 two-layer lesion yields only 7.4% recovery — establishing where single-network isolation cannot reconstruct complex manifolds. This is the honest scope boundary.
          </p>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "50px" }}>
            ORMAS targets training-time weight-space pathologies. Test-time structural monitoring (running telemetry during inference to detect distribution shift) is a direct generalization and is explicitly out of scope for the current work.
          </p>

          <h4 className="section-header">Research Directions</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '50px' }}>
            {[
              { title: 'Preemptive Immune Filtering', body: 'V1 is reactive — it repairs after damage occurs. V2 uses local loss disagreement as a per-sample gate, blocking corrupted samples before they touch the gradient path. Shifting from reactive repair to anticipatory immunity.' },
              { title: 'Transformer Architecture Extension', body: 'Port Three-Signal Learning to attention-based architectures. Natural extension: each attention head receives an independent local loss anchored through a shared key-query bottleneck, enabling per-head health monitoring and surgical correction. New pathology classes at scale: Attention Collapse, Entropy Death, Feature Saturation.' },
              { title: 'Bridging Structural to Semantic Telemetry', body: 'Current GlassBox provides structural telemetry — which nodes fail, when, and how. It does NOT provide semantic interpretability — what concept a failing node encoded. The emergent disentanglement result provides a bridge: nodes that lock during Phase 2 preserve Phase 1 (Shape) representations. Formalizing via CAVs or Grad-CAM trajectory analysis over the correction lifecycle is the primary open question.' },
              { title: 'Cherry — Self-Correcting Language Model', body: 'Train a language model from scratch using ORMAS three-signal learning. Not fine-tuning an existing model. The first LLM that can detect and repair its own training pathologies in real time.' },
            ].map((d, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '18px 22px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#c4cfde', marginBottom: '6px' }}>{d.title}</div>
                <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#878e99' }}>{d.body}</div>
              </div>
            ))}
          </div>

          <h4 className="section-header">One Architectural Decision. Three Results.</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "14px" }}>
            The three experimental results — autonomous structural recovery, noise robustness, emergent zero-shot generalization — are not independent findings. They are three manifestations of the same structural property. Bounding the local gradient chain generates the attribution signal. The attribution signal enables the health gate. The health gate enables both structural repair and spatial separation of competing representations.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "0" }}>
            Continuous autonomous correction may be a sufficient condition for the emergence of modular internal structure — without explicit modularity constraints, without replay buffers. That is what makes this a foundational research direction, not a narrow engineering result.
          </p>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.06)" }} /></div>
    </div>
  );
}
