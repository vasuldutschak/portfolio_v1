import './index.css'
import Container from "./components/container/Container";
import HeaderBackGround from "./components/headerBg/HeaderBackGround";
import React from "react";
import AboutUserSection from "./components/sections/AboutUserSection";
function App() {
    return (
        <div className="App">
            <HeaderBackGround/>
            <Container>
                <AboutUserSection/>
            </Container>
        </div>
    );
}

export default App;
