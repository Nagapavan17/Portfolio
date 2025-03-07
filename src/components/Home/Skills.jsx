import React from 'react'
import aws from '/images/aws.png'
import css from '/images/css-3.png'
import html from '/images/html-5.png'
import react from '/images/react.jpg'
import javascript from '/images/JavaScript.png'
import python from '/images/python.png'
import nodejs  from '/images/nodejs.png'
import sql  from '/images/sql.png'
import mongo  from '/images/mongo.png'
import tail from '/images/tailwind.png'
import django from '/images/django.png'

const Skills = () => {
    const skills=[{img:html,name:'HTML5'},{img:css,name:'CSS3'},{img:tail,name:''},{img:javascript,name:'Java Script'},{img:react,name:'ReactJS'},{img:python,name:'PYTHON'},{img:django,name:'DJango'},{img:nodejs,name:'nodeJS'},{img:sql,name:'SQL'},{img:mongo,name:'MongoDB'},{img:aws,name:'AWS Cloud'}]
  return (
    <>
      <div className="mx-5 md:mx-10 lg:mx-20 my-10" id='skills'>
        <p className="font-serif font-bold text-xl md:text-3xl text-center text-sky-300 shadow-2xl mb-2">TECH SKILLS</p>
        <div className="border-2 border-sky-400 rounded-lg grid grid-cols-3 lg:grid-cols-6 gap-3 py-4 px-2"> 
            {skills.map((skill,i)=>(
              <div key={i} className="text-center overflow-hidden">
                <img src={skill.img} alt="" className="md:h-20 h-12 inline-block md:m-2 hover:scale-125 transition-all duration-300 " />
                <p className="font-semibold font-mono hidden md:block">{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Skills