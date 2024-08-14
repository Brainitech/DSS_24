// import "../Speakers/speakers.css"
import Pic from "../../assets/me.png"

export default function Speakers() {
  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-black w-screen pb-8">
      <div className="flex flex-col items-center mb-20" id="SPEAKERS">
        <div className="pt-16 text-center text-4xl sm:text-5xl font-bold tracking-[-3px] font-krona bg-clip-text bg-gradient-to-r from-[#0055ff] to-[#04f8e8] text-transparent">Meet our speakers</div>
        <div className="h-1 w-[18rem] sm:w-[25rem] mt-2 rounded-sm bg-gradient-to-r from-[#0055ff] to-[#04f8e8]"></div>
      </div>
      <div className="alumini1">
        <div className="flex flex-col items-center justify-center">
          <div className="flex bg-slate-700 rounded-3xl m-8 p-5 max-w-max">
            <div className="m-2 justify-center items-center">
              <div className="text-white font-bold text-center text-2xl">Shikhar Goel</div>
              <div className="flex flex-col items-center justify-center sm:flex-row">
                <div className="m-2">
                  <img src={Pic} alt="" className="rounded-2xl w-50 h-45 sm:max-w-36 sm:h-60 sm:rounded-2xl" />
                </div>
                <div className="text-xs sm:text-base sm:px-9 tracking-wide text-justify text-white flex sm:max-w-3xl">
                  <p>
                    Shikhar Goel is the CTO of GeeksforGeeks, a platform that provides computer science resources and coding challenges. He leads the technical team and develops innovative products
                    and services for programmers and technology enthusiasts. He has launched GeeksforGeeks Courses, IDE, Practice, Mock Tests, and Articles. He is also a coder, a competitive
                    programmer, a mentor, a speaker, and a community leader. He graduated from JIIT Noida in 2015 and joined GeeksforGeeks in 2016. He is based in Noida, India. He has been recognized
                    as one of the top 10 young CTOs in India by GPL Awards in 2021. He is passionate about creating impactful products that can empower programmers and technology enthusiasts
                    worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-slate-700 rounded-3xl m-8 p-5 max-w-max">
            <div className="m-2 justify-center items-center">
              <div className="text-white font-bold text-center text-2xl">Shikhar Goel</div>
              <div className="flex flex-col items-center justify-center sm:flex-row">
                <div className="text-xs sm:text-base sm:px-9 tracking-wide text-justify text-white flex sm:max-w-3xl">
                  <p>
                    Shikhar Goel is the CTO of GeeksforGeeks, a platform that provides computer science resources and coding challenges. He leads the technical team and develops innovative products
                    and services for programmers and technology enthusiasts. He has launched GeeksforGeeks Courses, IDE, Practice, Mock Tests, and Articles. He is also a coder, a competitive
                    programmer, a mentor, a speaker, and a community leader. He graduated from JIIT Noida in 2015 and joined GeeksforGeeks in 2016. He is based in Noida, India. He has been recognized
                    as one of the top 10 young CTOs in India by GPL Awards in 2021. He is passionate about creating impactful products that can empower programmers and technology enthusiasts
                    worldwide.
                  </p>
                </div>
                <div className="m-2">
                  <img src={Pic} alt="" className="rounded-2xl w-50 h-45 sm:max-w-36 sm:h-60 sm:rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex bg-slate-700 rounded-3xl m-8 p-5 max-w-max">
            <div className="m-2 justify-center items-center">
              <div className="text-white font-bold text-center text-2xl">Shikhar Goel</div>
              <div className="flex flex-col items-center justify-center sm:flex-row">
                <div className="m-2">
                  <img src={Pic} alt="" className="rounded-2xl w-50 h-45 sm:max-w-36 sm:h-60 sm:rounded-2xl" />
                </div>
                <div className="text-xs sm:text-base sm:px-9 tracking-wide text-justify text-white flex sm:max-w-3xl">
                  <p>
                    Shikhar Goel is the CTO of GeeksforGeeks, a platform that provides computer science resources and coding challenges. He leads the technical team and develops innovative products
                    and services for programmers and technology enthusiasts. He has launched GeeksforGeeks Courses, IDE, Practice, Mock Tests, and Articles. He is also a coder, a competitive
                    programmer, a mentor, a speaker, and a community leader. He graduated from JIIT Noida in 2015 and joined GeeksforGeeks in 2016. He is based in Noida, India. He has been recognized
                    as one of the top 10 young CTOs in India by GPL Awards in 2021. He is passionate about creating impactful products that can empower programmers and technology enthusiasts
                    worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
