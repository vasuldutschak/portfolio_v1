import React from 'react';
import './style.css'
import ExperienceCard from "../../experienceCard/ExperienceCard";

function ExperienceSection(props) {
    const text = 'Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.'
    return (
        <section className='experience'>
            <div className="experience__container">
                <div className='section-title'>Experience</div>
                <div className="experience-timeline row">
                    <div className="experience-icon">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="col">
                        <ExperienceCard title='Facebook Inc.' position='Art Director' text={text} date='2013-2016'/>
                    </div>
                    <div className="col">
                        <ExperienceCard title='Google Inc.' position='Front-end Developer' text={text} date='2013-2016' reversed/>
                    </div>
                    <div className="col">
                        <ExperienceCard title='Abc Inc.' position='Senior Developer' text={text} date='2013-2016'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;