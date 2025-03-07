import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import mail from '/images/mail.png'

const Contact = () => {
  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-20 my-20" id='contact'>
        <div className="text-center">
            <p className="text-xl md:text-4xl font-bold my-4">Get in Touch</p>
            <p className="md:text-xl">Let’s connect! If you’re looking for a developer, have any questions, or know of any opportunities, I’d love to hear from you.</p>
            <div className="flex justify-center mt-5 items-center">
              <img src={mail} alt="gmail" className="h-10" />
              <a href="mailto:knagapavan17@gmail.com" target='_blank' className="md:text-xl  hover:text-blue-600">knagapavan17@gmail.com</a>
            </div>
            <div className="flex justify-center text-3xl mt-8">
                      <a href="https://github.com/Nagapavan17" target="_blank" className="mr-2"><FaGithub /></a>
                      <a href="https://www.linkedin.com/in/kancharla-naga-pavan-098a78264" target="_blank" className="mr-2 text-blue-900"><FaLinkedin /></a>
                      <a href="https://wa.me/919391792877" target='_blank' className="text-green-500 ml-2"><IoLogoWhatsapp /></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact