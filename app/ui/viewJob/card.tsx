import React from "react";
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

const data = [
  {
    company: "srgc",
    aboutJob:
      "A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with",
    jobRole: "teacher",
    location: "palakkad",
    skillsRequired: "good communication and teaching skill",
    specialization: "btech(cse), mtech",
    salary: "3.5 ctc",
    experience: "4 years",
    contact: "+91 89877 46893",
    companyWebsite: "https://www.instagram.com/",
  },
  {
    company: "srgc",
    aboutJob:
      "A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with",
    jobRole: "teacher",
    location: "palakkad",
    skillsRequired: "good communication and teaching skill",
    specialization: "btech(cse), mtech",
    salary: "3.5 ctc",
    experience: "4 years",
    contact: "+91 89877 46893",
    companyWebsite: "https://www.instagram.com/",
  },
  // Additional job objects...
];

// Function to capitalize each word
const capitalizeEachWord = (str) => {
  return str.toUpperCase();
};

const Card = ({ job }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto bg-white p-5 rounded-lg mx-2 my-2">
      <h1 className="text-2xl font-extrabold mb-4 text-center">
        Company Name:{" "}
        <span className="font-normal">{capitalizeEachWord(job.company)}</span>
      </h1>
      <hr className="mb-4" />
      <p className="text-lg font-bold mb-3">
        About Job: <span className="font-normal">{job.aboutJob}</span>
      </p>
      <hr className="mb-3" />
      <hr className="mb-3" />
      <div className="lg:flex flex-row items-center gap-4 mb-3">
        <button className="border-2 border-blue-800 p-1 h-10 w-24 rounded-lg hover:bg-blue-800 hover:text-white hover:text-[15px] hover:scale-95 text-blue-700 flex items-center justify-evenly">
          <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6" />
          <h2 className="font-bold">Edit</h2>
        </button>
        <button className="border-2 border-blue-800 p-1 h-10 w-24 rounded-lg hover:bg-blue-800 hover:text-white hover:text-[15px] hover:scale-95 text-blue-700 flex items-center justify-evenly">
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
          Job Role:{" "}
          <span className="font-normal">{capitalizeEachWord(job.jobRole)}</span>
        </p>
        <p className="text-lg font-bold flex items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="w-4 h-4 text-blue-700 mr-1"
          />
          Location:{" "}
          <span className="font-normal">
            {capitalizeEachWord(job.location)}
          </span>
        </p>
        <p className="text-lg font-bold flex items-center">
          <FontAwesomeIcon
            icon={faCode}
            className="w-6 h-6 text-blue-700 mr-1"
          />
          Required_Skill:{" "}
          <span className="font-normal capitalize">{job.skillsRequired}</span>
        </p>
        <p className="text-lg font-bold flex items-center">
          <FontAwesomeIcon
            icon={faAddressCard}
            className="w-4 h-4 text-blue-700 mr-1"
          />
          Course_Specialization:{" "}
          <span className="font-normal ">{job.specialization}</span>
        </p>
        <p className="text-lg font-bold flex items-center">
          <FontAwesomeIcon
            icon={faCreditCard}
            className="w-4 h-4 text-blue-700 mr-1"
          />
          Salary: <span className="font-normal">{job.salary}</span>
        </p>
        <p className="text-lg font-bold flex items-center">
          <FontAwesomeIcon
            icon={faRankingStar}
            className="w-4 h-4 text-blue-700 mr-1"
          />
          Experience:{" "}
          <span className="font-normal">
            {capitalizeEachWord(job.experience)}
          </span>
        </p>
        <p className="text-lg font-bold flex items-center">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-4 h-4 text-blue-700 mr-1"
          />
          Contact_Info: <span className="font-normal">{job.contact}</span>
        </p>
      </div>
      <div className="lg:flex flex-row items-center gap-4">
        <a
          href={job.companyWebsite}
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
  );
};

const CardList = () => {
  return (
    <div className="p-5 flex flex-wrap justify-center">
      {data.map((job, index) => (
        <Card key={index} job={job} />
      ))}
    </div>
  );
};

export default CardList;
