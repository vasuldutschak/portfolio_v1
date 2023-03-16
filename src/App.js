import './index.css'
import Container from "./components/container/Container";
import HeaderBackGround from "./components/headerBg/HeaderBackGround";
import React from "react";
import AboutUserSection from "./components/sections/aboutUserSection/AboutUserSection";
import SkillsSection from "./components/sections/sklills/SkillsSection";
function App() {
    return (
        <div className="App">
            <HeaderBackGround/>
            <Container>
                <AboutUserSection/>
                <SkillsSection/>
            </Container>
        </div>
    );
}

export default App;
