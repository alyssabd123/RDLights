// Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        alert('Email Submitted');

        emailjs.sendForm('service_njhyou6', 'template_0xpipz5', e.target, 'jwjW30JbYnaZ7shfV')
    }
    return (
        <div className="contact-container">
            <div className="header-container">
                <h1>Contact Us</h1>
                <p>Contact us description goes right here</p>
            </div>
            <div className="form-container">
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label>
                            First Name*:
                            <input type="text" name="firstName" required />
                        </label>
                        <label>
                            Last Name*:
                            <input type="text" name="lastName" required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email*:
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Phone Number:
                            <input type="text" name="phoneNumber" />
                        </label>
                    </div>
                    <label>
                        What can we help with?*:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
