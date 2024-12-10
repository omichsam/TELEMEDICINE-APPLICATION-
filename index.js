const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

app.use(

    session({

        key: 'user_sid',
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        
    })
);

// Route
app.get('/', (req, res) => {
    res.sendFile()
})
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
