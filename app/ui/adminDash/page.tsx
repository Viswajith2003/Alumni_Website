"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar/page";
import Navbar from "./navbar/page";
import DashAdmin from "./dashboard /page";

export default function AdminDash() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarToggle={sidebarToggle} />
      <div
        className={`flex flex-col flex-grow w-full ${
          sidebarToggle ? "" : "ml-72"
        }`}
      >
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <main className="flex-grow overflow-auto p-3 pr-4">
          <DashAdmin
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
        </main>
      </div>
    </div>
  );
}
