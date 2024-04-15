import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import data from "./data.js";

export default function Service() {
  return (
    <div className="text-white bg-[#0b133d] min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold pt-14 hover:text-blue-400 text-center">
          Our Services
        </h1>

        <div className="mt-12 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((service, index) => (
            <div
              key={index}
              className="border-2 border-[#0b133d] p-4 h-80 pt-10 flex flex-col justify-center items-center text-center hover:scale-95 rounded-xl"
            >
              <div className="rounded-full bg-[#2751d8] p-2 w-20 h-20 border-4 border-white mb-2">
                <RiGraduationCapFill className="w-10 h-10 ml-2 mt-2" />
              </div>
              <span className="w-1 h-14 bg-white mt-1"></span>
              <div className="mb-2">
                <h2 className="text-3xl font-bold mt-5">{service.name}</h2>
                <p className="mt-5 text-lg">{service.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
