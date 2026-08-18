import Icon from '@/components/common/Icon';

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
        .hero-doi-link {
          display: inline-flex; align-items: center; gap: 9px;
          color: #fff; text-decoration: none;
          transition: color 0.25s ease;
        }
        .hero-doi-link:hover { color: #c4cfde; }
        .hero-doi-link svg { opacity: 0.55; transition: opacity 0.25s ease, transform 0.25s ease; }
        .hero-doi-link:hover svg { opacity: 1; transform: translate(2px, -2px); }
        .hero-cta {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 11px 18px; border-radius: 6px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.8px;
          text-transform: uppercase; text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .hero-cta:hover { transform: translateY(-2px); }
        .hero-cta-a { background: rgba(196,207,222,0.07); border: 1px solid rgba(196,207,222,0.22); color: #c4cfde; }
        .hero-cta-a:hover { background: rgba(196,207,222,0.13); border-color: rgba(196,207,222,0.45); color: #e8edf4; }
        .hero-cta-b { background: rgba(255,74,87,0.08); border: 1px solid rgba(255,74,87,0.3); color: #ff6b76; }
        .hero-cta-b:hover { background: rgba(255,74,87,0.15); border-color: rgba(255,74,87,0.55); color: #ff8a93; }
        @media (prefers-reduced-motion: reduce) { .hero-cta:hover { transform: none; } }
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
                <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#9aa4b0', marginBottom: '20px' }}>
                  Independent AI Research — Dhaka, Bangladesh
                </p>
                <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: '24px', lineHeight: '1.15' }}>
                  Neural networks fail opaquely.<br />
                  <span style={{ color: '#c4cfde' }}>I built an architecture that changes that.</span>
                </h1>

                {/* Age line — large, on-system */}
                <p className="hero-age">
                  <span className="hero-age-num">18</span>years old. No university, no advisor,
                  no lab, no funding.
                </p>
                <style>{`
                  .hero-age {
                    max-width: 620px;
                    margin: 0 0 28px;
                    padding: 22px 0;
                    border-top: 1px solid rgba(255,255,255,0.08);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    font-size: clamp(16px, 1.7vw, 20px);
                    font-weight: 500;
                    color: #c4cfde;
                    line-height: 1.75;
                  }
                  .hero-age-num {
                    font-size: clamp(38px, 4.6vw, 52px);
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -1.5px;
                    line-height: 1;
                    margin-right: 10px;
                  }
                `}</style>

                <p style={{ fontSize: '18px', color: '#9aa4b0', maxWidth: '620px', margin: 0, lineHeight: '1.7' }}>
                  ORMAS · OXIMO · OXIDO. Three systems. One research program. The work is documented, reproducible, and running in production.
                </p>
              </div>

              {/* Editorial List */}
              <div className="tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                
                {/* Row 1 */}
                 <div className="editorial-row">
                    <div className="editorial-date">
                      <div style={{ color: '#c4cfde', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>2026</div>
                      <div style={{ color: '#9aa4b0', fontSize: '13px', marginTop: '6px' }}>Preprint · Zenodo DOI</div>
                    </div>
                    <div>
                      <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px' }}>
                        <a href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer" className="hero-doi-link">ORMAS: Three-Signal Learning — Zenodo DOI<Icon name="externalLink" size={16} /></a>
                      </h3>
                      <p style={{ color: '#9aa4b0', fontSize: '17px', lineHeight: '1.8', margin: 0, maxWidth: '620px' }}>
                        <strong style={{color: '#c4cfde'}}>ORMAS</strong>: a neural network that reports its own damage and repairs itself mid-training. First formal local stability characterization for any self-correcting architecture (global convergence remains open). 383 experiments · 4 architectures · +70.3pp recovery gap where baselines permanently collapse.{' '}
                        <a href="#research" style={{ color: '#c4cfde', textDecoration: 'underline', fontWeight: 600 }}>Full technical details →</a>
                      </p>
                    </div>
                 </div>

                {/* Row 2 — Ablation Proof + Active Engineering */}
                 <div className="editorial-row" style={{ borderBottom: 'none' }}>
                    <div className="editorial-date">
                      <div style={{ color: '#ff4a57', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="pulse-dot"></span> Active
                      </div>
                      <div style={{ color: '#9aa4b0', fontSize: '13px', marginTop: '6px' }}>2025 → Now</div>
                    </div>
                    <div>
                      <p style={{ color: '#ff4a57', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
                        This Is Not a Business. It Is a Controlled Experiment.
                      </p>
                      <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px' }}>
                        I Registered a Company to Try to Disprove My Own Architecture.
                      </h3>
                      <p style={{ color: '#9aa4b0', fontSize: '17px', lineHeight: '1.8', margin: '0 0 14px 0', maxWidth: '620px' }}>
                        Twelve months, one live UK-registered entity, seven escalating tests designed so I could fail each one in public — strip the architecture out and demand collapses, put it back and demand overshoots, then hand it something expensive to close on its own. <strong style={{color: '#c4cfde'}}>Every rung is answered on the record.</strong>{' '}
                        <a href="#deployment" style={{ color: '#c4cfde', textDecoration: 'underline', fontWeight: 600 }}>Read all seven, in order →</a>
                      </p>
                      <p style={{ color: '#9aa4b0', fontSize: '15px', lineHeight: '1.8', margin: '0 0 14px 0', maxWidth: '620px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                        <strong style={{color: '#c4cfde'}}>What I am building next:</strong> porting per-node structural health monitoring onto attention heads (ORMAS-T), then training Cherry — a self-correcting language model from scratch.
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <a href="/assets/pdf/oxido_academic_research_paper.pdf" target="_blank" rel="noreferrer" className="hero-cta hero-cta-a">
                          <Icon name="fileText" size={15} />
                          System Architecture Paper
                        </a>
                        <a href="/assets/pdf/oxido_investor_whitepaper.pdf" target="_blank" rel="noreferrer" className="hero-cta hero-cta-b">
                          <Icon name="chart" size={15} />
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
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#9aa4b0', marginBottom: '14px' }}>
                    Presentation · 7 min 40 sec · 1.2× default
                  </p>
                  <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3, letterSpacing: '-0.3px' }}>
                    Explaining ORMAS: Transparent Neural Networks That Self-Heal
                  </h3>
                  <p style={{ color: '#9aa4b0', fontSize: '17px', lineHeight: '1.8', margin: '0 0 28px 0', maxWidth: '600px' }}>
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
                <a href="#research" className="hero-scroll-cue">
                  Read the Research
                  <span className="hero-scroll-cue-icon"><Icon name="arrowDown" size={15} /></span>
                </a>
                <style>{`
                  .hero-scroll-cue {
                    display: inline-flex; align-items: center; gap: 10px;
                    color: #9aa4b0; font-size: 13px; font-weight: 700;
                    letter-spacing: 1px; text-transform: uppercase;
                    text-decoration: none; transition: color 0.25s ease;
                  }
                  .hero-scroll-cue:hover { color: #c4cfde; }
                  .hero-scroll-cue-icon { animation: heroBounce 2s infinite; }
                  @keyframes heroBounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-7px); }
                    60% { transform: translateY(-3px); }
                  }
                  @media (prefers-reduced-motion: reduce) {
                    .hero-scroll-cue-icon { animation: none; }
                  }
                `}</style>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
