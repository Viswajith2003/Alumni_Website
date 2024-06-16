import React from "react";

export default function About() {
  return (
    <div className="container mx-auto pt-12">
      <h1 className="font-bold text-5xl mb-10 text-center">About Us</h1>
      <div className="grid grid-cols-1 p-2">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
          <div className="p-3 w-3/4 hover:scale-95">
            <img src="/images/about.png" alt="About Us" className="w-96 h-96" />
          </div>

          <div className=" p-5 pt-20 col-span-2 text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-xl hover:text-blue-800">
              "Our mission is to create a robust Alumni Management System that
              fosters connections and engagement among alumni, students, and the
              institution. We aim to provide a platform for lifelong learning,
              networking, and professional development opportunities."
            </p>
          </div>
        </div>
        <div className="md:flex ">
          <div className="p-5 pt-16 h-80 text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-xl hover:text-blue-800">
              "Our vision is to build a vibrant and inclusive alumni community
              that contributes to the growth and success of both individual
              members and the alma mater. We envision a dynamic platform that
              facilitates meaningful interactions, knowledge sharing, and
              collaboration among alumni across generations and geographical
              locations."
            </p>
          </div>

          <div className="hover:scale-95  w-auto">
            <img
              src="/images/about2.png"
              alt="About Us"
              className="w-[930px] h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
