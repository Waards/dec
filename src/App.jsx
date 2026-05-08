import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar logo={<span style={{ fontWeight: 700, color: '#000' }}>DEC</span>} />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}

export default App