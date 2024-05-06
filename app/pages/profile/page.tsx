import React from "react";
import ProfileIcon from "../../components/profileIcon/page";
import ProfileForm from "../../components/profileform/page";

function Profile() {
  return (
    <div className="flex container mx-auto p-5 space-x-14 text-white">
      <div className="bg-gray-600 h-[895px] ml-14 rounded-xl">
        <ProfileIcon />
      </div>
      <div className="">
        <ProfileForm />
      </div>
    </div>
  );
}

export default Profile;
