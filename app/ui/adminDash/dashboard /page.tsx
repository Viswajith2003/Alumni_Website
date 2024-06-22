import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, get, child } from "firebase/database";
import Navbar from "../navbar/page";
import { db, database } from "../../../backend/firebase/config"; // Adjust the path as needed
import { HiUser } from "react-icons/hi";
import { FaRegMessage } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";

export default function Dashboard({ sidebarToggle, setSidebarToggle }) {
  const [data, setData] = useState([
    { icon: HiUser, num: 0, name: "Total Alumni", color: "bg-blue-500" },
    {
      icon: FaUserGraduate,
      num: 0,
      name: "Posted Jobs",
      color: "bg-green-500",
    },
    {
      icon: PiNotepad,
      num: 0,
      name: "Upcoming Events",
      color: "bg-yellow-500",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch total alumni count from Firestore
        const alumniSnapshot = await getDocs(collection(db, "users"));
        const totalAlumni = alumniSnapshot.size;

        // Fetch posted jobs count from Realtime Database
        const jobsRef = ref(database, "jobs");
        const jobsSnapshot = await get(jobsRef);
        let totalJobs = 0;

        jobsSnapshot.forEach((userJobsSnapshot) => {
          totalJobs += userJobsSnapshot.size;
        });

        // Fetch upcoming events count from Firestore
        const eventsSnapshot = await getDocs(collection(db, "events"));
        const totalEvents = eventsSnapshot.size;

        // Update the state with the fetched data
        setData([
          {
            icon: HiUser,
            num: totalAlumni,
            name: "Total Alumni",
            color: "bg-blue-500",
          },
          {
            icon: FaUserGraduate,
            num: totalJobs,
            name: "Posted Jobs",
            color: "bg-green-500",
          },
          {
            icon: PiNotepad,
            num: totalEvents,
            name: "Upcoming Events",
            color: "bg-yellow-500",
          },
        ]);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    }

    fetchData();
  }, []);

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
}
