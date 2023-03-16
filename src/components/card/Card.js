import React from 'react';
import './style.css'
function Card({children,icon,title}) {
    return (
        <div className='card'>
            <div className="card-icon"><i className={icon}></i></div>
            <div className='card-title'>{title}</div>
            {children}
        </div>
    );
}

export default Card;