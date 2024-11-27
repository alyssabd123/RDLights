require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const productRoutes = require('./routes/productDescriptions');
const loginRoutes = require('./routes/adminLogin');

// Initialize express app
const app = express();
app.use(express.json()); // Parses JSON bodies
app.use(cors()); // Allow cross-origin requests


// API Routes
app.use('/api/descriptions', productRoutes); // Product descriptions API
app.use('/api/auth', loginRoutes); // Authentication API


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    // Start the server after successful DB connection
    const PORT = process.env.PORT || 4000 ;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error.message);
  });


  // Export the app for Vercel
  module.exports = (req, res) => app(req, res);