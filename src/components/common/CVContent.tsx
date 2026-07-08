import CVWhoIAm from "./cv/CVWhoIAm";
import CVResearch from "./cv/CVResearch";
import CVEngineering from "./cv/CVEngineering";
import CVDeployment from "./cv/CVDeployment";
import CVJourney from "./cv/CVJourney";
import CVEducation from "./cv/CVEducation";
import CVSkillsAndVision from "./cv/CVSkillsAndVision";

export default function CVContent() {
  return (
    <div className="tmp-section-gap">
      <div className="container">
        <CVWhoIAm />
        <CVResearch />
        <CVEngineering />
        <CVDeployment />
        <CVJourney />
        <CVEducation />
        <CVSkillsAndVision />
      </div>
    </div>
  );
}
