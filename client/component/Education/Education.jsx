"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { educations } from "@/utils/Data/Education";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "@/component/GlowCard";
import Section from "@/Utils/Assets/section.svg"
import Blur from "@/Utils/Assets/blur.svg"
function Education() {
  return (
    <div id="education" className="py-4 pl-10 pr-10 relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={Section}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl font-semibold rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
      <div className="flex justify-center items-start">
            {/* <div className="w-3/4 h-3/4">
            <Image
                  src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
                  alt="education"
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
            </div> */}
          </div>
        <div>
          <div className="flex flex-col gap-6">
            {educations.map(education => (
              <GlowCard key={education.id} identifier={`education-${education.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src={Blur}
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {education.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {education.title}
                      </p>
                      <p className="text-sm sm:text-base">{education.institution}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
