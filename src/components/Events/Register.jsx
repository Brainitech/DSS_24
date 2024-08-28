import React from "react"
import { PlayuseDoors } from "./sevents"
import HnF from "./posters/HacknForge.png"
import TQ from "./posters/TQ.png"
import SS from "./posters/SS.png"
import TH from "./posters/TH.png"
import CC from "./posters/CC.png"

export default function Register() {
  const { animationIndex } = PlayuseDoors()

  if (animationIndex === 5) {
    return (
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="absolute top-20 text-white text-3xl font-extrabold font-montserrat">Hack & Forge</h1>
        <div className="w-[300px] h-[300px] rounded-2xl bg-contain mb-16" style={{ backgroundImage: `url(${HnF})` }}></div>
        <button className="w-max text-white text-xl font-bold bg-purple-800 rounded-2xl px-4">Register Now!</button>
      </div>
    )
  }
  if (animationIndex === 4) {
    return (
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="absolute top-20 text-white text-3xl font-extrabold font-montserrat">Tech Quiz</h1>
        <div className="w-[300px] h-[300px] rounded-2xl bg-contain mb-16" style={{ backgroundImage: `url(${TQ})` }}></div>
        <button className="w-max text-white text-xl font-bold bg-purple-800 rounded-2xl px-4">Register Now!</button>
      </div>
    )
  }
  if (animationIndex === 3) {
    return (
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="absolute top-20 text-white text-3xl font-extrabold font-montserrat">Speaker's Session</h1>
        <div className="w-[300px] h-[300px] rounded-2xl bg-contain mb-16 bg-gray-700" style={{ backgroundImage: `url(${SS})` }}></div>
        <button className="w-max text-white text-xl font-bold bg-purple-800 rounded-2xl px-4">Register Now!</button>
      </div>
    )
  }
  if (animationIndex === 2) {
    return (
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="absolute top-20 text-white text-3xl font-extrabold font-montserrat">Tech Treasure Trail</h1>
        <div className="w-[300px] h-[300px] rounded-2xl bg-contain mb-16" style={{ backgroundImage: `url(${TH})` }}></div>
        <button className="w-max text-white text-xl font-bold bg-purple-800 rounded-2xl px-4">Register Now!</button>
      </div>
    )
  }
  if (animationIndex === 1) {
    return (
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="absolute top-20 text-white text-3xl font-extrabold font-montserrat">Coder's Cup</h1>
        <div className="w-[300px] h-[300px] rounded-2xl bg-contain mb-16" style={{ backgroundImage: `url(${CC})` }}></div>
        <button className="w-max text-white text-xl font-bold bg-purple-800 rounded-2xl px-4">Register Now!</button>
      </div>
    )
  }
}
