import "./App.css";
import { useState, useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
const [fadeOut, setFadeOut] = useState(false);
const [scrollProgress, setScrollProgress] = useState(0);

// Loading Screen

useEffect(() => {
  const fadeTimer = setTimeout(() => {
    setFadeOut(true);
  }, 1700);

  const removeTimer = setTimeout(() => {
    setLoading(false);
  }, 2100);

  return () => {
    clearTimeout(fadeTimer);
    clearTimeout(removeTimer);
  };
}, []);
useEffect(() => {
  const pdfs = [
    "/Certificates/Data Analytics Intern Certificate.pdf",
    "/Certificates/Empowering Innovation with ESP32 IoT Certificate.pdf",
    "/Certificates/NPTEL Data Analytics.pdf",
    "/Certificates/NPTEL The Joy of Computing using Python.pdf",
    "/Certificates/NPTEL Programming In Java.pdf",
    "/Certificates/Python using AI workshop Certificate.pdf",
  ];

  pdfs.forEach((pdf) => {
    fetch(pdf)
      .then((res) => res.blob())
      .catch(() => {});
  });
}, []);
  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
  return <LoadingScreen fadeOut={fadeOut} />;
}
 return (
  <main className="app-content">
      <div className="scroll-container">
       <div
  className="scroll-progress"
  style={{
    height: `${scrollProgress}%`,
  }}
></div>
      </div>

      <Navbar />

      <Hero />

      <Reveal delay={0}>
        <About />
      </Reveal>

      <Reveal delay={80}>
        <Skills />
      </Reveal>

      <Reveal delay={120}>
        <Journey />
      </Reveal>

      <Reveal delay={160}>
        <Projects />
      </Reveal>

      <Reveal delay={200}>
        <Certifications />
      </Reveal>

      <Reveal delay={240}>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}

export default App;