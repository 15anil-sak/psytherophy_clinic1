import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Adjust this if your backend runs on a different port
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('userInfo')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('userInfo')).token
    }`;
  }
  return req;
});

// Auth
export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);

// Services
export const fetchServices = () => API.get('/services');

// Appointments
export const fetchAppointments = () => API.get('/appointments');
export const createAppointment = (appointmentData) => API.post('/appointments', appointmentData);

// Blogs
export const fetchBlogs = () => API.get('/blogs');

export default API;
