import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa'
import Reveal from './Reveal.jsx'
import { testimonials } from '../data.js'

const avatarColors = [
  'linear-gradient(135deg, #a67564, #723e31)',
  'linear-gradient(135deg, #d9b18e, #a67564)',
  'linear-gradient(135deg, #8a6f63, #4a3128)',
  'linear-gradient(135deg, #c99a76, #8a5a45)',
  'linear-gradient(135deg, #b08968, #6f4a38)',
  'linear-gradient(135deg, #d9b18e, #723e31)',
]

export default function Testimonials() {
  return (
    <section id="recommendations" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Kind Words</span>
          <h2 className="section-title">Recommendations</h2>
          <p className="section-sub">
            What colleagues and collaborators say about working with me on LinkedIn.
          </p>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <figure className="testimonial-card">
                <FaQuoteLeft className="t-quote-icon" />
                <blockquote className="t-quote">{t.quote}</blockquote>
                <figcaption className="t-author">
                  <span
                    className="t-avatar"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                  >
                    {t.initials}
                  </span>
                  <span className="t-meta">
                    <span className="t-name">
                      {t.name}
                      <FaLinkedin className="t-li" />
                    </span>
                    <span className="t-role">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
