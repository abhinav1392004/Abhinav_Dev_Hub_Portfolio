import { useState } from "react"
import OverlayMenu from "./OverlayMenu"
import { translateAxis } from "framer-motion"
import Logo from "../assets/portfolioLogo.png"
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return(
    <>
    <nav className={`fixed top-0 left-0 w-full flex item-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
    <div>
      <img src={Logo} alt="Logo" className="w-14, h-14 rounded-[22px]"/>
    </div>
    <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
      <button onClick={()=>setMenuOpen(true)}
          className="text-white text-3xl focus:outline-none"
        >
          <HiMenuAlt2 />
      </button>
    </div>
    <div className="hidden lg:block">
      <a href="#contact" className="bg-gradient-to-r from-pink-500 to blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300">Reach-Out</a>
    </div>
    </nav>
    <OverlayMenu/>
    </>
  )
}