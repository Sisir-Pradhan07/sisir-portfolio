import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaFolderOpen,
  FaLaptopCode,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

function About() {
  const [selectedCard, setSelectedCard] = useState(null);

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
    setSelectedCard(null);
  };

  window.addEventListener("scroll", clearSelection);

  return () =>
    window.removeEventListener("scroll", clearSelection);
}, [isMobile]);

  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p className="about-text">
        I'm a B.Tech Computer Science (AI & ML) student passionate about
        Data Analytics and Machine Learning. I enjoy transforming data into
        meaningful insights and building practical solutions using Python,
        SQL, Power BI, and Scikit-Learn.
      </p>

      <div className="about-highlights">

        <div
  className={`about-card ${
    selectedCard === "education" ? "active" : ""
  }`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedCard((prev) =>
      prev === "education" ? null : "education"
    );
  }}
>
          <h3>
            <FaGraduationCap />
            <span>Education</span>
          </h3>

          <p>B.Tech</p>

          <small>Computer Science (AI & ML)</small>
        </div>

        <div
  className={`about-card ${
    selectedCard === "projects" ? "active" : ""
  }`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedCard((prev) =>
      prev === "projects" ? null : "projects"
    );
  }}
>
          <h3>
            <FaFolderOpen />
            <span>Projects</span>
          </h3>

          <p>3 Projects</p>

          <small>ML • Power BI</small>
        </div>

        <div
  className={`about-card ${
    selectedCard === "focus" ? "active" : ""
  }`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedCard((prev) =>
      prev === "focus" ? null : "focus"
    );
  }}
>
         <h3>
            <FaLaptopCode />
            <span>Focus</span>
         </h3>

         <p>Machine Learning</p>

          <small>Data Analytics & Power BI</small>
        </div>

        <div
  className={`about-card ${
    selectedCard === "location" ? "active" : ""
  }`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedCard((prev) =>
      prev === "location" ? null : "location"
    );
  }}
>
          <h3>
            <FaLocationDot />
            <span>Location</span>
          </h3>

          <p>
  Bhubaneswar
  <br />
  Odisha, India
</p>

          <small>Open to Opportunities</small>
        </div>

      </div>
    </section>
  );
}

export default About;