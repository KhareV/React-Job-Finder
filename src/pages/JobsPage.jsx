import React from "react";
import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import { Discuss } from "react-loader-spinner";
const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 3000));

        setJobs(data);
      } catch (e) {
        console.error("Error fetching jobs:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <div className="bg-indigo-100 py-8 min-h-lvh">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-9 text-blue-600">
              Browse Jobs
            </h1>
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
                  {jobs.map((job, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
