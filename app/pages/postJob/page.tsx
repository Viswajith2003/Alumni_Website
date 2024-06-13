"use client";
import React, { useState } from "react";

const PostJob = () => {
  // Define state variables for form fields
  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [applyLink, setApplyLink] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const jobDetails = {
      companyName,
      jobRole,
      experience,
      location,
      requiredSkills,
      aboutJob,
      contactDetails,
      applyLink,
    };

    // Handle form submission logic (e.g., send data to API or server)
    console.log("Job Details:", jobDetails);

    // Clear form fields after submission
    setCompanyName("");
    setJobRole("");
    setExperience("");
    setLocation("");
    setRequiredSkills("");
    setAboutJob("");
    setContactDetails("");
    setApplyLink("");
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
          {/* Left side of the div */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
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
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
          </div>

          {/* Right side of the div */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Required Skills
              </label>
              <input
                type="text"
                value={requiredSkills}
                onChange={(e) => setRequiredSkills(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                About this Job
              </label>
              <textarea
                value={aboutJob}
                onChange={(e) => setAboutJob(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Contact Details
              </label>
              <input
                type="text"
                value={contactDetails}
                onChange={(e) => setContactDetails(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Apply Link
              </label>
              <input
                type="text"
                value={applyLink}
                onChange={(e) => setApplyLink(e.target.value)}
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
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            <h1 className="text-xl font-bold w-20">Post</h1>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
