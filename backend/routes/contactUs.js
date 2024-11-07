// Import dependencies
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

// Configure the transporter with your email service and credentials
const transporter = nodemailer.createTransport({
    service: 'gmail', // Example: use your email provider's service here
    auth: {
      user: process.env.EMAIL_USER,  // replace with your email
      pass: process.env.EMAIL_PASS    // replace with your email password or app-specific password
    }
  });

// Define the /send-email route
router.post('/send-email', (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;  // Get data from the request body
    console.log(firstName, lastName, email, phoneNumber, message);
  // Email options
  const mailOptions = {
    from: email,  // The user's email
    to: process.env.EMAIL_PASS , // Your client's email address
    subject: 'Contact Us Form Submission',
    text: `Name: ${firstName}\n${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage:${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully');
  });
});

module.exports = router;