"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db, storage } from "../../backend/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doc, addDoc, collection, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  setUserUID,
  getUserUID,
  setUserProfile,
  getUserProfile,
} from "../../backend/firebase/globalState";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [batch, setBatch] = useState("");
  const [course, setCourse] = useState("");
  const [connectedTo, setConnectedTo] = useState("");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null); // State to store file URL
  const router = useRouter();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res.user) {
        const imageUrl = await uploadImage(file, res.user.uid);
        setUserUID(res.user.uid);
        setUserProfile({
          imageUrl: imageUrl,
          name: name,
          email: email,
          phone: phone,
          middleName: middleName,
          lastName: lastName,
          gender: gender,
          batch: batch,
          course: course,
          connectedTo: connectedTo,
        });
        console.log("User data saved successfully");
        console.log(getUserUID());
        console.log(getUserProfile());
        clearForm();
        router.push("/authentication/login");
      } else {
        setErrors({ general: "Something went wrong" });
      }
    } catch (e) {
      setErrors({ general: e.message });
    }
  };

  const uploadImage = async (file, uid) => {
    if (!file) return null;
    const storageRef = ref(storage, `users/${uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log({ downloadURL });
    return downloadURL;
  };

  // const saveUserData = async (uid, imageUrl, ...userData) => {
  //   try {
  //     const userRef = doc(collection(db, "users"));
  //     const userDataDocRef = collection(userRef, "userData");

  //     await addDoc(userDataDocRef, {
  //       FName: userData[0],
  //       Email: userData[1],
  //       Phone: userData[2],
  //       MName: userData[3] || "",
  //       LName: userData[4] || "",
  //       Gender: userData[5],
  //       Batch: userData[6],
  //       Course: userData[7],
  //       ConnectedTo: userData[8] || "",
  //       ProfileImage: imageUrl || "",
  //     });

  //     console.log("Document written with ID: ", uid);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //     throw new Error("Failed to add user data to Firestore");
  //   }
  // };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRepeatPassword("");
    setMiddleName("");
    setLastName("");
    setGender("");
    setBatch("");
    setCourse("");
    setConnectedTo("");
    setFile(null);
    setFileUrl(null);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePasswordMatch = (password, repeatPassword) => {
    return password === repeatPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (name.trim() === "") {
      errors.name = "First name is required";
    }
    if (middleName.trim() === "") {
      setMiddleName(" ");
    }
    if (lastName.trim() === "") {
      setLastName(" ");
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
    if (gender.trim() === "") {
      errors.gender = "Gender is required";
    }
    if (batch.trim() === "") {
      errors.batch = "Batch is required";
    }
    if (course.trim() === "") {
      errors.course = "Course is required";
    }
    if (connectedTo.trim() === "") {
      setConnectedTo(" ");
    }
    if (!file) {
      errors.file = "Profile image is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    handleSignUp();
  };

  return (
    <div className="bg-[#edeced] h-screen flex flex-col justify-center items-center">
      <div className="bg-white w-auto h-auto rounded-xl p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl mt-5 text-blue-700">REGISTER</h1>
          <div className="flex flex-row justify-center mt-7 items-center">
            <div className="block w-auto h-auto mx-4">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px]"
              />
              {errors.name && (
                <p className="text-red-600 text-left">{errors.name}</p>
              )}
            </div>
            <div className="block w-auto h-auto mx-4">
              <input
                type="text"
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px]"
              />
              {errors.middleName && (
                <p className="text-red-600 text-left">{errors.middleName}</p>
              )}
            </div>
            <div className="block w-auto h-auto mx-4">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px]"
              />
              {errors.lastName && (
                <p className="text-red-600 text-left">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-row justify-center mt-7 items-center">
            <div className="block w-auto h-auto mx-4">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px] bg-white"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-600 text-left">{errors.gender}</p>
              )}
            </div>
            <div className="block w-auto h-auto mx-4">
              <input
                type="number"
                placeholder="Batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px]"
              />
              {errors.batch && (
                <p className="text-red-600 text-left">{errors.batch}</p>
              )}
            </div>
            <div className="block w-auto h-auto mx-4">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px] bg-white"
              >
                <option value="">Course Graduated</option>
                <option value="cse">Computer Science Engineering</option>
                <option value="me">Mechanical Engineering</option>
                <option value="ce">Civil Engineering</option>
                <option value="eee">Electrical Electronics Engineering</option>
                <option value="ece">
                  Electronics Communication Engineering
                </option>
                <option value="it">Information Technology</option>
              </select>
              {errors.course && (
                <p className="text-red-600 text-left">{errors.course}</p>
              )}
            </div>
          </div>

          <div className="flex flex-row justify-center mt-7 items-center">
            <div className="block w-auto h-auto mx-4">
              <input
                type="text"
                placeholder="Connected To"
                value={connectedTo}
                onChange={(e) => setConnectedTo(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px] h-[150px]"
              />
              {errors.connectedTo && (
                <p className="text-red-600 text-left">{errors.connectedTo}</p>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <div className="block w-auto h-auto mx-4">
                <input
                  type="file"
                  placeholder="Image"
                  onChange={handleChange}
                  className="border-2 border-black p-3 rounded-xl w-[400px]"
                />
                {errors.file && (
                  <p className="text-red-600 text-left">{errors.file}</p>
                )}
              </div>
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  className="w-[90px] h-[90px] mx-4"
                  alt="User Upload"
                />
              )}
            </div>

            <div className="block w-auto h-auto mx-4">
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
          </div>

          <div className="flex flex-row justify-center mt-7 items-center">
            <div className="block w-auto h-auto mx-4">
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
            <div className="block w-auto h-auto mx-4">
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
            <div className="block w-auto h-auto mx-4">
              <input
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="border-2 border-black p-3 rounded-xl w-[400px]"
              />
              {errors.repeatPassword && (
                <p className="text-red-600 text-left">
                  {errors.repeatPassword}
                </p>
              )}
            </div>
          </div>

          {errors.general && (
            <p className="text-red-600 text-left mt-4">{errors.general}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-5 h-[50px] w-[400px] bg-blue-700 p-2 rounded-xl text-white font-bold mb-1"
        >
          <h1 className="text-2xl font-bold">Register</h1>
        </button>

        <div className="flex justify-start w-[400px] p-1 mb-6">
          <p className="text-[16px] font-normal">Already have an account?</p>
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
