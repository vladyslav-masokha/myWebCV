import { education } from "../../data/cvData.js";
import { Period } from "../ui/Period.jsx";

export function EducationSection() {
  return (
    <article className="education">
      <div className="item-header">
        <div>
          <h3>{education.school}</h3>
          <p>{education.field}</p>
        </div>
        <Period>{education.period}</Period>
      </div>
    </article>
  );
}
