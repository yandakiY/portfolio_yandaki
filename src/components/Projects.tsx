import React, { useEffect } from 'react'
import gsap from 'gsap'
import CardProject from './CardProject'
import { useRef } from 'react'

export default function Projects() {

  var projects: Project[] = [
    {
      id: 1,
      titleProject: "Title project",
      image:"",
      description: "A passionate Software Engineer specializing in web development with expertise in React and Python (Django). My goal is to create powerful, intuitive and elegant web applications. Thanks to my solid academic training and my experience in the development of innovative projects, I am always on the lookout for the latest technologies to solve complex problems in an efficient way.",
      link: "",
      techs_stack: [
        {
          id_tech: 1,
          name:'',
        },
        {
          id_tech: 1,
          name:'',
        },
        {
          id_tech: 1,
          name:'',
        },
      ],
    },
    {
      id: 2,
      titleProject: "Title project",
      image:"",
      description: "A passionate Software Engineer specializing in web development with expertise in React and Python (Django). My goal is to create powerful, intuitive and elegant web applications. Thanks to my solid academic training and my experience in the development of innovative projects, I am always on the lookout for the latest technologies to solve complex problems in an efficient way.",
      link: "",
      techs_stack: [
        {
          id_tech: 1,
          name:'',
        },
        {
          id_tech: 1,
          name:'',
        },
        {
          id_tech: 1,
          name:'',
        },
      ],
    },
    {
      id: 3,
      titleProject: "Title project",
      image:"",
      description: "A passionate Software Engineer specializing in web development with expertise in React and Python (Django). My goal is to create powerful, intuitive and elegant web applications. Thanks to my solid academic training and my experience in the development of innovative projects, I am always on the lookout for the latest technologies to solve complex problems in an efficient way.",
      link: "",
      techs_stack: [
        {
          id_tech: 1,
          name:'',
        },
        {
          id_tech: 1,
          name:'',
        },
        {
          id_tech: 1,
          name:'',
        },
      ],
    },
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

    // slideCard()
    
  } , [])

  
  // useEffect(() => {
  //   // Utilisez une séquence pour définir l'ordre d'apparition
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: cardRef.current,
  //       toggleActions: 'play none none none', // L'animation se joue lors du défilement vers le bas
  //     },
  //   }).add(slideCard);
  // })

  return (
    <div className='flex flex-col px-4 md:px-8'>
      <div id="titleProject" className="text-2xl sm:text-4xl font-bold flex flex-row justify-center">
        My projects :
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
