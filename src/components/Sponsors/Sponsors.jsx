import React, { useEffect } from "react"
import { MdEmail } from "react-icons/md"
import "./estilos.css"

import UNstop from "./logos/unstop-logo.svg"
import AimersAi from "./logos/Aimerz_Logo.png"
import Noticebard from "./logos/Noticebard-logo.svg"

function Sponsors() {
  useEffect(() => {
    const container = document.querySelector(".container")
    const containercarrossel = document.querySelector(".container-carrossel")
    const carrossel = document.querySelector(".carrossel")
    const carrosselItems = carrossel.querySelectorAll(".carrossel-item")

    let isMouseDown = false
    let currentMousePos = 0
    let lastMousePos = 0
    let lastMoveTo = 0
    let moveTo = 0

    const createcarrossel = () => {
      const carrosselProps = onResize()
      const length = carrosselItems.length
      const gap = getGapValue() // Calculate gap based on screen size
      const degrees = 360 / length
      const tz = distanceZ(carrosselProps.w, length, gap)

      const fov = calculateFov(carrosselProps)
      const height = calculateHeight(tz)

      container.style.width = tz * 2 + gap * length + "px"
      container.style.height = height + "px"

      carrosselItems.forEach((item, i) => {
        const degreesByItem = degrees * i + "deg"
        item.style.setProperty("--rotatey", degreesByItem)
        item.style.setProperty("--tz", tz + "px")
      })
    }

    const getGapValue = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 640) {
        return 200 / 10 // Small screen (sm)
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        return 200 / 2 // Medium and larger screens (md)
      } else {
        return 200 // Large screen (lg)
      }
    }

    const lerp = (a, b, n) => n * (a - b) + b

    const distanceZ = (widthElement, length, gap) => {
      return widthElement / 2 / Math.tan(Math.PI / length) + gap
    }

    const calculateHeight = (z) => {
      const t = Math.atan((90 * Math.PI) / 180 / 2)
      const height = t * 2 * z
      return height
    }

    const calculateFov = (carrosselProps) => {
      const perspective = window.getComputedStyle(containercarrossel).perspective.split("px")[0]

      const length = Math.sqrt(carrosselProps.w * carrosselProps.w) + Math.sqrt(carrosselProps.h * carrosselProps.h)
      const fov = 2 * Math.atan(length / (2 * perspective)) * (180 / Math.PI)
      return fov
    }

    const getPosX = (x) => {
      currentMousePos = x
      moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2
      lastMousePos = currentMousePos
    }

    const update = () => {
      lastMoveTo = lerp(moveTo, lastMoveTo, 0.05)
      carrossel.style.setProperty("--rotatey", lastMoveTo + "deg")
      requestAnimationFrame(update)
    }

    const onResize = () => {
      const boundingcarrossel = containercarrossel.getBoundingClientRect()

      const carrosselProps = {
        w: boundingcarrossel.width,
        h: boundingcarrossel.height,
      }

      return carrosselProps
    }

    const resetGrab = () => {
      isMouseDown = false
      carrossel.classList.add("animate-marquee") // Add animation back
    }

    const initEvents = () => {
      carrossel.addEventListener("mousedown", () => {
        isMouseDown = true
        carrossel.style.cursor = "none"
        carrossel.classList.remove("animate-marquee") // Remove animation on click
      })

      carrossel.addEventListener("mouseup", () => {
        isMouseDown = false
        carrossel.style.cursor = "none"
        carrossel.classList.add("animate-marquee") // Add animation when mouse is released
      })

      containercarrossel.addEventListener("mouseleave", resetGrab) // Reset grab on mouse leave

      carrossel.addEventListener("mousemove", (e) => isMouseDown && getPosX(e.clientX))

      carrossel.addEventListener("touchstart", () => {
        isMouseDown = true
        carrossel.style.cursor = "none"
        carrossel.classList.remove("animate-marquee") // Remove animation on touch
      })

      carrossel.addEventListener("touchend", () => {
        resetGrab() // Reset grab on touch end
      })

      containercarrossel.addEventListener("touchmove", (e) => isMouseDown && getPosX(e.touches[0].clientX))

      window.addEventListener("resize", createcarrossel)

      update()
      createcarrossel()
    }

    initEvents()
  }, [])

  return (
    <div id="sponsors" className="h-screen flex flex-col justify-center items-center text-center bg overflow-x-hidden">
      <div className="w-max mt-8 pt-16 text-center text-4xl sm:text-5xl tracking-[-3px] font-bold font-montserrat bg-clip-text bg-gradient-to-l from-[#f505d5] to-[#01d4fe] text-transparent">
        Meet Our Sponsors
      </div>
      <div className="h-1 w-[18rem] sm:w-[26rem] mt-2 rounded-sm bg-gradient-to-l from-[#f505d5] to-[#01d4fe] mb-10 md:mb-18"></div>
      <div className="text-white text-justify md:text-center w-[75vw] md:text-xl text-semibold font-montserrat">
        We are proud to partner with industry-leading organizations that share our vision and commitment to innovation and excellence. Their generous support helps us bring this event to life,
        fostering a community of learning, networking, and growth. We extend our heartfelt thanks to our sponsors for their invaluable contributions and dedication to advancing the field.
      </div>
      <div className="conteudo__geral">
        <div className="container">
          <div className="container-carrossel">
            <div className="carrossel animate-marquee text-white text-sm">
              <div className="carrossel-item font-bold flex flex-col">
                unstop
                <img src={UNstop} className="w-[60%]" />
              </div>
              {/*<div className="carrossel-item font-bold flex flex-col">
                Sponsor-6
                <MdEmail />
              </div>
              <div className="carrossel-item font-bold flex flex-col">
                Sponsor-5
                <MdEmail />
              </div>
              <div className="carrossel-item font-bold flex flex-col">
                Sponsor-4
                <MdEmail />
              </div>*/}
              <div className="carrossel-item font-bold flex flex-col">
                NoticeBard
                <img src={Noticebard} className="w-[80%]" />
              </div>
              <div className="carrossel-item font-bold flex flex-col">
                AIMERZ
                <img src={AimersAi} className="w-[80%]" />
              </div>
              <div className="carrossel-item font-bold flex flex-col">
                unstop
                <img src={UNstop} className="w-[60%]" />
              </div>
              <div className="carrossel-item font-bold flex flex-col">
                NoticeBard
                <img src={Noticebard} className="w-[80%]" />
              </div>
              <div className="carrossel-item font-bold flex flex-col">
                AIMERZ
                <img src={AimersAi} className="w-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
