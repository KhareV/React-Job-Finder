import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaTriangleExclamation className="text-yellow-400 mb-4 text-9xl" />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <a
          href="/"
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          Go Back
        </a>
      </section>
    </div>
  );
};

export default NotFound;
