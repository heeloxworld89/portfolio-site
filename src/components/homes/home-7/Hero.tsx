import TyperComponent from "@/components/common/TyperComponent";
export default function Hero(_props?: any) {
  return (
    <div className="tmp-banner-one-area" id="home">
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <img
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="banner-img"
                  src="/assets/images/banner/banner-user-image-02.png"
                  width={542}
                  height={802}
                />
                <h2 className="banner-big-text-1 up-down">AI RESEARCHER</h2>
                <h2 className="banner-big-text-2 up-down-2">AI RESEARCHER</h2>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Hello
                </span>
                <h1 className="title mt--5 tmp-scroll-trigger tmp-fade-in animation-order-2">
                  I'm Rokib Al Dhin Raadh <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        strings={[
                          "Independent AI Researcher.",
                          "Architect of ORMAS.",
                          "Creator of OXIMO.",
                        ]}
                      />
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  I build interpretable, logic-driven AI frameworks that challenge the black-box paradigm. My work spans neuro-symbolic reasoning, multi-agent systems, and pushing the boundaries of AI transparency.
                </p>
                <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <a
                    className="tmp-btn hover-icon-reverse radius-round"
                    href="#research"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View My Work</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
