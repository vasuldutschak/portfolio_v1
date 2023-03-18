import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "../../card/Card";
import {Pagination} from "swiper";
import './style.css'
import img from '../../../rev3.jpg'
function ClientsSection(props) {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa et eum laudantium necessitatibus nemo nesciunt numquam officia repellendus reprehenderit?'

    return (<section className='clients'>
        <div className="clients__container">
            <div className='section-title'>Clients</div>
            <div className="slider-container">
                <Swiper pagination={{
                    clickable: true,
                }} modules={[Pagination]}>
                    <SwiperSlide>
                        <Card cssClasses='italic' title='— Helen Floyd, Art Director' icon='fa-solid fa-user'>{text}</Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card cssClasses='italic' title='— Helen Floyd, Art Director' icon='fa-solid fa-user'>{text}</Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card cssClasses='italic' title='— Helen Floyd, Art Director' icon='fa-solid fa-user'>{text}</Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>);
}

export default ClientsSection;