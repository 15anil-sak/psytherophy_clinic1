const express = require('express');
const router = express.Router();

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
router.get('/', (req, res) => {
  const blogs = [
    {
      id: 1,
      title: 'The Importance of Regular Exercise',
      date: '2025-11-20',
      description: 'Regular exercise is crucial for maintaining physical and mental health. It helps in weight management, strengthens bones and muscles, and improves mood.'
    },
    {
      id: 2,
      title: 'Understanding and Preventing Common Sports Injuries',
      date: '2025-11-15',
      description: 'This post covers the most common sports injuries, their causes, and effective prevention strategies to keep you in the game.'
    },
    {
      id: 3,
      title: 'A Guide to Post-Workout Recovery',
      date: '2025-11-10',
      description: 'Proper recovery is just as important as the workout itself. Learn about the best techniques for post-workout recovery to maximize your gains.'
    }
  ];
  res.json(blogs);
});

module.exports = router;
