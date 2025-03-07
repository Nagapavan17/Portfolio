import React from 'react'
import logo from '/images/logo.png'
import { FaDownload } from "react-icons/fa6";

const NavBar = () => {
  return (
    <>
        <div className="backdrop-blur-md bg-white/15 fixed top-0 right-0 left-0 ">
            <div className="flex items-center justify-between lg:pr-20 pr-7">
                <img src={logo} alt="Logo" className='h-16' />
                <div className="hidden md:block">
                    <ul className="flex text-slate-200 font-bold text-lg space-x-10">
                        <a href="#about" className=""><li>About</li></a>
                        <a href="#skills" className=""><li>Skills</li></a>
                        <a href="#experience" className=""><li>Experience</li></a>
                        <a href="#projects" className=""><li>Projects</li></a>
                        <a href="#contact" className=""><li>Contact</li></a>
                    </ul>
                </div>
                <div className="">
                    <a href="https://drive.google.com/file/d/1faQBzGrvYKDQCv7YkV62NfQH0EiZ5UBD/view?usp=sharing" target="_blank" className="text-black font-bold text-lg flex items-center  blank hover:bg-gradient-to-r from-pink-300 to-violet-400 md:px-5 md:py-2 py-1 px-3 bg-sky-300 rounded-full"><span className="mr-2"><FaDownload /></span>Resume</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar