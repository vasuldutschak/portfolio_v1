import './index.css'
import HeaderBackGround from "./components/headerBg/HeaderBackGround";
import React from "react";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import HomeLayout from "./pages/layout/HomeLayout";
function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeLayout/>}/>
            <Route path='/blog' element={<h1>Blog page</h1>}/>
            <Route path='*' element={<h1>Page Not found</h1>}/>
        </Routes>

    );
}

export default App;
