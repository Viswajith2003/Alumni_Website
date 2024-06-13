"use client";
import React, { useEffect, useState } from "react";
import {
  setUserProfile,
  getUserProfile,
  setUserProfile2,
  getUserProfile2,
} from "../../backend/firebase/globalState";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
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
    const profile = getUserProfile();
    const profile2 = getUserProfile2();

    // Set formData with correct handling of middleName
    setFormData({
      firstName: profile.name || "",
      lastName:
        (profile.middleName ? profile.middleName + " " : "") +
        (profile.lastName || ""),
      email: profile.email || "",
      phone: profile.phone || "",
      address: profile2.address || "",
      dob: profile2.dob || "",
      passOutYear: profile.batch || "",
      skills: profile2.skills || "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setUserProfile({
      name: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      batch: formData.passOutYear,
    });
    setUserProfile2({
      address: formData.address,
      dob: formData.dob,
      skills: formData.skills,
    });
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
