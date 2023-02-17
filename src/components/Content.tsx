import { motion } from "framer-motion";
import { useState } from "react";
import { DiReact } from "react-icons/di";
import { SiFramer } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";


function Content (){
    
    const [isOpen, setIsOpen] = useState (false);

    const [isOpen2, setIsOpen2] = useState (false);

    const [isOpen3, setIsOpen3] = useState (false);

    const [isOpen4, setIsOpen4] = useState (false);


    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleClick2 = () => {
        setIsOpen2(!isOpen2);
    };
    const handleClick3 = () => {
        setIsOpen3(!isOpen3);
    };
    const handleClick4 = () => {
        setIsOpen4(!isOpen4);
    };

    return(
        


        <motion.div className="grid grid-cols-2 gap-4 place-items-center w-screen h-screen lg:grid-cols-1"

         initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
            <motion.div animate={{height: isOpen ? 200 : 90, width: isOpen ? 400 : 200}} onClick={handleClick} className="bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[25%] h-[30%] mr-[-35%] lg:mr-[2%] lg:mt-[2%] cursor-pointer">
             <h1 className="flex"><DiReact className="h-8 w-8" />React</h1>
                 {isOpen && <motion.p 
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                        >
                         Habilidades com React! a biblioteca de JavaScript para criação de interfaces de forma mais prática e moderna, este site foi feito com o próprio React
                        </motion.p> 
                        }
            </motion.div>

<<<<<<< HEAD
            <motion.div animate={{height: isOpen2 ? 200 : 90, width: isOpen2 ? 500 : 400}} onClick={handleClick2} className="bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[25%] h-[30%] ml-[-25%] lg:mb-[%] lg:ml-[3%] cursor-pointer">
=======
            <motion.div animate={{height: isOpen2 ? 200 : 90, width: isOpen2 ? 500 : 400}} onClick={handleClick2} className="bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[25%] h-[30%] ml-[-25%] lg:mb-[20%] cursor-pointer">
>>>>>>> 648fea2bba8d46b4ec78229120e20ab16f75f2da
            <h1 className="flex"><SiFramer className="h-6 w-6"/>Framer Motion</h1>
                {isOpen2 && <motion.p className='p-1'
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                        >
<<<<<<< HEAD
                         As animações deste site foram feitas com a ajuda do Framer motion, uma biblioteca completamente nova para interações modernas e animações mais robustas com uma semântica simples!
=======
                         As animações deste site foram feitas com a ajuda do Framer motion, uma biblioteca completamente nova para interações desde moderna a animações mais robustas com uma semântica simples!
>>>>>>> 648fea2bba8d46b4ec78229120e20ab16f75f2da
                        </motion.p> }
            </motion.div>

            <motion.div animate={{height: isOpen3 ? 200 : 90, width: isOpen3 ? 500 : 400}} onClick={handleClick3} className="bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[25%] h-[30%] mt-[-35%] mr-[-35%] lg:ml-[-15%] lg:mt-[1%] lg:ml-[-30%] cursor-pointer">
            <h1 className="flex"><AiFillHtml5 className="h-6 w-6"/>HTML5 e CSS3 <DiCss3 className="h-6 w-6"/></h1>
                {isOpen3 && <motion.p className='p-1'
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                >
                Dominío total de HTML5 e CSS3, a base de construção de sites e estilização do mesmo. </motion.p> }
            </motion.div>
            
            <motion.div animate={{height: isOpen4 ? 200 : 90, width: isOpen4 ? 400 : 200}} onClick={handleClick4}className="bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[75%] h-[30%] mt-[-35%] ml-[-25%] lg:ml-[-2%] lg:mt-[1%] cursor-pointer">
            <h1 className="flex"><DiJavascript1 className="h-6 w-6"/>JavaScript</h1>
               {isOpen4 && <motion.p className='p-1'
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                        >
                        Uma linguagem leve, interpretada e baseada em objetos, usando muito a lógica de programação e orientado a objeto. </motion.p> }
            </motion.div>
        </motion.div>
    );
}
export default Content;