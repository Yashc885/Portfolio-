import React from 'react';
const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };


const ExperienceCard = ({ name, image ,role, joinedDate, description }) => {
  return (
    <div className=" sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl border-2 border-black  rounded-lg text-gray-900">
      <div className="mx-auto w-40 h-40 relative -mt-20 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-40 w-40 rounded-full"
         src={image}
          alt={name}
           />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold text-2xl sm:text-4xl text-[#32325d] ">{name}</h2>
        <h3 className="ttext-xl sm:text-3xl text-[#32325d]">{role}</h3>
        <h4 className="text-gray-500 ">{joinedDate}</h4>
      </div>
      <div className="p-4 mx-8 mt-2 text-justify">
        <p>
        {truncateText(description, 500)} 
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
