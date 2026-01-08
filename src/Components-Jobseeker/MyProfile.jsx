import React, { useState } from 'react'
import './MyProfile.css'
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import { notificationsData } from './Afterloginlanding';
import { JNotification } from './JNotification';


export const MyProfile = () => {
    const [showNotification, setShowNotification] = useState(false);
    const newNotificationsCount = notificationsData.filter(n => n.isNew).length;
    return (
        <>
            <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <Link to="/Job-portal/jobseeker/" className="nav-item" >Home</Link>
                    <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
                    <Link to="/Job-portal/jobseeker/companies" className="nav-item" >Companies</Link>
                </nav>

                <div className="auth-links">
                    <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
                    <div><img className='header-icons' src={chat} alt='Messages' /></div>
                    <div onClick={() => setShowNotification(!showNotification)}><img className='header-icons' src={newNotificationsCount > 0 ? bell_dot : bell} alt='Notifications' /></div>
                    <Link to="/Job-portal/jobseeker/myprofile" className="nav-icon-active"><img className='header-icons' src={profile} alt='My Profile' /></Link>
                </div>
                <JNotification notificationsData={notificationsData} showNotification={showNotification} setShowNotification={setShowNotification} />
            </header>

            <main>
                <div className='profile-main-desc'>
                    <h1>My Profile</h1>
                    <p>Build and update your profile with personal, education, and career details to connect with the right opportunities.</p>
                </div>

                <div>
                    <div>
                        Lorem ipsum 1
                    </div>
                    <div>
                        Lorem ipsum 2
                    </div>
                </div>
            </main>

            <footer className='myprofile-footer'>© 2025 JobPortal. All rights reserved.</footer>
        </>
    )
}
