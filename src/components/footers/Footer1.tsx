import Icon, { type IconName } from "@/components/common/Icon";

const links: { icon: IconName; label: string; href: string }[] = [
  { icon: "github", label: "GitHub", href: "https://github.com/raad-x" },
  { icon: "x", label: "X / Twitter", href: "https://twitter.com/Raad_X_" },
  { icon: "fileText", label: "ORMAS Preprint", href: "https://zenodo.org/records/21730363" },
  { icon: "code", label: "Codebase", href: "https://anonymous.4open.science/r/ormas-EB73/README.md" },
];

export default function Footer1(_props?: any) {
  return (
    <footer className="footer-area footer-style-one-wrapper bg-color-footer tmp-section-gap">
      <style>{`
        .ft-inner { text-align: center; max-width: 640px; margin: 0 auto; }
        .ft-name {
          font-size: 20px; font-weight: 700; color: #e8edf4;
          margin: 0 0 8px; letter-spacing: -0.2px;
        }
        .ft-role {
          font-size: 14px; color: #a6b0bc; margin: 0 0 22px; line-height: 1.7;
        }
        .ft-mails {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 10px 22px; margin-bottom: 26px;
        }
        .ft-mail {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; color: #c4cfde; text-decoration: none;
          transition: color 0.2s ease;
        }
        .ft-mail:hover { color: #fff; }
        .ft-mail svg { color: #838d99; }

        .ft-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
        .ft-link {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 16px; border-radius: 999px;
          border: 1px solid #2a2d32; background: rgba(196,207,222,0.04);
          color: #c4cfde; text-decoration: none;
          font-size: 12.5px; font-weight: 600; letter-spacing: 0.3px;
          transition: background 0.25s ease, border-color 0.25s ease,
                      color 0.25s ease, transform 0.25s ease;
        }
        .ft-link:hover {
          background: rgba(196,207,222,0.1);
          border-color: rgba(196,207,222,0.45);
          color: #fff;
          transform: translateY(-2px);
        }
        @media (prefers-reduced-motion: reduce) { .ft-link:hover { transform: none; } }
      `}</style>

      <div className="container">
        <div className="footer-main footer-style-one">
          <div className="row g-5 justify-content-center text-center">
            <div className="col-lg-12">
              <div className="single-footer-wrapper">
                <div className="ft-inner">
                  <p className="ft-name">Rokib Al Dhin Raadh</p>
                  <p className="ft-role">
                    Independent AI Researcher &amp; Systems Engineer — Dhaka, Bangladesh
                  </p>

                  <div className="ft-mails">
                    <a className="ft-mail" href="mailto:rokib@blackbloxie.com">
                      <Icon name="mail" size={14} />
                      rokib@blackbloxie.com
                    </a>
                    <a className="ft-mail" href="mailto:raadxbusiness9@gmail.com">
                      <Icon name="mail" size={14} />
                      raadxbusiness9@gmail.com
                    </a>
                  </div>

                  <div className="ft-links">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        className="ft-link"
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name={l.icon} size={14} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
