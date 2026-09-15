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
    line: 'The architecture itself. 383 experiments, four families, every run reproducible. In review at AAAI 2027.',
    href: '#research',
    cta: 'Read it',
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
    cta: 'The plan',
    state: 'pending' as const,
    external: false,
  },
];

export default function Hero(_props?: any) {
  return (
    <div className="tmp-banner-one-area" id="home">
      <style>{`
        .hx { padding: 30px 0 84px; }
        @media (max-width: 991px) { .hx { padding: 22px 0 60px; } }

        /* ── 1 · live strip ─────────────────────────────────── */
        .hx-live-bar {
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
          text-decoration: none; margin-bottom: 52px;
          padding: 11px 18px; border-radius: 10px;
          border: 1px solid rgba(255,74,87,0.36);
          background: linear-gradient(90deg, rgba(255,74,87,0.13) 0%, rgba(255,74,87,0.03) 55%, rgba(255,74,87,0) 100%), #16181c;
          transition: border-color .25s, background .25s;
        }
        .hx-live-bar:hover { border-color: rgba(255,74,87,0.7); }
        .hx-live-tag {
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          font-size: 10px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase;
          color: #ff8189;
        }
        .hx-live-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #ff6b76;
          animation: hxPulse 2.4s infinite;
        }
        @keyframes hxPulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,74,87,0.6); }
          70%  { box-shadow: 0 0 0 8px rgba(255,74,87,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,74,87,0); }
        }
        .hx-live-txt { font-size: 14px; color: #c4cfde; flex: 1; min-width: 200px; line-height: 1.5; }
        .hx-live-txt b { color: #fff; font-weight: 700; }
        .hx-live-go {
          display: inline-flex; align-items: center; gap: 7px; flex-shrink: 0;
          font-size: 12px; font-weight: 800; letter-spacing: 0.8px; text-transform: uppercase;
          color: #fff;
        }

        /* ── 2 · claim + 3 · result ─────────────────────────── */
        .hx-top {
          display: grid; grid-template-columns: 1.12fr 0.88fr;
          gap: 60px; align-items: start; margin-bottom: 64px;
        }
        @media (max-width: 1100px) { .hx-top { grid-template-columns: 1fr; gap: 44px; } }

        .hx-id {
          display: inline-flex; align-items: center; gap: 11px; flex-wrap: wrap;
          font-size: 11.5px; font-weight: 700; letter-spacing: 1.8px;
          text-transform: uppercase; color: #a6b0bc; margin-bottom: 26px;
          padding: 7px 15px; border-radius: 999px;
          background: rgba(196,207,222,0.05); border: 1px solid #2f343a;
        }
        .hx-id i { width: 3px; height: 3px; border-radius: 50%; background: #565d68; font-style: normal; }

        .hx-h1 {
          font-size: clamp(34px, 4.7vw, 60px); font-weight: 800; color: #fff;
          letter-spacing: -2px; line-height: 1.04; margin: 0 0 18px;
        }
        .hx-h1 span { display: block; color: #ff8189; }

        .hx-kicker {
          font-size: clamp(18px, 1.9vw, 23px); font-weight: 700; color: #c4cfde;
          line-height: 1.4; letter-spacing: -0.4px; margin: 0 0 26px;
          padding-left: 16px; border-left: 3px solid #ff4a57;
        }

        .hx-lead { font-size: 17px; line-height: 1.78; color: #9aa4b0; max-width: 610px; margin: 0 0 16px; }
        .hx-lead strong { color: #c4cfde; font-weight: 600; }

        .hx-trust {
          font-size: 13px; line-height: 1.75; color: #838d99;
          max-width: 610px; margin: 0 0 32px;
          padding-left: 15px; border-left: 2px solid #2f343a;
        }
        .hx-trust b { color: #a6b0bc; font-weight: 600; }

        .hx-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .hx-cta {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 22px; border-radius: 8px; text-decoration: none;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.9px; text-transform: uppercase;
          transition: background .25s, border-color .25s, transform .25s, color .25s;
        }
        .hx-cta:hover { transform: translateY(-2px); }
        .hx-cta-p { background: #d43644; border: 1px solid #ff6b76; color: #fff; }
        .hx-cta-p:hover { background: #bd2734; color: #fff; }
        .hx-cta-s { background: rgba(196,207,222,0.055); border: 1px solid #343941; color: #c4cfde; }
        .hx-cta-s:hover { background: rgba(196,207,222,0.12); border-color: rgba(196,207,222,0.5); color: #fff; }

        /* the result card */
        .hx-res {
          background: linear-gradient(180deg, #16181c 0%, #121417 100%);
          border: 1px solid #2f343a; border-radius: 14px; padding: 28px 30px;
          box-shadow: 0 24px 60px -32px rgba(0,0,0,0.95);
        }
        .hx-res-k {
          font-size: 9.5px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99; margin-bottom: 12px;
        }
        .hx-res-q { font-size: 16px; font-weight: 700; color: #fff; line-height: 1.5; margin: 0 0 24px; }

        .hx-bar { margin-bottom: 18px; }
        .hx-bar-top { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 7px; }
        .hx-bar-n { font-size: 12.5px; font-weight: 700; color: #c4cfde; }
        .hx-bar-v { font-size: 21px; font-weight: 800; letter-spacing: -0.5px; font-family: ui-monospace, Menlo, monospace; }
        .hx-bar.is-good .hx-bar-v { color: #8fd89c; }
        .hx-bar.is-bad  .hx-bar-v { color: #ff6b76; }
        .hx-bar-track { height: 9px; border-radius: 999px; background: #1e2126; overflow: hidden; }
        .hx-bar-fill { height: 100%; border-radius: 999px; transform-origin: left center; animation: hxGrow 1.1s cubic-bezier(.2,.8,.2,1) both; }
        .hx-bar.is-good .hx-bar-fill { background: linear-gradient(90deg, #5fb872, #8fd89c); }
        .hx-bar.is-bad  .hx-bar-fill { background: linear-gradient(90deg, #a32d37, #ff6b76); }
        @keyframes hxGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .hx-bar-s { font-size: 11.5px; color: #838d99; margin-top: 6px; line-height: 1.5; }

        .hx-res-delta {
          display: inline-flex; align-items: baseline; gap: 9px;
          background: rgba(127,216,143,0.09); border: 1px solid rgba(127,216,143,0.3);
          border-radius: 8px; padding: 9px 15px; margin: 6px 0 18px;
        }
        .hx-res-delta b { font-size: 18px; font-weight: 800; color: #8fd89c; font-family: ui-monospace, Menlo, monospace; }
        .hx-res-delta span { font-size: 11.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #9aa4b0; }

        .hx-res-cap { font-size: 13px; line-height: 1.7; color: #98a2ae; margin: 0 0 16px; }
        .hx-res-foot {
          font-size: 11.5px; line-height: 1.65; color: #838d99;
          padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.06); margin: 0;
        }
        .hx-res-foot b { color: #a6b0bc; font-weight: 600; }

        /* ── 4 · lanes ──────────────────────────────────────── */
        .hx-lanes {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: #2a2d32; border: 1px solid #2a2d32;
          border-radius: 12px; overflow: hidden; margin-bottom: 22px;
        }
        @media (max-width: 860px) { .hx-lanes { grid-template-columns: 1fr; } }
        .hx-lane {
          display: flex; flex-direction: column; gap: 8px;
          background: #16181c; padding: 22px 24px; text-decoration: none;
          transition: background .25s;
        }
        .hx-lane:hover { background: #1b1e23; }
        .hx-lane-k {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 9.5px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase;
        }
        .hx-lane.is-live    .hx-lane-k { color: #8fd89c; }
        .hx-lane.is-pending .hx-lane-k { color: #ff8189; }
        .hx-lane-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .hx-lane.is-live .hx-lane-dot { animation: hxBlink 3s ease-in-out infinite; }
        .hx-lane.is-pending .hx-lane-dot { background: transparent; border: 1.5px solid currentColor; }
        @keyframes hxBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        .hx-lane-n { font-size: 17px; font-weight: 800; color: #fff; letter-spacing: -0.3px; }
        .hx-lane-l { font-size: 13px; line-height: 1.6; color: #98a2ae; flex: 1; }
        .hx-lane-go {
          display: inline-flex; align-items: center; gap: 7px; margin-top: 4px;
          font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: #c4cfde;
        }
        .hx-lane:hover .hx-lane-go { color: #fff; }

        .hx-before {
          font-size: 13px; line-height: 1.8; color: #838d99; margin: 0 0 40px;
        }
        .hx-before b { color: #a6b0bc; font-weight: 600; }
        .hx-before a { color: #a6b0bc; text-decoration: none; border-bottom: 1px solid #343941; }
        .hx-before a:hover { color: #fff; border-color: rgba(255,255,255,0.5); }

        .hx-cue {
          display: inline-flex; align-items: center; gap: 10px;
          color: #838d99; font-size: 12px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none; transition: color .25s;
        }
        .hx-cue:hover { color: #c4cfde; }
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
        <a className="hx-live-bar" href="https://oxiedo.com" target="_blank" rel="noreferrer">
          <span className="hx-live-tag"><span className="hx-live-dot" />Now Live</span>
          <span className="hx-live-txt">
            <b>OXIEDO is live.</b> The company I built on this research is open for business at oxiedo.com.
          </span>
          <span className="hx-live-go">Visit <Icon name="externalLink" size={14} /></span>
        </a>

        {/* ══ 2 · the claim ·  3 · the evidence ════════════════ */}
        <div className="hx-top tmp-scroll-trigger tmp-fade-in animation-order-1">

          <div>
            <div className="hx-id">
              Rokib Al Dhin Raadh <i /> 18 <i /> Dhaka, Bangladesh <i /> Independent
            </div>

            <h1 className="hx-h1">
              The black box was never a law of nature.
              <span>It was one decision, made in 1986.</span>
            </h1>

            <p className="hx-kicker">I went back and changed it. I was seventeen.</p>

            <p className="hx-lead">
              Every neural network ever shipped has the same blind spot. One error signal touches every
              parameter at once, so when something inside goes wrong there is no number anywhere in the
              system that says what. Forty years of interpretability has been people standing outside a
              finished model, guessing backwards.
            </p>
            <p className="hx-lead">
              <strong>I stopped guessing.</strong> Bound the path from each node to the loss at exactly four
              operations and the guess becomes a measurement — one the network takes about itself, while it
              trains, and cannot route around.
            </p>

            <p className="hx-trust">
              383 controlled experiments. One RTX 3090. <b>No university, no lab, no advisor, no funding,
              and nobody else on the project.</b> The paper is public, the code reproduces every run from
              seed, and the company built on it went live this year.
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
              <span>the gap</span>
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
            exit</a>, all of it before I turned eighteen.
          </p>

          <a href="#recognition" className="hx-cue">
            Start where other people judged it
            <span className="hx-cue-i"><Icon name="arrowDown" size={15} /></span>
          </a>
        </div>

      </div>
    </div>
  );
}
