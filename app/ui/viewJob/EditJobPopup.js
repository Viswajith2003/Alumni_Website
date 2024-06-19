// components/EditJobPopup.js
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
        <h2>Edit Job</h2>
        <form>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={jobDetails.companyName}
            onChange={handleChange}
            required
          />
          <textarea
            name="aboutJob"
            placeholder="About Job"
            value={jobDetails.aboutJob}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="jobRole"
            placeholder="Job Role"
            value={jobDetails.jobRole}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={jobDetails.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="requiredSkill"
            placeholder="Required Skill"
            value={jobDetails.requiredSkill}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="courseSpecialization"
            placeholder="Course Specialization"
            value={jobDetails.courseSpecialization}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={jobDetails.salary}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={jobDetails.experience}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactInfo"
            placeholder="Contact Info"
            value={jobDetails.contactInfo}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="companyWebsite"
            placeholder="Company Website"
            value={jobDetails.companyWebsite}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={onClose}>
            Close
          </button>
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
