import React from "react";

export default function Register() {
  return (
    <div className="bg-[#edeced] h-screen flex flex-col justify-center items-center ">
      <div className="bg-white w-[560px] h-auto rounded-xl p-4 flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center mb-8 gap-8">
          <h1 className=" font-bold text-3xl mt-5  text-blue-700">Sign Up</h1>
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-black p-3 rounded-xl w-[400px] mt-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-black p-3 rounded-xl w-[400px]"
          />
          <input
            type="number"
            placeholder="Phone"
            className="border-2 border-black p-3 rounded-xl w-[400px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black p-3 rounded-xl w-[400px]"
          />
        </div>
        <button className="mt-5 h-[50px] w-[400px] bg-blue-700 p-2 rounded-xl text-white font-bold mb-1">
          <h1 className="text-2xl font-bold">Register </h1>
        </button>

        <div className="flex justify-start w-[400px] p-1 mb-6">
          <p className="text-[16px] font-normal">Already have an account? </p>
          <p className="text-[16px] font-semibold text-blue-700 ml-2">Login</p>
        </div>
      </div>
    </div>
  );
}
