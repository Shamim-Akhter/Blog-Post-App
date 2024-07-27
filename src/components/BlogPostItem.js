// src/components/BlogPostItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post }) => {
    return (
        <li>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span><img src='/calendar.png' alt="calendar" height={16} width={16} title='Posted on'></img>{' '}{post.date}</span>
            </Link>
        </li>
    );
};

export default BlogPostItem;
