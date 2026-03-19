import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import AboutProject from "./components/AboutProject";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
    {
      threshold: 0.15,
    }
  );

  elements.forEach(el => observer.observe(el));
}, []);



  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="problem">
        <Problem />
      </section>

      <section id="project">
        <AboutProject />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
