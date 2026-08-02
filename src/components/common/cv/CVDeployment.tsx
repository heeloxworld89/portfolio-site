


// Ablation: percentage CHANGE (negative = decline), shown as magnitude for readability
const ablationImpact = [
  { metric: 'Revenue',       pct: -91 },
  { metric: 'Orders',        pct: -72 },
  { metric: 'Conversion',    pct: -77 },
  { metric: 'New Customers', pct: -100 },
];

const ablationRecovery = [
  { metric: 'Sessions',   pct: 1422 },
  { metric: 'Revenue',    pct: 1300 },
  { metric: 'Orders',     pct: 340  },
  { metric: 'Conversion', pct: 214  },
];


const td: React.CSSProperties = { padding: '13px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '14px', color: '#878e99' };
const tdFirst: React.CSSProperties = { ...td, color: '#c4cfde', fontWeight: 600, width: '45%' };
const tdValue: React.CSSProperties = { ...td, fontFamily: "'Fira Code', monospace", color: '#c4cfde', fontWeight: 700, textAlign: 'right' };

export default function CVDeployment() {
  return (
    <div className="row mb--50" id="deployment">
      <div className="col-12">
        <span className="subtitle" style={{ color: "#878e99", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Case Study Report · AI Industry Transformation</span>
        <h2 className="title fs-2" style={{ fontWeight: "700", marginBottom: "6px" }}>Black Bloxie LTD</h2>
        <p style={{ fontSize: '15px', color: '#878e99', marginBottom: '10px' }}>UK Companies House Registered · Solo Founder · Operating 2024 – Present</p>
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#c4cfde', fontStyle: 'italic', borderLeft: '2px solid rgba(255,255,255,0.08)', paddingLeft: '18px', marginBottom: '35px', maxWidth: '650px' }}>
          A private company building OXIMO-powered operations across industries. One by one, sector by sector.
        </p>

        {/* ACTIVE VERTICALS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '40px' }}>
          {[
            { status: 'Vertical 1 · Study Complete · Paper in Progress', sector: 'E-Commerce', note: 'Ablation complete. −91% on removal, +1,300% on recovery, 500+ customers, $0 ad spend.' },
            { status: 'Ongoing', sector: 'Legal (Law Firms)', note: 'AI-transformation of legal workflows.' },
            { status: 'Ongoing', sector: 'Software Companies', note: 'AI-transformation of development pipelines.' },
            { status: 'Ongoing', sector: 'Medical Research', note: 'AI-assisted research operations.' },
          ].map((v, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: i === 0 ? '#4a5568' : '#c4cfde', marginBottom: '6px' }}>{v.status}</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '5px' }}>{v.sector}</div>
              <div style={{ fontSize: '12px', color: '#4a5568', lineHeight: 1.5 }}>{v.note}</div>
            </div>
          ))}
        </div>

        {/* VERTICAL 1 RESULTS */}
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '14px' }}>Vertical 1 — E-Commerce Study Results</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '40px' }}>
          {[
            { val: '−91%', lbl: 'On OXIMO Removal', sub: 'Causation confirmed' },
            { val: '+1,300%', lbl: 'On Re-injection', sub: 'Recovered + surpassed' },
            { val: '500+', lbl: 'Customers Acquired', sub: '100% AI-referred, $0 ads' },
            { val: '1.5–2yr', lbl: 'Study Duration', sub: 'Controlled ablation' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '10px', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '5px' }}>{s.val}</div>
              <div style={{ fontSize: '12px', color: '#c4cfde', fontWeight: 700, marginBottom: '3px' }}>{s.lbl}</div>
              <div style={{ fontSize: '11px', color: '#4a5568' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* 3-PHASE STUDY */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '40px' }}>
          {[
            { phase: 'Study Phase 1', title: 'OXIMO Deployed', body: 'V1 pipeline launched into e-commerce. ~600 sessions, 24 orders, 2.17% conversion. $0 ad spend. 100% AI-referred traffic.' },
            { phase: 'Study Phase 2', title: 'Full Removal', body: 'All OXIMO-generated assets stripped. Revenue dropped 91%. This confirmed the mechanism — not the market.' },
            { phase: 'Study Phase 3', title: 'V3 Re-injection', body: 'Revenue recovered 1,300%. Every new customer found the store through ChatGPT, Bing, or Gemini. Emergent, not designed.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '6px' }}>{p.phase}</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#c4cfde', marginBottom: '8px' }}>{p.title}</div>
              <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#878e99' }}>{p.body}</div>
            </div>
          ))}
        </div>

        <div className="content mt--30">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '8px' }}>Why Use Real Companies as the Test Environment?</p>
              <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#878e99', margin: 0 }}>Controlled lab experiments tell you if a system works under ideal conditions. Real companies tell you if it survives contact with humans, money, regulations, and supply chains simultaneously. E-commerce was the first vertical — the fastest feedback loop, the clearest signal, the hardest failure mode. Revenue is binary: either it works, or it doesn't.</p>
            </div>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '8px' }}>Current Deployment Mode</p>
              <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#878e99', margin: 0 }}>No legal framework yet assigns accountability to autonomous AI agents acting on behalf of a registered company. Static operational boundaries are set by me; the full autonomous hiring and self-modification capabilities are validated by 2,011 tests and ready when the legal infrastructure is. That is a regulatory boundary, not a technical one.</p>
            </div>
          </div>

          <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px", color: "#c4cfde" }}>The OXIMO Pipeline — Architecture &amp; Extensions</h4>
          <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#878e99', marginBottom: '8px' }}>Six cascaded AI stages process each product. Cascading specialized calls replaces single frontier model calls — a 99% cost reduction at equivalent output quality. The pipeline runs with extensions for market scanning, demand forecasting, and dynamic pricing — all layered on the core OXIMO orchestration system.</p>
          <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px', fontStyle: 'italic' }}>Deployed in static mode by design. Full autonomous operation is validated and ready; static boundaries are maintained to comply with current AI accountability and liability frameworks. The constraint is regulatory, not technical.</p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '35%' }}>Stage</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>What It Does</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Stage 0 — Ingestion</td><td style={td}>Validates raw CSV, categorises across 10,715 taxonomies, filters low-demand items.</td></tr>
                <tr><td style={tdFirst}>Stage 1 — Trait Extraction</td><td style={td}>6 parallel AI analyses per product — generating a strategic intelligence package.</td></tr>
                <tr><td style={tdFirst}>Stage 2 — Product Intelligence</td><td style={td}>AI variant detection, Cartesian expansion, psychological pricing.</td></tr>
                <tr><td style={tdFirst}>Stage 3 — Content Generation</td><td style={td}>12 parallel AI operations per product executing the Stage 1 strategic blueprint.</td></tr>
                <tr><td style={tdFirst}>Stage 4 — SEO Assembly</td><td style={td}>Semantic HTML, Schema.org data, CSS validation.</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>Stage 5 — Platform Export</td><td style={{ ...td, borderBottom: 'none' }}>Tax configuration, variant ordering, one-click Shopify import.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Cost Comparison — Visual Cards */}
          <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '14px' }}>Cost Comparison — Same Output Quality</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '30px' }}>
            {[
              { approach: 'GPT-4 Turbo', cost: '~$180', note: 'Single-shot', muted: true },
              { approach: 'GPT-4o', cost: '~$45', note: 'Single-shot', muted: true },
              { approach: 'Claude 3.5', cost: '~$54', note: 'Single-shot', muted: true },
              { approach: 'OXIMO Cascade', cost: '~$3.50', note: 'DeepSeek · Specialized', muted: false },
            ].map((c, i) => (
              <div key={i} style={{ background: c.muted ? 'rgba(25,27,30,0.6)' : '#191b1e', border: `1px solid ${c.muted ? '#1e2124' : '#2a2d32'}`, borderRadius: '8px', padding: '16px', textAlign: 'center', opacity: c.muted ? 0.6 : 1 }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: c.muted ? '#4a5568' : '#c4cfde', marginBottom: '4px' }}>{c.cost}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: c.muted ? '#4a5568' : '#c4cfde', marginBottom: '3px' }}>{c.approach}</div>
                <div style={{ fontSize: '11px', color: '#4a5568' }}>{c.note}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>Product Intelligence Extension:</strong> Observes the internet (Reddit, forums, social signals) for emerging problems and demand signals, classifies and structures them into product records. Inventory constrained to a four-figure catalogue as a deliberate research boundary — not a system limitation.<br /><br />
            <strong style={{ color: "#c4cfde" }}>Market Scanner Extension:</strong> Maps global news events to demand trends and feeds recommendations back to the intelligence layer in real time.
          </p>

          <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Vertical 1 Case Study — 1.5–2 Year Ablation</h4>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#878e99", marginBottom: "25px" }}>
            A controlled injection-removal-recovery study across the full OXIMO pipeline. Three phases, one question: does OXIMO cause the results, or does the market?
          </p>

          {/* Phase 1: V1 Deployment */}
          <h5 style={{ fontSize: "15px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Phase 1 — V1 Deployment (July 15 – October 15, 2025)</h5>
          <p style={{ fontSize: "14px", color: "#878e99", marginBottom: "20px" }}>Initial OXIMO pipeline deployed. All traffic and revenue measured from a standing start with zero advertising spend.</p>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginBottom: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Total sessions</td><td style={tdValue}>~600</td></tr>
                <tr><td style={tdFirst}>AI-originated sessions</td><td style={tdValue}>~90 (15%)</td></tr>
                <tr><td style={tdFirst}>Customer base acquired</td><td style={tdValue}>~60</td></tr>
                <tr><td style={tdFirst}>Total orders</td><td style={tdValue}>24</td></tr>
                <tr><td style={tdFirst}>Conversion rate</td><td style={tdValue}>2.17%</td></tr>
                <tr><td style={tdFirst}>Advertising spend</td><td style={tdValue}>$0.00</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>Revenue source</td><td style={{ ...tdValue, borderBottom: 'none' }}>100% LLM-referred</td></tr>
              </tbody>
            </table>
          </div>

          {/* Phase 2: Ablation — show as bar chart with absolute values + clear framing */}
          <h5 style={{ fontSize: "15px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Phase 2 — Ablation: Full Removal (Decline)</h5>
          <p style={{ fontSize: "14px", color: "#878e99", marginBottom: "20px" }}>All OXIMO-generated content removed. Store reduced to a standard e-commerce setup. Values show percentage decline from OXIMO-active baseline.</p>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginBottom: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Change on OXIMO Removal</th>
                </tr>
              </thead>
              <tbody>
                {ablationImpact.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...tdFirst, borderBottom: i < ablationImpact.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{r.metric}</td>
                    <td style={{ ...tdValue, borderBottom: i < ablationImpact.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', color: '#878e99' }}>{r.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Phase 3: Recovery — bar chart with proper domain */}
          <h5 style={{ fontSize: "15px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Phase 3 — V2 + V3 Re-Injection (Recovery)</h5>
          <p style={{ fontSize: "14px", color: "#878e99", marginBottom: "20px" }}>OXIMO V3 capabilities restored. Values show percentage increase from ablated (no-OXIMO) baseline, measured after re-injection.</p>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Change on Re-Injection</th>
                </tr>
              </thead>
              <tbody>
                {ablationRecovery.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...tdFirst, borderBottom: i < ablationRecovery.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{r.metric}</td>
                    <td style={{ ...tdValue, borderBottom: i < ablationRecovery.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>+{r.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Traffic Source Analysis — The AI-to-AI Economy</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            The majority of revenue comes from <strong style={{ color: "#c4cfde" }}>LLM-referred traffic</strong> (ChatGPT.com, Bing/ChatGPT search grounding, Gemini). Traditional organic SEO contributes minimally. Paid advertising contributes zero. This is evidence of an emerging AI-to-AI economy where OXIMO generates optimised content, external LLMs discover and recommend it, and users purchase based on AI recommendations.
          </p>

          {/* Traffic Source Analysis Table */}
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '30%' }}>Referring Channel</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '20%' }}>Attribution Share</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>What It Actually Is</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>LLM Headless</td><td style={tdValue}>~60%</td><td style={td}>LLM models without referrer headers</td></tr>
                <tr><td style={tdFirst}>ChatGPT (Direct)</td><td style={tdValue}>~30%</td><td style={td}>Direct ChatGPT referrals</td></tr>
                <tr><td style={tdFirst}>Bing / ChatGPT Grounding</td><td style={tdValue}>~5%</td><td style={td}>ChatGPT&apos;s search grounding layer</td></tr>
                <tr><td style={tdFirst}>Google / Gemini</td><td style={tdValue}>~3%</td><td style={td}>Includes Gemini-referred traffic</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>ChatGPT (Variants)</td><td style={{ ...tdValue, borderBottom: 'none' }}>~2%</td><td style={{ ...td, borderBottom: 'none' }}>Additional ChatGPT surface referrals</td></tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Key Learning — Why This Proves ORMAS Is Necessary</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            The Black Bloxie deployment proved one massive point: <strong>real-world data is catastrophically messy, and no current architecture can handle it.</strong> Existing noise-robust methods (ProMix, DivideMix, CoDE, EV) all broke in production. This validates why ORMAS was built — to provide an immune system that can operate in a chaotic, adversarial, non-stationary data environment.
          </p>

          {/* Current State */}
          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Current State (July 2026)</h4>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Total customer base</td><td style={tdValue}>500+ loyal customers</td></tr>
                <tr><td style={tdFirst}>Customer retention</td><td style={tdValue}>Near 100%</td></tr>
                <tr><td style={tdFirst}>Customer reviews</td><td style={tdValue}>Consistently positive</td></tr>
                <tr><td style={tdFirst}>Total human hours</td><td style={tdValue}>Minimal — API costs only</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>Orders rejected</td><td style={{ ...tdValue, borderBottom: 'none' }}>Multiple — research constraint</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px', marginTop: '40px', marginBottom: '10px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '10px' }}>Ongoing Verticals — Reports Pending</p>
            <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#878e99', margin: 0 }}>
              Law, software, and medical research verticals are currently in active deployment. Full case study reports for each vertical will be published upon completion of their respective ablation cycles. The methodology is identical to Vertical 1: inject → measure → remove → measure → re-inject.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.06)" }} /></div>
    </div>
  );
}
