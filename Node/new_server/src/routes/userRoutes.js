// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const upload = require('../config/multer');

// @route   POST /api/users
// @desc    Create a new user with image upload
// @access  Public
router.post('/users', upload.single('image'), async (req, res) => {
    const { name } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    
    if (!image) {
        return res.status(400).json({ msg: 'Image file is required' });
    }

    try {
        const newUser = new User({ name, image });
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
