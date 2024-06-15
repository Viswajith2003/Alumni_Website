import React from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar({ sidebarToggle, setSidebarToggle }) {
  return (
    <div className="bg-slate-400 px-4 py-4 flex h-20 justify-between items-center shadow">
      <div className="flex items-center text-xl">
        <FaBars
          className="me-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black mt-1">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          />
        </div>
        <div>
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative">
          <button className="group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
              <ul className="py-2 text-sm text-gray-950">
                <li>
                  <a href="">Profile</a>
                </li>
                <li>
                  <a href="">Setting</a>
                </li>
                <li>
                  <a href="">Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
