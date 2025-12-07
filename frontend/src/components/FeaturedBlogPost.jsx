import React from 'react';
import './FeaturedBlogPost.css';

const FeaturedBlogPost = () => {
  return (
    <section className="featured-blog-post">
      <h2>Understanding the Benefits of Physiotherapy</h2>
      <p>
        Physiotherapy plays a crucial role in rehabilitation, pain management, and
        overall physical well-being. It helps individuals recover from injuries,
        manage chronic conditions, and improve their mobility and strength. Our
        clinic is dedicated to providing personalized care to help you achieve
        your health goals.
      </p>
      <div className="blog-image-container">
        <img
          src="/images/poster.jpeg"
          alt="A professional physiotherapist guiding a patient through rehabilitation exercises."
          className="blog-image"
        />
        <p className="image-caption">
          A professional physiotherapist guiding a patient through rehabilitation exercises.
        </p>
      </div>
    </section>
  );
};

export default FeaturedBlogPost;
