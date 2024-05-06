import React from "react";
import ProfileIcon from "../../components/profileIcon/page";

function Profile() {
  return (
    <div className="flex container mx-auto p-5 space-x-4 text-white">
      <div className="bg-gray-600 h-[860px]">
        <ProfileIcon />
      </div>
      <div className="form bg-slate-500 p-4 w-[1000px]">
        <h1 className="text-4xl font-bold">Personal Details</h1>
        <form>
            
        </form>
      </div>
    </div>
  );
}

export default Profile;
