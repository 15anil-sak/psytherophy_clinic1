const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: false, // Optional for unauthenticated bookings
      ref: 'User',
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Service',
    },
    appointment_date: {
      type: Date,
      required: true,
    },
    patient_name: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    patient_email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
