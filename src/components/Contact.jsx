import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="blob-3" />
            <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
              Get In Touch
            </span>
            <h2>Let's build something great</h2>
            <p>
              I love connecting with fellow builders in data &amp; AI — whether it's swapping ideas,
              1:1 mentorship, or just a friendly chat. Feel free to reach out and say hi!
            </p>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <FiMail /> Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Yogita_Jain_Resume.pdf`}
                download="Yogita_Jain_Resume.pdf"
                className="btn btn-primary"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
