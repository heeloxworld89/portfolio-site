import { useEffect, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useModalUI } from "@/context/ModalUIContext";
import Icon from "@/components/common/Icon";

/**
 * The mobile navigation sheet.
 *
 * Header5's burger called openModal("mobileMenu2") but nothing rendered that
 * modal, so below 1200px — where the desktop sidebar is `d-none d-xl-block` —
 * the site had no navigation at all. This is that sheet.
 */

const items: { href: string; label: string; phase: string }[] = [
  { href: "#recognition",  label: "Recent",        phase: "now" },
  { href: "#who-i-am",     label: "Who I Am",      phase: "now" },
  { href: "#research",     label: "Research",      phase: "now" },
  { href: "#oxiedo",       label: "Business",      phase: "now" },
  { href: "#cherry",       label: "What’s Next",   phase: "now" },
  { href: "#oximo",        label: "OXIMO",         phase: "before" },
  { href: "#black-bloxie", label: "Black Bloxie",  phase: "before" },
  { href: "#ventures",     label: "Ventures",      phase: "before" },
  { href: "#statement",    label: "Statement",     phase: "about" },
  { href: "#education",    label: "Education",     phase: "about" },
  { href: "#contact",      label: "Contact",       phase: "about" },
];

const phaseLabel: Record<string, string> = {
  now: "Now",
  before: "Before This",
  about: "About",
};

export default function MobileMenu() {
  const { openModals, closeModal } = useModalUI();
  const open = openModals.mobileMenu2;

  // Esc to close, and lock the page behind the sheet
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal("mobileMenu2");
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, closeModal]);

  if (!open) return null;

  const go = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeModal("mobileMenu2");
    // let the sheet unmount and the scroll lock lift before scrolling
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (!el) return;
      el.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
      if (history.replaceState) history.replaceState(null, "", href);
    });
  };

  let lastPhase = "";

  return createPortal(
    <div className="mm-backdrop" role="dialog" aria-modal="true" aria-label="Menu"
         onClick={() => closeModal("mobileMenu2")}>
      <style>{`
        .mm-backdrop {
          position: fixed; inset: 0; z-index: 1200;
          background: rgba(var(--pf-shadow-rgb), 0.45);
          -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px);
          display: flex; justify-content: flex-end;
        }
        .mm-sheet {
          width: min(86vw, 340px); height: 100%;
          background: var(--pf-bg);
          border-left: 1px solid var(--pf-border);
          display: flex; flex-direction: column;
          overflow-y: auto; -webkit-overflow-scrolling: touch;
          animation: mmIn .22s cubic-bezier(.2,.8,.3,1);
        }
        @keyframes mmIn { from { transform: translateX(14px); opacity: 0; } to { transform: none; opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .mm-sheet { animation: none; } }

        .mm-top {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px; border-bottom: 1px solid var(--pf-border);
          position: sticky; top: 0; background: var(--pf-bg); z-index: 1;
        }
        .mm-name { font-size: 15px; font-weight: 800; color: var(--pf-ink); letter-spacing: -0.2px; }
        .mm-close {
          width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
          border-radius: 8px; border: 1px solid var(--pf-border);
          background: var(--pf-surface); color: var(--pf-ink); cursor: pointer;
        }
        .mm-phase {
          font-size: 9.5px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase;
          color: var(--pf-ink-3); padding: 16px 20px 6px;
        }
        .mm-link {
          display: block; padding: 12px 20px; text-decoration: none;
          font-size: 15.5px; font-weight: 600; color: var(--pf-ink);
          border-bottom: 1px solid var(--pf-border);
        }
        .mm-link:active { background: var(--pf-surface-2); }
        .mm-cta {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          margin: 18px 20px 10px; padding: 13px 16px; border-radius: 8px;
          text-decoration: none; font-size: 12.5px; font-weight: 800;
          letter-spacing: 0.8px; text-transform: uppercase;
          background: var(--pf-accent); border: 1px solid var(--pf-accent); color: var(--pf-on-accent);
        }
        .mm-cta.is-quiet {
          background: var(--pf-surface); color: var(--pf-ink); border-color: var(--pf-border);
        }
        .mm-foot { padding: 6px 20px 26px; font-size: 12px; color: var(--pf-ink-3); line-height: 1.6; }
      `}</style>

      <nav className="mm-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="mm-top">
          <span className="mm-name">Rokib Al Dhin Raadh</span>
          <button className="mm-close" aria-label="Close menu" onClick={() => closeModal("mobileMenu2")}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth={2} strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        {items.map((it) => {
          const head = it.phase !== lastPhase ? phaseLabel[it.phase] : null;
          lastPhase = it.phase;
          return (
            <div key={it.href}>
              {head ? <div className="mm-phase">{head}</div> : null}
              <a className="mm-link" href={it.href} onClick={(e) => go(e, it.href)}>{it.label}</a>
            </div>
          );
        })}

        <a className="mm-cta" href="https://oxiedo.com" target="_blank" rel="noreferrer">
          oxiedo.com <Icon name="externalLink" size={14} />
        </a>
        <a className="mm-cta is-quiet" href="/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf" target="_blank" rel="noreferrer">
          <Icon name="download" size={14} /> Download CV
        </a>
        <p className="mm-foot">18 · Dhaka, Bangladesh · Independent AI researcher</p>
      </nav>
    </div>,
    document.body
  );
}
