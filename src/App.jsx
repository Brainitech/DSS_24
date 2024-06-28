import { useState } from "react"
import "./App.css"

import CustomCursor from "./components/Cursor/CustomCursor.jsx"
import Navbar from "./components/NavBar/navbar.jsx"

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
    </>
  )
}

export default App
