import React from 'react';

function Section({children,...otherProps}) {
    return (
        <div {...otherProps}>{children}</div>
    );
}

export default Section;