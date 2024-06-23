"use client";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../backend/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Roller } from "react-css-spinners";
import React from "react";

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

const Login = () => {
  // Define the type for errors state
  interface Errors {
    email?: string;
    password?: string;
    general?: string;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("user", JSON.stringify(user));
      setEmail("");
      setPassword("");
      router.push("/screens/main_home_screen");
    }
  }, [user]);

  const handleSignIn = async () => {
    setIsLoading(true); // Start loading
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: error.message,
      }));
    } finally {
      setIsLoading(false); // Stop loading
    }
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
    <div className="bg-[#edeced] h-screen flex justify-center items-center ">
      <div className="bg-white w-[560px] rounded-xl p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-bold text-3xl mt-5 text-blue-700 ">LOGIN</h1>
          <div className="block w-auto h-auto mb-4 mt-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black p-3 rounded-xl w-[400px]"
            />
            {errors.email && (
              <p className="text-red-600 text-left">{errors.email}</p>
            )}
          </div>
          <div className="block w-auto h-auto mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-black p-3 rounded-xl w-[400px]"
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
          <p className="text-[16px] font-semibold">Forgot password?</p>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-5 h-[50px] w-[400px] bg-blue-700 p-2 rounded-xl text-white font-bold mb-1"
        >
          <h1 className="text-2xl font-bold">Login </h1>
        </button>
        {errors.general && (
          <p className="text-red-600 text-left mt-4">{errors.general}</p>
        )}

        <div className="flex justify-start w-[400px] p-1 mb-6">
          <p className="text-[16px] font-normal">Don't have an account? </p>
          <Link href="/authentication/register">
            <p className="text-[16px] font-semibold text-blue-700 ml-2">
              Register
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
