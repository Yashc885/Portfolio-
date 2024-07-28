"use client";

import Home from "./../component/Home/Home.jsx";
import Navbar from "./../component/Home/Navbar.jsx";
import About from "../component/About/About.jsx";
import Projects from "../component/Projects/Projects.jsx";
import Skills from "../component/Skills/Skills.jsx";
import Education from "../component/Education/Education.jsx";
import Blogs from "../component/Blogs/Blogs.jsx";
import Contact from "../component/Contact/Contact.jsx";
import Footer from "../component/Footer/Footer.jsx";
import Experience from "../component/Experience/Experience.jsx";
import PreLoader from "../component/PreLoader/PreLoader.jsx";
import React, { useState, useEffect } from 'react';
import Index from '../component/PreLoader/Index'; 

export default function Page() {  // Rename to Page
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
            {/* <Blogs id="blogs" /> */}
            <Contact id="contact" />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
