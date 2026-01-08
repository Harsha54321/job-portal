import React, { useState } from 'react'
import './JobsTab.css'
import { Footer } from '../Components-LandingPage/Footer'
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import { Opportunities } from './Opportunities';
import { notificationsData } from './Afterloginlanding';
import { JNotification } from './JNotification';

export const JobsTab = () => {
    const [showNotification, setShowNotification] = useState(false);
    const newNotificationsCount = notificationsData.filter(n => n.isNew).length;

    return (
        <>
            <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <Link to="/Job-portal/jobseeker/" className="nav-item" >Home</Link>
                    <a href="#" className="nav-item nav-active" >Jobs</a>
                    <Link to="/Job-portal/jobseeker/companies" className="nav-item" >Companies</Link>   
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
            
            <Opportunities />

            <Footer />
        </>
    )
}
