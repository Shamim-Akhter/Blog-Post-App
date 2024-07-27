// src/components/BlogPostDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPostDetails = () => {
     const { id } = useParams();
     const navigate = useNavigate();
     const [post, setPost] = useState(null);
     const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the full post content from an API or local JSON file
        fetch('/postData.json')
            .then(response => response.json())
            .then(data => {
                console.log(data[id-1]);
                setPost(data[id-1]);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading details...</div>;
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {/* Display images*/}
            {post.images && post.images.map((image, index) => (
                <img key={index} src={image} style={{height:400,width:400}}alt="" />
            ))}
        </div>
    );
};

export default BlogPostDetails;
