"use client";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../backend/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Roller } from "react-css-spinners";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons
import Image from "next/image"; // Import Image component
import backgroundImg from "../../../public/images/adminLog.jpg"; // Import the background image

// Define the LoadingScreen component
const LoadingScreen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Roller color="rgba(6,90,253,1)" size={100} />
  </div>
);

export default function Login() {
  // Define the type for errors state
  interface Errors {
    email?: string;
    password?: string;
    general?: string;
  }

  // State variables for input values, errors, user, and loading state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      localStorage.setItem("admin", JSON.stringify(user));
      setEmail("");
      setPassword("");
      router.push("/screens/main_admin_screen");
    }
  }, [user]);

  const handleSignIn = async () => {
    setIsLoading(true); // Start loading
    if (email.slice(-6) === ".admin") {
      const value = email.slice(0, -6);
      try {
        const res = await signInWithEmailAndPassword(value, password);
        if (res.user) {
          console.log(res.user);
          setUser(res.user);
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: "Something went wrong",
          }));
        }
      } catch (e) {
        setErrors((prevErrors) => ({ ...prevErrors, general: e.message }));
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: "Unknown Admin....!",
      }));
    }
    setIsLoading(false); // Stop loading
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    handleSignIn();
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
      <div className="relative w-[560px] rounded-xl p-4 flex flex-col justify-center items-center backdrop-blur-md bg-white bg-opacity-30 z-10">
        <div className="flex flex-col justify-center items-left">
          <h1 className="font-bold text-4xl mt-5 text-[#47fbfb] mb-8">
            Welcome
            <span className="text-[#47fbfb] ml-3 text-nowrap">Admin!</span>
          </h1>
          <div className="block w-auto h-auto mb-4 mt-5 relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="UserName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black p-3 rounded-xl w-[400px] pl-10"
            />
            {errors.email && (
              <p className="text-red-600 text-left">{errors.email}</p>
            )}
          </div>
          <div className="block w-auto h-auto mb-4 relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-black p-3 rounded-xl w-[400px] pl-10"
            />
            {errors.password && (
              <p className="text-red-600 text-left">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between w-[400px] p-1 mt-3 mb-8">
          <div className="flex gap-3">
            <input
              type="checkbox"
              className="w-5"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p className="text-[20px] font-semibold">Remember me</p>
          </div>
          <p className="text-[16px] font-semibold text-red-600 hover:scale-95 cursor-pointer">
            Forgot password?
          </p>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-5 h-[50px] w-[400px] bg-blue-700 p-2 rounded-xl text-white font-bold mb-1 hover:scale-95"
        >
          <h1 className="text-2xl font-bold">Login </h1>
        </button>
        {errors.general && (
          <p className="text-red-600 text-left mt-4">{errors.general}</p>
        )}
      </div>
    </div>
  );
}
