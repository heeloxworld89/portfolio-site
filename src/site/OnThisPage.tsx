import { useEffect, useState } from "react";

/* "On this page" rail shared by the long reading pages (/research, /deepmath).
   Styled by .ux-research .uxr-toc in ux/research.css. */

export type TocItem = { id: string; label: string; children?: { id: string; label: string }[] };

export function useActiveSection(toc: TocItem[]) {
  const ids = toc.flatMap((t) => [t.id, ...(t.children ?? []).map((c) => c.id)]);
  const key = ids.join(",");
  const [active, setActive] = useState<string>(ids[0]);
  useEffect(() => {
    const list = key.split(",");
    let raf = 0;
    const measure = () => {
      raf = 0;
      const line = window.innerHeight * 0.28;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (!el || el.closest('[data-collapsed="true"]')) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Sections that open or close move everything below them.
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onScroll) : null;
    ro?.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [key]);
  return active;
}

export function OnThisPage({ toc, active }: { toc: TocItem[]; active: string }) {
  const parentOf = (id: string) => toc.find((t) => t.id === id || t.children?.some((c) => c.id === id))?.id;
  const activeParent = parentOf(active);
  return (
    <nav className="uxr-toc" aria-label="On this page">
      <p className="uxr-toc-h">On this page</p>
      <ol className="uxr-toc-list">
        {toc.map((t) => (
          <li key={t.id} className={t.id === activeParent ? "is-in" : undefined}>
            <a href={`#${t.id}`} aria-current={active === t.id ? "location" : undefined}>{t.label}</a>
            {t.children ? (
              <ol className="uxr-toc-sub">
                {t.children.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} aria-current={active === c.id ? "location" : undefined}>{c.label}</a>
                  </li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
