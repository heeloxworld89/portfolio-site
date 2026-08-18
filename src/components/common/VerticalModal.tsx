import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface VerticalModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow: string;
  children: ReactNode;
}

export default function VerticalModal({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: VerticalModalProps) {
  // Esc to close + lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="vm-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <style>{`
        .vm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.82);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 40px 20px;
          overflow-y: auto;
          animation: vmFade 0.2s ease;
        }
        @keyframes vmFade { from { opacity: 0; } to { opacity: 1; } }
        .vm-panel {
          position: relative;
          width: 100%;
          max-width: 920px;
          background: #121417;
          border: 1px solid #2a2d32;
          border-radius: 12px;
          animation: vmRise 0.25s cubic-bezier(0.2,0.8,0.3,1);
          margin: auto;
        }
        @keyframes vmRise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vm-head {
          position: sticky;
          top: 0;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 26px 32px 20px;
          background: #121417;
          border-bottom: 1px solid #2a2d32;
          border-radius: 12px 12px 0 0;
        }
        .vm-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff4a57; margin-bottom: 7px;
        }
        .vm-title {
          font-size: 25px; font-weight: 800; color: #fff;
          margin: 0; line-height: 1.25;
        }
        .vm-close {
          flex-shrink: 0;
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid #2a2d32;
          border-radius: 8px;
          color: #9aa4b0;
          cursor: pointer;
          transition: 0.2s;
        }
        .vm-close:hover {
          background: rgba(255,74,87,0.12);
          border-color: #ff4a57;
          color: #ff4a57;
        }
        .vm-body { padding: 28px 32px 34px; }

        /* ── shared content primitives ─────────────────────────── */
        .vm-plain {
          background: rgba(255,74,87,0.055);
          border: 1px solid rgba(255,74,87,0.28);
          border-radius: 10px;
          padding: 22px 26px;
          margin-bottom: 30px;
        }
        .vm-plain-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff4a57; margin-bottom: 9px;
        }
        .vm-plain p {
          font-size: 16px; line-height: 1.8; color: #c4cfde; margin: 0 0 12px;
        }
        .vm-plain p:last-child { margin-bottom: 0; }

        .vm-h {
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #c4cfde;
          margin: 34px 0 14px; padding-bottom: 9px;
          border-bottom: 1px solid #2a2d32;
        }
        .vm-h:first-child { margin-top: 0; }
        .vm-p {
          font-size: 15px; line-height: 1.8; color: #9aa4b0; margin: 0 0 14px;
        }
        .vm-p strong { color: #c4cfde; font-weight: 600; }
        .vm-p:last-child { margin-bottom: 0; }

        .vm-fig-cap {
          font-size: 12.5px; color: #838d99; margin: -4px 0 20px; line-height: 1.6;
        }

        /* ── Diagram: layered stack ────────────────────────────── */
        .vm-stack {
          border: 1px solid #2a2d32; border-radius: 10px;
          overflow: hidden; margin-bottom: 14px;
        }
        .vm-stack-row {
          display: flex; gap: 18px; align-items: baseline;
          padding: 16px 20px; background: #191b1e;
          border-bottom: 1px solid #2a2d32;
        }
        .vm-stack-row:last-child { border-bottom: none; }
        .vm-stack-row.is-box {
          background: #0b0c0e;
          border-top: 1px solid #34383e; border-bottom: 1px solid #34383e;
        }
        .vm-stack-tag {
          flex: 0 0 116px; font-size: 10.5px; font-weight: 700;
          letter-spacing: 1.4px; text-transform: uppercase; color: #838d99;
          padding-top: 2px;
        }
        .vm-stack-row.is-box .vm-stack-tag { color: #ff4a57; }
        .vm-stack-txt { font-size: 14px; line-height: 1.65; color: #9aa4b0; }
        .vm-stack-row.is-box .vm-stack-txt { color: #c4cfde; font-weight: 600; }
        .vm-stack-sub {
          display: block; font-size: 12.5px; color: #838d99;
          font-weight: 400; margin-top: 4px;
        }

        /* ── Diagram: vertical flow with connectors ────────────── */
        .vm-flow { margin-bottom: 14px; }
        .vm-flow-step {
          position: relative; background: #191b1e;
          border: 1px solid #2a2d32; border-radius: 8px;
          padding: 13px 18px; font-size: 14px; line-height: 1.6; color: #9aa4b0;
        }
        .vm-flow-step strong { color: #c4cfde; font-weight: 600; }
        .vm-flow-step + .vm-flow-step { margin-top: 26px; }
        .vm-flow-step + .vm-flow-step::before {
          content: ""; position: absolute; left: 50%; top: -20px;
          width: 1px; height: 14px; background: #3a3f46;
        }
        .vm-flow-step + .vm-flow-step::after {
          content: ""; position: absolute; left: 50%; top: -8px;
          width: 5px; height: 5px; margin-left: -2.5px;
          border-right: 1px solid #3a3f46; border-bottom: 1px solid #3a3f46;
          transform: rotate(45deg);
        }
        .vm-flow-step.is-bad {
          background: rgba(255,74,87,0.06);
          border-color: rgba(255,74,87,0.35);
          color: #c4cfde; font-weight: 600;
        }
        .vm-flow-step.is-good {
          background: rgba(127,216,143,0.06);
          border-color: rgba(127,216,143,0.32);
          color: #c4cfde; font-weight: 600;
        }

        /* ── Diagram: labelled bars ────────────────────────────── */
        .vm-bars {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 10px; padding: 20px 22px; margin-bottom: 14px;
        }
        .vm-bar-row {
          display: grid; grid-template-columns: 140px 1fr auto;
          gap: 14px; align-items: center;
        }
        .vm-bar-row + .vm-bar-row { margin-top: 12px; }
        .vm-bar-label { font-size: 13px; color: #c4cfde; font-weight: 600; }
        .vm-bar-track {
          height: 8px; background: rgba(255,255,255,0.06);
          border-radius: 4px; overflow: hidden;
        }
        .vm-bar-fill { height: 100%; border-radius: 4px; background: #838d99; }
        .vm-bar-fill.is-red { background: #ff4a57; }
        .vm-bar-fill.is-dim { background: #4a5058; }
        .vm-bar-note {
          font-size: 11.5px; color: #838d99; white-space: nowrap;
          text-transform: uppercase; letter-spacing: 0.7px; font-weight: 600;
        }
        @media (max-width: 560px) {
          .vm-bar-row { grid-template-columns: 1fr; gap: 5px; }
          .vm-bar-note { white-space: normal; }
        }

        /* ── Diagram: two-column comparison ────────────────────── */
        .vm-vs {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 14px;
        }
        @media (max-width: 560px) { .vm-vs { grid-template-columns: 1fr; } }
        .vm-vs-col {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 10px; padding: 18px 20px;
        }
        .vm-vs-col.is-bad {
          background: rgba(255,74,87,0.05);
          border-color: rgba(255,74,87,0.3);
        }
        .vm-vs-head {
          font-size: 13px; font-weight: 700; color: #c4cfde; margin-bottom: 8px;
        }
        .vm-vs-col.is-bad .vm-vs-head { color: #ff4a57; }
        .vm-vs-body { font-size: 13.5px; line-height: 1.65; color: #9aa4b0; }

        .vm-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 10px;
          margin-bottom: 18px;
        }
        .vm-stat {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 8px; padding: 15px; text-align: center;
        }
        .vm-stat-v {
          font-size: 21px; font-weight: 800; color: #c4cfde;
          line-height: 1.1; margin-bottom: 5px;
        }
        .vm-stat-l {
          font-size: 10px; color: #838d99; text-transform: uppercase;
          letter-spacing: 1px; font-weight: 600; line-height: 1.4;
        }

        .vm-table { width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 14px; }
        .vm-table th {
          text-align: left; padding: 11px 14px; color: #c4cfde;
          font-size: 11px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; border-bottom: 1px solid #2a2d32;
          background: rgba(255,255,255,0.02);
        }
        .vm-table td {
          padding: 12px 14px; color: #9aa4b0; line-height: 1.65;
          border-bottom: 1px solid rgba(255,255,255,0.05); vertical-align: top;
        }
        .vm-table tr:last-child td { border-bottom: none; }
        .vm-table td strong { color: #fff; font-weight: 700; }

        .vm-gap {
          background: rgba(255,74,87,0.05);
          border: 1px solid rgba(255,74,87,0.25);
          border-left: 3px solid #ff4a57;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          margin-top: 26px;
        }
        .vm-gap-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff4a57; margin-bottom: 10px;
        }
        .vm-gap p { font-size: 14px; line-height: 1.8; color: #9aa4b0; margin: 0 0 10px; }
        .vm-gap p:last-child { margin-bottom: 0; }
        .vm-gap strong { color: #c4cfde; font-weight: 600; }

        @media (max-width: 640px) {
          .vm-backdrop { padding: 0; }
          .vm-panel { border-radius: 0; border-left: none; border-right: none; min-height: 100%; }
          .vm-head { padding: 20px 18px 16px; border-radius: 0; }
          .vm-title { font-size: 20px; }
          .vm-body { padding: 22px 18px 30px; }
          .vm-stack-row { flex-direction: column; gap: 6px; }
          .vm-stack-tag { flex: none; }
        }
      `}</style>

      <div className="vm-panel" onClick={(e) => e.stopPropagation()}>
        <div className="vm-head">
          <div>
            <div className="vm-eyebrow">{eyebrow}</div>
            <h3 className="vm-title">{title}</h3>
          </div>
          <button type="button" className="vm-close" onClick={onClose} aria-label="Close">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="vm-body">{children}</div>
      </div>
    </div>,
    document.body
  );
}
