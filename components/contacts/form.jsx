import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import data from "./items.js";

export default function form() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-8 mb-12 ">Contact Us</h1>
      <div className="space-y-10">
        {data.map((items, index) => (
          <div className="flex gap-4">
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
    </div>
  );
}
