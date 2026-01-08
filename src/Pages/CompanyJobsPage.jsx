import React from "react";
import "./CompanyJobsPage.css";

const CompanyJobsPage = () => {
  return (
    <div className="companyjobs-container">
      <h1 className="page-title">Find Jobs By Company</h1>

      {/* Company Header Card */}
      <div className="company-header">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png"
          alt="Wipro"
          className="company-logo"
        />

        <div className="company-info">
          <h2>Wipro</h2>
          <p className="rating">
            rating 4.3 | 55k+ reviews 
          </p>
          <p className="tagline">Grow with us. Be bold.</p>
        </div>
      </div>

      {/* Job Card */}
      <div className="job-card">
        <div className="job-title-row">
          <h3>UX/UI Designer</h3>
          <div className="company-icon">W</div>
        </div>

        <p className="job-company">
          Wipro &nbsp; ⭐ 4.3 &nbsp; 55k+ reviews
        </p>

        <div className="job-details">
          <p>📘 3 months training</p>
          <p>💰 ₹20,000 - ₹25,000/month</p>
          <p>📅 2 to 3 years of experience</p>
          <p>📍 Chennai</p>
        </div>

        <span className="badge">Full-Time</span>

        <hr />

        <div className="footer-info">
          <p>Posted: 3 days ago</p>
          <p>Openings: 2</p>
          <p>Applicants: 100+</p>
        </div>

        <div className="action-buttons">
          <button className="save-btn">Save</button>
          <button className="apply-btn">Apply</button>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights-card">
        <h3>Job Highlights</h3>
        <ul>
          <li>Candidates with 2 to 3 years of relevant experience</li>
          <li>Proven UX Design experience</li>
          <li>Strong communication skills</li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyJobsPage;
