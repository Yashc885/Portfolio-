"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-opacity-90 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <ul className="flex space-x-32">
            <li><a href="/" className="text-white hover:underline">Home</a></li>
            <li><a href="/about" className="text-white hover:underline">About</a></li>
            <li><a href="/blogs" className="text-white hover:underline">Blogs</a></li>
          </ul>
        </div>
        <div>
          <a href="#" className="text-white hover:underline">
            <img src="https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg"
             alt="Logo" 
             className="w-12 h-12 rounded-full shadow-xl" />
          </a>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-32">
            <li><a href="/techstack" className="text-white hover:underline">Tech-Stacks</a></li>
            <li><a href="/projects" className="text-white hover:underline">Projects</a></li>
            <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
