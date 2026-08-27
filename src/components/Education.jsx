import { education } from "../data/portfolioData";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>

        <div className="edu-cards">
          {education.map((edu, i) => (
            <div key={i} className="edu-card card">
              <div className="edu-icon">🎓</div>
              <div className="edu-info">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <div className="edu-meta">
                  <span className="edu-badge">📅 {edu.duration}</span>
                  <span className="edu-badge">🏁 {edu.graduation}</span>
                  <span className="edu-badge cgpa-badge">⭐ CGPA: {edu.cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
