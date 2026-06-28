import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const [selected, setSelected] = useState("");
  const [ignoreScroll, setIgnoreScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const removeGlow = () => {

  if (!ignoreScroll) {
    setSelected("");
  }
};

    window.addEventListener("touchmove", removeGlow);
    window.addEventListener("scroll", removeGlow);

    return () => {
      window.removeEventListener("touchmove", removeGlow);
      window.removeEventListener("scroll", removeGlow);
    };
  }, [ignoreScroll]);

  const handleClick = (section, e) => {
    e.preventDefault();

    setSelected(section);
    setMenuOpen(false);

    const target = document.getElementById(section);

    if (target) {
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 80;

      const y =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight -
        15;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setIgnoreScroll(true);

setTimeout(() => {
  setIgnoreScroll(false);
}, 800);
  };

  return (
    <nav>
      <div className="nav-top">
        <a
          href="#home"
          className={
            selected === "home"
              ? "home-link selected"
              : "home-link"
          }
          onClick={(e) => handleClick("home", e)}
        >
          <FaHome />
          <span>Home</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a
            href="#about"
            className={selected === "about" ? "selected" : ""}
            onClick={(e) => handleClick("about", e)}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={selected === "skills" ? "selected" : ""}
            onClick={(e) => handleClick("skills", e)}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#journey"
            className={selected === "journey" ? "selected" : ""}
            onClick={(e) => handleClick("journey", e)}
          >
            Journey
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={selected === "projects" ? "selected" : ""}
            onClick={(e) => handleClick("projects", e)}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#certifications"
            className={selected === "certifications" ? "selected" : ""}
            onClick={(e) => handleClick("certifications", e)}
          >
            Certifications
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={selected === "contact" ? "selected" : ""}
            onClick={(e) => handleClick("contact", e)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;