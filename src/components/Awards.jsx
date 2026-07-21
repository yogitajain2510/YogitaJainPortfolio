import { useState, useEffect } from 'react'
import { FiStar, FiX, FiChevronRight } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { awards } from '../data.js'

export default function Awards() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="awards" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Recognition</span>
          <h2 className="section-title">Awards &amp; Honors</h2>
          <p className="section-sub">
            Eight performance and contribution awards across John Deere and Deloitte USI.
          </p>
        </Reveal>

        <div className="awards-grid">
          {awards.map((a, i) => {
            const hasDetails = Array.isArray(a.details) && a.details.length > 0
            return (
              <Reveal key={a.title + a.date} delay={i * 0.05}>
                <div
                  className={`award-card ${hasDetails ? 'is-clickable' : ''}`}
                  onClick={hasDetails ? () => setSelected(a) : undefined}
                  role={hasDetails ? 'button' : undefined}
                  tabIndex={hasDetails ? 0 : undefined}
                  onKeyDown={
                    hasDetails
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setSelected(a)
                          }
                        }
                      : undefined
                  }
                >
                  <div className="award-card-top">
                    <span className="award-medal">
                      <FiStar />
                    </span>
                    <span className="award-date">{a.date}</span>
                  </div>
                  <h4 className="a-title">{a.title}</h4>
                  <div className="a-org">{a.org}</div>
                  <p className="a-desc">{a.desc}</p>
                  {hasDetails && (
                    <span className="a-more">
                      View details <FiChevronRight />
                    </span>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      {selected && (
        <div className="award-modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="award-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <button
              className="award-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <FiX />
            </button>
            <div className="award-modal-head">
              <span className="award-medal">
                <FiStar />
              </span>
              <div>
                <h3>{selected.title}</h3>
                <span className="award-modal-meta">
                  {selected.org} · {selected.date}
                </span>
              </div>
            </div>

            <div className="award-modal-body">
              {selected.details.map((sec, si) => (
                <div className="award-section" key={si}>
                  <h4>{sec.heading}</h4>
                  {sec.paragraphs?.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {sec.footer && <p className="award-section-footer">{sec.footer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

