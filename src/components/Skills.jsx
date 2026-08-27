import { skills } from "../data/portfolioData";
import "./Skills.css";

// grouped with emoji labels — add new categories here as needed
const categories = [
  { title: "Programming Languages", icon: "💻", items: skills.languages,  color: "#6366f1" },
  { title: "Frontend",              icon: "🎨", items: skills.frontend,   color: "#ec4899" },
  { title: "Backend",               icon: "⚙️", items: skills.backend,    color: "#10b981" },
  { title: "Database",              icon: "🗄️", items: skills.database,   color: "#f59e0b" },
  { title: "Tools & Platforms",     icon: "🛠️", items: skills.tools,      color: "#3b82f6" },
  { title: "Libraries",             icon: "📦", items: skills.libraries,  color: "#8b5cf6" },
  { title: "Other Concepts",        icon: "🧠", items: skills.others,     color: "#14b8a6" },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "56px" }}>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.title} className="skill-card card">
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.items.map(item => (
                  <span key={item} className="skill-tag" style={{ "--tag-accent": cat.color }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
