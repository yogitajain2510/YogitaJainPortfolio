import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Awards from './components/Awards.jsx'
import Testimonials from './components/Testimonials.jsx'
import Mentorship from './components/Mentorship.jsx'
import Hobbies from './components/Hobbies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Awards />
        <Testimonials />
        <Mentorship />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
