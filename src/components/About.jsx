import { personalInfo } from "../data/portfolioData";
import "./About.css";

// quick numbers — update manually if these change
const stats = [
  { value: "1000+", label: "Problems Solved" },
  { value: "3",     label: "ICPC Contests" },
  { value: "3.083", label: "CGPA" },
  { value: "2022",  label: "Started CP" },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">Get to know me better</p>
            </div>

            <p className="about-bio">
              I'm a <strong>CSE student at IIUC</strong> — currently in my final year, graduating mid-2026.
              My main thing has been competitive programming since I started in 2022. Codeforces, CodeChef,
              ICPC — I've been going at it pretty consistently.
            </p>
            <p className="about-bio">
              On the development side I work with <strong>React</strong> on the frontend and{" "}
              <strong>Node.js/Express</strong> on the backend. Built a couple full-stack projects, nothing
              fancy but functional. I enjoy the problem-solving side of dev work more than the design part honestly.
            </p>
            <p className="about-bio">
              I also train juniors at the{" "}
              <strong>IIUC Competitive Programming Society</strong> — bootcamps, problem sets, contest prep.
              Teaching is weirdly effective for learning yourself.
            </p>

            <div className="about-tags">
              {["Competitive Programming", "Full Stack Dev", "React.js", "Problem Solving", "Mentoring"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-stats">
            {stats.map(s => (
              <div key={s.label} className="stat-card card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
