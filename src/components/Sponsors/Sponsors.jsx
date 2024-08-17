import React from "react"
import { MdEmail } from "react-icons/md"
import Hero from "../Hero/Hero"

function Sponsors() {
  return (
    <div id="sponsors" className="p-4 flex flex-col justify-center items-center text-center bg pb-8 overflow-x-hidden">
      <h1 className="w-max pt-16 text-center text-4xl sm:text-5xl tracking-[-3px] font-bold font-montserrat bg-clip-text bg-gradient-to-l from-[#f505d5] to-[#01d4fe] text-transparent">
        Meet Our Sponsors
      </h1>
      <div className="h-1 w-[18rem] sm:w-[26rem] mt-2 rounded-sm bg-gradient-to-l from-[#f505d5] to-[#01d4fe]"></div>
      <div className="relative flex overflow-x-hidden text-white my-32 w-[80vw] justify-left align-center">
        <div className="animate-marquee whitespace-nowrap flex flex-row gap-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
              <h1>Sponsor - {i + 1}</h1>
              <MdEmail className="w-20 h-20" />
            </div>
          ))}
        </div>
        <div className="animate-marquee2 whitespace-nowrap  flex flex-row gap-20 ml-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="lm:h-36 lm:w-44 flex flex-col justify-right items-center text-center">
              <h1>Sponsor - {i + 1}</h1>
              <MdEmail className="w-20 h-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
