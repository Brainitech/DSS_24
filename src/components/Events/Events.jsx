import React from "react"

import CustomCursor from "../Cursor/CustomCursor"
import Navbar from "../NavBar/navbar"
import Footer from "../Footer/footer"
import "../Hero/hero.css"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState, useEffect } from "react"
import { OrbitControls } from "@react-three/drei"
import { easing } from "maath"
import Building_test from "/public/Building_test"
import UI from "./UI"
import "/src/App.css"

export function DefRig({ controlsActive }) {
  return useFrame((state, delta) => {
    if (!controlsActive.current) {
      easing.damp3(state.camera.position, [1, 0, 30], 0.7, delta)
      easing.damp3(state.camera.rotation, [-0, 0, 0], 0.7, delta)
    }
  })
}

export function HRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 5, 2 - state.mouse.y / 5, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.06], 0.2, delta)
  })
}
export function QRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 5, 0.2 - state.mouse.y / 5, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.05], 0.2, delta)
  })
}
export function SRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 5, -1.8 - state.mouse.y / 5, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.08], 0.2, delta)
  })
}
export function TRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 5, -3.8 - state.mouse.y / 5, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.05], 0.2, delta)
  })
}
export function BRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 5, -5.7 - state.mouse.y / 5, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.05], 0.2, delta)
  })
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const documentChangeHandler = () => setMatches(mediaQueryList.matches)

    // Set the initial state
    setMatches(mediaQueryList.matches)

    // Add event listener
    mediaQueryList.addEventListener("change", documentChangeHandler)

    // Remove event listener on cleanup
    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler)
    }
  }, [query])

  return matches
}

function Events() {
  const [animationIndex, setAnimationIndex] = useState(null)
  const controlsActive = useRef(false)
  const isMobile = useMediaQuery("(max-width: 1024px)")
  const canvasRef = useRef()

  const scrsize = animationIndex === 0 || animationIndex === null ? (isMobile ? true : false) : false

  useEffect(() => {
    if (canvasRef.current) {
      if (scrsize) {
        canvasRef.current.classList.add("mobile")
      } else {
        canvasRef.current.classList.remove("mobile")
      }
    }
  }, [scrsize])

  // console.log(scrsize)

  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="bg flex justify-center">
        <Canvas ref={canvasRef} camera={{ position: [1, 1.5, 30], fov: 65 }} className="bgc">
          <group position={[0, -10, 0]} rotation={[0, 3.2, 0]}>
            <Suspense fallback={null}>
              <Building_test />
            </Suspense>
            {animationIndex !== 1 && animationIndex !== 1 && animationIndex !== 2 && animationIndex !== 3 && animationIndex !== 4 && animationIndex !== 5 && (
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                minAzimuthAngle={-Math.PI / 3}
                maxAzimuthAngle={Math.PI / 3}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 2}
                onStart={() => (controlsActive.current = true)}
                onEnd={() => (controlsActive.current = false)}
              />
            )}
            {(animationIndex === null || animationIndex === 0) && <DefRig controlsActive={controlsActive} />}
            {animationIndex === 5 && <HRig />}
            {animationIndex === 4 && <QRig />}
            {animationIndex === 3 && <SRig />}
            {animationIndex === 2 && <TRig />}
            {animationIndex === 1 && <BRig />}
          </group>
        </Canvas>
      </div>
      <UI setAnimationIndex={setAnimationIndex} />
      <Footer />
    </>
  )
}

export default Events
