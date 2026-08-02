export default function CVWorkEthic() {
  return (
    <div className="row mb--50" id="work-ethic">
      <style>{`
        .ps-wrap { max-width: 720px; }
        .ps-overline {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a5568;
          margin-bottom: 14px;
        }
        .ps-prose {
          font-size: 16px;
          line-height: 1.9;
          color: #878e99;
          margin: 0 0 22px;
        }
        .ps-prose strong { color: #c4cfde; font-weight: 600; }
        .ps-pull {
          font-size: 18px;
          line-height: 1.75;
          color: #c4cfde;
          font-weight: 600;
          border-left: 2px solid rgba(255,255,255,0.15);
          padding: 4px 0 4px 24px;
          margin: 36px 0;
        }
        .ps-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 42px 0;
        }
        .ps-stat-row {
          display: flex;
          gap: 12px;
          margin: 32px 0;
          flex-wrap: wrap;
        }
        .ps-stat-tile {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 20px 26px;
          flex: 1;
          min-width: 150px;
        }
        .ps-stat-val {
          font-size: 24px;
          font-weight: 800;
          color: #c4cfde;
          line-height: 1.15;
          margin-bottom: 6px;
        }
        .ps-stat-lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #4a5568;
        }
        .ps-declined-val {
          font-size: 24px;
          font-weight: 800;
          color: #878e99;
          line-height: 1.15;
          margin-bottom: 6px;
          text-decoration: line-through;
          text-decoration-color: #4a5568;
        }
        .ps-callout {
          background: rgba(255,255,255,0.02);
          border: 1px solid #2a2d32;
          border-left: 2px solid #c4cfde;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          margin: 32px 0;
          font-size: 15px;
          color: #878e99;
          line-height: 1.8;
        }
        .ps-callout strong { color: #c4cfde; font-weight: 600; }
        .ps-video-wrap {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 10px;
          overflow: hidden;
          margin: 36px 0;
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          color: #4a5568;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
        }
        .ps-sign {
          font-size: 13px;
          color: #4a5568;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-style: italic;
        }
      `}</style>

      <div className="col-12">
        <div className="ps-wrap">

          <div className="ps-overline">Personal Statement</div>
          <h2 className="title fs-2" style={{ fontWeight: 800, color: '#fff', marginBottom: '8px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
            On Obsession<br />and Independent Research
          </h2>
          <p style={{ fontSize: '15px', color: '#4a5568', marginBottom: '44px', lineHeight: '1.6' }}>
            Dhaka, Bangladesh · 18 · No university, no advisor, no lab.
          </p>

          {/* I — The Problem */}
          <p className="ps-prose">
            I did not set out to build a self-correcting neural architecture.
            I set out to build a system where AI agents could actually operate a company —
            hiring, executing, and coordinating without a human in the loop.
            That required training specialized models on real production data.
            And real production data, unlike any benchmark, is adversarial by default:
            contradictions, noise, missing signals, corrupt labels.
            Every state-of-the-art noise-handling method I tested — DivideMix, ProMix,
            CoDE — collapsed the moment the data stopped being curated.
          </p>

          <div className="ps-pull">
            The gap between research benchmarks and production reality is not a
            fine-tuning problem. It is a structural one.
          </div>

          <p className="ps-prose">
            The structural answer was architectural. Backpropagation has been unchanged
            since 1986 — a single global loss signal distributed uniformly across every
            node, with no mechanism for any node to evaluate its own state. A network
            trained on corrupted labels has no internal alarm system. It learns the wrong
            thing silently and confidently. I could not accept that as a constraint to
            engineer around. I decided to engineer the constraint out.
          </p>

          {/* II — The Architecture */}
          <hr className="ps-divider" />

          <p className="ps-prose">
            <strong>ORMAS</strong> is the result: a three-signal training architecture
            with per-node structural self-assessment. Every node maintains its own local
            loss anchor — a 4,416-parameter bottleneck that is mathematically incapable
            of memorizing noise. A health-gated correction engine monitors seven structural
            pathology types in real time and executes selective rollback with expert immunity.
            The network does not just train. It observes itself training.
          </p>

          <p className="ps-prose">
            Building this required going significantly below the level of standard
            ML engineering. Custom training loops. Custom telemetry that emits 23,000+
            diagnostic signals per run, with every correction causally tagged to its
            pathology, node, and epoch. I derived and proved an{' '}
            <strong>Input-to-State Stability (ISS) convergence guarantee</strong> — the
            first formal stability proof for any self-correcting neural architecture —
            and validated it empirically across 383 controlled experiments on four
            architectures, from 637K to 11M parameters, on a single RTX 3090.
          </p>

          <div className="ps-callout">
            <strong>The result that surprised me most was not the recovery.</strong> It was
            the emergence of zero-shot compositional generalization — training on shapes and
            colors separately, then testing on unseen combinations. ORMAS achieved 58.8%
            on novel pairings versus 25% chance, with no replay buffers, no architectural
            tricks. Neural networks can actually generalize. They just need internal structure
            that supports it.
          </div>

          {/* III — The Proof Outside the Lab */}
          <hr className="ps-divider" />

          <p className="ps-prose">
            <strong>OXIMO</strong>, the multi-agent operating system that originally motivated
            this research, is the empirical proof that the architecture works outside a
            controlled setting. I deployed it inside{' '}
            <strong>Black Bloxie LTD</strong>, a UK holding company I registered at
            seventeen, as a live longitudinal study across e-commerce. The ablation was
            structured and deliberate: deploy, measure, remove, measure, re-inject, measure.
            Revenue dropped 91% on removal. It recovered 1,300% on re-injection.
            Every customer acquisition was driven entirely by LLM referral traffic —
            no ad spend, no human sales effort. The mechanism was confirmed, not
            merely correlated.
          </p>

          {/* IV — The Work */}
          <hr className="ps-divider" />

          <p className="ps-prose">
            This work was produced with no university framework, no research group,
            no advisor, and no external funding. Every experiment ran on personal
            hardware. Every architectural decision was made alone.
          </p>

          <p className="ps-prose">
            For over two years I maintained a{' '}
            <strong>documented 14–16 hour daily working schedule</strong> — continuous,
            not occasional. Every working day was livestreamed unlisted on YouTube:
            timestamped, continuous footage, independently verifiable.
            The archive was submitted as a Guinness World Record application for
            sustained documented research productivity.
          </p>

          <div className="ps-stat-row">
            <div className="ps-stat-tile">
              <div className="ps-stat-val">14–16 hrs</div>
              <div className="ps-stat-lbl">Daily · 2+ Yrs · Documented</div>
            </div>
            <div className="ps-stat-tile">
              <div className="ps-stat-val">28</div>
              <div className="ps-stat-lbl">Archive Sessions · Nov 2024 · Verified</div>
            </div>
          </div>

          <p className="ps-prose">
            The point was never the certificate. The point was the verifiable record.
            The livestream archive is available to any reviewer who wants to understand
            how this volume of work was produced without institutional infrastructure.
          </p>

          {/* Work Archive */}
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5568', marginBottom: '16px' }}>
              Guinness Submission Archive — 28 Sessions · Nov 2024 · OXIMO Development · <em>Application submitted; outcome pending</em>
            </p>

            <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '14px', color: '#878e99', marginBottom: '20px', lineHeight: '1.6' }}>
                All 28 continuous daily sessions are unlisted and archived on YouTube. The full continuous log is available below for verification.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { id: '9L1WZ9PO-bI',  n: '01' },
                  { id: 'JW-WqB52ugo',  n: '02' },
                  { id: 'NWz7uzN_NNQ',  n: '03' },
                  { id: '2rbk0J3jp6Q',  n: '04' },
                  { id: 'hBwS1rivWPA',  n: '05' },
                  { id: 'n7KlERWehl4',  n: '06' },
                  { id: 'kjVlV4BVDyA',  n: '07' },
                  { id: '-fH4VMbQOfk',  n: '08' },
                  { id: '5O2FrndmxFo',  n: '09' },
                  { id: '7OEl6Mqjjds',  n: '10' },
                  { id: 'nMUVMgR0uHQ',  n: '11' },
                  { id: 'TDNlIncP5O8',  n: '12' },
                  { id: 'uO_3atbGzZ8',  n: '13' },
                  { id: 'xvJT0aOYcgI',  n: '14' },
                  { id: '1o0g0PJMtsg',  n: '15' },
                  { id: '71q_4imOHRM',  n: '16' },
                  { id: 'TDSZk97LuNY',  n: '17' },
                  { id: 'E8I3CzBsyQ8',  n: '18' },
                  { id: 'U88sFQVsebo',  n: '19' },
                  { id: 'IDEvtbip5eE',  n: '20' },
                  { id: 'v_5z8SeqVO4',  n: '21' },
                  { id: '4bKiT3zLVvM',  n: '22' },
                  { id: '4S4p5EBxfXE',  n: '23' },
                  { id: 'ytJxIxFwYz8',  n: '24' },
                  { id: 'kLduxS4BvJQ',  n: '25' },
                  { id: 'O6Ou5i-5pCo',  n: '26' },
                  { id: 'FX7Qb8-foOQ',  n: '27' },
                  { id: 'QcKAifqnTCw',  n: '28' },
                ].map(({ id, n }) => (
                  <a
                    key={id}
                    href={`https://youtube.com/live/${id}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid #2a2d32',
                      borderRadius: '4px',
                      padding: '8px 12px',
                      color: '#c4cfde',
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.borderColor = '#c4cfde';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = '#2a2d32';
                    }}
                  >
                    SESSION {n} <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '6px', fontSize: '10px', color: '#878e99' }}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* V — What This Requires */}
          <hr className="ps-divider" />

          <p className="ps-prose">
            Working at this intensity without institutional support is not a sustainable
            research model. The constraint is not motivation — it never has been.
            The constraint is the absence of calibration: colleagues, advisors, and reviewers
            who compress iteration cycles and catch errors before they compound.
          </p>

          <p className="ps-prose" style={{ color: '#c4cfde', fontWeight: 600 }}>
            The infrastructure for the next phase of this research —
            Transformer-scale validation, Project Cherry, formal peer review of the
            ISS proof — requires exactly the kind of institutional environment
            I have been building without. That is the direct and honest reason
            I am pursuing fellowships and research positions.
            Not for validation. For leverage.
          </p>

          <div className="ps-sign">
            Rokib Al Dhin Raadh — Dhaka, Bangladesh — 2026
          </div>

        </div>
      </div>

      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
      </div>
    </div>
  );
}
