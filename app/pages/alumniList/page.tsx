"use client"; // Correctly specify this as a client component

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import alumniData from "./data"; // Import the alumni data from the separate file

const AlumniList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAlumni = alumniData.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1200x300')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-white text-4xl font-bold">Alumni List</h1>
        </div>
      </div>

      <div className="flex justify-center items-center my-8">
        <div className="flex border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border-none outline-none"
          />
          <button className="p-2 bg-blue-500 text-white">
            <FaSearch className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredAlumni.map((alumnus) => (
          <div key={alumnus.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={alumnus.avatar}
                alt={alumnus.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{alumnus.name}</h2>
                <p className="text-gray-500">
                  Passout Year: {alumnus.passoutYear}
                </p>
                <p
                  className={`text-sm font-semibold ${
                    alumnus.verified ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {alumnus.verified ? "Verified" : "Not Verified"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniList;
