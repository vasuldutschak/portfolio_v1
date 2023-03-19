import React, {useCallback, useRef, useState} from 'react';
import './style.css'
import SocialLink from "../sotialLink/SocialLink";

function Navbar(props) {
    const menuRef = useRef(null)
    const triggerMenuRef = useRef(null)
    const menuIcon = useRef(null)
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    function handleMenu(event) {
        event.preventDefault()
        if (isOpenMenu) {
            closeMenu(event)
        } else {
            menuIcon.current.className = ''
            menuIcon.current.classList.add('fa-sharp', 'fa-solid', 'fa-xmark')
            menuRef.current.classList.add('menu-active')
            setIsOpenMenu(!isOpenMenu)
        }
    }

    function closeMenu(event){
        menuIcon.current.className = ''
        menuIcon.current.classList.add('fa-solid', 'fa-bars')
        menuRef.current.classList.remove('menu-active')
        setIsOpenMenu(false)
    }

    const handleOnClickMenuItem = useCallback((event) => {
        event.preventDefault()
        document.querySelector(event.currentTarget.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        })
        closeMenu(event)
    }, [menuIcon])

    return (
        <header>
            <div className="top-menu" ref={menuRef}>
                <ul>
                    <li>
                        <SocialLink linkTo='#home' onClick={handleOnClickMenuItem}>Home</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#about' onClick={handleOnClickMenuItem}>About</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#skills' onClick={handleOnClickMenuItem}>Skills</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#experience' onClick={handleOnClickMenuItem}>Experience</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#services' onClick={handleOnClickMenuItem}>Services</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#education' onClick={handleOnClickMenuItem}>Education</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#portfolio' onClick={handleOnClickMenuItem}>Portfolio</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#clients' onClick={handleOnClickMenuItem}>Clients</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#pricing' onClick={handleOnClickMenuItem}>Pricing</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#blog' onClick={handleOnClickMenuItem}>Blog</SocialLink>
                    </li>
                    <li>
                        <SocialLink linkTo='#contact' onClick={handleOnClickMenuItem}>Contact Me</SocialLink>
                    </li>
                </ul>
                <a href="#" className="menu-btn" ref={triggerMenuRef} onClick={handleMenu}><i ref={menuIcon}
                                                                                              className="fa-solid fa-bars"></i></a>
            </div>
        </header>
    );
}

export default Navbar;