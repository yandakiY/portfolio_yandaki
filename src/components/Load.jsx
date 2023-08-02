import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger , ScrollToPlugin)

function Load() {

    const welcome = useRef(null)
    const titleRef = useRef(null)

    const removeWelcome = () => {
        gsap.to(window , {
            duration:1,
            visibility:'hidden'
        })
    }

    const moveTitle = () =>{

        const title = titleRef.current

        const text = "Hello World !!"
        const characters = text.split('')

        title.innerText = ''

        characters.forEach((chars , index) =>{
            const charElement = document.createElement('span');
            charElement.innerText = chars;
            charElement.style.visibility = 'hidden';
            title.appendChild(charElement);


            gsap.to(charElement, { duration: 1.5, visibility: 'visible', delay: index * 0.1 });
        })

        // gsap.to(title , {visibility:'hidden' , duration:1.5})
        gsap.to(title, { opacity: 0, height: 0, duration: 1, delay: 3, onComplete: () => {
            // Une fois l'animation terminée, masquer l'élément en le définissant sur display: none
            title.style.display = 'none';
        }});
    }

    useEffect(() =>{
        moveTitle()
    } , [])

  return (
    <div ref={welcome} className='h-screen text-7xl flex justify-center items-center'>
        <h1 ref={titleRef} className='title'></h1>
    </div>
  )
}

export default Load