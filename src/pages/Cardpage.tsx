import React from 'react'
import Women from '../images/women.png'
import { useMotionValue, useTransform, motion } from 'framer-motion'

const Cardpage = () => {

  const x = useMotionValue (0);
  const y = useMotionValue (0);
  const rotateX = useTransform (y, [-100, 100], [30, -30]);
  const rotateY = useTransform (x, [-100, 100], [-30, 30]);




  return (
    <div className='flex justify-center w-screen h-[74vw] lg:h-[140vw]'>
      <div>
        <motion.h1 
        transition={{ delay: 1}}
        initial={{ opacity: 0, top: "6rem" }}
        animate={{ opacity: 1, top: "3rem" }}
        className='text-center text-gray-300 text-4xl p-10 lg:hidden'> Clique e arraste!</motion.h1>
        </div>
        <div style={{ perspective: 2000}} className='flex items-center ml-[-32%] lg:mt-[25%] lg:ml-[0]'>
          <motion.div
            style={{x, y, rotateX, rotateY, z: 100}}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{cursor: 'grabbing'}}

          className='w-[400px] min-h-[500px] bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 shadow-lg shadow-black rounded-lg px-[40px] py-[25px] cursor-grab relative lg:w-[80%] lg:h-[30%]'>{/*Card*/}
          
            <h1 className='text-5xl mb-6 font-extrabold lg:p-30 lg:text-center lg:text-2xl'>Cards Animados!</h1>{/*Titulo*/}

            <p className='max-w-[300px] mb-6 text-gray-300 lg:p-30'>
              Animações de cards 3D, não muito utilizadas, porém, com uso da criatividade pode se tornar algo realmente confortável de se olhar 
            </p>
            <div className='flex items-center gap-x-[20px]'>{/*Button*/}
              <button className='bg-gradient-to-r from-[#00FFDA] to-[#02CFB1] rounded shadow-lg shadow-black py-[16px] px-[40px] rounded-lg'>
                   <p className='text-[#000]'>Peça já</p>
              </button>
            </div>{/*Button*/}

            <motion.div 
              style={{ x, y, rotateX, rotateY, z: 10000}}

            className='absolute top-[35%] lg:mt-[20%]'>{/*Image*/}
              <img alt='women' src={Women} draggable='false'></img>
            </motion.div>{/*Image*/}

          </motion.div>{/*Card*/}
        </div>
    </div>
  )
}

export default Cardpage
