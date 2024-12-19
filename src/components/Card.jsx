import React from "react";

const Card = ({
  title,
  desc,
  button,
  bgcolor = "bg-gray-100",
  btncolor = "bg-blue-500",
}) => {
  return (
    <div
      className={`${bgcolor} border-2 rounded-xl px-14 py-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <div className="flex flex-col h-full justify-start">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{desc}</p>
        </div>
        <div className="mt-4">
          <a
            href="/jobs"
            className={`inline-block px-4 py-2 rounded-md text-white ${btncolor} hover:bg-opacity-80 transform transition-all hover:shadow-lg hover:scale-110`}
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
