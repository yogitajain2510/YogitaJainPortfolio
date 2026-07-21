import { FiFilm } from 'react-icons/fi'
import { FaPlaneDeparture, FaUtensils, FaSpa } from 'react-icons/fa'
import Reveal from './Reveal.jsx'
import { hobbies } from '../data.js'

const hobbyIcons = {
  travel: <FaPlaneDeparture />,
  movies: <FiFilm />,
  food: <FaUtensils />,
  fitness: <FaSpa />,
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Beyond Work</span>
          <h2 className="section-title">What Keeps Me Going</h2>
          <p className="section-sub">
            A few things I genuinely enjoy when I'm away from the keyboard.
          </p>
        </Reveal>

        <div className="hobbies-grid">
          {hobbies.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="hobby-card">
                <div className="hobby-icon">{hobbyIcons[h.icon]}</div>
                <h4>{h.title}</h4>
                <p>{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
