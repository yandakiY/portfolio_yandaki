
import '../static/css/Layout.css'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useEffect } from 'react'
import Load from './Load'

gsap.registerPlugin(ScrollTrigger , ScrollToPlugin)

function Layout() {

  const onLoad = () =>{
    // gsap.timeline().fromTo()
    console.log('On load...')
  }

  const slideToTop = (e , delay , duration) => {
    gsap.fromTo(
      e,
      {
        opacity:0,
        y:-200
      },
      {
        opacity:1,
        y:0,
        duration: duration || 1.5,
        delay: delay || 0.5,
        scrollTrigger:{
          trigger:e,
        }
      }
    )
  }
  

  useEffect(() =>{
    slideToTop("#top")
  }, [])
  

  return (
    <div>
        <div id="top">
          <Nav id="nav" />
          <Hero id="hero" />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Layout