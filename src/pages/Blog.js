import React from 'react';
import BlogCard from "../components/sections/blog/BlogCard";
import img1 from "../blog1.jpg";
import img2 from "../blog2.jpg";

function Blog(props) {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel...'

    return (
        <section className='blog' id='blog'>
            <div className="blog__container">
                <div className='section-title'>Blog</div>
                <div className="blog-card-container">
                    <BlogCard img={img1} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 27, dayName: "July"}}>
                    </BlogCard>
                    <BlogCard img={img2} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 17, dayName: "July"}}>
                    </BlogCard>
                <BlogCard img={img1} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 27, dayName: "July"}}>
                    </BlogCard>
                    <BlogCard img={img2} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 17, dayName: "July"}}>
                    </BlogCard>
                <BlogCard img={img1} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 27, dayName: "July"}}>
                    </BlogCard>
                    <BlogCard img={img2} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 17, dayName: "July"}}>
                    </BlogCard>
                    <BlogCard img={img1} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 27, dayName: "July"}}>
                    </BlogCard>
                    <BlogCard img={img2} hasTags={['#branding', '#ui-ux']} title='Music Player Design' text={text}
                              date={{day: 17, dayName: "July"}}>
                    </BlogCard>
                </div>
            </div>
        </section>
    );
}

export default Blog;