"use client";
import React, { useState, useEffect } from "react";
import data from "./data"; // Adjust the import path as necessary

const AlumniList = () => {
  // Define state variables for alumni list
  const [alumniList, setAlumniList] = useState([]);

  // Fetch alumni data from data.js
  useEffect(() => {
    setAlumniList(data);
  }, []);

  // Function to handle view action
  const handleViewAlumni = (index) => {
    const alumni = alumniList[index];
    alert(
      `Name: ${alumni.name}\nPassout Year: ${alumni.passoutYear}\nVerified: ${
        alumni.verified ? "Yes" : "No"
      }`
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Alumni List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              No
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Avatar
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Passout Year
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Status
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {alumniList.map((alumni, index) => (
            <tr key={alumni.id}>
              <td className="px-6 py-4 border-b border-gray-300">
                {index + 1}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                <img
                  src={alumni.avatar}
                  alt={alumni.name}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {alumni.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {alumni.passoutYear}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {alumni.verified ? "Verified" : "Not Verified"}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => handleViewAlumni(index)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumniList;
