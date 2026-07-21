import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiLinkedin, FiArrowDownCircle, FiFileText, FiDatabase } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import { SiPython, SiApachespark, SiDatabricks, SiPalantir } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { profile, stats, coreSkills } from '../data.js'

const skillIcons = {
  python: <SiPython />,
  spark: <SiApachespark />,
  sql: <FiDatabase />,
  genai: <HiSparkles />,
  databricks: <SiDatabricks />,
  palantir: <SiPalantir />,
}

function TopmateIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.03 2 11c0 2.79 1.4 5.28 3.6 6.92V22l3.53-1.94c.92.22 1.88.34 2.87.34 5.523 0 10-4.03 10-9S17.523 2 12 2zm-1.02 6.2h5.2c.5 0 .9.4.9.9s-.4.9-.9.9h-1.7v4.9c0 .5-.4.9-.9.9s-.9-.4-.9-.9V10H10.98c-.5 0-.9-.4-.9-.9s.4-.9.9-.9z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container">
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>
              Hi, I'm <span className="accent-word">Yogita</span>
              <br />
              AI &amp; Data Engineer
            </h1>

            <div className="core-skills">
              <a href="#certifications" className="core-skill-tile aws-cert-tile">
                <span className="cs-icon">
                  <FaAws />
                </span>
                AWS Certified
              </a>
              {coreSkills.map((s) => (
                <span className="core-skill-tile" key={s.name}>
                  <span className="cs-icon">{skillIcons[s.icon]}</span>
                  {s.name}
                </span>
              ))}
            </div>

            <p className="hero-desc">{profile.tagline}</p>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                <FiMail /> Get in touch
              </a>
              <a href="#work" className="btn btn-ghost">
                <FiFileText /> View my work
              </a>
            </div>

            <div className="hero-socials">
              <a
                className="social-btn"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <FiMail />
              </a>
              <a
                className="social-btn"
                href={profile.topmate}
                target="_blank"
                rel="noreferrer"
                aria-label="Topmate"
              >
                <TopmateIcon />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/profile.png"
                alt="Yogita Jain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'grid'
                }}
              />
              <div className="hero-photo-fallback" style={{ display: 'none' }}>
                YJ
              </div>
              <div className="hero-photo-badge">
                <span className="b-dot" /> AWS Certified
              </div>
            </div>
            <h3>{profile.name}</h3>
            <p className="card-role">{profile.title}</p>
            <div className="card-info">
              <div className="card-info-row">
                <FiMapPin /> {profile.location}
              </div>
              <div className="card-info-row">
                <FiMail /> {profile.email}
              </div>
              <div className="card-info-row">
                <FiLinkedin /> linkedin.com/in/yogita-jain-6247a1188
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-strip"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--accent)',
          fontSize: '1.6rem',
          zIndex: 2,
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <FiArrowDownCircle />
      </motion.a>
    </section>
  )
}
