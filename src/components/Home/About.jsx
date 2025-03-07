import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-20 my-10" id='about'>
        <div className="md:w-2/3 mx-auto border-2 border-sky-400 rounded-xl p-2 text-sm md:text-base">
            <h2 className="md:text-4xl font-bold ">About Me 👋</h2>
            <motion.p
            initial={{opacity:0,translateY:50}}
            whileInView={{opacity:1,translateY:0}}
            transition={{duration:0.6}}
            className="font-serif tracking-wide mt-4 ml-2"><span className="text-sky-300">Hi, I’m Naga Pavan</span> a Full Stack developer with a passion for transforming bold ideas into sleek, high-performance web applications. Whether it’s creating seamless user experiences or crafting clean, efficient code, I bring creativity and precision to every project I tackle. 🚀</motion.p>
            <motion.p
             initial={{opacity:0,translateY:50}}
             whileInView={{opacity:1,translateY:0}}
             transition={{duration:0.7}}
            className="font-serif tracking-wide mt-4 ml-2">I'm currently working as an Associate Software Developer at <span className="text-sky-300">ReachAll Techlabs Pvt Ltd. ✍️</span></motion.p>
            <motion.p
             initial={{opacity:0,translateY:50}}
             whileInView={{opacity:1,translateY:0}}
             transition={{duration:0.8}}
            className="font-serif tracking-wide mt-4 ml-2">Armed with skills in <span className="text-sky-300">Python, Java, HTML, CSS, Bootstrap, Tailwind, JavaScript, React, nodeJS and Django </span>, I create responsive user experiences that don’t just look good—they feel good. ✨
            </motion.p>
            <motion.p
             initial={{opacity:0,translateY:50}}
             whileInView={{opacity:1,translateY:0}}
             transition={{duration:0.9}}
            className="font-serif tracking-wide mt-4 ml-2">Before diving into the world of web development, I honed my analytical skills at <span className="text-sky-300">Henotic Technology</span>, where I developed a keen focus on quality and efficiency. Now, I blend that precision with a passion for clean code and creative design, bringing every project to life with a balance of logic and artistry. 🎨</motion.p>
            <motion.p
             initial={{opacity:0,translateY:50}}
             whileInView={{opacity:1,translateY:0}}
             transition={{duration:1}}
            className="font-serif tracking-wide mt-4 ml-2">With a solid background in business analysis and a love for tackling complex challenges, I approach development with both a strategic mindset and a creative flair. I'm always eager to embrace the next challenge—whether it's building innovative digital solutions or refining user interactions that leave a lasting impact. 💡</motion.p>
            <motion.p
             initial={{opacity:0,translateY:50}}
             whileInView={{opacity:1,translateY:0}}
             transition={{duration:1.1}}
            className="font-serif tracking-wide mt-4 ml-2">Let’s collaborate and create something extraordinary together! 🌟</motion.p>
        </div>
      </div>
    </>
  )
}

export default About