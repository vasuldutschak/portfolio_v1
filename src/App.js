import './index.css'
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeLayout from "./pages/layout/HomeLayout";
import Blog from "./pages/Blog";
import BlogLayout from "./pages/layout/BlogLayout";
import BlogItem from "./components/sections/blogItem/BlogItem";
function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeLayout/>}/>
            <Route path='/blog' element={<BlogLayout/>}>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/blog/:id' element={<BlogItem/>}/>
            </Route>
            <Route path='*' element={<h1>Page Not found</h1>}/>
        </Routes>

    );
}

export default App;
