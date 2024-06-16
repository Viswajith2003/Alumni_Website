import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import data from "./items.js";

export default function form() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-8 mb-12 text-center">Contact Us</h1>
      <div className="md:flex space-x-10">
        <div className="space-y-10 w-full p-5 ml-14 ">
          {/* items */}
          {data.map((items, index) => (
            <div className="flex gap-4 hover:scale-95">
              <div className="border-2 border-black p-2 w-20 ">
                <items.icon className="w-8 h-10 ml-3" />
              </div>
              <div>
                <h1 className="font-bold text-2xl">{items.name}</h1>
                <p className="text-gray-500">{items.para}</p>
              </div>
            </div>
          ))}
        </div>
        {/* form */}
        <div className="w-full p-5">
          {/* Flex for larger screens, stack for smaller screens */}
          <div className="flex flex-col md:flex-row md:space-x-3">
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-black p-3 rounded-xl hover:scale-95 w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-black p-3 rounded-xl hover:scale-95 w-full md:w-auto mt-3 md:mt-0"
            />
          </div>

          {/* Same as above, but with additional margin-top for smaller screens */}
          <div className="flex flex-col md:flex-row md:space-x-3 mt-5">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-black p-3 rounded-xl hover:scale-95 w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border-2 border-black p-3 rounded-xl hover:scale-95 w-full md:w-auto mt-3 md:mt-0"
            />
          </div>

          {/* Ensure textarea also adjusts for screen size */}
          <div className="mt-5 hover:scale-95 md:mr-28">
            <textarea
              name="text"
              cols={50}
              rows={8}
              placeholder="Messages"
              className="border-2 border-black p-3 rounded-xl w-full"
            ></textarea>
          </div>

          {/* Button centered on smaller screens */}
          <div className="flex justify-center md:justify-start">
            <button className="mt-5 h-[50px] w-full md:w-[560px] bg-[#2686f3] p-2 rounded-xl text-white font-bold hover:scale-95">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
