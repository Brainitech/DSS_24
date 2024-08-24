import React from "react"
import CustomCursor from "../Cursor/CustomCursor"
import Navbar from "../NavBar/navbar"
import Hero from "../Hero/Hero"
import Sponsors from "../Sponsors/Sponsors"
import Speakers from "../Speakers/speakers"
import Footer from "../Footer/footer"

function Landing() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Sponsors />
      <Speakers />
      <Footer />
    </>
  )
}

export default Landing
