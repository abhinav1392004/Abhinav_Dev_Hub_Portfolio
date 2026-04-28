import Navbar from "./components/Navbar"
import About from "./section/About"
import Contact from "./section/Contact"
import Experience from "./section/Experience"
import Footer from "./section/Footer"
import Home from "./section/Home"
import Projects from "./section/Projects"
import Skills from "./section/Skills"
import Testimonial from "./section/Testimonial"
import ParticlesBackground from "./components/ParticlesBackground"


export default function App(){
  return(
    <div className="relative gradient text-white">
      <ParticlesBackground/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}