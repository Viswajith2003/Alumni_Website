// components/ViewJobPopup.js
const ViewJobPopup = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>View Job</h2>
        <p>
          <strong>Company Name:</strong> {job.companyName}
        </p>
        <p>
          <strong>About Job:</strong> {job.aboutJob}
        </p>
        <p>
          <strong>Job Role:</strong> {job.jobRole}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Required Skill:</strong> {job.requiredSkill}
        </p>
        <p>
          <strong>Course Specialization:</strong> {job.courseSpecialization}
        </p>
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>
        <p>
          <strong>Experience:</strong> {job.experience}
        </p>
        <p>
          <strong>Contact Info:</strong> {job.contactInfo}
        </p>
        <p>
          <strong>Company Website:</strong>{" "}
          <a href={job.companyWebsite}>{job.companyWebsite}</a>
        </p>
        <button onClick={onClose}>Close</button>
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
