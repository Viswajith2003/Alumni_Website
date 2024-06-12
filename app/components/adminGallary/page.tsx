"use client";
// pages/gallery-edit.js
import { useState } from "react";

export default function GalleryEdit() {
  const [gallery, setGallery] = useState([]);

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const galleryName = event.target.galleryName.value;

    if (file && galleryName) {
      const newImage = {
        id: gallery.length + 1,
        img: URL.createObjectURL(file),
        galleryName,
      };

      setGallery([...gallery, newImage]);
    }
  };

  const handleDelete = (id) => {
    setGallery(gallery.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    // Edit functionality can be added here
    console.log("Edit", id);
  };

  return (
    <div className="container mx-auto p-4 flex">
      {/* Image Uploading Section */}
      <div className="mb-8 p-4 border rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gallery Name
            </label>
            <input
              type="text"
              name="galleryName"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </form>
      </div>

      {/* Gallery List Section */}
      <div className="p-4 border rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Gallery List</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                No:
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                IMG
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Gallery Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 border-b border-gray-300">
                  {index + 1}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <img
                    src={item.img}
                    alt={item.galleryName}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {item.galleryName}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
