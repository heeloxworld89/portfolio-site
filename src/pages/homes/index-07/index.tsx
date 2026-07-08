import Header3 from "@/components/headers/Header3";
import Hero from "@/components/homes/home-7/Hero";
import CVContent from "@/components/common/CVContent";

import Footer1 from "@/components/footers/Footer1";
import Copyright from "@/components/footers/Copyright";
import Header5 from "@/components/headers/Header5";

import MetaComponent from "@/components/common/Metacomponent";

const metadata = {
  title:
    "Rokib Al Dhin Raadh - Independent AI Researcher",
  description:
    "Creator of ORMAS & OXIMO",
};
export default function HomePage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="index-seven spybody card-1-body">
        <Header3 />
        <Header5 />
        
        <div className="page-with-left-header">
          {/* Main Hero remains at the top */}
          <Hero />
          
          <div className="cv-card-area tmp-section-gap">
            <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
              <CVContent />
            </div>
          </div>

          <Footer1 />
          <Copyright />
        </div>
      </div>
    </>
  );
}
