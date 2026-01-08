import React, { useState } from 'react'
import './CompaniesTab.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Footer } from '../Components-LandingPage/Footer';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import Apple from '../assets/Apple-Logo.png'
import Wipro from '../assets/WIT.png'
import CTS from '../assets/CTSH_BIG.png'
import Amazon from '../assets/AMZN_BIG.png'
import Google from '../assets/GOOG.png'
import Infy from '../assets/INFY_BIG.png'
import Tcs from '../assets/TCS.png'
import META from '../assets/META_BIG.png'
import starIcon from '../assets/Star_icon.png'
import { notificationsData } from './Afterloginlanding';
import { JNotification } from './JNotification';

/* Below Code is removed after backend integration*/
const companiesList = [
  {
    id: 1,
    name: "Apple",
    logo: Apple,
    rating: 4.3,
    reviews: "25k+",
    desc: "Join us. Be you.",
  },
  {
    id: 2,
    name: "Wipro",
    logo: Wipro,
    rating: 4.3,
    reviews: "55k+",
    desc: "Grow with us. Be bold.",
  },
  {
    id: 3,
    name: "Cognizant",
    logo: CTS,
    rating: 3.7,
    reviews: "55k+",
    desc: "Leading ITeS company with global presence",
  },
  {
    id: 4,
    name: "Amazon",
    logo: Amazon,
    rating: 4.0,
    reviews: "27.5k+",
    desc: "World’s largest Internet company",
  },
  {
    id: 5,
    name: "Google",
    logo: Google,
    rating: 4.5,
    reviews: "30k+",
    desc: "Organizing the world’s information",
  },
  {
    id: 6,
    name: "Infosys",
    logo: Infy,
    rating: 4.1,
    reviews: "50k+",
    desc: "Navigate your next",
  },
  {
    id: 7,
    name: "TCS",
    logo: Tcs,
    rating: 4.2,
    reviews: "65k+",
    desc: "Building on belief",
  },
  {
    id: 8,
    name: "Meta",
    logo: META,
    rating: 4.4,
    reviews: "22k+",
    desc: "Bring the world closer together",
  }
];

export const CompaniesTab = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const newNotificationsCount = notificationsData.filter(n => n.isNew).length;

  return (
    <>
      <header className="header">
        <div className="logo">job portal</div>
        <nav className="nav-links">
          <Link to="/Job-portal/jobseeker/" className="nav-item" >Home</Link>
          <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
          <a href="#" className="nav-item nav-active">Companies</a>
        </nav>

        <div className="auth-links">
          <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
          <div><img className='header-icons' src={chat} alt='Messages' /></div>
          <div onClick={() => setShowNotification(!showNotification)}><img className='header-icons' src={newNotificationsCount > 0 ? bell_dot: bell} alt='Notifications' /></div>
          <Link to="/Job-portal/jobseeker/myprofile"><img className='header-icons' src={profile} alt='My Profile' /></Link>
        </div>
        <JNotification notificationsData={notificationsData} showNotification={showNotification} setShowNotification={setShowNotification} />
      </header>

      <div className='jobs-tab-search-bar'>
        <div className="search-bar">
          <div className="search-field">
            <span><img src={search} className="icon-size" alt="search_icon" /></span>
            <input type="text" placeholder="Search by Skills, company or job title" />
          </div>
          <div className="separator"></div>

          <div className="search-field">
            <span><img src={location} className="icon-size" alt="location_icon" /></span>
            <input type="text" placeholder="Enter Location" />
          </div>
          <div className="separator"></div>

          <div className="search-field">
            <span><img src={tick} className="icon-size" alt="search_tick" /></span>
            <select defaultValue="" required>
              <option value="" disabled hidden>Enter Experience</option>
              <option value="fresher">Fresher</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </div>

          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="companies-tab-container">
        <div className="companies-tab-header">
          <h1 className="carousel-title">Find Jobs By Companies</h1>
        </div>
        <div className="companies-tab-grid">
          {companiesList.map((company) => (
            <div key={company.id} className="companies-tab-card">
              <div className="companies-tab-logo-container">
                <img src={company.logo} alt={`${company.name} logo`} className="companies-tab-logo" />
              </div>
              <h3 className="companies-tab-name">{company.name}</h3>
              <div className="companies-tab-rating-reviews">
                <span className="star companies-tab-rating-star"><img src={starIcon} /></span>
                <span className="companies-tab-rating">{company.rating}</span>
                <span className="companies-tab-separator">|</span>
                <span className="companies-tab-reviews">{company.reviews} reviews</span>
              </div>
              <p className="companies-tab-desc">{company.desc}</p>
              <button className="companies-tab-view-jobs-btn">View Jobs</button>
            </div>
          ))}
        </div>
        <div className="companies-tab-view-all-container">
          <button className="carousel-view-all">View more</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
