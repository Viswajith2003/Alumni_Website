"use client"; // Correctly specify this as a client component

import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

const alumniData = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/50",
    name: "John Doe",
    passoutYear: 2020,
    verified: true,
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/50",
    name: "Jane Smith",
    passoutYear: 2018,
    verified: false,
  },
  // Add more alumni data here
];

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
            <SearchIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredAlumni.map((alumnus) => (
          <div
            key={alumnus.id}
            className="bg-white shadow-md rounded-lg m-4 p-6 w-80"
          >
            <div className="flex items-center">
              <img
                src={alumnus.avatar}
                alt={alumnus.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{alumnus.name}</h2>
                <p>Passout Year: {alumnus.passoutYear}</p>
                <p>Status: {alumnus.verified ? "Verified" : "Not Verified"}</p>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniList;
