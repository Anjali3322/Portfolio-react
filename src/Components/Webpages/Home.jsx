import Navbar from '../Layout/Navbar'
import Banner from '../Modals/Banner'
import AboutMe from '../Modals/AboutMe'
import Skills from '../Modals/Skills'
import Projects from '../Modals/Projects'
import Experience from '../Modals/Experience'
import Contact from '../Modals/Contact'
import Footer from '../Layout/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
