import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-home z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <div>
          <h1 className="text-center text-white text-2xl mb-8 font-mono">
            Stay Connected With..
          </h1>
        </div>
        <div>
          <h1 className="text-center text-white text-5xl font-bold">
            The Group of GECP presents
          </h1>
        </div>
        <div className="bg-blue-800 p-3 rounded-md  mt-8">
          <h1 className="text-center text-white text-2xl font-medium">
            OUR GOAL IS TO CONNECT EVERYONE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
