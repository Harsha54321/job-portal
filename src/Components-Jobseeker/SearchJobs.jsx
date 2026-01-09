import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import { notificationsData } from './Afterloginlanding';
import { JNotification } from './JNotification';
import './SearchJobs.css'
import { JobList } from '../../JobList';
import { useEffect } from "react";

import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import starIcon from '../assets/Star_icon.png'



function formatPostedDate(dateString) {
  const postedDate = new Date(dateString);
  const today = new Date();

  const diffInMs = today - postedDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Posted: today";
  if (diffInDays === 1) return "Posted: 1 day ago";
  if (diffInDays > 1 && diffInDays <= 30) return `Posted: ${diffInDays} days ago`;
  if (diffInDays > 30 && diffInDays <= 60) return `Posted: 1+ month ago`;
  if (diffInDays > 60 && diffInDays <= 90) return `Posted: 2+ months ago`;

  return `Posted: Long ago`;
}

export default formatPostedDate;

export const SearchJobs = () => {
  const navigate = useNavigate();

  const workTypeOptions = ['On-site', 'Remote', 'Hybrid'];
  const locationOptions = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai'];

  const [showNotification, setShowNotification] = useState(false);
  const newNotificationsCount = notificationsData.filter(n => n.isNew).length;

  const [showAllLocations, setShowAllLocations] = useState(false);
  const [checkedfilter, setCheckedfilter] = useState([]);
  const visibleLocations = showAllLocations
    ? locationOptions
    : locationOptions.slice(0, 3);

  const handleClearAll = () => {
    setCheckedfilter([]);
  };

  const handleSelectfilter = (e) => {
    const value = e.target.value;
    console.log("Clicked:", e.target.value);

    // console.log("Clicked:", value);          
    // console.log("Before:", checkedfilter);

    setCheckedfilter((prev) => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value)
      }
      else {
        return [...prev, value]
      }
    })

  }
  useEffect(() => {
    console.log("State:", checkedfilter);
  }, [checkedfilter]);

  const getFilteredJobs = () => {
    if (checkedfilter.length == 0) {
      return JobList;

    }
    return JobList.filter((job) => {
      return (
        checkedfilter.includes(job.WorkType) || checkedfilter.includes(job.location)
      )
    })
  }



  return (
    <>
      <header className="header">
        <div className="logo">Job portal</div>
        <nav className="nav-links">
          <Link to="/Job-portal/jobseeker/" className="nav-item" >Home</Link>
          <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
          <a href="#" className="nav-item nav-active">Companies</a>
        </nav>

        <div className="auth-links">
          <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
          <div><img className='header-icons' src={chat} alt='Messages' /></div>
          <div onClick={() => setShowNotification(!showNotification)}><img className='header-icons' src={newNotificationsCount > 0 ? bell_dot : bell} alt='Notifications' /></div>
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
      <div className='search-section'>
        <h1 className='title'>Job Based On Your Search</h1>
        <div className='container'>
          <div className='apply-filters-section'>
            <div className='filter-header'>
              <h2 className='apply-filter'>Apply Filters</h2>
              <span className='clear-all' onClick={handleClearAll}>Clear All</span>
            </div>
            <div className='filter-category'>
              <div className='title'>Work type</div>

              <div className='filter-options'>
                {workTypeOptions.map((date, index) => (
                  <div key={`filter-${index}`} className='filter-option'>
                    <input
                      type="checkbox"

                      id={`filter-${index}`}
                      name="filter"
                      value={date}
                      onChange={handleSelectfilter}
                      checked={checkedfilter.includes(date)}
                    />
                    <label htmlFor={`filter-${index}`}>{date}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="filter-category">
              <div className="title">Location</div>

              <div className="filter-options">
                {visibleLocations.map((date, index) => (
                  <div key={`location-${index}`} className="filter-option">
                    <input
                      type="checkbox"
                      id={`location-${index}`}
                      value={date}
                      onChange={handleSelectfilter}
                      checked={checkedfilter.includes(date)}
                    />
                    <label htmlFor={`location-${index}`}>{date}</label>
                  </div>
                ))}
              </div>

              {locationOptions.length > 3 && (
                <div
                  className="view-more"
                  onClick={() => setShowAllLocations(!showAllLocations)}
                >
                  {showAllLocations ? "View Less" : "View More"}
                </div>
              )}
            </div>

          </div>

          <div className='main-jobs-section'>

            <div className='jobs-list'>
              {getFilteredJobs().map((job) => (
                <div className="job-card" key={job.id}>

                  <div className="job-top">
                    <div>
                      <h3 className="job-title">{job.title}</h3>
                      <div className="company-row">
                        <span>{job.company}</span>
                        <span className="rating">
                          <img src={starIcon} className="icon" />
                          {job.ratings} | {job.reviewNo}+ reviews
                        </span>
                      </div>
                    </div>

                    <div>
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="job-logo"
                        />
                      ) : (
                        <div className="job-logo-placeholder">
                          {job.company.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="job-info">
                    <span>
                      <img src={time} className="icon" />
                      {job.duration}
                    </span>

                    <span>
                      ₹ {job.salary} LPA
                    </span>

                    <span>
                      <img src={experience} className="icon" />
                      {job.experience}+ yrs
                    </span>

                    <span>
                      <img src={place} className="icon" />
                      {job.location}
                    </span>
                  </div>


                  <div className="job-info">
                    <span>
                      <img src={time} className="icon" />
                      Shift: {job.Shift}
                    </span>

                    <span>
                      <img src={experience} className="icon" />
                      {job.WorkType}
                    </span>
                  </div>


                  <div className="job-footer">
                    <span>
                      {formatPostedDate(job.posted)} | Openings: {job.openings} | Applicants: {job.applicants}
                    </span>

                    <div>
                      <button className="save-btn">Save</button>
                      <button className="apply-btn" >Apply</button>
                    </div>
                  </div>

                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
