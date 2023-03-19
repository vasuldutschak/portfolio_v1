import React, {useState} from 'react';
import BlogCard from "../blog/BlogCard";
import img1 from "../../../blog1.jpg";
import './style.css'
import SocialLink from "../../sotialLink/SocialLink";
import db from './db'

function PortfolioSection(props) {
    const text = 'Here’s a new b-cards mock-up with several business cards... '
    const [data, setData] = useState(db)
    const [filter, setFilter] = useState([])

    function handleClick(event, filterType) {
        setFilter(data.filter(el => {
            return el.hasTags.includes(filterType)
        }))
    }

    function getVisibleData() {
        return filter.length === 0 ? data : filter
    }

    return (
        <section className='portfolio'>
            <div className="portfolio__container">
                <div className='section-title'>Portfolio</div>
                <div className="portfolio-navbar">
                    <SocialLink onClick={handleClick} filterType='All'>All</SocialLink>
                    <SocialLink onClick={handleClick} filterType='Mockups'>Mockups</SocialLink>
                    <SocialLink onClick={handleClick} filterType='Graphic'>Graphics</SocialLink>
                    <SocialLink onClick={handleClick} filterType='Icons'>Icons</SocialLink>
                    <SocialLink onClick={handleClick} filterType='UI Kits'>UI Kits</SocialLink>
                </div>
                <div className="portfolio-card-container">
                    {getVisibleData().map((el, idx) => (
                        <BlogCard key={idx} img={img1} hasTags={el.hasTags} title={el.title} text={text} btnDisable/>))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;