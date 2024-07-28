import React from 'react';
import Image from "next/image";
import Section from "../../Utils/Assets/section.svg";
import Blur from "../../Utils/Assets/blur.svg";
import blogsData from "./Content.js";
import Marquee from "react-fast-marquee";
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const Blogs = () => {
  return (
    <div id="blogs" className="relative z-50 px-10 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl font-semibold rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="mt-10 overflow-hidden ">
        <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left" >
          {blogsData.map(blog => (
            <div key={blog.id} className="max-w-md mx-auto hover:border-[#464c6a] hover:ring-2 hover:ring-violet-500  overflow-hidden bg-[#1b203e] rounded-lg shadow-md ml-4">
              <a href={blog.url} className="block">
                <div className="border border-[#1d293a] hover:border-[#464c6a] hover:ring-2 hover:ring-violet-500 transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
                  <Image
                    className="w-full h-64 object-cover"
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={200}
                    height={200}
                  />
                  <div className="absolute top-0 right-0">
                    <div className="w-32 h-8 absolute top-4 -right-8"></div>
                  </div>
                </div>
                <div className="p-4">
                  <p className='mt-2 text-lg sm:text-sm  text-[#16f2b3]'>
                    {`${blog.hastag} `}
                  </p>
                  <h3 className="my-2 mt-4 lg:my-3 cursor-pointer text-3xl  uppercase text-white sm:text-xl font-semibold  hover:text-violet-500">{blog.title}</h3>
                  <div className="">
                    <p className='mt-4 text-lg sm:text-md text-[#16f2b3]'>
                      {`${blog.min} Min Read`}
                    </p>
                  </div>
                  <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3 justify mt-4">
                    {truncateText(blog.description, 200)} 
                  </p>
                </div>
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Blogs;
