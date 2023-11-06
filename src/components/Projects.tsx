import React, { useEffect } from 'react'
import gsap from 'gsap'
import CardProject from './CardProject'
import { useRef } from 'react'
import wiki from './img/wiki.png'
import rando from './img/rando.png'

export default function Projects() {

  var projects: Project[] = [
    {
      id: 1,
      titleProject: "Random Quote",
      image: rando ,
      description:'"Random Quote" is a simple application that randomly displays inspirational, amusing or informative quotes each time a user loads or refreshes the page. The app is designed to provide a little inspiration or entertainment for the user, or even to share via tweets or screenshots of meaningful messages.' ,
      link: "https://random-quote-by-yandaki.vercel.app/",
      techs_stack: [
        {
          id_tech: 1,
          name:'React',
        },
        {
          id_tech: 2,
          name:'Tailwind CSS',
        },
      ],
    },
    {
      id: 2,
      titleProject: "Wiki Request",
      image: wiki,
      description: 'The "Wiki Request" application is a web application that allows users to search for information on Wikipedia by entering a specific keyword. Once the user submits a query, the application queries the Wikipedia API to obtain a list of relevant results.',
      link: "https://wiki-request.vercel.app/",
      techs_stack: [
        {
          id_tech: 1,
          name:'Next JS',
        },
        {
          id_tech: 2,
          name:'TypeScript',
        },
        {
          id_tech: 1,
          name:'Tailwind CSS',
        },
      ],
    },
    // {
    //   id: 3,
    //   titleProject: "Title project",
    //   image:"",
    //   description: "A passionate Software Engineer specializing in web development with expertise in React and Python (Django). My goal is to create powerful, intuitive and elegant web applications. Thanks to my solid academic training and my experience in the development of innovative projects, I am always on the lookout for the latest technologies to solve complex problems in an efficient way.",
    //   link: "",
    //   techs_stack: [
    //     {
    //       id_tech: 1,
    //       name:'',
    //     },
    //     {
    //       id_tech: 1,
    //       name:'',
    //     },
    //     {
    //       id_tech: 1,
    //       name:'',
    //     },
    //   ],
    // },
  ]

  const cardRef = useRef(null)

  
  const slideCard = () => {
    gsap.fromTo(cardRef.current , 
      {
        opacity:0,
        x:-200
      },
      {
        opacity:1,
        x:0,
        duration: 1.5,
        delay: 1.5,
        scrollTrigger:{
          trigger:cardRef.current,
        }
      }
    )
  }

  
  const displayTitleProject = (e: string) =>{
    gsap.fromTo(e , 
      {
        opacity:0,
        x:-200
      },
      {
        opacity:1,
        x:0,
        duration: 2.5,
        delay: 0.5,
        scrollTrigger:{
          trigger:e,
        }
      }
    )
  }

  useEffect(() => {
    displayTitleProject("#titleProject")
    
  } , [])


  return (
    <div className='flex flex-col px-4 md:px-8'>
      <div id="titleProject" className="text-2xl sm:text-4xl font-bold flex flex-row justify-center mt-10">
        Projects :
      </div>

      {/* Projects */}
      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {projects.map((p) => 
          <div key={p.id} ref={cardRef}>
            <CardProject project={p} key={p.id} />
          </div>
        )}
         {/* test Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia ad incidunt deleniti quaerat cum repudiandae aliquam. Esse consequuntur, alias, impedit tenetur velit corrupti molestiae accusantium officiis sed culpa doloremque. */}
      </div>
    </div>
  )
}
