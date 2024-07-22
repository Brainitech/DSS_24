import { useState } from "react"
import "./App.css"

import CustomCursor from "./components/Cursor/CustomCursor.jsx"
import Navbar from "./components/NavBar/navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Footer from "./components/Footer/footer.jsx"
import Sponsors from "./components/Sponsors/Sponsors.jsx"
import Speakers from "./components/Speakers/speakers.jsx"

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Sponsors/>
      <Speakers/>
      <Footer />
    </>
  )
}

export default App
