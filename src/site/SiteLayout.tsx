import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { links, pages, type PagePath } from "./data";

type NavChild = { to: string; label: string; note: string };
type NavItem = { to: string; label: string; external?: boolean; footerOnly?: boolean; children?: NavChild[] };

/** "Research" opens a menu: one entry per research line. */
const nav: NavItem[] = [
  {
    to: "/research", label: "Research",
    children: [
      { to: "/research", label: "ORMAS", note: "Self-repairing neural networks" },
      { to: "/deepmath", label: "DeepMath 2026", note: "Peer-reviewed stability paper and poster" },
      { to: "/lunar-fire-safety", label: "Lunar fire safety", note: "A fire-safety problem in NASA's plans for the Moon" },
    ],
  },
  { to: "/articles", label: "Articles", footerOnly: true },
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
  const [dd, setDd] = useState(false);
  const ddBtnRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  usePageMeta(pathname);
  useEffect(() => { setOpen(false); setDd(false); }, [pathname]);

  // Research menu: Escape closes it and returns focus to its button; a click
  // outside closes it too.
  useEffect(() => {
    if (!dd) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setDd(false); ddBtnRef.current?.focus(); }
    };
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest?.(".rx-dd")) setDd(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onDown); };
  }, [dd]);

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
            {items.filter((n) => !n.footerOnly).map((n) =>
              n.children ? (
                <div
                  key={n.to}
                  className={`rx-dd${dd ? " is-open" : ""}`}
                  onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDd(false); }}
                >
                  <button
                    ref={ddBtnRef}
                    type="button"
                    className={`rx-dd-btn${n.children.some((c) => c.to === pathname) ? " is-current" : ""}`}
                    aria-expanded={dd}
                    aria-controls="rx-dd-research"
                    onClick={() => setDd((v) => !v)}
                  >
                    {n.label}
                    <svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </button>
                  <span className="rx-dd-label" aria-hidden="true">{n.label}</span>
                  <div className="rx-dd-menu" id="rx-dd-research">
                    {n.children.map((c) => (
                      <Link key={c.to} to={c.to} aria-current={pathname === c.to ? "page" : undefined}>
                        <b>{c.label}</b>
                        <span>{c.note}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : n.external ? (
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
                {items.flatMap<NavItem>((n) => n.children ? n.children.map((c) => ({ to: c.to, label: c.label })) : [n]).map((n) => (
                  <li key={n.label}>
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
