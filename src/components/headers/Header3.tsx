import { useState } from "react";
import { Link } from "react-router-dom";
import OnepageNav2 from "./OnepageNav2";
import Icon, { type IconName } from "@/components/common/Icon";
import VerticalModal from "@/components/common/VerticalModal";

const artifacts: {
  icon: IconName;
  label: string;
  sub: string;
  href: string;
}[] = [
  {
    icon: "fileText",
    label: "ORMAS Preprint",
    sub: "Zenodo DOI · the full paper, with the 36-page supplementary and the ISS derivation.",
    href: "https://zenodo.org/records/21730363",
  },
  {
    icon: "code",
    label: "ORMAS Codebase",
    sub: "One script reproduces all 383 experiments in under an hour on a single GPU.",
    href: "https://anonymous.4open.science/r/ormas-EB73/README.md",
  },
  {
    icon: "code",
    label: "OXIMO Codebase",
    sub: "40,933 lines, 2,011 passing tests. Architecture is complete; the code is production research infrastructure, not a polished demo.",
    href: "https://anonymous.4open.science/r/oximo-5C73/README.md",
  },
  {
    icon: "database",
    label: "GlassBox Telemetry",
    sub: "The raw experiment logs archive — every correction event, per node, per epoch.",
    href: "https://drive.google.com/file/d/1CDaMIpTZ_8Mkot9D-O7JU29mDopq_Bdl/view",
  },
  {
    icon: "chart",
    label: "Commercial Evidence Report",
    sub: "The 12-month Black Bloxie ablation study, written for operators and investors.",
    href: "/assets/pdf/oxido_investor_whitepaper.pdf",
  },
  {
    icon: "fileText",
    label: "System Architecture Paper",
    sub: "The same 12-month record, written for technical evaluators.",
    href: "/assets/pdf/oxido_academic_research_paper.pdf",
  },
];

const socials: {
  icon: IconName;
  short: string;
  label: string;
  sub: string;
  href: string;
}[] = [
  {
    icon: "mail",
    short: "Company",
    label: "rokib@blackbloxie.com",
    sub: "Black Bloxie LTD — the company address.",
    href: "mailto:rokib@blackbloxie.com",
  },
  {
    icon: "mail",
    short: "Direct",
    label: "raadxbusiness9@gmail.com",
    sub: "My personal address. Either reaches me; this one is usually faster.",
    href: "mailto:raadxbusiness9@gmail.com",
  },
  {
    icon: "x",
    short: "X",
    label: "@Raad_X_",
    sub: "Where I post work in progress.",
    href: "https://twitter.com/Raad_X_",
  },
  {
    icon: "github",
    short: "GitHub",
    label: "github.com/raad-x",
    sub: "Commit history and activity only — the ORMAS and OXIMO source is not published here. To actually read the code, use the anonymous review links above.",
    href: "https://github.com/raad-x",
  },
];

export default function Header3() {
  const [linksOpen, setLinksOpen] = useState(false);

  return (
    <div className="d-none d-xl-block header-style-2 header-left">
      <style>{`
        /* ── Sidebar dock ─────────────────────────────────────── */
        .sb-dock { display: flex; flex-direction: column; gap: 8px; margin-top: 14px; }

        .sb-btn {
          display: flex; align-items: center; gap: 11px;
          width: 100%; padding: 12px 14px;
          border-radius: 9px; cursor: pointer;
          text-decoration: none; text-align: left;
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.5px;
          transition: background 0.22s ease, border-color 0.22s ease,
                      color 0.22s ease, transform 0.22s ease;
        }
        .sb-btn svg { flex-shrink: 0; }
        .sb-btn-label { flex: 1; min-width: 0; }

        .sb-btn--cv {
          background: rgba(255,74,87,0.1);
          border: 1px solid rgba(255,74,87,0.32);
          color: #ff6b76;
          text-transform: uppercase;
        }
        .sb-btn--cv:hover {
          background: rgba(255,74,87,0.18);
          border-color: rgba(255,74,87,0.6);
          color: #ff8a93;
          transform: translateY(-1px);
        }

        .sb-btn--links {
          background: rgba(196,207,222,0.06);
          border: 1px solid #343941;
          color: #d7dee8;
        }
        .sb-btn--links:hover {
          background: rgba(196,207,222,0.12);
          border-color: rgba(196,207,222,0.5);
          color: #fff;
          transform: translateY(-1px);
        }
        .sb-btn--links .sb-count {
          font-size: 10px; font-weight: 700; color: #a6b0bc;
          background: rgba(196,207,222,0.1);
          border: 1px solid rgba(196,207,222,0.2);
          border-radius: 999px; padding: 2px 7px;
        }

        /* compact social grid — labelled, so the two mail entries are distinguishable */
        .sb-social {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 6px; margin-top: 2px;
        }
        .sb-social a {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 11px; border-radius: 8px;
          border: 1px solid #2a2d32;
          background: rgba(196,207,222,0.04);
          color: #a6b0bc;
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.2px;
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .sb-social a:hover {
          background: rgba(196,207,222,0.12);
          border-color: rgba(196,207,222,0.45);
          color: #fff;
        }

        /* ── Scroll affordance on the sidebar itself ──────────── */
        .header-left-sticky .inner-wrapper { scrollbar-width: thin; scrollbar-color: #3a4048 transparent; }
        .header-left-sticky .inner-wrapper::-webkit-scrollbar { width: 8px; }
        .header-left-sticky .inner-wrapper::-webkit-scrollbar-track { background: transparent; }
        .header-left-sticky .inner-wrapper::-webkit-scrollbar-thumb {
          background: #3a4048; border-radius: 4px;
          border: 2px solid #0e0f13; background-clip: padding-box;
        }
        .header-left-sticky .inner-wrapper::-webkit-scrollbar-thumb:hover { background: #565d68; background-clip: padding-box; }
        /* NOTE: .header-left-sticky is position:fixed in _left-header.scss.
           Do not set position here — it unpins the sidebar and it scrolls away. */
        .header-left-sticky::after {
          content: ""; position: absolute; left: 0; right: 8px; bottom: 0; height: 40px;
          background: linear-gradient(180deg, rgba(14,15,19,0) 0%, rgba(14,15,19,0.92) 80%);
          pointer-events: none; z-index: 2;
        }

        /* ── Modal content ────────────────────────────────────── */
        .lk-group + .lk-group { margin-top: 28px; }
        .lk-heading {
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #c4cfde;
          padding-bottom: 9px; margin-bottom: 14px;
          border-bottom: 1px solid #2a2d32;
        }
        .lk-note {
          font-size: 13.5px; line-height: 1.7; color: #a6b0bc; margin: -4px 0 14px;
        }
        .lk-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        @media (max-width: 700px) { .lk-grid { grid-template-columns: 1fr; } }
        .lk-item {
          display: flex; gap: 13px; align-items: flex-start;
          padding: 16px 18px; border-radius: 10px;
          background: #191b1e; border: 1px solid #2a2d32;
          text-decoration: none;
          transition: border-color 0.22s ease, background 0.22s ease, transform 0.22s ease;
        }
        .lk-item:hover {
          border-color: rgba(196,207,222,0.5);
          background: #1d2024; transform: translateY(-2px);
        }
        .lk-item-icon {
          flex-shrink: 0; width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(196,207,222,0.22);
          background: rgba(196,207,222,0.07); color: #c4cfde;
        }
        .lk-item:hover .lk-item-icon {
          background: rgba(196,207,222,0.14); border-color: rgba(196,207,222,0.45);
        }
        .lk-item-body { min-width: 0; }
        .lk-item-label {
          display: flex; align-items: center; gap: 7px;
          font-size: 14.5px; font-weight: 700; color: #e8edf4; line-height: 1.3;
        }
        .lk-item-label svg { color: #838d99; transition: color 0.2s ease, transform 0.2s ease; }
        .lk-item:hover .lk-item-label svg { color: #c4cfde; transform: translate(2px,-2px); }
        .lk-item-sub {
          display: block; font-size: 12.5px; line-height: 1.65;
          color: #a6b0bc; margin-top: 5px;
        }
        @media (prefers-reduced-motion: reduce) {
          .sb-btn:hover, .lk-item:hover { transform: none; }
        }
      `}</style>

      <header className="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
        <div className="inner-wrapper">
          <div className="logo-area">
            <Link to={`/`}>
              <img
                loading="lazy"
                alt="Rokib Al Dhin Raadh"
                src="/assets/images/banner/header-left-user.jpg"
                width={350}
                height={350}
              />
            </Link>
          </div>

          <nav id="sideNavs" className="mainmenu-nav navbar-example2 onepagenav">
            <ul className="primary-menu nav nav-pills">
              <OnepageNav2 />
            </ul>
          </nav>

          <div className="footer">
            <div className="social-share-style-1">
              <span className="title">Find With Me</span>

              <div className="sb-dock">
                <a
                  href="/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="sb-btn sb-btn--cv"
                >
                  <Icon name="download" size={15} />
                  <span className="sb-btn-label">Download CV</span>
                </a>

                <button
                  type="button"
                  className="sb-btn sb-btn--links"
                  onClick={() => setLinksOpen(true)}
                  aria-haspopup="dialog"
                >
                  <Icon name="link" size={15} />
                  <span className="sb-btn-label">Papers, Code &amp; Data</span>
                  <span className="sb-count">{artifacts.length}</span>
                </button>

                <div className="sb-social">
                  {socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      title={s.label}
                      aria-label={`${s.short} — ${s.label}`}
                    >
                      <Icon name={s.icon} size={14} />
                      {s.short}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <VerticalModal
        open={linksOpen}
        onClose={() => setLinksOpen(false)}
        eyebrow="Everything, in one place"
        title="Papers, Code & Data"
      >
        <div className="lk-group">
          <div className="lk-heading">Research Artifacts</div>
          <p className="lk-note">
            The ORMAS and OXIMO source lives on anonymous review mirrors, not on GitHub — my GitHub
            shows commit history but not the code itself. These are the links that actually let you
            read it.
          </p>
          <div className="lk-grid">
            {artifacts.map((a) => (
              <a
                key={a.href}
                className="lk-item"
                href={a.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="lk-item-icon">
                  <Icon name={a.icon} size={17} />
                </span>
                <span className="lk-item-body">
                  <span className="lk-item-label">
                    {a.label}
                    <Icon name="externalLink" size={12} />
                  </span>
                  <span className="lk-item-sub">{a.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="lk-group">
          <div className="lk-heading">Contact</div>
          <p className="lk-note">
            Two addresses, both mine — the company one and my direct one. There is no difference in
            who reads them.
          </p>
          <div className="lk-grid">
            {socials.map((s) => (
              <a
                key={s.href}
                className="lk-item"
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                <span className="lk-item-icon">
                  <Icon name={s.icon} size={17} />
                </span>
                <span className="lk-item-body">
                  <span className="lk-item-label">
                    {s.label}
                    {!s.href.startsWith("mailto:") && <Icon name="externalLink" size={12} />}
                  </span>
                  <span className="lk-item-sub">{s.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </VerticalModal>
    </div>
  );
}
