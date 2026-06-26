import {motion, AnimatePresence} from "framer-motion";
import { GiCrossMark } from "react-icons/gi";

export default function OverlayMenu({isOpen, onClose}){
return(

<AnimatePresence>

  {isOpen && (

    <motion.div className="fixed inset-0 flex items-center justify-center z-50">

      <button onClick={onClose}
      className="absolute top-6 right-6 text-white text-3xl"
      aria-label="Close Menu"
      > 
      <GiCrossMark />


      </button>

      <ul className="space-y-6 text-center">

        {[
          "Home",
          "About",
          "Skills",
          "Project",
          "Experience",
          "Testimonials",
          "Contact",
        ].map((items, index)=>(
          <motion.li key={items}
          initial={{opacity : 0, y:20}}
          animate={{opacity : 1, y:0}}
          transition={{delay:0.3 + index *0.1}}
          >

            <a href={`#${items.toLowerCase()}`}
            onClick={onClose}
            className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300"
            >
              {items}
            </a>

          </motion.li>
        ))
        }
      </ul>

    </motion.div>

  )}

</AnimatePresence>

)
}