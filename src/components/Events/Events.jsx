import React from "react"
import CustomCursor from "../Cursor/CustomCursor"
import Navbar from "../NavBar/navbar"
import Footer from "../Footer/footer"
import "../Hero/hero.css"
import { Raycaster, Vector2 } from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useRef, useState, useEffect } from "react"
import { OrbitControls, Html } from "@react-three/drei"
import { easing } from "maath"
import Building_test from "/public/Building_test"
import UI from "./UI"
import "/src/App.css"

import { PlayuseDoors } from "./sevents"

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

export function E1() {
  return (
    <>
      <mesh name="E1" position={[-4, 11.5, 0.5]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}
export function E2() {
  return (
    <>
      <mesh name="E2" position={[-4, 9.5, 0.5]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}
export function E3() {
  return (
    <>
      <mesh name="E3" position={[3, 7.8, 0.5]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}
export function E4() {
  return (
    <>
      <mesh name="E4" position={[3, 5.8, 0.5]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}
export function E5() {
  return (
    <>
      <mesh name="E5" position={[3, 3.8, 0.5]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}
export function E6() {
  return (
    <>
      <mesh name="E6" position={[0, 11.5, -1]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}

// New ClickHandler Component
function ClickHandler({ setAnimationIndex }) {
  const raycaster = new Raycaster()
  const mouse = new Vector2()
  const { camera, scene } = useThree()
  const { animations, animationIndex, setAnimationIndex: setLocalAnimationIndex } = PlayuseDoors()

  const handleButtonClick = (index) => {
    setAnimationIndex(index)
    setLocalAnimationIndex(index)
  }

  const handleMouseClick = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse, camera)

    // Check for intersections with all objects in the scene
    const intersects = raycaster.intersectObjects(scene.children, true)

    if (intersects.length > 0) {
      console.log("Clicked on:", intersects[0].object.name)
      // Example: setAnimationIndex(1); // Uncomment to change animation based on the clicked object
      switch (intersects[0].object.name) {
        case "E1":
          handleButtonClick(5)
          break
        case "E2":
          handleButtonClick(4)
          break
        case "E3":
          handleButtonClick(3)
          break
        case "E4":
          handleButtonClick(2)
          break
        case "E5":
          handleButtonClick(1)
          break
        case "E6":
          handleButtonClick(0)
          break
        default:
          handleButtonClick(0)
          DefRig(true)
          break
      }
    }
  }

  useEffect(() => {
    window.addEventListener("pointerdown", handleMouseClick)
    return () => {
      window.removeEventListener("pointerdown", handleMouseClick)
    }
  }, [])

  return null
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

  console.log(animationIndex)

  const Preloader = () => (
    <Html center>
      <div className="text-white text-3xl font-bold">
        <p>Loading...</p>
      </div>
    </Html>
  )

  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="bg flex justify-center">
        <Canvas ref={canvasRef} camera={{ position: [1, 1.5, 30], fov: 65 }} className="bgc">
          <group position={[0, -10, 0]} rotation={[0, 3.2, 0]}>
            <Suspense fallback={<Preloader />}>
              {animationIndex !== 1 && animationIndex !== 1 && animationIndex !== 2 && animationIndex !== 3 && animationIndex !== 4 && animationIndex !== 5 && (
                <>
                  <E1 />
                  <E2 />
                  <E3 />
                  <E4 />
                  <E5 />
                  <ambientLight />
                </>
              )}
              {/* <E6 /> */}
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
          <ClickHandler setAnimationIndex={setAnimationIndex} />
        </Canvas>
      </div>
      {/* <UI setAnimationIndex={setAnimationIndex} /> */}
      <Footer />
    </>
  )
}

export default Events
