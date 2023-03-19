import React from 'react';
import './style.css'
import PricingCard from "../../pricingCard/PricingCard";

function PricingSection(props) {
    return (
        <section className='pricing' id='pricing'>
            <div className="pricing__container">
                <div className='section-title'>Pricing</div>
                <div className="pricing-card-container">
                    <PricingCard icon='fa-solid fa-battery-empty' amount={15} title='Basic'>
                        <ul className="pricing-card-feature-list">
                            <li className="disable">UI/UX Design</li>
                            <li>Web Development</li>
                            <li className="disable">IOS Application <strong>New</strong></li>
                            <li className="disable">Android Application</li>
                            <li className="disable">Writing</li>
                            <li className="disable">Photography <strong>New</strong></li>
                        </ul>
                    </PricingCard>
                    <PricingCard icon='fa-solid fa-battery-quarter' amount={29} title='Start-Up'>
                        <ul className="pricing-card-feature-list">
                            <li>UI/UX Design</li>
                            <li>Web Development</li>
                            <li className="disable">IOS Application <strong>New</strong></li>
                            <li className="disable">Android Application</li>
                            <li className="disable">Writing</li>
                            <li className="disable">Photography <strong>New</strong></li>
                        </ul>
                    </PricingCard>
                    <PricingCard icon='fa-solid fa-battery-half' amount={59} title='Business'>
                        <ul className="pricing-card-feature-list">
                            <li>UI/UX Design</li>
                            <li>Web Development</li>
                            <li>IOS Application <strong>New</strong></li>
                            <li>Android Application</li>
                            <li className="disable">Writing</li>
                            <li className="disable">Photography <strong>New</strong></li>
                        </ul>
                    </PricingCard>
                    <PricingCard icon='fa-solid fa-battery-full' amount={89} title='Enterprise'>
                        <ul className="pricing-card-feature-list">
                            <li>UI/UX Design</li>
                            <li>Web Development</li>
                            <li>IOS Application <strong>New</strong></li>
                            <li>Android Application</li>
                            <li>Writing</li>
                            <li>Photography <strong>New</strong></li>
                        </ul>
                    </PricingCard>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;