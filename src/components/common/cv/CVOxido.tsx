import React from 'react';

const pillars = [
  {
    tag: 'Layer 01 · The Immune System',
    name: 'ORMAS',
    tagline: 'Self-correcting neural architecture',
    desc: 'Finds structural failures mid-training and repairs them without stopping and without a human. 383 controlled experiments across 4 architectures, a +70.3pp recovery gap over compute-matched baselines, and the first local-stability proof for any self-correcting architecture. Global convergence is still open.',
    status: 'Submitted to AAAI 2027 · Zenodo Preprint',
  },
  {
    tag: 'Layer 02 · The Operating System',
    name: 'OXIMO',
    tagline: 'Agents that hire agents',
    desc: 'Agents break a task apart, hire the specialists they need, and keep organisational memory between sessions. 40,933 lines, 11 modules, 2,011 tests, zero failures — rebuilt from a 106K-line monolith.',
    status: 'Production-Grade · Live',
  },
  {
    tag: 'Layer 03 · The Validation Layer',
    name: 'Black Bloxie LTD',
    tagline: 'Controlled test environment for the OXIDO architecture',
    desc: 'An 11-month lesion study on a live UK-registered company. Pull OXIMO out and commercial output drops 91% across every channel at once — which is exactly what rules out the market as the cause. Put V3 back and it recovers 1,300%. Substrate 1 (e-commerce) is closed; legal, software, and medical are waiting on their own ablation cycles.',
    status: 'Ablation Complete · Substrates 2–4 Active',
  },
];

const roadmap = [
  {
    phase: 'Now',
    label: 'ORMAS + OXIMO + Black Bloxie',
    desc: 'The architecture is proven across four network types and published. The agent OS is running in production. The first ablation cycle is closed, and the licensing case is ready to make.',
    active: true,
  },
  {
    phase: 'Next',
    label: 'ORMAS-T — Transformer Scale',
    desc: 'Port per-node health monitoring onto attention heads, so every attention mechanism carries its own structural signal. That is the prerequisite for fine-tuning safely on institutional data nobody is permitted to leak.',
    active: false,
  },
  {
    phase: 'Then',
    label: 'Project Cherry',
    desc: 'A language model trained from scratch on ORMAS-T. It removes the external API dependency, and with it the per-deployment cost of renting intelligence from somebody else.',
    active: false,
  },
  {
    phase: 'Endgame',
    label: 'OXIDO Full Stack',
    desc: 'OXIMO, ORMAS-T, and Cherry together: a multi-agent system with its own immune system and no external intelligence dependency left in it. No API calls. No vendor.',
    active: false,
  },
];

const competitors = [
  { name: 'Palantir', gap: 'Deep institutional access, but no self-correcting architecture underneath it. No answer to catastrophic forgetting, and no formal stability guarantee.' },
  { name: 'Snowflake', gap: 'Moves and stores the data. Does nothing at the training layer, and produces no compliance-grade record of how a model reached a decision.' },
  { name: 'Databricks', gap: 'Built on open-source Spark. Nothing operating at the per-node level, and no equivalent to GlassBox telemetry.' },
  { name: 'Scale AI', gap: 'The entire model depends on humans labelling the data. Institutional data that is noisy and unlabelled by nature is the one case it cannot serve.' },
  { name: 'Medical AI cos.', gap: 'Being turned down by the FDA on opacity regardless of how accurate the model is. Accuracy was never the blocker — architecture is, and none of them have an architectural answer.' },
  { name: 'Quant fund ML', gap: 'Every regime change costs them retained history. No formal guarantee that retraining converges anywhere stable.' },
];

const customers = [
  { sector: 'Hedge Funds / Quant Trading', problem: 'Signal data is adversarial by nature, and models drift quietly the moment the regime turns.', why: 'Every regime shift erases retained history, and nothing in the stack detects it happening.' },
  { sector: 'Insurance Companies', problem: 'Actuarial models decay as the underlying risk profile moves under them.', why: 'Continuous drift with no detection layer, on architectures that carry no stability proof.' },
  { sector: 'Medical Research', problem: 'Clinical data is personal, noisy, and legally radioactive.', why: 'The FDA now rejects black-box models on architecture alone, however accurate they are. GlassBox is built for exactly that bar.' },
  { sector: 'Fintech / Credit Scoring', problem: 'Fraud patterns move constantly, and the model has to learn the new ones without losing the old.', why: 'Catastrophic forgetting in a domain where forgetting costs money and compliance at the same time.' },
  { sector: 'Data-Rich Private Corps', problem: 'Large organizations that want operations running autonomously on their own data.', why: 'Nothing on the market can put agents on proprietary internal data and keep it safe.' },
];

const sectionLabel: React.CSSProperties = {
  fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
  textTransform: 'uppercase', color: '#c4cfde', marginBottom: '16px',
};

const td: React.CSSProperties = {
  padding: '13px 20px',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
  fontSize: '14px',
  color: '#9aa4b0',
  lineHeight: '1.6',
};

const tdFirst: React.CSSProperties = {
  ...td, color: '#c4cfde', fontWeight: 600, width: '22%', verticalAlign: 'top',
};

export default function CVOxido() {
  return (
    <div className="row mb--50" id="oxido">
      <div className="col-12">

        <span className="subtitle" style={{
          color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase',
          letterSpacing: '2px', fontSize: '14px',
        }}>
          End-to-End Architecture · The Full Picture
        </span>
        <h2 className="title fs-2" style={{ fontWeight: '700', marginBottom: '6px' }}>OXIDO</h2>
        <p style={{
          fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
          textTransform: 'uppercase', color: '#9aa4b0', marginBottom: '20px',
        }}>
          Autonomous Infrastructure for AI-Native Companies
        </p>

        <p style={{
          fontSize: '17px', lineHeight: '1.85', color: '#c4cfde',
          maxWidth: '720px', marginBottom: '14px',
        }}>
          OXIDO is not a product. It is three systems solving three layers of one problem: AI that runs without internal structure, without observability, and without any way to repair itself.
        </p>
        <p style={{
          fontSize: '16px', lineHeight: '1.75', color: '#9aa4b0',
          maxWidth: '680px', marginBottom: '44px',
          borderLeft: '2px solid rgba(255,255,255,0.07)', paddingLeft: '18px',
        }}>
          ORMAS is the immune system. OXIMO is the operating system. Black Bloxie is where both get tested against real customers, real supply chains, and real regulators. Together they are OXIDO: the infrastructure that lets a company run itself in domains where being wrong is expensive.
        </p>

        {/* THE THREE LAYERS */}
        <p style={sectionLabel}>The Three Layers</p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2px', marginBottom: '56px',
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: '#191b1e', border: '1px solid #2a2d32', padding: '28px 24px',
            }}>
              <div style={{
                fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#6b7683', marginBottom: '14px',
              }}>{p.tag}</div>
              <div style={{
                fontSize: '30px', fontWeight: 800, color: '#fff',
                marginBottom: '4px', letterSpacing: '-0.5px',
              }}>{p.name}</div>
              <div style={{
                fontSize: '13px', color: '#9aa4b0', marginBottom: '16px', fontStyle: 'italic',
              }}>{p.tagline}</div>
              <div style={{
                fontSize: '15px', lineHeight: '1.7', color: '#6b7683', marginBottom: '22px',
              }}>{p.desc}</div>
              <div style={{
                fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: '#c4cfde',
              }}>{p.status}</div>
            </div>
          ))}
        </div>

        {/* BUSINESS MODEL */}
        <p style={sectionLabel}>Business Model — Enterprise Licensing, Not SaaS</p>
        <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#9aa4b0', maxWidth: '720px', marginBottom: '20px' }}>
          There are no consumer customers here. No dashboard, no free tier, no Product Hunt launch. This is worth the most exactly where the data is proprietary, messy, and legally sensitive — where a model quietly learning the wrong thing is not an inconvenience but a catastrophe.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', marginBottom: '20px' }}>
          {[
            { title: 'The Data Cannot Leave', body: 'Medical records, financial positions, actuarial tables — none of it can be uploaded to somebody else’s SaaS platform, ever. OXIDO deploys inside the client’s own infrastructure, on their servers, under their compliance framework.' },
            { title: 'GlassBox Is a Compliance Asset', body: 'Regulated industries have to explain why the model decided what it decided. The FDA wants explainability built into the architecture, not bolted on afterwards. GlassBox emits a causal audit trail per node, per correction, per epoch — which is the shape of the answer regulators are asking for.' },
            { title: 'The Switching Cost Is the Moat', body: 'After twelve months inside an organization, OXIMO’s agents have built episodic memory and matured into experts on that specific business. Removing it is not a migration, it is an amputation — and the Black Bloxie ablation measured exactly what that costs: 91% of output, gone.' },
          ].map((c, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', padding: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#c4cfde', marginBottom: '10px', letterSpacing: '0.3px' }}>{c.title}</div>
              <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#9aa4b0' }}>{c.body}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#191b1e', border: '1px solid #2a2d32', padding: '20px 24px', marginBottom: '56px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b7683', marginBottom: '10px' }}>Same model as</p>
          <p style={{ fontSize: '15px', color: '#9aa4b0', margin: 0, lineHeight: '1.7' }}>
            <strong style={{ color: '#c4cfde' }}>Red Hat</strong> — open-source Linux, enterprise support &nbsp;·&nbsp;
            <strong style={{ color: '#c4cfde' }}>MongoDB</strong> — open-source DB, enterprise licensing &nbsp;·&nbsp;
            <strong style={{ color: '#c4cfde' }}>Databricks</strong> — open-source Spark, enterprise platform &nbsp;·&nbsp;
            <strong style={{ color: '#c4cfde' }}>Hugging Face</strong> — open-source models, enterprise API
          </p>
          <p style={{ fontSize: '14px', color: '#6b7683', marginTop: '10px', marginBottom: 0, fontStyle: 'italic' }}>
            One enterprise licence with a hedge fund or a hospital system is worth more than 10,000 SaaS subscriptions, and it churns less, margins better, and sits behind a harder technical moat.
          </p>
        </div>

        {/* ENTERPRISE CUSTOMER SECTORS */}
        <p style={sectionLabel}>Who Pays — Enterprise Sectors</p>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#9aa4b0', maxWidth: '680px', marginBottom: '20px' }}>
          These are not customers who find you on Twitter. They come through institutional relationships, conference introductions, and research credibility.
        </p>
        <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginBottom: '56px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '22%' }}>Sector</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '38%' }}>The Problem OXIDO Solves</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Why They Cannot Use Alternatives</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                  <td style={{ ...tdFirst, borderBottom: i < customers.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{c.sector}</td>
                  <td style={{ ...td, borderBottom: i < customers.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{c.problem}</td>
                  <td style={{ ...td, borderBottom: i < customers.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{c.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* COMPETITION */}
        <p style={sectionLabel}>Competition — The Structural Gap</p>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#9aa4b0', maxWidth: '680px', marginBottom: '8px' }}>
          The real competitors are not CrewAI, LangGraph, or AutoGen. Those are developer frameworks — Lego bricks for people assembling their own agents by hand. No institutional customers, and no learning layer anywhere in them.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#9aa4b0', maxWidth: '680px', marginBottom: '20px' }}>
          The real competitors sit between enterprise institutions and their proprietary data:
        </p>
        <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginBottom: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '20%' }}>Competitor</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>What They Don't Have</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr key={i}>
                  <td style={{ ...tdFirst, borderBottom: i < competitors.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{c.name}</td>
                  <td style={{ ...td, borderBottom: i < competitors.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{c.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ background: '#191b1e', border: '1px solid #2a2d32', padding: '18px 24px', marginBottom: '56px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b7683', marginBottom: '10px' }}>The structural gap none of them close</p>
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
          <p style={{ fontSize: '13px', color: '#6b7683', marginTop: '14px', marginBottom: 0, fontStyle: 'italic' }}>
            The $757B AI market (growing to $4T by 2035) is moving toward operational AI running on proprietary data. Everyone in that market will need what ORMAS does. Right now none of them have it.
          </p>
        </div>

        {/* ROADMAP */}
        <p style={sectionLabel}>Roadmap</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '44px' }}>
          {roadmap.map((r, i) => (
            <div key={i} style={{
              display: 'flex', gap: '24px', alignItems: 'flex-start',
              background: '#191b1e', border: '1px solid #2a2d32', padding: '20px 24px',
            }}>
              <div style={{
                fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', color: r.active ? '#c4cfde' : '#4a5568',
                minWidth: '70px', paddingTop: '3px', flexShrink: 0,
              }}>{r.phase}</div>
              <div>
                <div style={{
                  fontSize: '16px', fontWeight: 700,
                  color: r.active ? '#fff' : '#c4cfde', marginBottom: '5px',
                }}>{r.label}</div>
                <div style={{ fontSize: '14px', color: '#9aa4b0', lineHeight: '1.65' }}>{r.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
      </div>
    </div>
  );
}
