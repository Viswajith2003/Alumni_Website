"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faTrashCan,
  faBriefcase,
  faLocationDot,
  faCode,
  faAddressCard,
  faCreditCard,
  faPhone,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";

import data from "../../constants/jobData";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";

const JobDetails = () => {
  const [jobs, setJobs] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const jobRef = ref(db, "jobs");
    onValue(jobRef, (snapshot) => {
      const data = snapshot.val();
      setJobs(data);
    });
  }, []);

  const handleDelete = (id) => {
    const db = getDatabase();
    const jobRef = ref(db, "jobs/" + id);
    remove(jobRef)
      .then(() => {
        console.log("Job deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting job: ", error);
      });
  };

  const handleEdit = (id, updatedJob) => {
    const db = getDatabase();
    const jobRef = ref(db, "jobs/" + id);
    update(jobRef, updatedJob)
      .then(() => {
        console.log("Job updated successfully");
      })
      .catch((error) => {
        console.error("Error updating job: ", error);
      });
  };

  const capitalizeEachWord = (str) => {
    return str.toUpperCase();
  };

  return (
    <div className="bg-[#edeced] pt-4 flex flex-col justify-center items-center text-center h-auto ">
      <h1 className="text-3xl font-bold mb-5 w-auto">Available Jobs</h1>
      <div className="container flex flex-row justify-center items-center">
        {jobs &&
          Object.keys(jobs).map((id) => (
            <div
              key={id}
              className=" w-auto sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto bg-white p-5 rounded-lg mx-2 my-2"
            >
              <h1 className="text-2xl font-extrabold mb-4 text-center">
                Company Name:
                <span className="font-normal">
                  {" " + capitalizeEachWord(jobs[id].companyName)}
                </span>
              </h1>
              <hr className="mb-4" />
              <p className="text-lg font-bold mb-3">
                About Job:
                <span className="font-normal">{" " + jobs[id].aboutJob}</span>
              </p>
              <hr className="mb-3" />
              <hr className="mb-3" />
              <div className="lg:flex flex-row items-center gap-4 mb-3">
                <button
                  className="border-2 border-blue-800 p-1 h-10 w-24 rounded-lg hover:bg-blue-800 hover:text-white hover:text-[15px] hover:scale-95 text-blue-700 flex items-center justify-evenly"
                  onClick={() => handleEdit(id, jobs[id])}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6" />
                  <h2 className="font-bold">Edit</h2>
                </button>
                <button
                  className="border-2 border-blue-800 p-1 h-10 w-24 rounded-lg hover:bg-blue-800 hover:text-white hover:text-[15px] hover:scale-95 text-blue-700 flex items-center justify-evenly"
                  onClick={() => handleDelete(id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} className="w-6 h-6" />
                  <h2 className="font-bold">Delete</h2>
                </button>
              </div>
              <hr className="mb-3" />
              <div className="mb-3">
                <p className="text-lg font-bold flex items-center">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="w-4 h-4 text-blue-700 mr-1"
                  />
                  Job Role:
                  <span className="font-normal">
                    {" " + capitalizeEachWord(jobs[id].jobRole)}
                  </span>
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 h-4 text-blue-700 mr-1"
                  />
                  Location:
                  <span className="font-normal">
                    {" " + capitalizeEachWord(jobs[id].location)}
                  </span>
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="w-6 h-6 text-blue-700 mr-1"
                  />
                  Required_Skill:
                  <span className="font-normal capitalize">
                    {" " + jobs[id].requiredSkill}
                  </span>
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="w-4 h-4 text-blue-700 mr-1"
                  />
                  Course_Specialization:
                  <span className="font-normal ">
                    {" " + jobs[id].courseSpecialization}
                  </span>
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="w-4 h-4 text-blue-700 mr-1"
                  />
                  Salary:
                  <span className="font-normal">{" " + jobs[id].salary}</span>
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FontAwesomeIcon
                    icon={faRankingStar}
                    className="w-4 h-4 text-blue-700 mr-1"
                  />
                  Experience:
                  <span className="font-normal">
                    {" " + capitalizeEachWord(jobs[id].experience)}
                  </span>
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-4 h-4 text-blue-700 mr-1"
                  />
                  Contact_Info:
                  <span className="font-normal">
                    {" " + jobs[id].contactInfo}
                  </span>
                </p>
              </div>
              <div className="lg:flex flex-row items-center gap-4">
                <a
                  href={jobs[id].companyWebsite}
                  className="bg-blue-700 px-3 py-2 h-10 rounded-lg text-white font-bold hover:border-blue-800 border-2 hover:bg-white hover:text-blue-700 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Company Website
                </a>
                <button className="border-2 border-blue-800 p-1 h-10 w-20 rounded-lg hover:bg-blue-800 hover:text-white text-blue-700">
                  <h2 className="font-bold">Apply</h2>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobDetails;
