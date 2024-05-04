"use client"; // Required for client-side component in Next.js
import React, { useState, useRef } from "react";

export default function ProfilePhotoUpload() {
  const [photoPreview, setPhotoPreview] = useState(null); // State for the photo preview
  const fileInputRef = useRef(null); // Reference to the hidden file input

  // Handle file input changes to update the preview
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
    <div className="flex flex-col items-center justify-center w-full h-full">
      {" "}
      {/* Center content */}
      <input
        type="file"
        className="hidden" // Hidden input for file upload
        ref={fileInputRef} // Reference to the file input
        onChange={handleFileChange} // Triggered when a new file is selected
      />
      <div className="text-center flex flex-col items-center">
        {/* Profile Photo Preview */}
        <div className="mt-2 w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-400">
          {" "}
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

        {/* Button to select a new photo */}
        <button
          className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-gray-700 shadow-sm hover:bg-gray-100 transition duration-150"
          onClick={() => fileInputRef.current.click()} // Trigger the file input
        >
          Select New Photo
        </button>
      </div>
    </div>
  );
}
