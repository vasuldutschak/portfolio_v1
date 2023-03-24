import React, {useEffect, useRef} from 'react';
import './style.css'
function ExperienceCard({text,title,position,date,reversed}) {
    const options = {
        root: document.querySelector('.skills'),
        rootMargin: '0px',
        threshold: .5,
    }
    const targetToObserve = useRef(null)

    function initAnimation() {
        targetToObserve.current.classList.add(reversed ? 'bounce-in-left' : 'bounce-in-right')
    }
    const getClassNames=()=>{
        return `experience-card-container row ${reversed ? 'reversed': ''}`
    }
    useEffect(()=>{
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) initAnimation()
            })
        }, options)
        observer.observe(targetToObserve.current)
        return ()=>{
            observer.unobserve(targetToObserve.current)
        }
    },[])
    return (
        <div className={getClassNames()} ref={targetToObserve}>
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