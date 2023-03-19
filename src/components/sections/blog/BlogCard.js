import React from 'react';
import './style.css'
import Button from "../../buttons/Button";
function BlogCard({img,hasTags,date,title,text,btnDisable}) {
    return (
        <div className='blog-card card'>
            <div className="blog-card-image">
                <img src={img} alt="blog"/>
            </div>
            <div className="blog-card-tags-container">
                {date && <div className="blog-card-date"><div>{date.day}</div><div>{date.dayName}</div></div>}
                {hasTags.map((el,index)=>(<div key={index} className="blog-card-tag">{el}</div>))}
            </div>
            <div className="blog-card-title">{title}</div>
            <div className="blog-card-text">{text}</div>
            {btnDisable ? null:<Button blue>Read more</Button>}
        </div>
    );
}

export default BlogCard;