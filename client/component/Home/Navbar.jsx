
"use client";
"use client";
import React, { useState } from 'react';
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent pl-10 pr-10">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl sm:text-lg font-bold sm:text-semibold " >
            Yash
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 13H5v-2h14v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-1 md:border-0 md:opacity-100 w-full md:w-auto`}
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
              onClick={closeMenu} // Add this line to close the menu when a link is clicked
            >
              <div className="text-sm text-white transition-colors duration-300 pr-10 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
<Link
  className="block px-4 py-2 no-underline outline-none hover:no-underline"
  href="/#projects"
>
  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
    PROJECTS
  </div>
</Link>
</li>
<li>
<Link
  className="block px-4 py-2 no-underline outline-none hover:no-underline"
  href="/#skills"
>
  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
    SKILLS
  </div>
</Link>
</li>
<li>
<Link
  className="block px-4 py-2 no-underline outline-none hover:no-underline"
  href="/#education"
>
  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
    EDUCATION
  </div>
</Link>
</li>
<li>
<Link
  className="block px-4 py-2 no-underline outline-none hover:no-underline"
  href="/#blogs"
>
  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
    BLOGS
  </div>
</Link>
</li>
<li>
<Link
  className="block px-4 py-2 no-underline outline-none hover:no-underline"
  href="/experience"
>
  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
    EXPERIENCE
  </div>
</Link>
</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



