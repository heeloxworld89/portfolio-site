import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { links, pages, type PagePath } from "./data";

const nav: { to: string; label: string; external?: boolean }[] = [
  { to: "/research", label: "Research" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: links.cv, label: "CV", external: true },
  { to: links.oxiedo, label: "OXIEDO ↗", external: true },
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
  usePageMeta(pathname);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="rx">
      <header className="rx-head">
        <div className="rx-wrap">
          <Link className="rx-mark" to="/">Rokib Al Dhin Raadh</Link>
          <button
            type="button"
            className="rx-burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="rx-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          <nav id="rx-nav" className={`rx-nav${open ? " is-open" : ""}`} aria-label="Main">
            {nav.map((n) =>
              n.external ? (
                <a key={n.to} href={n.to} target="_blank" rel="noreferrer">{n.label}</a>
              ) : (
                <Link key={n.to} to={n.to} aria-current={pathname === n.to ? "page" : undefined}>{n.label}</Link>
              )
            )}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="rx-foot">
        <div className="rx-field is-foot" aria-hidden="true" />
        <div className="rx-wrap">
          <small>
            © Rokib Al Dhin Raadh, 2026<br />
            Dhaka, Bangladesh
          </small>
          <Link className="rx-mark" to="/">Rokib Al Dhin Raadh</Link>
          <small className="r">
            <a href={`mailto:${links.email}`}>{links.email}</a><br />
            <a href={links.orcid} target="_blank" rel="me noreferrer">ORCID</a> · <a href={links.github} target="_blank" rel="me noreferrer">GitHub</a> · <a href={links.x} target="_blank" rel="me noreferrer">X</a><br />
            <a href={links.substack} target="_blank" rel="me noreferrer">Substack</a> · <a href={links.youtube} target="_blank" rel="me noreferrer">YouTube</a>
          </small>
        </div>
      </footer>
    </div>
  );
}
