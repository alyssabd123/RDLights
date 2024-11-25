import React, { useState, useEffect } from 'react';
 import './Installation.css'
 
 const Installation = () => {
    const [descriptions, setDescriptions] = useState({});
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchDescriptions();
    }, []);


    // Function to render description as bullet points
    const renderBullets = (text) => {
      if (!text) {
        return <p>No details available.</p>; // Fallback for missing data
      }
      const points = text.split(".").filter((point) => point.trim() !== "");;
      return (
          <ul>
              {points.map((point, index) => (
              <li key={index}>{point.trim()}</li> // Trim removes extra whitespace
            ))}
          </ul>
      );
  };

    return(
        <div>
            <div className="installationTop">
              <h1>Installation</h1>
              <h2>Our Installation Process:</h2>
              <p>{renderBullets(descriptions['installation-description'])}</p>
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
