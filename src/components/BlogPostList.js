// src/components/BlogPostList.js
import React, { useState, useEffect } from 'react';
import BlogPostItem from './BlogPostItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const BlogPostList = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const [postsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Fetch blog posts from an API or local JSON file
        fetch('/postData.json')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageClick = (event,value) => {
        console.log(value);
        setCurrentPage(value);
      };

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {currentPosts.map(post => (
                    <BlogPostItem key={post.id} post={post} />
                ))}
            </ul>

            {/* Pagination here */}
            <Stack spacing={2} alignItems="center">
            <Pagination count={totalPages} color="primary" variant="outlined"  onChange={handlePageClick} />
            </Stack>
        </div>
    );
};

export default BlogPostList;
