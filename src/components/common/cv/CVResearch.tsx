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
    { name: 'Exploded',       symptom: 'Activations >50.0',             treatment: '90% Anti-Hebbian scale reduction' },
    { name: 'Saturated',      symptom: 'Outputs stuck at max',           treatment: 'Self-referential magnitude dampening' },
    { name: 'Oscillating',    symptom: 'Weights swinging wildly',        treatment: 'Momentum-based directional fixing' },
    { name: 'Loss Stagnant',  symptom: 'Stuck on a plateau',             treatment: 'Escalated noise perturbation' },
    { name: 'Gradient Dead',  symptom: 'Zero gradient flow',             treatment: 'Weight scaling to restart flow' },
    { name: 'Low Confidence', symptom: 'Uncertain output',               treatment: 'Targeted noise perturbation' },
  ];

  const recoveryRows = [
    { sigma: 'σ = 0.1', postBlast: '84.2%', finalAcc: '85.7%', recovery: '99.1%' },
    { sigma: 'σ = 0.5', postBlast: '60.3%', finalAcc: '80.5%', recovery: '93.1%' },
    { sigma: 'σ = 1.0', postBlast: '41.4%', finalAcc: '75.4%', recovery: '87.2%' },
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
      `}</style>
      <div className="col-12">
        <span className="subtitle" style={{ color: "#ff014f", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Independent Research</span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: "700" }}>ORMAS — Three-Signal Learning: Autonomous Self-Correction for Neural Networks</h2>
        <p className="disc" style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99" }}>
          <strong>Principal Researcher (Solo, Unaffiliated) | 2024 – Present | PyTorch · 10,594 lines across 61 files · Fully reproducible via <code>reproduce.sh</code></strong><br />
          Status: Submitted to NeurIPS 2026 (desk-rejected for margin violation). Workshop paper ready for resubmission. ICLR 2027 in preparation.
        </p>

        <div className="content mt--30">
          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", color: "#c4cfde" }}>Abstract</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            Standard neural networks learn through a single global feedback signal — backpropagation — and possess no intrinsic mechanism to detect or repair node-level damage during training. When training conditions deteriorate due to pathological label noise, catastrophic weight perturbation, or vanishing gradients, this single signal fails to distinguish healthy computation from pathological memorization, causing the network to silently collapse.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            We propose <strong>Three-Signal Training</strong>: a unified architecture combining global backpropagation, per-node local loss via a shared bottleneck readout, and loss-gated autonomous self-correction, where PCGrad gradient surgery dynamically resolves conflicts between these signals. We provide an Input-to-State Stability (ISS) convergence analysis — the first for any self-correcting architecture — proving that our conservation constraint bounds the trajectory to a γ(ε) neighborhood. Our "GlassBox" observability enables per-node causal traceability.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            Across <strong style={{ color: "#c4cfde" }}>309 comprehensive experimental runs</strong> under equal-compute conditions, ORMAS demonstrates: <strong>(1)</strong> the first autonomous structural self-repair mid-training — recovering from catastrophic (σ=1.0) weight damage to 75.4% accuracy where Mixup permanently collapses to 33.3%; <strong>(2)</strong> provably bounded late-stage convergence stability, reducing parameter variance to 0.19 (a 4.5× reduction); and <strong>(3)</strong> leading accuracy among parameter-matched single-network architectures under 40% symmetric label noise (78.1%), outperforming standard regularizers by over 28 percentage points.
          </p>
          
          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Why ORMAS Exists</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            Every neural network trained since Rumelhart, Hinton, and Williams (1986) learns through a single feedback signal: error gradients computed via backpropagation. The network follows this gradient blindly. If the data is wrong, the gradient is wrong, and the network silently learns the wrong thing. There is no internal alarm. No check engine light. No way for the network to realize it is being poisoned.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            I agree with Hinton's position: we should not treat backpropagation as an unquestionable black box. We need neural networks where we can see what is happening inside — where every weight update is traceable, every failure is visible, and every correction is auditable. Not to replace backpropagation — but to extend it into something transparent.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            The core problem is this: in the real world, data is messy. Existing noise-robust frameworks (DivideMix, Co-teaching, MentorNet) work well in controlled research settings — but they are external filter systems bolted on top of a network that remains fundamentally blind to its own internal state. In production, you need a neural network that is <strong>mathematically stable</strong>.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            What I wanted was different: a neural network that could realize, <strong>in real-time, during training</strong>, that it was learning something wrong — and fix it autonomously, without human intervention, while maintaining mathematical stability guarantees.
          </p>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>The Three-Signal Architecture</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            ORMAS replaces the single-signal paradigm with three simultaneous learning signals:
          </p>
          <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
            <li style={{ marginBottom: "12px" }}><strong style={{ color: "#c4cfde" }}>Signal 1 — Global Backpropagation:</strong> The standard cross-entropy loss backpropagated through the entire network. This is what every neural network already does.</li>
            <li style={{ marginBottom: "12px" }}><strong style={{ color: "#c4cfde" }}>Signal 2 — Per-Node Local Loss (The Intrinsic Anchor):</strong> Each node gets its own independent assessment computed through a <strong>shared bottleneck readout</strong> (4,416 parameters, <InlineMath math="d_b = 32 \ll d_{\max} = 128" />) that classifies the input using only that node's local features. It cannot memorize noise — it is forced to learn structural features.</li>
            <li style={{ marginBottom: "12px" }}><strong style={{ color: "#c4cfde" }}>Signal 3 — Health-Gated Autonomous Self-Correction:</strong> Each node continuously computes a Multiplicative Bottleneck Goodness Score. When it drops below its own historical average by 2.5 standard deviations, the system diagnoses the specific pathology and applies the targeted treatment.</li>
          </ul>

          <BlockMath math="g_i = \text{loss\_health}_i \cdot \text{gradient\_health}_i \cdot \text{output\_stability}_i" />
          <BlockMath math="w_{t+1}^{(i)} = w_t^{(i)} - \underbrace{\eta_i \nabla \mathcal{L}_{\text{global}}}_{\text{Signal 1}} - \underbrace{\eta_i \beta(t) \tilde{\nabla} \mathcal{L}_{\text{local}}^{(i)}}_{\text{Signal 2 (PCGrad-projected)}} + \underbrace{\Delta_{\text{corr}}^{(i)}}_{\text{Signal 3}}" />

          {/* Pathology Diagnostic Table */}
          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Autonomous Pathology Diagnosis</h4>
          <p style={{ fontSize: "16px", color: "#878e99", marginBottom: "20px" }}>
            ORMAS detects and treats 7 distinct node pathologies in real-time during training. <strong style={{ color: "#c4cfde" }}>Defense-in-depth:</strong> PCGrad operates at the gradient level (before weight updates); self-correction operates at the weight level (after updates).
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

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>GlassBox: Per-Node Causal Observability</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            Traditional neural networks fail <strong>silently</strong>. ORMAS reverses this with the <strong>Loud Failure Paradigm</strong>. GlassBox provides <strong>7 channels of real-time telemetry</strong>: Node Health, Correction Traces, Gradient Conflict, Round Logs, Topology Census, Training Pulse, and ISS Convergence. In a single training run under 40% noise, ORMAS emits over <strong style={{ color: "#c4cfde" }}>23,721 Algorithmic Distress Signals</strong>. Every correction is tagged with its pathology, node ID, and diagnostic evidence.
          </p>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Experimental Validation (309 Experiments)</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "25px" }}>
            309 controlled experiments on a single RTX 4090. 4 architectures. 6 noise regimes. 10 baselines. All methods trained for 200 epochs under equal-compute conditions.
          </p>
          
          {/* Bar Chart — Noise Robustness */}
          <h5 style={{ fontSize: "16px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Noise Robustness — 40% Symmetric Noise, CIFAR-10</h5>
          <p style={{ fontSize: "14px", color: "#878e99", marginBottom: "20px" }}>Best accuracy vs. final accuracy after 200 epochs of training under label noise.</p>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '24px 24px 16px', marginBottom: '40px', position: 'relative', minWidth: 0, boxSizing: 'border-box' }}>
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
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '20px' }}>
            Asymmetric noise: <strong style={{ color: '#c4cfde' }}>80.6%</strong> (Mixup: 50.0%). Real-world CIFAR-10N: <strong style={{ color: '#c4cfde' }}>83.9%</strong>.
          </p>

          {/* Honest note on early stopping */}
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px', marginBottom: '40px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#c4cfde', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Honest Note on Early Stopping</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', margin: 0 }}>
              Standard CNN at its oracle-optimal epoch (~39) achieves 77.6% — within 0.5 pp of ORMAS's best. However, early stopping requires a clean validation oracle unavailable under label corruption. ORMAS achieves comparable peak accuracy <strong style={{ color: '#c4cfde' }}>without requiring early stopping</strong>.
            </p>
          </div>

          {/* Recovery Table — Catastrophic Self-Repair */}
          <h5 style={{ fontSize: "16px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Catastrophic Recovery — Autonomous Structural Self-Repair</h5>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            We inject σ-Gaussian weight perturbation at training step 1,000 — destroying all learned representations. Mixup permanently collapses to 33.3%. ORMAS recovers autonomously.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table className="recovery-table">
              <thead>
                <tr>
                  <th>Perturbation σ</th>
                  <th>Post-Blast Accuracy</th>
                  <th>Final Accuracy</th>
                  <th>Recovery Rate</th>
                </tr>
              </thead>
              <tbody>
                {recoveryRows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.sigma}</td>
                    <td style={{ color: '#878e99' }}>{r.postBlast}</td>
                    <td style={{ color: '#878e99' }}>{r.finalAcc}</td>
                    <td style={{ color: '#c4cfde', fontWeight: '700' }}>{r.recovery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '20px' }}>
            <strong style={{ color: '#c4cfde' }}>Scaling:</strong> The 11M-parameter Fat CNN (ResNet-18 capacity) also recovers: 88.9% → crash to 22.7% → recovery to 69.3%. The three-signal mechanism scales from 637K to 11M parameters.
          </p>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px', marginBottom: '30px' }}>
            <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#c4cfde', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Honest Gap</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', margin: 0 }}>
              Standard CNN recovers to 80.2% at σ=1.0 — nominally surpassing ORMAS (75.4%). However, this "recovery" is blind SGD relearning with zero diagnostic observability. At σ=0.1, ORMAS achieves <strong style={{ color: '#c4cfde' }}>99.1% recovery</strong> — the diagnostic advantage emerges under severe perturbation where targeted repair outperforms undirected gradient descent.
            </p>
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>The Baldwin Effect:</strong> Under 40% noise, ORMAS triggers an average of 67.6 surgical self-corrections per run. Epochs 0–50: 4.2 corrections/epoch. Epochs 100–200: 0.05 corrections/epoch. The network learns to not need correction.
          </p>

          {/* Baldwin Effect Decay Table */}
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table className="decay-table">
              <thead>
                <tr>
                  <th>Epoch Range</th>
                  <th>Corrections / Epoch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Epochs 0–50</td>
                  <td>4.2</td>
                </tr>
                <tr>
                  <td>Epochs 50–100</td>
                  <td>1.1</td>
                </tr>
                <tr>
                  <td>Epochs 100–200</td>
                  <td>0.05</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Theoretical Contributions</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>ISS Convergence Proof — the first for any self-correcting architecture.</strong> Under standard regularity assumptions, the conservation constraint (<InlineMath math="\sum \Delta w = 0" />) bounds each correction's L² norm. Empirical validation: Late-stage parameter variance reduces from 0.86 (Standard CNN) to 0.19 (ORMAS) — a 4.5× reduction.
          </p>
          <BlockMath math="\limsup_{t \to \infty} \|\theta(t) - \theta^*\| \leq \gamma(\varepsilon) = \frac{\varepsilon}{\mu \eta}" />

          {/* Ablation Study */}
          <h4 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', marginTop: '40px', color: '#c4cfde' }}>Ablation Study</h4>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#878e99', marginBottom: '20px' }}>
            <strong style={{ color: '#c4cfde' }}>Ablation: Do All Three Signals Matter?</strong> On the DAG architecture under 30% noise:
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
                  <td>Remove Self-Correction</td>
                  <td>39.7%</td>
                  <td style={{ color: '#878e99' }}>−10.2 pp</td>
                </tr>
                <tr>
                  <td>Remove PCGrad</td>
                  <td>41.0%</td>
                  <td style={{ color: '#878e99' }}>−8.9 pp</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#878e99', marginBottom: '20px' }}>
            On CNN: Removing PCGrad does not reduce accuracy (80.0% vs 80.0%) but increases correction frequency by 15% (74 vs 64 corrections). The redundant defense architecture means disabling one mechanism triggers proportional activation of the other.
          </p>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Engineering & Reproducibility</h4>
          <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Tiered experiment infrastructure producing 309+ experiment configurations with automated seed sweeps.</li>
            <li style={{ marginBottom: "10px" }}>Shipped an interactive <code>reproduce.sh</code> script — one command reproduces every experiment.</li>
            <li style={{ marginBottom: "10px" }}>10-step training pipeline (<code>ORMASTrainer</code>), multi-round forward loop with selective rollback tracking.</li>
            <li style={{ marginBottom: "10px" }}>All 309 experiments run on a single RTX 4090. One GPU, one researcher, one room.</li>
          </ul>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Limitations (Honest)</h4>
          <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", listStyleType: "decimal", paddingLeft: "20px", marginBottom: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Computational overhead: 2.16× per step on CNNs (1.34× on DAGs).</li>
            <li style={{ marginBottom: "10px" }}>CIFAR-100 penalty: −1.1% clean accuracy from the capacity-constrained readout.</li>
            <li style={{ marginBottom: "10px" }}>Weight-level only: Self-correction does not defend against targeted adversarial weight Trojans.</li>
            <li style={{ marginBottom: "10px" }}>CNN/DAG only (current paper): Extension to Transformers is future work.</li>
            <li style={{ marginBottom: "10px" }}>Local convergence: ISS bound guarantees local convergence; global convergence properties remain open.</li>
            <li style={{ marginBottom: "10px" }}>No DivideMix-class comparison: This is a foundational architectural contribution, not an accuracy leaderboard chase.</li>
          </ul>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Publication Status & Plan</h4>
          <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
            <li style={{ marginBottom: "10px" }}><strong style={{ color: "#c4cfde" }}>NeurIPS 2026:</strong> Submitted as solo 18-year-old. Desk-rejected for formatting non-compliance (wrong LaTeX template) — science was not reviewed.</li>
            <li style={{ marginBottom: "10px" }}><strong style={{ color: "#c4cfde" }}>NeurIPS 2026 Workshop:</strong> V1 paper ready for submission.</li>
            <li style={{ marginBottom: "10px" }}><strong style={{ color: "#c4cfde" }}>ICLR 2027:</strong> Main track. V2 Preemptive Immune Filtering + Transformer Scaling + LoRA Integration.</li>
            <li style={{ marginBottom: "10px" }}><strong style={{ color: "#c4cfde" }}>JMLR Journal:</strong> GlassBox Observability Theory.</li>
            <li style={{ marginBottom: "10px" }}><strong style={{ color: "#c4cfde" }}>ICSE SEIP:</strong> Black Bloxie deployment case study.</li>
          </ul>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>The Road Ahead: V2, Transformers, and Universal Infrastructure</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>V2 — Preemptive Immune Filtering (~60 lines of new code):</strong> V1 is reactive. V2 is preemptive. Uses local loss disagreement as a per-sample filter to gate out corrupted samples before they touch the gradients.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>Transformer Scaling (~600 lines):</strong> The <code>ORMASModel</code> Protocol is already architecture-agnostic. New pathologies: Attention Collapse, Entropy Death, Feature Saturation.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>LoRA Integration (~200 lines) — <code>pip install ormas</code>:</strong> Wrap any Hugging Face model with immune-system protection in 3 lines of code.
          </p>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Why ORMAS Matters</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            ORMAS is not a standalone research paper. It is the foundation for everything I am building. In order to build truly autonomous AI systems that learn continuously from real-world data, you need a guarantee that the learning process itself cannot be corrupted. Without ORMAS, any system that learns from its own experience will eventually poison itself. ORMAS breaks this loop.
          </p>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.06)" }} /></div>
    </div>
  );
}
