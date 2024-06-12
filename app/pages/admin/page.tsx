"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar/page";
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
    </div>
  );
}
