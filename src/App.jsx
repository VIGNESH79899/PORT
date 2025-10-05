import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import SocialSidebar from "./components/SocialSidebar";
import DarkModeToggle from "./components/DarkModeToggle";
import BackToTop from "./components/BackToTop";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const toggleDark = () => setDark(!dark);

  return (
    <div className="relative">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <CTA />
      <SocialSidebar />
      <BackToTop />
    </div>
  );
}

export default App;
