import React from 'react';
import './style.css'

function Container({children,...otherProps}) {
    return (
        <div className='container' {...otherProps}>
            {children}
        </div>
    );
}

export default Container;