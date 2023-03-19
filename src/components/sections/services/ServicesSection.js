import React from 'react';
import './style.css'
import Card from "../../card/Card";

function ServicesSection(props) {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum venenatis vestibulum elit ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    return (
        <section className='services' id='services'>
            <div className="services__container">
                <div className='section-title'>Services</div>
                <div className="service-card__container">
                    <Card title='UI/UX Design' icon='fa-sharp fa-solid fa-palette'>{text}</Card>
                    <Card title='Web Application' icon='fa-brands fa-chrome'>{text}</Card>
                    <Card title='Android Application' icon='fa-brands fa-android'>{text}</Card>
                    <Card title='IOS Application' icon='fa-brands fa-apple'>{text}</Card>
                    <Card title='Writing' icon='fa-solid fa-pencil'>{text}</Card>
                    <Card title='Photography' icon='fa-solid fa-camera-retro'>{text}</Card>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;