// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const { createDoctor, getDoctors, updateDoctor, deleteDoctor } = require('../controllers/doctorController');

router.post('/doctors', createDoctor);  
router.get('/doctors', getDoctors);
router.put('/doctors/:id', updateDoctor);  
router.delete('/doctors/:id', deleteDoctor);  

module.exports = router;
