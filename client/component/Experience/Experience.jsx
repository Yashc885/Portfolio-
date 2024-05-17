import React from 'react';
import ExperienceCard from "@/component/Experience/ExperienceCard";
import Image from "next/image";
import Section from "@/Utils/Assets/section.svg";
import experienceData from "@/component/Experience/Content";

const Experience = () => {
  return (
    <div id="experience" className="relative z-50 pl-10 pr-10 border-t my-12 lg:my-24 border-[#25213b]">
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
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Check if experienceData is defined before mapping */}
      {experienceData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              name={experience.name}
              image={experience.image}
              role={experience.role}
              joinedDate={experience.joinedDate}
              description={experience.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
