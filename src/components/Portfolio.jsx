import React from 'react';
import project1 from "../assets/project2.png"
import project2 from "../assets/chess.png"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/sharemarket2.png"
import project6 from "../assets/project1.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: project4,
    title: "Quiz App",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "https://play.google.com/store/apps/details?id=com.bibqzj",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Dynamo Chess",
    description: "UI for frontend development using React.",
    links: {
      site: "https://dynamochess.in/",
      github: "#",
    },
  },
  {
    img: project1,
    title: "kaeinyonne",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "https://www.kaeinyonne.com/",
      github: "#",
    },
  },
  // {
  //   img: project5,
  //   title: "Share Market",
  //   description: "An Share-market platform with various features.",
  //   links: {
  //     site: "#",
  //     github: "#",
  //   },
  // },

  // {
  //   img: project6,
  //   title: "Restorant Desktop web app",
  //   description: "Restorant mangament system .",
  //   links: {
  //     site: "#",
  //     github: "#",
  //   },
  // },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-44 object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a href={project.links.site}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                {index===0?'Download Apk':'View Site'}
                </a>
                {/* <a href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                  <AiOutlineGithub />
                </a> */}

              </div>

            </div>

          </div>
        </Reveal>
      ))}

    </div>
  )
}

export default Portfolio