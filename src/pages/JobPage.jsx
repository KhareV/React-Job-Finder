import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Discuss } from "react-loader-spinner";
const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs?id=${id}`);
        const data = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setJob(data);
      } catch (e) {
        console.log("Error fetching job details:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">Job not found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Back to Job Listings */}
      <div className="bg-white max-w-screen-lg mx-auto py-4">
        <div className="flex items-center">
          <FaArrowLeft className="mr-2 text-2xl text-gray-600" />
          <Link
            to="/jobs"
            className="text-indigo-600 text-xl transform transition-all duration-300 hover:ml-2 focus:out-of-range: "
          >
            Back to Job Listings
          </Link>
        </div>
      </div>

      {/* Job Details */}
      <div className="bg-indigo-50 py-8  min-h-svh">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 duration-300">
            {/* Job Header */}
            <div className="mb-8">
              <h1 className="text-sm text-gray-400 uppercase">
                {job[0].status}
              </h1>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {job[0].title}
              </h1>
              <div className="flex items-center text-indigo-600">
                <FaLocationDot className="mr-2 text-red-600 text-xl" />
                <p className="text-lg">{job[0].location}</p>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <h2 className="text-lg text-indigo-600 font-semibold mb-2">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed">{job[0].desc}</p>
            </div>

            {/* Salary */}
            <div>
              <h2 className="text-lg text-indigo-600 font-semibold mb-2">
                Salary
              </h2>
              <p className="text-green-600 text-xl font-semibold">
                {job[0].salary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
