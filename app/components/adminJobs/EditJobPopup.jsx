import { IoMdCloseCircleOutline } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { useState, useEffect } from "react";

const EditJobPopup = ({ job, onClose, onSave }) => {
  const [jobDetails, setJobDetails] = useState(job);

  useEffect(() => {
    setJobDetails(job);
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSave = () => {
    onSave(jobDetails);
    onClose();
  };

  if (!job) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl text-blue-600 mt-2">Edit Job</h2>
          <div className="flex">
            <div className="flex justify-center items-center border-4 border-green-400 rounded-full mr-2 p-1">
              <TiTickOutline
                onClick={handleSave}
                className="w-8 h-8 font-bold text-green-600"
              />
            </div>
            <IoMdCloseCircleOutline
              onClick={onClose}
              className="w-12 h-12 font-bold text-red-600"
            />
          </div>
        </div>
        <form className="mt-8 p-4 border rounded-lg bg-white shadow-md space-y-4">
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Company Name:</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={jobDetails.companyName}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">About Job:</label>
            <textarea
              name="aboutJob"
              placeholder="About Job"
              value={jobDetails.aboutJob}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
              rows={4}
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Job Role:</label>
            <input
              type="text"
              name="jobRole"
              placeholder="Job Role"
              value={jobDetails.jobRole}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={jobDetails.location}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Required Skill:</label>
            <input
              type="text"
              name="requiredSkill"
              placeholder="Required Skill"
              value={jobDetails.requiredSkill}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              Course Specialization:
            </label>
            <input
              type="text"
              name="courseSpecialization"
              placeholder="Course Specialization"
              value={jobDetails.courseSpecialization}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Salary:</label>
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={jobDetails.salary}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Experience:</label>
            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={jobDetails.experience}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Contact Info:</label>
            <input
              type="text"
              name="contactInfo"
              placeholder="Contact Info"
              value={jobDetails.contactInfo}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">Company Website:</label>
            <input
              type="url"
              name="companyWebsite"
              placeholder="Company Website"
              value={jobDetails.companyWebsite}
              onChange={handleChange}
              required
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center justify-end space-x-2"></div>
        </form>
      </div>
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-content {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          max-width: 500px;
        }
        form input,
        form textarea {
          display: block;
          width: 100%;
          margin-bottom: 10px;
        }
        form button {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default EditJobPopup;
