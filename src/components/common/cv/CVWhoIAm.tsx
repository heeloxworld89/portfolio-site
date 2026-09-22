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
    title: 'Built and sold a stock-prediction system',
    body: 'The first time someone outside my own head priced the work — around $10,000. The money bought the RTX 3090 that later ran all 383 ORMAS experiments.',
  },
  {
    age: '16–17',
    year: '2023–25',
    kind: 'build',
    title: 'OXIMO — the structural answer to coordination',
    body: 'Agents that decompose work and hire a specialist when none exists. Rebuilt from a 106,000-line monolith to 40,933 lines with every algorithm ported and 2,011 tests green. Closed now, and on this page as prior work.',
  },
  {
    age: '17',
    year: '2025–26',
    kind: 'build',
    title: 'Black Bloxie LTD — twelve months of trying to disprove it',
    body: 'A real UK company built to be a test environment rather than a business. Remove the system, measure. Put it back, measure. −91% and +1,300%. It also found the wall: the models underneath could not handle the company’s own messy data.',
  },
  {
    age: '17–18',
    year: '2025–26',
    kind: 'build',
    title: 'ORMAS — 383 experiments on one GPU',
    body: 'The wall turned into the research. Four architecture families, six noise regimes. A network that diagnoses its own damage mid-training and repairs it: 80.3% recovery where parameter-matched baselines flatline at 10.0% permanently.',
  },
  {
    age: '18',
    year: '2026',
    kind: 'proof',
    title: 'OXIEDO goes live · reviewing for NeurIPS',
    body: 'The research becomes a company with a product, a licence and five sectors that pay for it. Preprint live, submitted to AAAI 2027. In the same year I joined the programme committee of the Trustworthy AI for Good workshop at NeurIPS 2026, reviewing in the field I publish in.',
  },
];

const systems = [
  {
    name: 'ORMAS',
    role: 'The research',
    line: 'It finds its own broken component mid-training, names it, and repairs it.',
    stat: '80.3%',
    statLbl: 'recovery · baseline 10.0%',
    href: '#research',
    state: 'Current work',
  },
  {
    name: 'OXIEDO',
    role: 'The business',
    line: 'Licensing it to the institutions legally barred from training on their own data.',
    stat: 'Live',
    statLbl: 'oxiedo.com · five sectors',
    href: '#oxiedo',
    state: 'Live',
  },
  {
    name: 'OXIMO',
    role: 'Prior work',
    line: 'Hand it a sentence; it builds the org chart and hires what it does not have.',
    stat: '40,933',
    statLbl: 'lines · 2,011 tests green',
    href: '#oximo',
    state: 'Closed',
  },
  {
    name: 'Black Bloxie',
    role: 'The experiment on OXIMO',
    line: 'A real UK company I ran for a year purely to find out if the system was the cause.',
    stat: '−91% / +1,300%',
    statLbl: '12-month lesion study',
    href: '#black-bloxie',
    state: 'Closed',
  },
  {
    name: 'Project Cherry',
    role: 'Planned',
    line: 'A network that grows its own components. Fully specified, deliberately unstarted.',
    stat: '—',
    statLbl: 'zero experiments, and I say so',
    href: '#cherry',
    state: 'Not built',
  },
];

const router = [
  { a: 'You review papers', d: 'The ISS derivation, all 383 runs, the telemetry design, and the table where the baseline beats me. Attack the stability bound first — that is where I most want to be wrong early.', h: '#research', l: 'The research' },
  { a: 'You write cheques', d: 'What it sells, who is obliged to buy it and by when, and the whole risk register volunteered before anybody asks for it.', h: '#oxiedo', l: 'The company' },
  { a: 'You read code before opinions', d: '40,933 lines, 2,011 tests, and a system handed one sentence that works out its own org chart and hires what it lacks.', h: '#oximo', l: 'The codebase' },
  { a: 'You have heard this before', d: 'Twelve months spent trying to kill my own thesis on a live company with real customers, and every pound it ever took, stated so it cannot be read generously.', h: '#black-bloxie', l: 'The experiment' },
];

export default function CVWhoIAm() {
  return (
    <div className="row mb--50" id="who-i-am">
      <style>{`
        .wi-lead { font-size: 15.5px; line-height: 1.85; color: var(--pf-ink-2); max-width: 780px; margin: 0 0 12px; }
        .wi-lead strong { color: var(--pf-ink); font-weight: 600; }

        .wi-label {
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: var(--pf-ink);
          margin: 48px 0 18px; padding-bottom: 9px; border-bottom: 1px solid var(--pf-border);
        }

        /* ── founder video: vertical source gets a vertical frame ── */
        .wi-why {
          display: grid; grid-template-columns: 320px 1fr;
          gap: 34px; align-items: center;
          background: var(--pf-bg); border: 1px solid var(--pf-border);
          border-radius: 12px; padding: 28px 30px; margin: 6px 0 4px;
        }
        @media (max-width: 860px) {
          .wi-why { grid-template-columns: 1fr; gap: 22px; justify-items: center; }
          .wi-why-side { text-align: left; }
        }
        .wi-why-embed {
          position: relative; width: 100%; max-width: 320px;
          aspect-ratio: 9 / 16;
          border-radius: 14px; overflow: hidden;
          background: var(--pf-sunk); border: 1px solid var(--pf-border);
          box-shadow: 0 20px 50px -28px rgba(var(--pf-shadow-rgb), 0.144);
        }
        .wi-why-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
        .wi-why-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.8px;
          text-transform: uppercase; color: var(--pf-accent); margin-bottom: 12px;
        }
        .wi-why-h {
          font-size: 17px; font-weight: 700; color: var(--pf-ink);
          margin: 0 0 12px; line-height: 1.35;
        }
        .wi-why-p { font-size: 14.5px; line-height: 1.75; color: var(--pf-ink-2); margin: 0 0 12px; }
        .wi-why-p strong { color: var(--pf-ink); font-weight: 600; }
        .wi-why-p a { color: var(--pf-ink); text-decoration: underline; }
        .wi-why-p a:hover { color: var(--pf-ink); }
        .wi-why-cap {
          font-size: 12.5px; line-height: 1.65; color: var(--pf-ink-3);
          margin: 14px 0 0; padding-top: 13px; border-top: 1px solid var(--pf-border);
        }

        /* ── timeline ─────────────────────────────────────── */
        .wi-tl { position: relative; padding-left: 4px; }
        .wi-tl-row {
          display: grid; grid-template-columns: 62px 34px 1fr;
          gap: 0; align-items: start;
        }
        @media (max-width: 620px) { .wi-tl-row { grid-template-columns: 50px 28px 1fr; } }

        .wi-tl-age { text-align: right; padding: 16px 14px 0 0; }
        .wi-tl-a { font-size: 15.5px; font-weight: 800; color: var(--pf-ink); line-height: 1; letter-spacing: -0.4px; }
        .wi-tl-y { font-size: 10px; color: var(--pf-ink-3); margin-top: 4px; font-family: ui-monospace, Menlo, monospace; }

        .wi-tl-spine { position: relative; display: flex; justify-content: center; }
        .wi-tl-line {
          position: absolute; top: 0; bottom: 0; width: 1px; background: var(--pf-border);
        }
        .wi-tl-row:first-child .wi-tl-line { top: 22px; }
        .wi-tl-row:last-child .wi-tl-line { bottom: auto; height: 22px; }
        .wi-tl-dot {
          position: relative; margin-top: 16px; width: 11px; height: 11px;
          border-radius: 50%; border: 2px solid var(--pf-bg); flex-shrink: 0;
        }
        .wi-tl-dot.venture { background: var(--pf-ink-4); }
        .wi-tl-dot.build   { background: var(--pf-ink); }
        .wi-tl-dot.proof   { background: var(--pf-accent); box-shadow: 0 0 0 3px rgba(var(--pf-accent-rgb), 0.16); }

        .wi-tl-body { padding: 12px 0 26px 18px; }
        .wi-tl-row:last-child .wi-tl-body { padding-bottom: 4px; }
        .wi-tl-t { font-size: 15.5px; font-weight: 700; color: var(--pf-ink); line-height: 1.35; margin-bottom: 6px; }
        .wi-tl-row .wi-tl-t.proof { color: var(--pf-accent-2); }
        .wi-tl-d { font-size: 14px; line-height: 1.75; color: var(--pf-ink-2); max-width: 700px; }

        .wi-legend { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 8px; padding-left: 66px; }
        @media (max-width: 620px) { .wi-legend { padding-left: 0; } }
        .wi-legend span {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; color: var(--pf-ink-3); font-weight: 600;
          text-transform: uppercase; letter-spacing: 1px;
        }
        .wi-legend i { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }

        /* ── systems strip ────────────────────────────────── */
        .wi-sys { display: grid; grid-template-columns: repeat(auto-fit, minmax(238px, 1fr)); gap: 12px; }
        .wi-sys-card {
          display: flex; flex-direction: column;
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 10px;
          padding: 20px 22px; text-decoration: none;
          transition: border-color .25s, background .25s, transform .25s;
        }
        .wi-sys-card:hover {
          border-color: rgba(var(--pf-ink-rgb), 0.45); background: var(--pf-surface-2); transform: translateY(-2px);
        }
        .wi-sys-card.is-unbuilt { border-color: rgba(var(--pf-accent-rgb), 0.26); background: rgba(var(--pf-accent-rgb), 0.035); }
        .wi-sys-card.is-unbuilt:hover { border-color: rgba(var(--pf-accent-rgb), 0.5); }
        .wi-sys-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 3px; }
        .wi-sys-n { font-size: 15.5px; font-weight: 800; color: var(--pf-ink); letter-spacing: -0.3px; }
        .wi-sys-state {
          font-size: 9px; font-weight: 700; letter-spacing: 1.1px; text-transform: uppercase;
          color: var(--pf-pos); background: rgba(var(--pf-pos-rgb), 0.1);
          border: 1px solid rgba(var(--pf-pos-rgb), 0.28); border-radius: 999px; padding: 3px 8px; white-space: nowrap;
        }
        .wi-sys-card.is-unbuilt .wi-sys-state {
          color: var(--pf-accent); background: rgba(var(--pf-accent-rgb), 0.1); border-color: rgba(var(--pf-accent-rgb), 0.3);
        }
        .wi-sys-r { font-size: 10.5px; font-weight: 700; letter-spacing: 1.3px; text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 10px; }
        .wi-sys-l { font-size: 13.5px; line-height: 1.65; color: var(--pf-ink-2); margin-bottom: 16px; flex: 1; }
        .wi-sys-b { border-top: 1px solid rgba(var(--pf-ink-rgb), 0.06); padding-top: 12px; }
        .wi-sys-v { font-size: 16.5px; font-weight: 800; color: var(--pf-ink); line-height: 1.1; }
        .wi-sys-card.is-unbuilt .wi-sys-v { color: var(--pf-accent-2); }
        .wi-sys-sl { font-size: 10.5px; color: var(--pf-ink-3); margin-top: 3px; }
        .wi-sys-go {
          display: inline-flex; align-items: center; gap: 6px; margin-top: 12px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.1px;
          text-transform: uppercase; color: var(--pf-ink);
        }
        .wi-sys-card:hover .wi-sys-go svg { transform: translateX(3px); }
        .wi-sys-go svg { transition: transform .25s; }

        /* ── standing ─────────────────────────────────────── */
        .wi-standing {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        @media (max-width: 820px) { .wi-standing { grid-template-columns: 1fr; } }
        .wi-standing-cell {
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 10px;
          padding: 20px 22px; display: flex; flex-direction: column;
        }
        .wi-standing-k {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 9px;
        }
        .wi-standing-v {
          font-size: 15px; font-weight: 700; color: var(--pf-ink);
          line-height: 1.35; margin-bottom: 8px;
        }
        .wi-standing-s { font-size: 13px; line-height: 1.65; color: var(--pf-ink-2); }
        .wi-standing-note {
          font-size: 13px; line-height: 1.7; color: var(--pf-ink-3); margin: 14px 0 0;
        }
        .wi-standing-note a { color: var(--pf-ink); text-decoration: underline; }
        .wi-standing-note a:hover { color: var(--pf-ink); }

        /* ── router ───────────────────────────────────────── */
        .wi-router { border: 1px solid var(--pf-border); border-radius: 10px; overflow: hidden; }
        .wi-router-h {
          padding: 12px 20px; background: rgba(var(--pf-ink-rgb), 0.022);
          border-bottom: 1px solid var(--pf-border); font-size: 10.5px; font-weight: 700;
          letter-spacing: 1.8px; text-transform: uppercase; color: var(--pf-ink-3);
        }
        .wi-router-row {
          display: grid; grid-template-columns: 200px 1fr 132px; gap: 18px;
          align-items: center; padding: 16px 20px; background: var(--pf-surface);
          border-bottom: 1px solid rgba(var(--pf-ink-rgb), 0.04);
        }
        .wi-router-row:last-child { border-bottom: none; }
        @media (max-width: 820px) { .wi-router-row { grid-template-columns: 1fr; gap: 7px; } }
        .wi-router-a { font-size: 13.5px; font-weight: 700; color: var(--pf-ink); }
        .wi-router-d { font-size: 13px; line-height: 1.6; color: var(--pf-ink-2); }
        .wi-router-l {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 9px 14px; border-radius: 7px; text-decoration: none;
          background: rgba(var(--pf-ink-rgb), 0.055); border: 1px solid var(--pf-border-2); color: var(--pf-ink);
          font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          transition: background .22s, border-color .22s, color .22s;
        }
        .wi-router-l:hover { background: rgba(var(--pf-ink-rgb), 0.12); border-color: rgba(var(--pf-ink-rgb), 0.5); color: var(--pf-ink); }
        .wi-router-l:hover svg { transform: translateX(3px); }
        .wi-router-l svg { transition: transform .22s; }

        @media (prefers-reduced-motion: reduce) {
          .wi-sys-card:hover { transform: none; }
        }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: 'var(--pf-ink-2)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
          Who I Am
        </span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: 800, color: 'var(--pf-ink)' }}>
          Everything I have built by <span className="age">eighteen</span>, and the order it happened in
        </h2>

        {/* ── The founder video carries the introduction itself — no filler
             copy beside it, and no separate lead paragraph above it. ── */}
        <div className="wi-why">
          <div className="wi-why-embed">
            <iframe
              src="https://www.loom.com/embed/c30a0509fdc442b5b6f6ea47213798c9"
              allowFullScreen
              loading="lazy"
              title="Founder introduction — Rokib Al Dhin Raadh"
            />
          </div>
          <div className="wi-why-side">
            <div className="wi-why-eyebrow">
              <Icon name="play" size={14} />
              Founder Introduction · 31 sec
            </div>
            <h3 className="wi-why-h">Rokib Al Dhin Raadh — <span className="age">eighteen years old</span>, Dhaka, Bangladesh.</h3>
            <p className="wi-why-p">
              I did not go looking for a research problem. I ran five businesses between twelve and seventeen,
              watched all five break, and noticed they were all breaking for the same reason. Everything since has
              been me chasing that one sentence further down than the last person bothered to.
            </p>
            <p className="wi-why-p">
              <strong>Two of these are live. Two are finished. One does not exist yet.</strong> I would rather you
              knew which was which in the first thirty seconds than work it out halfway down the page.
            </p>
            <p className="wi-why-cap">
              In the video: who this is for, why nothing on the market does it today, and what ORMAS is.
            </p>
          </div>
        </div>

        <div className="wi-label">Six Years, In Order</div>
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
          <span><i style={{ background: 'var(--pf-ink-4)' }} /> Venture · failed</span>
          <span><i style={{ background: 'var(--pf-ink)' }} /> Built</span>
          <span><i style={{ background: 'var(--pf-accent)' }} /> Verified externally</span>
        </div>

        {/* ══ SYSTEMS ════════════════════════════════════════════ */}
        <div className="wi-label">The Five Things, and Where Each One Stands</div>
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
          The last three months are in <a href="#recognition">Recent</a>, directly above. The five ventures
          are in <a href="#ventures">Ventures</a>; credentials and the honest account of what I traded away are in{' '}
          <a href="#education">Education</a>.
        </p>

        {/* ══ ROUTER ═════════════════════════════════════════════ */}
        <div className="wi-label">Where to Start</div>
        <div className="wi-router">
          <div className="wi-router-h">Four ways in. Pick the one that matches why you opened this.</div>
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

      <div className="col-12"><hr className="my-5" style={{ borderColor: 'rgba(var(--pf-ink-rgb), 0.05)' }} /></div>
    </div>
  );
}
