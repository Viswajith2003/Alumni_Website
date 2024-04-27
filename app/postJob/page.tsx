import React from "react";

export default function PostJob() {
  return (
    <div className="bg-[#edeced] h-auto flex py-10 justify-center items-center ">
      <div className="bg-white w-[560px] rounded-xl p-4 flex flex-col justify-center items-center gap-8">
        <h1 className=" font-bold text-blue-700 text-3xl mt-5">
          JOB-DESCRIPTION
        </h1>
        <input
          type="text"
          placeholder="Company Name"
          className="border-2 border-black p-3 rounded-xl w-[400px] mt-5"
        />
        <input
          type="text"
          placeholder="Company Website"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="text"
          placeholder="Job Role/Profile"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="text"
          placeholder="Course-Specification"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="number"
          placeholder="Experience(in years)"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="text"
          placeholder="Location"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="text"
          placeholder="Required Skills"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="number"
          placeholder="Salary"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="text"
          placeholder="About This Job"
          className="border-2 border-black p-3 rounded-xl w-[400px] h-[200px]"
        />
        <input
          type="text"
          placeholder="Contact Details"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />
        <input
          type="text"
          placeholder="Apply Link"
          className="border-2 border-black p-3 rounded-xl w-[400px]"
        />

        <button className="mt-5 h-[50px] w-[400px] bg-blue-700 p-2 rounded-xl text-white font-bold mb-6">
          <h1 className="text-2xl font-bold">Post Now </h1>
        </button>
      </div>
    </div>
  );
}
