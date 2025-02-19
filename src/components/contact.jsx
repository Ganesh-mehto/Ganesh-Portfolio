import React from 'react'
import { CONTACT } from '../constant'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <div className='bordred-b border-neutral-500 pb-20' id='contact'>
      <motion.h1 whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}} 
            transition={{duration:1.5}} className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
      <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}} 
            transition={{duration:1.5}}  className='text-center font-medium text-lg'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href="#" className='borderd-b'>{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Contact
