"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../backend/firebase/config";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsList = [];
      querySnapshot.forEach((doc) => {
        eventsList.push({ id: doc.id, ...doc.data() });
      });
      setEvents(eventsList);
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Event Lists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="border border-gray-300 p-4 m-4">
            <img
              src={event.bannerImage}
              alt={event.eventName}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{event.eventName}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Schedule:</strong> {event.schedule}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Description:</strong> {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
