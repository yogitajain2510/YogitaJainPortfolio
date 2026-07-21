import { FiTrendingUp, FiCpu, FiDatabase, FiShield, FiBookOpen, FiAward, FiCalendar, FiCloud, FiTrendingDown } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { profile, education } from '../data.js'

const highlights = [
  {
    icon: <FiCpu />,
    title: 'Generative AI',
    text: 'Production RAG systems & AI agents on AWS Bedrock and Claude.',
  },
  {
    icon: <FiDatabase />,
    title: 'Data Engineering',
    text: '100TB+ daily ETL pipelines with PySpark, Databricks & Palantir.',
  },
  {
    icon: <FiCloud />,
    title: 'Cloud Migration',
    text: 'Large-scale AWS migrations & data platform modernization.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Business Impact',
    text: '$600K infra savings & $1M compliance cost reduction delivered.',
  },
  {
    icon: <FiTrendingDown />,
    title: 'Cost Optimization',
    text: 'Palantir & compute tuning driving major infrastructure savings.',
  },
  {
    icon: <FiShield />,
    title: 'Governance',
    text: 'Enterprise security, risk compliance & data quality frameworks.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">Turning complex data into impact</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>{profile.tagline}</p>
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="about-highlights">
            {highlights.map((h) => (
              <div className="highlight-card" key={h.title}>
                <div className="h-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="about-edu-full">
            <div className="edu-card">
              <span className="edu-tag">Education</span>
              <div className="edu-icon">
                <FiBookOpen />
              </div>
              <h4>{education.degree}</h4>
              <div className="edu-school">{education.school}</div>
              <div className="edu-meta">
                <span>
                  <FiAward /> {education.score}
                </span>
                <span>
                  <FiCalendar /> {education.period}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
