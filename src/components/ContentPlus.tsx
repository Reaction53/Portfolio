import React from 'react'
import Brain from '../images/Brain.png'

const ContentPlus = () => {
  return (
    <div className=''>
      <img alt='Brain' src={Brain} className='w-[40%] h-[40%] ml-[29%]'></img>
      <div className='w-screen h-[25rem]'>
        <h1 className='text-center text-gray-300 text-4xl'>Sites Modernos e Inteligentes</h1>
        <p className='text-center text-gray-300 text-xl p-10'>sites totalmente responsivo com design modernos com animações de sua preferência!</p>

      </div>
      <div className="flex flex-nowrap w-screen justify-center h-[32rem] lg:grid grid-cols-1 lg:justify-items-center">
            <div className='bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[30%] h-[30%] ml-[1%] text-center lg:h-[70%] lg:w-[40%]'>
                <h1 className='mt-[2%]'>Tittle</h1>
                <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error.</p>
            </div>
            <div className='bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[30%] h-[30%] mx-[10%] text-center lg:h-[70%] lg:w-[40%]'>
                <h1 className='mt-[2%]'>Tittle</h1>
                <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error.</p>
            </div>
            <div className='bg-gradient-to-r from-[#0D1212] to-[#060808] text-gray-300 rounded shadow-lg shadow-black w-[30%] h-[30%] mr-[1%] text-center lg:h-[70%] lg:w-[40%]'>
                <h1 className='mt-[2%]'>Tittle</h1>
                <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error.</p>
            </div>
        </div>
    </div>
  )
}

export default ContentPlus
