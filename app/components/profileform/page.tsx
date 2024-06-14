"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, DocumentData } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../backend/firebase/config";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  passOutYear: string;
  skills: string;
};

export default function ProfileForm() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    passOutYear: "",
    skills: "",
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        console.log({ userDocSnapshot });
        const userData: FormData = { ...formData };
        if (userDocSnapshot.exists()) {
          const data = userDocSnapshot.data() as FormData;
          Object.entries(data).forEach(([key, value]) => {
            if (!value) {
              userData[key as keyof FormData] = "";
            } else {
              userData[key as keyof FormData] = value as string;
            }
          });
          console.log(userData);
        }
        setFormData(userData);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
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
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, formData, { merge: true });
      alert("Profile updated successfully!");
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
          <label className="block text-gray-700 mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.lastName}
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
        <label className="block text-gray-700 mb-2" htmlFor="dob">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      {/* Pass-Out Year */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="passOutYear">
          Pass-Out Year
        </label>
        <input
          type="number"
          id="passOutYear"
          name="passOutYear"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.passOutYear}
          onChange={handleChange}
          required
        />
      </div>

      {/* Skills */}
      <div className="mt-4 text-black">
        <label className="block text-gray-700 mb-2" htmlFor="skills">
          Skills
        </label>
        <textarea
          id="skills"
          name="skills"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.skills}
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
