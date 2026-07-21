import { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#awards', label: 'Awards' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#mentorship', label: 'Mentorship' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">Y</span>
          Yogita<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
          >
            <span className="icon-bg">
              <FiSun />
              <FiMoon />
            </span>
            <span
              className="knob"
              style={{
                left: theme === 'light' ? '5px' : 'calc(100% - 29px)',
                transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {theme === 'light' ? <FiSun /> : <FiMoon />}
            </span>
          </button>

          <button
            className="nav-toggle-mobile"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}
