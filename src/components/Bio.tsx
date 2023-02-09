import Site from '../images/Site.jpg';
import Hora from '../images/Hora.jpg';
import { motion } from 'framer-motion';

function Bio () {

  return (
    <div className="grid grid-cols-2 w-[100vw] h-[60vw]">
      <motion.div
          initial={{opacity:0 , scale: 0}}
          whileInView={{ opacity: 1 , scale: 1}}
          transition={{ease: [0, 0.71, 0.2, 1.01]}}>

        <h1 className="text-center text-gray-300 text-4xl ">Sites Personalizados</h1>
        <p className="text-center text-gray-300 text-xl p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum minima ea aut unde, nulla doloremque suscipit quibusdam voluptatum deleniti.</p>   
      </motion.div>
      <motion.div className="grid justify-items-center"
          initial={{opacity:0 , scale: 0}}
          whileInView={{ opacity: 1 , scale: 1}}
          transition={{ease: [0, 0.71, 0.2, 1.01]}}>
        <img alt="Site" src={Site} className="w-[80%] h-[80%]"></img>
      </motion.div>

      <motion.div className="grid justify-items-center"
      initial={{opacity:0 , scale: 0}}
      whileInView={{ opacity: 1 , scale: 1}}
      transition={{ease: [0, 0.71, 0.2, 1.01]}}>
          <img alt="Hora" src={Hora} className="w-[80%] h-[80%]"></img>
        </motion.div>
        <motion.div
        initial={{opacity:0 , scale: 0}}
        whileInView={{ opacity: 1 , scale: 1}}
        transition={{ease: [0, 0.71, 0.2, 1.01]}}>
          <h1 className="text-center text-gray-300 text-4xl ">Horário Flexível</h1>
          <p className="text-center text-gray-300 text-xl p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum minima ea aut unde, nulla doloremque suscipit quibusdam voluptatum deleniti.</p>   
        </motion.div>
    </div>
  )
}

export default Bio
