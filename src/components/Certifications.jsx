import { FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { certifications } from '../data.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Credentials</span>
          <h2 className="section-title">AWS Certifications</h2>
          <p className="section-sub">
            Six AWS certifications spanning Generative AI, ML, data engineering, and cloud.
          </p>
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.05}>
              <a
                className="cert-card"
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                title={`Verify ${cert.name} on Credly`}
              >
                <img
                  className="cert-badge-img"
                  src={cert.img}
                  alt={cert.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'grid'
                  }}
                />
                <div
                  className={`cert-badge-fallback ${cert.tier.toLowerCase()}`}
                  style={{ display: 'none' }}
                >
                  {cert.code}
                </div>
                <span className="cert-tier">{cert.tier}</span>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-verify">
                  Verify on Credly <FiExternalLink />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
