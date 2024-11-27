import React, { useState, useEffect } from 'react';
import './WallRacks.css';

const WallRacks = () => {
    const [descriptions, setDescriptions] = useState({});
    const [error, setError] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Handle window resize to determine if it's mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    const API_BASE_URL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_BASE_URL // Deployed backend URL
      : ''; // Empty string uses the proxy during local development
    

    // Fetch descriptions from API
    useEffect(() => {
        const fetchDescriptions = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/descriptions`);
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

    // Function to handle smooth scrolling to the visual section
    const scrollToVisual = () => {
        const targetSection = document.getElementById('visual');
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className='wall-rack-page'>
            <div className='split-section'>
                {!isMobile && <div className='racksLeft' />}
                <div className='racksRight'>
                    <h1>Wall Racks</h1>
                    {isMobile && <div className='racksLeft mobile-image' />}
                    <p>{descriptions['wall-racks-description']}</p>
                    <button className="button arrow-button" onClick={scrollToVisual}></button>
                </div>
            </div>
            <div className='bar'>
                <h1>PRICING</h1>
            </div>
            <div className="visual" id="visual">
                <div className='left'>
                    <h1>Base Price*</h1>
                    <p><b>4 Cues:</b> {descriptions['wall-racks-price-4']}</p>
                    <p><b>6 Cues:</b> {descriptions['wall-racks-price-6']}</p>
                    <p><b>8 Cues:</b> {descriptions['wall-racks-price-8']}</p>
                    <p>*Does not include cost of installation</p>
                </div>
                <div className='middle'>
                    <img className='middle' src='https://i.imgur.com/2HeaViT.png' alt='graph' />
                </div>
                <div className='right'>
                    <h1>Customizing</h1>
                    <p><b>Pool Ball Holder</b></p>
                    <p>{descriptions['wall-racks-price-hold']}</p>
                    <p><b>Rack Color</b></p>
                    <p>{descriptions['wall-racks-price-color']}</p>
                    <p><b>Rack Detailing</b></p>
                    <p>{descriptions['wall-racks-price-detailing']}</p>
                </div>
            </div>
        </div>
    );
};

export default WallRacks;
