import React from 'react';

function Comment({img,userInfo,postedDate,text}) {
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src={img} alt="user photo"/>
            </div>
            <div className="comment-info">
                <div className="comment-userinfo">{userInfo}</div>
                <div className="comment-published-date">{postedDate}</div>
                <div className="comment-text">{text}</div>
            </div>
        </div>
    );
}

export default Comment;