import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <div>
      <nav className="bg-indigo-700 border-indigo-700 text-white">
        <div className="mx-auto max-w-screen-lg h-24">
          <div className="flex flex-1 items-center justify-between">
            <Link to="/" className="flex items-center mx-10">
              <img
                src="/logo.png"
                alt=""
                className="h-16 mt-4 focus:outline-none"
              />
              <span className="ml-4 text-xl font-semibold mt-4">
                React Jobs
              </span>
            </Link>
            <div className="flex flex-row space-x-6 mt-4 text-lg font-medium px-10">
              <Link
                to="/"
                onClick={() => setActive("home")}
                className={`px-3 py-2 rounded-md ${
                  active === "home"
                    ? "bg-black text-white"
                    : "hover:text-gray-300"
                }`}
              >
                Home
              </Link>
              <Link
                to="/jobs"
                onClick={() => setActive("jobs")}
                className={`px-3 py-2 rounded-md focus:outline-none ${
                  active === "jobs"
                    ? "bg-black text-white"
                    : "hover:text-gray-300"
                }`}
              >
                Jobs
              </Link>
              <Link
                to="/add"
                onClick={() => setActive("add")}
                className={`px-3 py-2 rounded-md focus:outline-none ${
                  active === "add"
                    ? "bg-black text-white"
                    : "hover:text-gray-300"
                }`}
              >
                Add Jobs
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
