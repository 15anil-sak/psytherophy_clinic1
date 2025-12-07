const express = require('express');
const router = express.Router();

// @desc    Create a new contact message
// @route   POST /api/contact/message
// @access  Public
router.post('/message', (req, res) => {
  const { name, email, message } = req.body;
  // In a real application, you would handle this message, e.g., save to a database or send an email.
  console.log(`Received message: ${name}, ${email}, ${message}`);
  res.status(201).json({ message: 'Message received' });
});

module.exports = router;
