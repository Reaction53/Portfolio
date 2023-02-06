import { motion } from 'framer-motion';
import Shrek from './images/Shrek.png';


function Rounded() {
    return (
      <div>
        <motion.div className='w-36 h-36 bg-indigo-600 mt-20 ml-20 rounded-full'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <img src={Shrek} alt='Shrek' className='w-36 h-36 rounded-full'></img>
        </motion.div>
      </div>
       );
    }

export default Rounded;