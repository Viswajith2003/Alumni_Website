import React from "react";

export default function Register() {
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center ">
      <div className="bg-white w-[560px] rounded-xl p-4 flex flex-col justify-center items-center gap-8">
        <h1 className=" font-bold text-3xl mt-5">Sign Up</h1>
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

        <button className="mt-5 h-[50px] w-[400px] bg-[#2a8af8] p-2 rounded-xl text-white font-bold mb-6">
          <h1 className="text-2xl font-bold">Register </h1>
        </button>
      </div>
    </div>
  );
}
