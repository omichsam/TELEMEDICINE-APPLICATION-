// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const { createPatient, getPatients, updatePatient, deletePatient } = require('../controllers/patientController');

router.post('/patients', createPatient);
router.get('/patients', getPatients);  
router.put('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);

module.exports = router;
