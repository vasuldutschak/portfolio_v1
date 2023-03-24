import React, {useState} from 'react';
import BlogCard from "../blog/BlogCard";
import img1 from "../../../blog1.jpg";
import './style.css'
import SocialLink from "../../sotialLink/SocialLink";
import db from './db'
import Modal from "../../modal/Modal";

function PortfolioSection(props) {
    const text = 'Here’s a new b-cards mock-up with several business cards... '
    const [data, setData] = useState(db)
    const [filter, setFilter] = useState([])
    const [modalOpen,setModalOpen]=useState(false)
    const [modalContent,setModalContent]=useState(null)
    function handleClick(event, filterType) {
        setFilter(data.filter(el => {
            return el.hasTags.includes(filterType)
        }))
    }

    function getVisibleData() {
        return filter.length === 0 ? data : filter
    }
    function closeModal(){
        setModalOpen(false)
    }

    function handleOnClickBlogCard(id){
        return ()=>{
            setModalContent(data[id])
            setModalOpen(true)
        }
    }

    return (
        <section className='portfolio' id='portfolio'>
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
                        <BlogCard key={idx} img={img1} hasTags={el.hasTags} title={el.title} text={text} btnDisable onClick={handleOnClickBlogCard(idx)}/>))}
                </div>
            </div>
            {modalOpen && <Modal onClose={closeModal}>
                <BlogCard key={modalContent.id} img={img1} hasTags={modalContent.hasTags} title={modalContent.title} text={text}/>
            </Modal>}
        </section>
    );
}

export default PortfolioSection;