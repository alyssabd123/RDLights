// Contact.js
import './Contact.css'; // Import the CSS file
import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';


const Contact = () => {
    const [descriptions, setDescriptions] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDescriptions = async () => {
            try {
                const response = await fetch('/api/descriptions');
                const data = await response.json();
                if (response.ok) {
                    const descriptionsByName = data.reduce((acc, desc) => {
                        acc[desc.name] = desc.description;
                        return acc;
                    }, {});
                    setDescriptions(descriptionsByName);
                } else {
                    setError('Failed to fetch descriptions');
                }
            } catch (error) {
                setError('Error fetching descriptions');
            }
        };

        fetchDescriptions();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        alert('Email Submitted');

        emailjs.sendForm('service_njhyou6', 'template_0xpipz5', e.target, 'jwjW30JbYnaZ7shfV')
    }
    return (
        <div className="contact-container">
            <div className="header-container">
                <h1>Contact Us</h1>
                <p>{descriptions["contact-us-instructions"]}</p>
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
