import React from "react";
import Card from "./Card";

const Employers = () => {
  return (
    <div className="bg-gray-100 py-8 border-t-2 border-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-1 items-center justify-between">
          <Card
            title="For Developers"
            desc="Browse our React jobs and start your career today"
            button="Browse Jobs"
            bgcolor="bg-blue-100"
            btncolor="bg-blue-500"
          />
          <Card
            title="For Employers"
            desc="List your job to find the perfect developer for the role"
            button="Add Job"
            bgcolor="bg-yellow-100"
            btncolor="bg-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Employers;
