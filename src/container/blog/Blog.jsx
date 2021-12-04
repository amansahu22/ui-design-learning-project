import React from 'react'
import './Blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>
                    A lot is happening, we are blogging about it.
                </h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container__groupA'>
                    <Article image={blog01} title='the worls is moving towards artifical intelligence very fast.' date='05 Dec 2021' />
                </div>
                <div className='gpt3__blog-container__groupB'>
                    <Article image={blog02} title='the worls is moving towards artifical intelligence very fast.' date='05 Dec 2021' />
                    <Article image={blog03} title='the worls is moving towards artifical intelligence very fast.' date='05 Dec 2021' />
                    <Article image={blog04} title='the worls is moving towards artifical intelligence very fast.' date='05 Dec 2021' />
                    <Article image={blog05} title='the worls is moving towards artifical intelligence very fast.' date='05 Dec 2021' />
                </div>
            </div>
        </div>
    )
}

export default Blog
