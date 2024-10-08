import React from "react"
import Navbar from "../NavBar/navbar"
import Footer from "../Footer/footer"
import CustomCursor from "../Cursor/CustomCursor"
import Form from "./Form"
import "../Hero/hero.css"

import HnF from "./posters/HacknForge.png"
import TQ from "./posters/TQ.png"
import SS from "./posters/SS.png"
import TH from "./posters/TH.png"
import CC from "./posters/CC.png"
import bg from "./posters/bg.jpg"

const StaticEvents = () => {
  const [buttonId, setButtonId] = React.useState(null)
  const handleClick = (event) => {
    const buttonId = event.target.id
    setButtonId(buttonId)
    document.querySelector(".reg-form").style.display = "flex"
  }
  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="bg flex flex-col items-center justify-center w-screen">
        <h1 className="text-6xl font-bold text-white text-center mt-28">Events</h1>
        <div className="mb-16 sm:my-16 flex gap-20 flex-wrap flex-col sm:flex-row mxl:max-w-[1140px] sm:max-w-[650px] max-w-[400px] min-h-[1770px] mxl:min-h-max justify-center items-center">
          <div
            className=" bg-bottom bg-contain sm:bg-right bg-no-repeat w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden flex flex-col sm:flex-row justify-between border-white border-2 transition-all duration-300 hover:flex-grow child"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <img src={HnF} className="rounded-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" />
            <div className="flex flex-col text-sm items-center justify-between mr-2 min-h-[300px]">
              <h1 className="text-white text-2xl font-bold text-center mt-4">Hack & Forge</h1>
              <div className="flex flex-col text-white text-left ml-2">
                <h5 className="flex flex-row mb-1 sm:mb-4">Problem statements released an hour before the Hackathon; final solutions presented the next day.</h5>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Team Size:</h6>
                <h6 className="font-normal">&nbsp;1-4 Members</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Location:</h6>
                <h6 className="font-normal">&nbsp;R&D Department</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Cash Prizes:</h6>
                <h6 className="font-normal">&nbsp; 50K</h6>
              </div>
              <button
                onClick={handleClick}
                id="HnF"
                className="text-white text-xl font-bold text-center bg-gradient-to-tr from-[#533377] to-[#8c35dd] h-max px-4 py-2 rounded-lg mb-4 transition-all duration-[0.3s] hover:scale-105"
              >
                Register Now!
              </button>
            </div>
          </div>
          <div
            className="bg-bottom bg-contain sm:bg-right bg-no-repeat w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden flex flex-col sm:flex-row justify-between border-white border-2 transition-all duration-300 hover:flex-grow"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <img src={TQ} className="rounded-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" />
            <div className="flex flex-col  text-sm items-center justify-between mr-2 min-h-[300px]">
              <h1 className="text-white text-2xl font-bold text-center mt-4">Tech Quiz</h1>
              <div className="flex flex-col text-white text-left ml-2">
                <h5 className="flex flex-row mb-1 sm:mb-4">Teams tackle 20 tech questions plus an audience question in Prelims. Top 6-7 advance to Finals for head-to-head challenges.</h5>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Team Size:</h6>
                <h6 className="font-normal">&nbsp;1-3 Members</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Location:</h6>
                <h6 className="font-normal">&nbsp;Lecture Hall 1/2</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Cash Prizes:</h6>
                <h6 className="font-normal">&nbsp; 10K</h6>
              </div>
              <button
                onClick={handleClick}
                id="TQ"
                className="text-white text-xl font-bold text-center bg-gradient-to-tr from-[#533377] to-[#8c35dd] h-max px-4 py-2 rounded-lg mb-4 transition-all duration-[0.3s] hover:scale-105"
              >
                Register Now!
              </button>
            </div>
          </div>
          <div
            className="bg-bottom bg-contain sm:bg-right bg-no-repeat w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden flex flex-col sm:flex-row justify-between border-white border-2 transition-all duration-300 hover:flex-grow"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <img src={TH} className="rounded-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" />
            <div className="flex flex-col text-sm items-center justify-between mr-2 min-h-[300px]">
              <h1 className="text-white text-2xl font-bold text-center mt-4">Treasure Trail</h1>
              <div className="flex flex-col text-white text-left ml-2">
                <h5 className="flex flex-row mb-1 sm:mb-4">Teams solve clues in password-protected PDFs to qualify for Finals. In Finals, find QR codes using clues and event volunteers.</h5>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Team Size:</h6>
                <h6 className="font-normal">&nbsp;1-3 Members</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Location:</h6>
                <h6 className="font-normal">&nbsp;Mehek/IC</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Cash Prizes:</h6>
                <h6 className="font-normal">&nbsp; 10K</h6>
              </div>
              <button
                onClick={handleClick}
                id="TH"
                className="text-white text-xl font-bold text-center bg-gradient-to-tr from-[#533377] to-[#8c35dd] h-max px-4 py-2 rounded-lg mb-4 transition-all duration-[0.3s] hover:scale-105"
              >
                Register Now!
              </button>
            </div>
          </div>
          <div
            className="bg-bottom bg-contain sm:bg-right bg-no-repeat w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden flex flex-col sm:flex-row justify-between border-white border-2 transition-all duration-300 hover:flex-grow"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <img src={CC} className="rounded-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" />
            <div className="flex flex-col text-sm items-center justify-between mr-2 min-h-[300px]">
              <h1 className="text-white text-2xl font-bold text-center mt-4">Coder&apos;s Cup</h1>
              <div className="flex flex-col text-white text-left ml-2">
                <h5 className="flex flex-row mb-1 sm:mb-4">Top 2 from each of 4 groups advance to 8-player eliminatory round, leading to semi-finals and finals.</h5>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Team Size:</h6>
                <h6 className="font-normal">&nbsp;Solo (Pairing will be done on site)</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Location:</h6>
                <h6 className="font-normal">&nbsp;Room No. 231 & 237</h6>
                <h6 className="flex flex-row font-bold mt-1 sm:mt-2">Cash Prizes:</h6>
                <h6 className="font-normal">&nbsp; 20K</h6>
              </div>
              <button
                onClick={handleClick}
                id="CC"
                className="text-white text-xl font-bold text-center bg-gradient-to-tr from-[#533377] to-[#8c35dd] h-max px-4 py-2 rounded-lg mb-4 transition-all duration-[0.3s] hover:scale-105"
              >
                Register Now!
              </button>
            </div>
          </div>
        </div>
        <Form buttonId={buttonId} />
      </div>
      <Footer />
    </>
  )
}

export default StaticEvents
