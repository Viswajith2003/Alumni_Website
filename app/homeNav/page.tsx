"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function HomeNav() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed w-full z-40 ">
      <div className="flex flex-row justify-between p-6 md:px-32 px-5 bg-darkBackground text-black bg-[#ffffff]">
        <div className=" flex items-center" data-aos="fade-right">
          <Link href="/hero">
            <h1 className="text-blue-800 font-bold text-3xl cursor-pointer">
              Alumni Tracking
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-6 font-bold text-xl ">
          <Link
            href="/"
            className="text-blue-800"
            data-aos="zoom-out-down"
            data-aos-duration="3000"
          >
            Home
          </Link>
          <Link
            href="/"
            className=" hover:text-blue-800"
            data-aos="zoom-out-down"
          >
            Events
          </Link>
          <Link
            href="/"
            className="flex hover:text-blue-800"
            data-aos="zoom-out-down"
          >
            Jobs
            <RiArrowDropDownLine className="mt-1 w-6 h-6" />
          </Link>
          <Link
            href="/gallary"
            className=" hover:text-blue-800"
            data-aos="zoom-out-down"
          >
            Gallery
          </Link>
          <Link
            href="/"
            className=" hover:text-blue-800"
            data-aos="zoom-out-down"
          >
            Profile
          </Link>
        </nav>

        <div
          className="hidden lg:flex flex-row items-center gap-4"
          data-aos="zoom-in"
        >
          <Link href="/login">
            <button className="border-2 border-blue-800 p-1 h-10 w-20 rounded-lg hover:bg-blue-800 hover:text-white hover:text-[15px] hover:scale-95">
              <h1 className="font-bold ">Logout</h1>
            </button>
          </Link>

          {/* <Link href="/register">
            <button className="bg-blue-700 p-1 h-10 w-20 rounded-lg hover:text-[15px] hover:scale-95">
              <h1 className="text-white font-bold">Register</h1>
            </button>
          </Link> */}
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
        <Link href="/hero" className="text-blue-800">
          Home
        </Link>
        <Link href="/about" className="text-black hover:text-blue-800">
          Events
        </Link>
        <Link href="/servicess" className="text-black hover:text-blue-800">
          Jobs
        </Link>

        <Link href="/gallery" className="text-black hover:text-blue-800">
          Gallery
        </Link>
        <Link href="/contacts" className="text-black hover:text-blue-800">
          Profile
        </Link>
      </div>
    </div>
  );
}
