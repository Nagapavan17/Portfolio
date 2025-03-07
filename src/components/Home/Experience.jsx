import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
    const details=[
        {company:'ReachAll Techlabs pvt. Ltd., Hyderabad',duration:'Oct 2024 – Present',role:'Associate Software Developer',responsibilities:['Developed HTML, CSS, and JavaScript components ensuring a responsive design for various devices.','Collaborated with designers and back-end developers to create cohesive, user-friendly experiences.','Utilized React hooks, and Axios for efficient state management and API integration.','Implemented robust client-side validation using React for improved form accuracy.'],tech:'React JS, Redux, Axios, Tailwind CSS, Framer Motion, NodeJS, HTML, REST API’s, Django Framework'},
        {company:'Henotic Technology Pvt Ltd., Hyderabad',duration:'May 2023 – Aug 2023',role:'Python Full Stack Intern',responsibilities:['As a team of 4 members and my role was team lead, mainly for Back-end development.','Trained on how to working with Django to Build scalable Web application.','Used visual studio for creating a project of codes ,templates and static files for integration.','Developed full-stack web application which processed, analyzed, and rendered data visually.'],tech:'HTML, CSS, JavaScript, MySQL, Git-hub and Django framework'}
    ]
  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-20 my-16" id='experience'>
        <p className="font-serif font-bold text-xl md:text-3xl text-center text-sky-300 shadow-2xl ">EXPERIENCE</p>
        <div className="md:grid grid-cols-2 gap-3">
            {details.map((item,i)=>(
                <motion.div
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.9}}
                key={i} className="border-2 border-sky-400 rounded-lg p-3 mt-5">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold md:text-lg">{item.company}</p>
                        <p className="text-xs md:text-base">{item.duration}</p>
                    </div>
                    <p className="ml-2 text-gray-400 flex items-center italic"><span className='font-bold text-white mr-2 text-xl'>-</span>{item.role}</p>
                    <div className="mt-2">
                        <p className="font-semibold text-white/85 text-lg mb-2">Roles and Responsibilities :</p>
                        <ul className="list-disc md:list-inside mx-2">
                            {item.responsibilities.map((role,j)=>(
                                <li key={j} className="text-sm text-white/75 ">{role}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold text-white/85 text-lg mb-1 ">Skills :</p>
                        <p className="ml-2 text-white/80 text-sm">{item.tech}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Experience