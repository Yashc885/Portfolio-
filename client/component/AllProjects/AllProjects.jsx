import React from 'react';
import Image from 'next/image';
import Section from '@/Utils/Assets/section.svg';
import projectData from '@/component/AllProjects/Content';
import { GoArrowRight } from "react-icons/go";


const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const AllProjects = () => {
  return (
    <div>
      <div id="experience" className="relative z-50 border-t border-[#25213b]">
        <Image
          src={Section}
          alt="Hero"
          width={1572}
          height={795}
          className="absolute top-0 -z-10"
        />

        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl lg:text-2xl font-semibold rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="md:pl-4 md:pr-4 lg:pl-4 lg:pr-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 lg:px-0">
            {projectData.map((project) => (
              <div key={project.id} className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg shadow-xl overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                  width={100}
                  height={100}
                />
                <div className="p-2 sm:p-4">
                  <div className="text-center mb-2">
                    <h2 className="text-xl lg:text-2xl text-[#16f2b3] font-bold">{project.title}</h2>
                  </div>
                  <div className="mb-2">
                    <h2 className="text-md lg:text-lg text-white font-semibold">Tech Stack:</h2>
                    <p className="text-gray-400 text-md">{project.techStack.join(', ')}</p>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-md lg:text-lg text-white font-semibold">Description:</h2>
                    <p className="text-gray-400 text-md">{truncateText(project.description, 250)}</p>
                  </div>
                  <div className="mb-2">
                    <div className="relative inline-flex group text-center">
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <a
                        href={project.code}
                        title={project.title}
                        className="relative inline-flex items-center justify-center px-6 py-2 text-md lg:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
