// components/ProfilePhotoUpload.jsx
"use client";
import React, { useState, useRef } from "react";
import Image from "next/image"; // Using Next.js Image for optimization

export default function ProfilePhotoUpload() {
  // State to hold the file name and photo preview
  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const fileInputRef = useRef(null); // Reference to the hidden file input

  // Handle file change to update the preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoName(file.name); // Update the photo name
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="col-span-6 sm:col-span-4 md:mr-3">
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2 text-center"
        htmlFor="photo"
      >
        Profile Photo
      </label>

      <div className="text-center">
        {/* Current Profile Photo */}
        <div
          className="mt-2"
          style={{ display: !photoPreview ? "block" : "none" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>

        {/* New Profile Photo Preview */}
        <div
          className="mt-2"
          style={{ display: photoPreview ? "block" : "none" }}
        >
          <div
            className="w-40 h-40 rounded-full m-auto shadow"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${photoPreview})`,
            }}
          ></div>
        </div>

        {/* Button to trigger file input */}
        <button
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
          onClick={() => fileInputRef.current.click()}
        >
          Select New Photo
        </button>
      </div>
    </div>
  );
}
