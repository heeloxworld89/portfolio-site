import CVOxido from "./cv/CVOxido";
import CVRecognition from "./cv/CVRecognition";
import CVWhoIAm from "./cv/CVWhoIAm";
import CVResearch from "./cv/CVResearch";
import CVEngineering from "./cv/CVEngineering";
import CVDeployment from "./cv/CVDeployment";
import CVOriginStatement from "./cv/CVOriginStatement";
import CVEducation from "./cv/CVEducation";
import CVFundraising from "./cv/CVFundraising";
import CVClosingAsk from "./cv/CVClosingAsk";

export default function CVContent() {
  return (
    <div className="tmp-section-gap">
      <div className="container">
        <CVRecognition />
        <CVWhoIAm />
        <CVOxido />
        <CVResearch />
        <CVEngineering />
        <CVDeployment />
        <CVOriginStatement />
        <CVEducation />
        <CVFundraising />
        <CVClosingAsk />
      </div>
    </div>
  );
}

