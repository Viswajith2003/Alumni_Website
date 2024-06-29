"use client";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../backend/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { userInputs } from "../../constants/formSource";
import { Roller } from "react-css-spinners";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Image from "next/image";
import backgroundImg from "../../../public/images/alumniLog.jpg";

function LoadingScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Roller color="rgba(6,90,253,1)" size={100} thickness={5} />
    </div>
  );
}

export default function Register() {
  const [data, setData] = useState({
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
  });
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [per, setPerc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const uploadFile = () => {
      const fileName = new Date().getTime() + file.name;
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
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    if (file) {
      uploadFile();
    }
  }, [file]);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!data.email) {
      newErrors.email = "Email is required";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password !== data.repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true); // Start loading
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        await setDoc(doc(db, "users", res.user.uid), {
          ...data,
          timestamp: serverTimestamp(),
        });
        resetForm();
        router.push("/authentication/login");
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false); // Stop loading
    }
  };

  const resetForm = () => {
    setData({
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
    });
    setFile(null);
    setPerc(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative h-screen flex justify-center items-center">
      <Image
        src={backgroundImg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="relative w-[1200px] rounded-xl p-4 flex flex-col justify-center items-center backdrop-blur-md bg-white bg-opacity-30 z-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl mt-5 text-blue-700">REGISTER</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
            {userInputs.map((input) => (
              <div key={input.id} className="w-full">
                {input.type === "select" ? (
                  <select
                    id={input.id}
                    value={data[input.id]}
                    onChange={handleInput}
                    className="border-2 border-black p-[14px] rounded-xl w-full bg-white"
                  >
                    {input.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : input.type === "textarea" ? (
                  <textarea
                    id={input.id}
                    placeholder={input.placeholder}
                    value={data[input.id]}
                    onChange={handleInput}
                    className="border-2 border-black p-3 rounded-xl w-full h-[150px]"
                  />
                ) : (
                  <div className="relative">
                    {input.type === "email" && (
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    )}
                    {input.type === "password" && (
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    )}
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={data[input.id]}
                      onChange={handleInput}
                      className={`border-2 border-black p-3 rounded-xl w-full ${
                        input.type === "email" || input.type === "password"
                          ? "pl-10"
                          : ""
                      }`}
                    />
                  </div>
                )}
                {errors[input.id] && (
                  <p className="text-red-600 text-left">{errors[input.id]}</p>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="border-2 border-black p-3 rounded-xl w-full bg-white"
              />
              {errors.file && (
                <p className="text-red-600 text-left">{errors.file}</p>
              )}
            </div>
            <div className="block">
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  className="w-[100px] h-[100px] mx-3"
                  alt="User Upload"
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={per !== null && per < 100}
          className={`mt-5 h-[50px] w-[400px] ${
            per !== null && per < 100 ? "bg-blue-200" : "bg-blue-700"
          } p-2 rounded-xl text-white font-bold mb-1`}
          style={{
            cursor: per !== null && per < 100 ? "not-allowed" : "pointer",
          }}
        >
          <h1 className="text-2xl font-bold">Register</h1>
        </button>
        <div className="flex justify-start w-[400px] p-1 mb-6">
          <p className="text-[16px] font-normal">Already have an account?</p>
          <Link href="/authentication/login">
            <p className="text-[16px] font-semibold text-blue-700 ml-2">
              Logined
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
