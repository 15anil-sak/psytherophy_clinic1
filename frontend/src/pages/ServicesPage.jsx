import React, { useState, useEffect } from 'react';
import { fetchServices } from '../services/api';
import './ServicesPage.css';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        // Mock data since the API is not implemented yet
        const mockServices = [
          { id: 1, name: 'Sports Injury Rehab', description: 'Specialized programs to get you back in the game, stronger than before.' },
          { id: 2, name: 'Orthopedic Care', description: 'Comprehensive care for musculoskeletal conditions and post-surgery rehabilitation.' },
          { id: 3, name: 'Neurological Rehab', description: 'Improving function and independence for patients with neurological disorders.' },
          { id: 4, name: 'Cardiopulmonary', description: 'Rehabilitation for heart and lung conditions to improve your quality of life.' },
          { id: 5, name: 'Pediatric Physiotherapy', description: 'Gentle and effective therapy for children with developmental or mobility issues.' },
          { id: 6, name: 'Geriatric Physiotherapy', description: 'Helping older adults maintain mobility, balance, and independence.' },
        ];
        setServices(mockServices);
        // const { data } = await fetchServices();
        // setServices(data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };
    getServices();
  }, []);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <ul className="services-list">
        {services.map((service) => (
          <li key={service.id} className="service-item">
            <h2>{service.name}</h2>
            <p>{service.description}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;