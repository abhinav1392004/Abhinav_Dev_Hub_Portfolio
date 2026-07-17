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
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import React from "react";

export default function App(){
  const [introDone, setIntroDone] = React.useState(false);
  return(
    <>
      {!introDone && <IntroAnimation onFinish={()=>setIntroDone(true)} />}
    {introDone && (
    <div className="relative gradient text-white">
      <CustomCursor/>
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
    )}
    </>
  )
}