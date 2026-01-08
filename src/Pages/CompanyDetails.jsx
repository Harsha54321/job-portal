import React from 'react';
import { useParams } from 'react-router-dom';

const companyData = {
  wipro: {
    name: "Wipro",
    desc: "Grow with us. Be bold.",
    jobs: ["UI/UX Designer", "Frontend Developer", "Software Engineer"],
  },
  cognizant: {
    name: "Cognizant",
    desc: "Leading ITeS company with global presence",
    jobs: ["Software Engineer", "QA Tester", "Business Analyst"],
  },
  amazon: {
    name: "Amazon",
    desc: "World’s largest Internet company",
    jobs: ["Full Stack Developer", "Cloud Engineer", "Operations Manager"],
  },
  infosys: {
    name: "Infosys",
    desc: "Navigate your next",
    jobs: ["React Developer", "System Engineer", "Tech Lead"],
  },
  google: {
    name: "Google",
    desc: "Organizing the world’s information",
    jobs: ["Data Scientist", "Frontend Developer", "AI Engineer"],
  },
  tcs: {
    name: "TCS",
    desc: "Building on belief",
    jobs: ["Java Developer", "Support Engineer", "QA Tester"],
  },
  meta: {
    name: "Meta",
    desc: "Bring the world closer together",
    jobs: ["AR Developer", "UI Designer", "Frontend Developer"],
  },
};

const CompanyDetails = () => {
  const { companyName } = useParams();
  const company = companyData[companyName.toLowerCase()];

  if (!company) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Company not found!</h2>;
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>{company.name}</h1>
      <p>{company.desc}</p>
      <h3>Available Jobs</h3>
      <ul>
        {company.jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetails;
