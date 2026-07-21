import { FiVideo, FiMessageCircle, FiCompass, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

const services = [
  {
    icon: <FiVideo />,
    title: '1:1 Mentorship Call',
    text: 'Personalized guidance on Data & AI Engineering careers, projects, and interview prep.',
  },
  {
    icon: <FiCompass />,
    title: 'Career Roadmap',
    text: 'Break into cloud, data, or GenAI roles with a clear, tailored learning path.',
  },
  {
    icon: <FiMessageCircle />,
    title: 'Resume & Portfolio Review',
    text: 'Actionable feedback to make your profile stand out to recruiters and hiring managers.',
  },
]

const perks = [
  'Resume review and career guidance',
  'Data engineering roadmap discussion',
  'Flexible slots · book what suits you',
]

export default function Mentorship() {
  return (
    <section id="mentorship" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Work With Me</span>
          <h2 className="section-title">1:1 Mentorship &amp; Sessions</h2>
          <p className="section-sub">
            Book a personalized session on Topmate — I help engineers grow into Data &amp; AI roles.
          </p>
        </Reveal>

        <div className="mentorship-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="mentorship-card">
                <div className="m-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mentorship-cta">
            <div className="mentorship-cta-text">
              <h3>Available for 1:1 mentorship</h3>
              <ul className="mentorship-perks">
                {perks.map((p) => (
                  <li key={p}>
                    <FiCheckCircle /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={profile.topmate}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mentorship-book"
            >
              Book on Topmate <FiArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
