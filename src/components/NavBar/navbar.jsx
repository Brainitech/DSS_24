import React, { useState, useEffect } from "react"
import MenuIcon from "./MenuIcon/MenuIcon"
import "./navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  let navbarClasses = "p-4 w-full h-14 flex items-center fixed top-0 transition-all duration-500 "
  navbarClasses += scrolled ? "bg-gray-900 bg-opacity-85 backdrop-blur-md" : "bg-transparent"

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center absolute left-16">
          <img src="/sds.png" className="w-10" alt="SDS Logo" />
          <a href="/" className="text-white text-lg font-bold">
            SDS
          </a>
        </div>
        <MenuIcon />
        <div className="content hidden lm:flex space-x-8">
          <a href="#" className=" text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            About
          </a>
          <a href="#" className=" text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Events
          </a>
          <a href="#" className=" text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Alumni
          </a>
          <a href="#" className=" text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Sponsors
          </a>
          <a href="#" className=" text-white hover:backdrop-blur-md rounded-2xl px-4 py-1 font-semibold transition-all duration-300">
            Contact Us
          </a>
        </div>
        <div className="absolute right-20 flex items-center border-gray-500 border-3 rounded-3xl p-0.5">
          <a href="#" className=" text-white hover:bg-gradient-to-r from-sky-800 to-cyan-500 hover:text-white rounded-2xl px-4 py-1 font-bold transition-all duration-300">
            Login
          </a>
          <a href="/register" className=" text-white hover:bg-gradient-to-r from-sky-800 to-cyan-500 hover:text-white rounded-2xl px-4 py-1 font-bold transition-all duration-300">
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
