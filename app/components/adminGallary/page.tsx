"use client";
// pages/gallery-edit.js
import { useState, useEffect } from "react";

export default function GalleryEdit() {
  const [gallery, setGallery] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: null,
    img: "",
    galleryName: "",
  });

  useEffect(() => {
    // Retrieve gallery from local storage on component mount
    const savedGallery = JSON.parse(localStorage.getItem("gallery")) || [];
    setGallery(savedGallery);
  }, []);

  useEffect(() => {
    // Save gallery to local storage whenever it changes
    localStorage.setItem("gallery", JSON.stringify(gallery));
  }, [gallery]);

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const galleryName = event.target.galleryName.value;

    if (file && galleryName) {
      const newImage = {
        id: isEditing ? currentItem.id : gallery.length + 1,
        img: URL.createObjectURL(file),
        galleryName,
      };

      if (isEditing) {
        setGallery(
          gallery.map((item) => (item.id === currentItem.id ? newImage : item))
        );
        setIsEditing(false);
        setCurrentItem({ id: null, img: "", galleryName: "" });
      } else {
        setGallery([...gallery, newImage]);
      }

      event.target.reset();
    }
  };

  const handleDelete = (id) => {
    setGallery(gallery.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Image Uploading Section */}
      <div className="mb-8 p-4 border rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Image" : "Upload Image"}
        </h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              className="mt-1 p-2 border rounded w-full"
              required={!isEditing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gallery Name
            </label>
            <input
              type="text"
              name="galleryName"
              defaultValue={currentItem.galleryName}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isEditing ? "Update" : "Upload"}
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
                    onClick={() => handleEdit(item)}
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
