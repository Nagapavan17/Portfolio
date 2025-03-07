import React from 'react'
import { motion } from 'framer-motion'
import nava1 from '/images/nava1.png'
import nava2 from '/images/nava2.png'
import nava3 from '/images/nava3.png'
import chakra1 from '/images/chakra1.png'
import chakra2 from '/images/chakra2.png'
import chakra3 from '/images/chakra3.png'
import riya1 from '/images/riya1.png'
import riya2 from '/images/riya2.png'
import riya3 from '/images/riya3.png'

const Projects = () => {
    const details = [
        { images: [nava1, nava2, nava3], name: 'NAVAKARANA TECHNOLOGIES', link: 'https://www.navakaranatech.com/' },
        { images: [chakra1, chakra2, chakra3], name: 'CHAKRA FINANCIAL SERVICES', link: 'https://www.chakrafin.com/#' },
        { images: [riya1, riya2, riya3], name: 'RIYA REDDY SOFTSOL PVT LTD', link: 'https://rrsoftsol-it.netlify.app/' }
    ]

    const motionVariants = [
        { initial: { opacity: 0, translateX: -150 }, whileInView: { opacity: 1, translateX: 0 } },
        { initial: { opacity: 0, translateY: -150 }, whileInView: { opacity: 1, translateY: 0 } },
        { initial: { opacity: 0, translateX:150 }, whileInView: { opacity: 1, translateX: 0 } }
    ];

    return (
        <div className="mx-5 md:mx-10 lg:mx-20 my-16" id='projects'>
            <p className="font-serif font-bold text-xl md:text-3xl text-center text-sky-300 shadow-2xl mb-5">RECENT PROJECTS</p>
            <div className="md:grid grid-cols-3 gap-4 overflow-hidden p-1">
                {details.map((item, i) => (
                    <motion.div key={i}
                        initial={motionVariants[i % motionVariants.length].initial}
                        whileInView={motionVariants[i % motionVariants.length].whileInView}
                        transition={{ duration: 1 }}
                        className="md:p-2 border-2 border-sky-400 rounded-lg overflow-hidden mt-5 shadow-sm shadow-amber-300">
                        <div className="grid grid-cols-2 grid-rows-2 overflow-hidden">
                            {item.images.map((img, j) => (
                                <div key={j} className={`${j === 0 ? 'col-span-2' : ''} overflow-hidden`}>
                                    <img src={img} alt="" className='w-full h-36 hover:scale-110 transition-all duration-300' />
                                </div>
                            ))}
                        </div>
                        <div className="p-3 text-center">
                            <p className="font-semibold font-mono text-white/75 mb-3">Client : {item.name}</p>
                            <a href={item.link} target='_blank' className="px-4 py-2 font-semibold font-serif bg-gradient-to-r rounded-lg from-amber-300 to-yellow-700">Website</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects
