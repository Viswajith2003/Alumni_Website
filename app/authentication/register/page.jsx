"use client";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../backend/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { userInputs } from "../../constants/formSource";

export default function Register() {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [per, setPerc] = useState(null);

  const initialState = {
    firstname: "",
    middlename: "",
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
  };

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
          console.log("Upload is " + progress + "% done");
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
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
      console.log("submitting");
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
        console.log(e);
      }
    }
  };
  function resetForm() {
    setData(initialState);
    setFile(null);
  }
  return (
    <div className="bg-[#edeced] h-screen flex flex-col justify-center items-center">
      <div className="bg-white w-auto h-auto rounded-xl p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl mt-5 text-blue-700">REGISTER</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
            {userInputs.map((input) => (
              <div key={input.id} className="block w-full h-full">
                {input.type === "select" ? (
                  <select
                    id={input.id}
                    value={data[input.id]}
                    onChange={handleInput}
                    className="border-2 border-black p-3 rounded-xl w-full"
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
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={data[input.id]}
                    onChange={handleInput}
                    className="border-2 border-black p-3 rounded-xl w-full"
                  />
                )}
                {errors[input.id] && (
                  <p className="text-red-600 text-left">{errors[input.id]}</p>
                )}
              </div>
            ))}
            <div className="block w-full h-full">
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="border-2 border-black p-3 rounded-xl w-full"
              />
              {errors.file && (
                <p className="text-red-600 text-left">{errors.file}</p>
              )}
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  className="w-[90px] h-[90px] mx-3"
                  alt="User Upload"
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={per !== null && per < 100}
          className={`mt-5 h-[50px] w-[400px] bg-${
            per !== null && per < 100 ? "blue-200" : "blue-700"
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
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
