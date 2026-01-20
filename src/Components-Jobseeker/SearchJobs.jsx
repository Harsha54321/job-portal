import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import locationIcon from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'

import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import starIcon from '../assets/Star_icon.png'

import { notificationsData } from './Afterloginlanding'
import { JNotification } from './JNotification'
import { JobList } from '../../JobList'

import './SearchJobs.css'


function formatPostedDate(dateString) {
  const postedDate = new Date(dateString)
  const today = new Date()

  const diffInMs = today - postedDate
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return "Posted: today"
  if (diffInDays === 1) return "Posted: 1 day ago"
  if (diffInDays <= 30) return `Posted: ${diffInDays} days ago`
  if (diffInDays <= 60) return `Posted: 1+ month ago`
  if (diffInDays <= 90) return `Posted: 2+ months ago`

  return `Posted: Long ago`
}

export const SearchJobs = () => {
  const navigate = useNavigate()

  /* -------------------- STATE -------------------- */
  const [showNotification, setShowNotification] = useState(false)
  const newNotificationsCount = notificationsData.filter(n => n.isNew).length

  const [checkedfilter, setCheckedfilter] = useState([])
  const [showAllLocations, setShowAllLocations] = useState(false)

  const [workTypeOptions, setWorkTypeOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])

  /* -------------------- AUTO FILTER OPTIONS -------------------- */
  useEffect(() => {
    const workTypes = [
      ...new Set(JobList.map(job => job.WorkType).filter(Boolean))
    ]

    const locations = [
      ...new Set(JobList.map(job => job.location).filter(Boolean))
    ]

    setWorkTypeOptions(workTypes)
    setLocationOptions(locations)
  }, [])

  const visibleLocations = showAllLocations
    ? locationOptions
    : locationOptions.slice(0, 3)

  /* -------------------- FILTER HANDLERS -------------------- */
  const handleClearAll = () => {
    setCheckedfilter([])
  }

  const handleSelectfilter = (e) => {
    const value = e.target.value

    setCheckedfilter(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  /* -------------------- FILTER JOBS -------------------- */
  const getFilteredJobs = () => {
    if (checkedfilter.length === 0) return JobList

    return JobList.filter(job =>
      checkedfilter.includes(job.WorkType) ||
      checkedfilter.includes(job.location)
    )
  }

  /* -------------------- JSX -------------------- */
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">Job portal</div>

        <nav className="nav-links">
          <Link to="/Job-portal/jobseeker/" className="nav-item">Home</Link>
          <Link to="/Job-portal/jobseeker/jobs" className="nav-item">Jobs</Link>
          <a href="#" className="nav-item nav-active">Companies</a>
        </nav>

        <div className="auth-links">
          <Link to="/Job-portal/jobseeker/myjobs">
            <img className="header-icons" src={breifcase} alt="My Jobs" />
          </Link>

          <img className="header-icons" src={chat} alt="Messages" />

          <img
            className="header-icons"
            src={newNotificationsCount > 0 ? bell_dot : bell}
            alt="Notifications"
            onClick={() => setShowNotification(!showNotification)}
          />

          <Link to="/Job-portal/jobseeker/myprofile">
            <img className="header-icons" src={profile} alt="Profile" />
          </Link>
        </div>

        <JNotification
          notificationsData={notificationsData}
          showNotification={showNotification}
          setShowNotification={setShowNotification}
        />
      </header>

      {/* SEARCH BAR */}
      <div className="jobs-tab-search-bar">
        <div className="search-bar">

          <div className="search-field">
            <img src={search} className="icon-size" alt="search" />
            <input placeholder="Search by Skills, company or job title" />
          </div>

          <div className="separator" />

          <div className="search-field">
            <img src={locationIcon} className="icon-size" alt="location" />
            <input placeholder="Enter Location" />
          </div>

          <div className="separator" />

          <div className="search-field">
            <img src={tick} className="icon-size" alt="experience" />
            <select defaultValue="">
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

      {/* FILTER + JOB LIST */}
      <div className="search-section">
        <h1 className="title">Job Based On Your Search</h1>

        <div className="container">

          {/* FILTERS */}
          <div className="apply-filters-section">

            <div className="filter-header">
              <h2>Apply Filters</h2>
              <span className="clear-all" onClick={handleClearAll}>Clear All</span>
            </div>

            {/* WORK TYPE */}
            <div className="filter-category">
              <div className="title">Work type</div>

              {workTypeOptions.map((type, index) => (
                <div key={index} className="filter-option">
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handleSelectfilter}
                    checked={checkedfilter.includes(type)}
                  />
                  <label>{type}</label>
                </div>
              ))}
            </div>

            {/* LOCATION */}
            <div className="filter-category">
              <div className="title">Location</div>

              {visibleLocations.map((loc, index) => (
                <div key={index} className="filter-option">
                  <input
                    type="checkbox"
                    value={loc}
                    onChange={handleSelectfilter}
                    checked={checkedfilter.includes(loc)}
                  />
                  <label>{loc}</label>
                </div>
              ))}

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

          {/* JOBS */}
          <div className="main-jobs-section">
            <div className="jobs-list">

              {getFilteredJobs().map(job => (
                <div className="job-card" key={job.id}>

                  <div className="job-top">
                    <div>
                      <h3>{job.title}</h3>
                      <div className="company-row">
                        <span>{job.company}</span>
                        <span className="rating">
                          <img src={starIcon} className="icon" />
                          {job.ratings} | {job.reviewNo}+ reviews
                        </span>
                      </div>
                    </div>

                    {job.logo ? (
                      <img src={job.logo} className="job-logo" />
                    ) : (
                      <div className="job-logo-placeholder">
                        {job.company?.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="job-info">
                    <span><img src={time} className="icon" />{job.duration}</span>
                    <span>₹ {job.salary} LPA</span>
                    <span><img src={experience} className="icon" />{job.experience}+ yrs</span>
                    <span><img src={place} className="icon" />{job.location}</span>
                  </div>

                  <div className="job-info">
                    <span><img src={time} className="icon" />Shift: {job.Shift}</span>
                    <span><img src={experience} className="icon" />{job.WorkType}</span>
                  </div>

                  <div className="job-footer">
                    <span>
                      {formatPostedDate(job.posted)} | Openings: {job.openings} | Applicants: {job.applicants}
                    </span>
                    <div>
                      <button className="save-btn">Save</button>
                      <button className="apply-btn">Apply</button>
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
