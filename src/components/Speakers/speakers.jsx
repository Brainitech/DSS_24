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
        <div className="flex justify-center">
          <div className="flex bg-slate-700 rounded-3xl m-8 p-5 max-w-max">
            <div className="m-2 justify-center items-center">
              <div className="text-white font-bold text-center text-2xl">Shikhar Goel</div>
              <div className="flex flex-col items-center justify-center sm:flex-row">
                <div className="m-2">
                  <img src={Pic} alt="" className="rounded-3xl w-60 h-60 sm:max-w-36 sm:h-60 sm:rounded-2xl" />
                </div>
                <div className="px-9 tracking-wide text-justify text-white flex max-w-3xl">
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

          {/* <div className="w-[80%] justify-between flex">
                <div className="bg-slate-800 align h-fit p-5 rounded-[50p] flex md:flex-row-reverse w-fit drop-shadow-2xl">
                    
                    <div className="flex flex-col items-center justify-center w-[100%]">
                        <div className="name2 m-5 w-fit">Neeraj Kumar</div>
                        <div className="text-about text-justify text-white">
                            <p>
                                Neeraj is responsible for quality best practices and
                                governance. He ensures that individuals and teams across
                                the business have the skills, tools and processes needed
                                to ensure exceptional ,quality for all customer
                                engagements.  An engineering graduate of the prestigious
                                BIT, Mesra, Neeraj later completed the senior management
                                programme from India’s top-ranked IIM, Ahmedabad. He
                                joined ADROSONIC as a Manager Consultant in 2014 and has
                                been a pillar for the organization and for customers.
                                Neeraj is passionate about learning new technologies and
                                identifying new business strategies. He supports girls’
                                education in India and contributes to the
                                Nanhi Kali Project.
                            </p>
                        </div>
                    </div>
                    <div className="image-about-parent p-5 md:w-auto w-[100%] lg:w-[50%]">
                        <img
                            src={Pic}
                            alt=""
                            className="w-[70%] rounded-[50%] ml-24 shadow-xl image-speaker"
                        />
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  )
}
