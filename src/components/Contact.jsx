import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
function Contact() {
  const [copied, setCopied] = useState(false);

const copyEmail = async () => {
  await navigator.clipboard.writeText(
    "pradhansisir789@gmail.com"
  );

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>

      <p className="contact-text">
  I'm always open to discussing internships, data analytics projects,
  machine learning opportunities, or simply connecting with like-minded people.
</p>
<p className="contact-note">
    Looking forward to connecting with you.
  </p>
<div className="contact-email">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=pradhansisir789@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="email-link"
  >
    📧&nbsp;pradhansisir789@gmail.com
  </a>

  <button
    className="copy-email-btn"
    onClick={copyEmail}
    aria-label="Copy email"
  >
    {copied ? <FaCheck /> : <FaCopy />}
  </button>
</div>


      <div className="contact-links">

        <a
          href="https://github.com/Sisir-Pradhan07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaGithub /> GitHub
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/sisir-pradhan-b5032724a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaLinkedin /> LinkedIn
          </button>
        </a>

        <a
          href="/Sisir_Pradhan_Resume_AIML_DA.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-btn">
  <FaFilePdf /> View Resume
</button>
        </a>

      </div>
    </section>
  );
}

export default Contact;