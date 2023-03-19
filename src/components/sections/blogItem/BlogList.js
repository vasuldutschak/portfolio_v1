import React from 'react';

function BlogList({list}) {
    return (
        <ul>
            {list.map((el,idx)=>(<li key={idx}>{el}</li>))}
        </ul>
    );
}

export default BlogList;