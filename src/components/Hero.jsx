import { useState, useEffect } from "react";
import {
  FaFolderOpen,
  FaFileAlt,
  FaBriefcase,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  const [featuredActive, setFeaturedActive] = useState(false);
  const [isMobile, setIsMobile] = useState(
  window.innerWidth <= 768
);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener("resize", handleResize);
}, []);
useEffect(() => {
  if (!isMobile) return;

  const clearSelection = () => {
    setFeaturedActive(false);
  };
  window.addEventListener("scroll", clearSelection);
  return () =>
    window.removeEventListener("scroll", clearSelection);
}, [isMobile]);
const scrollToProjects = (e) => {
  e.preventDefault();

  const section = document.getElementById("projects");

  if (section) {
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.offsetHeight : 80;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navHeight -
      15;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};
  return (
    <section id="home" className="hero">
      <div className="hero-image">
        <img
          src="/images/Sisir1.png"
          alt="Sisir Pradhan"
          className="profile-pic"
        />
        <div className="hero-info">
  <p className="hero-location">
    📍 Bhubaneswar, Odisha
  </p>
  <div className="social-icons">
    <a
      href="https://github.com/Sisir-Pradhan07"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <img
  src="/images/github-logo.png"
  alt="GitHub"
  className="social-icon"
/>
    </a>
    <a
      href="https://www.linkedin.com/in/sisir-pradhan-b5032724a"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <img
  src="/images/linkedin-logo.png"
  alt="LinkedIn"
  className="social-icon"
/>
    </a>
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pradhansisir789@gmail.com"
target="_blank"
rel="noopener noreferrer"
  aria-label="Email"
>
<img
  src="/images/gmail-icon.png"
  alt="Email"
  className="social-icon gmail-icon"
/>
</a>
  </div>
</div>
</div>
      <div className="hero-content">
        <div className="hero-title">
          <span className="greeting">Hi, I'm</span>
          <h1>Sisir Pradhan</h1>
        </div>
        <h2>Data Analytics | Machine Learning</h2>
        <p>
          Building practical Machine Learning models and Data Analytics
          solutions using Python, SQL, Power BI, and Scikit-Learn.
        </p>
        <div className="hero-buttons">
          <button
  className="hero-btn primary"
  onClick={() => {
    const section = document.getElementById("projects");

    if (section) {
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 80;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight -
        15;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }}
>
  <FaFolderOpen />
  View Projects
</button>
          <a
            href="/Sisir_Pradhan_Resume_AIML_DA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn secondary"
          >
            <FaFileAlt />
            Resume
          </a>
        </div>
        <div className="hero-stats">
          <a
  href="/"
  onClick={scrollToProjects}
>
            <FaFolderOpen />
            <span>3 Projects</span>
          </a>
          <a href="#certifications">
            <FaBriefcase />
            <span>2 Internships</span>
          </a>
          <a href="#certifications">
            <FaCertificate />
            <span>4 Certifications</span>
          </a>
        </div>
      </div>    
<div className="featured-project">
  <div className="featured-image">
    <img
      src="/images/Actual vs Prediction (Linear).png"
      alt="Oil Price Prediction"
    />
    <div className="featured-badge">
      ⭐ Featured
    </div>
    <div className="featured-r2">
      R² 0.978
    </div>
  </div>
  <div className="featured-content">
    <h3>Oil Price Prediction of India</h3>
    <p>
Machine Learning regression model for forecasting
Indian oil prices using Brent crude, USD-INR,
global demand, and geopolitical indicators.
</p>
    <div className="featured-tags">
      <span>Python</span>
      <span>Scikit-Learn</span>
      <span>Regression</span>
    </div>
    <a
  href="/"
  onClick={scrollToProjects}
  className="featured-link"
>
      <span>View Project</span>
      <FaArrowRight />
    </a>
  </div>
</div>
<div
  className={`featured-project-mobile ${
    featuredActive ? "active" : ""
  }`}
  onClick={() => {
    if (!isMobile) return;
    setFeaturedActive((prev) => !prev);
  }}
>
  <div className="featured-image">
    <img
      src="/images/Actual vs Prediction (Linear).png"
      alt="Oil Price Prediction"
    />
    <div className="featured-badge">
      ⭐ Featured
    </div>
  </div>
  <div className="featured-mobile-content">
    <h3>Oil Price Prediction of India</h3>
    <p className="featured-mobile-description">
  Machine Learning model for forecasting Indian oil prices using Brent crude, USD-INR, global demand, and geopolitical indicators.
</p>
    <div className="featured-mobile-tags">
      <span>Python</span>
      <span>ML</span>
      <span>R² 0.978</span>
      <span>Regression</span>
    </div>
    <a
  href="/"
  onClick={scrollToProjects}
  className="featured-link"
>
      View Project
      <FaArrowRight />
    </a>
  </div>
</div>
    </section>
  );
}
export default Hero;