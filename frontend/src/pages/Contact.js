// Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="form-container">
                <form action="/submit" method="POST">
                    <div className="form-group">
                        <label>
                            First Name*:
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Last Name*:
                            <input type="text" name=" last name" required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email*:
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Phone Number:
                            <input type="text" name="phone number" />
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
