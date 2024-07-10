import { useState } from "react"
import "./App.css"

import CustomCursor from "./components/Cursor/CustomCursor.jsx"
import Navbar from "./components/NavBar/navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Footer from "./components/Footer/footer.jsx"
import Sponsors from "./components/Sponsors/Sponsors.jsx"

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Sponsors/>
      <Footer />
    </>
  )
}

export default App
