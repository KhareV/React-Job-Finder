import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";

const JobCard = ({ id, status, title, desc, salary, location }) => {
  const [readfull, setReadfull] = useState(false);
  const partialDesc = desc.slice(0, 200);

  return (
    <div className="bg-white border-2 rounded-3xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex flex-col gap-2 w-96 justify-between">
        <p className="text-sm text-gray-600">{status}</p>
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="overflow-hidden">
          <p
            className="text-gray-700 text-sm transition-all duration-300 ease-in-out"
            style={{
              maxHeight: readfull ? "1000px" : "100px",
              opacity: 1,
            }}
          >
            {readfull ? desc : `${partialDesc}...`}
          </p>
        </div>
        <a
          href=""
          className="text-blue-500 transform transition-all duration-300 hover:underline focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            setReadfull(!readfull);
          }}
        >
          {readfull ? "Show Less" : "More..."}
        </a>
        <p className="text-green-600 font-semibold">{salary}</p>
        <hr className="my-2" />
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <IoLocation className="text-red-600 text-3xl" />
            <span className="text-sm">{location}</span>
          </div>
          <a
            href={`/jobs/${id}`}
            className="text-white text-base px-6 py-3 bg-blue-500 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
