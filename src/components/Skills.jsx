import Reveal from './Reveal.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Tech Stack</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-sub">
            A full spectrum of data engineering, cloud, and Generative AI tools I use to ship
            production systems.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="skill-card">
                <h4>
                  <span className="dot" />
                  {group.category}
                </h4>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
