import React, { useEffect } from "react"
import "/src/App.css" // Make sure to import your CSS file

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor")

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`
      cursor.style.left = `${e.clientX}px`
    }

    const clickCursor = () => {
      cursor.classList.add("click")
      setTimeout(() => {
        cursor.classList.remove("click")
      }, 200)
    }

    const hideCursor = () => {
      cursor.classList.add("hidden")
    }

    const showCursor = () => {
      cursor.classList.remove("hidden")
    }

    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mousedown", clickCursor)
    document.addEventListener("mouseleave", hideCursor)
    document.addEventListener("mouseenter", showCursor)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mousedown", clickCursor)
      document.removeEventListener("mouseleave", hideCursor)
      document.removeEventListener("mouseenter", showCursor)
    }
  }, [])

  return <div id="custom-cursor" className="cursor"></div>
}

export default CustomCursor
