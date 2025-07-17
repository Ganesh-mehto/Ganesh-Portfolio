import React from 'react'
import { RiCss3Fill, RiHtml5Fill, RiReactjsLine, RiTailwindCssFill} from 'react-icons/ri'
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { animate, easeIn, motion } from 'framer-motion';
const Skills = () => {
    const iconVariant=(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })
    return (
        <div className=' border-b border-neutral-500 pb-6 lg:pb-25' id='skills'>
            <motion.h1 whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}} 
            transition={{duration:1.5}} className=' my-20 text-center text-4xl'>Skills</motion.h1>
            <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}  className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                variants={iconVariant(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div  variants={iconVariant(3)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <RiHtml5Fill className='text-7xl text-amber-400' />
                </motion.div>
                <motion.div  variants={iconVariant(5)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <RiCss3Fill className='text-7xl text-cyan-700' />
                </motion.div>
                <motion.div  variants={iconVariant(2)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <TbBrandJavascript className='text-7xl text-green-500' />
                </motion.div>
                <motion.div  variants={iconVariant(6)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <SiTypescript className='text-7xl text-cyan-600' />
                </motion.div>
                <motion.div  variants={iconVariant(4)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <RiTailwindCssFill className='text-7xl text-cyan-400' />
                </motion.div>
                  <motion.div  variants={iconVariant(3.5)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <SiNodedotjs className='text-7xl text-green-700' />
                </motion.div>
                <motion.div  variants={iconVariant(4.5)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <SiExpress className='text-7xl text-gray-700' />
                </motion.div>
                <motion.div  variants={iconVariant(5.5)}
                initial="initial"
                animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
                    <SiMongodb className='text-7xl text-green-600' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills
