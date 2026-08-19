import Icon from '@/components/common/Icon';

/**
 * Who I Am — the synthesis, not a summary of the sections below.
 *
 * The three system essays that used to live here duplicated Research,
 * Engineering and Deployment almost verbatim. What was missing was the person:
 * the six-year timeline, the credentials, the outside signal, and a router.
 * Depth stays in the dedicated sections; this is the one screen that answers
 * "who is this and is it worth my next ten minutes".
 */

type Kind = 'venture' | 'build' | 'proof';

const timeline: { age: string; year: string; kind: Kind; title: string; body: string }[] = [
  {
    age: '12',
    year: '2020',
    kind: 'venture',
    title: 'First line of code',
    body: 'Every project after this was built slightly past what I already knew how to do. That habit was fixed before I had any formal exposure to computer science.',
  },
  {
    age: '12–17',
    year: '2020–25',
    kind: 'venture',
    title: 'Five ventures. Five different failure modes.',
    body: 'Software services, cold-call automation, digital marketing, e-commerce, automation tooling. Each broke at a structurally different layer and handed back the same finding: the bottleneck was never individual capability, it was coordination.',
  },
  {
    age: '15',
    year: '2023',
    kind: 'proof',
    title: 'Sold a stock-prediction system for ~$10,000',
    body: 'The first time someone outside my own head confirmed the work was worth something. The money bought the RTX 3090 that later ran all 383 ORMAS experiments.',
  },
  {
    age: '16–17',
    year: '2024',
    kind: 'build',
    title: 'OXIMO — agents that hire agents',
    body: 'A structural problem needed a structural answer. Rebuilt from a 106,000-line monolith to 40,933 lines with all 12 algorithms ported verbatim and 2,011 tests green.',
  },
  {
    age: '17',
    year: '2025',
    kind: 'build',
    title: 'Registered Black Bloxie LTD · derived the ISS result',
    body: 'A UK company set up to be a laboratory rather than a business. In the same period I derived the first formal stability characterization for a self-correcting architecture — at seventeen, with no advisor.',
  },
  {
    age: '17–18',
    year: '2025–26',
    kind: 'build',
    title: 'ORMAS — 383 experiments on one GPU',
    body: 'Four architecture families, six noise regimes. A network that diagnoses its own damage mid-training and repairs it: 80.3% recovery where parameter-matched baselines flatline at 10.0% forever.',
  },
  {
    age: '18',
    year: '2026',
    kind: 'proof',
    title: 'Preprint live · submitted to AAAI 2027 · ablation closed',
    body: 'The twelve-month lesion study closed on the live company. ORMAS went up on Zenodo with a codebase that reproduces every run, and into the AAAI 2027 main technical track for anonymous review. First time the work left my own head and was read by people qualified to judge it.',
  },
];

const systems = [
  {
    name: 'ORMAS',
    role: 'The architecture',
    line: 'A network that reports its own damage and repairs it mid-training.',
    stat: '80.3%',
    statLbl: 'recovery · baseline 10.0%',
    href: '#research',
    state: 'AAAI 2027 · submitted',
  },
  {
    name: 'OXIMO',
    role: 'The operating system',
    line: 'Agents that decompose work and hire the specialist when none exists.',
    stat: '40,933',
    statLbl: 'lines · 2,011 tests green',
    href: '#engineering',
    state: 'Production',
  },
  {
    name: 'Black Bloxie',
    role: 'The laboratory',
    line: 'A real UK company run by agents, used to try to falsify the thesis.',
    stat: '−91% / +1,300%',
    statLbl: '12-month causal ablation',
    href: '#deployment',
    state: 'Study closed',
  },
  {
    name: 'Project Cherry',
    role: 'The endpoint',
    line: 'A growing mesh of specialists the institution owns outright.',
    stat: 'Layer 3',
    statLbl: 'specified · compute-gated',
    href: '#cherry',
    state: 'Not built',
  },
];

const router = [
  { a: 'ML Researcher / Reviewer', d: 'The stability result, all 383 runs, the telemetry design, and every table — including the ones where the result goes against me.', h: '#research', l: 'Research' },
  { a: 'VC / Angel Investor', d: 'Why this licenses to institutions rather than selling as SaaS, what incumbents structurally cannot do, and the causal evidence behind both.', h: '#oxido', l: 'OXIDO' },
  { a: 'Engineer / Developer', d: 'Architecture internals, 40,933 lines, 2,011 tests. One script reproduces every experiment in under an hour.', h: '#engineering', l: 'Engineering' },
  { a: 'Enterprise Operator', d: 'Twelve months of deployment data, the ablation method behind it, and two full reports to download.', h: '#deployment', l: 'Deployment' },
];

export default function CVWhoIAm() {
  return (
    <div className="row mb--50" id="who-i-am">
      <style>{`
        .wi-lead { font-size: 17px; line-height: 1.85; color: #9aa4b0; max-width: 780px; margin: 0 0 12px; }
        .wi-lead strong { color: #c4cfde; font-weight: 600; }

        .wi-label {
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #c4cfde;
          margin: 48px 0 18px; padding-bottom: 9px; border-bottom: 1px solid #2a2d32;
        }

        /* ── timeline ─────────────────────────────────────── */
        .wi-tl { position: relative; padding-left: 4px; }
        .wi-tl-row {
          display: grid; grid-template-columns: 62px 34px 1fr;
          gap: 0; align-items: start;
        }
        @media (max-width: 620px) { .wi-tl-row { grid-template-columns: 50px 28px 1fr; } }

        .wi-tl-age { text-align: right; padding: 16px 14px 0 0; }
        .wi-tl-a { font-size: 17px; font-weight: 800; color: #c4cfde; line-height: 1; letter-spacing: -0.4px; }
        .wi-tl-y { font-size: 10px; color: #7d8794; margin-top: 4px; font-family: ui-monospace, Menlo, monospace; }

        .wi-tl-spine { position: relative; display: flex; justify-content: center; }
        .wi-tl-line {
          position: absolute; top: 0; bottom: 0; width: 1px; background: #2a2d32;
        }
        .wi-tl-row:first-child .wi-tl-line { top: 22px; }
        .wi-tl-row:last-child .wi-tl-line { bottom: auto; height: 22px; }
        .wi-tl-dot {
          position: relative; margin-top: 16px; width: 11px; height: 11px;
          border-radius: 50%; border: 2px solid #121417; flex-shrink: 0;
        }
        .wi-tl-dot.venture { background: #4a5058; }
        .wi-tl-dot.build   { background: #c4cfde; }
        .wi-tl-dot.proof   { background: #ff6b76; box-shadow: 0 0 0 3px rgba(255,74,87,0.16); }

        .wi-tl-body { padding: 12px 0 26px 18px; }
        .wi-tl-row:last-child .wi-tl-body { padding-bottom: 4px; }
        .wi-tl-t { font-size: 15.5px; font-weight: 700; color: #e8edf4; line-height: 1.35; margin-bottom: 6px; }
        .wi-tl-row .wi-tl-t.proof { color: #ff8a93; }
        .wi-tl-d { font-size: 14px; line-height: 1.75; color: #9aa4b0; max-width: 700px; }

        .wi-legend { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 8px; padding-left: 66px; }
        @media (max-width: 620px) { .wi-legend { padding-left: 0; } }
        .wi-legend span {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; color: #838d99; font-weight: 600;
          text-transform: uppercase; letter-spacing: 1px;
        }
        .wi-legend i { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }

        /* ── systems strip ────────────────────────────────── */
        .wi-sys { display: grid; grid-template-columns: repeat(auto-fit, minmax(238px, 1fr)); gap: 12px; }
        .wi-sys-card {
          display: flex; flex-direction: column;
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 10px;
          padding: 20px 22px; text-decoration: none;
          transition: border-color .25s, background .25s, transform .25s;
        }
        .wi-sys-card:hover {
          border-color: rgba(196,207,222,0.45); background: #1d2024; transform: translateY(-2px);
        }
        .wi-sys-card.is-unbuilt { border-color: rgba(255,74,87,0.26); background: rgba(255,74,87,0.035); }
        .wi-sys-card.is-unbuilt:hover { border-color: rgba(255,74,87,0.5); }
        .wi-sys-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 3px; }
        .wi-sys-n { font-size: 17px; font-weight: 800; color: #fff; letter-spacing: -0.3px; }
        .wi-sys-state {
          font-size: 9px; font-weight: 700; letter-spacing: 1.1px; text-transform: uppercase;
          color: #7fd88f; background: rgba(127,216,143,0.1);
          border: 1px solid rgba(127,216,143,0.28); border-radius: 999px; padding: 3px 8px; white-space: nowrap;
        }
        .wi-sys-card.is-unbuilt .wi-sys-state {
          color: #ff6b76; background: rgba(255,74,87,0.1); border-color: rgba(255,74,87,0.3);
        }
        .wi-sys-r { font-size: 10.5px; font-weight: 700; letter-spacing: 1.3px; text-transform: uppercase; color: #838d99; margin-bottom: 10px; }
        .wi-sys-l { font-size: 13.5px; line-height: 1.65; color: #9aa4b0; margin-bottom: 16px; flex: 1; }
        .wi-sys-b { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px; }
        .wi-sys-v { font-size: 18px; font-weight: 800; color: #c4cfde; line-height: 1.1; }
        .wi-sys-card.is-unbuilt .wi-sys-v { color: #ff8a93; }
        .wi-sys-sl { font-size: 10.5px; color: #838d99; margin-top: 3px; }
        .wi-sys-go {
          display: inline-flex; align-items: center; gap: 6px; margin-top: 12px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.1px;
          text-transform: uppercase; color: #c4cfde;
        }
        .wi-sys-card:hover .wi-sys-go svg { transform: translateX(3px); }
        .wi-sys-go svg { transition: transform .25s; }

        /* ── standing ─────────────────────────────────────── */
        .wi-standing {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        @media (max-width: 820px) { .wi-standing { grid-template-columns: 1fr; } }
        .wi-standing-cell {
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 10px;
          padding: 20px 22px; display: flex; flex-direction: column;
        }
        .wi-standing-k {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #838d99; margin-bottom: 9px;
        }
        .wi-standing-v {
          font-size: 16px; font-weight: 700; color: #e8edf4;
          line-height: 1.35; margin-bottom: 8px;
        }
        .wi-standing-s { font-size: 13px; line-height: 1.65; color: #9aa4b0; }
        .wi-standing-note {
          font-size: 13px; line-height: 1.7; color: #838d99; margin: 14px 0 0;
        }
        .wi-standing-note a { color: #c4cfde; text-decoration: underline; }
        .wi-standing-note a:hover { color: #fff; }

        /* ── router ───────────────────────────────────────── */
        .wi-router { border: 1px solid #2a2d32; border-radius: 10px; overflow: hidden; }
        .wi-router-h {
          padding: 12px 20px; background: rgba(255,255,255,0.022);
          border-bottom: 1px solid #2a2d32; font-size: 10.5px; font-weight: 700;
          letter-spacing: 1.8px; text-transform: uppercase; color: #838d99;
        }
        .wi-router-row {
          display: grid; grid-template-columns: 200px 1fr 132px; gap: 18px;
          align-items: center; padding: 16px 20px; background: #191b1e;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .wi-router-row:last-child { border-bottom: none; }
        @media (max-width: 820px) { .wi-router-row { grid-template-columns: 1fr; gap: 7px; } }
        .wi-router-a { font-size: 13.5px; font-weight: 700; color: #c4cfde; }
        .wi-router-d { font-size: 13px; line-height: 1.6; color: #9aa4b0; }
        .wi-router-l {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 9px 14px; border-radius: 7px; text-decoration: none;
          background: rgba(196,207,222,0.055); border: 1px solid #343941; color: #c4cfde;
          font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          transition: background .22s, border-color .22s, color .22s;
        }
        .wi-router-l:hover { background: rgba(196,207,222,0.12); border-color: rgba(196,207,222,0.5); color: #fff; }
        .wi-router-l:hover svg { transform: translateX(3px); }
        .wi-router-l svg { transition: transform .22s; }

        @media (prefers-reduced-motion: reduce) {
          .wi-sys-card:hover { transform: none; }
        }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
          Who I Am
        </span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: 800, color: '#fff' }}>
          Six Years, One Through-Line
        </h2>

        <p className="wi-lead">
          <strong>Rokib Al Dhin Raadh — 18, Dhaka, Bangladesh.</strong> I did not start with research and go looking for
          problems. Five ventures failed at five different layers between the ages of twelve and seventeen, and all five
          returned the same finding. Everything on this page exists because of what that finding forced me to build next.
        </p>
        <p className="wi-lead" style={{ marginBottom: 0 }}>
          Nothing here was planned. Each piece exists because the one before it hit a wall I could not engineer around.
        </p>

        {/* ══ TIMELINE ═══════════════════════════════════════════ */}
        <div className="wi-label">The Through-Line</div>
        <div className="wi-tl">
          {timeline.map((t) => (
            <div className="wi-tl-row" key={t.title}>
              <div className="wi-tl-age">
                <div className="wi-tl-a">{t.age}</div>
                <div className="wi-tl-y">{t.year}</div>
              </div>
              <div className="wi-tl-spine">
                <div className="wi-tl-line" />
                <div className={`wi-tl-dot ${t.kind}`} />
              </div>
              <div className="wi-tl-body">
                <div className={`wi-tl-t${t.kind === 'proof' ? ' proof' : ''}`}>{t.title}</div>
                <div className="wi-tl-d">{t.body}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="wi-legend">
          <span><i style={{ background: '#4a5058' }} /> Venture · failed</span>
          <span><i style={{ background: '#c4cfde' }} /> Built</span>
          <span><i style={{ background: '#ff6b76' }} /> Verified externally</span>
        </div>

        {/* ══ SYSTEMS ════════════════════════════════════════════ */}
        <div className="wi-label">What Came Out of It</div>
        <div className="wi-sys">
          {systems.map((s) => (
            <a
              className={`wi-sys-card${s.state === 'Not built' ? ' is-unbuilt' : ''}`}
              href={s.href}
              key={s.name}
            >
              <div className="wi-sys-top">
                <span className="wi-sys-n">{s.name}</span>
                <span className="wi-sys-state">{s.state}</span>
              </div>
              <div className="wi-sys-r">{s.role}</div>
              <div className="wi-sys-l">{s.line}</div>
              <div className="wi-sys-b">
                <div className="wi-sys-v">{s.stat}</div>
                <div className="wi-sys-sl">{s.statLbl}</div>
                <span className="wi-sys-go">
                  Open <Icon name="arrowRight" size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="wi-standing-note">
          The two outside reads are in <a href="#recognition">Recognition</a>, directly above. Credentials, the FIAP
          note, and the honest account of what I traded away are in <a href="#education">Education</a>.
        </p>

        {/* ══ ROUTER ═════════════════════════════════════════════ */}
        <div className="wi-label">Where to Start</div>
        <div className="wi-router">
          <div className="wi-router-h">Depending on why you are here</div>
          {router.map((r) => (
            <div className="wi-router-row" key={r.a}>
              <div className="wi-router-a">{r.a}</div>
              <div className="wi-router-d">{r.d}</div>
              <a className="wi-router-l" href={r.h}>
                {r.l} <Icon name="arrowRight" size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12"><hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }} /></div>
    </div>
  );
}
