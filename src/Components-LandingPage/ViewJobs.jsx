import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft,} from "react-icons/fa";

import { OpportunitiesCard } from '../Components-Jobseeker/OpportunitiesCard';

import Amazon from '../assets/AMZN_BIG.png';
import Infy from '../assets/INFY_BIG.png';
import Wipro from '../assets/WIT.png';
import CTS from '../assets/CTSH_BIG.png';

const company = { 
  name: 'Wipro', 
  logo: Wipro,     
  desc: 'Grow with us. Be bold.'
};

const jobs = [
  {
    title: "Data Analyst",
    company: "Tech Solutions Inc.",
    type: "3 months duration",
    salary: "₹ 30,000/month",
    experience: "0 to 1 year of experience",
    location: "Coimbatore",
    tags: ["Internship"],
    posted: "2 days ago",
    openings: 5,
    applicants: 40,
    logo: "",
  },
  {
    title: "Marketing Manager",
    company: "",
    type: "3 months duration",
    salary: "₹ 40,000/month",
    experience: "2 to 3 years of experience",
    location: "Chennai",
    tags: ["Full-Time"],
    posted: "1 week ago",
    openings: 1,
    applicants: 80,
    logo: "",
  },
  {
    title: "Senior Software Engineer",
    company: "",
    type: "Permanent",
    salary: "₹ 60,000/month",
    experience: "3 to 5 years of experience",
    location: "Chennai",
    tags: ["Full-Time"],
    posted: "2 days ago",
    openings: 2,
    applicants: 50,
    logo: Amazon,
  },
  {
    title: "UX/UI Designer",
    company: "creative minds studio",
    type: "3 months duration",
    salary: "Unpaid",
    experience: "0 to 1 year of experience",
    location: "Chennai",
    tags: ["Internship"],
    posted: "1 week ago",
    openings: 1,
    applicants: 80,
    logo: "",
  },
  {
    title: "Software Tester",
    company: "Infosys",
    type: "Full-Time",
    salary: "₹ 35,000/month",
    experience: "1 to 2 years of experience",
    location: "Bangalore",
    tags: ["Full-Time"],
    posted: "5 days ago",
    openings: 3,
    applicants: 65,
    logo: Infy,
  },
  {
    title: "HR Intern",
    company: "Wipro",
    type: "3 months duration",
    salary: "₹ 15,000/month",
    experience: "0 to 1 year of experience",
    location: "Hyderabad",
    tags: ["Internship"],
    posted: "3 days ago",
    openings: 4,
    applicants: 90,
    logo: Wipro,
  },
  {
    title: "Business Analyst",
    company: "Cognizant",
    type: "Full-Time",
    salary: "₹ 45,000/month",
    experience: "2 to 3 years of experience",
    location: "Chennai",
    tags: ["Full-Time"],
    posted: "1 week ago",
    openings: 2,
    applicants: 70,
    logo: CTS,
  },
  {
    title: "Web Developer Intern",
    company: "Startup Hub",
    type: "6 months duration",
    salary: "₹ 20,000/month",
    experience: "0 to 1 year of experience",
    location: "Remote",
    tags: ["Internship"],
    posted: "4 days ago",
    openings: 2,
    applicants: 45,
    logo: "",
  },
];

const ViewJobs = () => {

  const navigate = useNavigate();

  return (
    <div style={{ background: '#f7f9fc', minHeight: '100vh', padding: '32px 0' }}>
      
      <div style={{
        width: "85%",
        margin: "0 auto",
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "80px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: "30px"
      }}>
        
        
        <button
          onClick={() => navigate(-1)}
          style={{
            border: "none",
            background: "#f0f0f0",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            gap: "8px",
            display: "flex",
            alignItems: "top left corner",
            fontSize: "14px",
            color: "#333"
          }}
        >
          <FaArrowLeft /> Back
        </button>

        
        <img 
          src={company.logo} 
          alt="logo" 
          style={{ height: "70px" }} 
        />

       
        <div>
          <h2 style={{ marginBottom: "5px" }}>{company.name}</h2>
          <p style={{ margin: "0", color: "#444" }}>
            ⭐ 4.3 | 55k+ Reviews
          </p>
          <p style={{ margin: "5px 0", color: "#777" }}>
            {company.desc}
          </p>
        </div>
      </div>

    
      <section className='Opportunities-section'>
        <div className="Opportunities-job-list">
          {jobs.map((job, index) => (
            <OpportunitiesCard key={index} job={job} />
          ))}
        </div>

        <button 
          onClick={() => navigate('/Job-portal/jobseeker/jobs')} 
          className="Opportunities-view-more-btn">
          View More
        </button>
      </section>

    </div>
  );
};

export default ViewJobs;
