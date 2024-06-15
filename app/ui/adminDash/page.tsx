"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar/page";
import Navbar from "./navbar/page";
import DashAdmin from "./dashboard /page";

export default function AdminDash() {
  const [sidebarToggle, setSidebarToggle] = useState(false); // ensure this is defined
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <DashAdmin
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
    </div>
  );
}

