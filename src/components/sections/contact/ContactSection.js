import React, {useEffect, useRef} from 'react';
import './style.css'
import UserInfoItem from "../../userInfoItem/UserInfoItem";
import Button from "../../buttons/Button";

function ContactSection(props) {
    const options = {
        root: document.querySelector('.contact'),
        rootMargin: '0px',
        threshold: .5,
    }
    const targetToObserve = useRef(null)

    function initAnimation() {
        targetToObserve.current.classList.add('slide-in-fwd-center')
    }
    useEffect(()=>{
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) initAnimation()
            })
        }, options)
        observer.observe(targetToObserve.current)
    },[])
    return (
        <section className='contact' id='contact'>
            <div className="contact__container">
                <div className='section-title'>Contact</div>
                <div className="contact-card-container" ref={targetToObserve}>
                    <div className='card'>
                        <div className="info-list">
                            <ul>
                                <UserInfoItem type='Address:' description='358 W Jefferson St, Bensenville, IL 60112'/>
                                <UserInfoItem type='Phone:' description='+1 256 254 84 56' link='tel:12562548456'/>
                                <UserInfoItem type='E-mail:' description='vasuldutschak1993@gmail.com'
                                              link='mailto:vasuldutschak1993@gmail.com'/>
                            </ul>
                        </div>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5957.990473182976!2d18.082908938600628!3d48.303177309681544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3fac70fdc469%3A0xfb00dc9649c19509!2sCoboriho%205%2FA!5e0!3m2!1suk!2ssk!4v1679178309934!5m2!1suk!2ssk"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='card'>
                        <form action="#">
                            <div className="input-wrapper">
                                <input type="text" name='name' placeholder='Your Name'/>
                            </div>
                            <div className="input-wrapper">
                                <input type="email" name='email' placeholder='Your Email'/>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" name='subject' placeholder='Subject'/>
                            </div>
                            <div className="input-wrapper textarea-container">
                                <textarea name="message" placeholder="Message"/>
                            </div>
                            <Button blue>Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;