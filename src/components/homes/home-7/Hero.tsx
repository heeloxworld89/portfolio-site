import Icon from '@/components/common/Icon';

/**
 * Hero — the one-screen brief.
 *
 * Four blocks, in the order a stranger needs them:
 *   1. the company is live          (one line, not a banner)
 *   2. the claim, and who is making it
 *   3. the single result that backs the claim, drawn rather than asserted
 *   4. where the three live things are, matching the page's phase structure
 *
 * Everything the previous hero carried and this one does not — the telemetry
 * ticker, the four-metric strip, the layer stack — said less than the one
 * result now shown on the right.
 */

const lanes = [
  {
    tag: 'Research',
    name: 'ORMAS',
    line: 'The architecture itself. 383 experiments, four families, every run reproducible. Stability result accepted at DeepMath 2026.',
    href: '#research',
    cta: 'The evidence',
    state: 'live' as const,
    external: false,
  },
  {
    tag: 'Business',
    name: 'OXIEDO',
    line: 'The company. One licence, five sectors, and a market that has to buy this by law before 2028.',
    href: 'https://oxiedo.com',
    cta: 'oxiedo.com',
    state: 'live' as const,
    external: true,
  },
  {
    tag: 'Next',
    name: 'Project Cherry',
    line: 'A network that grows its own parts. Written down in full, and deliberately not started yet.',
    href: '#cherry',
    cta: 'What it would take',
    state: 'pending' as const,
    external: false,
  },
];

export default function Hero(_props?: any) {
  return (
    <div className="tmp-banner-one-area" id="home">
      <style>{`
        .hx { padding-top: 20px; padding-bottom: 40px; }
        @media (max-width: 991px) { .hx { padding-top: 18px; padding-bottom: 44px; } }

        /* ── 1 · live strip ─────────────────────────────────── */
        .hx-live-bar {
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
          text-decoration: none; margin-bottom: 24px;
          padding: 10px 16px; border-radius: 7px;
          border: 1px solid var(--pf-border);
          border-left: 3px solid var(--pf-accent);
          background: var(--pf-surface);
          transition: border-color .25s, background .25s;
        }
        .hx-live-bar:hover { background: var(--pf-surface-2); border-color: var(--pf-border-2); border-left-color: var(--pf-accent); }
        .hx-live-tag {
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          font-size: 10px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--pf-pos);
        }
        .hx-live-dot {
          width: 7px; height: 7px; border-radius: 50%; background: var(--pf-pos);
          animation: hxPulse 2.4s infinite;
        }
        @keyframes hxPulse {
          0%   { box-shadow: 0 0 0 0 rgba(var(--pf-pos-rgb), 0.5); }
          70%  { box-shadow: 0 0 0 7px rgba(var(--pf-pos-rgb), 0); }
          100% { box-shadow: 0 0 0 0 rgba(var(--pf-pos-rgb), 0); }
        }
        .hx-live-txt { font-size: 14px; color: var(--pf-ink); flex: 1; min-width: 200px; line-height: 1.5; }
        .hx-live-txt b { color: var(--pf-ink); font-weight: 700; }
        .hx-live-go {
          display: inline-flex; align-items: center; gap: 7px; flex-shrink: 0;
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.2px;
          color: var(--pf-accent);
        }

        /* ── 0 · the acceptance — the loudest thing on the page ─ */
        .hx-accept {
          position: relative; overflow: hidden;
          display: grid; grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center; gap: 22px;
          text-decoration: none; margin-bottom: 14px;
          padding: 22px 26px; border-radius: 12px;
          border: 1px solid rgba(var(--pf-pos-rgb), 0.38);
          border-top: 4px solid var(--pf-pos);
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(var(--pf-pos-rgb), 0.16), transparent 60%),
            var(--pf-surface);
          box-shadow: 0 14px 40px -18px rgba(var(--pf-pos-rgb), 0.55);
          transition: transform .25s, box-shadow .25s;
        }
        .hx-accept:hover { transform: translateY(-2px); box-shadow: 0 20px 48px -18px rgba(var(--pf-pos-rgb), 0.65); }
        .hx-seal {
          width: 84px; height: 84px; border-radius: 50%; flex-shrink: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          color: #fff; background: var(--pf-pos);
          box-shadow: 0 0 0 5px rgba(var(--pf-pos-rgb), 0.18), 0 0 0 10px rgba(var(--pf-pos-rgb), 0.08);
          animation: hxSeal 2.8s infinite;
        }
        .hx-seal-k { font-size: 8.5px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; margin-top: 3px; }
        @keyframes hxSeal {
          0%   { box-shadow: 0 0 0 5px rgba(var(--pf-pos-rgb), 0.18), 0 0 0 10px rgba(var(--pf-pos-rgb), 0.08); }
          50%  { box-shadow: 0 0 0 8px rgba(var(--pf-pos-rgb), 0.14), 0 0 0 16px rgba(var(--pf-pos-rgb), 0.04); }
          100% { box-shadow: 0 0 0 5px rgba(var(--pf-pos-rgb), 0.18), 0 0 0 10px rgba(var(--pf-pos-rgb), 0.08); }
        }
        .hx-accept-eb {
          font-size: 10.5px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase;
          color: var(--pf-pos); margin-bottom: 6px;
        }
        .hx-accept-t {
          font-size: clamp(22px, 2.6vw, 30px); font-weight: 800; letter-spacing: -0.6px;
          line-height: 1.12; color: var(--pf-ink); margin: 0 0 8px;
        }
        .hx-accept-t span { color: var(--pf-pos); }
        .hx-accept-l { font-size: 14px; line-height: 1.6; color: var(--pf-ink-2); margin: 0; }
        .hx-accept-l em { color: var(--pf-ink); font-style: italic; }
        .hx-accept-go {
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.6px; text-transform: uppercase;
          color: #fff; background: var(--pf-pos); border-radius: 999px; padding: 11px 18px;
        }
        @media (max-width: 860px) {
          .hx-accept { grid-template-columns: auto minmax(0, 1fr); padding: 18px; gap: 16px; }
          .hx-accept-go { grid-column: 1 / -1; justify-self: start; }
          .hx-seal { width: 64px; height: 64px; }
        }
        @media (prefers-reduced-motion: reduce) { .hx-seal { animation: none; } .hx-accept:hover { transform: none; } }

        /* ── 2 · claim + 3 · result ─────────────────────────── */
        .hx-top {
          display: grid; grid-template-columns: 1.12fr 0.88fr;
          gap: 44px; align-items: start; margin-bottom: 32px;
        }
        @media (max-width: 1100px) { .hx-top { grid-template-columns: 1fr; gap: 32px; } }

        .hx-id {
          display: inline-flex; align-items: center; gap: 11px; flex-wrap: wrap;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--pf-ink-2); margin-bottom: 18px;
          padding: 6px 13px; border-radius: 999px;
          background: rgba(var(--pf-ink-rgb), 0.05); border: 1px solid var(--pf-border);
        }
        .hx-id i { width: 3px; height: 3px; border-radius: 50%; background: var(--pf-ink-4); font-style: normal; }

        .hx-h1 {
          font-size: clamp(30px, 3.1vw, 46px); font-weight: 800; color: var(--pf-ink);
          letter-spacing: -1.4px; line-height: 1.08; margin: 0 0 14px;
        }
        .hx-h1 span { display: block; color: var(--pf-accent); }
        .hx-kicker + .hx-lead { margin-top: 0; }

        .hx-kicker {
          font-size: clamp(16px, 1.25vw, 18.5px); font-weight: 700; color: var(--pf-ink);
          line-height: 1.45; letter-spacing: -0.2px; margin: 0 0 20px;
          padding-left: 14px; border-left: 3px solid var(--pf-accent);
        }

        .hx-lead { font-size: 15.5px; line-height: 1.72; color: var(--pf-ink-2); max-width: 585px; margin: 0 0 13px; }
        .hx-lead strong { color: var(--pf-ink); font-weight: 600; }

        .hx-trust {
          font-size: 12.5px; line-height: 1.7; color: var(--pf-ink-3);
          max-width: 585px; margin: 0 0 24px;
          padding-left: 15px; border-left: 2px solid var(--pf-border);
        }
        .hx-trust b { color: var(--pf-ink-2); font-weight: 600; }

        .hx-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .hx-cta {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 12px 19px; border-radius: 7px; text-decoration: none;
          font-size: 11.5px; font-weight: 800; letter-spacing: 0.8px; text-transform: uppercase;
          transition: background .25s, border-color .25s, transform .25s, color .25s;
        }
        .hx-cta:hover { transform: translateY(-2px); }
        .hx-cta-p { background: var(--pf-accent); border: 1px solid var(--pf-accent); color: var(--pf-on-accent); }
        .hx-cta-p:hover { background: var(--pf-accent-2); color: var(--pf-on-accent); }
        .hx-cta-s { background: rgba(var(--pf-ink-rgb), 0.055); border: 1px solid var(--pf-border-2); color: var(--pf-ink); }
        .hx-cta-s:hover { background: rgba(var(--pf-ink-rgb), 0.12); border-color: rgba(var(--pf-ink-rgb), 0.5); color: var(--pf-ink); }

        /* the result card */
        .hx-res {
          background: var(--pf-surface);
          border: 1px solid var(--pf-border); border-radius: 10px; padding: 22px 24px;
        }
        .hx-res-k {
          font-size: 9.5px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: var(--pf-ink-3); margin-bottom: 12px;
        }
        .hx-res-q { font-size: 14.5px; font-weight: 700; color: var(--pf-ink); line-height: 1.5; margin: 0 0 18px; }

        .hx-bar { margin-bottom: 14px; }
        .hx-bar-top { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 7px; }
        .hx-bar-n { font-size: 12.5px; font-weight: 700; color: var(--pf-ink); }
        .hx-bar-v { font-size: 18.5px; font-weight: 800; letter-spacing: -0.5px; font-family: ui-monospace, Menlo, monospace; }
        .hx-bar.is-good .hx-bar-v { color: var(--pf-pos); }
        .hx-bar.is-bad  .hx-bar-v { color: var(--pf-accent); }
        .hx-bar-track { height: 9px; border-radius: 999px; background: var(--pf-sunk); overflow: hidden; }
        .hx-bar-fill { height: 100%; border-radius: 999px; transform-origin: left center; animation: hxGrow 1.1s cubic-bezier(.2,.8,.2,1) both; }
        .hx-bar.is-good .hx-bar-fill { background: var(--pf-pos); }
        .hx-bar.is-bad  .hx-bar-fill { background: var(--pf-neg); }
        @keyframes hxGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .hx-bar-s { font-size: 11.5px; color: var(--pf-ink-3); margin-top: 6px; line-height: 1.5; }

        .hx-res-delta {
          display: flex; align-items: baseline; gap: 10px;
          border-top: 1px solid var(--pf-border);
          border-bottom: 1px solid var(--pf-border);
          padding: 11px 0; margin: 2px 0 14px;
        }
        .hx-res-delta b { font-size: 16.5px; font-weight: 800; color: var(--pf-pos); font-family: ui-monospace, Menlo, monospace; }
        .hx-res-delta span { font-size: 11.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--pf-ink-2); }

        .hx-res-cap { font-size: 12.5px; line-height: 1.68; color: var(--pf-ink-2); margin: 0 0 13px; }
        .hx-res-foot {
          font-size: 11.5px; line-height: 1.65; color: var(--pf-ink-3);
          padding-top: 14px; border-top: 1px solid rgba(var(--pf-ink-rgb), 0.06); margin: 0;
        }
        .hx-res-foot b { color: var(--pf-ink-2); font-weight: 600; }

        /* ── 4 · lanes ──────────────────────────────────────── */
        .hx-lanes {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border);
          border-radius: 10px; overflow: hidden; margin-bottom: 14px;
        }
        @media (max-width: 860px) { .hx-lanes { grid-template-columns: 1fr; } }
        .hx-lane {
          display: flex; flex-direction: column; gap: 8px;
          background: var(--pf-surface); padding: 17px 19px; text-decoration: none;
          transition: background .25s;
        }
        .hx-lane:hover { background: var(--pf-surface-2); }
        .hx-lane-k {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 9.5px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase;
        }
        .hx-lane.is-live    .hx-lane-k { color: var(--pf-pos); }
        .hx-lane.is-pending .hx-lane-k { color: var(--pf-accent); }
        .hx-lane-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .hx-lane.is-live .hx-lane-dot { animation: hxBlink 3s ease-in-out infinite; }
        .hx-lane.is-pending .hx-lane-dot { background: transparent; border: 1.5px solid currentColor; }
        @keyframes hxBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        .hx-lane-n { font-size: 15.5px; font-weight: 800; color: var(--pf-ink); letter-spacing: -0.3px; }
        .hx-lane-l { font-size: 12.5px; line-height: 1.58; color: var(--pf-ink-2); flex: 1; }
        .hx-lane-go {
          display: inline-flex; align-items: center; gap: 7px; margin-top: 4px;
          font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: var(--pf-ink);
        }
        .hx-lane:hover .hx-lane-go { color: var(--pf-ink); }

        .hx-before {
          font-size: 12.5px; line-height: 1.7; color: var(--pf-ink-3); margin: 0 0 18px;
        }
        .hx-before b { color: var(--pf-ink-2); font-weight: 600; }
        .hx-before a { color: var(--pf-ink-2); text-decoration: none; border-bottom: 1px solid var(--pf-border-2); }
        .hx-before a:hover { color: var(--pf-ink); border-color: rgba(var(--pf-ink-rgb), 0.5); }

        .hx-cue {
          display: inline-flex; align-items: center; gap: 10px;
          color: var(--pf-ink-3); font-size: 12px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none; transition: color .25s;
        }
        .hx-cue:hover { color: var(--pf-ink); }
        .hx-cue-i { animation: hxBounce 2s infinite; }
        @keyframes hxBounce {
          0%,20%,50%,80%,100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hx-live-dot, .hx-lane-dot, .hx-cue-i, .hx-bar-fill { animation: none !important; }
          .hx-cta:hover, .hx-live-bar:hover { transform: none; }
        }
      `}</style>

      <div className="container hx">

        {/* ══ 1 · the company is live ═══════════════════════════ */}
        <a className="hx-accept" href="#recognition">
          <span className="hx-seal" aria-hidden="true">
            <Icon name="check" size={30} />
            <span className="hx-seal-k">Accepted</span>
          </span>
          <span>
            <span className="hx-accept-eb" style={{ display: 'block' }}>Peer reviewed &middot; double-blind &middot; 30 Sep 2026</span>
            <span className="hx-accept-t" style={{ display: 'block' }}>My paper is <span>accepted at DeepMath 2026.</span></span>
            <span className="hx-accept-l" style={{ display: 'block' }}>
              <em>Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics</em>
              {' '}&mdash; the mathematics under ORMAS &mdash; accepted at the Conference on the Mathematical Theory of Deep
              Neural Networks. Poster, Ohio State University, 29&ndash;30 October 2026.
            </span>
          </span>
          <span className="hx-accept-go">The story <Icon name="arrowRight" size={14} /></span>
        </a>

        <a className="hx-live-bar" href="https://oxiedo.com" target="_blank" rel="noreferrer">
          <span className="hx-live-tag"><span className="hx-live-dot" />Now Live</span>
          <span className="hx-live-txt">
            <b>OXIEDO is live.</b> The company I built on this research is open for business at oxiedo.com.
          </span>
          <span className="hx-live-go">oxiedo.com <Icon name="externalLink" size={14} /></span>
        </a>

        {/* ══ 2 · the claim ·  3 · the evidence ════════════════ */}
        <div className="hx-top tmp-scroll-trigger tmp-fade-in animation-order-1">

          <div>
            <div className="hx-id">
              Rokib Al Dhin Raadh <i /> <span className="age">18 years old</span> <i /> Dhaka, Bangladesh <i /> No institution
            </div>

            <h1 className="hx-h1">
              The black box was never a law of nature.
              <span>It was one decision, made in 1986.</span>
            </h1>

            <p className="hx-kicker">I went back and changed it. I was seventeen.</p>

            <p className="hx-lead">
              Every neural network ever shipped has the same blind spot. One error signal touches every
              parameter at once, so when something inside breaks, no number anywhere in the system says
              what. Forty years of interpretability has been people standing outside a finished model,
              guessing backwards.
            </p>
            <p className="hx-lead">
              <strong>I stopped guessing.</strong> Bound each node&apos;s path to the loss at four operations
              and the guess becomes a measurement the network takes about itself, while it trains.
            </p>

            <p className="hx-trust">
              I am <span className="age">eighteen years old</span>. 383 controlled experiments, one RTX 3090, and no university,
              no lab, no advisor, no funding and nobody else on the project. The paper is public, the code
              reproduces every run from seed, and the company built on it is live.
            </p>

            <div className="hx-ctas">
              <a className="hx-cta hx-cta-p" href="https://oxiedo.com" target="_blank" rel="noreferrer">
                <Icon name="externalLink" size={15} />
                oxiedo.com
              </a>
              <a className="hx-cta hx-cta-s" href="#research">
                <Icon name="fileText" size={15} />
                Read the Research
              </a>
              <a className="hx-cta hx-cta-s" href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer">
                <Icon name="link" size={15} />
                Preprint
              </a>
            </div>
          </div>

          {/* the single result that carries the claim */}
          <div className="hx-res">
            <div className="hx-res-k">One experiment, and what it settles</div>
            <p className="hx-res-q">
              I killed a layer. Mid-training, on a network that had already reached 85%, on purpose.
            </p>

            <div className="hx-bar is-good">
              <div className="hx-bar-top">
                <span className="hx-bar-n">ORMAS</span>
                <span className="hx-bar-v">80.3%</span>
              </div>
              <div className="hx-bar-track">
                <div className="hx-bar-fill" style={{ width: '80.3%' }} />
              </div>
              <div className="hx-bar-s">Found the damage inside one epoch. Climbed back through 85 repairs, each one logged with its cause.</div>
            </div>

            <div className="hx-bar is-bad">
              <div className="hx-bar-top">
                <span className="hx-bar-n">Parameter-matched baseline</span>
                <span className="hx-bar-v">10.0%</span>
              </div>
              <div className="hx-bar-track">
                <div className="hx-bar-fill" style={{ width: '10%', animationDelay: '0.15s' }} />
              </div>
              <div className="hx-bar-s">Chance. It never comes back. Not on any seed, not ever.</div>
            </div>

            <div className="hx-res-delta">
              <b>+70.3 pp</b>
              <span>the gap, on every seed</span>
            </div>

            <p className="hx-res-cap">
              The ordinary network doesn&apos;t fail to find the damage. It has nothing to look at. Nobody
              ever computed a number that would tell it which part died.
            </p>
            <p className="hx-res-foot">
              <b>Conditions:</b> CIFAR-10, 85.1% before the lesion, three seeds, parameter-matched baseline.
              Error bars, the full table and the one result that went against me are in the research section.
            </p>
          </div>
        </div>

        {/* ══ 4 · where the three live things are ══════════════ */}
        <div className="tmp-scroll-trigger tmp-fade-in animation-order-2">
          <div className="hx-lanes">
            {lanes.map((l) => (
              <a
                className={`hx-lane is-${l.state}`}
                key={l.name}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className={`hx-lane-k`}><span className="hx-lane-dot" />{l.tag}</span>
                <span className="hx-lane-n">{l.name}</span>
                <span className="hx-lane-l">{l.line}</span>
                <span className="hx-lane-go">
                  {l.cta} <Icon name={l.external ? 'externalLink' : 'arrowRight'} size={12} />
                </span>
              </a>
            ))}
          </div>

          <p className="hx-before">
            <b>Everything before that —</b> <a href="#oximo">OXIMO</a>, 40,933 lines of an operating system
            where agents hire their own staff · <a href="#black-bloxie">Black Bloxie LTD</a>, a real company I
            spent twelve months trying to disprove myself with · <a href="#ventures">five businesses and one
            exit</a>, all of it before I turned <span className="age">eighteen</span>.
          </p>

          <a href="#recognition" className="hx-cue">
            Start with the last three months
            <span className="hx-cue-i"><Icon name="arrowDown" size={15} /></span>
          </a>
        </div>

      </div>
    </div>
  );
}
