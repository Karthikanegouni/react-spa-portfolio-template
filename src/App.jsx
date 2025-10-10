import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && activeSection !== entry.target.id) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [activeSection])

  return (
    <main>
      <Header active={activeSection} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
