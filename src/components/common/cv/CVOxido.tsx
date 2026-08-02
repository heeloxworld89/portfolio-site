import React from 'react';

const pillars = [
  {
    tag: 'Layer 01 · The Immune System',
    name: 'ORMAS',
    tagline: 'Self-correcting neural architecture',
    desc: 'Detects structural failures mid-training and repairs them autonomously. 383 controlled experiments across 4 architectures. +70.3pp recovery gap over baselines. First formal ISS convergence proof for any self-correcting architecture.',
    status: 'Published · AAAI 2027 Submitted',
  },
  {
    tag: 'Layer 02 · The Operating System',
    name: 'OXIMO',
    tagline: 'Agents that hire agents',
    desc: 'Autonomous company OS where agents decompose tasks, self-hire specialists, and maintain organisational memory across sessions. 40,933 lines. 2,011 tests. 0 failures. Rebuilt from a 106K-line monolith.',
    status: 'Production-Grade · Live',
  },
  {
    tag: 'Layer 03 · The Empirical Lab',
    name: 'Black Bloxie LTD',
    tagline: 'Every employee is an AI agent',
    desc: '1.5-year controlled ablation on a live UK company confirmed causation: −91% on OXIMO removal, +1,300% on re-injection. 500+ customers. Zero advertising spend. 100% LLM-referred acquisition.',
    status: 'Live · Multi-vertical',
  },
];

const roadmap = [
  {
    phase: 'Now',
    label: 'ORMAS + OXIMO + Black Bloxie',
    desc: 'Self-correcting architecture proven. Autonomous company OS in production. Enterprise licensing ready.',
    active: true,
  },
  {
    phase: 'Next',
    label: 'ORMAS-T — Transformer Scale',
    desc: 'Porting per-node structural health monitoring to attention heads. Every attention mechanism gets a structural health signal.',
    active: false,
  },
  {
    phase: 'Then',
    label: 'Project Cherry',
    desc: 'A self-correcting language model trained on ORMAS-T. Replaces external API dependency entirely. Zero external intelligence cost per deployment.',
    active: false,
  },
  {
    phase: 'End State',
    label: 'OXIDO at Enterprise Scale',
    desc: 'Full-stack autonomous company infrastructure licensed to regulated industries: medical, fintech, insurance, legal, hedge funds. Near-zero marginal cost. High switching costs. Compliance-grade audit trail built in.',
    active: false,
  },
];

const sectionLabel: React.CSSProperties = {
  fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
  textTransform: 'uppercase', color: '#c4cfde', marginBottom: '16px',
};

export default function CVOxido() {
  return (
    <div className="row mb--50" id="oxido">
      <div className="col-12">

        <span className="subtitle" style={{
          color: '#878e99', fontWeight: 'bold', textTransform: 'uppercase',
          letterSpacing: '2px', fontSize: '14px',
        }}>
          End-to-End Architecture · The Full Picture
        </span>
        <h2 className="title fs-2" style={{ fontWeight: '700', marginBottom: '6px' }}>OXIDO</h2>
        <p style={{
          fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
          textTransform: 'uppercase', color: '#878e99', marginBottom: '20px',
        }}>
          Autonomous Infrastructure for AI-Native Companies
        </p>

        <p style={{
          fontSize: '16px', lineHeight: '1.85', color: '#c4cfde',
          maxWidth: '720px', marginBottom: '14px',
        }}>
          OXIDO is not a product. It is a stack — three components, each solving a different layer of the same root problem: AI systems that operate without internal structure, without observability, and without the ability to repair themselves.
        </p>
        <p style={{
          fontSize: '15px', lineHeight: '1.75', color: '#878e99',
          maxWidth: '680px', marginBottom: '44px',
          borderLeft: '2px solid rgba(255,255,255,0.07)', paddingLeft: '18px',
        }}>
          ORMAS is the immune system. OXIMO is the OS. Black Bloxie is the empirical laboratory where both are proven on real revenue, in production, for 1.5 years. Together they form OXIDO — the infrastructure stack that lets a company run autonomously in high-stakes domains.
        </p>

        <p style={sectionLabel}>The Three Layers</p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2px', marginBottom: '44px',
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: '#191b1e', border: '1px solid #2a2d32', padding: '28px 24px',
            }}>
              <div style={{
                fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#4a5568', marginBottom: '14px',
              }}>{p.tag}</div>
              <div style={{
                fontSize: '30px', fontWeight: 800, color: '#fff',
                marginBottom: '4px', letterSpacing: '-0.5px',
              }}>{p.name}</div>
              <div style={{
                fontSize: '13px', color: '#878e99', marginBottom: '16px', fontStyle: 'italic',
              }}>{p.tagline}</div>
              <div style={{
                fontSize: '14px', lineHeight: '1.7', color: '#4a5568', marginBottom: '22px',
              }}>{p.desc}</div>
              <div style={{
                fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: '#c4cfde',
              }}>{p.status}</div>
            </div>
          ))}
        </div>

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
                <div style={{ fontSize: '14px', color: '#878e99', lineHeight: '1.65' }}>{r.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <p style={sectionLabel}>Business Model</p>
        <div style={{
          background: '#191b1e', border: '1px solid #2a2d32',
          borderRadius: '8px', padding: '28px 32px', marginBottom: '8px',
        }}>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#878e99', margin: 0 }}>
            Enterprise licensing to regulated industries — medical, insurance, fintech, legal, and quantitative finance. Not a SaaS dashboard. Not a consumer product.{' '}
            <strong style={{ color: '#c4cfde' }}>A company calls, we make them whole.</strong>{' '}
            OXIMO handles coordination. ORMAS provides the causal audit trail that regulators will require for any AI acting on behalf of an institution. Long sales cycles, high switching costs. Once agents have been running inside an organisation for a year, ripping them out and starting over is not an option. That is the moat.
          </p>
        </div>
        <div style={{
          background: '#191b1e', border: '1px solid #2a2d32',
          borderRadius: '8px', padding: '20px 32px', marginBottom: '10px',
        }}>
          <p style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#4a5568', marginBottom: '10px',
          }}>Why Enterprise. Why Not Consumer.</p>
          <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#4a5568', margin: 0 }}>
            Not all players can play like a big player. A hedge fund, a hospital system, a private equity firm — these are organisations where data is existential, where a model silently learning the wrong thing has consequences measured in capital, lives, or liability. That is precisely where structural transparency and autonomous repair stop being research properties and become compliance requirements. OXIDO builds for the players where it has to work.
          </p>
        </div>

      </div>
      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
      </div>
    </div>
  );
}
