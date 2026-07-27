import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpeg";
import React from "react";



export default function About(){

  const stats=[
    {label:"Experience", value:"1+ years"},
    {label:"Speciality", value:"Full Stack"},
    {label:"Focus", value:"Performance & UX"}
  ];

  return(
    <section id="about"
    className="min-h-screen w-full flex items-center relative bg-black text-white ">
      <div
          className="absolute -top-32 -left-32
          w-[40vw] sm:w-[35vw] md:w-[40vw]
          h-[40vw] sm:h-[35vw] md:h-[40vw]
          max-w-[400px] max-h-[300px]
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[60px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        ></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
      <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
      initial={{opacity:0, y:24}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}
      viewport={{once:true, amount:0.4}}
      >

        <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
          whileHover={{scale:1.02}}
          transition={{type:"spring", stiffness:200 , damping:18}}
        >
          <img src={Profile} alt="profile" className="absolute inset-0"/>
        </motion.div>

        <div flex-1 flex flex-col justify-center text-center md:text-left>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
            Abhinav Kumar
          </h2>

        <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
          Full Stack Developer | Competitive Programmer
        </p>
        <p className="mt-4 text-gray-300 heading-relaxed text-base sm:lg max-w-2xl md:max-w-3xl">
            B.Tech Computer Science student with strong problem-solving skills in Data Structures & Algorithms and Competitive Programming. Experienced in MERN stack development, building scalable, high-performance web applications using Java, React, Next.js, TypeScript, Tailwind CSS, and RESTful APIs with a focus on clean architecture, intuitive UI/UX, and efficient backend systems.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
          {stats.map((item, i)=>(
            <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              transition={{delay: 0.05*i ,duration:0.6}}
              viewport={{once:true, amount:0.3}}
            >
              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="text-base font-semibold">{item.value}</div>
            </motion.div>
          ))}
        </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a href="#project" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-400 transition">View Project</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white px-5 py-3 hover:bg-white/20 transition">Get in Touch</a>
          </div>

        </div>

      </motion.div>
      <motion.div className="text-center md:text-left"
        nitial={{opacity:0, x:-30}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount:0.4}}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">About Me</h3>
        <p>I enjoy solving problems that challenge my thinking and building products that people genuinely enjoy using. Whether it's optimizing an algorithm or crafting a smooth user interface, I believe great software comes from attention to both logic and user experience. Every project is an opportunity to learn, improve, and create something meaningful.</p>
      </motion.div>
      </div>

    </section>
  )
}