import { FiZap } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            High-impact systems I've architected and shipped across AI, data, and compliance.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="project-card">
                <span className="project-tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <div className="project-impact">
                  <FiZap /> {p.impact}
                </div>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
