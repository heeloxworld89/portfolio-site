import { useState, type ReactNode } from "react";

interface ExpandableSectionProps {
  closedLabel: string;
  openLabel?: string;
  hint?: string;
  /** Short content descriptors shown as chips — tells the reader what is inside. */
  meta?: string[];
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableSection({
  closedLabel,
  openLabel = "Hide Technical Detail",
  hint,
  meta,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="xps-wrap">
      <style>{`
        .xps-wrap { margin: 8px 0 40px; }

        .xps-toggle {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
          width: 100%;
          overflow: hidden;
          text-align: left;
          cursor: pointer;
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid #3a4048;
          background:
            linear-gradient(180deg, rgba(196,207,222,0.075) 0%, rgba(196,207,222,0.03) 100%),
            #16181c;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 6px 22px -14px rgba(0,0,0,0.9);
          transition: border-color 0.25s ease, box-shadow 0.25s ease,
                      transform 0.25s ease, background 0.25s ease;
        }
        .xps-toggle:hover {
          transform: translateY(-2px);
          border-color: rgba(196,207,222,0.55);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.07),
            0 10px 30px -14px rgba(0,0,0,0.95),
            0 0 0 3px rgba(196,207,222,0.07);
        }
        .xps-toggle:focus-visible {
          outline: none;
          border-color: #c4cfde;
          box-shadow: 0 0 0 3px rgba(196,207,222,0.25);
        }

        /* Light sweep — catches the eye during scroll, then rests */
        .xps-toggle::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 34%,
            rgba(196,207,222,0.06) 44%,
            rgba(196,207,222,0.13) 50%,
            rgba(196,207,222,0.06) 56%,
            transparent 66%
          );
          transform: translateX(-100%);
          animation: xpsSweep 6.5s ease-in-out infinite;
        }
        .xps-toggle.is-open::after { animation: none; opacity: 0; }
        @keyframes xpsSweep {
          0%, 55% { transform: translateX(-100%); }
          100%    { transform: translateX(100%); }
        }

        /* Left icon tile */
        .xps-icon {
          position: relative;
          flex-shrink: 0;
          width: 42px; height: 42px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          border: 1px solid rgba(196,207,222,0.28);
          background: rgba(196,207,222,0.08);
          color: #c4cfde;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .xps-toggle:hover .xps-icon {
          background: rgba(196,207,222,0.15);
          border-color: rgba(196,207,222,0.5);
        }
        /* Pulsing dot — signals "there is more here" */
        .xps-icon::before {
          content: "";
          position: absolute;
          top: -3px; right: -3px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #c4cfde;
          box-shadow: 0 0 0 2px #16181c;
          animation: xpsPulse 2.4s ease-in-out infinite;
        }
        .xps-toggle.is-open .xps-icon::before { display: none; }
        @keyframes xpsPulse {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(0.75); }
        }

        .xps-text { flex: 1; min-width: 0; }
        .xps-label {
          display: block;
          font-size: 15px; font-weight: 700; letter-spacing: 0.2px;
          color: #e8edf4; line-height: 1.35; margin-bottom: 4px;
        }
        .xps-hint {
          display: block;
          font-size: 12.5px; line-height: 1.6; color: #a6b0bc;
        }

        .xps-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 11px; }
        .xps-chip {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.9px;
          text-transform: uppercase;
          color: #c4cfde;
          background: rgba(196,207,222,0.09);
          border: 1px solid rgba(196,207,222,0.22);
          border-radius: 999px;
          padding: 4px 11px;
          white-space: nowrap;
        }

        /* Right action */
        .xps-action {
          flex-shrink: 0;
          display: flex; align-items: center; gap: 10px;
          color: #c4cfde;
        }
        .xps-action-word {
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase;
        }
        .xps-chev {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(196,207,222,0.3);
          background: rgba(196,207,222,0.07);
          transition: transform 0.3s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .xps-toggle:hover .xps-chev {
          background: rgba(196,207,222,0.16);
          border-color: rgba(196,207,222,0.55);
        }
        .xps-chev.is-open { transform: rotate(180deg); }

        @media (max-width: 640px) {
          .xps-toggle { gap: 13px; padding: 16px 16px; align-items: flex-start; }
          .xps-icon { width: 36px; height: 36px; }
          .xps-label { font-size: 14px; }
          .xps-action-word { display: none; }
          .xps-action { align-self: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .xps-toggle::after,
          .xps-icon::before { animation: none; }
          .xps-toggle:hover { transform: none; }
        }

        /* Body */
        .xps-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease;
        }
        .xps-body.is-open { grid-template-rows: 1fr; }
        .xps-body-inner { overflow: hidden; min-height: 0; }
        .xps-body.is-open .xps-body-inner { padding-top: 32px; }
      `}</style>

      <button
        type="button"
        className={`xps-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="xps-icon" aria-hidden="true">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </span>

        <span className="xps-text">
          <span className="xps-label">{open ? openLabel : closedLabel}</span>
          {hint && !open ? <span className="xps-hint">{hint}</span> : null}
          {meta && meta.length > 0 && !open ? (
            <span className="xps-meta">
              {meta.map((m) => (
                <span key={m} className="xps-chip">{m}</span>
              ))}
            </span>
          ) : null}
        </span>

        <span className="xps-action">
          <span className="xps-action-word">{open ? "Close" : "Expand"}</span>
          <span className={`xps-chev${open ? " is-open" : ""}`} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </span>
      </button>

      <div className={`xps-body${open ? " is-open" : ""}`}>
        <div className="xps-body-inner">{children}</div>
      </div>
    </div>
  );
}
