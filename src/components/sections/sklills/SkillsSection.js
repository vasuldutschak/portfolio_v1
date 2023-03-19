import React from 'react';
import './style.css'
import Card from "../../card/Card";
import SkillsItem from "../../skillsItem/SkillsItem";

function SkillsSection(props) {
    return (
        <section className='skills' id='skills'>
            <div className="skills__container">
                <div className='section-title'>Skills</div>
                <div className="row">
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
