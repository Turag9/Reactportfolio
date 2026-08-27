import { experience } from "../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Where I've been working & contributing</p>
        </div>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-org">{exp.organization}</p>
                  </div>
                  <span className="exp-duration">{exp.duration}</span>
                </div>

                <ul className="exp-list">
                  {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                </ul>

                <div className="exp-learnings">
                  <span className="learnings-label">Skills gained:</span>
                  <div className="learnings-tags">
                    {exp.learnings.map(l => (
                      <span key={l} className="tag">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
