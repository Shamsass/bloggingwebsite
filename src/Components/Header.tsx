import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'

const Header = () => {
  return (
    <div>
  <header className="text-blue-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <div className='Img-parent w-[94] h-[94px]'>
  <img src ="./images.jpg" className="w-[400%] h-[120%] object-contain" alt =""></img></div>
    <a className="flex title-font font-medium items-center text-blue-900 mb-0 md:mb-0">
    
      <span className="mr-30 text-xl ">Have your say:Blog by  Shamsa Saleem</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <ul className='flex gap-x-5 mr-4'>
            <li>
              <Link className='hover:underline' href ={"/"}>Home </Link>
            </li>
            <li>
              <Link className='hover:underline' href ={"/"}>about</Link>
            </li>
            <li>
              <Link className='hover:underline' href ={"/"}>contact us</Link>
            </li>
            <li>
              <Link className='hover:underline' href ={"/"}>sign up</Link>
            </li>
          </ul>
      
    </nav>

  </div>
</header>

    </div>
  )
}

export default Header
