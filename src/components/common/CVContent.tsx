import CVRecognition from "./cv/CVRecognition";
import CVWhoIAm from "./cv/CVWhoIAm";
import CVResearch from "./cv/CVResearch";
import CVBusiness from "./cv/CVBusiness";
import CVCherry from "./cv/CVCherry";
import CVOximo from "./cv/CVOximo";
import CVBlackBloxie from "./cv/CVBlackBloxie";
import CVVentures from "./cv/CVVentures";
import CVOriginStatement from "./cv/CVOriginStatement";
import CVEducation from "./cv/CVEducation";
import CVClosingAsk from "./cv/CVClosingAsk";

/**
 * Page order is three phases, in this order:
 *
 *   NOW         what I am doing — the research, the company, what is next
 *   BEFORE THIS the work that produced the research question
 *   ABOUT       the person, the credentials, the way in
 *
 * Each section is one subject. Nothing is a "layer" of anything else.
 */

export default function CVContent() {
  return (
    <div className="tmp-section-gap">
      <div className="container">
        {/* now */}
        <CVRecognition />
        <CVWhoIAm />
        <CVResearch />
        <CVBusiness />
        <CVCherry />

        {/* before this */}
        <CVOximo />
        <CVBlackBloxie />
        <CVVentures />

        {/* about */}
        <CVOriginStatement />
        <CVEducation />
        <CVClosingAsk />
      </div>
    </div>
  );
}
