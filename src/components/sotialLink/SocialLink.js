import React, {useEffect, useRef} from 'react';

function SocialLink({type,linkTo}) {
    const linkRef = useRef(null)
    function handleMouseEnter(event){
        const ink = event.target.querySelector('.ink')
        ink.classList.remove('animate')
        ink.style.top = `${event.offsetY}px`
        ink.style.left = `${event.offsetX}px`
        ink.classList.add('animate')
    }

    useEffect(()=>{
        const {current} = linkRef
        current.addEventListener('mouseenter', handleMouseEnter)
        return ()=>{
            current.removeEventListener('mouseenter',handleMouseEnter)
        }
    },[])


    return (
        <a href={linkTo} className='user-link' ref={linkRef}>
            <div className='ink'></div>
            <i className={type}></i>
        </a>
    );
}

export default SocialLink;