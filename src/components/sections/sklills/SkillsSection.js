import React, {useEffect, useRef} from 'react';
import './style.css'
import Card from "../../card/Card";
import SkillsItem from "../../skillsItem/SkillsItem";

function SkillsSection(props) {
    const options = {
        root: document.querySelector('.skills'),
        rootMargin: '0px',
        threshold: .5,
    }
    const targetToObserve = useRef(null)

    function initAnimation() {
        targetToObserve.current.classList.add('slide-in-fwd-bottom')
    }

    useEffect(()=>{
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) initAnimation()
            })
        }, options)
        observer.observe(targetToObserve.current)
        return ()=>{
            observer.unobserve(targetToObserve.current)
        }
    },[])
    return (
        <section className='skills' id='skills'>
            <div className="skills__container">
                <div className='section-title'>Skills</div>
                <div className="row" ref={targetToObserve}>
                    <div className="col fb-50">
                        <Card title='Professional' icon='fa-solid fa-gear'>
                            <div className="skills-item__container">
                                <SkillsItem title='UI/UX Design' progress={90}/>
                                <SkillsItem title='Web Application' progress={70}/>
                                <SkillsItem title='Mobile Application' progress={85}/>
                                <SkillsItem title='Writing' progress={65}/>
                                <SkillsItem title='Photography' progress={71}/>
                            </div>
                        </Card>
                    </div>
                    <div className="col fb-50">
                        <Card title='Personal' icon='fa-solid fa-user'>
                            <div className="skills-item__container">
                                <SkillsItem title='Communication' progress={40}/>
                                <SkillsItem title='Team Work' progress={76}/>
                                <SkillsItem title='Leadership' progress={35}/>
                                <SkillsItem title='Creativity' progress={90}/>
                                <SkillsItem title='Language' progress={70}/>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
