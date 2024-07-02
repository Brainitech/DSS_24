import React from "react"
import { MdEmail} from "react-icons/md"
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import "./hero.css"

function Hero() {

  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-black w-screen pb-8">
      <div className="lm:px-4 px-10 lm:py-0 py-20 text-center gap-5 lm-text-start flex lm:flex-row flex-col-reverse justify-between lm:gap-28 items-center mb-8 ">
        <div className="h-full lm:py-20 lm:mx-20 flex flex-col justify-center lm:items-start items-center text-white lm:text-start w-[75%]">
          <div className="bg-slate-400 rounded-xl flex flex-row p-[2px] gap-3 justify-center items-center mb-6">
            <button className="bg-slate-500 rounded-xl lm:px-4">latest update</button>
            <h2>templates-loom,atlassian,notion and yours</h2>
            <MdArrowOutward className="mr-[6px]"/>
          </div>
          <h2 className="lm:text-[66px] text-[54px] lm:p-0 font-semibold mb-2 leading-loading text-white">
            Data Science Summit'24
          </h2>
          <p className="mt-2 mb-8 w-[60%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam pariatur excepturi rem molestiae temporibus sint doloribus suscipit. Eaque dignissimos eveniet veritatis consectetur
            officia. Iure accusantium illum tempore, minima dignissimos quia?
          </p>
            <button className=" rounded-[3px] px-6 border border-white font-bold text-white flex flex-row justify-center items-center gap-2">Register Now <FaArrowRight/></button>
        </div>
      </div>
      <div className="lm:mx-20 mx-10 lm:my-0 my-20 text-center gap-5 lm:gap-28 items-center">
        <div className="flex flex-row items-center justify-center gap-4">
          <hr className="border-[1px] w-full" />
          <h2 className="text-white font-bold w-full">Lorem ipsum dolor sit amet consectetur</h2>
          <hr className="border-[1px] w-full" />
        </div>
        <div className="flex flex-row w-full justify-between mt-4">
          <MdEmail className="w-12 h-12 text-white"/>
          <MdEmail className="w-12 h-12 text-white"/>
          <MdEmail className="w-12 h-12 text-white"/>
          <MdEmail className="w-12 h-12 text-white"/>
          <MdEmail className="w-12 h-12 text-white"/>
          <MdEmail className="w-12 h-12 text-white"/>

        </div>
      </div>
    </div>
  )
}

export default Hero
