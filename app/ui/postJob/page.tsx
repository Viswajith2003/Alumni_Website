"use client";
import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const PostJob = () => {
  const [jobDetails, setJobDetails] = useState({
    companyName: "",
    aboutJob: "",
    jobRole: "",
    location: "",
    requiredSkill: "",
    courseSpecialization: "",
    salary: "",
    experience: "",
    contactInfo: "",
    companyWebsite: "",
    applyLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const jobId = uuidv4(); // Generate a unique ID for each job
    set(ref(db, "jobs/" + jobId), jobDetails)
      .then(() => {
        console.log("Job details added successfully");
      })
      .catch((error) => {
        console.error("Error adding job details: ", error);
      });

    setJobDetails({
      companyName: "",
      aboutJob: "",
      jobRole: "",
      location: "",
      requiredSkill: "",
      courseSpecialization: "",
      salary: "",
      experience: "",
      contactInfo: "",
      companyWebsite: "",
      applyLink: "",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h2 className="text-4xl font-semibold mb-10 text-blue-500">
        Post a Job Opportunity
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={jobDetails.companyName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company Website
              </label>
              <input
                type="url"
                name="companyWebsite"
                value={jobDetails.companyWebsite}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Job Role
              </label>
              <input
                type="text"
                name="jobRole"
                value={jobDetails.jobRole}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Experience (in Year)
              </label>
              <input
                type="text"
                name="experience"
                value={jobDetails.experience}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={jobDetails.location}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Salary Package
              </label>
              <input
                type="text"
                name="salary"
                value={jobDetails.salary}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Required Skills
              </label>
              <input
                type="text"
                name="requiredSkill"
                value={jobDetails.requiredSkill}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Course Specialization
              </label>
              <input
                type="text"
                name="courseSpecialization"
                value={jobDetails.courseSpecialization}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                About this Job
              </label>
              <textarea
                name="aboutJob"
                value={jobDetails.aboutJob}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full h-[120px]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Contact Details
              </label>
              <input
                type="text"
                name="contactInfo"
                value={jobDetails.contactInfo}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Apply Link
              </label>
              <input
                type="url"
                name="applyLink"
                value={jobDetails.applyLink}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-white border-blue-500 hover:text-blue-500 hover:border hover:rounded-md"
          >
            <h1 className="text-xl font-bold w-28">POST JOB</h1>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
