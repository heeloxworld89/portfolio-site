import { Link } from "react-router-dom";
import OnepageNav2 from "./OnepageNav2";
export default function Header3() {
  return (
    <div className="d-none d-xl-block header-style-2 header-left">
      <header className="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
        <div className="inner-wrapper">
          <div className="logo-area">
            <Link to={`/`}>
              <img
                loading="lazy"
                alt="personal-logo"
                src="/assets/images/banner/header-left-user.jpg"
                width={350}
                height={350}
              />
            </Link>
          </div>
          <nav
            id="sideNavs"
            className="mainmenu-nav navbar-example2 onepagenav"
          >
            <ul className="primary-menu nav nav-pills">
              <OnepageNav2 />
            </ul>
          </nav>
          <div className="footer">
            <div className="social-share-style-1">
              <span className="title">Find With Me</span>
              <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '18px' }}>

                {/* Helpful Links */}
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#878e99', marginBottom: '8px' }}>Helpful Links</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li style={{ fontSize: '13px', color: '#878e99' }}>
                      Portfolio <span style={{ color: '#4a5568' }}>·</span>{' '}
                      <a href="https://raadh.me" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline' }}>raadh.me</a>
                    </li>
                    <li style={{ fontSize: '13px', color: '#878e99' }}>
                      Twitter <span style={{ color: '#4a5568' }}>·</span>{' '}
                      <a href="https://twitter.com/Raad_X_" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline' }}>@Raad_X_</a>
                    </li>
                  </ul>
                </div>

                {/* Codebase Review */}
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#878e99', marginBottom: '8px' }}>Codebase Review</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li style={{ fontSize: '13px', color: '#878e99' }}>
                      ORMAS <span style={{ color: '#4a5568' }}>·</span> OXIMO
                    </li>
                    <li style={{ fontSize: '13px', color: '#878e99', marginTop: '4px' }}>
                      Request via:
                    </li>
                    <li style={{ fontSize: '13px' }}>
                      <a href="mailto:rokib@blackbloxie.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>rokib@blackbloxie.com</a>
                    </li>
                    <li style={{ fontSize: '13px' }}>
                      <a href="mailto:raadxbusiness9@gmail.com" style={{ color: '#c4cfde', textDecoration: 'underline' }}>raadxbusiness9@gmail.com</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
