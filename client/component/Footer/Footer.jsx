"use client";
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from "@/utils/Data/personal";

const Footer = () => {
  return (
    <div className="mx-auto pl-10 pr-10">
      <div className="relative border-t border-[#353951] text-white overflow-hidden group">
        <div className="absolute inset-0 border-4 border-double border-pink-500 mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute inset-0 border-8 border-double border-violet-500 mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-lg justify-self-end mb-4 lg:mb-0">
            <p>Developed By <span className="text-[#16f2b3]">@Yash Choudhary</span></p>
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-colors duration-300 hover:text-[#16f2b3]">
              <FaGithub size={24} />
            </a>
            <a href={personal.linkedIn} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-colors duration-300 hover:text-[#16f2b3]">
              <FaLinkedin size={24} />
            </a>
            <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-colors duration-300 hover:text-[#16f2b3]">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
