const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db');

const authRoutes = require('./routes/auth');
const serviceRoutes = require('./routes/services');
const appointmentRoutes = require('./routes/appointments');
const contactRoutes = require('./routes/contact');
const blogRoutes = require('./routes/blogs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Test DB connection
db.execute('SELECT 1')
  .then(() => console.log('MySQL connected...'))
  .catch(err => console.log('DB Connection Error: ' + err.message));
