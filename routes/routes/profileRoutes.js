// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { viewProfile, updateProfile } = require('../controllers/profileController');
const authenticate = require('../middlewares/authenticate');

router.get('/profile', authenticate, viewProfile);
router.put('/profile', authenticate, updateProfile); 

module.exports = router;
