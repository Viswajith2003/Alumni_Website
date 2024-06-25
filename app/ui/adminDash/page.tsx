"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import DashAdmin from "./dashboard /page";
import AlumniList from "../../components/adminAlumniList/page";
import Gallery from "../../components/adminGallary/page";
import AddEvents from "../../components/adminEvents/page";
import Jobs from "../../components/adminJobs/page";
import Feedback from "../../components/adminFeedback/page";
import ShareIdea from "../../components/adminShareIdea/page";
import SendMail from "../../components/adminSendMail/page";

export default function AdminDash() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [activeScreen, setActiveScreen] = useState("dashboard");

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashAdmin />;
      case "alumniList":
        return <AlumniList />;
      case "gallery":
        return <Gallery />;
      case "addEvents":
        return <AddEvents />;
      case "jobs":
        return <Jobs />;
      case "feedback":
        return <Feedback />;
      case "shareIdea":
        return <ShareIdea />;
      case "sendMail":
        return <SendMail />;
      default:
        return <DashAdmin />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        sidebarToggle={sidebarToggle}
        setActiveScreen={setActiveScreen}
        activeScreen={activeScreen}
      />
      <div className={`flex flex-col w-full ${sidebarToggle ? "" : "ml-72"}`}>
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <main className="flex-grow p-3 pr-4 overflow-hidden scroll-smooth overflow-y-auto">
          {renderActiveScreen()}
        </main>
      </div>
    </div>
  );
}
