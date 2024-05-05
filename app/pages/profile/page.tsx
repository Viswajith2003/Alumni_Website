import React from "react";
import ProfileIcon from "../../components/profileIcon/page";

function Profile() {
  return (
    <div className="flex container mx-auto p-5">
      <div className="bg-gray-600">
        <ProfileIcon />
      </div>
      <div className="form bg-slate-500 p-4">
        <h1>Personal Details</h1>
      </div>
    </div>
  );
}

export default Profile;
