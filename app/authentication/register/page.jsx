"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../backend/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  // State variables for input values and errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      console.log({ name, email, phone, password });
      router.push("/login");
    } catch (e) {
      console.error(e);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRepeatPassword("");
  };

  // Validation function for email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Validation function for password match
  const validatePasswordMatch = (password, repeatPassword) => {
    return password === repeatPassword;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validation logic for each input
    if (name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (phone.trim() === "") {
      errors.phone = "Phone number is required";
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (
      !validatePasswordMatch(password, repeatPassword) ||
      repeatPassword === ""
    ) {
      errors.repeatPassword = "Passwords do not match";
    }

    // If there are errors, update state and prevent submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If all data is valid, proceed with registration

    handleSignUp();
    clearForm();

    // Add your registration logic here
  };

  return (
    <div className="bg-[#edeced] h-screen flex flex-col justify-center items-center ">
      <div className="bg-white w-[560px] h-auto rounded-xl p-4 flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-bold text-3xl mt-5 text-blue-700">REGISTER</h1>
          <div className="block w-auto h-auto mt-5 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black p-3 rounded-xl w-[400px]"
            />
            {errors.name && (
              <p className="text-red-600 text-left">{errors.name}</p>
            )}
          </div>
          <div className="block w-auto h-auto mb-4">
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
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-2 border-black p-3 rounded-xl w-[400px]"
            />
            {errors.phone && (
              <p className="text-red-600 text-left">{errors.phone}</p>
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
          <div className="block w-auto h-auto mb-4">
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="border-2 border-black p-3 rounded-xl w-[400px]"
            />
            {errors.repeatPassword && (
              <p className="text-red-600 text-left">{errors.repeatPassword}</p>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-5 h-[50px] w-[400px] bg-blue-700 p-2 rounded-xl text-white font-bold mb-1"
        >
          <h1 className="text-2xl font-bold">Register </h1>
        </button>

        <div className="flex justify-start w-[400px] p-1 mb-6">
          <p className="text-[16px] font-normal">Already have an account? </p>
          <Link href="/authentication/login">
            <p className="text-[16px] font-semibold text-blue-700 ml-2">
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
