"use client";
import Home from "@/component/Home/Home";
import Navbar from "@/component/Home/Navbar";
import About from "@/component/About/About";
import Projects from "@/component/Projects/Projects";
import Skills from "@/component/Skills/Skills";
import Education from "@/component/Education/Education";
export default function page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
    </>
  );
}
