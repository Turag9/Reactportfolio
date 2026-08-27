import { achievements } from "../data/portfolioData";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones & recognition</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <div key={i} className="achievement-card card">
              <div className="ach-emoji">{ach.type}</div>
              <div className="ach-content">
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-event">{ach.event}</p>
                <div className="ach-footer">
                  <span className="ach-team">Team: {ach.team}</span>
                  <span className="ach-year">{ach.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
