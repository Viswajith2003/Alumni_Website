import React from "react";

export default function Login() {
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center ">
      <div className="bg-white w-[560px] rounded-xl p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className=" font-bold text-3xl mt-5">Sign In</h1>
          <input
            type="email"
            placeholder="Enter Your Mail"
            className="border-2 border-black p-3 rounded-xl w-[400px] mt-5"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black p-3 rounded-xl w-[400px]"
          />
        </div>
        <div className="flex justify-between w-[400px] p-1 mt-3 mb-8">
          <div className="flex gap-3">
            <input type="checkbox" className="w-5" />
            <p className="text-[20px] font-semibold">Remember me</p>
          </div>
          <p className="text-[16px] font-semibold">Forgot password?</p>
        </div>

        <button className="mt-5 h-[50px] w-[400px] bg-[#2a8af8] p-2 rounded-xl text-white font-bold mb-6">
          <h1 className="text-2xl font-bold">Login </h1>
        </button>
      </div>
    </div>
  );
}
