"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/navbar/page";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../backend/firebase/config";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  console.log({ user });

  if (user && userSession) {
    router.push("/homePage");
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Initialize Typed.js
    const typed = new Typed(".typing-element", {
      strings: ["The Group of GECP presents"],
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
          <div data-aos="fade-right">
            <h1 className="text-center text-white text-2xl mb-8 font-mono">
              Stay Connected With..
            </h1>
          </div>
          <div data-aos="fade-left">
            {/* Use a span with a class for Typed.js to target */}
            <h1 className="text-center text-white text-5xl font-bold">
              <span className="typing-element"></span>
            </h1>
          </div>
          <div
            className="bg-blue-800 p-3 rounded-md mt-8"
            data-aos="zoom-in-up"
          >
            <h1 className="text-center text-white text-2xl font-medium">
              OUR GOAL IS TO CONNECT EVERYONE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
