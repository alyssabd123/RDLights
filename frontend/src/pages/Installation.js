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