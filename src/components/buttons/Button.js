import React, {useEffect, useRef} from 'react';
import './style.css'
function Button({blue,onClick,children,...otherProps}) {
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

    const getClassNames=()=>{
        return `btn ${blue ? 'btn-blue' : ''}`
    }
    return (
        <a className={getClassNames()} onClick={onClick} {...otherProps} ref={linkRef}>
            <div className='ink'></div>
            {children}
        </a>
    );
}

export default Button;