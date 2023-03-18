import React, {useRef, useState} from 'react';
import './style.css'
import SocialLink from "../sotialLink/SocialLink";

function Navbar(props) {
    const menuRef=useRef(null)
    const triggerMenuRef=useRef(null)
    const menuIcon=useRef(null)
    const [isOpenMenu,setIsOpenMenu]=useState(false)
    function handleMenu(){
        if (isOpenMenu) {
            menuIcon.current.className = ''
            menuIcon.current.classList.add('fa-solid', 'fa-bars')
            menuRef.current.classList.remove('menu-active')
            setIsOpenMenu(!isOpenMenu)
        }
        else {
            menuIcon.current.className = ''
            menuIcon.current.classList.add('fa-sharp', 'fa-solid', 'fa-xmark')
            menuRef.current.classList.add('menu-active')
            setIsOpenMenu(!isOpenMenu)
        }
    }


    return (
        <header>
            <div className="top-menu" ref={menuRef}>
                <ul>
                    <li>
                        <SocialLink>Home</SocialLink>
                    </li>
                    <li>
                        <SocialLink>About</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Skills</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Experience</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Services</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Education</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Portfolio</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Clients</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Pricing</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Blog</SocialLink>
                    </li>
                    <li>
                        <SocialLink>Contact Me</SocialLink>
                    </li>
                </ul>
                <a href="#" className="menu-btn" ref={triggerMenuRef} onClick={handleMenu}><i ref={menuIcon} className="fa-solid fa-bars"></i></a>
            </div>
        </header>
    );
}

export default Navbar;