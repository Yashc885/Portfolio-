import { projectsData } from './projects-data-.jsx';
import ProjectCard from './Card.jsx';
import { GoArrowRight } from "react-icons/go";

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 ">
        <div className="text-center">
            <div className="items-center justify-center">
            <a href="projects"
                className= "animate-bounce focus:animate-none hover:animate-none inline-flex py-4 text-lg  font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                <div className="flex">
                  <span className= "ml-2">View All </span>
                  <div className="text-center text-lg ">
                  <GoArrowRight />
                </div>
                </div>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;