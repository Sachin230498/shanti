// config/database.js
const mongoose = require('mongoose');
require('dotenv').config();



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
