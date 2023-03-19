import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import HeaderBackGround from "../../components/headerBg/HeaderBackGround";
import Home from "../Home";
import {Outlet} from "react-router-dom";
import Container from "../../components/container/Container";
import AboutUserSection from "../../components/sections/aboutUserSection/AboutUserSection";

function BlogLayout(props) {
    return (
        <div className="App" id='home'>
            <Navbar/>
            <HeaderBackGround/>
            <Container>
                <AboutUserSection/>
                <Outlet/>
            </Container>
        </div>
    );
}

export default BlogLayout;