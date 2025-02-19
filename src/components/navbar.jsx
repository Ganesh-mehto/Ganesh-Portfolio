import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
const navbarItems = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },

]

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  const togglMenu = () => {
    setToggle(!toggle)
  }
  return (

    <nav className=' bg-black border-b-neutral-500 mb-20 flex items-center justify-between py-6 ' >
      
      <h1 className=' text-5xl md:font-bold'>GANESH</h1>
      <div className='hidden md:flex justify-center items-center gap-7 text-2xl'>
        {navbarItems.map((link) => (
          <a
            
            key={link.href}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className=' md:hidden'>
        <IoReorderThree className="text relative" size={28} onClick={togglMenu} /> {toggle ? <div className='absolute right-0 top-[10.5%] w-full gap-2.5 mt-2 bg-[#230f36] border-[1px] p-5 flex flex-col '>
          {navbarItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div> : null}

      </div>



    </nav>



  )
}

export default Nav
