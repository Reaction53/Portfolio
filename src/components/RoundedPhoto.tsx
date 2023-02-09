import { motion } from 'framer-motion';
import Perfil from '../images/Perfil.svg';


function Rounded() {
    return (
      <div className=''>
        <motion.div className='w-36 h-36 bg-indigo-600 mt-20 ml-20 rounded-full'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <img src={Perfil} alt='Perfil' className='bg-white w-36 h-36 rounded-full'></img>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]}}  className='text-center text-gray-300 text-4xl mt-[4%]'>Habilidades</motion.h1>
      </div>
       );
    }

export default Rounded;