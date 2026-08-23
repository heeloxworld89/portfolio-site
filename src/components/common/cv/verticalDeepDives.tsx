import type { ReactNode } from 'react';
import ExpandableSection from '../ExpandableSection';

// ─── Deep-dive modal content for the three ORMAS-gated verticals ─────────────
// Written for a non-technical reader first (the "In Plain English" box), then
// progressively technical. Every number traces to main.tex / supplementary.tex.

const Stat = ({ v, l }: { v: string; l: string }) => (
  <div className="vm-stat">
    <div className="vm-stat-v">{v}</div>
    <div className="vm-stat-l">{l}</div>
  </div>
);

export interface DeepDive {
  key: string;
  eyebrow: string;
  title: string;
  body: ReactNode;
}

export const deepDives: DeepDive[] = [
  // ══════════════════════════════════════════════════════════════════════════
  {
    key: 'medical',
    eyebrow: 'Substrate 2 · ORMAS-Gated',
    title: 'Medical Research — The Personalisation Problem',
    body: (
      <>
        <div className="vm-plain">
          <div className="vm-plain-tag">In Plain English</div>
          <p>
            Medical AI today is like a doctor who trained on thousands of patients, then had their
            memory frozen on graduation day. They are genuinely good at what they learned. But they
            will never learn anything from <em>you</em> — and structurally they cannot, because
            teaching them something about your case would make them forget something about someone
            else&apos;s.
          </p>
          <p>
            The regulator is right to refuse a model that changes silently. So the field is stuck:
            everyone agrees the model should keep learning, and nobody can build one that does it
            accountably. ORMAS is an attempt at the version that keeps learning <strong>and</strong>{' '}
            hands you a written record of every change it made — where the record is not bolted on,
            but falls out of how the thing is built.
          </p>
        </div>

        <div className="vm-h">How Medical AI Is Built Today</div>
        <div className="vm-stack">
          <div className="vm-stack-row">
            <div className="vm-stack-tag">Pre-processing</div>
            <div className="vm-stack-txt">
              Scanner harmonisation, intensity normalisation, site de-biasing, cohort matching
            </div>
          </div>
          <div className="vm-stack-row is-box">
            <div className="vm-stack-tag">The Model</div>
            <div className="vm-stack-txt">
              A frozen neural network
              <span className="vm-stack-sub">
                The part nobody can inspect, and nobody can safely modify
              </span>
            </div>
          </div>
          <div className="vm-stack-row">
            <div className="vm-stack-tag">Post-processing</div>
            <div className="vm-stack-txt">
              Calibration, ensembling, per-site threshold tuning, human review for low-confidence cases
            </div>
          </div>
        </div>
        <div className="vm-fig-cap">
          Enormous engineering effort at both ends. Almost none in the middle — because the middle is
          the part nobody can see into.
        </div>
        <p className="vm-p">
          This genuinely works, in a specific and limited sense: <strong>the population-level numbers
          come out right.</strong> AUC 0.94 on the validation cohort, publishable, clearable,
          deployable. Diabetic retinopathy screening, stroke triage, mammography second-read — all
          real, all helping people right now.
        </p>
        <p className="vm-p">
          It fails on the unit that actually matters. Two patients with the same label are not the
          same patient — comorbidities interact, drug response is genetically mediated, the same
          tumour behaves differently in different hosts. A model fit on a population is answering a
          question about the population. <strong>The clinical question is &ldquo;what is happening to
          this one,&rdquo;</strong> and that is not a statistical property of the cohort they came
          from. No amount of post-processing recovers information the frozen function never had.
        </p>

        <div className="vm-h">Lock 1 — The Regulator Just Moved the Bar</div>
        <p className="vm-p">
          A common and wrong claim is that the FDA requires frozen models and rejects black boxes.
          Both halves are false — plenty of opaque models are cleared, and since{' '}
          <strong>3 December 2024</strong> the FDA&apos;s finalised Predetermined Change Control Plan
          (PCCP) guidance explicitly permits models to update after authorisation.
        </p>
        <p className="vm-p">
          The catch is what a PCCP demands: you must specify <em>in advance</em> what may change, how
          each change will be validated, and what it does to safety. Read as an engineer, that is a
          bounded-perturbation-with-audit-trail specification — and the regulator has effectively
          published a spec sheet for what ORMAS emits natively.
        </p>
        <table className="vm-table">
          <thead>
            <tr><th>What a PCCP requires</th><th>The ORMAS mechanism</th></tr>
          </thead>
          <tbody>
            <tr><td>A pre-specified bound on modifications</td><td>Conservation constraint: corrections mean-centred, then clipped to ε<sub>max</sub></td></tr>
            <tr><td>Proof the change stayed inside the bound</td><td>ISS characterisation; perturbation decays as the network stabilises</td></tr>
            <tr><td>A record of what changed, and when</td><td>L4 — exact boolean tensor of every correction event</td></tr>
            <tr><td>Attribution to a specific component</td><td>L2 / L5 — per-node conflict and per-parameter saliency</td></tr>
            <tr><td>Continuous monitoring</td><td>The health gate runs every step, not periodically</td></tr>
          </tbody>
        </table>
        <p className="vm-p">
          The bar moved from <strong>&ldquo;frozen&rdquo;</strong> to <strong>&ldquo;bounded and
          accounted for&rdquo;</strong> — a harder engineering requirement, not an easier one, and one
          a post-hoc interpretability wrapper cannot satisfy. A wrapper cannot bound a change it only
          observes afterwards.
        </p>

        <div className="vm-h">Lock 2 — Why the Model Currently Cannot Keep Learning</div>
        <div className="vm-flow">
          <div className="vm-flow-step">
            A deployed model trained on cohort <strong>C</strong>. A new patient{' '}
            <strong>P</strong> arrives, poorly represented in that cohort.
          </div>
          <div className="vm-flow-step">
            You fine-tune the model on <strong>P</strong> and patients like them.
          </div>
          <div className="vm-flow-step">
            The new gradients <strong>conflict</strong> with the weights encoding cohort C.
          </div>
          <div className="vm-flow-step is-bad">
            The model now handles P better — and everyone in C worse. You have degraded a cleared
            model to serve an edge case.
          </div>
        </div>
        <p className="vm-p">
          This is <strong>catastrophic forgetting</strong>, and every existing workaround needs
          something a clinical deployment cannot give it: replay buffers need you to retain all prior
          patient data; EWC needs an explicit signal that a new task began; LoRA needs a task ID at
          inference — but which adapter a new patient needs <em>is the question</em>.
        </p>
        <p className="vm-p">
          ORMAS needs none of them, because the gradient conflict that triggers a correction{' '}
          <strong>is itself the notification that something new arrived.</strong> The network detects
          it from the inside, with no external label.
        </p>

        <div className="vm-h">What Was Measured</div>
        <div className="vm-stats">
          <Stat v="94.6%" l="Prior task retained (ORMAS)" />
          <Stat v="47.3%" l="Prior task retained (ResNet-18)" />
          <Stat v="58.8%" l="Zero-shot, vs 25% chance" />
          <Stat v="3 / 3" l="Seeds, consistent" />
        </div>
        <p className="vm-p">
          Train on task one, switch immediately to task two with no replay buffer and no task label,
          then measure what survives of task one. The standard network forgot more than half. ORMAS
          forgot about five percent.
        </p>

        <ExpandableSection
          closedLabel="But isn’t this what federated learning already does?"
          hint="The first objection anyone who works in medical AI raises — answered properly, including what federated learning genuinely solved and where it stops."
          meta={['FedAvg · 2017', 'MELLODDY · 10 pharma cos', 'Two layers, not rivals']}
        >
          <p className="vm-p">
            <strong>What federated learning solved, and it is a real achievement.</strong> Medical data cannot move —
            GDPR, HIPAA, IVDR. Before FL the options were: centralise the data (usually illegal), train one weak model
            per institution, or do not train. FedAvg (McMahan et al., 2017) inverted the relationship: instead of
            bringing data to the model, bring the model to the data. The server distributes weights, each institution
            trains locally, only gradient updates return, the server aggregates. Gradients carry the direction of
            learning, not the samples that produced it.
          </p>
          <p className="vm-p">
            Serious infrastructure was built on that — Owkin’s Substra, NVIDIA FLARE, PySyft, Flower. The most
            consequential demonstration was <strong>MELLODDY</strong>: ten pharmaceutical companies, among them
            Novartis, Bayer, Janssen, AstraZeneca, Eli Lilly and Amgen, jointly trained a drug-target model across
            their proprietary compound libraries and published in 2022. The joint model beat every company’s siloed
            model and no molecular data left any building. That is not something to argue with.
          </p>

          <div className="vm-h">Where it stops</div>
          <p className="vm-p">
            Federated learning’s contribution is <strong>at training time, across institutions</strong>. The round
            completes, a model is deployed, and the problem it does not address starts immediately.
          </p>
          <table className="vm-table">
            <thead><tr><th>Limit</th><th>What happens</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Frozen after the round</strong></td>
                <td>The deployed weights encode the distribution up to the last round. Flu season shifts presentation, a new antibiotic changes the treatment landscape, a new imaging protocol changes pixel statistics. The model does not notice.</td>
              </tr>
              <tr>
                <td><strong>Round latency</strong></td>
                <td>Between rounds the edge model cannot update at all. For institutions running clinical data governance before each cycle, that gap is measured in days.</td>
              </tr>
              <tr>
                <td><strong>Non-IID heterogeneity</strong></td>
                <td>FedAvg’s convergence analysis assumes each client’s data is identically distributed. A children’s hospital in Bangkok and an oncology centre in Paris are not. FedProx, SCAFFOLD and MOON exist because of this, and it remains open under severe heterogeneity.</td>
              </tr>
              <tr>
                <td><strong>Structural blindness</strong></td>
                <td>Local training inside a federated round is ordinary backpropagation — one global loss across all parameters. It registers that something failed and carries nothing about which node caused it. The federated audit trail records who participated under what governance, and says nothing about the model’s internal health.</td>
              </tr>
            </tbody>
          </table>
          <p className="vm-p">
            That last one is the load-bearing gap, and it is <em>not</em> a criticism of federated learning. It is a
            property of backpropagation that FL inherits, because every local step inside a round uses it.
          </p>

          <div className="vm-h">Two layers, not two rivals</div>
          <div className="vm-stack">
            <div className="vm-stack-row">
              <div className="vm-stack-tag">Cross-institution</div>
              <div className="vm-stack-txt">
                Federated learning
                <span className="vm-stack-sub">
                  Train across silos without moving data. Gradient aggregation, differential privacy, secure
                  aggregation. Output: a jointly trained model.
                </span>
              </div>
            </div>
            <div className="vm-stack-row is-box">
              <div className="vm-stack-tag">Then deployed</div>
              <div className="vm-stack-txt">
                …at each institution, where the world keeps changing
              </div>
            </div>
            <div className="vm-stack-row">
              <div className="vm-stack-tag">Within-institution</div>
              <div className="vm-stack-txt">
                ORMAS
                <span className="vm-stack-sub">
                  Continuous self-correction on local data. No server, no round latency, a native per-correction
                  audit trail, and adaptation bounded by the ISS characterisation.
                </span>
              </div>
            </div>
          </div>
          <p className="vm-p">
            FL answers <em>how do several organisations build a shared model without centralising data.</em> ORMAS
            answers <em>how does that model keep learning, repair itself, and stay accountable once it is deployed.</em>{' '}
            <strong>Those are sequential questions, and the second begins exactly where the first ends.</strong>
          </p>
          <p className="vm-p">
            The hybrid is the interesting part. A federated round produces the initial model; each institution
            deploys it and ORMAS adapts it to local patterns; at the next round boundary each edge contributes
            locally refined knowledge back — richer than a frozen model would have been. The shared model improves
            from edge adaptation, the edges improve from aggregation.
          </p>

          <div className="vm-gap" style={{ marginTop: '22px' }}>
            <div className="vm-gap-tag">Said plainly</div>
            <p>
              The edge layer is validated on CIFAR-10, not on clinical data, and it has never been joined to a live
              federated deployment. What exists is a mechanism with 383 experiments behind it and a coordination layer
              already running at scale in industry. <strong>Connecting them is engineering, not research</strong> — but
              nobody has done it yet, including me.
            </p>
          </div>
        </ExpandableSection>

        <div className="vm-h">The Market</div>
        <p className="vm-p">
          Analyst TAM for AI in healthcare sits between <strong>$36.7B and $50.7B for 2026</strong>{' '}
          depending on source — and those sources disagree by nearly 2×, so treat them as scale
          context, not arithmetic. The number that matters is how many institutions hold all three
          qualifying properties at once: proprietary clinical data that cannot leave, an active
          initiative to train on it, and a regulator who will ask what the model learned.
        </p>
        <div className="vm-stats">
          <Stat v="~150–200" l="US academic medical centres qualifying" />
          <Stat v="$200K" l="Modelled average contract value" />
          <Stat v="On-Prem" l="The data cannot leave, so software goes to it" />
        </div>
        <p className="vm-p">
          Small count, large contracts, long cycles, very high switching cost once embedded — an
          enterprise infrastructure market, not a SaaS market. The budget line already exists: these
          institutions pay today for model governance, validation contractors, and regulatory
          consulting.
        </p>

        <div className="vm-gap">
          <div className="vm-gap-tag">What Is Compute-Gated, and What Is Genuinely Open</div>
          <p>
            <strong>Compute-gated — this is the ask, not a research risk.</strong> ORMAS-T is written.
            The three signals are defined per-node on a directed graph and a Transformer is a directed
            graph; PCGrad, the conservation constraint, and the health gate all sit at optimiser level.
            That is why the protocol already carried across four architecture families — FC-DAG, CNN,
            an 11.24M-parameter Fat CNN, and ResNet-18 — without being redesigned. What is missing is
            multi-node H100/A100 access. The one honest unknown inside this bucket, which the paper
            states itself: whether the conservation-preserving initialisation behaves the same way on
            attention heads as on conv nodes.
          </p>
          <p>
            <strong>Genuinely open — compute does not close this.</strong> No clinical data has ever
            touched ORMAS. The retention numbers are CIFAR-10, and getting past that is a partnership
            and data-access problem, not a hardware one. No PCCP has been drafted, submitted, or
            discussed with anyone.
          </p>
          <p>
            <strong>Compositional is not causal.</strong> The 58.8% result is compositional
            generalisation over learned attributes. It is <em>not</em> causal inference about an
            unobserved cause. It is the precondition for per-patient adaptation, not the capability
            itself.
          </p>
          <p>
            <strong>The sharpest open objection:</strong> per-patient adaptation implies thousands of
            sequential tasks, and the ceiling on task count before the graph becomes computationally
            impractical has not been established. No PCCP has been drafted, submitted, or discussed
            with anyone.
          </p>
        </div>
      </>
    ),
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    key: 'defense',
    eyebrow: 'Substrate 3 · ORMAS-Gated',
    title: 'Defense Systems — The Corrupted Input Problem',
    body: (
      <>
        <div className="vm-plain">
          <div className="vm-plain-tag">In Plain English</div>
          <p>
            Picture a drone trained in clear weather over a test range, then flown somewhere an
            adversary is actively jamming its sensors and feeding it fake signals. Its camera is
            half-blinded, its GPS is lying to it, and there is nobody on the radio to help.
          </p>
          <p>
            Today&apos;s answer is to train on lots of simulated interference and hope reality
            resembles the simulation. When the system gets confused it gives up and hands control
            back — except there is nobody to hand it back to. ORMAS is built so the system can notice{' '}
            <em>itself</em> breaking, repair the broken part while still operating, and write down
            what it repaired.
          </p>
          <p>
            <strong>The honest part, stated up front:</strong> we have shown it repairs itself when
            the damage is to the machine. We have <em>not</em> shown it handles being lied to. Those
            are different problems, and the second is the one everybody asks about.
          </p>
        </div>

        <div className="vm-h">What Happens on Approach</div>
        <div className="vm-bars">
          <div className="vm-bar-row">
            <div className="vm-bar-label">Signal quality</div>
            <div className="vm-bar-track"><div className="vm-bar-fill is-dim" style={{ width: '22%' }} /></div>
            <div className="vm-bar-note">Falling</div>
          </div>
          <div className="vm-bar-row">
            <div className="vm-bar-label">Jamming / EW</div>
            <div className="vm-bar-track"><div className="vm-bar-fill is-red" style={{ width: '88%' }} /></div>
            <div className="vm-bar-note">Rising</div>
          </div>
          <div className="vm-bar-row">
            <div className="vm-bar-label">Spoofed inputs</div>
            <div className="vm-bar-track"><div className="vm-bar-fill is-red" style={{ width: '74%' }} /></div>
            <div className="vm-bar-note">Rising</div>
          </div>
          <div className="vm-bar-row">
            <div className="vm-bar-label">Sensor damage</div>
            <div className="vm-bar-track"><div className="vm-bar-fill is-red" style={{ width: '52%' }} /></div>
            <div className="vm-bar-note">Possible</div>
          </div>
          <div className="vm-bar-row">
            <div className="vm-bar-label">Human oversight</div>
            <div className="vm-bar-track"><div className="vm-bar-fill is-dim" style={{ width: '6%' }} /></div>
            <div className="vm-bar-note">Gone</div>
          </div>
        </div>
        <div className="vm-fig-cap">
          Conditions at the objective, relative to the training environment. The distribution moves
          under the model at exactly the moment the model becomes the only thing making decisions.
        </div>
        <p className="vm-p">
          Three distinct failure classes hide in that picture, and conflating them is the mistake
          almost every pitch in this space makes:
        </p>
        <table className="vm-table">
          <thead><tr><th>Failure class</th><th>What is damaged</th><th>ORMAS evidence</th></tr></thead>
          <tbody>
            <tr><td><strong>Input corruption</strong> (test-time)</td><td>The feed. Weights are fine.</td><td>None — analogy only</td></tr>
            <tr><td><strong>Structural damage</strong> (runtime)</td><td>The weights themselves — bit flips, physical damage</td><td>Direct and strong</td></tr>
            <tr><td><strong>Noisy in-theatre adaptation</strong></td><td>Learning from partially mislabelled field data</td><td>Direct and strong</td></tr>
          </tbody>
        </table>
        <p className="vm-p">
          A further problem with today&apos;s approach: confidence scores are badly calibrated under
          distribution shift, so a corrupted network is frequently <em>confidently wrong</em>. Fallback
          logic triggers on outputs looking strange, which is a lagging indicator — and a guessable
          one. An adversary who knows you abort below 0.6 confidence can aim for 0.65.
        </p>

        <div className="vm-h">What Was Measured — The Strongest Results in the Paper</div>
        <div className="vm-stats">
          <Stat v="80.3%" l="Recovery after dead-layer lesion" />
          <Stat v="10.0%" l="Baseline, permanent collapse" />
          <Stat v="22,014" l="Corrections holding stability at 30% noise" />
          <Stat v="2.5 pp" l="Decay at 40% noise (vs 7.8 standard)" />
        </div>
        <p className="vm-p">
          The lesion result deserves emphasis. A parameter-matched standard CNN, cut mid-training,
          collapses to exactly chance — <strong>10.0% with zero variance across every seed</strong>,
          because a zeroed layer produces constant activations. It never recovers. ORMAS recovers to
          80.3% via 85 targeted corrections, and it <em>knows which node failed</em>: conflict
          monitoring localised node 1 within one epoch, oscillation magnitude 7.674 at step 39,553.
        </p>
        <p className="vm-p">
          Its relevance to <strong>battle damage and hardware degradation</strong> — radiation-induced
          bit flips, thermal faults, physical damage to the accelerator — is direct rather than
          analogical. That adjacency, including space and high-radiation environments, appears to be
          underexplored by the field.
        </p>

        <div className="vm-h">The Market — and the Honest Asymmetry</div>
        <div className="vm-stats">
          <Stat v="~$11.6B" l="AI in military, 2026 estimate" />
          <Stat v="$14.6B" l="VC into defense tech, first 5 months of 2026" />
          <Stat v="107" l="Venture rounds in that period" />
        </div>
        <div className="vm-bars">
          <div className="vm-bar-row">
            <div className="vm-bar-label">Technical fit</div>
            <div className="vm-bar-track"><div className="vm-bar-fill" style={{ width: '95%' }} /></div>
            <div className="vm-bar-note">Strongest of four</div>
          </div>
          <div className="vm-bar-row">
            <div className="vm-bar-label">Access path</div>
            <div className="vm-bar-track"><div className="vm-bar-fill is-red" style={{ width: '14%' }} /></div>
            <div className="vm-bar-note">Slowest of four</div>
          </div>
        </div>
        <p className="vm-p">
          Defense procurement does not run on technical fit. It runs on facility and personnel
          clearance, environment accreditation, export control (ITAR / EAR), and programme timelines
          measured in years. And the specific constraint here:{' '}
          <strong>I am a foreign national operating a UK company from Bangladesh.</strong> This
          segment is realistically not sold direct — it is licensed through a cleared prime or a
          national research lab.
        </p>
        <p className="vm-p">
          Which is why it is positioned <strong>last of the four segments</strong>, and why the
          pragmatic near-term route is dual-use civilian autonomy — industrial robotics and
          safety-critical control share the graceful-degradation requirement with none of the
          clearance overhead, and would generate the evidence base the defense case needs anyway.
        </p>

        <div className="vm-gap">
          <div className="vm-gap-tag">Genuinely Open — Not a Compute Problem. Read Before Weighing This Vertical.</div>
          <p>
            <strong>Every number above is training-time.</strong> The paper&apos;s threat model is
            training-time weight-space pathology, explicitly <em>distinct from input-space adversarial
            attack on a fixed network</em>. The headline jamming-and-spoofing scenario is test-time,
            and the paper names test-time distribution shift as an open extension — not a result.
          </p>
          <p>
            <strong>ORMAS loses on adversarial weight injection: 83.1% vs the baseline&apos;s
            84.1%.</strong> Down 1.0 pp. Adversarial weights are crafted to keep activation statistics
            nominal, evading exactly the signals ORMAS watches. It is a known structural blind spot
            with no current mitigation.
          </p>
          <p>
            <strong>Recovery is not deterministic.</strong> Under compound structural-noise stress the
            three seeds produced 82.1%, 77.2%, and 18.9%. One run in three substantially failed. In a
            medical context that is a retraining run; in a defense context it is disqualifying, and no
            framing changes that.
          </p>
          <p>
            No defense data, no classified environment, and no procurement conversation has occurred.
            The highest-value missing experiment is a test-time corruption benchmark.
          </p>
        </div>
      </>
    ),
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    key: 'financial',
    eyebrow: 'Substrate 4 · ORMAS-Gated',
    title: 'Regulated Financial Data — The Regime Change Problem',
    body: (
      <>
        <div className="vm-plain">
          <div className="vm-plain-tag">In Plain English</div>
          <p>
            A quant fund builds a trading model. It learns how the market behaves in, say, a calm
            trending market. Then the market changes character — everything gets volatile and starts
            snapping back instead of trending. The model is now wrong, in the expensive direction.
          </p>
          <p>
            So the firm retrains it. And in doing so, the model completely forgets how the calm market
            worked. Which is a problem, because calm markets come back. Always. So they retrain again,
            and forget again, forever. The industry calls this{' '}
            <em>&ldquo;rolling window re-estimation&rdquo;</em> — a polite name for institutionalised
            amnesia.
          </p>
          <p>
            <strong>Every quant fund on earth is currently paying, in money, for catastrophic
            forgetting.</strong> It is not a tuning problem. It is the financial expression of a known
            architectural defect — the exact defect ORMAS was built to fix.
          </p>
        </div>

        <div className="vm-h">The Cycle</div>
        <div className="vm-vs">
          <div className="vm-vs-col">
            <div className="vm-vs-head">Regime A — calm, trending</div>
            <div className="vm-vs-body">The model is trained here. It performs well.</div>
          </div>
          <div className="vm-vs-col is-bad">
            <div className="vm-vs-head">Regime B — volatile, mean-reverting</div>
            <div className="vm-vs-body">
              The model is deployed into here. It degrades invisibly, until the P&amp;L shows it.
            </div>
          </div>
        </div>
        <div className="vm-flow">
          <div className="vm-flow-step">The firm retrains the model on Regime B.</div>
          <div className="vm-flow-step">
            The new gradients <strong>overwrite</strong> the weights that encoded Regime A.
          </div>
          <div className="vm-flow-step">The model now handles B. It has forgotten A.</div>
          <div className="vm-flow-step">Regime A returns — it always does.</div>
          <div className="vm-flow-step is-bad">
            Retrain again. Forget B. Repeat forever.
          </div>
        </div>
        <p className="vm-p">
          The cost is real but never labelled: drawdown during transitions, when the model is most
          wrong about the period it knows least; retraining latency, an unhedged gap between noticing
          and deploying; discarded history, because a rolling window deliberately throws away the 2008
          and 2020 fits that will rhyme with something later; and model-risk capital, since instability
          carries a direct balance-sheet cost at regulated institutions.
        </p>
        <p className="vm-p">
          The industry&apos;s workaround is an <strong>ensemble of specialists</strong> — one model per
          regime, plus a classifier to route between them. That is a firm hand-building, externally and
          at great expense, the exact property ORMAS produces internally and automatically. When an
          entire industry builds elaborate scaffolding to simulate a property, the property is worth
          having natively.
        </p>

        <div className="vm-h">Why This Is the Cleanest Mapping of the Three</div>
        <p className="vm-p">
          The zero-shot experiment was not designed as a finance experiment. But it is not an analogy
          to the regime problem — it is <strong>structurally the same experiment</strong>:
        </p>
        <table className="vm-table">
          <thead><tr><th>The experiment</th><th>The market equivalent</th></tr></thead>
          <tbody>
            <tr><td>Phase 1: learn Shape</td><td>Learn regime A&apos;s structure</td></tr>
            <tr><td>Phase 2: switch to Color, <strong>no replay buffer</strong></td><td>Regime turns; old data not retained or usable</td></tr>
            <tr><td><strong>No task ID given</strong></td><td>Nobody rings a bell when a regime changes</td></tr>
            <tr><td>Measure Phase 1 retention afterwards</td><td>Does the model still know regime A?</td></tr>
            <tr><td>Phase 3: novel combinations</td><td>Conditions rhyming with A and B, matching neither</td></tr>
          </tbody>
        </table>
        <div className="vm-stats">
          <Stat v="94.6%" l="Regime A retained (ORMAS)" />
          <Stat v="47.3%" l="Regime A retained (ResNet-18)" />
          <Stat v="4.5×" l="Weight-variance reduction vs baseline" />
          <Stat v="0.19 / 0.86" l="Final weight variance, ORMAS / standard" />
        </div>
        <p className="vm-p">
          The network detects the regime change <strong>itself</strong>, through gradient conflict — no
          changepoint detector, no regime classifier to maintain, no decision about how many
          specialists to train. Conflicting objectives are forced into physically separate regions of
          weight space, so neither overwrites the other. That 4.5× variance reduction is the kind of
          number that goes directly into a model-risk validation report.
        </p>

        <div className="vm-h">Lock 1 — Two Independent Constraints, Both Hard</div>
        <p className="vm-p">
          <strong>Competitive:</strong> position, execution, and client flow data are the firm&apos;s
          edge. Sending them to a third-party API is not a policy question, it is unthinkable — which
          eliminates every hosted model and forces on-premise deployment.
        </p>
        <p className="vm-p">
          <strong>Regulatory:</strong> <strong>SR 11-7</strong> (Federal Reserve / OCC model risk
          guidance) requires documented development, validation, and ongoing monitoring;{' '}
          <strong>Solvency II</strong> imposes equivalents on EU insurers. A model that outperforms but
          cannot be validated does not get deployed — it gets rejected by model risk. Same shape as
          medicine and defense: permission is granted on governance, not on returns.
        </p>

        <div className="vm-h">The Market — and Why This Is the First Commercial Move</div>
        <div className="vm-stats">
          <Stat v="~$21.2B" l="AI in finance, 2026" />
          <Stat v="27.9%" l="Risk management — largest application segment" />
          <Stat v="68%" l="Of hedge funds already using AI" />
          <Stat v="$6.0M" l="ARR modelled across both finance segments" />
        </div>
        <p className="vm-p">
          Two of those matter more than the headline. Risk management being the largest application
          segment is precisely where an audit trail and a stability characterisation apply. And with
          68% of hedge funds already running AI, <strong>this is not an evangelism sale</strong> — the
          budget exists, the models are deployed, and the buyer already knows they have this problem.
        </p>
        <p className="vm-p">
          At <strong>$200K ACV</strong> across roughly 30 accounts, the finance verticals are 60% of
          the modelled beachhead. That weighting is deliberate: unlike the other two, this segment is
          reachable without institutional gatekeeping. A quant fund CTO can buy software this quarter.
          No regulator to convince before the first sale, no clearance, no export control — and public
          data exists for the validating experiment.
        </p>

        <div className="vm-gap">
          <div className="vm-gap-tag">What Is Outstanding — and Why None of It Is a Cluster Problem</div>
          <p>
            <strong>This vertical is not compute-gated.</strong> The validating experiment — run the
            same sequential protocol on public market data, two regimes, no replay buffer, measure
            retention — needs no cluster, no permission, and no partner. It has simply not been run
            yet, which makes it the cheapest outstanding item in the entire programme and the first
            place new resource should go. No financial data has touched ORMAS; the retention numbers
            are CIFAR-10.
          </p>
          <p>
            <strong>The sharpest technical objection:</strong> ORMAS triggers on gradient{' '}
            <em>conflict</em>, and the experiment&apos;s task switch was clean and abrupt. Real regime
            transitions are gradual. A mechanism that fires on conflict may simply not fire on slow
            drift. This is untested and load-bearing.
          </p>
          <p>
            <strong>Two domain caveats the paper cannot address:</strong> retention only has value
            where the retained structure stays valid — an edge arbitraged away is worth nothing
            remembered perfectly, so this helps most with structural regularities rather than alpha
            signals. And financial signal-to-noise is far worse than CIFAR-10&apos;s; 40% symmetric
            label noise on images is not the same beast as structural noise in market data.
          </p>
        </div>
      </>
    ),
  },
];
