import React from "react"

import CustomCursor from "../Cursor/CustomCursor"
import Navbar from "../NavBar/navbar"
import Footer from "../Footer/footer"
import "../Hero/hero.css"

function Events() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="h-screen w-screen flex justify-center items-center bg">
        <h1 className="text-white text-3xl font-bold text-center bg-black p-4 pt-2 rounded-full bg-opacity-30 mx-4">EVENT'S WILL BE AVAILABLE SOON!</h1>
      </div>
      <Footer />
    </>
  )
}

export default Events
