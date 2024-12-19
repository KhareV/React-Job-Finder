import React from "react";
import Hero from "../components/Hero";
import Employers from "../components/Employers";
import JobIntro from "../components/JobIntro";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Employers />
      <JobIntro />
    </div>
  );
};

export default Homepage;
