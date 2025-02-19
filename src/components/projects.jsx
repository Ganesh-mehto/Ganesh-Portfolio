import React from 'react'
import { PROJECTS } from '../constant/index'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutral-500 pb-4' id='projects'>
      <motion.h1 whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}} 
            transition={{duration:1.5}} className=' my-20 text-center text-4xl'>Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center lg:mx-2'>
            <motion.div   whileInView={{opacity:1,x:0}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}} className='w-full lg:w-1/4'>
              <img src={project.image} alt={project.title}
                width={250} height={250}
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div   whileInView={{opacity:1,x:0}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}} className='w-full max-w-xl lg:3/4'>
              <h6 className='mb-2 font-bold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400 text-lg font-medium'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span className='mb-2 mx-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400' key={index}>{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
