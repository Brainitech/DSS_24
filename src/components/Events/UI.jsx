import React from "react"
import { PlayuseDoors } from "./sevents"

const UI = ({ setAnimationIndex }) => {
  const divStyle = {
    display: "none",
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    padding: "10px",
    backgroundColor: "lightgray",
  }
  const divStyle2 = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    padding: "10px",
  }
  const divStyle3 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "1%",
    right: "43%",
    transform: "translateY(-50%)",
    padding: "10px",
    backgroundColor: "lightgray",
  }
  const butStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5px",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: "lightgray",
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
      {/* <div style={divStyle3}>Wait for the model to load</div> */}
      <div style={divStyle}>
        {animations.map((animation, index) => (
          <button style={butStyle} key={animation} onClick={() => handleButtonClick(index)}>
            {animation}
          </button>
        ))}
      </div>
      <div style={divStyle2}>
        <button style={animationIndex === 0 ? butaStyle : butStyle} onClick={() => handleButtonClick(0)}>
          Close All
        </button>
        <button style={animationIndex === 5 ? butaStyle : butStyle} onClick={() => handleButtonClick(5)}>
          Hackathon
        </button>
        <button style={animationIndex === 4 ? butaStyle : butStyle} onClick={() => handleButtonClick(4)}>
          Quiz
        </button>
        <button style={animationIndex === 3 ? butaStyle : butStyle} onClick={() => handleButtonClick(3)}>
          Speaker Session
        </button>
        <button style={animationIndex === 2 ? butaStyle : butStyle} onClick={() => handleButtonClick(2)}>
          Treasure Hunt
        </button>
        <button style={animationIndex === 1 ? butaStyle : butStyle} onClick={() => handleButtonClick(1)}>
          Business Analytics
        </button>
      </div>
    </>
  )
}

export default UI
