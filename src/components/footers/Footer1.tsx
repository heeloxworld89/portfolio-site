export default function Footer1(_props?: any) {
  return (
    <footer className="footer-area footer-style-one-wrapper bg-color-footer tmp-section-gap">
      <div className="container">
        <div className="footer-main footer-style-one">
          <div className="row g-5 justify-content-center text-center">
            <div className="col-lg-12">
              <div className="single-footer-wrapper">
                <p className="description">
                  Independent AI Researcher & Systems Engineer. 
                  <br />
                  <a href="mailto:rokib@blackbloxie.com">rokib@blackbloxie.com</a>
                  {" · "}
                  <a href="mailto:raadxbusiness9@gmail.com">raadxbusiness9@gmail.com</a>
                </p>
                <div className="social-link footer justify-content-center mt--20">
                  <a href="https://github.com/raad-x" target="_blank" rel="noreferrer" title="Codebase Review">
                    <i className="fa-brands fa-github" />
                  </a>
                  <a href="#" title="Twitter">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#" title="Portfolio Website">
                    <i className="fa-solid fa-globe" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
