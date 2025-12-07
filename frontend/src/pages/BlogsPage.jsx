import React, { useState, useEffect } from 'react';
import { fetchBlogs } from '../services/api';
import FeaturedBlogPost from '../components/FeaturedBlogPost'; // Import the new component
import './BlogsPage.css';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    getBlogs();
  }, []);

  return (
    <div className="blogs-page">
      <h1>Our Blogs</h1>
      <FeaturedBlogPost /> {/* Render the new component here */}
      <div className="blogs-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2>{blog.title}</h2>
            <p className="blog-date">{new Date(blog.date).toLocaleDateString()}</p>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
