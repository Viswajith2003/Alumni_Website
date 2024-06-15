"use client";
import React, { useEffect, useState } from "react";
import { DocumentData, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../backend/firebase/config";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
  dateOfBirth: string;
  gender: string;
  course: string;
  batch: string;
  connectedTo: string;
  address: string;
  img: string;
};

export default function ProfileForm() {
  const [user, setUser] = useState<any>(null);
  const [singleDoc, setSingleDoc] = useState<DocumentData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    dateOfBirth: "",
    gender: "",
    course: "",
    batch: "",
    connectedTo: "",
    address: "",
    img: "",
  });

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("user") || "null");
    setUser(userFromStorage);
    console.log(userFromStorage.uid);

    if (userFromStorage) {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "users", userFromStorage.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setSingleDoc(userDoc.data());
            setFormData(userDoc.data() as FormData);
          } else {
            // userDoc.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, formData, { merge: true });
        alert("Profile updated successfully!");
      } catch (e) {
        console.error(e);
        alert("Failed to update profile. Please try again.");
      }
    } else {
      alert("No user is logged in.");
    }
  };

  return (
    <form
      className="max-w-3xl mx-auto p-6 bg-[#c0c2c8] shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        Personal Details
      </h2>

      {/* First and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Address */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="address">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.address}
          onChange={handleChange}
          rows={3}
        />
      </div>

      {/* Date of Birth */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      {/* Pass-Out Year */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="batch">
          Pass-Out Year
        </label>
        <input
          type="number"
          id="batch"
          name="batch"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.batch}
          onChange={handleChange}
          required
        />
      </div>

      {/* Skills */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="connectedTo">
          Skills
        </label>
        <textarea
          id="connectedTo"
          name="connectedTo"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.connectedTo}
          onChange={handleChange}
          rows={3}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center mt-6">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
