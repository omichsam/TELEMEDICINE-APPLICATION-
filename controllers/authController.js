const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = async (req, res) => {
    const { email, password, role, profile_info } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (email, password, role, profile_info) VALUES (?, ?, ?, ?)',
        [email, hashedPassword, role, profile_info], (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ message: 'User registered successfully' });
        });
};
