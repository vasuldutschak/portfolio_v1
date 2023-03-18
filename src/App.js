import './index.css'
import Container from "./components/container/Container";
import HeaderBackGround from "./components/headerBg/HeaderBackGround";
import React from "react";
import AboutUserSection from "./components/sections/aboutUserSection/AboutUserSection";
import SkillsSection from "./components/sections/sklills/SkillsSection";
import ExperienceSection from "./components/sections/experience/ExperienceSection";
import ServicesSection from "./components/sections/services/ServicesSection";
import EducationSection from "./components/sections/education/EducationSection";
function App() {
    return (
        <div className="App">
            <HeaderBackGround/>
            <Container>
                <AboutUserSection/>
                <SkillsSection/>
                <ExperienceSection/>
                <ServicesSection/>
                <EducationSection/>
            </Container>
        </div>
    );
}

export default App;
