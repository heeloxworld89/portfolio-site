import React from 'react';
import ExpandableSection from '../ExpandableSection';

// ─── Ablation data — exact figures from SHA-256 reconciled master dataset ────
const ablationRemoval = [
  { metric: 'Commercial Output',        pct: -91,  note: 'Phase 1 baseline → Phase 2 dead zone' },
  { metric: 'New Customer Acquisition', pct: -100, note: 'Complete cessation across all channels simultaneously' },
  { metric: 'Conversion Rate',          pct: -77,  note: 'Cross-channel collapse — rules out market/seasonality' },
  { metric: 'Order Volume',             pct: -72,  note: 'Residual orders from pre-existing sessions only' },
];

const ablationRecovery = [
  { metric: 'Commercial Output', pct: 1300, note: 'vs. Phase 2 ablated baseline' },
  { metric: 'Sessions',          pct: 1422, note: 'Full LLM referral channel rebuild' },
  { metric: 'Order Volume',      pct: 340,  note: 'Exceeded Phase 1 average by 3.3×' },
  { metric: 'Conversion Rate',   pct: 214,  note: 'Compounded memory advantage over Phase 1' },
];

const tdBase: React.CSSProperties = {
  padding: '13px 20px',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
  fontSize: '14px',
  color: '#9aa4b0',
};
const tdFirst: React.CSSProperties  = { ...tdBase, color: '#c4cfde', fontWeight: 600, width: '45%' };
const tdValue: React.CSSProperties  = { ...tdBase, fontFamily: "'Fira Code', monospace", color: '#c4cfde', fontWeight: 700, textAlign: 'right' };
const tdNote: React.CSSProperties   = { ...tdBase, fontSize: '12px', color: '#838d99' };

export default function CVDeployment() {
  return (
    <div className="row mb--50" id="deployment">
      <div className="col-12">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <span className="subtitle" style={{ color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px' }}>
          Architecture Validation · Controlled Ablation Study
        </span>
        <h2 className="title fs-2" style={{ fontWeight: 700, marginBottom: '6px' }}>I Ran a Lesion Study on My Own Company</h2>
        <p style={{ fontSize: '15px', color: '#9aa4b0', marginBottom: '18px' }}>
          OXIDO Architecture · Validated on Live Production Environment · 12 Months
        </p>

        {/* ── Critical Framing Block ─────────────────────────────────────── */}
        <div style={{ background: 'rgba(196,207,222,0.045)', border: '1px solid #2a2d32', borderLeft: '2px solid #c4cfde', borderRadius: '0 8px 8px 0', padding: '20px 24px', marginBottom: '28px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '8px' }}>
            This Is Not a Business. It Is a Controlled Experiment.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', margin: 0 }}>
            Black Bloxie LTD is registered at UK Companies House and exists to be a <strong style={{ color: '#c4cfde' }}>controlled test environment</strong> for the OXIDO architecture. A benchmark cannot tell you whether a system survives real customers, real suppliers, and real regulators, so I built somewhere it could fail in public and measured what happened. E-commerce came first because it has the fastest feedback loop and the least ambiguous failure signal.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', margin: '12px 0 0' }}>
            <strong style={{ color: '#c4cfde' }}>Read the numbers below with that in mind.</strong> They are small because I capped them. The unit economics say what the ceiling could have been — $0.0043 to produce a complete product suite against a $50–$150 human benchmark, and a $4,386 order closed autonomously at zero acquisition cost. What stopped the study from scaling was not cost, not demand, and not the architecture. It was that no jurisdiction currently assigns commercial liability to an autonomous agent, and I would rather hold a clean experiment at research grade than find that boundary from the wrong side of it.
          </p>
        </div>

        <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#838d99', marginBottom: '35px', maxWidth: '680px' }}>
          The evidence is published twice, for two different readers. The <strong>System Architecture Paper</strong> is for researchers and technical evaluators looking at the mechanics of ORMAS and OXIMO. The <strong>Commercial Evidence Report</strong> is for operators and investors judging whether the deployment model holds up commercially. Same 12-month record, examined through two different lenses.
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
            <span style={{ fontSize: '11px', color: '#838d99', fontWeight: 400, letterSpacing: 0, textTransform: 'none' }}>
              For technical evaluators · 30 pages
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
            <span style={{ fontSize: '11px', color: '#838d99', fontWeight: 400, letterSpacing: 0, textTransform: 'none' }}>
              For VCs &amp; angel investors · 10 tiers
            </span>
          </a>
        </div>

        {/* ── Methodology Headline Metrics ────────────────────────────────── */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#838d99', marginBottom: '14px' }}>
          Ablation Signal Strength
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '10px', marginBottom: '44px' }}>
          {[
            { val: '−91%',    lbl: 'On System Removal', sub: 'All commercial output collapsed' },
            { val: '+1,300%', lbl: 'On Re-Injection', sub: 'Recovery exceeded Phase 1 by 3.3×' },
            { val: '99.99%',  lbl: 'Content Cost Reduction', sub: '$0.0043/product vs. $50–$150 human' },
            { val: '12 mo.',  lbl: 'Study Duration', sub: '4 phases · Aug 2025 – Aug 2026' },
            { val: '$4,386',  lbl: 'Largest Autonomous Order', sub: '13 Aug 2026 · $0.00 CAC · zero humans' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '10px', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '6px' }}>{s.val}</div>
              <div style={{ fontSize: '12px', color: '#c4cfde', fontWeight: 700, marginBottom: '4px' }}>{s.lbl}</div>
              <div style={{ fontSize: '11px', color: '#838d99', lineHeight: 1.4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ── The Falsification Ladder — seven questions ──────────────────── */}
        <style>{`
          .ladder-intro {
            font-size: 16px;
            line-height: 1.85;
            color: #9aa4b0;
            max-width: 720px;
            margin: 0 0 30px;
          }
          .ladder-intro strong { color: #c4cfde; font-weight: 600; }
          .ladder { display: flex; flex-direction: column; gap: 12px; margin-bottom: 30px; }
          .rung {
            display: grid;
            grid-template-columns: 54px 1fr;
            gap: 20px;
            background: #191b1e;
            border: 1px solid #2a2d32;
            border-radius: 10px;
            padding: 24px 26px;
            transition: border-color 0.25s;
          }
          .rung:hover { border-color: rgba(255,255,255,0.14); }
          .rung-final {
            border-color: rgba(255,74,87,0.28);
            background: linear-gradient(135deg, rgba(255,74,87,0.05) 0%, #191b1e 62%);
          }
          @media (max-width: 700px) {
            .rung { grid-template-columns: 1fr; gap: 10px; padding: 20px; }
          }
          .rung-num {
            font-size: 30px;
            font-weight: 800;
            color: transparent;
            -webkit-text-stroke: 1px #3a3f47;
            line-height: 1;
            padding-top: 2px;
          }
          .rung-final .rung-num { -webkit-text-stroke: 1px rgba(255,74,87,0.55); }
          .rung-phase {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #838d99;
            margin-bottom: 8px;
          }
          .rung-final .rung-phase { color: #ff4a57; }
          .rung-q {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            line-height: 1.4;
            margin: 0 0 10px;
          }
          .rung-a {
            font-size: 15px;
            line-height: 1.8;
            color: #9aa4b0;
            margin: 0 0 12px;
          }
          .rung-a strong { color: #c4cfde; font-weight: 600; }
          .rung-verdict {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #c4cfde;
            border-top: 1px solid rgba(255,255,255,0.06);
            padding-top: 12px;
            margin: 0;
          }
          .rung-final .rung-verdict { color: #ff4a57; }
        `}</style>

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#838d99', marginBottom: '14px' }}>
          The Falsification Ladder — Seven Questions, Asked in Order
        </p>
        <p className="ladder-intro">
          Every claim that autonomous AI can run commercial operations dies at the same objection: <em>how do you
          know it was the AI?</em> Correlation is cheap. A store that sells while an AI runs it proves nothing on its
          own — the market could be carrying it, the category could be growing, the timing could be lucky. So I did not
          set out to build a business and report the revenue. <strong>I designed a twelve-month experiment to falsify
          my own thesis, and I structured it as an escalating ladder of seven questions where each rung is a test I
          could fail in public.</strong> Below is every question in the order it was asked, and what came back.
        </p>

        <div className="ladder">
          {[
            {
              n: '01',
              phase: 'Phase 1 · Aug – Oct 2025 · Cold Start',
              q: 'Can an autonomous system originate commercial demand at all — from nothing?',
              a: 'The hardest possible starting condition: a brand-new UK entity with zero domain authority, zero brand equity, zero backlink profile, zero advertising budget, and no human in the acquisition loop. OXIMO deployed the full 6-stage AX09 pipeline and the store went live cold. Customers arrived. Every one of them came through LLM-referred channels — no paid acquisition, no outbound, no human sales effort at any point.',
              verdict: 'Answered: yes. Demand originated where there was none.',
            },
            {
              n: '02',
              phase: 'Phase 1 Baseline · Established',
              q: 'How much can it sell, and at what unit economics?',
              a: 'A capability claim is worthless without a cost structure behind it. The pipeline produced a complete 12-asset product suite for $0.0043 against a $50–$150 human freelancer benchmark — a 99.99% reduction, at equivalent output quality. Single-shot frontier calls to GPT-4 Turbo would have cost ~$180 for the same work. Baseline commercial output was locked and recorded across all channels as the control condition for everything that followed.',
              verdict: 'Answered: the marginal cost of output collapses to near zero.',
            },
            {
              n: '03',
              phase: 'Phase 2 · Nov 2025 – Feb 2026 · The Lesion',
              q: 'Strip the AI out and revert to generic. Was it ever the AI, or was it the market?',
              a: 'This is the rung the entire study exists for. Every AX09-generated asset was removed and the store was reverted to bare platform defaults — the same products, the same prices, the same supplier, the same category, the same seasonality. The only variable withdrawn was the architecture. Commercial output fell 91%. Conversion fell 77%. Order volume fell 72%, and what remained traced entirely to sessions that predated the removal.',
              verdict: 'Answered: the architecture was the causal variable, not the market.',
            },
            {
              n: '04',
              phase: 'Phase 2 · Dead Zone',
              q: 'What does total system death actually look like?',
              a: 'Not decay — cessation. New customer acquisition went to zero and stayed there. The collapse landed across every channel simultaneously rather than tapering channel by channel, which is the specific signature that rules out seasonality, category softness, and macro conditions: no market downturn removes every acquisition channel on the same day. The store stayed live and stayed dead for four months.',
              verdict: 'Answered: −100% acquisition. Simultaneous, not gradual.',
            },
            {
              n: '05',
              phase: 'Phase 3 · Mar – Jul 2026 · Re-Injection',
              q: 'Is the collapse reversible, or did removal destroy something unrecoverable?',
              a: 'A one-directional result is only half a proof. If the system caused the output, restoring it should restore the output — and if it does not, the causal claim fails in the other direction. OXIMO V3 was redeployed into the same dead entity, with no other change to product, pricing, supplier, or platform.',
              verdict: 'Answered: yes. The dead zone was a lesion, not a wound.',
            },
            {
              n: '06',
              phase: 'Phase 3 · Recovery Ablation',
              q: 'Does it return to baseline — or past it?',
              a: 'It overshot. Commercial output recovered 1,300% from the ablated floor, exceeding the Phase 1 average by 3.3×. Sessions rebuilt 1,422%, order volume 340%, conversion 214%. The overshoot is the most interesting result in the study and it is not noise: the OXIMO knowledge graph retained everything learned in Phase 1, so V3 restarted with twelve months of accumulated institutional memory instead of starting cold. The system came back knowing things it did not know the first time.',
              verdict: 'Answered: recovery compounds. Institutional memory is an asset that survives.',
            },
            {
              n: '07',
              phase: 'Phase 4 · 13 Aug 2026 · High-Value Test',
              q: 'Everything so far is commodity volume. Can it close a high-value transaction — or does trust break at the price point?',
              a: 'The obvious residual objection: low-consideration purchases are easy, and none of the above proves an autonomous system can carry a buyer through a decision with real money attached. So the final phase listed high-value inventory and let the architecture handle the entire funnel unassisted — discovery, positioning, objection handling, close. It closed a $4,386 order at $0.00 customer acquisition cost, with zero human involvement at any stage of the transaction.',
              verdict: 'Answered: the ceiling is not commodity. It closes high-value.',
            },
          ].map((r, i) => (
            <div key={i} className={`rung${r.n === '07' ? ' rung-final' : ''}`}>
              <div className="rung-num">{r.n}</div>
              <div>
                <div className="rung-phase">{r.phase}</div>
                <p className="rung-q">{r.q}</p>
                <p className="rung-a">{r.a}</p>
                <p className="rung-verdict">{r.verdict}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(196,207,222,0.045)', border: '1px solid #2a2d32', borderLeft: '2px solid #c4cfde', borderRadius: '0 8px 8px 0', padding: '22px 26px', marginBottom: '44px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '10px' }}>
            What Seven Rungs Buy You That Revenue Never Could
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', margin: '0 0 12px' }}>
            Run only Phase 1 and you have a store that sells — indistinguishable from luck. Add Phase 2 and you have
            causation. Add Phase 3 and you have reversibility, which rules out the possibility that the collapse was
            coincidental damage. Add Phase 4 and you have ceiling. <strong>Each rung closes an escape route a
            sceptic would otherwise take, and they only work in sequence.</strong>
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', margin: 0 }}>
            What this does not establish is scale, and I will not pretend otherwise: this is n=1, one substrate, one
            operator, held deliberately at research grade. What it does establish is the thing scale cannot —
            <strong> that the architecture is the origin of the output, that removing it stops the output, that
            restoring it compounds the output, and that the mechanism survives contact with a real transaction at a
            real price.</strong> Those four claims are load-bearing. Revenue is not.
          </p>
        </div>

        {/* ── Test Substrates (not "business verticals") ──────────────────── */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#838d99', marginBottom: '14px' }}>
          Test Substrates — Architecture Applicability
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '10px', marginBottom: '44px' }}>
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '18px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#838d99', marginBottom: '4px' }}>
              Substrate 1 · Ablation Complete
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>E-Commerce</div>
            <div style={{ fontSize: '12px', color: '#9aa4b0', lineHeight: 1.6 }}>
              12-month controlled ablation study. Full injection-removal-reinjection cycle completed, plus a Phase 4 post-study event ($4,386 autonomous order on 13 Aug 2026 at $0.00 CAC). Causal attribution confirmed. Selected for fastest feedback loop and clearest binary failure signal.
            </div>
          </div>
          {[
            { sector: 'Legal (Law Firms)', note: 'Architecture validated via OXIMO. Ablation cycle pending — deployment protocol identical to Substrate 1.' },
            { sector: 'Software Companies', note: 'Architecture validated via OXIMO. Ablation cycle pending — deployment protocol identical to Substrate 1.' },
            { sector: 'Medical Research', note: 'Gated on ORMAS-T (Transformer-scale). ORMAS GlassBox compliance layer targets FDA explainability mandates for clinical fine-tuning.' },
          ].map((v, i) => (
            <div key={i} style={{ background: '#141618', border: '1px solid #222529', borderRadius: '8px', padding: '18px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#838d99', marginBottom: '4px' }}>
                Substrate {i + 2} · Pending
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#838d99', marginBottom: '6px' }}>{v.sector}</div>
              <div style={{ fontSize: '12px', color: '#838d99', lineHeight: 1.6 }}>{v.note}</div>
            </div>
          ))}
        </div>

        <div className="content mt--10">

          {/* ── Why & Regulatory Framing ──────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '44px' }}>
            <div style={{ background: 'rgba(196,207,222,0.045)', border: '1px solid #2a2d32', borderLeft: '2px solid #c4cfde', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '8px' }}>
                Why the Scale Is Deliberately Constrained
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', margin: 0 }}>
                The OXIDO architecture operates under a research-grade ablation ceiling. The study is designed to isolate causal variables, not to maximise commercial output. Scaling beyond ablation-grade requires deploying OXIMO's full autonomous capabilities — self-hiring, self-modification, autonomous role provisioning — which are validated by 2,011 passing tests but are not deployed at scale because no legal framework currently assigns commercial liability to autonomous AI agents. The constraint is jurisdictional, not architectural. ORMAS's ISS local stability characterization and GlassBox causal audit trail are the architectural response to that regulatory gap.
              </p>
            </div>
            <div style={{ background: 'rgba(196,207,222,0.045)', border: '1px solid #2a2d32', borderLeft: '2px solid #c4cfde', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '8px' }}>
                What This Study Actually Proves
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', margin: 0 }}>
                The ablation study does not prove that the architecture generates large revenue. It proves that the architecture is the <strong style={{ color: '#c4cfde' }}>causal origin</strong> of commercial output — and that its removal causes that output to stop. This is a fundamentally different claim. The first is a scale metric. The second is a causal proof. The OXIDO deployment validates the latter: that ORMAS-trained models, orchestrated by OXIMO, produce measurable real-world economic activity with zero human intervention and zero advertising expenditure.
              </p>
            </div>
          </div>

          <ExpandableSection
            closedLabel="View AX09 Technical Spec"
            hint="The six-stage pipeline, cost breakdown, phase-level ablation tables, traffic attribution, and study parameters — for engineers and technical evaluators."
          >
          {/* ── AX09 Six-Stage Pipeline ───────────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', color: '#c4cfde' }}>
            AX09 — Six-Stage Autonomous Content Pipeline
          </h4>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', marginBottom: '6px' }}>
            Each product is processed by six cascaded AI stages. Cascading specialized inference calls replaces single-shot frontier model calls — achieving a <strong style={{ color: '#c4cfde' }}>99.99% content cost reduction</strong> ($0.0043 per complete 12-asset product suite vs. $50–$150 human freelancer benchmark) at equivalent output quality.
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#838d99', marginBottom: '20px', fontStyle: 'italic' }}>
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
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#838d99', marginBottom: '14px' }}>
            Cost Per Product — Same Output Quality
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '40px' }}>
            {[
              { approach: 'GPT-4 Turbo (single-shot)', cost: '~$180', muted: true },
              { approach: 'Claude 3.5 (single-shot)',  cost: '~$54',  muted: true },
              { approach: 'GPT-4o (single-shot)',      cost: '~$45',  muted: true },
              { approach: 'AX09 Cascade',              cost: '$0.0043', muted: false },
            ].map((c, i) => (
              <div key={i} style={{ background: c.muted ? 'rgba(20,22,24,0.7)' : '#191b1e', border: `1px solid ${c.muted ? '#1a1c1f' : '#2a2d32'}`, borderRadius: '8px', padding: '16px', textAlign: 'center', opacity: c.muted ? 0.5 : 1 }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: c.muted ? '#838d99' : '#c4cfde', marginBottom: '4px' }}>{c.cost}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: c.muted ? '#838d99' : '#9aa4b0', lineHeight: 1.4 }}>{c.approach}</div>
              </div>
            ))}
          </div>

          {/* ── Ablation Tables ───────────────────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', color: '#c4cfde', marginTop: '10px' }}>
            Ablation Record — Phase-Level Evidence
          </h4>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', marginBottom: '24px' }}>
            The design borrows directly from lesion studies in neuroscience — inject, remove, re-inject — applied to a live commercial system instead of a brain. It exists to settle one question with data rather than argument: does the architecture cause the commercial output, or does the market?
          </p>

          {/* Phase 2 removal table */}
          <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#9aa4b0', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Phase 2 — System Removal (Decline from Phase 1 Baseline)</h5>
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
                    <td style={{ ...tdValue, borderBottom: i < ablationRemoval.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', color: '#9aa4b0' }}>{r.pct}%</td>
                    <td style={{ ...tdNote, borderBottom: i < ablationRemoval.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Phase 3 recovery table */}
          <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#9aa4b0', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Phase 3 — V3 Re-Injection (Recovery from Ablated Baseline)</h5>
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
            Traffic Source Attribution — The LLM Referral Channel
          </h4>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', marginBottom: '20px' }}>
            100% of customer acquisition is attributable to LLM-originated channels — a novel distribution mechanism that validates OXIDO's core thesis: AI-generated content structured for LLM consumption creates a self-sustaining acquisition engine without advertising. The Simultaneous Channel Collapse (SCC) methodology — introduced in this study — establishes that &ldquo;Unattributed Direct&rdquo; traffic in LLM-dependent environments is structurally identical to headless LLM referrals.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '30%' }}>Channel</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '18%' }}>Share</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Mechanism</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>LLM Headless (SCC-attributed)</td><td style={tdValue}>~60%</td><td style={tdBase}>Headless LLM clients omitting HTTP Referer. Identified via SCC cross-channel collapse methodology.</td></tr>
                <tr><td style={tdFirst}>ChatGPT.com (Direct)</td><td style={tdValue}>~30%</td><td style={tdBase}>Direct chatgpt.com referrals with verified Referer header. 3.30% CVR.</td></tr>
                <tr><td style={tdFirst}>Bing / ChatGPT Grounding</td><td style={tdValue}>~5%</td><td style={tdBase}>ChatGPT's web search grounding layer surfacing AX09-generated content.</td></tr>
                <tr><td style={tdFirst}>Google / Gemini</td><td style={tdValue}>~3%</td><td style={tdBase}>Gemini-attributed referrals via Google search grounding.</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>ChatGPT Surface Variants</td><td style={{ ...tdValue, borderBottom: 'none' }}>~2%</td><td style={{ ...tdBase, borderBottom: 'none' }}>Additional ChatGPT product surfaces (plugins, shopping integrations).</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '12px', color: '#838d99', marginBottom: '40px', lineHeight: '1.6' }}>
            <strong style={{ color: '#838d99' }}>Attribution methodology:</strong> Shares derived from referrer analysis, no-referrer SCC attribution during Phase 2 ablation, and UTM-tagged links confirmed in LLM assistant outputs. All figures directional — formal SCC proof in the System Architecture Paper, Section 3.5.
          </p>

          {/* ── What This Proved About ORMAS ──────────────────────────────── */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#c4cfde' }}>
            What the Deployment Proved About ORMAS
          </h4>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#9aa4b0', marginBottom: '20px' }}>
            This deployment is where I first hit the failure mode that produced ORMAS. Real supplier data is adversarial in a way no benchmark reproduces: mislabelled categories, inconsistent taxonomies, duplicate SKUs, corrupted pricing fields. Every noise-robust method I tested — ProMix, DivideMix, CoDE, EV — failed on this class of data in production. Standard backpropagation learns corrupted labels silently and confidently, because no node in the network has any way to assess itself. Hyperparameter tuning does not fix that. A different training architecture does, and that is what ORMAS is.
          </p>

          {/* ── Study Parameters (revenue buried here, properly contextualized) */}
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#c4cfde' }}>
            Study Parameters — Research-Grade Operational Boundary
          </h4>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#838d99', marginBottom: '14px', fontStyle: 'italic' }}>
            These figures reflect deliberate ablation-ceiling constraints, not commercial scale targets. The study was designed to isolate causal attribution, not to maximise output.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '30px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Parameter</th>
                  <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdFirst}>Study Duration</td><td style={tdValue}>12 months (4 phases, Aug 2025–Aug 2026)</td></tr>
                <tr><td style={tdFirst}>Ablation Signal (Removal)</td><td style={tdValue}>−91% commercial output</td></tr>
                <tr><td style={tdFirst}>Ablation Signal (Re-Injection)</td><td style={tdValue}>+1,300% recovery · 3.3× peak overshoot</td></tr>
                <tr><td style={tdFirst}>Largest Autonomous Order</td><td style={tdValue}>$4,386 · 13 Aug 2026 · $0.00 CAC</td></tr>
                <tr><td style={tdFirst}>Cumulative Verified Revenue</td><td style={tdValue}>$6,691.68 USD · 79+ orders</td></tr>
                <tr><td style={tdFirst}>Paying Customers (10 countries)</td><td style={tdValue}>396</td></tr>
                <tr><td style={tdFirst}>Total Engaged Leads</td><td style={tdValue}>500+</td></tr>
                <tr><td style={tdFirst}>Advertising Expenditure</td><td style={tdValue}>$0.00</td></tr>
                <tr><td style={tdFirst}>Human Marketing Hours</td><td style={tdValue}>0</td></tr>
                <tr><td style={{ ...tdFirst, borderBottom: 'none' }}>Scale Constraint</td><td style={{ ...tdValue, borderBottom: 'none' }}>Research boundary — regulatory, not technical</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── Roadmap — other substrates ────────────────────────────────── */}
          <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '20px 24px', marginTop: '10px', marginBottom: '10px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#838d99', marginBottom: '10px' }}>Substrates 2–4 — Pending Ablation Cycles</p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#838d99', margin: 0 }}>
              Legal, software, and medical research substrates are architecturally ready via the OXIMO/ORMAS stack. Each requires completing its own injection-removal-reinjection ablation cycle before findings are published. The methodology is identical to Substrate 1. Medical research deployment is gated on ORMAS-T (Transformer-scale self-correcting training) — a prerequisite for fine-tuning on clinical data under FDA-compliant GlassBox auditability.
            </p>
          </div>

          </ExpandableSection>

        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} /></div>
    </div>
  );
}
