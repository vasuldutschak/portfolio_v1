import React from 'react';
import './style.css'
function UserInfoItem({type,description,link}) {
    return (
        <li className='info-item'>
            <strong><span>{type}</span></strong>
            <div>{link && <a href={link}>{description}</a>}{!link && description}</div>
        </li>
    );
}

export default UserInfoItem;