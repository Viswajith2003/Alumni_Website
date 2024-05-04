import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <div className="border-2 border-black rounded-full">profile pic</div>
        <h1>Viswajith vp</h1>
        <p>
          Hi, I am student of Govt.Engineering College Sreekrishnapuram
          ,Palakkad
        </p>
        <div className="space-y-2">
          <div className="flex gap-3">
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:scale-95">
              Upload Profile Image
            </button>
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:scale-95">
              Update Profile details
            </button>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:scale-95">
              Change Password
            </button>
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:scale-95">
              Delete Account
            </button>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="">

      </div>
    </div>
  );
}
