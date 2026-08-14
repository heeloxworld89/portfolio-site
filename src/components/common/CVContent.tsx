import CVOxido from "./cv/CVOxido";
import CVRecognition from "./cv/CVRecognition";
import CVWhoIAm from "./cv/CVWhoIAm";
import CVResearch from "./cv/CVResearch";
import CVEngineering from "./cv/CVEngineering";
import CVDeployment from "./cv/CVDeployment";
import CVJourney from "./cv/CVJourney";
import CVWorkEthic from "./cv/CVWorkEthic";
import CVEducation from "./cv/CVEducation";
import CVSkillsAndVision from "./cv/CVSkillsAndVision";
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
        <CVJourney />
        <CVWorkEthic />
        <CVEducation />
        <CVSkillsAndVision />
        <CVClosingAsk />
      </div>
    </div>
  );
}

