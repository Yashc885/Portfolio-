"use client";
import React from 'react'
import AllProjects from "@/component/AllProjects/AllProjects";
import Navbar from "@/component/Home/Navbar";
import Footer from "@/component/Footer/Footer";
const page = () => {
  return (
    <div className="py-4">
    <Navbar />
    <div className="pl-10 pr-10 sm:pl-2 sm:pr-2 ">
        <AllProjects />
    </div>   
    <div className="py-4">
        <Footer />
    </div>
    </div>
  )
}

export default page