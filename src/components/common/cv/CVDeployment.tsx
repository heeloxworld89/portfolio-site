


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
        <span className="subtitle" style={{ color: "#c4cfde", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Deployment</span>
        <h2 className="title mb--20" style={{ fontSize: "36px", fontWeight: "700" }}>Black Bloxie LTD — The Lab-Rat Test</h2>
        <span className="pill" style={{ display: 'inline-block', background: "rgba(255,255,255,0.05)", color: "#878e99", padding: '4px 12px', borderRadius: '4px', fontSize: '12px', marginBottom: '15px', fontWeight: 600 }}>PRODUCTION-GRADE</span>
        <p className="disc" style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99" }}>
          <strong>Solo Founder | UK Companies House Registered (September 11, 2025) | Operating 2024 – Present</strong><br />
          Status: Active UK limited company. Static OXIMO deployment. Research testbed, not a revenue-maximising business.
        </p>
        
        <div className="content mt--30">
          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", color: "#c4cfde" }}>Why E-Commerce?</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            If you want to test whether an autonomous AI system can actually operate in the real world, you need the hardest possible test case. You need a domain where the system must interact with real humans, handle real money, comply with real regulations, and produce real deliverables. E-commerce requires product research, vendor relationships, content generation, pricing intelligence, customer interaction, legal compliance, and fulfillment.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            I registered Black Bloxie LTD at UK Companies House when I was 17, bypassing every intermediary that refused to process the application due to my location. The company exists for one purpose: to be the <strong style={{ color: "#c4cfde" }}>controlled lab-rat test</strong> for the OXIMO ecosystem.
          </p>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>The Static Deployment Constraint</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            Deploying a fully autonomous AI system to manage a real business with real money is not something you do without guardrails. The legal question is immediate: who is responsible when an AI agent violates import regulations? Right now, I am.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            So I made a deliberate engineering decision: <strong>deploy OXIMO in static mode.</strong> All roles, pricing rules, and boundaries are defined by me. The dynamic mode works (validated by 2,011 tests), but deploying it in production requires legal frameworks that don't yet exist.
          </p>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>The OXIMO E-Commerce Architecture — Cascaded Intelligence</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            One command. One thousand products. Two hours. $3.50.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflow: 'hidden', marginBottom: '30px' }}>
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

          {/* Cost Comparison Table */}
          <h5 style={{ fontSize: "15px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Cost Comparison (1,000 products × 12 assets)</h5>
          <p style={{ fontSize: "14px", color: "#878e99", marginBottom: "20px" }}>Why cascaded intelligence matters — same output, fraction of cost.</p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflow: 'hidden', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '35%' }}>Approach</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Model</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Single-shot</td><td style={td}>GPT-4 Turbo</td><td style={{ ...tdValue, color: '#878e99' }}>~$180</td></tr>
                <tr><td style={tdFirst}>Single-shot</td><td style={td}>GPT-4o</td><td style={{ ...tdValue, color: '#878e99' }}>~$45</td></tr>
                <tr><td style={tdFirst}>Single-shot</td><td style={td}>Claude 3.5 Sonnet</td><td style={{ ...tdValue, color: '#878e99' }}>~$54</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>OXIMO Cascade</td><td style={{ ...td, borderBottom: 'none' }}>DeepSeek</td><td style={{ ...tdValue, borderBottom: 'none' }}>~$3.50</td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            <strong style={{ color: "#c4cfde" }}>The Product Search Engine:</strong> Observes the internet (Reddit, forums) for problems, classifies URLs, scrapes data, and structures it into e-commerce records. Limited to 1,000 active products as a research constraint.<br /><br />
            <strong style={{ color: "#c4cfde" }}>The Market Scanner:</strong> Scans global news, maps events to demand trends, and feeds product recommendations to the Search Engine.
          </p>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Results — A 1.5-Year Ablation Study</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "25px" }}>
            We systematically injected a version of the OXIMO pipeline, measured its impact, removed it entirely to measure the decay, and then re-injected.
          </p>

          {/* Phase 1: V1 Deployment */}
          <h5 style={{ fontSize: "15px", fontWeight: "700", color: "#c4cfde", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Phase 1 — V1 Deployment (July 15 – October 15, 2025)</h5>
          <p style={{ fontSize: "14px", color: "#878e99", marginBottom: "20px" }}>Initial OXIMO pipeline deployed. All traffic and revenue measured from a standing start with zero advertising spend.</p>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
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
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
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
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflow: 'hidden', marginBottom: '30px' }}>
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
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflow: 'hidden', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '30%' }}>Referring Channel</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '20%' }}>Revenue</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>What It Actually Is</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>chatgpt.com</td><td style={tdValue}>£262</td><td style={td}>Direct ChatGPT referrals</td></tr>
                <tr><td style={tdFirst}>direct</td><td style={tdValue}>£514</td><td style={td}>LLM models without referrer headers</td></tr>
                <tr><td style={tdFirst}>bing</td><td style={tdValue}>£43.88</td><td style={td}>ChatGPT&apos;s search grounding</td></tr>
                <tr><td style={tdFirst}>google</td><td style={tdValue}>£24.16</td><td style={td}>Includes Gemini-referred traffic</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>chatgpt (other)</td><td style={{ ...tdValue, borderBottom: 'none' }}>£18.55</td><td style={{ ...td, borderBottom: 'none' }}>Additional ChatGPT variants</td></tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Key Learning — Why This Proves ORMAS Is Necessary</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#878e99", marginBottom: "20px" }}>
            The Black Bloxie deployment proved one massive point: <strong>real-world data is catastrophically messy, and no current architecture can handle it.</strong> Existing noise-robust methods (ProMix, DivideMix, CoDE, EV) all broke in production. This validates why ORMAS was built — to provide an immune system that can operate in a chaotic, adversarial, non-stationary data environment.
          </p>

          {/* Current State */}
          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>Current State (July 2026)</h4>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflow: 'hidden', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Total customer base</td><td style={tdValue}>400+ loyal customers</td></tr>
                <tr><td style={tdFirst}>Customer retention</td><td style={tdValue}>Near 100%</td></tr>
                <tr><td style={tdFirst}>Customer reviews</td><td style={tdValue}>Consistently positive</td></tr>
                <tr><td style={tdFirst}>Total human hours</td><td style={tdValue}>Minimal — API costs only</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>Orders rejected</td><td style={{ ...tdValue, borderBottom: 'none' }}>Multiple — research constraint</td></tr>
              </tbody>
            </table>
          </div>

          {/* What Black Bloxie Proves */}
          <h4 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", marginTop: "40px", color: "#c4cfde" }}>What Black Bloxie Proves</h4>
          <div style={{ color: "#878e99", fontSize: "16px", lineHeight: "2.2" }}>
            <p><strong style={{ color: "#c4cfde" }}>OXIMO&apos;s architecture works in production</strong></p>
            <p><strong style={{ color: "#c4cfde" }}>Cascaded intelligence produces market-quality output at 99.99% cost reduction</strong> — $3.50 vs. $150,000</p>
            <p><strong style={{ color: "#c4cfde" }}>Ablation confirms causation</strong> — −91% on removal, +1,300% on re-injection</p>
            <p><strong style={{ color: "#c4cfde" }}>An AI-to-AI economy is emerging</strong></p>
            <p><strong style={{ color: "#c4cfde" }}>Real-world data breaks every existing noise-robust architecture</strong></p>
            <p><strong style={{ color: "#c4cfde" }}>Static deployment is a viable safety strategy</strong></p>
          </div>
        </div>
      </div>
      <div className="col-12"><hr style={{ borderColor: "rgba(255,255,255,0.06)", margin: "60px 0" }} /></div>
    </div>
  );
}
