import React from "react"
import { MdEmail } from "react-icons/md"
function Sponsors() {
  return (
    <div className="p-4 flex flex-col justify-center text-center bg-gradient-to-b from-black via-purple-950 to-black pb-8 overflow-x-hidden">
      <h1 className="text-[60px] font-semibold mb-0 leading-normal text-white">Sponsors</h1>
      <div className="relative flex overflow-x-hidden text-white my-32 gap-4 ">
        <div className="py-12 animate-marquee whitespace-nowrap flex flex-row gap-4 ">
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center ">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row gap-4">
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
          <div className="lm:h-36 lm:w-44 flex flex-col justify-center items-center text-center">
            <h1>Sponsor logo</h1>
            <MdEmail className="w-20 h-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
