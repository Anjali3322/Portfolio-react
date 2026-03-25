import Navbar from '../Layout/Navbar'
import Banner from '../Sections/Banner'
import AboutMe from '../Sections/AboutMe'
import Skills from '../Sections/Skills'
import Projects from '../Sections/Projects'
import Experience from '../Sections/Experience'
import Contact from '../Sections/Contact'
import Footer from '../Layout/Footer'
import Loader from '../Sections/Loader'

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
      {/* <Loader/> */}
    </div>
  )
}

export default Home
