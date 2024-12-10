// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const { bookAppointment, getAppointments, updateAppointment, cancelAppointment } = require('../controllers/appointmentController');

router.post('/appointments', bookAppointment);  
router.get('/appointments', getAppointments);
router.put('/appointments/:id', updateAppointment);  
router.delete('/appointments/:id', cancelAppointment);  

module.exports = router;
