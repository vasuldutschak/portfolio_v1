import React from 'react';
import AboutUserSection from "../components/sections/aboutUserSection/AboutUserSection";
import SkillsSection from "../components/sections/sklills/SkillsSection";
import ExperienceSection from "../components/sections/experience/ExperienceSection";
import ServicesSection from "../components/sections/services/ServicesSection";
import EducationSection from "../components/sections/education/EducationSection";
import ClientsSection from "../components/sections/clients/ClientsSection";
import PricingSection from "../components/sections/pricing/PricingSection";
import BlogSection from "../components/sections/blog/BlogSection";
import PortfolioSection from "../components/sections/portfolio/PortfolioSection";
import TextSection from "../components/sections/text/TextSection";
import ContactSection from "../components/sections/contact/ContactSection";
import Container from "../components/container/Container";

function Home(props) {
    return (
        <Container>
            <AboutUserSection/>
            <SkillsSection/>
            <ExperienceSection/>
            <ServicesSection/>
            <EducationSection/>
            <ClientsSection/>
            <PricingSection/>
            <BlogSection/>
            <PortfolioSection/>
            <TextSection/>
            <ContactSection/>
        </Container>
    );
}

export default Home;