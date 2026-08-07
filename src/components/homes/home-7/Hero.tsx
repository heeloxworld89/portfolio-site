
export default function Hero(_props?: any) {
  return (
    <div className="tmp-banner-one-area" id="home" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <style>{`
        .editorial-row {
          display: flex;
          padding: 40px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background-color 0.3s ease;
        }
        .editorial-row:hover {
          background-color: rgba(255,255,255,0.02);
        }
        .editorial-date {
          width: 25%;
          flex-shrink: 0;
          padding-right: 20px;
        }
        @media (max-width: 768px) {
          .editorial-row { flex-direction: column; padding: 30px 0; }
          .editorial-date { width: 100%; margin-bottom: 15px; }
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #ff4a57;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px #ff4a57;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 74, 87, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 74, 87, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 74, 87, 0); }
        }
      `}</style>
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Header */}
              <div className="tmp-scroll-trigger tmp-fade-in animation-order-1" style={{ marginBottom: '60px' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#878e99', marginBottom: '20px' }}>
                  Independent AI Research — Dhaka, Bangladesh
                </p>
                <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: '24px', lineHeight: '1.15' }}>
                  Neural networks fail opaquely.<br />
                  <span style={{ color: '#c4cfde' }}>I built an architecture that changes that.</span>
                </h1>
                <p style={{ fontSize: '18px', color: '#878e99', maxWidth: '620px', margin: 0, lineHeight: '1.7' }}>
                  ORMAS · OXIMO · OXIDO. Three systems. One research program. The work is documented, reproducible, and running in production.
                </p>
              </div>

              {/* Editorial List */}
              <div className="tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                
                {/* Row 1 */}
                 <div className="editorial-row">
                    <div className="editorial-date">
                      <div style={{ color: '#c4cfde', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>2026</div>
                      <div style={{ color: '#878e99', fontSize: '13px', marginTop: '6px' }}>Preprint · Zenodo DOI</div>
                    </div>
                    <div>
                      <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px' }}>
                        <a href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>ORMAS: Three-Signal Learning — Zenodo DOI ↗</a>
                      </h3>
                      <p style={{ color: '#878e99', fontSize: '16px', lineHeight: '1.8', margin: 0, maxWidth: '620px' }}>
                        <strong style={{color: '#c4cfde'}}>ORMAS</strong>: structural transparency as a prerequisite for autonomous neural self-repair. First local-stability convergence proof for any self-correcting architecture (global convergence remains open). 383 experiments · 4 architectures · +70.3pp recovery gap where baselines permanently collapse.{' '}
                        <a href="#research" style={{ color: '#c4cfde', textDecoration: 'underline', fontWeight: 600 }}>Full technical details →</a>
                      </p>
                    </div>
                 </div>

                {/* Row 2 */}
                <div className="editorial-row">
                   <div className="editorial-date">
                     <div style={{ color: '#c4cfde', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>2024–2026</div>
                     <div style={{ color: '#878e99', fontSize: '13px', marginTop: '6px' }}>Research</div>
                   </div>
                   <div>
                     <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px' }}>383 Experiments. One GPU. One Room.</h3>
                     <p style={{ color: '#878e99', fontSize: '16px', lineHeight: '1.8', margin: 0, maxWidth: '620px' }}>
                       Three emergent results from one architectural decision: autonomous recovery from catastrophic structural collapse, noise robustness matching purpose-built methods, and zero-shot compositional generalization at <strong style={{color: '#c4cfde'}}>58.8% vs 25% chance</strong> — with no replay buffers, no architectural tricks. The mechanism scales from 637K to 11M parameters.
                     </p>
                   </div>
                </div>

                 {/* Row 3 */}
                 <div className="editorial-row">
                    <div className="editorial-date">
                      <div style={{ color: '#ff4a57', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="pulse-dot"></span> Active
                      </div>
                      <div style={{ color: '#878e99', fontSize: '13px', marginTop: '6px' }}>Next Phase</div>
                    </div>
                    <div>
                      <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px' }}>The Experiments Have Outgrown Single-GPU Capacity</h3>
                      <p style={{ color: '#878e99', fontSize: '16px', lineHeight: '1.8', margin: 0, maxWidth: '620px' }}>
                        Extending ORMAS to Transformer architectures and training Cherry — a self-correcting language model — requires institutional compute. The proof-of-concept is complete. The architecture is validated. What comes next requires a different infrastructure. That is what I am building toward.
                      </p>
                    </div>
                 </div>

                 {/* Row 4 — OXIDO Production Case Study */}
                 <div className="editorial-row" style={{ borderBottom: 'none' }}>
                    <div className="editorial-date">
                      <div style={{ color: '#c4cfde', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>2025–2026</div>
                      <div style={{ color: '#878e99', fontSize: '13px', marginTop: '6px' }}>Production Study</div>
                    </div>
                    <div>
                      <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px' }}>
                        £1,707.91. Zero CAC. 396 Customers. 10 Countries.
                      </h3>
                      <p style={{ color: '#878e99', fontSize: '16px', lineHeight: '1.8', margin: '0 0 20px 0', maxWidth: '620px' }}>
                        An 11-month controlled ablation study on a live UK-registered company — Black Bloxie LTD — where every commercial role is occupied by an AI agent. Full system removal caused a 91% revenue collapse. Re-injection delivered a 1,300% recovery. The causal chain is documented and reproducible.
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <a
                          href="/assets/pdf/oxido_academic_research_paper.pdf"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '10px 18px',
                            background: 'rgba(196,207,222,0.06)',
                            border: '1px solid rgba(196,207,222,0.15)',
                            borderRadius: '4px',
                            color: '#c4cfde',
                            fontSize: '12px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase',
                            textDecoration: 'none',
                          }}
                        >
                          <i className="fa-sharp fa-regular fa-file-lines" />
                          System Architecture Paper
                        </a>
                        <a
                          href="/assets/pdf/oxido_investor_whitepaper.pdf"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '10px 18px',
                            background: 'rgba(255,74,87,0.06)',
                            border: '1px solid rgba(255,74,87,0.18)',
                            borderRadius: '4px',
                            color: '#ff4a57',
                            fontSize: '12px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase',
                            textDecoration: 'none',
                          }}
                        >
                          <i className="fa-sharp fa-regular fa-chart-line" />
                          Commercial Evidence Report
                        </a>
                      </div>
                    </div>
                 </div>

               </div>

              {/* ── Loom Video — Embedded ── */}
              <div className="tmp-scroll-trigger tmp-fade-in animation-order-3">
                <style>{`
                  .loom-section {
                    border-top: 1px solid rgba(255,255,255,0.08);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    padding: 40px 0;
                  }
                  .loom-embed-wrap {
                    position: relative;
                    padding-top: 56.25%;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #111;
                  }
                  .loom-embed-wrap iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                  }
                `}</style>

                <div className="loom-section">
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#878e99', marginBottom: '14px' }}>
                    Presentation · 7 min 40 sec · 1.2× default
                  </p>
                  <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3, letterSpacing: '-0.3px' }}>
                    Explaining ORMAS: Transparent Neural Networks That Self-Heal
                  </h3>
                  <p style={{ color: '#878e99', fontSize: '16px', lineHeight: '1.8', margin: '0 0 28px 0', maxWidth: '600px' }}>
                    Autonomous recovery from catastrophic failure, emergent memory without replay buffers, and why architectural transparency is an engineering problem — not a philosophy question.
                  </p>

                  <div className="loom-embed-wrap">
                    <iframe
                      src="https://www.loom.com/embed/59caaa73445443cb8d345b4d594a8347"
                      allowFullScreen
                      title="Explaining ORMAS: Transparent Neural Networks That Self-Heal"
                    />
                  </div>
                </div>
              </div>


              <div className="tmp-scroll-trigger tmp-fade-in animation-order-4" style={{ marginTop: '40px' }}>
                <a href="#research" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#878e99', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', transition: 'color 0.3s ease' }}>
                  Read the Research
                  <i className="fa-sharp fa-regular fa-arrow-down" style={{ animation: 'bounce 2s infinite' }}></i>
                </a>
                <style>{`
                  @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                  }
                  a:hover { color: #ff4a57 !important; }
                `}</style>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
