"use client";
import Home from "@/component/Home/Home";
import Navbar from "@/component/Home/Navbar";
import About from "@/component/About/About";
import Projects from "@/component/Projects/Projects";
import Skills from "@/component/Skills/Skills";
import Education from "@/component/Education/Education";
import Blogs from "@/component/Blogs/Blogs";
import Contact from "@/component/Contact/Contact";
import Footer from "@/component/Footer/Footer";
import Experience from "@/component/Experience/Experience";
import PreLoader from "@/component/PreLoader/PreLoader";

import React, { useState, useEffect } from 'react';
import Index from '@/component/PreLoader/Index'; 

export default function page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Index />
      ) : (
        <div>
        <div className="">
      <Navbar />
      <Home />
      <About id="about" />
      <Projects id="projects"/>
      <Skills id="skills" />
      <Education id="educations" />
      <Experience id="experience" />
      <Blogs id="blogs" />
      <Contact id="contact" />
      <Footer />
    </div>
        </div>
      )}
    </>
  );
}



