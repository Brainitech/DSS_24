import React from "react"
import PropTypes from "prop-types"
import speak1 from "/src/assets/me.jpg"
import speak2 from "/src/assets/me2.jpeg"
import speak3 from "/src/assets/me3.png"
import "../Hero/hero.css"

export function Speakercard(props) {
  const { pic, name, text } = props

  const speakername = "text-white font-bold text-center text-2xl"
  const speakercontent = "flex flex-col items-center justify-center sm:flex-row"
  const speakertext = "text-xs sm:text-base sm:px-9 tracking-wide text-justify text-white flex sm:max-w-3xl"
  const speakerpic = `w-[15.75rem] h-[19.75rem] sm:w-[17.75rem] sm:h-[23.75rem] bg-[url('${pic}')] bg-cover bg-center rounded-3xl`
  const speakerbg = "flex bg-slate-700 rounded-3xl m-8 p-5 max-w-max"

  const isAlternate = props.isAlternate

  // return (
  //   <div className={speakerbg}>
  //     <div className="m-2 justify-center items-center">
  //       <div className={speakername}>{name}</div>
  //       {isAlternate && (
  //         <div className={speakercontent}>
  //           <div className={`${speakertext} order-2 sm:order-1`}>
  //             <p>{text}</p>
  //           </div>
  //           <div className="m-2 order-1 sm:order-2">
  //             <img src={pic} alt="" className={speakerpic} />
  //           </div>
  //         </div>
  //       )}

  //       {!isAlternate && (
  //         <div className={speakercontent}>
  //           <div className="m-2">
  //             <img src={pic} alt="" className={speakerpic} />
  //           </div>
  //           <div className={speakertext}>
  //             <p>{text}</p>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  //
  return (
    <div className="w-64 h-80 sm:w-72 sm:h-96 bg-gradient-to-br from-[#f505d5] to-[#01d4fe] rounded-3xl flex justify-center items-center group overflow-hidden">
      <div className={`w-[15.75rem] h-[19.75rem] sm:w-[17.75rem] sm:h-[23.75rem] bg-cover bg-center rounded-3xl`} style={{ backgroundImage: `url(${pic})` }}>
        <div className="h-[19.75rem] sm:h-[13.75rem] translate-y-64 sm:translate-y-80 group-hover:translate-y-24 sm:group-hover:translate-y-40 bg-black bg-opacity-40 group-hover:bg-opacity-70 group-hover:backdrop-blur-sm  transition-all duration-700 ease-in-out rounded-3xl">
          <div className="text-white text-center font-bold font-montserrat text-xl mb-4 pt-4">{name}</div>
          <div className="text-white text-[0.75rem] mx-2">{text}</div>
        </div>
      </div>
    </div>
  )
}

Speakercard.propTypes = {
  pic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isAlternate: PropTypes.bool,
}
// console.log(speak1, speak2, speak3)
export default function Speakers() {
  return (
    <div className="h-full xl:h-screen w-screen pb-8 bg flex flex-col items-center">
      <div className="flex flex-col items-center mb-10 md:mb-18" id="SPEAKERS">
        <div className="mt-16 text-center text-4xl sm:text-5xl font-bold font-montserrat tracking-[-3px] font-krona bg-clip-text bg-gradient-to-l from-[#f505d5] to-[#01d4fe] text-transparent">
          Meet our speakers
        </div>
        <div className="h-1 w-[18rem] sm:w-[25rem] mt-2 rounded-sm bg-gradient-to-l from-[#f505d5] to-[#01d4fe]"></div>
      </div>
      <div className="text-white text-justify md:text-center w-[75vw] md:text-xl text-semibold font-montserrat pb-10">
        Our event features a distinguished lineup of thought leaders and experts who are shaping the future of their industries. These speakers bring a wealth of knowledge, experience, and insight,
        offering attendees the opportunity to learn from and engage with some of the most influential voices in the field. We are honored to have them share their expertise and inspire our audience.
      </div>
      <div className="alumini1">
        <div className="flex flex-col xl:flex-row gap-[10vw] items-center justify-center">
          <Speakercard
            pic={speak1}
            name="Vishwa Mohan"
            text="Vishwa Mohan, the founder of AIMERZ.ai, is transforming the Indian job market by providing job opportunities and upskilling resources. With over 14 years of experience with top companies like PwC and LinkedIn, he has educated over 1 million students, aiming to impact 300 million through his innovative platform."
            isAlternate={false}
          />
          <Speakercard
            pic={speak2}
            name="Nikhil Saini"
            text="Nikhil Saini, CEO and Founder of Iris Aerial Innovations, leads a top GIS startup specializing in drone-based solutions for surveying, mapping, and monitoring. With expertise in LiDAR, satellite photogrammetry, and GIS, his company provides precise, innovative solutions. He has lectured at IRICEN, IIT Delhi, and pioneered Drone LiDAR in mining."
            isAlternate={true}
          />
          {/* <Speakercard
            pic={speak3}
            name="Shikhar Goel"
            text="Shikhar Goel is the CTO of GeeksforGeeks, leading the technical team and developing innovative products like GeeksforGeeks Courses, IDE, and Practice. A coder, competitive programmer, and mentor, he graduated from JIIT Noida in 2015 and joined GeeksforGeeks in 2016. He was recognized as a top young CTO in India."
            isAlternate={false}
          /> */}
        </div>
      </div>
    </div>
  )
}
