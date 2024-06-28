import React from "react"

import MenuIcon from "./MenuIcon/MenuIcon"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="p-4 w-full h-14 flex items-center fixed top-0 left-0 shadow-md ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center absolute left-16">
          <img src="/public/sds.png" className="w-10" alt="SDS Logo" />
          <a href="/" className="text-white text-lg font-bold">
            SDS
          </a>
        </div>
        <MenuIcon />
        <div className="content hidden lm:flex space-x-8">
          <a href="#" className="text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            About
          </a>
          <a href="#" className="text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Events
          </a>
          <a href="#" className="text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Alumini
          </a>
          <a href="#" className="text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Sponsors
          </a>
          <a href="#" className="text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Contact Us
          </a>
        </div>
        <div className="absolute right-20 flex items-center border-gray-500 border-3 rounded-3xl p-0.5">
          <a href="#" className="text-white hover:bg-gradient-to-r from-purple-950 to-purple-500 hover:text-white rounded-2xl px-4 py-1 font-bold transition-all duration-300">
            Login
          </a>
          <a href="/register" className="text-white hover:bg-gradient-to-r from-purple-950 to-purple-500 hover:text-white rounded-2xl px-4 py-1 font-bold transition-all duration-300">
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
