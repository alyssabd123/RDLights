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
        <div className='pool-lights-page'>
            <div>
                <div id='split-section' className='split-section'>
                    <div className='lightsLeft'>
                        <div id='headera'>
                        <h1>Pool Lights</h1>
                        </div>
                        <p>Our lights are made to order in a size and color to match your room and table. 
                            Additional customization options - such as suede-wrapping, and adding logos 
                            or designs - are available at an additional price, based on the materials and work required.
                        </p>
                    </div>
                    <div className='lightsRight'></div>
                </div>
            </div>
            <div className='bar'>
                <h1>PRICING</h1>
            </div>
            <div className="visual" id="visual">
                <div className = 'left' >
                    <h1>Base Price*</h1>
                    <p><b>7' Table:</b> {descriptions['pool-lights-price-7']}</p>
                    <p><b>8' Table:</b> {descriptions['pool-lights-price-8']}</p>
                    <p><b>9' Table:</b> {descriptions['pool-lights-price-9']}</p>

                    <p>*Does not include cost of installation</p>
                    
                </div>
                <div className = 'middle' >
                    <img className = 'middle' src= 'https://i.imgur.com/sLxZnMt.png' alt='graph'/>
                </div>
                <div className = 'right' >
                    <h1>Customizing</h1>
                    <p><b>Dimmable Lights</b></p>
                    <p>Extra {descriptions['pool-lights-price-dim']}</p>

                    <p><b>Frame Color</b></p>
                    <p>{descriptions['pool-lights-price-color']}</p>

                    <p><b>Frame Detailing</b></p>
                    <p>{descriptions['pool-lights-price-detail']}</p>
                </div>
            </div>
        </div>
    )
}

export default PoolLights;