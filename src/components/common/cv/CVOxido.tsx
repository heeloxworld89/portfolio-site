import React from 'react';

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
    label: 'ORMAS-T — Transformer Scale',
    desc: 'Porting the three signals and local readouts to attention heads, with per-head structural monitoring.',
    removes: 'The architecture restriction — unlocks continuous on-premise fine-tuning on institutional data, which is what the medical segment requires.',
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
  { range: '#1–10', who: 'US academic medical centres running clinical AI under an FDA pathway', problem: 'The FDA rejects models on architecture rather than accuracy. The compliance requirement is already documented, so the budget line exists before we arrive.', pop: '~150–200 US institutions with both an internal AI research group and a regulated deployment route' },
  { range: '#11–30', who: 'Quantitative funds and asset managers with in-house ML teams', problem: 'Catastrophic forgetting across market regime changes — models degrade on exactly the patterns they were trained on, at the moment those patterns matter. Data cannot leave for competitive reasons.', pop: 'Several hundred globally at meaningful size' },
  { range: '#31–50', who: 'Insurers and credit-risk teams', problem: 'Continuous distribution shift plus a supervisor requiring model-risk documentation. Silent drift surfaces as reserve miscalculation — a compliance failure with direct financial liability.', pop: '—' },
];

const sectionLabel: React.CSSProperties = {
  fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
  textTransform: 'uppercase', color: '#c4cfde', marginBottom: '16px',
};

export default function CVOxido() {
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
        .oxido-link-sub { font-size: 10px; color: #838d99; text-transform: uppercase; letter-spacing: 0.6px; margin-top: 2px; }
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
              <div className="oxido-link-sub">Zenodo DOI ↗</div>
            </span>
          </a>
          <a className="oxido-link" href="/assets/pdf/oxido_investor_whitepaper.pdf" target="_blank" rel="noreferrer">
            <span>
              <div className="oxido-link-label">12-Month Record</div>
              <div className="oxido-link-sub">Commercial Evidence Report ↗</div>
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
              <div className="oxido-link-sub">0009-0003-1178-5296 ↗</div>
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
            { title: 'GlassBox Is a Compliance Asset', body: 'Regulated industries have to explain why the model decided what it decided. The FDA wants explainability built into the architecture, not bolted on afterwards. GlassBox emits a causal audit trail per node, per correction, per epoch — which is the shape of the answer regulators are asking for.' },
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
              ['Black box opacity', 'GlassBox solves it. Per-node, per-correction causal audit trail. FDA-compliance-ready.'],
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
