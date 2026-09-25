import { Link, NavLink } from 'react-router-dom';
import Icon from '@/components/common/Icon';
import { navIcons } from './navIcons';
import { person, links } from '@/data/facts';
import { routes } from '@/data/routes';


/** Desktop sidebar (≥1200px). The mobile header takes over below that. */
export default function Sidebar() {
  return (
    <div className="d-none d-xl-block header-style-2 header-left">
      <header className="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
        <div className="inner-wrapper">
          <div className="logo-area">
            <Link to="/" aria-label={`${person.name} — home`}>
              <img alt={person.name} src={person.headshot} width={350} height={350} />
            </Link>
          </div>
          <div className="sb-name">
            <div className="sb-name-n">{person.name}</div>
            <div className="sb-name-r">{person.role}</div>
          </div>

          <nav className="mainmenu-nav" aria-label="Primary">
            <ul className="primary-menu nav nav-pills">
              {routes.map((r) => (
                <li className="nav-item" key={r.path}>
                  <NavLink
                    to={r.path}
                    end={r.path === '/'}
                    className={({ isActive }) => `nav-link${isActive ? ' is-current' : ''}`}
                  >
                    <Icon name={navIcons[r.path]} size={15} />
                    {r.nav}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sb-dock">
            <a href={links.company} target="_blank" rel="noreferrer" className="sb-btn sb-btn--site">
              <span className="sb-btn-label">oxiedo.com</span>
              <Icon name="externalLink" size={14} />
            </a>
            <a href={links.preprint} target="_blank" rel="noreferrer" className="sb-btn">
              <Icon name="fileText" size={15} />
              <span className="sb-btn-label">Read the preprint</span>
            </a>
            <a href={links.cv} target="_blank" rel="noreferrer" className="sb-btn">
              <Icon name="download" size={15} />
              <span className="sb-btn-label">Download CV</span>
            </a>
            <div className="sb-social">
              <a href={links.mail} aria-label={`Email ${person.email}`}><Icon name="mail" size={14} />Email</a>
              <a href={links.github} target="_blank" rel="noreferrer"><Icon name="github" size={14} />GitHub</a>
              <a href={links.orcid} target="_blank" rel="noreferrer" className="is-wide"><Icon name="link" size={14} />ORCID iD</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
