"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../backend/AuthContext";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

import { signOut } from "firebase/auth";
import { auth } from "../../backend/firebase/config";

export default function HomeNav() {
  const [menu, setMenu] = useState(false);
  const [jobsMenu, setJobsMenu] = useState(false); // To handle dropdown visibility

  const handleChange = () => {
    setMenu(!menu);
  };

  const toggleJobsMenu = () => {
    setJobsMenu(!jobsMenu);
  };
  // const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("user");
    localStorage.clear();
    sessionStorage.clear();
    // dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="fixed w-full z-40 ">
      <div className="flex flex-row justify-between p-6 md:px-32 px-5 bg-darkBackground text-white bg-[#080e20]">
        <div className=" flex items-center" data-aos="fade-right">
          <Link href="/hero">
            <h1 className="text-white font-bold text-3xl cursor-pointer">
              Alumni Tracking
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-6 font-bold text-xl ">
          <Link
            href="/"
            className="text-blue-600 hover:scale-95"
            data-aos="zoom-out-down"
            data-aos-duration="3000"
          >
            Home
          </Link>
          <Link
            href="/ui/alumniList"
            className=" hover:text-blue-600 hover:scale-95"
            data-aos="zoom-out-down"
          >
            Alumni
          </Link>
          <Link
            href="/ui/eventList"
            className=" hover:text-blue-600 hover:scale-95"
            data-aos="zoom-out-down"
          >
            Events
          </Link>
          <div className="relative flex items-center">
            {/* Jobs button with dropdown */}
            <button
              onClick={toggleJobsMenu}
              className="flex hover:text-blue-600"
              data-aos="zoom-out-down"
            >
              Jobs
              <RiArrowDropDownLine className="mt-1 w-6 h-6 hover:scale-95" />
            </button>
            {jobsMenu && ( // Display the dropdown menu if jobsMenu is true
              <div className="absolute top-full left-8 bg-gray-100 shadow-lg p-2 rounded w-40">
                <Link
                  href="/ui/viewJob"
                  className="block px-4 py-2 text-black hover:text-blue-600 hover:scale-95"
                >
                  View-Jobs
                </Link>
                <Link
                  href="/ui/postJob"
                  className="block px-4 py-2 text-black hover:text-blue-600 hover:scale-95"
                >
                  Post-Jobs
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/ui/gallery"
            className=" hover:text-blue-600 hover:scale-95"
            data-aos="zoom-out-down"
          >
            Gallery
          </Link>
          <Link
            href="/ui/profile"
            className=" hover:text-blue-600 hover:scale-95"
            data-aos="zoom-out-down"
          >
            Profile
          </Link>
        </nav>

        <div
          className="hidden lg:flex flex-row items-center gap-4"
          data-aos="zoom-in"
        >
          <Link href="/">
            <div className="relative md:w-65 border-2 h-11 border-blue-600 rounded-lg">
              <span className="relative md:absolute inset-y-0 left-0 fkex items-center pl-2">
                <button className="p-1 focus:outline-none text-black md:text-black mt-1">
                  <FaSearch className="text-white w-5 h-6" />
                </button>
              </span>
              <input
                type="text"
                className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block bg-[#080e20]"
              />
            </div>
          </Link>

          <Link href="/">
            <button
              className="border-2 border-white p-1 h-10 w-20 rounded-lg bg-blue-600 hover:text-white hover:text-[15px] hover:scale-95"
              onClick={handleLogout}
            >
              <h1 className="font-bold hover:scale-95">Logout</h1>
            </button>
          </Link>
        </div>

        <div
          className=" lg:hidden flex items-center p-2"
          onClick={handleChange}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-darkBackground text-white bg-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link href="/hero" className="text-blue-600 hover:scale-95">
          Home
        </Link>
        <Link
          href="/about"
          className="text-black hover:text-blue-600 hover:scale-95"
        >
          Events
        </Link>

        <div className="flex justify-center">
          <button
            onClick={toggleJobsMenu}
            className="flex text-black hover:text-blue-600 hover:scale-95"
          >
            Jobs
            <RiArrowDropDownLine className="mt-1 w-6 h-6 hover:scale-95" />
          </button>
          {jobsMenu && (
            <div className="absolute bg-white text-black shadow-lg w-40">
              <Link
                href="/ui/viewJob"
                className="block px-4 py-2 hover:bg-gray-100 hover:scale-95"
              >
                View-Jobs
              </Link>
              <Link
                href="/ui/postJob"
                className="block px-4 py-2 hover:bg-gray-100 hover:scale-95"
              >
                Post-Jobs
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/gallery"
          className="text-black hover:text-blue-600 hover:scale-95"
        >
          Gallery
        </Link>
        <Link
          href="/contacts"
          className="text-black hover:text-blue-600 hover:scale-95"
        >
          Profile
        </Link>
      </div>
    </div>
  );
}
