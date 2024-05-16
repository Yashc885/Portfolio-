import React from 'react';
import Image from 'next/image';
import Section from '@/Utils/Assets/section.svg';
import projectData from '@/component/Projects/Content';
import { GoArrowRight } from "react-icons/go";


const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const Projects = () => {
  return (
    <div>
      <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl font-semibold rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="pl-10 pr-10">
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
                <div className="p-4">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl lg:text-3xl  sm:text-lg text-[#16f2b3] font-bold">{project.title}</h2>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-lg lg:text-xl  sm:text-md text-white font-semibold">Tech Stack:</h2>
                    <p className="text-gray-400 text-lg  sm:text-md ">{project.techStack.join(', ')}</p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-lg lg:text-xl  sm:text-md text-white font-semibold">Description:</h2>
                    <p className="text-gray-400  text-lg  sm:text-md "> {truncateText(project.description, 400)} </p>
                  </div>
                  <div className="mb-4">
                  <div className="relative inline-flex group text-center">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <a
                        href={project.code}
                        title={project.title}
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
  <div className="py-10 ">
        <div className="text-center">
            <div className="items-center justify-center">
            <a href="projects"
                class="animate-bounce focus:animate-none hover:animate-none inline-flex py-4 text-lg  font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                <div className="flex">
                  <span class="ml-2">View All </span>
                  <div className="text-center text-lg ">
                  <GoArrowRight />
                </div>
                </div>
            </a>
            </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Projects;
