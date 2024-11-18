import React, { useState, useEffect } from 'react';
 import './Installation.css'
 
 const Installation = () => {
    const [descriptions, setDescriptions] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDescriptions = async () => {
            try {
                const response = await fetch('/api/descriptions');
                const data = await response.json();
                console.log(data)
                if (response.ok) {
                    // Convert array to object for easy access by name
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

    return(
        <div>
            <div className="installationTop">
            <h1>Installation</h1>
            <h2>Our Installation Process:</h2>
            <p>{descriptions['installation-description']}</p>
                <ul>
                    <li>Assessment: the ability to install will depend on the customer’s address, 
                    and where in the room the installation will take place. This factors in ceiling height.</li>
                    <li>Customization: The final price will depend on the table size and the complexity of any additional 
                    customization options.</li>
                    <li>Standard procedure is a 50% deposit up front. An invoice and an expected 
                    timeframe of completion will be provided. </li>
                    <li>Delivery: Average delvivery time is within one week, but can be as fast as a three days for special cases.</li>
                </ul>
            </div>
            <div className='installationBottom'>
                <h1>Pricing and Delivery</h1>
                <h2>How it Works:</h2>
                <p>{descriptions['installation-pricing']}</p>
            </div>
        </div>
    )
 }

 export default Installation;