import ExpandableSection from '../ExpandableSection';

const ventures = [
  {
    title: 'Software Services',
    age: 'Age 12–14',
    lesson: 'I could build the thing. I could not get it in front of anyone. Distribution without institutional credibility or a network is not a technical problem, and enterprise procurement does not route on technical merit alone.',
  },
  {
    title: 'Cold-Call Automation — European Markets',
    age: 'Age 14–15',
    lesson: 'Automation handled 90% of the sales cycle reliably. The last 10% — the close — needed a human in the room, every time. Trust in an autonomous agent has a hard ceiling at the transaction, and that ceiling became a design constraint I carried into OXIMO.',
  },
  {
    title: 'US-Targeted Digital Marketing',
    age: 'Age 15',
    lesson: 'I assumed the bottleneck was distribution. It was production. I did not need something that could move content around; I needed something that could make it at volume.',
  },
  {
    title: 'Organic E-Commerce',
    age: 'Age 15–16',
    lesson: 'Optimising pricing, or listings, or marketing individually buys you a few percent. The real problem is coordinating research, listing, pricing, fulfilment, and service at once. One person cannot be the whole system, however hard they work.',
  },
  {
    title: 'Automation Tooling',
    age: 'Age 16–17',
    lesson: 'The last one confirmed what the previous four had been telling me: the bottleneck was never individual capability. It was always coordination.',
  },
];

const problemToArchitecture = [
  { from: 'Cannot distribute at scale', to: 'OXIMO — agents that self-hire specialists' },
  { from: 'Agents break at closing', to: 'OXIMO — memory-persistent Expert agents' },
  { from: 'Production data is adversarial', to: 'ORMAS — health-gated self-correction' },
  { from: 'No structural stability guarantee', to: 'ISS local stability characterization' },
];

const skillGroups = [
  {
    title: 'Machine Learning',
    tags: ['PyTorch', 'CNN / ResNet / DAG', 'Transformers', 'PCGrad Gradient Surgery', 'Convergence Theory', 'Noise-Robust Training'],
  },
  {
    title: 'Systems Engineering',
    tags: ['Multi-Agent Orchestration', 'Constructor Injection', 'Atomic Rollback', '3-Tier Memory', 'Adversarial Filtering', 'Graph-of-Thoughts Planning'],
  },
  {
    title: 'Infrastructure & Web',
    tags: ['Docker', 'FastAPI', 'Prometheus', 'SSE Streaming', 'HMAC Webhooks', 'CI/CD', 'Pydantic', 'SQLAlchemy Async', 'ChromaDB', 'React / TS / Web3'],
  },
  {
    title: 'Programming Languages',
    tags: ['Python (Advanced / Production)', 'C++', 'LaTeX'],
  },
  {
    title: 'Spoken Languages',
    tags: ['English (Fluent)', 'Bengali (Native)'],
  },
];

const detailGroups = [
  {
    title: 'Foundation',
    rows: [
      { label: 'Institutional Affiliation', value: 'None' },
      { label: 'External Funding', value: '$0' },
      { label: 'IP Ownership', value: '100%' },
    ],
  },
  {
    title: 'ORMAS Project',
    rows: [
      { label: 'Codebase', value: '10,594 lines · 61 files · PyTorch' },
      { label: 'Hardware (Experiments)', value: 'Single RTX 3090' },
      { label: 'Hardware (Personal)', value: 'RTX 4090' },
      { label: 'Controlled Experiments', value: '383 · 4 architectures · 6 noise regimes' },
      { label: 'Parameter Range Tested', value: '637K – 11.24M' },
    ],
  },
  {
    title: 'OXIMO OS',
    rows: [
      { label: 'Production Code', value: '40,933 lines · 11 mini-repos' },
      { label: 'Test Suite', value: '2,011 passing · 0 failures' },
      { label: 'Refactor', value: '72% reduction from 106K-line monolith' },
    ],
  },
  {
    title: 'Black Bloxie LTD — Study Parameters',
    rows: [
      { label: 'Study Duration', value: '12 months · Substrate 1 complete' },
      { label: 'Protocol', value: 'Inject → Remove → Re-inject' },
      { label: 'Ablation Signal', value: '−91% on removal · +1,300% on re-injection' },
      { label: 'Single Test Order (Not Revenue)', value: '$4,386 · $0.00 acquisition cost' },
      { label: 'Advertising Spend', value: '£0' },
      { label: 'Human Sales Hours', value: '0' },
      { label: 'Infrastructure Cost', value: '99% reduction via specialized agent cascade' },
      { label: 'Scale Ceiling', value: 'Self-imposed — regulatory, not architectural' },
    ],
  },
];

const sessions = [
  '9L1WZ9PO-bI', 'JW-WqB52ugo', 'NWz7uzN_NNQ', '2rbk0J3jp6Q', 'hBwS1rivWPA',
  'n7KlERWehl4', 'kjVlV4BVDyA', '-fH4VMbQOfk', '5O2FrndmxFo', '7OEl6Mqjjds',
  'nMUVMgR0uHQ', 'TDNlIncP5O8', 'uO_3atbGzZ8', 'xvJT0aOYcgI', '1o0g0PJMtsg',
  '71q_4imOHRM', 'TDSZk97LuNY', 'E8I3CzBsyQ8', 'U88sFQVsebo', 'IDEvtbip5eE',
  'v_5z8SeqVO4', '4bKiT3zLVvM', '4S4p5EBxfXE', 'ytJxIxFwYz8', 'kLduxS4BvJQ',
  'O6Ou5i-5pCo', 'FX7Qb8-foOQ', 'QcKAifqnTCw',
];

export default function CVOriginStatement() {
  return (
    <div className="row mb--50" id="journey">
      <style>{`
        /* ─── Merged Origin + Personal Statement — scoped to .os-* ─── */

        .os-head { max-width: 760px; margin-bottom: 34px; }
        .os-overline {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #838d99; margin-bottom: 14px;
        }
        .os-title {
          font-size: clamp(27px, 3.2vw, 40px); font-weight: 800; color: #fff;
          margin: 0 0 10px; letter-spacing: -0.5px; line-height: 1.14;
        }
        .os-byline { font-size: 14px; color: #838d99; margin-bottom: 22px; line-height: 1.6; }
        .os-lead { font-size: 17px; line-height: 1.8; color: #9aa4b0; margin: 0; }
        .os-lead strong { color: #c4cfde; font-weight: 600; }

        /* Evidence band */
        .os-band {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px; margin-bottom: 54px;
        }
        .os-band-cell {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 8px; padding: 18px 20px;
        }
        .os-band-val {
          font-size: 24px; font-weight: 800; color: #c4cfde;
          line-height: 1.1; margin-bottom: 5px;
        }
        .os-band-lbl {
          font-size: 10px; font-weight: 700; letter-spacing: 1.4px;
          text-transform: uppercase; color: #838d99; line-height: 1.4;
        }

        /* Act markers */
        .os-act { margin-bottom: 22px; padding-top: 8px; }
        .os-act-num {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #838d99; margin-bottom: 8px;
        }
        .os-act-title {
          font-size: clamp(20px, 2.2vw, 25px); font-weight: 700;
          color: #c4cfde; margin: 0; line-height: 1.25;
        }
        .os-rule {
          border: none; border-top: 1px solid rgba(255,255,255,0.07);
          margin: 52px 0 0;
        }

        /* Prose */
        .os-body { max-width: 760px; }
        .os-p {
          font-size: 15.5px; line-height: 1.9; color: #9aa4b0; margin: 0 0 20px;
        }
        .os-p strong { color: #c4cfde; font-weight: 600; }
        .os-p:last-child { margin-bottom: 0; }
        .os-pull {
          font-size: 17px; line-height: 1.7; color: #c4cfde; font-weight: 600;
          border-left: 2px solid rgba(255,255,255,0.2);
          padding: 4px 0 4px 22px; margin: 30px 0;
        }
        .os-callout {
          background: rgba(196,207,222,0.045);
          border: 1px solid #2a2d32; border-left: 2px solid #c4cfde;
          border-radius: 0 8px 8px 0; padding: 22px 26px; margin: 28px 0;
        }
        .os-callout-lead {
          font-size: 16px; line-height: 1.7; color: #c4cfde;
          font-weight: 600; margin: 0 0 11px;
        }
        .os-callout p { font-size: 14.5px; line-height: 1.8; color: #9aa4b0; margin: 0 0 10px; }
        .os-callout p:last-child { margin-bottom: 0; }
        .os-callout strong { color: #c4cfde; font-weight: 600; }

        /* Foundation cards */
        .os-found {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 34px;
        }
        @media (max-width: 700px) { .os-found { grid-template-columns: 1fr; } }
        .os-card {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 8px; padding: 22px 24px; transition: border-color 0.25s;
        }
        .os-card:hover { border-color: rgba(255,255,255,0.12); }
        .os-card-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99; margin-bottom: 10px;
        }
        .os-card-body { font-size: 14px; line-height: 1.75; color: #9aa4b0; margin: 0; }
        .os-card-body strong { color: #c4cfde; }

        /* Ventures */
        .os-venture-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; }
        .os-venture {
          display: grid; grid-template-columns: 104px 1fr; gap: 18px;
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 8px;
          padding: 18px 22px; align-items: start; transition: border-color 0.25s;
        }
        .os-venture:hover { border-color: rgba(255,255,255,0.1); }
        @media (max-width: 620px) {
          .os-venture { grid-template-columns: 1fr; gap: 7px; }
        }
        .os-venture-age {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #838d99; padding-top: 3px;
        }
        .os-venture-title {
          font-size: 13.5px; font-weight: 700; color: #c4cfde;
          margin-bottom: 6px; letter-spacing: 0.2px;
        }
        .os-venture-lesson { font-size: 13.5px; line-height: 1.72; color: #9aa4b0; }

        /* Problem → architecture map */
        .os-map { border: 1px solid #2a2d32; border-radius: 8px; overflow: hidden; }
        .os-map-head {
          padding: 10px 18px; background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32; font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase; color: #838d99;
        }
        .os-map-row {
          display: grid; grid-template-columns: 1fr auto 1fr; gap: 14px;
          align-items: center; padding: 13px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.04); background: #191b1e;
        }
        .os-map-row:last-child { border-bottom: none; }
        @media (max-width: 620px) {
          .os-map-row { grid-template-columns: 1fr; gap: 4px; }
          .os-map-arrow { display: none; }
        }
        .os-map-from { font-size: 13px; color: #c4cfde; font-weight: 600; }
        .os-map-arrow { color: #838d99; font-size: 13px; }
        .os-map-to { font-size: 13px; color: #9aa4b0; }

        /* Reference tables */
        .os-detail {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 8px; overflow: hidden; margin-bottom: 14px;
        }
        .os-detail-head {
          padding: 10px 20px; background: rgba(255,255,255,0.02);
          border-bottom: 1px solid #2a2d32; font-size: 11px; color: #9aa4b0;
          text-transform: uppercase; letter-spacing: 2px; font-weight: 700;
        }
        .os-detail-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 13px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); gap: 20px;
        }
        .os-detail-row:last-child { border-bottom: none; }
        .os-detail-label { color: #c4cfde; font-weight: 500; font-size: 14px; }
        .os-detail-value { color: #9aa4b0; font-size: 14px; text-align: right; }

        /* Skills */
        .os-skill-block {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 8px; padding: 22px 26px; margin-bottom: 12px;
        }
        .os-skill-label {
          font-size: 11px; text-transform: uppercase; letter-spacing: 2px;
          color: #9aa4b0; font-weight: 700; margin-bottom: 15px;
        }
        .os-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .os-tag {
          background: rgba(255,255,255,0.04); color: #c4cfde;
          padding: 6px 14px; border-radius: 4px; font-size: 13px;
          font-weight: 500; border: 1px solid #2a2d32;
        }

        /* Sessions */
        .os-sessions { display: flex; flex-wrap: wrap; gap: 6px; }
        .os-session {
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.03); border: 1px solid #2a2d32;
          border-radius: 4px; padding: 8px 12px; color: #c4cfde;
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.8px;
          text-decoration: none; transition: all 0.2s;
        }
        .os-session:hover {
          background: rgba(255,255,255,0.08); border-color: #c4cfde; color: #fff;
        }

        /* Missing table */
        .os-needs { width: 100%; border-collapse: collapse; }
        .os-needs th {
          padding: 12px 20px; text-align: left; color: #c4cfde; font-size: 11px;
          font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          border-bottom: 1px solid #2a2d32;
        }
        .os-needs td {
          padding: 15px 20px; font-size: 14px; color: #9aa4b0; line-height: 1.7;
          border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: top;
        }
        .os-needs td:first-child { color: #c4cfde; font-weight: 600; }
        .os-needs tr:last-child td { border-bottom: none; }

        .os-close {
          background: rgba(196,207,222,0.06); border: 1px solid #343941;
          border-radius: 10px; padding: 26px 30px; margin-top: 26px;
        }
        .os-close p {
          font-size: 17px; line-height: 1.75; color: #c4cfde;
          font-weight: 600; margin: 0;
        }
        .os-sign {
          font-size: 13px; color: #838d99; margin-top: 30px; padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.06); font-style: italic;
        }
      `}</style>

      <div className="col-12">

        {/* ══ HEADER ══════════════════════════════════════════════ */}
        <div className="os-head">
          <div className="os-overline">Origin &amp; Personal Statement</div>
          <h2 className="os-title">On Obsession and Independent Research</h2>
          <p className="os-byline">Dhaka, Bangladesh · 18 · No university, no advisor, no lab.</p>
          <p className="os-lead">
            Every system on this page came out of something that went wrong first. I did not start
            with research and go looking for problems — the problems came first, and none of this was
            planned. <strong>Nothing here was designed as part of a grand plan. Each piece exists
            because the one before it hit a wall I could not engineer around.</strong>
          </p>
        </div>

        <div className="os-band">
          {[
            { v: '5', l: 'Ventures · Ages 12–17' },
            { v: '$10K', l: 'First Exit · Age 15' },
            { v: '383', l: 'Controlled Experiments' },
            { v: '+70.3 pp', l: 'Recovery Gap vs Baseline' },
            { v: '−91% / +1,300%', l: 'Ablation Signal · 12 Months' },
          ].map((s, i) => (
            <div key={i} className="os-band-cell">
              <div className="os-band-val">{s.v}</div>
              <div className="os-band-lbl">{s.l}</div>
            </div>
          ))}
        </div>

        {/* ══ ACT I ═══════════════════════════════════════════════ */}
        <div className="os-act">
          <div className="os-act-num">Part One</div>
          <h3 className="os-act-title">Five Ventures. Five Failure Modes. One Finding.</h3>
        </div>

        <div className="os-found">
          <div className="os-card">
            <div className="os-card-tag">Age 12 — First Principles</div>
            <p className="os-card-body">
              I started programming at 12, and every project since has been built slightly past what
              I already knew how to do. That set the pattern early: learn whatever the problem
              demands, not whatever the curriculum offers. The habit was fixed well before I had any
              formal exposure to computer science.
            </p>
          </div>
          <div className="os-card">
            <div className="os-card-tag">Age 15 — First Validated Output</div>
            <p className="os-card-body">
              I built a stock market prediction system — market data ingestion, fundamental analysis,
              technical analysis, directional call — and sold it for roughly <strong>$10,000 USD</strong>.
              That money bought the RTX 3090 that later ran all 383 ORMAS experiments. It was also the
              first time somebody outside my own head confirmed the work was worth something.
            </p>
          </div>
        </div>

        <div className="os-body" style={{ marginBottom: '24px' }}>
          <p className="os-p">
            Between 12 and 17 I ran five ventures across software, automation, and e-commerce. Each
            one broke at a structurally different layer, and each one handed me the same finding from
            a different angle.
          </p>
        </div>

        <div className="os-venture-list">
          {ventures.map((v, i) => (
            <div key={i} className="os-venture">
              <div className="os-venture-age">{v.age}</div>
              <div>
                <div className="os-venture-title">{v.title}</div>
                <div className="os-venture-lesson">{v.lesson}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="os-callout">
          <p className="os-callout-lead">
            No single piece of the pipeline was the problem. The pipeline was the problem — and the
            coordination cost that makes it impossible for one person to hold at scale.
          </p>
          <p>
            Five ventures failing at five different stages is, read generously, a structured
            experiment in how businesses break. The variable was identical every time: one person
            trying to occupy every role in a system that needs several specialists working at once.
          </p>
          <p>
            <strong>The bottleneck was never individual capability. It was always coordination.</strong>
          </p>
        </div>

        <hr className="os-rule" />

        {/* ══ ACT II ══════════════════════════════════════════════ */}
        <div className="os-act" style={{ marginTop: '40px' }}>
          <div className="os-act-num">Part Two</div>
          <h3 className="os-act-title">What That Forced Me to Build</h3>
        </div>

        <div className="os-body">
          <p className="os-p">
            A structural problem needs a structural answer. <strong>OXIMO</strong> was mine — an
            operating system where AI agents could actually run a company: building their own org
            chart on demand, splitting work without being told how, and creating new agent roles when
            the job called for them. Hiring, executing, and coordinating with no human in the loop.
          </p>
          <p className="os-p">
            Which immediately produced a second problem I had not planned for. Those agents needed to
            learn from real production data — and real production data, unlike any benchmark, is
            adversarial by default: contradictions, noise, missing signals, corrupt labels. Every
            state-of-the-art noise-handling method I tested — DivideMix, ProMix, CoDE — collapsed the
            moment the data stopped being curated.
          </p>

          <div className="os-pull">
            The gap between research benchmarks and production reality is not a fine-tuning problem.
            It is a structural one.
          </div>

          <p className="os-p">
            So the answer had to be architectural. Backpropagation has been unchanged since 1986 — a
            single global loss signal distributed uniformly across every node, with no mechanism for
            any node to evaluate its own state. A network trained on corrupted labels has no internal
            alarm system. It learns the wrong thing silently and confidently. I could not accept that
            as a constraint to engineer around. I decided to engineer the constraint out.
          </p>
          <p className="os-p">
            <strong>ORMAS</strong> is the result: a three-signal training architecture with per-node
            structural self-assessment. Every node maintains its own local loss anchor — a
            4,416-parameter bottleneck that is mathematically incapable of memorizing noise. A
            health-gated correction engine monitors seven structural pathology types in real time and
            executes selective rollback with expert immunity. The network does not just train. It
            observes itself training.
          </p>
          <p className="os-p">
            Building it meant going well below the level of standard ML engineering. Custom training
            loops. Custom telemetry emitting 23,000+ diagnostic signals per run, every correction
            causally tagged to its pathology, node, and epoch. I derived an{' '}
            <strong>Input-to-State Stability (ISS) local stability characterization</strong> — the
            first formal stability result for any self-correcting neural architecture — and validated
            it across 383 controlled experiments on four architectures, from 637K to 11M parameters,
            on a single RTX 3090.
          </p>

          <div className="os-callout">
            <p className="os-callout-lead">
              The result that surprised me most was not the recovery.
            </p>
            <p>
              It was the emergence of zero-shot compositional generalization — training on shapes and
              colors separately, then testing on unseen combinations. ORMAS reached{' '}
              <strong>58.8% on novel pairings against 25% chance</strong>, with no replay buffers and
              no architectural tricks. Neural networks can generalize. They just need internal
              structure that supports it.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <ExpandableSection
            closedLabel="Every problem, and the architecture it produced"
            hint="The direct mapping from each venture failure to the component that exists because of it — plus full codebase, hardware, and test-suite numbers for all three systems."
            meta={['Problem → architecture map', '4 reference tables', 'Codebase & hardware']}
          >
            <div className="os-map" style={{ marginBottom: '18px' }}>
              <div className="os-map-head">From Problem → Architecture</div>
              {problemToArchitecture.map((r, i) => (
                <div key={i} className="os-map-row">
                  <div className="os-map-from">{r.from}</div>
                  <div className="os-map-arrow">→</div>
                  <div className="os-map-to">{r.to}</div>
                </div>
              ))}
            </div>
            {detailGroups.map((g, i) => (
              <div key={i} className="os-detail">
                <div className="os-detail-head">{g.title}</div>
                {g.rows.map((r, j) => (
                  <div key={j} className="os-detail-row">
                    <div className="os-detail-label">{r.label}</div>
                    <div className="os-detail-value">{r.value}</div>
                  </div>
                ))}
              </div>
            ))}
          </ExpandableSection>
        </div>

        <hr className="os-rule" />

        {/* ══ ACT III ═════════════════════════════════════════════ */}
        <div className="os-act" style={{ marginTop: '40px' }}>
          <div className="os-act-num">Part Three</div>
          <h3 className="os-act-title">Proving It Outside the Lab</h3>
        </div>

        <div className="os-body">
          <p className="os-p">
            OXIMO — the operating system that started all of this — is also the empirical proof that
            the architecture works outside a controlled setting. I deployed it inside{' '}
            <strong>Black Bloxie LTD</strong>, a UK holding company I registered at seventeen, and ran
            it as a twelve-month falsification exercise rather than a business: seven escalating
            tests, each one a chance to prove myself wrong in public. Every rung is answered, in
            order, in the{' '}
            <a href="#deployment" style={{ color: '#c4cfde', textDecoration: 'underline' }}>
              Deployment section
            </a>
            . The mechanism was confirmed causally, not merely correlated.
          </p>
          <p className="os-p">
            I stopped it there deliberately. The architecture was not the limit; the law was. No
            jurisdiction currently assigns commercial liability to an autonomous agent, and I was not
            willing to discover where that boundary sits by running a live company through it. Holding
            the study at research grade cost me the bigger number and bought me a clean result, which
            was the correct trade for what I was trying to prove.
          </p>
        </div>

        <hr className="os-rule" />

        {/* ══ ACT IV ══════════════════════════════════════════════ */}
        <div className="os-act" style={{ marginTop: '40px' }}>
          <div className="os-act-num">Part Four</div>
          <h3 className="os-act-title">How the Work Actually Gets Done</h3>
        </div>

        <div className="os-body">
          <p className="os-p">
            This was produced with no university framework, no research group, no advisor, and no
            external funding. Every experiment ran on personal hardware. Every architectural decision
            was made alone.
          </p>
          <p className="os-p">
            I naturally work 14–16 hours a day. Out of curiosity — wondering whether anyone else was
            doing the same — I decided to document it formally. For two weeks in November 2024 I
            livestreamed my daily workflow continuously, recording{' '}
            <strong>28 sessions as live footage for a Guinness World Record application</strong>. The
            archive is unedited and linked below.
          </p>
        </div>

        <div style={{ marginTop: '26px' }}>
          <ExpandableSection
            closedLabel="Open the 28-session work archive and the full technical stack"
            hint="Unlisted livestream footage recorded for the Guinness application, plus the complete list of tools, frameworks, and languages behind the three systems."
            meta={['28 livestreams', 'Guinness application', 'Full technical stack']}
          >
            <div className="os-detail" style={{ marginBottom: '18px' }}>
              <div className="os-detail-head">Work Archive — November 2024 · 28 Sessions</div>
              <div style={{ padding: '16px 20px' }}>
                <p style={{ fontSize: '13px', color: '#9aa4b0', marginBottom: '14px', lineHeight: 1.7 }}>
                  Unlisted livestreams recorded for the Guinness World Record application. Unfiltered
                  daily workflow footage — no editing, no highlights.
                </p>
                <div className="os-sessions">
                  {sessions.map((id, i) => (
                    <a
                      key={id}
                      className="os-session"
                      href={`https://youtube.com/live/${id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {skillGroups.map((g, i) => (
              <div key={i} className="os-skill-block">
                <div className="os-skill-label">{g.title}</div>
                <div className="os-tags">
                  {g.tags.map((t, j) => <span key={j} className="os-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </ExpandableSection>
        </div>

        <hr className="os-rule" />

        {/* ══ ACT V ═══════════════════════════════════════════════ */}
        <div className="os-act" style={{ marginTop: '40px' }}>
          <div className="os-act-num">Part Five</div>
          <h3 className="os-act-title">What Is Still Missing</h3>
        </div>

        <div className="os-body">
          <p className="os-p">
            Two years ago I would have said all of this out loud and sounded delusional. The distance
            closed the only way it could: the code runs, the experiments are finished, and the
            architecture is published where anyone can check it.
          </p>
          <p className="os-p">
            But working at this intensity without institutional support is not a sustainable research
            model. The constraint is not motivation — it never has been. The constraint is the absence
            of calibration: colleagues, advisors, and reviewers who compress iteration cycles and
            catch errors before they compound.
          </p>
          <p className="os-p">
            The{' '}
            <a href="#oxido" style={{ color: '#c4cfde', textDecoration: 'underline' }}>
              OXIDO roadmap
            </a>{' '}
            is what happens next, in order. This is a different list: not a phased plan, but the three
            external resources that phase depends on. They run in parallel, and none depends on the
            others.
          </p>
        </div>

        <div style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', overflowX: 'auto', marginTop: '24px' }}>
          <table className="os-needs">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>What&apos;s Missing</th>
                <th>Why It&apos;s the Blocker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Multi-node compute</td>
                <td>The ORMAS protocol carries over to Transformers unchanged — the mathematics is architecture-agnostic. What&apos;s missing isn&apos;t a research result, it&apos;s H100/A100 access at multi-node scale.</td>
              </tr>
              <tr>
                <td>A reason to train Cherry</td>
                <td>Pre-training a language model on the three-signal architecture from scratch means structural correction happens during pre-training instead of being bolted on afterward as RLHF. That&apos;s a compute-heavy bet I&apos;m not going to make alone on a single GPU.</td>
              </tr>
              <tr>
                <td>A control theorist</td>
                <td>The ISS characterization needs someone qualified trying to break it before I submit it anywhere, not after.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="os-close">
          <p>
            The infrastructure for the next phase — Transformer-scale validation, Project Cherry,
            formal peer review of the ISS result — requires exactly the kind of institutional
            environment I have been building without. That is the direct and honest reason I am
            raising. Not for validation. For leverage.
          </p>
        </div>

        <div className="os-sign">Rokib Al Dhin Raadh — Dhaka, Bangladesh — 2026</div>
      </div>

      <div className="col-12">
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
      </div>
    </div>
  );
}
