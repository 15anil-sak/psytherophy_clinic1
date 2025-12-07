import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleScheduleVisitClick = () => {
    navigate('/appointments');
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h1>Experience Pain Relief and Optimal Health</h1>
          <p>
            Welcome to our physiotherapy clinic. Our expert physiotherapists are dedicated to helping you recover from
            injury, manage pain, and improve your overall well-being.
          </p>
          <button id="scheduleVisitBtn" className="cta-button" onClick={handleScheduleVisitClick}>Schedule Your Visit</button>
        </div>
        <div className="hero-image">
          <img
            src="/images/pain1.jpg"
            alt="Physiotherapy Session"
          />
        </div>
      </section>

      <section className="about-us">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-running"></i>
            </div>
            <h3>Sports Injury Rehab</h3>
            <p>
              Specialized programs to get you back in the game, stronger than
              before.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-bone"></i>
            </div>
            <h3>Orthopedic Care</h3>
            <p>
              Comprehensive care for musculoskeletal conditions and post-surgery
              rehabilitation.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Neurological Rehab</h3>
            <p>
              Improving function and independence for patients with neurological
              disorders.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h3>Cardiopulmonary</h3>
            <p>
              Rehabilitation for heart and lung conditions to improve your quality of life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

