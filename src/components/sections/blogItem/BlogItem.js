import React from 'react';
import {useParams} from "react-router-dom";
import Button from "../../buttons/Button";
import dbItemBlog from './itemDBTest'
import './style.css'
import Comment from "../../Comment/Comment";
import BlogList from "./BlogList";

function BlogItem(props) {

    const {id} = useParams()
    return (
        <section className='blog-item-container card'>
            <div className="blog-title">{dbItemBlog.title}</div>
            <div className="blog-posted-date">{dbItemBlog.publishedDate}</div>
            <div className="blog-image-container">
                <img src={dbItemBlog.img} alt={dbItemBlog.title}/>
            </div>
            <div className="blog-text">{dbItemBlog.blogTextFirst}</div>
            <div className="blog-text-border-left">{dbItemBlog.blogTextBordered}</div>
            <div className="blog-text">{dbItemBlog.blogTextSecond}</div>
            <div className="blog-text-list">
                <BlogList list={dbItemBlog.blogList}/>
            </div>
            <div className="blog-text">{dbItemBlog.blogTestThird}</div>
            <div className="blog-gallery-container">
                <div className="blog-image-container">
                    <img src={dbItemBlog.imgGallery[0]} alt={dbItemBlog.title}/>
                </div>
                <div className="blog-image-container">
                    <img src={dbItemBlog.imgGallery[1]} alt={dbItemBlog.title}/>
                </div>
                <div className="blog-image-container">
                    <img src={dbItemBlog.imgGallery[2]} alt={dbItemBlog.title}/>
                </div>
            </div>
            <div className="blog-comments">
                <div className="blog-comment-tile">Post Comments</div>
                <div className="blog-comments-container">
                    <Comment img={dbItemBlog.comments.img} text={dbItemBlog.comments.text}
                             userInfo={dbItemBlog.comments.userInfo} postedDate={dbItemBlog.comments.postedDate}/>
                  <Comment img={dbItemBlog.comments.img} text={dbItemBlog.comments.text}
                             userInfo={dbItemBlog.comments.userInfo} postedDate={dbItemBlog.comments.postedDate}/>
                  <Comment img={dbItemBlog.comments.img} text={dbItemBlog.comments.text}
                             userInfo={dbItemBlog.comments.userInfo} postedDate={dbItemBlog.comments.postedDate}/>
                  <Comment img={dbItemBlog.comments.img} text={dbItemBlog.comments.text}
                             userInfo={dbItemBlog.comments.userInfo} postedDate={dbItemBlog.comments.postedDate}/>
                </div>
            </div>
            <div className="blog-form-container">
                <div className="blog-comment-tile">Leave a Reply</div>
                <form action="#">
                    <div className="input-wrapper">
                        <input type="text" name='name' placeholder='Your Name'/>
                    </div>
                    <div className="input-wrapper">
                        <input type="email" name='email' placeholder='Your Email'/>
                    </div>
                    <div className="input-wrapper textarea-container">
                        <textarea name="message" placeholder="Message"/>
                    </div>
                    <Button blue>Send Message</Button>
                </form>
            </div>
        </section>
    );
}

export default BlogItem;