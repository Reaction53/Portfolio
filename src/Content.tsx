import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { DiReact } from "react-icons/di";


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
        


        <motion.div className="grid grid-cols-2 gap-4 place-items-center h-screen"

         initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
            <motion.div animate={{height: isOpen ? 200 : 90, width: isOpen ? 400 : 200}} onClick={handleClick} className="bg-indigo-400 rounded shadow-lg shadow-black w-[25%] h-[30%] mr-[-40%] ">
             <h1 className="flex"><DiReact className="h-8 w-8" />React</h1>
                 {isOpen && <motion.p 
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                    
                        >
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Impedit, animi molestias eaque sit totam corrupti ex facilis obcaecati 
                        earum dolore fuga fugit. Dolore expedita earum velit nobis numquam cumque itaque!
                        </motion.p> 
                        }
            </motion.div>

            <motion.div animate={{height: isOpen2 ? 200 : 90, width: isOpen2 ? 500 : 400}} onClick={handleClick2} className="bg-white rounded shadow-lg shadow-black w-[25%] h-[30%] ml-[-30%]">
            <h1>Tittle</h1>
                {isOpen2 && <motion.p 
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                        >
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. </motion.p> }
            </motion.div>

            <motion.div animate={{height: isOpen3 ? 200 : 90, width: isOpen3 ? 500 : 400}} onClick={handleClick3} className="bg-white rounded shadow-lg shadow-black w-[25%] h-[30%] mt-[-40%] mr-[-40%]">
            <h1>Tittle</h1>
                {isOpen3 && <motion.p 
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. </motion.p> }
            </motion.div>
            
            <motion.div animate={{height: isOpen4 ? 200 : 90, width: isOpen4 ? 400 : 200}} onClick={handleClick4}className="bg-white rounded shadow-lg shadow-black w-[75%] h-[30%] mt-[-40%] ml-[-30%]">
            <h1>Tittle</h1>
               {isOpen4 && <motion.p
                        transition={{ delay: 0.3, type: "spring"}}
                        initial={{ opacity: 0, top: "6rem" }}
                        animate={{ opacity: 1, top: "3rem" }}
                        >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. </motion.p> }
            </motion.div>
        </motion.div>
    );
}
export default Content;