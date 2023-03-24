import React, {useEffect, useRef} from 'react';
import './style.css'
import Button from "../buttons/Button";

function PricingCard({icon,title,amount,children}) {
    const options = {
        root: document.querySelector('.pricing'),
        rootMargin: '0px',
        threshold: .5,
    }
    const targetToObserve = useRef(null)

    function initAnimation() {
        targetToObserve.current.classList.add('slide-in-elliptic-top-fwd')
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
        <div className='pricing-card card' ref={targetToObserve}>
            <div className="card-icon"><i className={icon}></i></div>
            <div className="pricing-card-title">{title}</div>
            <div className="pricing-card-amount">
                <span className="dollar">$</span>
                <span className="amount">{amount}</span>
                <span className="period">/hr</span>
            </div>
            {children}
            <Button blue>Buy Now</Button>
        </div>
    );
}

export default PricingCard;