export default function CVWorkEthic() {
  return (
    <div className="row mb--50" id="work-ethic">
      <style>{`
        /* ─── Personal Statement — scoped to .ps-* ─── */

        .ps-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 1100px) {
          .ps-layout { grid-template-columns: 1fr; gap: 32px; }
        }

        .ps-overline {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #6b7683;
          margin-bottom: 14px;
        }

        .ps-title {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 8px;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .ps-byline {
          font-size: 14px;
          color: #6b7683;
          margin-bottom: 36px;
          line-height: 1.6;
        }

        .ps-prose {
          font-size: 15px;
          line-height: 1.9;
          color: #9aa4b0;
          margin: 0 0 20px;
        }
        .ps-prose strong { color: #c4cfde; font-weight: 600; }

        .ps-pull {
          font-size: 16px;
          line-height: 1.75;
          color: #c4cfde;
          font-weight: 600;
          border-left: 2px solid rgba(255,255,255,0.15);
          padding: 6px 0 6px 20px;
          margin: 28px 0;
        }

        .ps-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 32px 0;
        }

        .ps-callout {
          background: rgba(196,207,222,0.045);
          border: 1px solid #2a2d32;
          border-left: 2px solid #c4cfde;
          border-radius: 0 8px 8px 0;
          padding: 18px 22px;
          margin: 24px 0;
          font-size: 15px;
          color: #9aa4b0;
          line-height: 1.8;
        }
        .ps-callout strong { color: #c4cfde; font-weight: 600; }

        .ps-sign {
          font-size: 13px;
          color: #6b7683;
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-style: italic;
        }

        /* ─── Right rail ─── */
        .ps-rail { display: flex; flex-direction: column; gap: 16px; }

        .ps-stat-tile {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 22px 24px;
        }
        .ps-stat-val {
          font-size: 32px;
          font-weight: 800;
          color: #c4cfde;
          line-height: 1.1;
          margin-bottom: 6px;
        }
        .ps-stat-lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #6b7683;
        }
        .ps-stat-sub {
          font-size: 13px;
          color: #9aa4b0;
          margin-top: 8px;
          line-height: 1.6;
        }

        .ps-evidence-block {
          background: #191b1e;
          border: 1px solid #2a2d32;
          border-radius: 8px;
          overflow: hidden;
        }
        .ps-evidence-header {
          padding: 10px 18px;
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b7683;
        }
        .ps-evidence-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 11px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          gap: 12px;
        }
        .ps-evidence-row:last-child { border-bottom: none; }
        .ps-evidence-key {
          font-size: 13px;
          color: #9aa4b0;
          flex: 1;
        }
        .ps-evidence-val {
          font-size: 13px;
          font-weight: 700;
          color: #c4cfde;
          text-align: right;
          white-space: nowrap;
        }

        .ps-sessions-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 14px;
        }
        .ps-session-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid #2a2d32;
          border-radius: 4px;
          padding: 7px 10px;
          color: #c4cfde;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .ps-session-link:hover {
          background: rgba(255,255,255,0.08);
          border-color: #c4cfde;
          color: #fff;
        }
      `}</style>

      <div className="col-12">

        <div className="ps-layout">

          {/* ── LEFT — Narrative ─────────────────────────────────── */}
          <div>
            <div className="ps-overline">Personal Statement</div>
            <h2 className="ps-title">
              On Obsession<br />and Independent Research
            </h2>
            <p className="ps-byline">
              Dhaka, Bangladesh · 18 · No university, no advisor, no lab.
            </p>

            {/* I — The Problem */}
            <p className="ps-prose">
              I did not set out to build a self-correcting neural architecture.
              I set out to build a system where AI agents could operate a
              company — hiring, executing, and coordinating without a human in the
              loop. That required training specialized models on real production
              data. And real production data, unlike any benchmark, is adversarial
              by default: contradictions, noise, missing signals, corrupt labels.
              Every state-of-the-art noise-handling method I tested — DivideMix,
              ProMix, CoDE — collapsed the moment the data stopped being curated.
            </p>

            <div className="ps-pull">
              The gap between research benchmarks and production reality is not a
              fine-tuning problem. It is a structural one.
            </div>

            <p className="ps-prose">
              The structural answer was architectural. Backpropagation has been
              unchanged since 1986 — a single global loss signal distributed
              uniformly across every node, with no mechanism for any node to
              evaluate its own state. A network trained on corrupted labels has
              no internal alarm system. It learns the wrong thing silently and
              confidently. I could not accept that as a constraint to engineer
              around. I decided to engineer the constraint out.
            </p>

            <hr className="ps-divider" />

            {/* II — The Architecture */}
            <p className="ps-prose">
              <strong>ORMAS</strong> is the result: a three-signal training
              architecture with per-node structural self-assessment. Every node
              maintains its own local loss anchor — a 4,416-parameter bottleneck
              that is mathematically incapable of memorizing noise. A health-gated
              correction engine monitors seven structural pathology types in real
              time and executes selective rollback with expert immunity. The
              network does not just train. It observes itself training.
            </p>

            <p className="ps-prose">
              Building this required going significantly below the level of
              standard ML engineering. Custom training loops. Custom telemetry
              that emits 23,000+ diagnostic signals per run, with every correction
              causally tagged to its pathology, node, and epoch. I derived an{' '}
              <strong>Input-to-State Stability (ISS) local stability characterization</strong>{' '}
              — the first formal stability result for any self-correcting neural
              architecture — and validated it empirically across 383 controlled
              experiments on four architectures, from 637K to 11M parameters, on
              a single RTX 3090.
            </p>

            <div className="ps-callout">
              <strong>The result that surprised me most was not the recovery.</strong>{' '}
              It was the emergence of zero-shot compositional generalization —
              training on shapes and colors separately, then testing on unseen
              combinations. ORMAS achieved 58.8% on novel pairings versus 25%
              chance, with no replay buffers, no architectural tricks. Neural
              networks can actually generalize. They just need internal structure
              that supports it.
            </div>

            <hr className="ps-divider" />

            {/* III — The Proof Outside the Lab */}
            <p className="ps-prose">
              <strong>OXIMO</strong>, the multi-agent operating system that
              originally motivated this research, is the empirical proof that the
              architecture works outside a controlled setting. I deployed it
              inside <strong>Black Bloxie LTD</strong>, a UK holding company I
              registered at seventeen, as a structured 12-month ablation study.
              Deploy, measure, remove, measure, re-inject, measure. Commercial
              output collapsed 91% on removal — simultaneously across all channels,
              ruling out market conditions as a variable. It recovered 1,300% on
              re-injection, and later closed a $4,386 order autonomously at $0.00
              acquisition cost. Every customer acquisition was driven entirely by LLM
              referral traffic — no ad spend, no human sales effort. The mechanism
              was confirmed causally, not merely correlated.
            </p>
            <p className="ps-prose">
              I stopped it there deliberately. The architecture was not the limit;
              the law was. No jurisdiction currently assigns commercial liability to
              an autonomous agent, and I was not willing to discover where that
              boundary sits by running a live company through it. Holding the study
              at research grade cost me the bigger number and bought me a clean
              result, which was the correct trade for what I was trying to prove.
            </p>

            <hr className="ps-divider" />

            {/* IV — The Work */}
            <p className="ps-prose">
              This work was produced with no university framework, no research
              group, no advisor, and no external funding. Every experiment ran on
              personal hardware. Every architectural decision was made alone.
            </p>

            <p className="ps-prose">
              I naturally work 14–16 hours a day. Out of curiosity — wondering
              if anyone else was doing the same — I decided to document it
              formally. For two weeks in November 2024, I livestreamed my daily
              workflow continuously, recording 28 sessions as live footage for a
              Guinness World Record application. The archive is below.
            </p>

            <hr className="ps-divider" />

            {/* V — What This Requires */}
            <p className="ps-prose">
              Working at this intensity without institutional support is not a
              sustainable research model. The constraint is not motivation — it
              never has been. The constraint is the absence of calibration:
              colleagues, advisors, and reviewers who compress iteration cycles
              and catch errors before they compound.
            </p>

            <p className="ps-prose" style={{ color: '#c4cfde', fontWeight: 600 }}>
              The infrastructure for the next phase of this research —
              Transformer-scale validation, Project Cherry, formal peer review
              of the ISS result — requires exactly the kind of institutional
              environment I have been building without. That is the direct and
              honest reason I am pursuing fellowships and research positions.
              Not for validation. For leverage.
            </p>

            <div className="ps-sign">
              Rokib Al Dhin Raadh — Dhaka, Bangladesh — 2026
            </div>
          </div>

          {/* ── RIGHT — Evidence Rail ─────────────────────────────── */}
          <div className="ps-rail">

            <div className="ps-stat-tile">
              <div className="ps-stat-val">383</div>
              <div className="ps-stat-lbl">Controlled Experiments</div>
              <div className="ps-stat-sub">Single RTX 3090 · 4 architectures · 6 noise regimes</div>
            </div>

            <div className="ps-stat-tile">
              <div className="ps-stat-val">+70.3pp</div>
              <div className="ps-stat-lbl">Recovery Gap</div>
              <div className="ps-stat-sub">ORMAS vs. standard baseline after dead-layer attack. Standard: permanent collapse to 10%.</div>
            </div>

            <div className="ps-stat-tile">
              <div className="ps-stat-val">−91% / +1,300%</div>
              <div className="ps-stat-lbl">Ablation Signal · Black Bloxie</div>
              <div className="ps-stat-sub">On OXIMO removal / on re-injection. 12-month study. Causal, not correlational.</div>
            </div>

            <div className="ps-evidence-block">
              <div className="ps-evidence-header">Study Parameters</div>
              {[
                ['Duration', '12 months'],
                ['Architecture', 'ORMAS + OXIMO'],
                ['Substrate', 'E-commerce (Substrate 1)'],
                ['Ad Spend', '£0'],
                ['Human Sales Hrs', '0'],
                ['Largest Auto Order', '$4,386'],
                ['Scale Ceiling', 'Self-imposed'],
                ['Protocol', 'Inject → Remove → Re-inject'],
              ].map(([k, v]) => (
                <div key={k} className="ps-evidence-row">
                  <span className="ps-evidence-key">{k}</span>
                  <span className="ps-evidence-val">{v}</span>
                </div>
              ))}
            </div>

            <div className="ps-evidence-block">
              <div className="ps-evidence-header">Work Archive — Nov 2024 · 28 Sessions</div>
              <div style={{ padding: '14px 18px' }}>
                <p style={{ fontSize: '12px', color: '#9aa4b0', marginBottom: '12px', lineHeight: '1.6' }}>
                  Unlisted livestreams recorded for the Guinness application. Unfiltered daily workflow footage.
                </p>
                <div className="ps-sessions-grid">
                  {[
                    { id: '9L1WZ9PO-bI', n: '01' }, { id: 'JW-WqB52ugo', n: '02' },
                    { id: 'NWz7uzN_NNQ', n: '03' }, { id: '2rbk0J3jp6Q', n: '04' },
                    { id: 'hBwS1rivWPA', n: '05' }, { id: 'n7KlERWehl4', n: '06' },
                    { id: 'kjVlV4BVDyA', n: '07' }, { id: '-fH4VMbQOfk', n: '08' },
                    { id: '5O2FrndmxFo', n: '09' }, { id: '7OEl6Mqjjds', n: '10' },
                    { id: 'nMUVMgR0uHQ', n: '11' }, { id: 'TDNlIncP5O8', n: '12' },
                    { id: 'uO_3atbGzZ8', n: '13' }, { id: 'xvJT0aOYcgI', n: '14' },
                    { id: '1o0g0PJMtsg', n: '15' }, { id: '71q_4imOHRM', n: '16' },
                    { id: 'TDSZk97LuNY', n: '17' }, { id: 'E8I3CzBsyQ8', n: '18' },
                    { id: 'U88sFQVsebo', n: '19' }, { id: 'IDEvtbip5eE', n: '20' },
                    { id: 'v_5z8SeqVO4', n: '21' }, { id: '4bKiT3zLVvM', n: '22' },
                    { id: '4S4p5EBxfXE', n: '23' }, { id: 'ytJxIxFwYz8', n: '24' },
                    { id: 'kLduxS4BvJQ', n: '25' }, { id: 'O6Ou5i-5pCo', n: '26' },
                    { id: 'FX7Qb8-foOQ', n: '27' }, { id: 'QcKAifqnTCw', n: '28' },
                  ].map(({ id, n }) => (
                    <a
                      key={id}
                      className="ps-session-link"
                      href={`https://youtube.com/live/${id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {n}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
      </div>
    </div>
  );
}
