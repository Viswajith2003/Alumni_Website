"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../backend/firebase/config";
import Modal from "react-modal";

const EventLists = () => {
  const [eventName, setEventName] = useState("");
  const [schedule, setSchedule] = useState("");
  const [description, setDescription] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [galleryList, setGalleryList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewEvent, setViewEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      setGalleryList(events);
    };
    fetchEvents();
  }, []);

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    let bannerImageUrl = "";
    if (bannerImage) {
      const storageRef = ref(storage, `images/${bannerImage.name}`);
      await uploadBytes(storageRef, bannerImage);
      bannerImageUrl = await getDownloadURL(storageRef);
    }

    const newEvent = {
      eventName,
      schedule,
      description,
      bannerImage: bannerImageUrl,
    };

    if (isEditing) {
      const eventDoc = doc(db, "events", currentIndex);
      await updateDoc(eventDoc, newEvent);
      setGalleryList(
        galleryList.map((event) =>
          event.id === currentIndex ? { id: currentIndex, ...newEvent } : event
        )
      );
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      const docRef = await addDoc(collection(db, "events"), newEvent);
      setGalleryList([...galleryList, { id: docRef.id, ...newEvent }]);
    }

    setEventName("");
    setSchedule("");
    setDescription("");
    setBannerImage(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
  };

  const handleDeleteEvent = async (id) => {
    await deleteDoc(doc(db, "events", id));
    setGalleryList(galleryList.filter((event) => event.id !== id));
  };

  const handleEditEvent = (event) => {
    setEventName(event.eventName);
    setSchedule(event.schedule);
    setDescription(event.description);
    setBannerImage(event.bannerImage);
    setIsEditing(true);
    setCurrentIndex(event.id);
  };

  const handleViewEvent = (event) => {
    setViewEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center container mx-auto">
      <div className="p-4 w-full">
        <h2 className="text-2xl text-center font-semibold mb-4">
          {isEditing ? "Edit Event" : "Create New Event"}
        </h2>
        <form
          onSubmit={handleEventSubmit}
          className="space-y-4 border border-black p-4"
        >
          <div className="grid grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-2 gap-4">
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
          </div>
          <div className="grid">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded place-self-end"
            >
              {isEditing ? "Update" : "Upload"}
            </button>
          </div>
        </form>
      </div>

      <div className="p-4 w-full">
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
                Banner
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
                <td className="px-6 py-4 border-b border-gray-300">
                  <img
                    src={event.bannerImage}
                    alt={event.eventName}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-300 space-x-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleViewEvent(event)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEditEvent(event)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for viewing event */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="View Event"
      >
        {viewEvent && (
          <div>
            <h2 className="text-2xl mb-4">{viewEvent.eventName}</h2>
            <p>
              <strong>Schedule:</strong> {viewEvent.schedule}
            </p>
            <p>
              <strong>Description:</strong> {viewEvent.description}
            </p>
            {viewEvent.bannerImage && (
              <img
                src={viewEvent.bannerImage}
                alt={viewEvent.eventName}
                className="w-1/4 h-1/4 mt-4"
              />
            )}
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EventLists;
