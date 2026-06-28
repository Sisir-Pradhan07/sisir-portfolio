import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

function Contact() {
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
<p className="contact-email">
  <a
    href="mailto:pradhansisir789@gmail.com"
    className="email-link"
  >
    📧 pradhansisir789@gmail.com
  </a>
</p>


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