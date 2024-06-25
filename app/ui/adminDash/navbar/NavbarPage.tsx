import React from "react";
import Link from "next/link";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function NavbarPage() {
  // This is a placeholder. In a real application, you'd manage this state elsewhere
  const [sidebarToggle, setSidebarToggle] = React.useState(false);

  return (
    <div className="bg-slate-400 px-4 py-3 flex min-h-20 justify-between items-center w-full ">
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
            <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
              <ul className="py-4 text-md text-black grid grid-rows-3 gap-2">
                <li className="hover:bg-blue-500 hover:text-white w-24 mx-auto rounded-md">
                  <Link href="/profile">
                    <p>Profile</p>
                  </Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-24 mx-auto rounded-md">
                  <Link href="/settings">
                    <p>Setting</p>
                  </Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-24 mx-auto rounded-md">
                  <Link href="/ui/welcome">
                    <p onClick={() => localStorage.clear()}>Logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
