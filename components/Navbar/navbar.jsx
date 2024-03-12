"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

export default function navbar() {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const setFixed = () => {
    if (window.screenY >= 0) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const handleChange = () => {
    setMenu(!menu);
  };

  //   window.addEventListener("scroll", setFixed);
  return (
    <div className="border-2 border-blue-800">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-black bg-[#ffffff]">
        <div className=" flex items-center">
          <Link to="/" spy={true} smooth={true} duration={500}>
            <h1 className="text-blue-800 font-semibold text-3xl cursor-pointer">
              Alumni Tracking
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-6 font-bold text-xl ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue-800"
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-blue-800"
          >
            About Us
          </Link>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-blue-800"
          >
            Service
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-blue-800"
          >
            Gallery
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-blue-800"
          >
            Contacts
          </Link>
        </nav>

        <div className="hidden lg:flex flex-row items-center gap-4">
          <button className="border-2 border-blue-800 p-1 h-10 w-20 rounded-lg hover:bg-blue-800 hover:text-white hover:text-[15px]">
            <h1 className="font-bold ">Login</h1>
          </button>

          <button className="bg-blue-700 p-1 h-10 w-20 rounded-lg hover:text-[15px]">
            <h1 className="text-white font-bold">Register</h1>
          </button>
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
        } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-blue-800"
        >
          Home
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black hover:text-blue-800"
        >
          About Us
        </Link>
        <Link
          to="destination"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black hover:text-blue-800"
        >
          Service
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black hover:text-blue-800"
        >
          Gallery
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black hover:text-blue-800"
        >
          Contacts
        </Link>

        <div className="flex flex-row justify-center items-center lg:hidden lg:flex-row gap-6">
          <button className="border-2 border-blue-700 p-1 h-12 w-24 rounded-lg">
            <h1 className="text-black">Login</h1>
          </button>
          <button className="bg-blue-700 p-2 h-12 w-28 rounded-lg ">
            <h1 className="text-white font-bold">Register</h1>
          </button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
