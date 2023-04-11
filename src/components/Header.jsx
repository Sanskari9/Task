import React from 'react'
import Logo from "../assest/3ming_logo.jpg"

const Header = () => {
  return (
    <nav className=" w-full flex items-center justify-between min-h-[96px] px-8 py-4  bg-black text-white">
      <img src={Logo} alt="" className='w-[220px]'/>
       <ul className="flex">
        <li><a href="/home" className="px-6 text-xl">Home</a></li>
        <li><a href="/about" className="px-6 text-xl">About</a></li>
        <li><a href="/stream" className="px-6 text-xl">Stream</a></li>
        <li><a href="/promote" className="px-6 text-xl">Promote</a></li>
       </ul>

      <a href="/blog" className="text-xl px-6">Blog</a>
    </nav>
  )
}

export default Header;
