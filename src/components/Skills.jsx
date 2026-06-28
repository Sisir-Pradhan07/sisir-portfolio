import {
  FaPython,
  FaDatabase,
  FaGithub,
  FaChartBar,
} from "react-icons/fa";

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";


import { MdPsychology } from "react-icons/md";

import { useState, useEffect } from "react";

function Skills() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
useEffect(() => {
  if (!isMobile) return;

  const clearSelection = () => {
    setSelectedSkill(null);
  };

  window.addEventListener("scroll", clearSelection);

  return () => {
    window.removeEventListener("scroll", clearSelection);
  };
}, [isMobile]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "Machine Learning", icon: <MdPsychology /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
  {skills.map((skill) => (
    <div
  className={`skill-card ${
    selectedSkill === skill.name ? "active" : ""
  }`}
  key={skill.name}
  onClick={() => {
  if (!isMobile) return;

  setSelectedSkill((prev) =>
    prev === skill.name ? null : skill.name
  );
}}
>
      <div className="skill-icon">
        {skill.icon}
      </div>

      <h3>{skill.name}</h3>
    </div>
  ))}
</div>
    </section>
  );
}

export default Skills;