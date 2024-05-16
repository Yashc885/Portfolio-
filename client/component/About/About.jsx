"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { personal } from "@/utils/Data/personal";
import Image from "next/image";
import Profile from "@/Utils/Assets/Profile.png";

function AboutSection() {
  return (
    <div id="about" className=" pl-10 pr-10 my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-lg  mb-5 text-[#16f2b3] text-2xl font-semibold uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personal.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={Profile}
            width={280}
            height={280}
            alt="yash"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;