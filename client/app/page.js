"use client";

import Home from "./../component/Home/Home.jsx";
import Navbar from "./../component/Home/Navbar.jsx";
import About from "../component/About/About.jsx";
import Projects from "../component/Projects/Project.jsx";
import Skills from "../component/Skills/Skills.jsx";
import Education from "../component/Education/Education.jsx";
import Contact from "../component/Contact/Contact.jsx";
import Footer from "../component/Footer/Footer.jsx";
import Experience from "../component/Experience/Experience.jsx";
import Index from '../component/PreLoader/Index'; 
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove if not needed)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed

    // Clean up on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Index />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About id="about" />
          <Projects id="projects" />
          <Skills id="skills" />
          <Education id="educations" />
          <Experience id="experience" />
          {/* <Blogs id="blogs" /> */}
          <Contact id="contact" />
          <Footer />
        </div>
      )}
    </>
  );
}
