import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

const links = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Experience",   href: "#experience" },
  { label: "Education",    href: "#education" },
  { label: "Projects",     href: "#projects" },
  { label: "CP",           href: "#cp" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          Musabbir
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleDark} aria-label="toggle theme">
            {darkMode ? "☀️" : "🌙"}
          </button>
          {/* hamburger for mobile */}
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="menu">
            <span className={`hamburger ${open ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
