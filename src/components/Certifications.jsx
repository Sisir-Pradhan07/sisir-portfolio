import {
  FaBriefcase,
  FaCertificate,
  FaEye,
} from "react-icons/fa";

import { useState, useEffect } from "react";
function Certifications() {
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
    window.removeEventListener(
      "resize",
      handleResize
    );
}, []);

useEffect(() => {
  if (!isMobile) return;

  const clearSelection = () => {
    setSelectedCard(null);
  };

  window.addEventListener("scroll", clearSelection);

  return () =>
    window.removeEventListener(
      "scroll",
      clearSelection
    );
}, [isMobile]);
  const achievements = [
    {
      type: "Internship",
      icon: <FaBriefcase />,
      title: "Data Analytics Intern",
      organization: "CTTC, Bhubaneswar",
      date: "Jul 2025",
      badges: ["Python", "Power BI", "Tableau"],
      link: "/Certificates/Data Analytics Intern Certificate.pdf",
    },
    {
      type: "Internship",
      icon: <FaBriefcase />,
      title: "ESP32 IoT Internship",
      organization: "GIFT, Bhubaneswar",
      date: "Jan 2025",
      badges: ["ESP32", "IoT", "Arduino"],
      link: "/Certificates/Empowering Innovation with ESP32 IoT Certificate.pdf",
    },
    {
      type: "Certification",
      icon: <FaCertificate />,
      title: "Data Analytics with Python",
      organization: "NPTEL",
      date: "May 2026",
      badges: ["Python", "Data Analytics"],
      link: "/Certificates/NPTEL Data Analytics.pdf",
    },
    {
      type: "Certification",
      icon: <FaCertificate />,
      title: "The Joy of Computing using Python",
      organization: "NPTEL",
      date: "Nov 2025",
      badges: ["Python", "Problem Solving"],
      link: "/Certificates/NPTEL The Joy of Computing using Python.pdf",
    },
    {
      type: "Certification",
      icon: <FaCertificate />,
      title: "Programming in Java",
      organization: "NPTEL",
      date: "May 2025",
      badges: ["Java", "OOP"],
      link: "/Certificates/NPTEL Programming In Java.pdf",
    },
    {
      type: "Certification",
      icon: <FaCertificate />,
      title: "Python using AI Workshop",
      organization: "AI for Techies",
      date: "Jul 2025",
      badges: ["Python", "AI"],
      link: "/Certificates/Python using AI workshop Certificate.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="achievements"
    >
      <h2>Certifications & Internships</h2>

      <div className="achievement-grid">
        {achievements.map((item) => (
          <div
  key={item.title}
  className={`achievement-card ${
    selectedCard === item.title
      ? "active"
      : ""
  }`}
  onClick={() => {
    if (!isMobile) return;

    setSelectedCard((prev) =>
      prev === item.title
        ? null
        : item.title
    );
  }}
>

            <h3 className="achievement-title">
              {item.icon}
              <span>{item.title}</span>
            </h3>

            <p className="achievement-meta">
  {item.organization} • {item.date}
</p>

            <div className="achievement-tags">
              {item.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <a
              href={item.link}
    className="certificate-link"
    onClick={(e) => {
  e.stopPropagation();

  if (item.link === "#") {
    e.preventDefault();
  }

  e.currentTarget.blur();
}}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEye />
              <span>View Certificate</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;