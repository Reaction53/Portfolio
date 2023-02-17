import Site from '../images/Site.jpg';
import Hora from '../images/Hora.jpg';
import { motion } from 'framer-motion';

function Bio () {

  return (
    <div className="grid grid-cols-2 w-[100vw] h-[80vw] lg:flex flex-wrap">
      <motion.div
          initial={{opacity:0 , scale: 0}}
          whileInView={{ opacity: 1 , scale: 1}}
          transition={{ease: [0, 0.71, 0.2, 1.01]}}>

        <h1 className="text-center text-gray-300 text-4xl ">Sites Personalizados</h1>
        <p className="text-center text-gray-300 text-xl p-4 ">Sites onde você e discute o Design do seu site! Desde paleta de cores, animações, botões e o quais os conteúdos que você quer que vejam no seu site.</p>   
      </motion.div>
      <motion.div className="grid justify-items-center"
          initial={{opacity:0 , scale: 0}}
          whileInView={{ opacity: 1 , scale: 1}}
          transition={{ease: [0, 0.71, 0.2, 1.01]}}>
        <img alt="Site" src={Site} className="w-[60%] h-[50%] lg:hidden"></img>
      </motion.div>

      <motion.div className="grid justify-items-center"
      initial={{opacity:0 , scale: 0}}
      whileInView={{ opacity: 1 , scale: 1}}
      transition={{ease: [0, 0.71, 0.2, 1.01]}}>
          <img alt="Hora" src={Hora} className="w-[60%] h-[50%] lg:hidden"></img>
        </motion.div>
        <motion.div
        initial={{opacity:0 , scale: 0}}
        whileInView={{ opacity: 1 , scale: 1}}
        transition={{ease: [0, 0.71, 0.2, 1.01]}}>
          <h1 className="text-center text-gray-300 text-4xl ">Horário Flexível</h1>
          <p className="text-center text-gray-300 text-xl p-4">Horários que se encaixam melhor na sua agenda, totalmente flexível, onde podemos discutir nosso horário.</p>   
        </motion.div>
    </div>
  )
}

export default Bio
