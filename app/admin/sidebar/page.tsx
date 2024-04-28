import React from "react";
import {FaHome} from 'react-icons/fa'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className="tex-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
              <FaHome className="inline-block w-6 h-6 mr-2 mt-2"/>
              <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
              <FaHome className="inline-block w-6 h-6 mr-2 mt-2"/>
              <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
              <FaHome className="inline-block w-6 h-6 mr-2 mt-2"/>
              <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
              <FaHome className="inline-block w-6 h-6 mr-2 mt-2"/>
              <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
              <FaHome className="inline-block w-6 h-6 mr-2 mt-2"/>
              <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}
