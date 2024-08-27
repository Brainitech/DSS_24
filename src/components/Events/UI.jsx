import React from "react"
import { PlayuseDoors } from "./sevents"
import { color } from "three/webgpu"

const UI = ({ setAnimationIndex }) => {
  const butStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5px",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: "#6b21a8",
    padding: "5px",
  }
  const butaStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5px",
    justifyContent: "center",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "lightblue",
  }
  const { animations, animationIndex, setAnimationIndex: setLocalAnimationIndex } = PlayuseDoors()

  const handleButtonClick = (index) => {
    setAnimationIndex(index)
    setLocalAnimationIndex(index)
  }

  return (
    <>
      <div className="absolute top-28 left-[30%] flex flex-col justify-center">
        <button className="text-white font-bold" style={animationIndex === 0 ? butaStyle : butStyle} onClick={() => handleButtonClick(0)}>
          View Other Events
        </button>
      </div>
    </>
  )
}

export default UI
