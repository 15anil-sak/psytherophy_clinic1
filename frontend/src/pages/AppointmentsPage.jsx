import React, { useState, useEffect } from 'react';
import { createAppointment, fetchServices } from '../services/api';
import './AppointmentsPage.css';

const AppointmentsPage = () => {
  const [newlyBookedAppointment, setNewlyBookedAppointment] = useState(null);
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getServices = async () => {
        try {
            const { data } = await fetchServices();
            setServices(data);
            if (data.length > 0) {
                setServiceId(data[0].id);
            }
        } catch (error) {
            console.error('Failed to fetch services:', error);
        }
    };

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setPatientName(userInfo.name);
      setEmail(userInfo.email);
    }

    getServices();
  }, []);

  const handleBookingConfirmation = async (e) => {
    e.preventDefault();
    setMessage('');
    setNewlyBookedAppointment(null);

    const token = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')).token
      : null;

    if (!token) {
      setMessage('You must be logged in to book an appointment.');
      return;
    }

    if (mobileNumber.length !== 10) {
      setMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      const appointmentData = {
        service_id: parseInt(serviceId, 10),
        appointment_date: `${date} ${time}`,
        description: description,
        patient_name: patientName,
        mobile_number: mobileNumber,
        patient_email: email,
      };

      const { data } = await createAppointment(appointmentData);
      setNewlyBookedAppointment(data);
      setMessage('Appointment booked successfully!');
    } catch (error) {
      console.error('Failed to book appointment:', error);
      if (error.response) {
        if (error.response.status === 401) {
          setMessage('Your session has expired. Please log in again.');
          window.location.href = '/login';
        } else {
          setMessage(`Booking failed: ${error.response.data.message || 'Please try again.'}`);
        }
      } else {
        setMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="appointments-page">
      <div className="booking-section">
        <h1>Book Your Appointment</h1>
        <form onSubmit={handleBookingConfirmation} className="appointment-form">
          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select
              id="service"
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              required
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of Issue</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="cta-button">Confirm Booking</button>
        </form>
        {message && <p className="booking-message">{message}</p>}
      </div>

      {newlyBookedAppointment && (
        <div className="appointments-list-container">
          <h1>Your Appointment</h1>
          <ul className="appointments-list">
            <li className="appointment-item">
              <h2>{newlyBookedAppointment.service_name}</h2>
              <p>Patient: {newlyBookedAppointment.patient_name}</p>
              <p>Date: {new Date(newlyBookedAppointment.appointment_date).toLocaleString()}</p>
              <p>Status: {newlyBookedAppointment.status}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
