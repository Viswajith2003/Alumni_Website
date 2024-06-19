"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../backend/firebase/config";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery"));
      const fetchedGallery = [];
      querySnapshot.forEach((doc) => {
        fetchedGallery.push(doc.data());
      });
      setGallery(fetchedGallery);
    };

    fetchGallery();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl my-5 text-center">Gallery</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {gallery.map((item, index) => (
          <div key={index} className="m-4">
            <div className="w-full h-64">
              <img
                src={item.img}
                alt={item.galleryName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
