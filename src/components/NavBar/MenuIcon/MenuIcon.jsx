import React, { useState, useEffect } from "react"
import "./MenuIcon.css"

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.querySelector(".dropdown").classList.toggle("open")
    document.querySelector(".pages").classList.toggle("open")
  }
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        // Close the menu if it's open when the user scrolls
        toggleMenu()
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isOpen])

  return (
    <div className={`MenuIcon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}

export default MenuIcon
