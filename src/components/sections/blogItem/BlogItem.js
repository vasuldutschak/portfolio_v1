import React from 'react';
import {useParams} from "react-router-dom";

function BlogItem(props) {
    const {id}=useParams()
    return (
        <div>{id}</div>
    );
}

export default BlogItem;