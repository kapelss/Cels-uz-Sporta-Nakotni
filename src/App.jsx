import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import AboutProject from "./components/AboutProject";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/Global.css";
import "./styles/Sections.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      {/* Ambient background glows */}
      <div className="glow-top" />
      <div className="glow-bottom" />

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <hr className="divider" />

      <section id="problem">
        <Problem />
      </section>

      <hr className="divider" />

      <section id="project">
        <AboutProject />
      </section>

      <hr className="divider" />

      <section id="team">
        <Team />
      </section>

      <hr className="divider" />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
