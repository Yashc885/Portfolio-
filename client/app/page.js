"use client";
import Home from "@/component/Home/Home";
import Navbar from "@/component/Home/Navbar";
import About from "@/component/About/About";
import Projects from "@/component/Projects/Projects";
import Skills from "@/component/Skills/Skills";
import Education from "@/component/Education/Education";
import Blogs from "@/component/Blogs/Blogs"
export default function page() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About id="about" />
      <Projects id="projects"/>
      <Skills id="skills" />
      <Education id="educations" />
      <Blogs id="blogs" />
    </div>
  );
}
