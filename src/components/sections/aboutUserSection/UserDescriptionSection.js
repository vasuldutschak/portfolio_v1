import React from 'react';
import UserInfoItem from "../../userInfoItem/UserInfoItem";
import Button from "../../buttons/Button";

function UserDescriptionSection(props) {
    return (
        <section className='about-me-description'>
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
        </section>
    );
}

export default UserDescriptionSection;