import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [descriptions, setDescriptions] = useState({});
    const [error, setError] = useState('');

    // Function to handle the scroll to the split section
    const scrollToSplitSection = () => {
        const targetSection = document.getElementById('split-section');

        // Smoothly scrolls to the split section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

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

    return (
        <div className='home-page'>
            <div className="homepageRight">
                <h1>R.D. Lights</h1>
                <p>Custom Pool Lights</p>
                <p>Handmade Wall Racks</p>
                {/* Button to trigger scroll */}
                <button className="button arrow-button" onClick={scrollToSplitSection}></button>
            </div>
            {/* Target section with an id */}
            <div id="split-section" className="split-section">
                {/* Left and right content sections */}
                <div className="Lcontent-section">
                </div>
                <div className="Rcontent-section">
                    <h1><b>About Me</b></h1>
                    <h2>{descriptions['home-description-about1']}</h2>
                </div>
            </div>
            <div className="third-section">
                <h2>{descriptions['home-description-about2']}</h2>
            </div>
            <div className="split-section2">
                <div className="Lcontent-section2">
                    <h1>{descriptions['home-description-about3']}</h1>
                </div>
                <div className="Rcontent-section2">
                </div>
            </div>
        </div>
    )
}

export default Home;
