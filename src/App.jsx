import SplashCursor from './components/SplashCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Education from './components/Education'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { internshipsList, leadershipList, educationList } from './data/portfolioData'

function App() {
  return (
    <>
      <SplashCursor
        VELOCITY_DISSIPATION={3}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={18}
        COLOR="#ffffff"
        RAINBOW_MODE={false}
      />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      {internshipsList && internshipsList.length > 0 && <Internships />}
      {leadershipList && leadershipList.length > 0 && <Leadership />}
      {educationList && educationList.length > 0 && <Education />}
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
