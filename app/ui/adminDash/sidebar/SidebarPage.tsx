"use client";
import React from "react";
import Sidebar from "./Sidebar";

export default function SidebarPage() {
  const [activeScreen, setActiveScreen] = React.useState("dashboard");

  return (
    <Sidebar
      sidebarToggle={false}
      setActiveScreen={setActiveScreen}
      activeScreen={activeScreen}
    />
  );
}
