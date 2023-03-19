import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import HeaderBackGround from "../../components/headerBg/HeaderBackGround";
import Home from "../Home";

function HomeLayout(props) {
    return (
        <div className="App" id='home'>
            <Navbar/>
            <HeaderBackGround/>
            <Home/>
        </div>
    );
}

export default HomeLayout;