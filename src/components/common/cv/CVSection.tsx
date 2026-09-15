import type { ReactNode } from 'react';

/**
 * One header shell for every section on the page.
 *
 * The site previously gave each section its own header treatment, which is the
 * main reason it read as a pile of documents rather than one portfolio. Every
 * section now declares the same three things in the same place: which phase of
 * the work it belongs to, what it is, and one sentence on why it is here.
 */

export type Phase = 'now' | 'before' | 'about';

const phaseLabel: Record<Phase, string> = {
  now: 'Now',
  before: 'Before This',
  about: 'About',
};

interface Props {
  id: string;
  phase: Phase;
  /** Short name of the thing — ORMAS, OXIMO, Black Bloxie. */
  eyebrow: string;
  title: string;
  /** One sentence. What this is and why it is on the page. */
  lead: ReactNode;
  /** Optional hard facts — status, scale, dates. Keep to four. */
  meta?: { k: string; v: string }[];
  children: ReactNode;
  /** Last section on the page omits the closing rule. */
  last?: boolean;
}

export default function CVSection({
  id, phase, eyebrow, title, lead, meta, children, last,
}: Props) {
  return (
    <div className="row mb--50" id={id}>
      <style>{`
        .sx-head { margin-bottom: 34px; }

        .sx-phase {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 16px;
          padding: 5px 12px; border-radius: 999px;
        }
        .sx-phase-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .sx-phase.is-now    { color: #ff8189; background: rgba(255,74,87,0.1);   border: 1px solid rgba(255,74,87,0.34); }
        .sx-phase.is-before { color: #9aa4b0; background: rgba(196,207,222,0.06); border: 1px solid #343941; }
        .sx-phase.is-about  { color: #9aa4b0; background: rgba(196,207,222,0.06); border: 1px solid #343941; }

        .sx-eyebrow {
          font-size: 13px; font-weight: 800; letter-spacing: 2.4px;
          text-transform: uppercase; color: #c4cfde; margin-bottom: 10px;
        }
        .sx-title {
          font-size: clamp(26px, 3.1vw, 38px); font-weight: 800; color: #fff;
          letter-spacing: -0.9px; line-height: 1.15; margin: 0 0 16px;
          max-width: 860px;
        }
        .sx-lead {
          font-size: 17px; line-height: 1.8; color: #9aa4b0;
          max-width: 720px; margin: 0;
        }
        .sx-lead strong { color: #c4cfde; font-weight: 600; }

        .sx-meta {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1px; background: #2a2d32; border: 1px solid #2a2d32;
          border-radius: 10px; overflow: hidden; margin-top: 26px;
        }
        .sx-meta-cell { background: #16181c; padding: 15px 18px; }
        .sx-meta-k {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.4px;
          text-transform: uppercase; color: #838d99; margin-bottom: 6px;
        }
        .sx-meta-v { font-size: 15px; font-weight: 700; color: #c4cfde; line-height: 1.35; }

        @media (max-width: 640px) { .sx-head { margin-bottom: 26px; } }
      `}</style>

      <div className="col-12">
        <div className="sx-head">
          <div className={`sx-phase is-${phase}`}>
            <span className="sx-phase-dot" aria-hidden="true" />
            {phaseLabel[phase]}
          </div>
          <div className="sx-eyebrow">{eyebrow}</div>
          <h2 className="sx-title">{title}</h2>
          <p className="sx-lead">{lead}</p>
          {meta && meta.length > 0 ? (
            <div className="sx-meta">
              {meta.map((m) => (
                <div className="sx-meta-cell" key={m.k}>
                  <div className="sx-meta-k">{m.k}</div>
                  <div className="sx-meta-v">{m.v}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {children}
      </div>

      {!last ? (
        <div className="col-12">
          <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
        </div>
      ) : null}
    </div>
  );
}
