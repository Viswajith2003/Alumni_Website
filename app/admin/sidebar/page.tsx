import React from "react";
import { FaHome } from "react-icons/fa";

export default function Sidebar({ sidebarToggle }) {
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div className=" mb-6 flex items-center justify-center">
        <h1 className="text-2xl text-white font-bold mt-5">ADMIN PANEL</h1>
      </div>

      <div className="flex items-center justify-center bg-black border-2 border-white p-2">
        <h1 className="text-[16px] text-gray-500 font-bold">
          Alumni Tracking System
        </h1>
      </div>

      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
            <FaHome className="inline-block w-6 h-6 mr-2 mt-2" />
            <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
            <FaHome className="inline-block w-6 h-6 mr-2 mt-2" />
            <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
            <FaHome className="inline-block w-6 h-6 mr-2 mt-2" />
            <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
            <FaHome className="inline-block w-6 h-6 mr-2 mt-2" />
            <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 flex gap-2">
            <FaHome className="inline-block w-6 h-6 mr-2 mt-2" />
            <h2 className="text-xl font-semibold mt-2">Home</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}
