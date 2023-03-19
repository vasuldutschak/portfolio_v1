import React from 'react';
import img from "../../../man.png";
import './style.css'
import SocialLink from "../../sotialLink/SocialLink";
import UserInfoItem from "../../userInfoItem/UserInfoItem";
import Button from "../../buttons/Button";

function AboutUserSection(props) {
    return (<section className='about-me' id='about'>
        <div className="about-me__container">
            <div className="user-container">
                <div className='image-container'>
                    <img src={img} alt="image avatar"/>
                </div>
                <SocialLink linkTo='mailto:vasuldutschak1993@gmail.com' type="fa-solid fa-plus"/>
            </div>
            <div className='user-info'>Steve Morgan</div>
            <div className='user-description'>UX/UI Designer & Front-end Developer</div>
            <div className='user-links__container'>
                <SocialLink linkTo='#' type="fa-brands fa-facebook"/>
                <SocialLink linkTo='#' type="fa-brands fa-twitter"/>
                <SocialLink linkTo='#' type="fa-brands fa-github"/>
                <SocialLink linkTo='#' type="fa-brands fa-google-plus"/>
                <SocialLink linkTo='#' type="fa-brands fa-skype"/>
            </div>
        </div>
    </section>);
}

export default AboutUserSection;