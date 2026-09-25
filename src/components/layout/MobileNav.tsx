import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from '@/components/common/Icon';
import { person, links } from '@/data/facts';
import { routes } from '@/data/routes';
import { navIcons } from './navIcons';

/** Header and slide-in menu below 1200px, where the sidebar is hidden. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="d-xl-none">
      <div className="mh">
        <Link to="/" className="mh-brand">
          <b>{person.name}</b>
          <span>{person.role}</span>
        </Link>
        <button type="button" className="mh-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Icon name="menu" size={22} />
        </button>
      </div>

      {open ? (
        <div className="mm-bg" onClick={() => setOpen(false)}>
          <nav className="mm" role="dialog" aria-modal="true" aria-label="Menu" onClick={(e) => e.stopPropagation()}>
            <div className="mm-top">
              <b>Menu</b>
              <button type="button" className="mh-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
                <Icon name="close" size={18} />
              </button>
            </div>
            {routes.map((r) => (
              <NavLink key={r.path} to={r.path} end={r.path === '/'} className={({ isActive }) => `mm-l${isActive ? ' is-current' : ''}`}>
                <Icon name={navIcons[r.path]} size={17} />
                {r.nav}
              </NavLink>
            ))}
            <a className="btn-x is-p" href={links.company} target="_blank" rel="noreferrer">
              oxiedo.com <Icon name="externalLink" size={14} />
            </a>
            <a className="btn-x" href={links.preprint} target="_blank" rel="noreferrer">
              <Icon name="fileText" size={14} /> Read the preprint
            </a>
            <a className="btn-x" href={links.cv} target="_blank" rel="noreferrer">
              <Icon name="download" size={14} /> Download CV
            </a>
            <a className="btn-x" href={links.mail}>
              <Icon name="mail" size={14} /> Email
            </a>
            <p className="mm-foot">{person.role} · {person.location}</p>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
