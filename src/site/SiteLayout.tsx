import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { links, pages, type PagePath } from "./data";

const nav: { to: string; label: string; external?: boolean }[] = [
  { to: "/research", label: "Research" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: links.cv, label: "CV", external: true },
  { to: links.oxiedo, label: "OXIEDO ↗", external: true },
];

const elsewhere: { href: string; label: string }[] = [
  { href: links.orcid, label: "ORCID" },
  { href: links.github, label: "GitHub" },
  { href: links.x, label: "X" },
  { href: links.substack, label: "Substack" },
  { href: links.youtube, label: "YouTube" },
];

/** Keeps the tab title and description in step with the route on the client;
 *  the build-time render writes the same values into each page's HTML. */
function usePageMeta(path: string) {
  useEffect(() => {
    const meta = pages[path as PagePath] ?? pages["/"];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [path]);
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  usePageMeta(pathname);
  useEffect(() => setOpen(false), [pathname]);

  // Mobile menu: Escape closes it and hands focus back to the toggle,
  // the page behind it stops scrolling, and focus moves into the list.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    navRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="rx">
      <a className="rx-skip" href="#main">Skip to content</a>
      <header className={`rx-head${open ? " is-open" : ""}`}>
        <div className="rx-wrap">
          <Link className="rx-mark" to="/">Rokib Al Dhin Raadh</Link>
          <button
            ref={burgerRef}
            type="button"
            className="rx-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="rx-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          <nav ref={navRef} id="rx-nav" className={`rx-nav${open ? " is-open" : ""}`} aria-label="Main">
            {nav.map((n) =>
              n.external ? (
                <a key={n.to} href={n.to} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{n.label}</a>
              ) : (
                <Link key={n.to} to={n.to} aria-current={pathname === n.to ? "page" : undefined}>{n.label}</Link>
              )
            )}
          </nav>
        </div>
        {open && <div className="rx-scrim" aria-hidden="true" onClick={() => setOpen(false)} />}
      </header>

      <main id="main" tabIndex={-1}>{children}</main>

      <footer className="rx-foot">
        <div className="rx-field is-foot" aria-hidden="true" />
        <div className="rx-wrap">
          <div className="rx-foot-top">
            <div className="rx-foot-id">
              <Link className="rx-mark" to="/">Rokib Al Dhin Raadh</Link>
              <p>Founder &amp; CEO, OXIEDO · UK · US · Bangladesh</p>
            </div>
            <nav className="rx-foot-col" aria-label="Footer">
              <h2>Pages</h2>
              <ul>
                {nav.map((n) => (
                  <li key={n.to}>
                    {n.external ? (
                      <a href={n.to} target="_blank" rel="noreferrer">{n.label}</a>
                    ) : (
                      <Link to={n.to}>{n.label}</Link>
                    )}
                  </li>
                ))}
                <li><Link to="/evidence">Evidence</Link></li>
              </ul>
            </nav>
            <div className="rx-foot-col">
              <h2>Contact</h2>
              <ul>
                <li><a href={`mailto:${links.founderEmail}`}>{links.founderEmail}</a></li>
                <li><a href={`mailto:${links.email}`}>{links.email}</a></li>
              </ul>
            </div>
            <div className="rx-foot-col">
              <h2>Elsewhere</h2>
              <ul>
                {elsewhere.map((l) => (
                  <li key={l.label}><a href={l.href} target="_blank" rel="me noreferrer">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rx-foot-base">
            <small>© Rokib Al Dhin Raadh, 2026</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
