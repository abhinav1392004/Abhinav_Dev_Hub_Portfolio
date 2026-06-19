import Navbar from "./components/NavBar";
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Project";
import Experience from "./section/Experience";
import Testimonial from "./section/Testimonial";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import ParticleBackground from "./components/ParticleBackground";

export default function App(){
  return(
    <div className="relative gradient text-white">
      <ParticleBackground/>
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