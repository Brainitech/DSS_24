import React from "react"
import { PlayuseDoors } from "./sevents"
import HnF from "./posters/HacknForge.png"

export default function Register() {
  const { animationIndex } = PlayuseDoors()

  if (animationIndex === 5) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="absolute top-20 left-1/4 sm:left-[43%] text-white text-3xl font-extrabold font-montserrat">Hack & Forge</h1>
        <div className="w-[300px] h-[300px] rounded-2xl bg-contain mb-8" style={{ backgroundImage: `url(${HnF})` }}></div>
        <button className="w-max text-white text-xl font-bold bg-purple-800 rounded-2xl px-4">Register Now!</button>
      </div>
    )
  }
}
