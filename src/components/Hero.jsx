// import React from 'react'
import '../static/css/Hero.css'

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mx-4 my-4 gap-2.5">
        <div className="flex flex-col justify-center items-center font-bold mt-12 text-4xl sm:text-6xl gap-2.5">
          <p className="job" id="">Software Engineer. </p>
          <p className='mt-28 text-3xl sm:text-5xl' id="">Hello world, I'm Yandaki</p>
        </div>
        <div className='text-lg sm:text-2xl flex flex-column items-center text-center' id="description">
          <p>
            A passionate Software Engineer specializing in web development with expertise in <span className='font-bold underline'>React</span> and <span className='font-bold underline'>Python (Django)</span>. 
            My goal is to create powerful, intuitive and elegant web applications. 
            Thanks to my solid academic training and my experience in the development of innovative projects, I am always on the lookout for the latest technologies to solve complex problems in an efficient way. 
            {/* Explore my portfolio to discover my exciting projects and my dedication to creating high quality software solutions. 
            Together, we can push the limits of the possible! */}
          </p>
        </div>
        <div id="">
          <ul className="flex flex-row justify-center gap-10 mt-14">
            <li className='list-none'>
              <a className='flex flex-row items-center gap-1 sm:gap-3 text-white bg-black hover:bg-gray-500 font-bold p-1 sm:p-3 rounded transition duration-500 ease-out hover:ease-in' target={'_blank'} href="https://github.com/yandakiY" rel="noreferrer">
                Github
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a className='flex flex-row items-center gap-1 sm:gap-3 text-white bg-black hover:bg-gray-500 font-bold p-1 sm:p-3 rounded transition duration-500 ease-out hover:ease-in' target={'_blank'} href={"https://www.linkedin.com/in/yves-michel-boa-431730191/"} rel="noreferrer">
                Linkedin
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hero