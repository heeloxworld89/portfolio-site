import React from 'react';

// ─── Ablation data — exact figures from SHA-256 reconciled master dataset ────
const ablationRemoval = [
  { metric: 'Revenue',                  pct: -91,  note: 'Phase 1 mean £102.65 → Phase 2 dead zone £0.00' },
  { metric: 'New Customer Acquisition', pct: -100, note: 'Complete cessation. Zero new customers acquired.' },
  { metric: 'Conversion Rate',          pct: -77,  note: 'Cross-channel collapse — all channels simultaneously' },
  { metric: 'Orders',                   pct: -72,  note: 'Residual orders from pre-existing sessions only' },
];

const ablationRecovery = [
  { metric: 'Revenue',         pct: 1300, note: 'vs. Phase 2 ablated baseline' },
  { metric: 'Sessions',        pct: 1422, note: 'Full LLM referral channel rebuild' },
  { metric: 'Orders',          pct: 340,  note: '4 orders/month → 8.75 orders/month avg' },
  { metric: 'Conversion Rate', pct: 214,  note: 'Compounded memory advantage over Phase 1' },
];

const tdBase: React.CSSProperties = {
  padding: '13px 20px',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
  fontSize: '14px',
  color: '#878e99',
};
const tdFirst: React.CSSProperties  = { ...tdBase, color: '#c4cfde', fontWeight: 600, width: '45%' };
const tdValue: React.CSSProperties  = { ...tdBase, fontFamily: "'Fira Code', monospace", color: '#c4cfde', fontWeight: 700, textAlign: 'right' };
const tdNote: React.CSSProperties   = { ...tdBase, fontSize: '12px', color: '#4a5568' };

export default function CVDeployment() {
  return (
    <div className="row mb--50" id="deployment">
      <div className="col-12">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <span className="subtitle" style={{ color: '#878e99', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px' }}>
          Longitudinal Field Study · 11-Month Production Ablation
        </span>
        <h2 className="title fs-2" style={{ fontWeight: 700, marginBottom: '6px' }}>Black Bloxie LTD</h2>
        <p style={{ fontSize: '15px', color: '#878e99', marginBottom: '18px' }}>
          UK Companies House Registered · Founder · Operating August 2025 – Present
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#c4cfde', fontStyle: 'italic', borderLeft: '2px solid rgba(255,255,255,0.08)', paddingLeft: '18px', marginBottom: '10px', maxWidth: '680px' }}>
          A live UK-registered company in which every commercial role — market intelligence, product cataloguing, SEO assembly, and content generation — is occupied by an AI agent. Black Bloxie is the empirical substrate for OXIDO: it is where the architecture either generates revenue or it doesn't.
        </p>
        <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#6b7683', marginBottom: '35px', maxWidth: '640px' }}>
          The study is documented in two published formats. The <strong>System Architecture Paper</strong> is written for ML researchers and technical people evaluating the underlying mechanics. The <strong>Commercial Evidence Report</strong> is written for enterprise operators, venture capitalists, and angel investors evaluating the business case. Both cover the same 11-month ablation record from different analytical lenses.
        </p>

        {/* ── Paper Download Buttons ─────────────────────────────────────── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '44px' }}>
          <a
            href="/assets/pdf/oxido_academic_research_paper.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '13px 22px',
              background: 'rgba(196,207,222,0.05)',
              border: '1px solid rgba(196,207,222,0.15)',
              borderRadius: '5px',
              color: '#c4cfde',
              fontSize: '13px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(196,207,222,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(196,207,222,0.05)')}
          >
            <i className="fa-sharp fa-regular fa-file-lines" />
            System Architecture Paper
            <span style={{ fontSize: '11px', color: '#6b7683', fontWeight: 400, letterSpacing: 0, textTransform: 'none' }}>
              Full technical preprint · 27 pages
            </span>
          </a>

          <a
            href="/assets/pdf/oxido_investor_whitepaper.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '13px 22px',
              background: 'rgba(255,74,87,0.06)',
              border: '1px solid rgba(255,74,87,0.18)',
              borderRadius: '5px',
              color: '#ff4a57',
              fontSize: '13px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,74,87,0.12)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,74,87,0.06)')}
          >
            <i className="fa-sharp fa-regular fa-chart-line" />
            Commercial Evidence Report
            <span style={{ fontSize: '11px', color: '#6b7683', fontWeight: 400, letterSpacing: 0, textTransform: 'none' }}>
              Enterprise briefing · 10 tiers
            </span>
          </a>
        </div>

        {/* ── Four Verticals ─────────────────────────────────────────────── */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '14px' }}>
          Deployment Verticals
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '10px', marginBottom: '44px' }}>
          {/* Vertical 1 — only validated one */}
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '18px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '4px' }}>
              Vertical 1 · Validated
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>E-Commerce</div>
            <div style={{ fontSize: '12px', color: '#878e99', lineHeight: 1.6 }}>
              11-month controlled ablation study. £1,707.91 verified revenue. 78 orders. 396 customers. 10 countries. Zero paid advertising. Causal attribution confirmed.
            </div>
          </div>
          {/* Verticals 2-4 — thesis basis — readable but muted */}
          {[
            { sector: 'Legal (Law Firms)', note: 'Architecture validated via OXIMO. Vertical deployment on thesis basis — full ablation cycle pending.' },
            { sector: 'Software Companies', note: 'Architecture validated via OXIMO. Vertical deployment on thesis basis — full ablation cycle pending.' },
            { sector: 'Medical Research', note: 'ORMAS GlassBox compliance layer targets FDA explainability mandates. Gated on ORMAS-T completion.' },
          ].map((v, i) => (
            <div key={i} style={{ background: '#141618', border: '1px solid #222529', borderRadius: '8px', padding: '18px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '4px' }}>
                Vertical {i + 2} · Thesis Basis
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#6b7683', marginBottom: '6px' }}>{v.sector}</div>
              <div style={{ fontSize: '12px', color: '#565d68', lineHeight: 1.6 }}>{v.note}</div>
            </div>
          ))}
        </div>

        {/* ── Headline Unit Economics ─────────────────────────────────────── */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '14px' }}>
          Vertical 1 — Headline Evidence
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '10px', marginBottom: '44px' }}>
          {[
            { val: '£1,707.91', lbl: 'Verified Revenue', sub: '11 months · SHA-256 reconciled' },
            { val: '£0.00',     lbl: 'Customer Acquisition Cost', sub: '396 customers · 10 countries' },
            { val: '3.30%',     lbl: 'LLM Referral CVR', sub: 'ChatGPT.com · 6.6× baseline' },
            { val: '99.99%',    lbl: 'Content Cost Reduction', sub: '$0.0043/product vs. $50–$150 human' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '10px', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '6px' }}>{s.val}</div>
              <div style={{ fontSize: '12px', color: '#c4cfde', fontWeight: 700, marginBottom: '4px' }}>{s.lbl}</div>
              <div style={{ fontSize: '11px', color: '#4a5568', lineHeight: 1.4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Three Ablation Phases ───────────────────────────────────────── */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '14px' }}>
          Controlled Ablation Design — Injection · Removal · Re-Injection
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '12px', marginBottom: '44px' }}>
          {[
            {
              phase: 'Phase 1 · Aug – Oct 2025',
              title: 'OXIMO/AX09 Deployed',
              body: 'Cold start. No prior brand presence, zero advertising spend. 100% acquisition LLM-referred. Phase 1 mean: £102.65/month across 9.0 orders/month. Baseline conversion established across the full 6-stage AX09 pipeline.',
            },
            {
              phase: 'Phase 2 · Nov 2025 – Feb 2026',
              title: 'Full System Removal',
              body: 'All AX09-generated content stripped. Store reverted to bare platform defaults. Revenue: −91%. New customer acquisition: −100%. Simultaneous cross-channel collapse ruled out market and seasonality as causal alternatives.',
            },
            {
              phase: 'Phase 3 · Mar – Jul 2026',
              title: 'V3 Re-Injection',
              body: 'OXIMO V3 redeployed. Revenue recovered +1,300% from ablated baseline. Peak: £339.56 (May 2026) — a 3.3× overshoot of the Phase 1 average, driven by accumulated institutional memory advantage.',
            },
          ].map((p, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '6px' }}>{p.phase}</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#c4cfde', marginBottom: '8px' }}>{p.title}</div>
              <div style={{ fontSize: '14px', lineHeight: '1.75', color: '#878e99' }}>{p.body}</div>
            </div>
          ))}
        </div>

        <div className="content mt--10">

          {/* ── Why & Regulatory Framing ──────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '44px' }}>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '8px' }}>
                Why a Live Company as the Test Environment?
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#878e99', margin: 0 }}>
                Controlled lab environments validate theoretical properties. Live companies validate survival under simultaneous contact with real customers, real money, real supply chains, and real regulations. E-Commerce was chosen as Vertical 1 because it has the fastest feedback loop and the clearest failure signal: revenue is binary. Either the system generates it, or it doesn't. The ablation study confirms it does — and that removal causes it to stop.
              </p>
            </div>
            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '8px' }}>
                The Operating Boundary Is Regulatory, Not Technical
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#878e99', margin: 0 }}>
                OXIMO's full autonomous capabilities — self-hiring, self-modification, autonomous role provisioning — are validated by 2,069 passing tests and technically ready. They are not deployed at full scale because no legal framework currently assigns commercial liability to autonomous AI agents acting on behalf of a registered company. ORMAS's ISS convergence proof and GlassBox causal audit trail are the architectural response to that regulatory gap. The constraint is jurisdictional, not architectural.
              </p>
            </div>
          </div>

          {/* ── AX09 Six-Stage Pipeline ───────────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', color: '#c4cfde' }}>
            AX09 — Six-Stage Autonomous Content Pipeline
          </h4>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#878e99', marginBottom: '6px' }}>
            Each product is processed by six cascaded AI stages. Cascading specialized inference calls replaces single-shot frontier model calls — achieving a <strong style={{ color: '#c4cfde' }}>99.99% content cost reduction</strong> ($0.0043 per complete 12-asset product suite vs. $50–$150 human freelancer benchmark) at equivalent output quality.
          </p>
          <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px', fontStyle: 'italic' }}>
            Deployed in static operation mode. Full autonomous self-hiring and self-modification are validated and ready pending regulatory clarity.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '35%' }}>Stage</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Function</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Stage 0 — Ingestion &amp; Taxonomy</td><td style={tdBase}>Validates raw supplier CSV, categorises across 10,715 Google taxonomy nodes, filters low-demand items.</td></tr>
                <tr><td style={tdFirst}>Stage 1 — Trait Extraction</td><td style={tdBase}>6 parallel AI analyses per product generating a strategic intelligence blueprint: psychographic profiling, competitor gap analysis, demand signal mapping.</td></tr>
                <tr><td style={tdFirst}>Stage 2 — Product Intelligence</td><td style={tdBase}>AI variant detection, Cartesian expansion of product configurations, psychological pricing with anchor calibration.</td></tr>
                <tr><td style={tdFirst}>Stage 3 — Content Generation</td><td style={tdBase}>12 parallel AI operations per product executing the Stage 1 blueprint — titles, descriptions, meta, alt text, FAQs, trust copy.</td></tr>
                <tr><td style={tdFirst}>Stage 4 — SEO Assembly</td><td style={tdBase}>Semantic HTML5, Schema.org structured data, CSS validation, LLM-crawl taxonomy alignment.</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>Stage 5 — Platform Export</td><td style={{ ...tdBase, borderBottom: 'none' }}>Tax configuration, variant ordering, one-click Shopify import CSV generation.</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── Cost Comparison ───────────────────────────────────────────── */}
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '14px' }}>
            Cost Per Product — Same Output Quality
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '40px' }}>
            {[
              { approach: 'GPT-4 Turbo (single-shot)', cost: '~$180', muted: true },
              { approach: 'Claude 3.5 (single-shot)',  cost: '~$54',  muted: true },
              { approach: 'GPT-4o (single-shot)',      cost: '~$45',  muted: true },
              { approach: 'AX09 Cascade',              cost: '$0.0043', muted: false, highlight: true },
            ].map((c, i) => (
              <div key={i} style={{ background: c.muted ? 'rgba(20,22,24,0.7)' : '#191b1e', border: `1px solid ${c.muted ? '#1a1c1f' : '#2a2d32'}`, borderRadius: '8px', padding: '16px', textAlign: 'center', opacity: c.muted ? 0.5 : 1 }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: c.muted ? '#2a2d32' : '#c4cfde', marginBottom: '4px' }}>{c.cost}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: c.muted ? '#2a2d32' : '#878e99', lineHeight: 1.4 }}>{c.approach}</div>
              </div>
            ))}
          </div>

          {/* ── Ablation Tables ───────────────────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', color: '#c4cfde', marginTop: '10px' }}>
            Ablation Record — Phase-Level Evidence
          </h4>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#878e99', marginBottom: '24px' }}>
            The study design follows an injection-removal-reinjection protocol, analogous to lesion studies in neuroscience, adapted for a live commercial system. It answers one question with verifiable financial data: does OXIDO cause the results, or does the market?
          </p>

          {/* Phase 2 removal table */}
          <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#878e99', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Phase 2 — System Removal (Decline from Phase 1 Baseline)</h5>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginBottom: '28px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '28%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '15%' }}>Change</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {ablationRemoval.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...tdFirst, borderBottom: i < ablationRemoval.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{r.metric}</td>
                    <td style={{ ...tdValue, borderBottom: i < ablationRemoval.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', color: '#878e99' }}>{r.pct}%</td>
                    <td style={{ ...tdNote, borderBottom: i < ablationRemoval.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Phase 3 recovery table */}
          <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#878e99', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Phase 3 — V3 Re-Injection (Recovery from Ablated Baseline)</h5>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginBottom: '44px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '28%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '15%' }}>Change</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {ablationRecovery.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...tdFirst, borderBottom: i < ablationRecovery.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{r.metric}</td>
                    <td style={{ ...tdValue, borderBottom: i < ablationRecovery.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', color: '#c4cfde' }}>+{r.pct}%</td>
                    <td style={{ ...tdNote, borderBottom: i < ablationRecovery.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Traffic Attribution ───────────────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', color: '#c4cfde' }}>
            Traffic Source Attribution — The LLM Referral Economy
          </h4>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#878e99', marginBottom: '20px' }}>
            Every order is attributable to LLM-originated channels. Standard referrer-based analytics systematically undercounts LLM traffic because the majority of LLM clients (Perplexity, Claude, mobile assistants, API integrations) do not transmit HTTP Referer headers. The Simultaneous Channel Collapse (SCC) methodology — introduced in this study — establishes that &ldquo;Unattributed Direct&rdquo; traffic in LLM-dependent commerce environments is structurally identical to headless LLM referrals.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '30%' }}>Channel</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '18%' }}>Attribution Share</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Mechanism</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>LLM Headless (SCC-attributed)</td><td style={tdValue}>~60%</td><td style={tdBase}>Headless LLM clients omitting HTTP Referer. Identified via SCC cross-channel collapse methodology.</td></tr>
                <tr><td style={tdFirst}>ChatGPT.com (Direct)</td><td style={tdValue}>~30%</td><td style={tdBase}>Direct chatgpt.com referrals with verified Referer header. 3.30% CVR · £29.39 AOV.</td></tr>
                <tr><td style={tdFirst}>Bing / ChatGPT Grounding</td><td style={tdValue}>~5%</td><td style={tdBase}>ChatGPT's web search grounding layer surfacing AX09-generated content.</td></tr>
                <tr><td style={tdFirst}>Google / Gemini</td><td style={tdValue}>~3%</td><td style={tdBase}>Gemini-attributed referrals via Google search grounding.</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>ChatGPT Surface Variants</td><td style={{ ...tdValue, borderBottom: 'none' }}>~2%</td><td style={{ ...tdBase, borderBottom: 'none' }}>Additional ChatGPT product surfaces (plugins, shopping integrations).</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '12px', color: '#4a5568', marginBottom: '40px', lineHeight: '1.6' }}>
            <strong style={{ color: '#4a5568' }}>Attribution methodology:</strong> Shares derived from: (a) sessions with referrer strings matching known LLM domains; (b) no-referrer sessions on product pages where organic search is negligible, confirmed via SCC during Phase 2 ablation; (c) UTM-tagged links confirmed in LLM assistant outputs. All figures directional — formal SCC proof in the Academic Research Paper, Section 3.5.
          </p>

          {/* ── Why This Requires ORMAS ───────────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#c4cfde' }}>
            What the Deployment Proved About ORMAS
          </h4>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#878e99', marginBottom: '20px' }}>
            The Black Bloxie deployment exposed the core failure mode that motivated ORMAS. Real-world supplier data is adversarial: mislabelled categories, inconsistent taxonomies, duplicate SKUs, corrupted pricing fields, and noise patterns that no benchmark dataset replicates. Every existing noise-robust training method tested (ProMix, DivideMix, CoDE, EV) failed in production on this data class. Standard backpropagation learns corrupted labels silently and confidently, with no per-node self-assessment mechanism to detect the failure. ORMAS was built to solve this structurally — not with hyperparameter tuning, but with a three-signal training architecture that formally proves it will detect and correct its own corruption while converging.
          </p>

          {/* ── Current State Table ───────────────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#c4cfde' }}>
            Operational Status — July 2026
          </h4>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Metric</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Verified Revenue (11 months)</td><td style={tdValue}>£1,707.91</td></tr>
                <tr><td style={tdFirst}>Total Orders</td><td style={tdValue}>78 placed · 61 fulfilled</td></tr>
                <tr><td style={tdFirst}>Unique Customers</td><td style={tdValue}>396 across 10 countries</td></tr>
                <tr><td style={tdFirst}>Advertising Expenditure</td><td style={tdValue}>£0.00</td></tr>
                <tr><td style={tdFirst}>Human Marketing Hours</td><td style={tdValue}>0</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>Scale Constraint</td><td style={{ ...tdValue, borderBottom: 'none' }}>Research boundary — regulatory, not technical</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── Roadmap — other verticals ─────────────────────────────────── */}
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px', marginTop: '10px', marginBottom: '10px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '10px' }}>Verticals 2–4 — Thesis-Stage Roadmap</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#4a5568', margin: 0 }}>
              Legal, software, and medical research verticals are architecturally ready via the OXIMO/ORMAS stack. Each requires completing its own injection-removal-reinjection ablation cycle before findings are published. The methodology is identical to Vertical 1. Medical research deployment is gated on ORMAS-T (Transformer-scale self-correcting training) — a prerequisite for fine-tuning on clinical data under FDA-compliant GlassBox auditability.
            </p>
          </div>

        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} /></div>
    </div>
  );
}
