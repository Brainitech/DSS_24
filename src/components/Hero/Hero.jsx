import React, { useState, useEffect } from "react"
import "./hero.css"
import tech from "./tech.png"
import pdsslogo from "./DSS_Logo.png"

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [eventStatus, setEventStatus] = useState("")

  useEffect(() => {
    const targetDate = new Date("2024-09-06")
    const eventEndDate = new Date("2024-09-08")
    const interval = setInterval(() => {
      const currentDate = new Date()
      const remainingTime = targetDate - currentDate

      if (remainingTime <= 0) {
        clearInterval(interval)
        if (currentDate < eventEndDate) {
          setEventStatus("Event has Started!")
        } else {
          setEventStatus("Event Completed")
        }
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (eventStatus) {
    return <div className="text-white text-center text-2xl font-bold">{eventStatus}</div>
  }

  return (
    <div className="flex gap-6 sm:gap-10">
      <div className="w-[3.1rem] h-[3.1rem] sm:w-[4.2rem] sm:h-[4.2rem] bg-gradient-to-br from-[#f505d5] to-[#01d4fe] rounded-lg flex justify-center items-center p-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#442f6f] rounded-lg flex flex-col items-center justify-center text-center text-white font-semibold text-xs sm:text-sm">
          {timeLeft.days}
          <br />
          <div className="text-[11px] sm:text-sm">Days</div>
        </div>
      </div>
      <div className="w-[3.1rem] h-[3.1rem] sm:w-[4.2rem] sm:h-[4.2rem] bg-gradient-to-br from-[#f505d5] to-[#01d4fe] rounded-lg flex justify-center items-center p-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#442f6f] rounded-lg flex flex-col items-center justify-center text-center text-white font-semibold text-xs sm:text-sm">
          {timeLeft.hours}
          <br />
          <div className="text-[11px] sm:text-sm">Hours</div>
        </div>
      </div>
      <div className="w-[3.1rem] h-[3.1rem] sm:w-[4.2rem] sm:h-[4.2rem] bg-gradient-to-br from-[#f505d5] to-[#01d4fe] rounded-lg flex justify-center items-center p-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#442f6f] rounded-lg flex flex-col items-center justify-center text-center text-white font-semibold text-xs sm:text-sm">
          {timeLeft.minutes}
          <br />
          <div className="text-[11px] sm:text-sm">Minutes</div>
        </div>
      </div>
      <div className="w-[3.1rem] h-[3.1rem] sm:w-[4.2rem] sm:h-[4.2rem] bg-gradient-to-br from-[#f505d5] to-[#01d4fe] rounded-lg flex justify-center items-center p-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#442f6f] rounded-lg flex flex-col items-center justify-center text-center text-white font-semibold text-xs sm:text-sm">
          {timeLeft.seconds}
          <br />
          <div className="text-[11px] sm:text-sm">Seconds</div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const [eventStatus, setEventStatus] = useState("")

  useEffect(() => {
    const eventEndDate = new Date("2024-09-09")
    const currentDate = new Date()

    if (currentDate > eventEndDate) {
      setEventStatus("Event Completed")
    }
  }, [])

  return (
    <>
      <div id="hero" className="bg h-full xl:h-screen flex flex-col justify-center xl:grid xl:grid-cols-3 items-center">
        <img src={tech} alt="DSS Logo" className="block sm:w-auto sm:h-96" />
        <div className="m-0 xl:mt-20 flex flex-col items-center">
          <h1 className="mt-0 xl:mt-14 text-center text-5xl sm:text-7xl font-bold tracking-[-3px] font-krona bg-clip-text bg-gradient-to-b from-[#f505d5] to-[#01d4fe] text-transparent ">
            Data Science <br />
            Summit '24
          </h1>
          <p className="mt-6 text-white text-xs sm:text-sm font-montserrat w-[80vw] sm:w-[60vw] md:w-[33.3vw] text-center font-semibold">
            Welcome to the Data Science Summit 2024, hosted by the Society for Data Science at BIT Mesra. This event is your gateway to exploring the latest trends and innovations in data science.
            Connect with experts, engage in insightful discussions, and enhance your knowledge in this dynamic field. Let's unlock the power of data together!
          </p>
          <h4 className="text-[#01d4fe] font-bold font-montserrat py-8">6th-8th September 2024</h4>
          <Timer />
          {eventStatus !== "Event Completed" && (
            <button className="my-10 bg-gradient-to-tr from-[#533377] to-[#8c35dd] w-32 h-8 rounded-lg flex justify-center items-center shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:shadow-[0_0_25px_rgba(255,255,255,1)] hover:cursor-pointer transition-shadow duration-200">
              <a className="text-white text-transparent font-montserrat font-extrabold">Register Now!</a>
            </button>
          )}
        </div>
        <img src={pdsslogo} alt="DSS Logo" className="mx-14 hidden xl:block sm:w-auto sm:h-80" />
      </div>
    </>
  )
}

export default Hero
