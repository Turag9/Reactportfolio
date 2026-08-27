import { competitiveProgramming } from "../data/portfolioData";
import "./CompetitiveProgramming.css";

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="section cp-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <h2 className="section-title">Competitive Programming</h2>
          <p className="section-subtitle">My journey in algorithmic problem solving</p>
        </div>

        <div className="cp-grid">
          {competitiveProgramming.map((cp, i) => (
            <a
              key={i}
              href={cp.url}
              target="_blank"
              rel="noreferrer"
              className="cp-card card"
              style={{ "--cp-color": cp.color }}
            >
              <div className="cp-badge-icon" style={{ background: cp.color }}>
                {cp.badge}
              </div>
              <div className="cp-info">
                <h3 className="cp-platform">{cp.platform}</h3>
                <p className="cp-handle">@{cp.handle}</p>
                <p className="cp-stats">{cp.stats}</p>
              </div>
              <div className="cp-arrow">→</div>
            </a>
          ))}
        </div>

        <div className="cp-total-card card">
          <div className="cp-total-item">
            <span className="cp-total-num">1300+</span>
            <span className="cp-total-label">Total Problems Solved</span>
          </div>
          <div className="cp-divider" />
          <div className="cp-total-item">
            <span className="cp-total-num">10+</span>
            <span className="cp-total-label">Platforms</span>
          </div>
          <div className="cp-divider" />
          <div className="cp-total-item">
            <span className="cp-total-num">4+</span>
            <span className="cp-total-label">Years Active</span>
          </div>
          <div className="cp-divider" />
          <div className="cp-total-item">
            <span className="cp-total-num">1624</span>
            <span className="cp-total-label">Best Rating (CodeChef)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
