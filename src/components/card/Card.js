import React, {useEffect, useRef} from 'react';
import './style.css'
function Card({children,icon,title,cssClasses}) {
    function getCssClasses(){
        return 'card '+ (cssClasses || '')
    }
    const options = {
        root: document.querySelector('.services'),
        rootMargin: '0px',
        threshold: .5,
    }
    const targetToObserve = useRef(null)

    function initAnimation() {
        targetToObserve.current.classList.add('roll-in-blurred-bottom')
    }
    useEffect(()=>{
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) initAnimation()
            })
        }, options)
        observer.observe(targetToObserve.current)
        return ()=>{
            observer.unobserve(targetToObserve.current)
        }
    },[])
    return (
        <div className={getCssClasses()} ref={targetToObserve}>
            <div className="card-icon"><i className={icon}></i></div>
            <div className='card-title'>{title}</div>
            {children}
        </div>
    );
}

export default Card;