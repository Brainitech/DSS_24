import React from "react"
import { MdEmail } from "react-icons/md"
import Hero from "../Hero/Hero"

function Sponsors() {
  return (
    <div id="sponsors" className="h-screen flex flex-col justify-center items-center text-center bg overflow-x-hidden">
      <div className="w-max pt-16 text-center text-4xl sm:text-5xl tracking-[-3px] font-bold font-montserrat bg-clip-text bg-gradient-to-l from-[#f505d5] to-[#01d4fe] text-transparent">
        Meet Our Sponsors
      </div>
      <div className="h-1 w-[18rem] sm:w-[26rem] mt-2 rounded-sm bg-gradient-to-l from-[#f505d5] to-[#01d4fe] mb-10 md:mb-18"></div>
      <div className="text-white text-justify md:text-center w-[75vw] md:text-xl text-semibold font-montserrat">
        We are proud to partner with industry-leading organizations that share our vision and commitment to innovation and excellence. Their generous support helps us bring this event to life,
        fostering a community of learning, networking, and growth. We extend our heartfelt thanks to our sponsors for their invaluable contributions and dedication to advancing the field.
      </div>
      <div className="relative flex overflow-x-hidden text-white my-20 sm:my-32 w-[80vw] justify-left align-center rounded-3xl">
        <div className="animate-marquee whitespace-nowrap flex flex-row gap-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col justify-center items-center text-center">
              <h1>Sponsor - {i + 1}</h1>
              <MdEmail className="w-20 h-20" />
            </div>
          ))}
        </div>
        <div className="animate-marquee2 whitespace-nowrap flex flex-row gap-20 ml-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col justify-right items-center text-center">
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
