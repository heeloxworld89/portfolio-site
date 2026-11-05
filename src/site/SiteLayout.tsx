import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { links, pages, type PagePath } from "./data";

const nav: { to: string; label: string; external?: boolean }[] = [
  { to: "/research", label: "Research" },
  { to: "/deepmath", label: "DeepMath" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/evidence", label: "Evidence" },
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

/** `hideCompanyLink` drops the OXIEDO ↗ link from the header and footer, for
 *  pages that must not link to oxiedo.com (the /dead-channels article). */
export default function SiteLayout({ children, hideCompanyLink = false }: { children: ReactNode; hideCompanyLink?: boolean }) {
  const { pathname } = useLocation();
  const items = hideCompanyLink ? nav.filter((n) => n.to !== links.oxiedo) : nav;
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
            {items.map((n) =>
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
        <div className="rx-wrap">
          <div className="rx-foot-top">
            <div className="rx-foot-id">
              <Link className="rx-mark" to="/">Rokib Al Dhin Raadh</Link>
              <p>AI researcher · Founder &amp; CEO, OXIEDO · Inventor of ORMAS</p>
            </div>
            <nav className="rx-foot-col" aria-label="Footer">
              <h2>Pages</h2>
              <ul>
                {items.map((n) => (
                  <li key={n.to}>
                    {n.external ? (
                      <a href={n.to} target="_blank" rel="noreferrer">{n.label}</a>
                    ) : (
                      <Link to={n.to}>{n.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rx-foot-col">
              <h2>Contact</h2>
              <ul>
                <li><a href={`mailto:${links.email}`}>{links.email}</a></li>
                <li><a href={links.calendly} target="_blank" rel="noreferrer">Book a 30-minute call</a></li>
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
        <div className="rx-foot-land" aria-hidden="true">
          <img src="/assets/images/footer-landscape.svg" alt="" loading="lazy" decoding="async" />
        </div>
      </footer>
    </div>
  );
}
