// Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file
import { useState } from 'react';

const Contact = () => {

    // new
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Email sent successfully');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error(error);
            alert('Error sending email');
        }
    };
    // new end

    return (
        /*<div className="contact-container">
            <h1>Contact Us</h1>
            <div className="form-container">
                <form action="/submit" method="POST">
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
};*/
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            First Name*:
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </label>
                        <label>
                            Last Name*:
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email*:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>
                        <label>
                            Phone Number:
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </label>
                    </div>
                    <label>
                        What can we help with?*:
                        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};


export default Contact;
