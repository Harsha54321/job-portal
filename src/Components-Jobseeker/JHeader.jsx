import React from 'react'
import './JHeader.css'
import { Link } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'

export const JHeader = () => {
    const [activeItem, setActiveItem] = React.useState("Home");

    const handleNavClick = (itemName) => {
        setActiveItem(itemName);
    };
    return (
        <header className="header">
            <div className="logo">job portal</div>
            <nav className="nav-links">
                <a href="#" className={activeItem === "Home" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Home")}>Home</a>
                <a href="#" className={activeItem === "Jobs" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Jobs")}>Jobs</a>
                <a href="#" className={activeItem === "Companies" ? "nav-item nav-active" : "nav-item"} onClick={() => handleNavClick("Companies")}>Companies</a>
            </nav>

            <div className="auth-links">
                <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
                <div><img className='header-icons' src={chat} alt='Messages' /></div>
                <div><img className='header-icons' src={bell} alt='Notifications' /></div>
                <div><img className='header-icons' src={profile} alt='My Profile' /></div>
            </div>
        </header>
    )
}
