import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from '/images/me.png'
import img1 from '/images/pavan1.jpg'
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 md:flex items-center mt-20 md:mt-1 md:my-5">
      <div className="md:hidden py-5">
        <img src={img1} alt="" className="h-[220px] w-[220px] mx-auto rounded-full border-4  border-sky-300" />
      </div>
      <div className="mr-5 hidden md:block">
        <img src={img} alt="" />
      </div>
      <div className="mt-10 md:mt-16 font-bold">
        <p className="text-4xl lg:text-5xl ">
          Hi, I am
          <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent ml-2">
            Naga Pavan Kancharla.
          </span>
        </p>
        <p className="text-4xl lg:text-5xl mt-5 font-serif">
          I am a{" "}
          <span className="bg-violet-400  bg-clip-text text-transparent">
            <Typewriter
              words={["Full Stack Developer", "MERN Stack Developer", "Web Enthusiast"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className="text-center md:text-lg text-slate-300 mt-5">Passionate Full Stack Developer dedicated to building efficient, innovative, and user-centric web solutions. Let’s collaborate and bring your vision to reality.</p>
        <div className="flex justify-center text-3xl mt-8">
          <a href="https://github.com/Nagapavan17" target="_blank" className="mr-2"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kancharla-naga-pavan-098a78264" target="_blank" className="mr-2 text-blue-900"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
