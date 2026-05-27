import { MdOutlineNightlight } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const toggle = ()=>{
    setDarkMode(prev =>{
      document.body.classList.toggle("dark" , !prev);
      return !prev
    })
  }
  const hamburgerToggle =()=>{
    setHamburger(prev => !prev);
  }

  return (
    <nav id ="navbar" className= "sticky top-0 z-[100] flex  items-center justify-between px-[3vw] py-[6px] border-b border-[var(--accent)] transition-shadow duration-300">
        <a href="#home" className="text-[2rem] font-extrabold text-[var(--accent)] tracking-[-0.5px] no-underline md:text-[2.35rem]">안잘리</a>

 

<ul className=" items-center gap-5 hidden md:flex">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
        
         <div className="toggle">
           <button onClick={toggle} >
            {darkMode ? <FaRegLightbulb /> : <MdOutlineNightlight/> }
            </button>
            <button className="block md:hidden" onClick={hamburgerToggle}>
              {hamburger ? <RxCross2/> : <FaAlignRight />}
              </button>
         </div>

                {hamburger && (
  <ul className=" bg-gradient-to-b from-[#e5c597] to-[#b18a53] rounded-lg flex flex-col items-center gap-4 py-3 md:hidden absolute top-[100%] right-0 w-[35%] [&_a]:text-black ">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
)} 
    </nav>
  )
}

export default Navbar
