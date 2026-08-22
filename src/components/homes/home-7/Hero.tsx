import Icon from '@/components/common/Icon';

/**
 * Hero — the site's thesis is an architecture that emits its own state, so the
 * hero emits the project's state. The right-hand panel is a status readout of
 * the actual stack; the ticker cycles telemetry lines quoted from the ORMAS
 * supplementary material rather than invented "live" data.
 */

const stack = [
  {
    layer: 'L1',
    name: 'OXIMO',
    desc: 'Cognitive multi-agent OS',
    metric: '40,933 lines · 2,011 tests passing',
    status: 'Operational',
    state: 'live' as const,
  },
  {
    layer: 'L2',
    name: 'ORMAS',
    desc: 'Self-correcting training architecture',
    metric: '383 experiments · submitted to AAAI 2027',
    status: 'Preprint live',
    state: 'live' as const,
  },
  {
    layer: 'L3',
    name: 'Project Cherry',
    desc: 'A model the institution owns',
    metric: 'Specified · compute-gated',
    status: 'Not built',
    state: 'pending' as const,
  },
];

// Verbatim from supplementary.tex §5.1–5.3
const telemetry = [
  '[node_13] goodness 0.04 → CRITICAL · neurogenesis · loss 1.842→1.791 · ACCEPTED',
  '[conv_layer_3] gradient conflict 0.58 → QUARANTINED · noise memorisation',
  '[baldwin] corrections 4.2/epoch → 0.00 · network self-stabilised · locked',
  '[dag_run] 23,227 correction events logged across 200 epochs',
];

const metrics = [
  { v: '383', l: 'Controlled experiments', s: 'On one RTX 3090' },
  { v: '80.3%', l: 'Recovery after a killed layer', s: 'Baseline: 10.0%, permanently' },
  { v: '94.6%', l: 'Prior task retained', s: 'ResNet-18 retains 47.3%' },
  { v: '−91% / +1,300%', l: '12-month causal ablation', s: 'Run on a live UK company' },
];

export default function Hero(_props?: any) {
  return (
    <div className="tmp-banner-one-area" id="home">
      <style>{`
        .hx { padding: 104px 0 88px; }
        @media (max-width: 991px) { .hx { padding: 72px 0 64px; } }

        .hx-top {
          display: grid; grid-template-columns: 1.08fr 0.92fr;
          gap: 56px; align-items: center; margin-bottom: 60px;
        }
        @media (max-width: 1100px) { .hx-top { grid-template-columns: 1fr; gap: 40px; } }

        /* ── narrative ─────────────────────────────────────── */
        .hx-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 700; letter-spacing: 2.4px;
          text-transform: uppercase; color: #a6b0bc; margin-bottom: 22px;
          padding: 7px 15px 7px 12px; border-radius: 999px;
          background: rgba(196,207,222,0.05); border: 1px solid #2f343a;
        }
        .hx-live {
          width: 7px; height: 7px; border-radius: 50%; background: #ff4a57;
          animation: hxPulse 2.4s infinite;
        }
        @keyframes hxPulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,74,87,0.65); }
          70%  { box-shadow: 0 0 0 9px rgba(255,74,87,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,74,87,0); }
        }

        .hx-h1 {
          font-size: clamp(34px, 4.6vw, 58px); font-weight: 800; color: #fff;
          letter-spacing: -1.6px; line-height: 1.08; margin: 0 0 26px;
        }
        .hx-h1 span { color: #c4cfde; }

        .hx-age {
          display: flex; align-items: baseline; gap: 14px;
          padding: 20px 0; margin: 0 0 24px; max-width: 560px;
          border-top: 1px solid rgba(255,255,255,0.09);
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }
        .hx-age-n {
          font-size: clamp(40px, 4.8vw, 56px); font-weight: 800; color: #fff;
          letter-spacing: -2px; line-height: 0.9;
        }
        .hx-age-t { font-size: clamp(15px, 1.6vw, 18px); color: #c4cfde; line-height: 1.6; font-weight: 500; }

        .hx-thesis {
          font-size: 17px; line-height: 1.75; color: #9aa4b0;
          max-width: 570px; margin: 0 0 32px;
        }
        .hx-thesis strong { color: #c4cfde; font-weight: 600; }

        .hx-ctas { display: flex; flex-wrap: wrap; gap: 11px; }
        .hx-cta {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 13px 22px; border-radius: 8px; text-decoration: none;
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.8px;
          text-transform: uppercase;
          transition: background .25s, border-color .25s, transform .25s, color .25s;
        }
        .hx-cta:hover { transform: translateY(-2px); }
        .hx-cta-p {
          background: rgba(255,74,87,0.12); border: 1px solid rgba(255,74,87,0.38); color: #ff6b76;
        }
        .hx-cta-p:hover { background: rgba(255,74,87,0.2); border-color: rgba(255,74,87,0.65); color: #ff8a93; }
        .hx-cta-s {
          background: rgba(196,207,222,0.055); border: 1px solid #343941; color: #c4cfde;
        }
        .hx-cta-s:hover { background: rgba(196,207,222,0.11); border-color: rgba(196,207,222,0.5); color: #fff; }

        /* ── status panel ──────────────────────────────────── */
        .hx-panel {
          background: linear-gradient(180deg, #16181c 0%, #121417 100%);
          border: 1px solid #2f343a; border-radius: 14px; overflow: hidden;
          box-shadow: 0 24px 60px -30px rgba(0,0,0,0.95);
        }
        .hx-panel-bar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; padding: 13px 18px;
          background: rgba(255,255,255,0.022); border-bottom: 1px solid #2a2d32;
        }
        .hx-panel-t {
          font-size: 10.5px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #a6b0bc;
        }
        .hx-panel-badge {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.3px;
          text-transform: uppercase; color: #7fd88f;
          background: rgba(127,216,143,0.1); border: 1px solid rgba(127,216,143,0.3);
          border-radius: 999px; padding: 3px 10px; white-space: nowrap;
        }

        .hx-row {
          display: grid; grid-template-columns: 34px 1fr auto;
          gap: 14px; align-items: center; padding: 17px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.045);
        }
        .hx-row.is-pending { background: rgba(255,74,87,0.035); }
        .hx-l {
          font-size: 10px; font-weight: 800; letter-spacing: 1px;
          color: #7d8794; font-family: ui-monospace, Menlo, monospace;
        }
        .hx-n { font-size: 15px; font-weight: 700; color: #e8edf4; line-height: 1.25; }
        .hx-d { font-size: 11.5px; color: #98a2ae; margin-top: 2px; }
        .hx-m {
          font-size: 10.5px; color: #7d8794; margin-top: 5px;
          font-family: ui-monospace, Menlo, monospace;
        }
        .hx-st {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; white-space: nowrap;
        }
        .hx-st.live { color: #7fd88f; }
        .hx-st.pending { color: #ff6b76; }
        .hx-dot { width: 6px; height: 6px; border-radius: 50%; }
        .hx-st.live .hx-dot { background: #7fd88f; animation: hxBlink 3s ease-in-out infinite; }
        .hx-st.pending .hx-dot { background: transparent; border: 1.5px solid #ff6b76; }
        @keyframes hxBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }

        .hx-lab { padding: 16px 18px; border-bottom: 1px solid rgba(255,255,255,0.045); }
        .hx-lab-h {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: #7d8794; margin-bottom: 9px;
        }
        .hx-lab-n { font-size: 14px; font-weight: 700; color: #c4cfde; line-height: 1.4; }
        .hx-lab-v { display: flex; gap: 20px; margin-top: 11px; flex-wrap: wrap; }
        .hx-lab-v div { font-size: 11.5px; color: #98a2ae; }
        .hx-lab-v b { display: block; font-size: 16px; font-weight: 800; margin-bottom: 2px; }
        .hx-lab-v .down b { color: #ff6b76; }
        .hx-lab-v .up b { color: #7fd88f; }

        /* telemetry ticker */
        .hx-tick { padding: 13px 18px; background: #0b0c0e; position: relative; height: 64px; overflow: hidden; }
        .hx-tick-h {
          font-size: 9px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #7d8794; margin-bottom: 7px;
        }
        .hx-tick-line {
          position: absolute; left: 18px; right: 18px; top: 34px;
          font-family: ui-monospace, Menlo, monospace; font-size: 10.5px;
          line-height: 1.5; color: #a6b0bc; opacity: 0;
          animation: hxTick 16s linear infinite;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        @keyframes hxTick {
          0%, 1%    { opacity: 0; transform: translateY(6px); }
          3%, 22%   { opacity: 1; transform: translateY(0); }
          25%, 100% { opacity: 0; transform: translateY(-6px); }
        }

        /* ── metrics strip ─────────────────────────────────── */
        .hx-metrics {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1px; background: #2a2d32; border: 1px solid #2a2d32;
          border-radius: 12px; overflow: hidden; margin-bottom: 56px;
        }
        .hx-metric { background: #121417; padding: 22px 24px; }
        .hx-metric-v {
          font-size: clamp(21px, 2.3vw, 27px); font-weight: 800; color: #c4cfde;
          line-height: 1.1; margin-bottom: 7px; letter-spacing: -0.5px;
        }
        .hx-metric-l { font-size: 12.5px; color: #c4cfde; font-weight: 600; line-height: 1.4; }
        .hx-metric-s { font-size: 11.5px; color: #838d99; margin-top: 4px; line-height: 1.45; }

        .hx-cue {
          display: inline-flex; align-items: center; gap: 10px;
          color: #838d99; font-size: 12.5px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none; transition: color .25s;
        }
        .hx-cue:hover { color: #c4cfde; }
        .hx-cue-i { animation: hxBounce 2s infinite; }
        @keyframes hxBounce {
          0%,20%,50%,80%,100% { transform: translateY(0); }
          40% { transform: translateY(-7px); }
          60% { transform: translateY(-3px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hx-live, .hx-dot, .hx-cue-i, .hx-tick-line { animation: none !important; }
          .hx-tick-line:first-of-type { opacity: 1; }
          .hx-cta:hover { transform: none; }
        }
      `}</style>

      <div className="container hx">

        {/* ══ TOP ═══════════════════════════════════════════════ */}
        <div className="hx-top tmp-scroll-trigger tmp-fade-in animation-order-1">

          <div>
            <div className="hx-eyebrow">
              <span className="hx-live" />
              Independent AI Research · Dhaka, Bangladesh
            </div>

            <h1 className="hx-h1">
              Neural networks fail opaquely.<br />
              <span>I built an architecture that doesn&apos;t.</span>
            </h1>

            <div className="hx-age">
              <div className="hx-age-n">18</div>
              <div className="hx-age-t">
                years old. No university, no advisor, no lab, no funding — and a three-layer stack with the middle
                layer published.
              </div>
            </div>

            <p className="hx-thesis">
              A network that diagnoses and repairs its own damage mid-training. An operating system whose agents hire
              their own specialists. And a twelve-month lesion study on a real company, run to prove the architecture —
              not the market — was causing the output. <strong>All of it documented, reproducible, and checkable.</strong>
            </p>

            <div className="hx-ctas">
              <a className="hx-cta hx-cta-p" href="#research">
                <Icon name="fileText" size={15} />
                Read the Research
              </a>
              <a className="hx-cta hx-cta-s" href="#deployment">
                <Icon name="chart" size={15} />
                See the Proof
              </a>
              <a className="hx-cta hx-cta-s" href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer">
                <Icon name="externalLink" size={15} />
                Preprint
              </a>
            </div>
          </div>

          {/* ── status panel ── */}
          <div className="hx-panel">
            <div className="hx-panel-bar">
              <span className="hx-panel-t">OXIDO · Stack Status</span>
              <span className="hx-panel-badge">2 of 3 layers built</span>
            </div>

            {stack.map((s) => (
              <div className={`hx-row${s.state === 'pending' ? ' is-pending' : ''}`} key={s.name}>
                <div className="hx-l">{s.layer}</div>
                <div>
                  <div className="hx-n">{s.name}</div>
                  <div className="hx-d">{s.desc}</div>
                  <div className="hx-m">{s.metric}</div>
                </div>
                <div className={`hx-st ${s.state}`}>
                  <span className="hx-dot" />
                  {s.status}
                </div>
              </div>
            ))}

            <div className="hx-lab">
              <div className="hx-lab-h">Laboratory · Black Bloxie LTD</div>
              <div className="hx-lab-n">A 12-month controlled ablation, run on a live UK company</div>
              <div className="hx-lab-v">
                <div className="down"><b>−91%</b>on removal</div>
                <div className="up"><b>+1,300%</b>on re-injection</div>
                <div><b style={{ color: '#c4cfde' }}>£0</b>ad spend</div>
              </div>
            </div>

            <div className="hx-tick">
              <div className="hx-tick-h">Recorded telemetry · ORMAS DAG run</div>
              {telemetry.map((t, i) => (
                <div className="hx-tick-line" key={t} style={{ animationDelay: `${i * 4}s` }}>{t}</div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ METRICS ═══════════════════════════════════════════ */}
        <div className="hx-metrics tmp-scroll-trigger tmp-fade-in animation-order-2">
          {metrics.map((m) => (
            <div className="hx-metric" key={m.l}>
              <div className="hx-metric-v">{m.v}</div>
              <div className="hx-metric-l">{m.l}</div>
              <div className="hx-metric-s">{m.s}</div>
            </div>
          ))}
        </div>

        <div className="tmp-scroll-trigger tmp-fade-in animation-order-4">
          <a href="#recognition" className="hx-cue">
            Start from the outside signal
            <span className="hx-cue-i"><Icon name="arrowDown" size={15} /></span>
          </a>
        </div>

      </div>
    </div>
  );
}
