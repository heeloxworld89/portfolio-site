import { useState, type ReactNode } from "react";

interface ExpandableSectionProps {
  closedLabel: string;
  openLabel?: string;
  hint?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableSection({
  closedLabel,
  openLabel = "Hide Technical Detail",
  hint,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="xps-wrap">
      <style>{`
        .xps-wrap { margin: 8px 0 40px; }
        .xps-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          background: rgba(196,207,222,0.04);
          border: 1px solid #2a2d32;
          border-radius: 8px;
          padding: 16px 22px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          text-align: left;
        }
        .xps-toggle:hover {
          background: rgba(196,207,222,0.07);
          border-color: rgba(196,207,222,0.25);
        }
        .xps-toggle-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .xps-toggle-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: #c4cfde;
        }
        .xps-toggle-hint {
          font-size: 12px;
          color: #838d99;
        }
        .xps-chevron {
          flex-shrink: 0;
          color: #9aa4b0;
          transition: transform 0.25s ease;
        }
        .xps-chevron.is-open { transform: rotate(180deg); }
        .xps-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease;
        }
        .xps-body.is-open { grid-template-rows: 1fr; }
        .xps-body-inner {
          overflow: hidden;
          min-height: 0;
        }
        .xps-body.is-open .xps-body-inner {
          padding-top: 32px;
        }
      `}</style>

      <button
        type="button"
        className="xps-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="xps-toggle-text">
          <span className="xps-toggle-label">{open ? openLabel : closedLabel}</span>
          {hint && !open ? <span className="xps-toggle-hint">{hint}</span> : null}
        </span>
        <svg
          className={`xps-chevron${open ? " is-open" : ""}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div className={`xps-body${open ? " is-open" : ""}`}>
        <div className="xps-body-inner">{children}</div>
      </div>
    </div>
  );
}
