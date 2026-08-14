import React from 'react';

const pillars = [
  {
    tag: 'Layer 01 · The Immune System',
    name: 'ORMAS',
    tagline: 'Self-correcting neural architecture',
    desc: 'Detects structural failures mid-training and repairs them autonomously. 383 controlled experiments across 4 architectures. +70.3pp recovery gap over baselines. First local-stability convergence proof for any self-correcting architecture (global convergence remains open).',
    status: 'Submitted to AAAI 2027 · Zenodo Preprint',
  },
  {
    tag: 'Layer 02 · The Operating System',
    name: 'OXIMO',
    tagline: 'Agents that hire agents',
    desc: 'Autonomous company OS where agents decompose tasks, self-hire specialists, and maintain organisational memory across sessions. 40,933 lines. 2,011 tests. 0 failures. 11 modules. Rebuilt from a 106K-line monolith.',
    status: 'Production-Grade · Live',
  },
  {
    tag: 'Layer 03 · The Validation Layer',
    name: 'Black Bloxie LTD',
    tagline: 'Controlled test environment for the OXIDO architecture',
    desc: '11-month injection-removal-reinjection ablation on a live UK-registered company. OXIMO removed: all commercial output collapsed 91% across all channels simultaneously — ruling out market conditions as a variable. V3 re-injected: commercial output recovered 1,300% from ablated baseline. The causal chain is documented and reproducible. Substrate 1 (e-commerce) complete. Substrates 2–4 (legal, software, medical) pending ablation cycles.',
    status: 'Ablation Complete · Substrates 2–4 Active',
  },
];

const roadmap = [
  {
    phase: 'Now',
    label: 'ORMAS + OXIMO + Black Bloxie',
    desc: 'Self-correcting architecture proven across 4 architectures and published. Autonomous company OS in production across 4 industries. Enterprise licensing ready. Multi-vertical ablation ongoing.',
    active: true,
  },
  {
    phase: 'Next',
    label: 'ORMAS-T — Transformer Scale',
    desc: 'Porting per-node structural health monitoring to attention heads. Every attention mechanism gets a structural health signal. Enables safe fine-tuning on proprietary institutional data.',
    active: false,
  },
  {
    phase: 'Then',
    label: 'Project Cherry',
    desc: 'A self-correcting language model trained on ORMAS-T. Replaces external API dependency entirely. Zero external intelligence cost per deployment.',
    active: false,
  },
  {
    phase: 'Endgame',
    label: 'OXIDO Full Stack',
    desc: 'OXIMO + ORMAS-T + Cherry = zero external intelligence dependency. The first fully autonomous multi-agent system with an internal immune system. No API calls. No vendor dependency.',
    active: false,
  },
];

const competitors = [
  { name: 'Palantir', gap: 'No self-correcting neural architecture. No solution to catastrophic forgetting. No formal stability proof.' },
  { name: 'Snowflake', gap: 'Data infrastructure only. No training-layer architecture. No compliance-grade auditability.' },
  { name: 'Databricks', gap: 'Open-source Spark foundation. No per-node self-correction. No GlassBox-equivalent.' },
  { name: 'Scale AI', gap: 'Relies on human-labeled data. Cannot handle inherently noisy, unlabeled institutional data.' },
  { name: 'Medical AI cos.', gap: 'Being rejected by FDA right now for black box opacity regardless of accuracy. No architectural fix.' },
  { name: 'Quant fund ML', gap: 'Suffer catastrophic forgetting on every market regime change. No formal stability guarantee.' },
];

const customers = [
  { sector: 'Hedge Funds / Quant Trading', problem: 'Financial signal data is adversarial. Models silently drift on regime changes.', why: 'Catastrophic forgetting destroys historical pattern retention on every regime shift.' },
  { sector: 'Insurance Companies', problem: 'Actuarial models suffer distribution shift as risk profiles change over time.', why: 'Continuous drift with no detection. Existing architectures have no stability proof.' },
  { sector: 'Medical Research', problem: 'Clinical data is personalized, noisy, legally sensitive.', why: 'FDA now architecturally rejects black box models regardless of accuracy. GlassBox is the answer.' },
  { sector: 'Fintech / Credit Scoring', problem: 'Fraud patterns evolve continuously. Must retain historical patterns while learning new ones.', why: 'Catastrophic forgetting in a domain where forgetting costs money and compliance.' },
  { sector: 'Data-Rich Private Corps', problem: 'Large organizations that want autonomous operational infrastructure.', why: 'No existing system can run agents that learn from proprietary internal data safely.' },
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
          OXIDO is not a product. It is a stack — three components, each solving a different layer of the same root problem: AI systems that operate without internal structure, without observability, and without the ability to repair themselves.
        </p>
        <p style={{
          fontSize: '16px', lineHeight: '1.75', color: '#9aa4b0',
          maxWidth: '680px', marginBottom: '44px',
          borderLeft: '2px solid rgba(255,255,255,0.07)', paddingLeft: '18px',
        }}>
          ORMAS is the immune system. OXIMO is the operating system. Black Bloxie is the controlled test environment where both are validated under real-world conditions — real customers, real supply chains, real regulations. Together they form OXIDO — the infrastructure stack that lets a company operate autonomously in high-stakes domains.
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
          OXIDO does not have consumer customers. There is no dashboard, no freemium tier, no Product Hunt launch. The value is highest where data is proprietary, messy, high-stakes, and legally sensitive — and where the cost of a model silently learning the wrong thing is catastrophic.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', marginBottom: '20px' }}>
          {[
            { title: 'The Data Cannot Leave', body: 'Medical records, financial positions, insurance actuarial data — none of this can be uploaded to a third-party SaaS platform. OXIDO is deployed inside client infrastructure, on their servers, under their compliance framework.' },
            { title: 'GlassBox Is a Compliance Asset', body: 'Regulated industries must explain why their AI made specific decisions. The FDA requires architectural explainability, not bolted-on post-hoc explanations. GlassBox produces a causal audit trail per node, per correction, per epoch.' },
            { title: 'The Switching Cost Is the Moat', body: 'When OXIMO\'s agents operate inside an organization for 12 months — building episodic memory, maturing to Expert — ripping it out is not an option. The Black Bloxie ablation proved this: −91% on removal. Enterprise clients will experience the same effect.' },
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
            One enterprise license with a hedge fund or hospital system is worth more than 10,000 SaaS subscriptions — with lower churn, higher margins, and a stronger technical moat.
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
          The real competitors are not CrewAI, LangGraph, or AutoGen. Those are developer frameworks — Lego bricks for people who want to build their own agents by hand. They have no institutional customers. They have no learning layer.
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
            The $757B AI market (growing to $4T by 2035) is moving toward operational AI on proprietary data. Every company in that market needs what ORMAS provides. None of them have it.
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
