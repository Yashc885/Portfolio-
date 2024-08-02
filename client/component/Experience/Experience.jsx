import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import React from 'react';
import { FaBriefcase } from 'react-icons/fa'; 
import Main from "../../Utils/Assets/card.png";
import Image from "next/image";
import lottieFile from '../../public/lottie/study.json';
import Animation from "./../Animation.jsx";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const fontStyle = {
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <div id="experience" className="relative z-50 px-4 md:px-10 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={Main}
        alt="Hero"
        layout="fill"
        className="absolute top-0 -z-10 object-cover"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full md:w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full md:block hidden" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 h-[2px] bg-[#1a1443] md:block hidden"></span>
          <span className="bg-[#1a1443] text-white p-2 px-4 text-lg md:text-2xl font-semibold rounded-md">
            Experiences
          </span>
          <span className="w-16 h-[2px] bg-[#1a1443] md:block hidden"></span>
        </div>
      </div>
      <section className="mt-4 md:mt-8">
        <div className="relative max-w-full md:max-w-6xl mx-auto">
          <div className="absolute w-1 bg-white top-0 bottom-0 left-1/2 transform -translate-x-1/2 md:block hidden"></div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mb-8 md:mb-0 md:relative md:pr-6" >
              <Animation lottieFile={lottieFile} className="absolute top-3 -right-5 w-24 h-24 md:w-32 md:h-32" />
              <div className="bg-gradient-to-r from-transparent via-violet-500 to-transparent p-4 rounded-lg text-white ml-0 md:ml-12 hover:border-2 border-[#16f2b3]" style={fontStyle} data-aos="fade-up">
                <div className="absolute w-6 h-6 bg-white border-4 border-[#16f2b3] rounded-full top-3 -right-7 text-xl flex items-center justify-center text-indigo-900 md:block hidden">
                  <FaBriefcase className="w-4 h-4" /> 
                </div>
                <div className="pl-4 ">
                  <div className="text-lg md:text-xl font-extrabold">Msit Alumni Association</div>
                  <div className="mt-2">
                    <h3 className="text-base md:text-lg font-bold">Software Engineer</h3>
                    <p className="text-sm md:text-base text-[#16f2b3] ">Jan 2023 - August 2023</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 left-[-2.5rem] border-t-10 border-transparent border-[#16f2b3] border-l-10 border-solid md:block hidden"></div>
              <div className="py-8 md:py-16"></div>
              <div className="bg-gradient-to-r from-transparent via-violet-500 to-transparent p-4 rounded-lg text-white ml-0 md:ml-12 hover:border-2 border-[#16f2b3] " style={fontStyle} data-aos="fade-up">
                <div className="absolute w-6 h-6 bg-white border-4 border-[#16f2b3] rounded-full top-4 -right-7 text-xl flex items-center justify-center text-indigo-900 md:block hidden">
                  <FaBriefcase className="w-4 h-4" /> 
                </div>
                <div className="pl-4">
                  <div className="text-lg md:text-xl font-extrabold">AccelEdge</div>
                  <div className="mt-2">
                    <h3 className="text-base md:text-lg font-bold">Full Stack Developer</h3>
                    <p className="text-sm md:text-base text-[#16f2b3]">July 2024 - present</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 left-[-2.5rem] border-t-10 border-transparent border-[#16f2b3] border-l-10 border-solid md:block hidden"></div>
            </div>

            {/* Right Side */}
            <div className="py-8 md:py-32 flex-1 mb-8 md:mb-0 md:relative md:pl-2">
              <Animation lottieFile={lottieFile} className="absolute top-32 -left-5 w-24 h-24 md:w-32 md:h-32" />
              <div className="bg-gradient-to-r from-transparent via-violet-500 to-transparent  p-4 rounded-lg text-white ml-0 md:ml-4 hover:border-2 border-[#16f2b3] " style={fontStyle} data-aos="fade-up">
                <div className="absolute w-6 h-6 bg-white border-4 border-[#16f2b3] rounded-full top-4 -left-11 text-xl flex items-center justify-center text-indigo-900 md:block hidden">
                  <FaBriefcase className="w-4 h-4" /> 
                </div>
                <div className="pl-4">
                  <div className="text-lg md:text-xl font-extrabold">Ailifebot</div>
                  <div className="mt-2">
                    <h3 className="text-base md:text-lg font-bold">Frontend Engineer</h3>
                    <p className="text-sm md:text-base text-[#16f2b3]">May 2024 - July 2024</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-[-2.5rem] border-t-10 border-transparent border-r-yellow-600 border-r-10 border-solid md:block hidden"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
