import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CP from "./components/CompetitiveProgramming";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>
      <Navbar darkMode={dark} toggleDark={() => setDark(prev => !prev)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <CP />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Syed Mohammed Musabbir Turag. Built with React & ❤️</p>
      </footer>
    </div>
  );
}

export default App;
