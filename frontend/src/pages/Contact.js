// Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="form-container">
                <h1>Contact Us</h1>
                <form action="/submit" method="POST">
                    <label>
                        First Name*:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Last Name*:
                        <input type="text" name=" last name" required />
                    </label>
                    <label>
                        Email*:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Phone Number:
                        <input type="text" name="phone number" />
                    </label>
                    <label>
                        Message*:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
