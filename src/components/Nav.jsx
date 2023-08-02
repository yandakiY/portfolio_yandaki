// import React from 'react'
// import '../static/css/Nav.css'

function Nav() {
  return (
    <nav 
      className='flex flex-row justify-between items-baseline border-b mx-4 my-2'
      // style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}
    >
        <span className='text-2xl sm:text-5xl mb-4'>Yandaki.dev</span>
        <ul className="mb-4 flex flex-row">
            <li className='list-none p-2.5 border border-black rounded-lg text-black flex flex-row items-center hover:shadow-lg hover:shadow-black transition duration-500 ease-out hover:ease-in cursor-pointer'>
              <a href="src\static\files\mycv.pdf" download>My Resume</a>
              <span className="material-symbols-outlined">
                  download
              </span>
            </li>
        </ul>
    </nav>
  )
}

export default Nav