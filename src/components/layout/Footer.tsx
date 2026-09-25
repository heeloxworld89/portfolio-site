import { Link } from 'react-router-dom';
import { person, links, company } from '@/data/facts';
import { routes } from '@/data/routes';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="container">
        <div className="ft-grid">
          <div>
            <div className="ft-n">{person.name}</div>
            <div className="ft-r">
              {person.role} · {person.location}
              <br />
              {company.oneLiner}
            </div>
            <ul className="ft-list" style={{ marginTop: 14 }}>
              <li><a href={links.mail}>{person.email}</a></li>
              <li><a href={`mailto:${person.emailCompany}`}>{person.emailCompany}</a></li>
            </ul>
          </div>
          <div>
            <div className="ft-h">Pages</div>
            <ul className="ft-list">
              {routes.map((r) => (
                <li key={r.path}><Link to={r.path}>{r.nav}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ft-h">Elsewhere</div>
            <ul className="ft-list">
              <li><a href={links.company} target="_blank" rel="noreferrer">OXIEDO — oxiedo.com</a></li>
              <li><a href={links.doi} target="_blank" rel="noreferrer">ORMAS preprint (DOI)</a></li>
              <li><a href={links.orcid} target="_blank" rel="noreferrer">ORCID {person.orcid}</a></li>
              <li><a href={links.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={links.cv} target="_blank" rel="noreferrer">CV (PDF)</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-copy">© 2026 {person.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
