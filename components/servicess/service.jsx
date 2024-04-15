import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import data from "./data.js";

export default function Service() {
  return (
    <div className=" text-white bg-[#2a72ef] h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold pt-8">Our Services</h1>

        <div className="mt-8 p-4 grid grid-cols-3 gap-6 ">
          {data.map((service, index) => (
            <div
              key={index}
              className="bg-[#0b133d] p-4 h-80 pt-10 flex flex-col justify-center items-center text-center hover:scale-95 rounded-xl"
            >
              <div className="rounded-full bg-[#1c45ca] p-2 w-20 h-20 border-4 border-white">
                <service.icon className="w-10 h-10 ml-2 mt-2" />
              </div>

              <h2 className="text-3xl font-bold mt-5">{service.name}</h2>
              <p className="mt-5 text-[20px]">{service.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
