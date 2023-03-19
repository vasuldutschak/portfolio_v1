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
        <div className="about-me-description__container">
            <div className="row">
                <div className="col fb-40">
                    <div className="info-list">
                        <ul>
                            <UserInfoItem type='Age:' description='22 Years'/>
                            <UserInfoItem type='Job:' description='Freelancer'/>
                            <UserInfoItem type='Citizenship:' description='United States'/>
                            <UserInfoItem type='Address:' description='358 W Jefferson St, Bensenville, IL 60112'/>
                            <UserInfoItem type='Phone:' description='+1 256 254 84 56' link='tel:12562548456'/>
                            <UserInfoItem type='E-mail:' description='vasuldutschak1993@gmail.com' link='mailto:vasuldutschak1993@gmail.com'/>
                        </ul>
                    </div>
                </div>
                <div className="col fb-60 flex-column">
                    <div className="text-box">
                        <p>Hello! I’m Steve Morgan</p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis
                            iste natus error sit
                            voluptatem accusantium doloremque.
                        </p>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores.
                        </p>
                    </div>
                    <div className="bts">
                        <Button blue>Download CV</Button>
                        <Button>Contact Me</Button>
                    </div>
                </div>
            </div>
        </div>

    </section>);
}

export default AboutUserSection;