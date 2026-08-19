import Icon from '@/components/common/Icon';
import React, { useState } from 'react';
import VerticalModal from '../VerticalModal';
import { deepDives } from './verticalDeepDives';

// ─── The six named things — the whole cast, so nothing is ambiguous ──────────
const namedThings = [
  { name: 'OXIDO', line: 'The company and the full stack.', kind: 'The whole' },
  { name: 'OXIMO', line: 'The operating system. Agents that hire agents.', kind: 'Layer 1 — built, ran in production' },
  { name: 'AX09', line: "The first application built on OXIMO: it decides what to sell and produces everything needed to sell it.", kind: 'A vertical extension of Layer 1 — built, ran in production' },
  { name: 'Black Bloxie LTD', line: 'A real UK company, run entirely by AX09 on OXIMO, used as a laboratory.', kind: 'The test environment — not a product' },
  { name: 'The Falsification Ladder', line: 'Seven escalating experiments run on that company to try to disprove the thesis.', kind: 'The method' },
  { name: 'ORMAS', line: 'The training architecture. A network diagnoses and repairs itself, and produces an audit trail as a byproduct.', kind: 'Layer 2 — finished, published, 383 experiments' },
  { name: 'Project Cherry', line: 'A model trained from scratch on ORMAS, removing the last external dependency.', kind: 'Layer 3 — not built' },
];

// ─── The map — nine forced steps, five ventures through to the industry ──────
const mapSteps = [
  { kind: 'origin', name: 'Five Failed Ventures', sub: 'Age 12–17', body: 'Software services, cold-call automation, digital marketing, e-commerce, automation tooling. All five broke at a different layer. One convergent finding: the bottleneck was never individual capability. It was always coordination.' },
  { kind: 'built', name: 'OXIMO', sub: 'Layer 1 — The Operating System', body: 'Decomposes the objective. If no agent has the skill, it designs, validates, and hires one.' },
  { kind: 'built', name: 'AX09', sub: 'The first vertical built on OXIMO', body: 'A scanner decides what to sell. A 6-stage pipeline produces how to sell it — $0.0043 per full 12-asset product suite.' },
  { kind: 'built', name: 'Black Bloxie LTD', sub: 'The laboratory', body: 'A real UK company. Real supplier, real customers in 10 countries. Every operational role held by an agent.' },
  { kind: 'built', name: 'The Falsification Ladder', sub: '7 rungs, 12 months', body: 'Deploy → measure. Remove → measure. Restore → measure. Escalate. −91% on removal. +1,300% on restoration.' },
  { kind: 'wall', name: 'The Wall', sub: 'Rung 6 broke the plan', body: 'Restoration overshot baseline 3.3× — the memory survived. So the system had to learn from the business’s own data: mislabelled, contradictory, corrupted. DivideMix, ProMix, CoDE — all of them failed.' },
  { kind: 'built', name: 'ORMAS', sub: 'Layer 2 — the fix, traced to 1986', body: 'One global error signal means no unit inside a network can assess its own state. Give every node a bounded second path. Kill a converged layer: baseline 10.0% forever, ORMAS 80.3%.' },
  { kind: 'future', name: 'Project Cherry', sub: 'Layer 3 — not built', body: 'A model pre-trained on the architecture itself, so the stack rents intelligence from nobody.' },
  { kind: 'industry', name: 'The Industry This Creates', sub: '', body: 'Institutions that cannot move their data get to train on it. Every one of them needs the layer underneath. Nobody owns it yet.' },
];

const roadmap = [
  {
    phase: 'Phase 1',
    status: 'Complete',
    label: 'Early Prototypes',
    desc: 'Monolithic early builds, validated commercially Aug–Oct 2025.',
    removes: 'The doubt that any of this could originate demand.',
    active: false,
  },
  {
    phase: 'Phase 2',
    status: 'Complete',
    label: 'OXIMO v3 + AX09',
    desc: 'Sacred Chain, DynamicRouter, self-hiring FSM, three-tier memory, the AX09 cascade — validated by the recovery arm, Mar–Jul 2026.',
    removes: 'The doubt that the architecture causes the output.',
    active: false,
  },
  {
    phase: 'Phase 3',
    status: 'Active',
    label: 'ORMAS-T — Dynamic Capacity at Transformer Scale',
    desc: 'Two things at once: per-head structural monitoring on attention, and the switch from a hand-set graph to one that grows its own capacity through Silent Node Injection. The static published network was scaffolding for the proof; this is the architecture it was always specified to become.',
    removes: 'The fixed-capacity ceiling — the thing that caps zero-shot at 58.8% and forces one block to serve two competing tasks. Removing it is what makes continuous on-premise learning on messy institutional data viable, and it is the single gate standing in front of all three remaining verticals.',
    active: true,
  },
  {
    phase: 'Phase 4',
    status: 'Future',
    label: 'Project Cherry',
    desc: 'A self-correcting foundation model pre-trained on ORMAS-T, not fine-tuned from someone else’s.',
    removes: 'The external model dependency — inference becomes internal, cost collapses from API fees to hardware, deployment becomes genuinely air-gapped.',
    active: false,
  },
];

const buyerSegments = [
  { range: '#1–10', who: 'US academic medical centres running clinical AI under an FDA pathway', problem: 'Access is granted on governance rather than accuracy, and the FDA’s Change Control Plan framework permits continuous updating only within bounds specified and monitored in advance. The compliance line is already budgeted; ORMAS emits the monitoring artifact natively instead of wrapping a model in one.', pop: '~150–200 US institutions with both an internal AI research group and a regulated deployment route' },
  { range: '#11–25', who: 'Quantitative funds and asset managers with in-house ML teams', problem: 'Catastrophic forgetting across market regime changes — models degrade on exactly the patterns they were trained on, at the moment those patterns matter. Data cannot leave for competitive reasons.', pop: 'Several hundred globally at meaningful size' },
  { range: '#26–40', who: 'Insurers and credit-risk teams', problem: 'Continuous distribution shift plus a supervisor requiring model-risk documentation. Silent drift surfaces as reserve miscalculation — a compliance failure with direct financial liability.', pop: 'Low hundreds globally — carriers and lenders large enough to run a formal model-risk function under SR 11-7 or Solvency II' },
  { range: '#41–50', who: 'Defense and national-security integrators', problem: 'Models degrade precisely when input streams are jammed, spoofed, or degraded, and nothing enters a classified enclave that cannot account for its own behaviour. The technical fit is the strongest of the four segments.', pop: 'Last by design, not by preference: clearance, facility accreditation, and export control gate this segment — not the architecture. Realistically routed through a cleared prime rather than sold direct, and I am a foreign national, which lengthens that path further.' },
];

// ─── The three ORMAS-gated verticals — what the architecture is actually for ──
const gatedVerticals = [
  {
    name: 'Medical Research',
    lock: 'Clinical data is released on governance, not accuracy. Since the FDA finalised its Predetermined Change Control Plan guidance in December 2024, a deployed model is allowed to keep updating — but only within modifications specified, validated, and monitored in advance. The bar moved from “frozen” to “bounded and accounted for,” which is a harder engineering requirement, not an easier one.',
    why: 'The requirement is the exact opposite of frozen. What works for patient A does not work for patient B, and the question that matters — what is happening to this one — is not a statistical property of the population they were drawn from. Current practice wraps a static network in heavy engineering at both ends: aggressive normalisation going in, a stack of statistical correction coming out. The population-level numbers come out right. The individual is still unanswered.',
    what: 'ORMAS learned a second task while holding 94.6% of the first, with no replay buffer and no task labels, against ResNet-18’s 47.3% — consistent across all three seeds. On combinations it was never shown grouped it scored 58.8% against a 25% chance baseline. I want to be precise about what that is: compositional generalisation over learned attributes, not causal inference about an unobserved cause. It is the precondition for per-patient adaptation, not the capability itself. What it does establish is that a model can keep learning after deployment without erasing what it already knew — and every correction lands in L4 as a bounded, timestamped, ISS-bounded event, which is the exact class of artifact a Change Control Plan has to specify in advance.',
    gap: 'Separate the two things here. Compute-gated: ORMAS-T is written and the mechanism already carried across four architecture families including ResNet-18 — running it at Transformer scale needs multi-node H100/A100 access, not a new idea. Genuinely open: no clinical data has ever touched this, and that is a partnership and access problem no amount of GPU solves. The retention numbers are CIFAR-10. One real unknown sits underneath the vertical specifically — per-patient adaptation implies thousands of sequential tasks, and the ceiling on task count before the graph becomes impractical has not been established.',
    chips: ['FDA change-control fit', 'Personalisation gap', '~150–200 institutions'],
  },
  {
    name: 'Defense Systems',
    lock: 'Classified sensor data does not leave its enclave, and nothing goes into an enclave that cannot account for its own behaviour.',
    why: 'A platform approaching a target stops receiving the data it was trained on — jamming, spoofing, sensor degradation, deliberate corruption. The distribution moves under the model at precisely the moment the model matters, and there is no operator in the loop to notice.',
    what: 'This is where the measured robustness sits. Under 40% label noise ORMAS decayed 2.5 pp from peak against 7.8 pp standard. After a mid-training dead-layer lesion it recovered to 80.3% where a parameter-matched CNN collapsed permanently to 10.0%, across every initialisation. Under σ=1.0 weight perturbation, 75.4% against 59.0%. On a 50-node DAG at 30% noise — dense enough that uncorrected training goes to NaN — 22,014 autonomous corrections held it numerically stable for 200 epochs.',
    gap: 'This vertical is the one where the gap is genuinely scientific rather than financial, and I am not going to blur that. Every number above is training-time. The paper’s threat model is training-time weight-space pathology, not input-space attack on a fixed network — and on adversarial weight injection the standard baseline beats ORMAS by 1.0 pp, because those weights keep activation statistics nominal and evade exactly the signals ORMAS watches. Test-time distribution shift is named in the paper as an unrun extension. Compute does not fix either of those; they need experiments that have not been designed yet. Strongest technical fit of the three, weakest evidence, slowest access path.',
    chips: ['Measured robustness', 'Known blind spot', 'Access path reality'],
  },
  {
    name: 'Regulated Financial Data',
    lock: 'Position, execution, and client data are SEC-regulated and competitively fatal to expose. None of it leaves the building, ever — which rules out every hosted model by construction.',
    why: 'Regime change. A model trained through one market regime degrades exactly when the regime turns, and retraining on the new one destroys what it knew about the old. Then the old regime comes back. This is catastrophic forgetting with money attached, and the industry currently pays for it by retraining on a schedule and accepting the loss.',
    what: 'The sequential-task experiment is that problem in miniature: train Phase 1, switch to Phase 2 with no replay buffer and no task label, then measure what survives of Phase 1. Standard ResNet-18 keeps 47.3%. ORMAS keeps 94.6%. The mechanism is not a scheduler or a buffer — gradient conflict forces the two regimes into physically separate regions of weight space, so neither overwrites the other.',
    gap: 'The mechanism is proven and the domain mapping is the cleanest of the three — but no financial data has touched it yet, and CIFAR-10 is not a market. Worth being precise about why: this one is not compute-gated. The validating experiment is the sequential-task protocol run on public market data, two regimes, no replay buffer, measure retention. It needs no cluster, no permission, and no partner. It has simply not been run yet, which makes it the cheapest outstanding item in the entire programme and the first thing new resource should go to. The open question underneath it: ORMAS triggers on gradient conflict, and real regime transitions are gradual rather than abrupt — a mechanism that fires on conflict may not fire on slow drift.',
    chips: ['Cleanest mapping', '94.6% vs 47.3%', 'First commercial move'],
  },
];

const sectionLabel: React.CSSProperties = {
  fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
  textTransform: 'uppercase', color: '#c4cfde', marginBottom: '16px',
};

export default function CVOxido() {
  const [openDive, setOpenDive] = useState<number | null>(null);

  return (
    <div className="row mb--50" id="oxido">
      <style>{`
        .oxido-thing-table { border: 1px solid #2a2d32; border-radius: 8px; overflow: hidden; margin-bottom: 40px; }
        .oxido-thing-row {
          display: grid;
          grid-template-columns: 170px 1fr 240px;
          gap: 20px;
          padding: 16px 22px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          align-items: baseline;
        }
        .oxido-thing-row:last-child { border-bottom: none; }
        .oxido-thing-row:first-child { background: rgba(255,255,255,0.02); }
        .oxido-thing-name { font-size: 14px; font-weight: 800; color: #fff; }
        .oxido-thing-line { font-size: 14px; color: #9aa4b0; line-height: 1.6; }
        .oxido-thing-kind { font-size: 12px; color: #838d99; line-height: 1.5; }
        @media (max-width: 760px) {
          .oxido-thing-row { grid-template-columns: 1fr; gap: 6px; }
        }

        .oxido-correction {
          background: linear-gradient(135deg, rgba(255,74,87,0.06) 0%, #191b1e 62%);
          border: 1px solid rgba(255,74,87,0.22);
          border-left: 3px solid #ff4a57;
          border-radius: 8px;
          padding: 22px 26px;
          margin-bottom: 48px;
        }
        .oxido-correction-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          color: #ff4a57; margin-bottom: 10px;
        }
        .oxido-correction-body { font-size: 15px; line-height: 1.8; color: #c4cfde; margin: 0; }
        .oxido-correction-body strong { color: #fff; font-weight: 700; }

        .oxido-map { display: flex; flex-direction: column; margin-bottom: 8px; }
        .oxido-map-node {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 20px;
          padding: 18px 0;
        }
        .oxido-map-rail { display: flex; flex-direction: column; align-items: center; }
        .oxido-map-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: #2a2d32; border: 2px solid #4a5568; flex-shrink: 0;
        }
        .oxido-map-node.is-built .oxido-map-dot { background: #c4cfde; border-color: #c4cfde; }
        .oxido-map-node.is-wall .oxido-map-dot { background: #ff4a57; border-color: #ff4a57; }
        .oxido-map-node.is-future .oxido-map-dot { background: transparent; border-color: #838d99; border-style: dashed; }
        .oxido-map-node.is-industry .oxido-map-dot { background: #c4cfde; border-color: #c4cfde; width: 14px; height: 14px; }
        .oxido-map-line { width: 1px; flex: 1; background: rgba(255,255,255,0.1); margin-top: 4px; min-height: 30px; }
        .oxido-map-node:last-child .oxido-map-line { display: none; }
        .oxido-map-card {
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 8px;
          padding: 18px 22px;
        }
        .oxido-map-node.is-wall .oxido-map-card { border-color: rgba(255,74,87,0.28); background: linear-gradient(135deg, rgba(255,74,87,0.05) 0%, #191b1e 62%); }
        .oxido-map-node.is-future .oxido-map-card { border-style: dashed; border-color: #3a3f47; }
        .oxido-map-node.is-industry .oxido-map-card { border-color: rgba(196,207,222,0.3); background: rgba(196,207,222,0.045); }
        .oxido-map-name { font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 2px; }
        .oxido-map-node.is-wall .oxido-map-name { color: #ff4a57; }
        .oxido-map-sub { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #838d99; margin-bottom: 8px; }
        .oxido-map-body { font-size: 14px; line-height: 1.7; color: #9aa4b0; margin: 0; }

        .oxido-buyer-table { border: 1px solid #2a2d32; border-radius: 8px; overflow: hidden; margin-bottom: 24px; }
        .oxido-buyer-row { display: grid; grid-template-columns: 70px 1fr 1fr 200px; gap: 18px; padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .oxido-buyer-row:last-child { border-bottom: none; }
        .oxido-buyer-row.head { background: rgba(255,255,255,0.02); }
        .oxido-buyer-cell { font-size: 13px; color: #9aa4b0; line-height: 1.6; }
        .oxido-buyer-cell.label { color: #c4cfde; font-weight: 700; font-size: 11px; letter-spacing: 1.2px; text-transform: uppercase; }
        .oxido-buyer-cell.range { color: #c4cfde; font-weight: 700; }
        .oxido-buyer-cell.pop { color: #838d99; font-size: 12px; }
        @media (max-width: 900px) {
          .oxido-buyer-row { grid-template-columns: 1fr; gap: 6px; }
          .oxido-buyer-row.head { display: none; }
        }

        .oxido-arith { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2px; margin-bottom: 32px; }
        .oxido-arith-cell { background: #191b1e; border: 1px solid #2a2d32; padding: 20px 18px; text-align: center; }
        .oxido-arith-val { font-size: 22px; font-weight: 800; color: #c4cfde; margin-bottom: 6px; }
        .oxido-arith-lbl { font-size: 11px; color: #838d99; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700; line-height: 1.4; }

        .oxido-links { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 48px; }
        .oxido-link {
          display: flex; align-items: center; gap: 10px;
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 6px;
          padding: 10px 16px; text-decoration: none; transition: border-color 0.2s;
          flex: 1 1 170px; min-width: 150px; max-width: 240px;
        }
        .oxido-link:hover { border-color: rgba(196,207,222,0.4); }
        .oxido-link-label { font-size: 13px; font-weight: 700; color: #c4cfde; }
        .oxido-link-sub { font-size: 10px; color: #a6b0bc; text-transform: uppercase; letter-spacing: 0.6px; margin-top: 3px; display: flex; align-items: center; gap: 5px; }

        .oxido-dive-btn {
          position: relative; overflow: hidden;
          display: flex; align-items: center; gap: 16px;
          width: 100%; margin-top: 18px; text-align: left; cursor: pointer;
          padding: 18px 22px; border-radius: 12px;
          border: 1px solid #3a4048;
          background:
            linear-gradient(180deg, rgba(196,207,222,0.075) 0%, rgba(196,207,222,0.03) 100%),
            #16181c;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 6px 22px -14px rgba(0,0,0,0.9);
          color: #c4cfde;
          transition: border-color 0.25s ease, box-shadow 0.25s ease,
                      transform 0.25s ease, background 0.25s ease;
        }
        .oxido-dive-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(196,207,222,0.55);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.07),
            0 10px 30px -14px rgba(0,0,0,0.95),
            0 0 0 3px rgba(196,207,222,0.07);
        }
        .oxido-dive-btn:focus-visible {
          outline: none; border-color: #c4cfde;
          box-shadow: 0 0 0 3px rgba(196,207,222,0.25);
        }
        .oxido-dive-btn::after {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(105deg, transparent 34%,
            rgba(196,207,222,0.06) 44%, rgba(196,207,222,0.13) 50%,
            rgba(196,207,222,0.06) 56%, transparent 66%);
          transform: translateX(-100%);
          animation: oxidoSweep 6.5s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        @keyframes oxidoSweep {
          0%, 55% { transform: translateX(-100%); }
          100%    { transform: translateX(100%); }
        }
        .oxido-dive-icon {
          position: relative; flex-shrink: 0;
          width: 42px; height: 42px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          border: 1px solid rgba(196,207,222,0.28);
          background: rgba(196,207,222,0.08);
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .oxido-dive-btn:hover .oxido-dive-icon {
          background: rgba(196,207,222,0.15);
          border-color: rgba(196,207,222,0.5);
        }
        .oxido-dive-icon::before {
          content: ""; position: absolute; top: -3px; right: -3px;
          width: 8px; height: 8px; border-radius: 50%;
          background: #c4cfde; box-shadow: 0 0 0 2px #16181c;
          animation: oxidoPulse 2.4s ease-in-out infinite;
        }
        @keyframes oxidoPulse {
          0%, 100% { opacity: 1;    transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(0.75); }
        }
        .oxido-dive-txt { flex: 1; min-width: 0; }
        .oxido-dive-btn-label {
          display: block; font-size: 15px; font-weight: 700;
          letter-spacing: 0.2px; color: #e8edf4; margin-bottom: 4px; line-height: 1.35;
        }
        .oxido-dive-btn-hint {
          display: block; font-size: 12.5px; line-height: 1.6; color: #a6b0bc; font-weight: 400;
        }
        .oxido-dive-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 11px; }
        .oxido-dive-chip {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.9px;
          text-transform: uppercase; color: #c4cfde;
          background: rgba(196,207,222,0.09);
          border: 1px solid rgba(196,207,222,0.22);
          border-radius: 999px; padding: 4px 11px; white-space: nowrap;
        }
        .oxido-dive-cta {
          flex-shrink: 0; display: flex; align-items: center; gap: 10px; color: #c4cfde;
        }
        .oxido-dive-cta-word {
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
        }
        .oxido-dive-cta-ring {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(196,207,222,0.3);
          background: rgba(196,207,222,0.07);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .oxido-dive-btn:hover .oxido-dive-cta-ring {
          background: rgba(196,207,222,0.16);
          border-color: rgba(196,207,222,0.55);
          transform: scale(1.06);
        }
        @media (max-width: 640px) {
          .oxido-dive-btn { gap: 13px; padding: 16px; align-items: flex-start; }
          .oxido-dive-icon { width: 36px; height: 36px; }
          .oxido-dive-btn-label { font-size: 14px; }
          .oxido-dive-cta-word { display: none; }
          .oxido-dive-cta { align-self: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .oxido-dive-btn::after, .oxido-dive-icon::before { animation: none; }
          .oxido-dive-btn:hover { transform: none; }
        }
      `}</style>
      <div className="col-12">

        <span className="subtitle" style={{
          color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase',
          letterSpacing: '2px', fontSize: '14px',
        }}>
          The Complete Definition
        </span>
        <h2 className="title fs-2" style={{ fontWeight: '700', marginBottom: '6px' }}>OXIDO</h2>
        <p style={{
          fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
          textTransform: 'uppercase', color: '#9aa4b0', marginBottom: '24px',
        }}>
          What It Is, How Every Part Connects, and Why It Exists
        </p>

        {/* THE ONE SENTENCE */}
        <p style={{
          fontSize: '22px', lineHeight: '1.6', color: '#fff', fontWeight: 700,
          maxWidth: '760px', marginBottom: '22px', letterSpacing: '-0.2px',
        }}>
          OXIDO is building the layer underneath AI that lets a machine account for what
          it learned — and the company that runs itself on top of it.
        </p>

        {/* 60-SECOND VERSION */}
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '720px', marginBottom: '12px' }}>
          Today, when you train an AI, you get a result and no explanation. Nobody inside the
          system can tell you which part learned what, which part broke, or whether it quietly
          learned something wrong — not because the systems are too big, but because of one
          design decision made in 1986 that nobody has revisited.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '720px', marginBottom: '12px' }}>
          The consequence: every institution holding data worth learning from — hospitals,
          banks, funds, insurers — is locked out. Not by law, not by cost. They are locked out
          because you cannot responsibly train a model on sensitive records when the model
          cannot tell you what it learned, and no regulator accepts "trust us."
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#c4cfde', maxWidth: '720px', marginBottom: '44px', fontWeight: 600 }}>
          I built the fix, then spent a year trying to prove it wrong on a real company with
          real customers and real money. It survived.
        </p>

        {/* THE HONEST CORRECTION — the single most common misreading */}
        <div className="oxido-correction">
          <div className="oxido-correction-tag">Read This Before Anything Else Below</div>
          <p className="oxido-correction-body">
            <strong>Black Bloxie LTD is not a product, not a business being scaled, and not a
            third layer of the stack.</strong> It is the laboratory the other two layers were
            tested inside. <strong>The revenue is not the result. It is the instrument.</strong>
          </p>
        </div>

        {/* PRIMARY SOURCES */}
        <div className="oxido-links">
          <a className="oxido-link" href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer">
            <span>
              <div className="oxido-link-label">ORMAS Paper</div>
              <div className="oxido-link-sub">Zenodo DOI<Icon name="externalLink" size={11} /></div>
            </span>
          </a>
          <a className="oxido-link" href="/assets/pdf/oxido_investor_whitepaper.pdf" target="_blank" rel="noreferrer">
            <span>
              <div className="oxido-link-label">12-Month Record</div>
              <div className="oxido-link-sub">Commercial Evidence Report<Icon name="externalLink" size={11} /></div>
            </span>
          </a>
          <a className="oxido-link" href="#deployment">
            <span>
              <div className="oxido-link-label">The Falsification Ladder</div>
              <div className="oxido-link-sub">All Seven Rungs, In Order →</div>
            </span>
          </a>
          <a className="oxido-link" href="https://orcid.org/0009-0003-1178-5296" target="_blank" rel="noreferrer">
            <span>
              <div className="oxido-link-label">ORCID</div>
              <div className="oxido-link-sub">0009-0003-1178-5296<Icon name="externalLink" size={11} /></div>
            </span>
          </a>
        </div>

        {/* THE SIX NAMED THINGS */}
        <p style={sectionLabel}>The Six Named Things</p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#9aa4b0', maxWidth: '700px', marginBottom: '20px' }}>
          Anyone reading this site will encounter six proper nouns. Here is the whole cast, in
          one table, so nothing is ambiguous.
        </p>
        <div className="oxido-thing-table">
          {namedThings.map((t, i) => (
            <div key={i} className="oxido-thing-row">
              <div className="oxido-thing-name">{t.name}</div>
              <div className="oxido-thing-line">{t.line}</div>
              <div className="oxido-thing-kind">{t.kind}</div>
            </div>
          ))}
        </div>

        {/* THE MAP */}
        <p style={sectionLabel}>The Map</p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#9aa4b0', maxWidth: '700px', marginBottom: '24px' }}>
          Read the connections, not the boxes. Every step below exists because the step above it
          broke or was insufficient. Nothing here was chosen from a market map — it was forced.
        </p>
        <div className="oxido-map">
          {mapSteps.map((s, i) => (
            <div key={i} className={`oxido-map-node is-${s.kind}`}>
              <div className="oxido-map-rail">
                <div className="oxido-map-dot" />
                <div className="oxido-map-line" />
              </div>
              <div className="oxido-map-card">
                <div className="oxido-map-name">{s.name}</div>
                {s.sub ? <div className="oxido-map-sub">{s.sub}</div> : null}
                <p className="oxido-map-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '14px', color: '#838d99', marginBottom: '56px', maxWidth: '700px', lineHeight: '1.7' }}>
          Full nine-step account, with what each step forced, in the{' '}
          <a href="#deployment" style={{ color: '#c4cfde', textDecoration: 'underline' }}>Deployment section</a>{' '}
          and the published record above.
        </p>

        {/* BUSINESS MODEL */}
        <p style={sectionLabel}>Business Model — Enterprise Licensing, Not SaaS</p>
        <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#9aa4b0', maxWidth: '720px', marginBottom: '20px' }}>
          There are no consumer customers here. No dashboard, no free tier, no Product Hunt launch. This is worth the most exactly where the data is proprietary, messy, and legally sensitive — where a model quietly learning the wrong thing is not an inconvenience but a catastrophe.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', marginBottom: '56px' }}>
          {[
            { title: 'The Data Cannot Leave', body: 'Medical records, financial positions, actuarial tables — none of it can be uploaded to somebody else’s SaaS platform, ever. OXIDO deploys inside the client’s own infrastructure, on their servers, under their compliance framework.' },
            { title: 'GlassBox Is a Compliance Asset', body: 'Regulated industries have to account for what the model did and why. The FDA does not mandate any particular architecture — plenty of opaque models are cleared — but its Change Control Plan framework requires modifications to be pre-specified, validated, and monitored. GlassBox emits a causal audit trail per node, per correction, per epoch: that artifact produced natively, rather than reconstructed after the fact.' },
            { title: 'The Switching Cost Is the Moat', body: 'After twelve months inside an organization, OXIMO’s agents have built episodic memory and matured into experts on that specific business. Removing it is not a migration, it is an amputation — the Black Bloxie ablation measured exactly what that costs: 91% of output, gone.' },
          ].map((c, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', padding: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#c4cfde', marginBottom: '10px', letterSpacing: '0.3px' }}>{c.title}</div>
              <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#9aa4b0' }}>{c.body}</div>
            </div>
          ))}
        </div>

        {/* WHO PAYS */}
        <p style={sectionLabel}>Who Pays — Three Properties, All at Once</p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', maxWidth: '720px', marginBottom: '10px' }}>
          The qualifying buyer holds proprietary data that legally cannot leave their
          infrastructure, has an active initiative to train or fine-tune models on it, and
          answers to a regulator who will ask what the model learned. <strong style={{ color: '#c4cfde' }}>All three, or they
          are not a customer.</strong> That constraint makes the count small and the contracts large —
          sized from the buyer upward, not from an analyst report downward.
        </p>
        <div className="oxido-buyer-table" style={{ marginTop: '20px' }}>
          <div className="oxido-buyer-row head">
            <div className="oxido-buyer-cell label">#</div>
            <div className="oxido-buyer-cell label">Who</div>
            <div className="oxido-buyer-cell label">Their Version of the Problem</div>
            <div className="oxido-buyer-cell label">Population</div>
          </div>
          {buyerSegments.map((b, i) => (
            <div key={i} className="oxido-buyer-row">
              <div className="oxido-buyer-cell range">{b.range}</div>
              <div className="oxido-buyer-cell" style={{ color: '#c4cfde', fontWeight: 600 }}>{b.who}</div>
              <div className="oxido-buyer-cell">{b.problem}</div>
              <div className="oxido-buyer-cell pop">{b.pop}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: '#838d99', marginBottom: '20px', lineHeight: '1.7' }}>
          On-premise licensing means near-zero infrastructure cost and software-grade margin.
          Comparable model-risk and compliance tooling prices at $150K–$300K/yr.
        </p>
        <div className="oxido-arith">
          {[
            { val: '$200K', lbl: 'Modelled Avg. ACV' },
            { val: '$10M ARR', lbl: '50 Accounts' },
            { val: '$40M–$100M ARR', lbl: '200–500 Accounts' },
          ].map((s, i) => (
            <div key={i} className="oxido-arith-cell">
              <div className="oxido-arith-val">{s.val}</div>
              <div className="oxido-arith-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', maxWidth: '720px', marginBottom: '56px' }}>
          That arithmetic is the beachhead, not the thesis. The thesis is structural: every
          institution that currently cannot train on its own data represents a deployment that
          does not exist yet — not a competitor's customer to take, a category of work presently
          impossible. Whoever owns the training layer sits underneath every one of those
          deployments, the way a database sits under an application. It compounds per deployment,
          because memory cannot be exported, and it sits upstream of everything —
          frameworks, governance platforms, and applications all run <em>on</em> a training layer.
          We are building the layer itself.
        </p>

        {/* WHAT ORMAS IS FOR — the three gated verticals */}
        <p style={sectionLabel}>What ORMAS Is Actually For</p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '720px', marginBottom: '16px' }}>
          A self-correcting network is a fancy object until you can say what it is for. Four
          substrates were planned. One is done — e-commerce — and it was chosen precisely
          because it needed none of this: open data, a feedback loop measured in days, and a
          binary failure signal. That made it the clean place to test whether the orchestration
          layer causes commercial output, with nothing else confounding it.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '720px', marginBottom: '28px' }}>
          The three still open are <strong style={{ color: '#c4cfde' }}>medical research, defense
          systems, and regulated financial data</strong>. They are not queued behind the first one.
          They are gated — and OXIDO is not the thing that opens them. ORMAS is.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { n: 'Lock 1', t: 'Access is granted on auditability, not accuracy.', b: 'You do not get clinical records, classified telemetry, or regulated position data by beating the incumbent on a benchmark. You get them by proving, per decision, what the model did and why. Every current architecture answers that question post hoc — an approximation of a network that has already made up its mind. ORMAS emits it as a physical property of its own backward pass: five telemetry layers, down to an exact boolean tensor of which node was corrected, when, and by how much.' },
            { n: 'Lock 2', t: 'The answer is not in the training set.', b: 'Each of these domains needs the model to keep learning after deployment — per patient, per regime, per mission — without destroying what it already knew. That is the one thing a standard network structurally cannot do. Train it on the new thing and it forgets the old thing; this is catastrophic forgetting, and every existing workaround needs replay buffers, task boundaries, or task IDs at inference. ORMAS needs none of them, because the conflict signal that triggers a correction is itself the notification that something new has arrived.' },
          ].map((l, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '22px 24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#838d99', marginBottom: '8px' }}>{l.n}</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.45 }}>{l.t}</div>
              <div style={{ fontSize: '14px', lineHeight: 1.75, color: '#9aa4b0' }}>{l.b}</div>
            </div>
          ))}
        </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {gatedVerticals.map((v, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '24px 26px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{v.name}</div>
                {[
                  { k: 'What is locked', v: v.lock },
                  { k: 'Why standard practice fails', v: v.why },
                  { k: 'What ORMAS contributes', v: v.what },
                ].map((row, j) => (
                  <div key={j} style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#838d99', marginBottom: '5px' }}>{row.k}</div>
                    <div style={{ fontSize: '14px', lineHeight: 1.75, color: '#9aa4b0' }}>{row.v}</div>
                  </div>
                ))}
                <div style={{ background: 'rgba(255,74,87,0.05)', borderLeft: '2px solid #ff4a57', borderRadius: '0 6px 6px 0', padding: '12px 16px', marginTop: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ff4a57', marginBottom: '5px' }}>What is not proven</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.75, color: '#9aa4b0' }}>{v.gap}</div>
                </div>

                <button
                  type="button"
                  className="oxido-dive-btn"
                  onClick={() => setOpenDive(i)}
                  aria-haspopup="dialog"
                >
                  <span className="oxido-dive-icon" aria-hidden="true">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </span>
                  <span className="oxido-dive-txt">
                    <span className="oxido-dive-btn-label">View the Full Breakdown</span>
                    <span className="oxido-dive-btn-hint">
                      Written for a non-technical reader — the problem, the mechanism, the market, and the limits
                    </span>
                    <span className="oxido-dive-meta">
                      {(v.chips ?? []).map((c) => (
                        <span key={c} className="oxido-dive-chip">{c}</span>
                      ))}
                    </span>
                  </span>
                  <span className="oxido-dive-cta">
                    <span className="oxido-dive-cta-word">Open</span>
                    <span className="oxido-dive-cta-ring" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>

          {deepDives.map((d, i) => (
            <VerticalModal
              key={d.key}
              open={openDive === i}
              onClose={() => setOpenDive(null)}
              eyebrow={d.eyebrow}
              title={d.title}
            >
              {d.body}
            </VerticalModal>
          ))}

          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderLeft: '2px solid #c4cfde', borderRadius: '0 8px 8px 0', padding: '22px 26px', marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '12px' }}>What Is Done, What Is Compute-Gated, What Is Genuinely Open</div>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#9aa4b0', marginBottom: '14px' }}>
              These get collapsed into one pile far too often, and the difference is the entire investment case. Three
              categories, kept separate.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#9aa4b0', marginBottom: '12px' }}>
              <strong style={{ color: '#7fd88f' }}>1 · Proven, in the paper, across 383 experiments and four architecture
              families.</strong> 94.6% retention under sequential task shift; 58.8% zero-shot compositional accuracy against
              25% chance; 80.3% recovery from a mid-training dead-layer lesion where the baseline collapses to 10.0%; 2.5 pp
              decay under 40% label noise against 7.8 pp; correction frequency decaying 4.2 → 0.05 per epoch; five-layer
              telemetry emitted natively. Critically, this was not a single-architecture result — the protocol ran on an
              FC-DAG, a CNN, an 11.24M-parameter Fat CNN, <strong style={{ color: '#c4cfde' }}>and ResNet-18</strong>, holding
              parity on the last one (91.7% vs 92.6%) while still producing the audit trail.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#9aa4b0', marginBottom: '12px' }}>
              <strong style={{ color: '#c4cfde' }}>2 · Built and compute-gated — this is the ask.</strong> The published
              network is <em>static</em>: node counts hand-set, capacity fixed, a 50-node graph because a fixed graph is what
              you need to isolate and measure a mechanism. None of those numbers are the architecture — they are scaffolding
              for the proof of concept. The system was designed from the start to be dynamic, and the dynamic version is the
              product. PCGrad, the conservation constraint, and the health gate all sit at optimiser level and are blind to the
              layer beneath them, which is why the protocol already carried across four architecture families unchanged; what
              a Transformer additionally needs is a pathology taxonomy for attention — dead heads, saturated heads,
              gradient-dead heads where softmax saturates so hard nothing flows backward. That is roughly sixty lines of
              plug-in diagnostics against machinery that already exists, not a redesign. What is genuinely missing is
              multi-node H100/A100 access.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#9aa4b0', margin: 0 }}>
              <strong style={{ color: '#c4cfde' }}>2b · Why dynamic capacity is the whole thesis.</strong> The 58.8%
              zero-shot ceiling is not the mechanism straining — it is a fixed graph doing the only thing it can when two
              tasks compete for one block. The telemetry names the culprit precisely: Node 3, the 256→512 block, died and was
              resurrected <strong>eleven times</strong> because it was too large to dedicate to a single task and was forced
              to serve both. Silent Node Injection is the resolution, and it is licensed by the same conservation constraint
              that governs ordinary corrections: initialise a new node so its weights sum to zero and it enters a live network
              contributing zero net perturbation, leaving every existing conserved quantity intact. Give the graph the ability
              to split that block and the conflict is not managed better — it stops existing. Projected retention rises toward
              ~99% and the zero-shot ceiling toward 85–92%. Those two figures are reasoned projections from the measured
              telemetry, not results, and they are the single thing most worth funding an experiment to settle.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#9aa4b0', margin: 0 }}>
              <strong style={{ color: '#ff6b76' }}>3 · Genuinely open — compute does not close these.</strong> No clinical,
              financial, or defense data has ever touched this, and that is a data-access and partnership problem, not a GPU
              problem. Test-time distribution shift is named in the paper as an unrun extension. Adversarial weight injection
              is a known structural blind spot where ORMAS is 1.0 pp <em>worse</em> than baseline. And whether attention heads
              behave like conv nodes under the conservation constraint is the one honest unknown inside category 2 — the paper
              says so itself, and I am not going to pretend otherwise.
            </p>
          </div>

        <div style={{ marginBottom: '56px' }} />

        {/* COMPETITION — prose, not a matrix */}
        <p style={sectionLabel}>Competition</p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '720px', marginBottom: '16px' }}>
          Two groups exist near this problem, and neither competes at this layer. <strong style={{ color: '#c4cfde' }}>Agent
          frameworks</strong> — CrewAI, LangGraph, AutoGen — are developer tools: a human defines every
          agent, writes every prompt, routes every task by hand. No memory across sessions, no
          learning layer, and all of them run on a model somebody else owns, which means none of
          them can be deployed anywhere the data is not allowed to leave.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '720px', marginBottom: '20px' }}>
          <strong style={{ color: '#c4cfde' }}>Enterprise platforms</strong> — Palantir, Databricks, Snowflake, Scale AI — sit
          above the training layer, on models somebody else built. They govern and move data.
          None of them touch what happens during training, which is where the constraint
          actually is. The differentiation is one layer down from where everyone else is
          competing: we own the training process itself — a per-node causal record of what the
          model learned, when, and what was repaired, produced as a physical byproduct of the
          backward pass rather than reconstructed afterward.
        </p>
        <div style={{ background: '#191b1e', border: '1px solid #2a2d32', padding: '18px 24px', marginBottom: '56px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#838d99', marginBottom: '10px' }}>What the stack actually closes</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Catastrophic forgetting', 'ORMAS solves it. 94.6% prior-task retention vs 47.3% standard ResNet-18.'],
              ['Black box opacity', 'GlassBox addresses it. Per-node, per-correction causal audit trail, emitted natively rather than reconstructed post hoc.'],
              ['Silent data corruption', 'ORMAS three-signal training + health-gated self-correction solve it.'],
            ].map(([label, value], i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#c4cfde', minWidth: '200px', flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: '14px', color: '#9aa4b0' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROADMAP */}
        <p style={sectionLabel}>Roadmap — Each Phase Removes One Dependency</p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#9aa4b0', maxWidth: '700px', marginBottom: '20px' }}>
          That is the organising principle, not feature delivery.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '20px' }}>
          {roadmap.map((r, i) => (
            <div key={i} style={{
              display: 'flex', gap: '24px', alignItems: 'flex-start',
              background: '#191b1e', border: '1px solid #2a2d32', padding: '20px 24px',
            }}>
              <div style={{
                fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', color: r.active ? '#c4cfde' : '#838d99',
                minWidth: '80px', paddingTop: '3px', flexShrink: 0,
              }}>
                {r.phase}
                <div style={{ marginTop: '4px', color: r.status === 'Complete' ? '#7fd88f' : r.status === 'Active' ? '#ff4a57' : '#838d99', fontSize: '10px' }}>
                  {r.status}
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '16px', fontWeight: 700,
                  color: r.active ? '#fff' : '#c4cfde', marginBottom: '5px',
                }}>{r.label}</div>
                <div style={{ fontSize: '14px', color: '#9aa4b0', lineHeight: '1.65', marginBottom: '8px' }}>{r.desc}</div>
                <div style={{ fontSize: '13px', color: '#838d99', lineHeight: '1.6' }}>
                  <strong style={{ color: '#c4cfde', fontWeight: 600 }}>Removes:</strong> {r.removes}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#838d99', marginBottom: '0' }}>
          Two milestones worth more than anything else right now: a control theorist's response
          on the stability result, and any ORMAS-T artifact at all — a small model with one
          attention head killed and repaired.
        </p>

      </div>
      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
      </div>
    </div>
  );
}
