"use client";
import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../backend/firebase/config"; // Adjust the import path as necessary

const AlumniList = () => {
  // Define state variables for alumni list
  const [alumniList, setAlumniList] = useState([]);
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  // Fetch alumni data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          list.push({
            id: doc.id,
            avatar: data.img || "https://via.placeholder.com/50",
            name: `${data.firstname} ${data.lastname}`,
            passoutYear: data.batch,
            email: data.email,
            gender: data.gender,
            verified: data.verified || false,
          });
        });
        setAlumniList(list);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  // Function to handle view action
  const handleViewAlumni = (index) => {
    setSelectedAlumni(alumniList[index]);
  };

  // Function to handle close modal
  const handleClose = () => {
    setSelectedAlumni(null);
  };

  // Function to handle verify action
  const handleVerify = async () => {
    if (selectedAlumni) {
      const selectedAlumniDocRef = doc(db, "users", selectedAlumni.id);
      try {
        await setDoc(selectedAlumniDocRef, { verified: true }, { merge: true });
        const updatedAlumniList = alumniList.map((alumni) =>
          alumni.id === selectedAlumni.id
            ? { ...alumni, verified: true }
            : alumni
        );
        setAlumniList(updatedAlumniList);
        setSelectedAlumni(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Alumni List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              No
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Avatar
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Passout Year
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Status
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {alumniList.map((alumni, index) => (
            <tr key={alumni.id}>
              <td className="px-6 py-4 border-b border-gray-300">
                {index + 1}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                <img
                  src={alumni.avatar}
                  alt={alumni.name}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {alumni.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {alumni.passoutYear}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                {alumni.verified ? "Verified" : "Not Verified"}
              </td>
              <td className="px-6 py-4 border-b border-gray-300">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => handleViewAlumni(index)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedAlumni && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Bio</h2>
            <div className="flex items-center">
              <img
                src={selectedAlumni.avatar}
                alt={selectedAlumni.name}
                className="h-20 w-20 rounded-full mr-4"
              />
              <div className="flex-1">
                <p>
                  <strong>Name:</strong> {selectedAlumni.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedAlumni.email}
                </p>
                <p>
                  <strong>Batch:</strong> {selectedAlumni.passoutYear}
                </p>
              </div>
              <div className="flex-1">
                <p>
                  <strong>Gender:</strong> {selectedAlumni.gender}
                </p>
                <p>
                  <strong>Account Status:</strong>{" "}
                  {selectedAlumni.verified ? "Verified" : "Not Verified"}
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              {!selectedAlumni.verified && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleVerify}
                >
                  Verify
                </button>
              )}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniList;
