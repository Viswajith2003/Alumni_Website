"use client"; // Required for client-side component in Next.js
import React, { useState, useRef } from "react";

export default function ProfileIcon() {
  const [photoPreview, setPhotoPreview] = useState(null); // State for the photo preview
  const fileInputRef = useRef(null); // Reference to the hidden file input

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      const reader = new FileReader(); // Initialize FileReader
      reader.onload = (e) => {
        setPhotoPreview(e.target.result); // Update the photo preview with base64 data
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center p-2">
      <input
        type="file"
        className="hidden " // Hidden input for file upload
        ref={fileInputRef} // Reference to the file input
        onChange={handleFileChange} // Triggered when a new file is selected
      />
      <div className="text-center flex flex-col items-center mt-8">
        {/* Profile Photo Preview */}
        <div className="mt-2 w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-400">
          {/* Default styling */}
          {photoPreview ? ( // Check if there's a preview
            <div
              className="w-40 h-40 rounded-full" // Circular shape
              style={{
                backgroundImage: `url(${photoPreview})`, // Use the preview image
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundPosition: "center", // Center the image
              }}
            />
          ) : (
            <span>No Image</span> // Default text if there's no preview
          )}
        </div>

        <h1 className="mt-5 text-2xl font-bold mb-3">Viswajith vp</h1>
        <p className="text-xl">
          Hi, I am student of Govt.Engineering College <br /> Sreekrishnapuram
        ,Palakkad
        </p>
        <div className="space-y-2 mt-5">
          <div className="flex gap-3">
            <button
              className="p-2 bg-blue-600 text-white rounded-lg hover:scale-95"
              onClick={() => fileInputRef.current.click()}
            >
              Update Profile Image
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
      <div className=""></div>
    </div>
  );
}
