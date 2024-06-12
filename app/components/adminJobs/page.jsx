import React from "react";

const JobList = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Jobs List</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          New
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Company</th>
            <th className="border border-gray-300 px-4 py-2">Job Title</th>
            <th className="border border-gray-300 px-4 py-2">Posted By</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Your job list items go here */}
          {/* Example row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Company Name</td>
            <td className="border border-gray-300 px-4 py-2">Job Title</td>
            <td className="border border-gray-300 px-4 py-2">Posted By</td>
            <td className="border border-gray-300 px-4 py-2">
              <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                View
              </button>
              <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Edit
              </button>
              <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
