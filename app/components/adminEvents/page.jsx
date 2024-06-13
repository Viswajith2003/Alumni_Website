"use client";
import React, { useState } from "react";

const EventLists = () => {
  // Define state variables for event form fields
  const [eventName, setEventName] = useState("");
  const [schedule, setSchedule] = useState("");
  const [description, setDescription] = useState("");
  const [bannerImage, setBannerImage] = useState(null);

  // Define state variables for gallery list
  const [galleryList, setGalleryList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Function to handle event form submission
  const handleEventSubmit = (e) => {
    e.preventDefault();

    // Create a new event object
    const newEvent = {
      eventName,
      schedule,
      description,
      bannerImage,
    };

    if (isEditing) {
      const updatedGalleryList = [...galleryList];
      updatedGalleryList[currentIndex] = newEvent;
      setGalleryList(updatedGalleryList);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      // Add the new event to the gallery list
      setGalleryList([...galleryList, newEvent]);
    }

    // Clear the form fields after submission
    setEventName("");
    setSchedule("");
    setDescription("");
    setBannerImage(null);
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
  };

  // Function to handle delete event from the gallery list
  const handleDeleteEvent = (index) => {
    const updatedGalleryList = [...galleryList];
    updatedGalleryList.splice(index, 1);
    setGalleryList(updatedGalleryList);
  };

  // Function to handle edit event
  const handleEditEvent = (index) => {
    const event = galleryList[index];
    setEventName(event.eventName);
    setSchedule(event.schedule);
    setDescription(event.description);
    setBannerImage(event.bannerImage);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  // Function to handle view event
  const handleViewEvent = (index) => {
    const event = galleryList[index];
    alert(
      `Event: ${event.eventName}\nSchedule: ${event.schedule}\nDescription: ${event.description}`
    );
  };

  return (
    <div className="flex flex-row">
      {/* First div for event form */}
      <div className="p-4">
        <h2 className="text-2xl text-center font-semibold mb-4">
          {isEditing ? "Edit Event" : "Create New Event"}
        </h2>
        <form
          onSubmit={handleEventSubmit}
          className="space-y-4 border border-black p-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Name
            </label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Schedule
            </label>
            <input
              type="text"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Banner Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 p-2 border rounded w-full"
              required={!isEditing}
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

      {/* Second div for gallery list */}
      <div className="p-4">
        <h2 className="text-2xl text-center font-semibold mb-4">
          Event Gallery
        </h2>
        <table className="min-w-full bg-white border p-4">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                No
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Schedule
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Description
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {galleryList.map((event, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-300">
                  {index + 1}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {event.schedule}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {event.eventName}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {event.description}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 space-x-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleViewEvent(index)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEditEvent(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteEvent(index)}
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
};

export default EventLists;
