import React from 'react'
import './OpportunitiesCard.css'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import { Link } from 'react-router-dom'

export const OpportunitiesCard = (props) => {
    const {job} = props
    const logoContent = job.logo ? (<img src={job.logo} alt={job.company} className="Opportunities-job-logo" />) : (<div className="Opportunities-job-logo-placeholder">{job.company.charAt(0).toUpperCase()}</div>)
    
    return (
        <Link to="/Job-portal/jobseeker/OpportunityOverview" className="Opportunities-job-card">
            <div className="Opportunities-job-header">
                <div>
                    <h3 className="Opportunities-job-title">{job.title}</h3>
                    <p className="Opportunities-job-company">{job.company}</p>
                </div>
                {logoContent}
            </div>

            <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'><img src={time} className='card-icons'/>{job.type}<span className="Opportunities-divider">|</span>{job.salary}</p>
                <p className='Opportunities-detail-line'><img src={experience} className='card-icons'/>{job.experience}</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons'/>{job.location}</p>
            </div>

            <div className='Opportunities-details-bottom'>
                <div className="Opportunities-job-tags">
                    {job.tags.map((tag, index) => (
                        <span key={index} className={`Opportunities-job-tag ${tag.toLowerCase()}`}>
                        {tag}
                        </span>
                    ))}
                </div>
                <a href="#" className="suggest-link">
                    Suggest more roles like this
                </a>
            </div>

            <hr className="Opportunities-separator" />

            <div className="Opportunities-job-footer">
                <div className="Opportunities-job-meta">
                    <p>Posted: {job.posted} <span className="Opportunities-divider">|</span> Openings: {job.openings} <span className="Opportunities-divider">|</span> Applicants: {job.applicants}</p>
                </div>

                <div className="Opportunities-job-actions">
                    <button className="Opportunities-save-btn">Save</button>
                    <button className="Opportunities-apply-btn">Apply</button>
                </div>
            </div>
        </Link>
    )
}
