import React from "react"

const Navbar = () => {
  return (
    <nav className="p-4 w-full fixed top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center absolute left-10">
          <img src="/public/sds.png" className="w-10" alt="SDS Logo" />
          <a href="/" className="text-black text-lg font-bold">
            SDS
          </a>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-black backdrop-blur-md rounded-2xl px-4 py-1 hover:bg-gray-300 font-semibold transition-all duration-300">
            About
          </a>
          <a href="#" className="text-black backdrop-blur-md rounded-2xl px-4 py-1 hover:bg-gray-300 font-semibold transition-all duration-300">
            Events
          </a>
          <a href="#" className="text-black backdrop-blur-md rounded-2xl px-4 py-1 hover:bg-gray-300 font-semibold transition-all duration-300">
            Alumni
          </a>
          <a href="#" className="text-black backdrop-blur-md rounded-2xl px-4 py-1 hover:bg-gray-300 font-semibold transition-all duration-300">
            Sponsors
          </a>
          <a href="#" className="text-black backdrop-blur-md rounded-2xl px-4 py-1 hover:bg-gray-300 font-semibold transition-all duration-300">
            Contact Us
          </a>
        </div>
        <div className="absolute right-10 flex items-center border-gray-500 border-3 rounded-3xl p-0.5">
          <a href="#" className="text-black hover:bg-purple-700 hover:text-white rounded-2xl px-4 py-1 font-bold transition-all duration-300">
            Login
          </a>
          <a href="/register" className="text-black hover:bg-gradient-to-r from-purple-950 to-purple-500 hover:text-white rounded-2xl px-4 py-1 font-bold transition-all duration-300">
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
