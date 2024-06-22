"use client";
import { useState, useEffect } from "react";
import { ref, onValue, remove, update } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
import EditJobPopup from "./EditJobPopup.jsx";
import { db, database } from "../../backend/firebase/config";
import ViewJobPopup from "./ViewJobPopup.jsx";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [viewingJob, setViewingJob] = useState(null);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsRef = ref(database, "jobs");
      onValue(jobsRef, async (snapshot) => {
        const data = snapshot.val();
        const allJobs = [];
        const userDetails = {};

        for (const userId in data) {
          for (const jobId in data[userId]) {
            allJobs.push({
              id: jobId,
              userId: userId,
              ...data[userId][jobId],
            });
          }

          // Fetch user details for each userId
          const docRef = doc(db, "users", userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            userDetails[userId] = docSnap.data();
          }
        }

        setJobs(allJobs);
        setUserDetails(userDetails);
      });
    };

    fetchJobs();
  }, []);

  const handleDelete = (userId, jobId) => {
    const jobRef = ref(database, `jobs/${userId}/${jobId}`);

    if (window.confirm("Are you sure you want to delete this job?")) {
      remove(jobRef)
        .then(() => {
          console.log("Job deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting job: ", error);
        });
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const handleSave = (updatedJob) => {
    const jobRef = ref(database, `jobs/${updatedJob.userId}/${updatedJob.id}`);
    update(jobRef, updatedJob)
      .then(() => {
        console.log("Job updated successfully");
        setEditingJob(null);
      })
      .catch((error) => {
        console.error("Error updating job: ", error);
      });
  };

  const handleView = (job) => {
    setViewingJob(job);
  };

  const handleClose = () => {
    setViewingJob(null);
    setEditingJob(null);
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Jobs List</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            New
          </button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Company</th>
              <th className="border border-gray-300 px-4 py-2">Job Title</th>
              <th className="border border-gray-300 px-4 py-2">Posted By</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.companyName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.jobRole}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {userDetails[job.userId]?.firstname}{" "}
                  {userDetails[job.userId]?.lastname}
                  {/* {job.userId} */}
                </td>
                <td className="border border-gray-300 px-4 py-2 space-x-4">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => handleView(job)}
                  >
                    View
                  </button>
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => handleEdit(job)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(job.userId, job.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {viewingJob && <ViewJobPopup job={viewingJob} onClose={handleClose} />}
        {editingJob && (
          <EditJobPopup
            job={editingJob}
            onClose={handleClose}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default JobList;
