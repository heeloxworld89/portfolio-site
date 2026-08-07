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
                {/* CV Download */}
                <div style={{ marginBottom: '24px' }}>
                  <a href="/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: 'rgba(255, 74, 87, 0.1)', color: '#ff4a57', border: '1px solid rgba(255, 74, 87, 0.2)', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <i className="fa-sharp fa-solid fa-arrow-down-to-line"></i> Download CV
                  </a>
                </div>

                {/* Identity & Social */}
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#878e99', marginBottom: '12px' }}>Identity & Social</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '14px', color: '#878e99', marginBottom: '8px', lineHeight: '1.5' }}>
                      Twitter <span style={{ color: '#6b7683' }}>·</span>{' '}
                      <a href="https://twitter.com/Raad_X_" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline', display: 'inline', padding: 0 }}>@Raad_X_</a>
                    </li>
                  </ul>
                </div>

                {/* Research Artifacts */}
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#878e99', marginBottom: '12px' }}>Research Artifacts</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ fontSize: '14px', color: '#878e99', marginBottom: '12px', lineHeight: '1.4' }}>
                      <i className="fa-sharp fa-regular fa-file-pdf" style={{ marginRight: '8px', width: '16px', textAlign: 'center' }}></i>
                      <a href="https://zenodo.org/records/21730363" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline', display: 'inline', padding: 0 }}>ORMAS Paper (DOI)</a>
                    </li>
                    <li style={{ fontSize: '14px', color: '#878e99', marginBottom: '12px', lineHeight: '1.4' }}>
                      <i className="fa-sharp fa-regular fa-code" style={{ marginRight: '8px', width: '16px', textAlign: 'center' }}></i>
                      <a href="https://anonymous.4open.science/r/ormas-EB73" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline', display: 'inline', padding: 0 }}>Codebase (383 runs)</a>
                    </li>
                    <li style={{ fontSize: '14px', color: '#878e99', marginBottom: '8px', lineHeight: '1.4' }}>
                      <i className="fa-sharp fa-regular fa-database" style={{ marginRight: '8px', width: '16px', textAlign: 'center' }}></i>
                      <a href="https://drive.google.com/file/d/1CDaMIpTZ_8Mkot9D-O7JU29mDopq_Bdl/view" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline', display: 'inline', padding: 0 }}>GlassBox Telemetry</a>
                    </li>
                  </ul>
                </div>

                {/* Codebase Review */}
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#878e99', marginBottom: '12px' }}>Codebase Review</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                   <li style={{ fontSize: '14px', color: '#878e99', marginBottom: '8px', lineHeight: '1.5' }}>
                      <a href="https://anonymous.4open.science/r/ormas-EB73/README.md" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline', display: 'inline', padding: 0 }}>ORMAS Codebase ↗</a>
                      <span style={{ fontSize: '12px', display: 'block', color: '#6b7683', marginTop: '2px' }}>383 runs · fully reproducible</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#878e99', marginBottom: '8px', lineHeight: '1.5' }}>
                      <a href="https://anonymous.4open.science/r/oximo-5C73/README.md" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline', display: 'inline', padding: 0 }}>OXIMO Codebase ↗</a>
                      <span style={{ fontSize: '12px', display: 'block', color: '#6b7683', marginTop: '2px' }}>Architecture complete · code unpolished</span>
                    </li>
                    <li style={{ fontSize: '14px', lineHeight: '1.5' }}>
                      <a href="mailto:raadxbusiness9@gmail.com" style={{ color: '#c4cfde', textDecoration: 'underline', display: 'inline', padding: 0, wordBreak: 'break-all' }}>raadxbusiness9@gmail.com</a>
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
