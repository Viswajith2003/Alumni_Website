import React from "react";
import NavAdmin from "../navbar/page";

// DashAdmin Component
export default function DashAdmin({ sidebarToggle, setSidebarToggle }) {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <NavAdmin
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

