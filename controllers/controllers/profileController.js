// controllers/profileController.js
exports.viewProfile = (req, res) => {
    const userId = req.user.id;
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results[0]);
    });
};

exports.updateProfile = (req, res) => {
    const userId = req.user.id;
    const updatedInfo = req.body;
    db.query('UPDATE users SET ? WHERE id = ?', [updatedInfo, userId], (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Profile updated successfully' });
    });
};
