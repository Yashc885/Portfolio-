"use client";
import React, { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

const SideComponent = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkRequired = () => {
    setError({ ...error, required: !(input.email && input.message && input.name) });
  };

  const handleSendMail = () => {
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    }

    if (!isValidEmail(input.email)) {
      setError({ ...error, email: true });
      return;
    }
    toast.success('Message sent successfully!');
    setInput({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact Me ! 
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-md  text-gray-400 justify ">
          If you have any questions , please do not hesitate to contact me. I am open to any work opportunities that align with my skills sets and interests , even I am up to lesrn any new technologies if required.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required
              onBlur={checkRequired}
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required
              value={input.email}
              onBlur={() => setError({ ...error, email: !isValidEmail(input.email) })}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            {error.email &&
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required
              onBlur={checkRequired}
              rows="4"
              value={input.message}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full hover:border-white  bg-gradient-to-r from-pink-400 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              onClick={handleSendMail}
            >
              <span>Send Message</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
