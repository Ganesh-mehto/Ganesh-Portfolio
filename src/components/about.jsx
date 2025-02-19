import React from 'react'
import ganesh from '../assets/ganesh1.jpg'
import { ABOUT_TEXT } from '../constant'
import {motion} from 'framer-motion'
const About = () => {
    return (
        <div className=' border-b border-b-neutral-500 pb-6 lg:mb-20' id='about'>
            <motion.h1 whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}} 
            transition={{duration:1.5}} className='my-20 text-center text-4xl'>About
                <span className='text-neutral-500'>Me</span>
            </motion.h1>
            <div className=' flex flex-wrap'>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                    <div className=' flex items-center justify-center'>
                        <img src={ganesh} alt=" loading" className=' rounded-3xl w-[300px] h-[300px] object-contain md:w-[500px] md:h-[500px]' />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                className=' w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-center'>
                        <p className='my-2 max-w-xl py-6 font-medium  text-lg'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </div>


    )
}

export default About
