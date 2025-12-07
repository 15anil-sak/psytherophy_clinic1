const Appointment = require('../models/Appointment');

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Private
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.getAll();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get appointment by ID
// @route   GET /api/appointments/:id
// @access  Private
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.getById(req.params.id);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new appointment
// @route   POST /api/appointments
// @access  Private
const createAppointment = async (req, res) => {
    const { 
        service_id, 
        appointment_date, 
        description,
        patient_name,
        mobile_number,
        patient_email
    } = req.body;

    const patient_id = req.user.id; 

    if (!service_id || !appointment_date || !patient_name || !mobile_number || !patient_email) {
        return res.status(400).json({ message: 'Please include all required fields.' });
    }

    try {
        const appointment = new Appointment(
            patient_id, 
            service_id, 
            appointment_date, 
            description || null,
            patient_name,
            mobile_number,
            patient_email,
            undefined // Use default status
        );
        
        const newAppointment = await appointment.save();
        const createdAppointment = await Appointment.getById(newAppointment.id);
        res.status(201).json(createdAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error booking appointment.' });
    }
};

// @desc    Update an appointment
// @route   PUT /api/appointments/:id
// @access  Private
const updateAppointment = async (req, res) => {
  const { status } = req.body;

  try {
    await Appointment.update(req.params.id, status);
    res.json({ message: 'Appointment updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an appointment
// @route   DELETE /api/appointments/:id
// @access  Private
const deleteAppointment = async (req, res) => {
  try {
    await Appointment.delete(req.params.id);
    res.json({ message: 'Appointment removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
