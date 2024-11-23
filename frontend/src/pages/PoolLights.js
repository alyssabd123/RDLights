// PoolLights.jsx
import React, { useState, useEffect } from 'react';
import './PoolLights.css'

const PoolLights = () => {
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

    return(
        <div className='pool-lights-page'>
            <section className='hero-section'>
                <div className='content-container'>
                    <div className='text-content'>
                        <h1>Pool Lights</h1>
                        <p>Our lights are made to order in a size and color to match your room and table. 
                            Additional customization options - such as suede-wrapping, and adding logos 
                            or designs - are available at an additional price, based on the materials and work required.
                        </p>
                    </div>
                    <div className='image-content'></div>
                </div>
            </section>

            <section className='pricing-section'>
                <h2>Pricing</h2>
                <div className="pricing-grid">
                    <div className='pricing-column'>
                        <h3>Base Price*</h3>
                        <div className="price-list">
                            <p><strong>7' Table:</strong> {descriptions['pool-lights-price-7']}</p>
                            <p><strong>8' Table:</strong> {descriptions['pool-lights-price-8']}</p>
                            <p><strong>9' Table:</strong> {descriptions['pool-lights-price-9']}</p>
                        </div>
                        <p className="price-note">*Does not include cost of installation</p>
                    </div>

                    <div className='pricing-diagram'>
                        <img src='https://i.imgur.com/sLxZnMt.png' alt='Pricing diagram'/>
                    </div>

                    <div className='pricing-column'>
                        <h3>Customizing</h3>
                        <div className="customization-list">
                            <div className="custom-item">
                                <p><strong>Dimmable Lights</strong></p>
                                <p>Extra {descriptions['pool-lights-price-dim']}</p>
                            </div>
                            <div className="custom-item">
                                <p><strong>Frame Color</strong></p>
                                <p>{descriptions['pool-lights-price-color']}</p>
                            </div>
                            <div className="custom-item">
                                <p><strong>Frame Detailing</strong></p>
                                <p>{descriptions['pool-lights-price-detail']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PoolLights;