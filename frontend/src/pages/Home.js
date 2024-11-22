import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [descriptions, setDescriptions] = useState({});
    const [error, setError] = useState('');

    const scrollToSplitSection = () => {
        const targetSection = document.getElementById('split-section');
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

    return (
        <div className='home-page'>
            <div className="content-wrapper">
                <div className="homepageRight">
                    <h1>R.D. Lights</h1>
                    <p>Custom Pool Lights</p>
                    <p>Handmade Wall Racks</p>
                    <button 
                        className="button arrow-button" 
                        onClick={scrollToSplitSection}
                        aria-label="Scroll to About section"
                    />
                </div>
                <main>
                    <section id="split-section" className="split-section">
                        <div className="Lcontent-section" />
                        <div className="Rcontent-section">
                            <h1>About Me</h1>
                            <h2>{descriptions['home-description-about1']}</h2>
                        </div>
                    </section>
                    <section className="third-section">
                        <h2>{descriptions['home-description-about2']}</h2>
                    </section>
                    <section className="split-section2">
                        <div className="Lcontent-section2">
                            <h1>{descriptions['home-description-about3']}</h1>
                        </div>
                        <div className="Rcontent-section2" />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;