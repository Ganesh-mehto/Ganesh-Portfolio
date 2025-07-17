import React from 'react'
import ganesh from '../assets/ganesh.jpg'
import { HOME_CONTENT } from '../constant'
import { motion } from 'framer-motion'
const Home = () => {
  const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5,delay:delay}
    }
  })
  return (
    <div className=' border-b border-neutral-500 pb-6 lg:mb-20  '>
      <div className=' flex flex-wrap '>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start lg:px-15'>
            < motion.h1 

            variants={container(0)}
            initial='hidden'
            animate='visible'

            className='pb-16 text-6xl font-thin lg:mt-16 lg:text-8xl lg:font-thin'>Ganesh</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial='hidden'
            animate='visible' className='gradient bg-clip-text tracking-tight text-transparent text-4xl'>
              Web Developer
            </motion.span>
            <motion.p  
             variants={container(1)}
            initial='hidden'
            animate='visible' className=' my-2 max-w-xl font-medium text-lg py-6'>
              {HOME_CONTENT}
            </motion.p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <motion.img 
              initial={{x:100,opacity:0}}
              animate={{x:0,opacity:1}} 
              transition={{duration:1,delay:1.2}}
              src={ganesh} alt=" loading"  className=' rounded-full w-[300px] h-[300px] object-cover md:w-[500px] md:h-[500px]'/>
            </div>
          </div>

        </div>
      </div>
    

  )
}

export default Home
