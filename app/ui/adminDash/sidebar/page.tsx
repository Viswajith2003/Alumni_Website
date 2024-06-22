import React from "react";
import Link from "next/link";
import Data from "./data";
import { IoLogOutOutline } from "react-icons/io5";

export default function Sidebar({
  sidebarToggle,
  setActiveScreen,
  activeScreen,
}) {
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-72 bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div className="mb-6 flex items-center justify-center">
        <h1 className="text-2xl text-white font-bold mt-5">ADMIN PANEL</h1>
      </div>
      <div className="flex items-center justify-center bg-black border-2 border-white p-2">
        <h1 className="text-[16px] text-gray-500 font-bold">
          Alumni Tracking System
        </h1>
      </div>
      <ul className="mt-3 text-white font-bold">
        {Data.map((item, index) => (
          <li
            key={index}
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ${
              activeScreen === item.screen ? "bg-blue-500" : ""
            }`}
          >
            <button
              onClick={() => setActiveScreen(item.screen)}
              className="px-3 flex items-center gap-2 w-full text-left"
            >
              <item.icon className="w-6 h-6" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </button>
          </li>
        ))}
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link href="/ui/welcome" className="px-3 flex items-center gap-2">
            <IoLogOutOutline className="w-6 h-6" />
            <h2
              onClick={() => localStorage.clear()}
              className="text-xl font-semibold"
            >
              LogOut
            </h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
