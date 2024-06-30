import React from "react"
import { useState } from "react"
import img from ".//Model.png"
import { MdEmail, MdHourglassBottom } from "react-icons/md"
// import Countdown from "react-countdown"
import { SlEnergy } from "react-icons/sl"
import "./hero.css"

function Hero() {
  setInterval(updateTime, 1000)

  const now = new Date().toLocaleTimeString()

  const [time, setTime] = useState(now)

  function updateTime() {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }

  return (
    <div className="bg-gradient-to-b from-black to-blue-900">
      <div className="lg:px-4 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center mb-8 ">
        <div className="h-full lg:py-20 ml-20 p-8 flex flex-col justify-center lg:items-start items-center text-white text-start">
          <h2 className="text-[54px] font-semibold mb-2 leading-loading text-blue-800 headingcontent text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-300">
            Data Science Summit'24
          </h2>
          <p className="mt-2 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam pariatur excepturi rem molestiae temporibus sint doloribus suscipit. Eaque dignissimos eveniet veritatis consectetur
            officia. Iure accusantium illum tempore, minima dignissimos quia?
          </p>
          <section className="bg-white rounded-3xl text-black p-1 flex flex-row flex-1 justify-between w-full ">
            <MdEmail className="w-6 h-6 ml-3 gap-0" />
            <input type="email" id="email" className="shadow-sm bg-gray-50 border text-black text-sm rounded-lg block " placeholder="name@gmail.com" required />
            <button className="bg-blue-800 rounded-3xl px-6 bg-gradient-to-r from-purple-900 to-purple-500 font-semibold text-white">Register Now</button>
          </section>
        </div>
        <img src={img} className="" alt="" />
      </div>
      <div className="lg:mx-40 mx-10 lg:my-0 my-20 text-center gap-5 lg-text-start grid lg:grid-cols-2 grid-cols-1 lg:gap-28 items-center border-white border-2 rounded-xl p-20 bg-gradient-to-r from-purple-900 via-blue-950 to-black ">
        <div className="h-full flex flex-col justify-center lg:items-start items-center text-white text-start">
          <h2 className="text-[30px] font-semibold mb-2 leading-loading uppercase text-white">Data Science Summit'24</h2>
          <p className="mt-2 text-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam pariatur excepturi rem molestiae temporibus sint doloribus suscipit. Eaque dignissimos eveniet veritatis consectetur
            officia. Iure accusantium illum tempore, minima dignissimos quia?
          </p>
          <section className="bg-fuchsia-700 rounded-xl text-black p-1 flex flex-row justify-center w-full mt-12 bg-gradient-to-r from-purple-900 to-purple-500">
            <SlEnergy className="w-6 h-6 ml-3 text-white" />
            <button className=" rounded-3xl w-full font-bold text-white ">See Event Catalouge</button>
          </section>
        </div>
        <div className="h-full flex flex-col justify-center lg:items-center items-center text-white text-start ">
          <h2 className="text-[32px] font-semibold mb-8 leading-loading text-blue-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-300 headingcontent1">
            2nd - 3rd Dec , 2024
          </h2>
          <hr className="h-[1px] bg-white w-full" />
          <h3 className="mt-8 mb-4">Countdown To The E-Summit:</h3>
          <ul className="grid grid-cols-4 gap-8 text-center text-[20px]">
            <li className="bg-gradient-to-b from-blue-600 via-blue-900 to-purple-950 leading-tight rounded-[3px] px-2">
              64
              <br />
              days
            </li>
            <li className="bg-gradient-to-b from-blue-600 via-blue-900 to-purple-950 leading-tight rounded-[3px]">
              64
              <br />
              days
            </li>
            <li className="bg-gradient-to-b from-blue-600 via-blue-900 to-purple-950 leading-tight rounded-[3px]">
              64
              <br />
              days
            </li>
            <li className="bg-gradient-to-b from-blue-600 via-blue-900 to-purple-950 leading-tight rounded-[3px]">
              64
              <br />
              days
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
