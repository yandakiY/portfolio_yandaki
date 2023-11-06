import React, { useEffect } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

type Props = {
    project: Project
}

gsap.registerPlugin(ScrollTrigger);

export default function CardProject({project}: Props ) {


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


  useEffect(() => {
    // Utilisez une séquence pour définir l'ordre d'apparition
    gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        // start: 'top 50%',  // Déclenchement à 80% de la hauteur de l'élément
        // end: 'top 20%',
        toggleActions: 'play none none none', // L'animation se joue lors du défilement vers le bas
      },
    }).add(slideCard);
  } , [])


  return (
    // <div className='border border-slate-300 rounded p-2 flex flex-col items-baseline'>

    <div ref={cardRef} className='border border-slate-300 rounded p-2 max-h-full'>
      {/* CardProject */}

      {/* Image  */}
      <div>
        <img src={project.image} alt="" className='w-full h-full md:w-[200] md:h-[380px]'/>
      </div>
      {/* Infos (title , description , link) */}
      <div className='flex flex-col items-stretch'>
        {/* title  */}
        <div className='flex justify-center mb-2'>
          <h3 className='font-bold text-2xl'>{project.titleProject}</h3>
        </div>
        {/* description */}
        <div className='text-justify text-sm sm:text-base' title={project.description}>
          {project.description.substring(0,185)} {"..."}
        </div>
        {/* Techs stacks */}
        <div className='flex flex-row justify-center gap-4 mt-2'>
          {project.techs_stack.map(tech => 
            <div key={tech.name} className='cursor-pointer px-4 border border-slate-900 bg-slate-900 rounded text-white font-bold text-sm md:text-base'>
              {tech.name}
            </div>
          )}
        </div>
        {/* link to website */}
        <div className='mt-3'>
          <a href={project.link} target='_blank' className='flex justify-center border rounded py-2 px-6 bg-slate-900 text-white font-bold'>View website</a>
        </div>
      </div>
    </div>
  )
}
