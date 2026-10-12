import { profile } from './data'
import { useReveal, useTheme } from './hooks'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  useReveal()

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="mono">Built with React & Vite</span>
        </div>
      </footer>
    </>
  )
}
