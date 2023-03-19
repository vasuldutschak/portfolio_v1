import './index.css'
import Container from "./components/container/Container";
import HeaderBackGround from "./components/headerBg/HeaderBackGround";
import React from "react";
import AboutUserSection from "./components/sections/aboutUserSection/AboutUserSection";
import SkillsSection from "./components/sections/sklills/SkillsSection";
import ExperienceSection from "./components/sections/experience/ExperienceSection";
import ServicesSection from "./components/sections/services/ServicesSection";
import EducationSection from "./components/sections/education/EducationSection";
import ClientsSection from "./components/sections/clients/ClientsSection";
import PricingSection from "./components/sections/pricing/PricingSection";
import BlogSection from "./components/sections/blog/BlogSection";
import TextSection from "./components/sections/text/TextSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Navbar from "./components/navbar/Navbar";
import PortfolioSection from "./components/sections/portfolio/PortfolioSection";
function App() {
    return (
        <div className="App" id='home'>
            <Navbar/>
            <HeaderBackGround/>
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
        </div>
    );
}

export default App;
