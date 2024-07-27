// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import './index.css';

const App = () => {
    return (
      <div>
        <BrowserRouter>
           <Routes>
                    <Route index path="/" element={<BlogPostList />} />
                    <Route path="/post/:id" element={<BlogPostDetails />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
};

export default App;

