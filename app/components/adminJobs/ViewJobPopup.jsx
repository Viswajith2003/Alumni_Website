import { IoMdCloseCircleOutline } from "react-icons/io";
const ViewJobPopup = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl text-blue-600">View Job</h2>
          <IoMdCloseCircleOutline
            onClick={onClose}
            className="w-8 h-8 font-bold text-red-600"
          />
        </div>
        <div className="mt-8 p-4 border rounded-lg bg-white shadow-md space-y-4">
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Company Name:</strong>
            </label>
            <input
              type="text"
              value={job.companyName}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>About Job:</strong>
            </label>
            <textarea
              readOnly
              value={job.aboutJob}
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
              rows={4} // Adjust the number of rows as needed
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Job Role:</strong>
            </label>
            <input
              type="text"
              value={job.jobRole}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Location:</strong>
            </label>
            <input
              type="text"
              value={job.location}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Required Skill:</strong>
            </label>
            <input
              type="text"
              value={job.requiredSkill}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Course Specialization:</strong>
            </label>
            <input
              type="text"
              value={job.courseSpecialization}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Salary:</strong>
            </label>
            <input
              type="text"
              value={job.salary}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Experience:</strong>
            </label>
            <input
              type="text"
              value={job.experience}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Contact Info:</strong>
            </label>
            <input
              type="text"
              value={job.contactInfo}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="block font-medium w-1/3">
              <strong>Company Website:</strong>
            </label>
            <input
              type="text"
              value={job.companyWebsite}
              readOnly
              className="w-2/3 p-2 border rounded-lg bg-gray-100 text-blue-500"
            />
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default ViewJobPopup;
