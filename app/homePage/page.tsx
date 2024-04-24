"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../homeNav/page";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Initialize Typed.js
    const typed = new Typed(".typing-element", {
      strings: ["Welcome to Alumni Tracking System"],
      typeSpeed: 100, // Typing speed in milliseconds
      showCursor: true, // Display cursor while typing
      loop: true,
    });

    return () => {
      // Destroy Typed.js instance on component unmount
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-home z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
          <div data-aos="fade-left">
            <h1 className="text-center text-white text-5xl font-bold">
              <span className="typing-element"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
