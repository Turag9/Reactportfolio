import { projects } from "../data/portfolioData";
import "./Projects.css";

// just a color map — add more types here if needed
const typeColor = {
  Frontend: "#ec4899",
  Backend:  "#10b981",
  Tool:     "#f59e0b",
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built</p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card card">
              <div className="project-top">
                <span
                  className="project-type-badge"
                  style={{ "--pcolor": typeColor[proj.type] || "#6366f1" }}
                >
                  {proj.type}
                </span>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                )}
              </div>

              <div className="project-folder">📁</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              <div className="project-techs">
                {proj.technologies.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
