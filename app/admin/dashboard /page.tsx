import React from "react";
import Navbar from "../navbar/page";

// DashAdmin Component
export default function DashAdmin({ sidebarToggle, setSidebarToggle }) {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="bg-gray-200 h-[840px] p-5">
        <div className="bg-white w-[220px] h-[100px] flex p-4 gap-5 rounded-lg">
          <div className="bg-blue-500 rounded-full w-14 h-14 mt-2"></div>
          <div className="mt-3">
            <span className="font-bold">6</span>
            <p className="text-gray-500">Total User</p>
          </div>
        </div>
      </div>
    </div>
  );
}
