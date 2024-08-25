import { createContext, useContext, useState } from "react"

const UseDoorContext = createContext({})

export const UseDoorProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(0)
  const [animations, setAnimations] = useState([])

  const animationGroups = {
    1: [1, 6],
    2: [7, 2],
    3: [3, 8],
    4: [9, 4],
    5: [5, 10],
    6: [6, 1],
    7: [5, 10],
    8: [4, 9],
    9: [8, 3],
    10: [2, 7],
  }

  return <UseDoorContext.Provider value={{ animationIndex, setAnimationIndex, animations, setAnimations, animationGroups }}>{props.children}</UseDoorContext.Provider>
}

export const PlayuseDoors = () => {
  return useContext(UseDoorContext)
}
// import React from "react"

// const UI = () => {
//   const divStyle = {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     top: "50%",
//     right: "0",
//     transform: "translateY(-50%)",
//     padding: "10px",
//     backgroundColor: "lightgray", // Optional styling
//   }
//   const butStyle = {
//     padding: "10px",
//     margin: "5px",
//   }

//   return (
//     <>
//       <div style={divStyle}>
//         <button style={butStyle}>1 </button>
//         <button style={butStyle}>2 </button>
//         <button style={butStyle}>3 </button>
//         <button style={butStyle}>4 </button>
//         <button style={butStyle}>5 </button>
//       </div>
//     </>
//   )
// }

// export default UI
