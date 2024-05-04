"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export default function ProfilePhotoUpload() {
  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {" "}
      {/* Ensure parent container is centered */}
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <label
        className="text-gray-700 text-sm font-bold mb-2 text-center"
        htmlFor="photo"
      >
        Profile Photo
      </label>
      <div className="text-center flex flex-col items-center">
        {" "}
        {/* Center child elements */}
        {/* Current Profile Photo */}
        <div className="mt-2">
          <Image
            src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
        {/* New Profile Photo Preview */}
        {photoPreview && (
          <div
            className="w-40 h-40 rounded-full m-auto shadow"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${photoPreview})`,
            }}
          ></div>
        )}
        {/* Button to trigger file input */}
        <button
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2"
          onClick={() => fileInputRef.current.click()}
        >
          Select New Photo
        </button>
      </div>
    </div>
  );
}
