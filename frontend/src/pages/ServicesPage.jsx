import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../services/api';
import './ServicesPage.css';

const fallbackServices = [
  {
    _id: '1',
    name: 'Orthopedic Physiotherapy',
    description: 'Specialized treatment for musculoskeletal injuries involving bones, joints, ligaments, and tendons. Ideal for recovering from fractures, sprains, or chronic joint pain.',
    price: 50.00
  },
  {
    _id: '2',
    name: 'Sports Injury Management',
    description: 'Expert care for athletes and active individuals to recover from sports-related injuries and improve performance through targeted rehabilitation.',
    price: 55.00
  },
  {
    _id: '3',
    name: 'Neurological Rehabilitation',
    description: 'Comprehensive therapy for conditions like Stroke, Multiple Sclerosis, and Parkinson\'s disease, focusing on improving mobility and independence.',
    price: 65.00
  },
  {
    _id: '4',
    name: 'Post-Operative Recovery',
    description: 'Crucial rehabilitation programs following orthopedic surgeries like hip or knee replacements to ensure a safe and effective recovery.',
    price: 50.00
  },
  {
    _id: '5',
    name: 'Chronic Pain Management',
    description: 'A multi-faceted approach to managing long-term pain conditions, helping you regain control over your life and activities.',
    price: 55.00
  },
  {
    _id: '6',
    name: 'Geriatric Physiotherapy',
    description: 'Helping seniors maintain mobility, balance, and independence in daily activities, focusing on fall prevention and arthritis management.',
    price: 45.00
  }
];

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getServices = async () => {
      try {
        const { data } = await fetchServices();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices);
        }
      } catch (error) {
        console.error('Failed to fetch services, using fallback:', error);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };
    getServices();
  }, []);

  const handleBookNow = () => {
    navigate('/appointments');
  };

  return (
    <div className="services-page">
      <div className="container">
        <h1>Our Services</h1>
        {loading ? (
          <div className="loading">Loading services...</div>
        ) : (
          <div className="services-grid">
            {services.map((service) => (
              <div key={service._id} className="service-card">
                <div className="service-content">
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                  <div className="service-footer">
                    <button className="book-btn" onClick={handleBookNow}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;