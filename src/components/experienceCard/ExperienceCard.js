import React from 'react';
import './style.css'
function ExperienceCard({text,title,position,date,reversed}) {
    const getClassNames=()=>{
        return `experience-card-container row ${reversed ? 'reversed': ''}`
    }
    return (
        <div className={getClassNames()}>
            <div className="col fb-50">
                <div className="experience-card">
                    <div className='experience-card-title'>{title}</div>
                    <div className='experience-card-position'>{position}</div>
                    <div className='experience-card-text'>{text}</div>
                </div>
            </div>
            <div className="col fb-50 d-flex">
                <div className="experience-icon-done"><i className="skills-item__icon fa-solid fa-check"></i></div>
                <div className="experience-card-date">{date}</div>
            </div>
        </div>
    );
}

export default ExperienceCard;