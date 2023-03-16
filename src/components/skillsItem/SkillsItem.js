import React from 'react';
import './style.css'
function SkillsItem({title,progress}) {
    const styleWidth={
        width:`${progress}%`
    }
    return (
        <div className='skills-item'>
            <div className='skills-item__title'>{title}</div>
            <div className='skills-item__progress'>
                <div className="skills-item__percentage" style={styleWidth}>
                    <i className="skills-item__icon fa-solid fa-check"></i>
                </div>
            </div>
        </div>
    );
}


export default SkillsItem;