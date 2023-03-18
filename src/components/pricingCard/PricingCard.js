import React from 'react';
import './style.css'
import Button from "../buttons/Button";

function PricingCard({icon,title,amount,children}) {
    return (
        <div className='pricing-card card'>
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