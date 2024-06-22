import React from "react";
import Navbar from "../navbar/page"; // Ensure this import is correct
import data from "./data"; // Ensure the data import is correct

// Define the interface for the props
interface DashboardProps {
  sidebarToggle: string;
  setSidebarToggle: (toggle: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  return (
    <div className={`${sidebarToggle} bg-gray-200 h-full p-5 overflow-hidden`}>
      <div className="bg-gray-200 h-[840px] p-5">
        <div className="flex p-8 gap-12">
          {data.map((item, index) => (
            <div key={index} className="flex space-x-5 bg-white p-4 rounded-lg">
              <div
                className={`model rounded-full w-20 h-20 mt-2 flex items-center justify-center ${item.color}`}
              >
                <item.icon className="text-white w-10 h-10" />
              </div>
              <div className="mt-4 space-y-1">
                <span className="font-bold text-2xl">{item.num}</span>
                <p className="text-gray-500">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
