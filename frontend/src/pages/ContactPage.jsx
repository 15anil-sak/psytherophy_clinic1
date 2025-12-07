import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="info-item">
          <h2>Clinic Address</h2>
          <p>H no: 1-5-994/2/ NR,High tension road, citizen colony,Old Alwal,Secundrabad,50010</p>
        </div>
        <div className="info-item">
          <h2>Email Address</h2>
          <p>shiramshettytejaswi199@gmail.com</p>
        </div>
        <div className="info-item">
          <h2>Phone</h2>
          <p>Dr.Tejaswi Shiramshetty</p>
          <p>9121604139</p>
        </div>
      </div>
      <div className="map-container">
        {/*
          To replace this map with your own:
          1. Go to Google Maps and search for your address.
          2. Click "Share" and then "Embed a map".
          3. Copy the HTML and replace the iframe below.
        */}
        <iframe
          src="https://maps.google.com/maps?q=17.512175483661917,78.49946824790672&z=15&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
