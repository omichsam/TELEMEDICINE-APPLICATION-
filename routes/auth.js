// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();
require('dotenv').config();

// Register a new patient
router.post('/register', async (req, res) => {
   const { name, email, password } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);

   db.query('INSERT INTO patients (name, email, password) VALUES (?, ?, ?)', 
      [name, email, hashedPassword], 
      (err, result) => {
         if (err) throw err;
         res.json({ message: 'Patient registered successfully!' });
      }
   );
});

// Login a patient
router.post('/login', (req, res) => {
   const { email, password } = req.body;

   db.query('SELECT * FROM patients WHERE email = ?', [email], async (err, results) => {
      if (err) throw err;
      if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
         return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
   });
});

router.post('/logout', logoutUser);

module.exports = router;
