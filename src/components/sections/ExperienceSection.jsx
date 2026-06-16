import { experience } from "../../data/cvData.js";
import { Period } from "../ui/Period.jsx";

export function ExperienceSection() {
  return (
    <div className="timeline">
      {experience.map((job) => (
        <article className="timeline-item" key={`${job.title}-${job.company}`}>
          <div className="timeline-marker" aria-hidden="true" />
          <div>
            <div className="item-header">
              <div>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
              </div>
              <Period>{job.period}</Period>
            </div>
            <ul className="clean-list detail-list">
              {job.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
