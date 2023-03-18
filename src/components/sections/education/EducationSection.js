import React from 'react';
import ExperienceCard from "../../experienceCard/ExperienceCard";

function EducationSection(props) {
    const text = 'Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.'

    return (
        <section className='education'>
            <div className="education__container">
                <div className='section-title'>Education</div>
                <div className="experience-timeline row">
                    <div className="experience-icon">
                        <i className="fa-solid fa-book-open-reader"></i>
                    </div>
                    <div className="col">
                        <ExperienceCard title='Art University' position='New York' text={text} date='2002-2004'/>
                    </div>
                    <div className="col">
                        <ExperienceCard title='Front-end Course' position='London' text={text} date='2000-2002' reversed/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;