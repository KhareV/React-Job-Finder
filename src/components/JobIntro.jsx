import React from "react";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Discuss } from "react-loader-spinner";
const JobIntro = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        console.error("Error fetching jobs:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const recentJobs = jobs.slice(0, 3);
  return (
    <div className="bg-indigo-100 py-8">
      <div className="max-w-screen-2xl max-h-svh mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-9 text-blue-600">Recent Jobs</h1>
          <div className="flex flex-wrap items-center justify-center gap-9">
            {loading ? (
              <h2>
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
              </h2>
            ) : (
              <>
                {recentJobs.map((job, index) => (
                  <JobCard
                    key={index}
                    id={job.id}
                    status={job.status}
                    title={job.title}
                    desc={job.desc}
                    salary={job.salary}
                    location={job.location}
                  />
                ))}
              </>
            )}
          </div>
          <Link to="/jobs">
            <button className="mt-16 px-24 py-6 border-2 bg-blue-600 text-white rounded-2xl transform transition-all duration-300 hover:shadow-2xl hover:scale-110 text-lg">
              View All Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobIntro;
