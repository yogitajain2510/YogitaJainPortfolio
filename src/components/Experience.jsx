import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Career Path</span>
          <h2 className="section-title">Professional Experience</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((exp, i) => (
            <Reveal key={exp.company + i} delay={i * 0.05}>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <div className="exp-card">
                  <div className="exp-head">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <div className="exp-team">{exp.team}</div>
                  <ul className="exp-points">
                    {exp.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                  <div className="exp-stack">
                    {exp.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
