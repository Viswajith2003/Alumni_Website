import React from "react";
import Sidebar from "./sidebar/page";
import DashAdmin from "./dashboard /page";
import NavAdmin from "./navbar/page";

export default function AdminDash() {
  return (
    <div>
      <div className="w-full flex">
        <NavAdmin />
        <Sidebar />
      </div>
      <DashAdmin />
    </div>
  );
}
