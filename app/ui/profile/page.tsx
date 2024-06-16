"use client";
import React, { useEffect, useRef, useState } from "react";
import { DocumentData, doc, getDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../../backend/firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  batch: string;
  connectedTo: string;
  address: string;
  img: string;
};

function Profile() {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null); // Explicitly typed as string | null
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref is explicitly typed
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("user") || "null");

    if (userFromStorage && userFromStorage.imageUrl) {
      setPhotoPreview(userFromStorage.imageUrl);
    }
  }, []);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target.files?.[0];
    if (fileInput) {
      setFile(fileInput);
    }
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setPhotoPreview(imageUrl);
        setShowSubmitButton(true); // Assuming setUserProfile updates the user's profile with imageUrl
      };
      reader.readAsDataURL(file);
    }
  };

  const [user, setUser] = useState<any>(null);
  const [singleDoc, setSingleDoc] = useState<DocumentData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    batch: "",
    connectedTo: "",
    address: "",
    img: "",
  });
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [file, setFile] = useState(null);
  const [per, setPerc] = useState(null);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("user") || "null");
    setUser(userFromStorage);

    if (userFromStorage) {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "users", userFromStorage.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setSingleDoc(userDoc.data());
            setFormData(userDoc.data() as FormData);
            console.log(userDoc.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
    const uploadFile = () => {
      if (file) {
        const fileName = new Date().getTime() + file.name;
        console.log(fileName);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setPerc(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.error(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setFormData((prev) => ({ ...prev, img: downloadURL }));
              console.log("File available at", downloadURL);
              setShowSubmitButton(true);
            });
          }
        );
      }
    };

    if (file) {
      uploadFile();
    }
  }, [file]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setShowSubmitButton(true); // Show the submit button when form data changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, formData, { merge: true });
        alert("Profile updated successfully!");
        setShowSubmitButton(false);
      } catch (e) {
        console.error(e);
        alert("Failed to update profile. Please try again.");
      }
    } else {
      alert("No user is logged in.");
    }
  };

  return (
    <div className="flex container mx-auto p-3 space-x-14 text-white flex-col md:flex-row">
      {/* 

        profile Icon Component 

      */}
      <div className="bg-gray-600 max-h-[720px] overflow-y-hidded sm:h-auto ml-14 rounded-xl my-3">
        <div className="flex flex-col justify-center items-center text-center p-2 text-white">
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={(e) => {
              setFile(e.target.files[0]);
              handleFileChange;
            }}
          />
          <div className="text-center flex flex-col items-center mt-8">
            {/* Profile Photo Preview */}
            <div className="mt-2 w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-400">
              {photoPreview ? (
                <div
                  className="w-40 h-40 rounded-full"
                  style={{
                    backgroundImage: `url(${photoPreview})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : formData.img ? (
                <div
                  className="w-40 h-40 rounded-full"
                  style={{
                    backgroundImage: `url(${formData.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <span className="text-black">No Image</span>
              )}
            </div>

            <h1 className="mt-5 text-4xl font-bold mb-3 ">
              {formData.firstname.toUpperCase() +
                " " +
                formData.lastname.toUpperCase()}
            </h1>
            <p className="text-xl">
              Hi, I am student of Govt.Engineering College <br />
              Sreekrishnapuram, Palakkad
            </p>
            <div className="mt-10">
              <div className="flex flex-row justify-center items-center gap-3 ">
                <button
                  className="p-2 bg-blue-600  text-white rounded-lg hover:scale-95"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Update Profile Image
                </button>

                <button className="p-2 bg-blue-600  text-white rounded-lg hover:scale-95">
                  Change Password
                </button>
                <button className="p-2 bg-blue-600  text-white rounded-lg hover:scale-95">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 

        profile Form Component 

      */}
      <div className="">
        <form
          className="w-[800px] mx-auto p-6 bg-[#c0c2c8] shadow-md my-3 rounded-lg overflow-y-hidded max-h-[720px] sm:h-auto"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
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
            {showSubmitButton && (
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
