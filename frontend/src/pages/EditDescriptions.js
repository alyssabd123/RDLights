import React, { useState, useEffect } from 'react';
import 'w3-css/w3.css';
import './EditDescriptions.css';
import { useNavigate } from 'react-router-dom';

const EditDescriptions = () => {
    // State variables
    const [descriptions, setDescriptions] = useState([]); // All descriptions
    const [products, setProducts] = useState([]); // List of products fetched from the API
    const [successMessage, setSuccessMessage] = useState(''); // Success notification
    const [errorMessage, setErrorMessage] = useState(''); // Error notification
    const [selectedOption, setSelectedOption] = useState(''); // Selected description/price field
    const [newValue, setNewValue] = useState(''); // New value for the selected field

    const navigate = useNavigate();

    // Navigate back to the home page
    const handleBackClick = () => navigate('/');

    useEffect(() => {
        const fetchDescriptions = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/descriptions');
                const data = await response.json();
    
                if (response.ok) {
                    console.log('Fetched Descriptions:', data); // Debugging: Check data
                    setDescriptions(data);
                } else {
                    console.error('Failed to fetch descriptions:', response.statusText);
                    setErrorMessage('Failed to fetch descriptions');
                }
            } catch (error) {
                console.error('Error fetching descriptions:', error); // Debugging: Catch errors
                setErrorMessage('Error fetching descriptions');
            }
        };
    
        fetchDescriptions();
    }, []);

    // Update the selected description or price
    const handleUpdate = async (e) => {
        e.preventDefault();

        // Ensure an option is selected and a new value is entered
        if (!selectedOption || !newValue.trim()) {
            setErrorMessage('Please select an option and enter a valid value.');
            return;
        }

        try {
            const isPrice = selectedOption.includes('price'); // Determine if the field is a price
            const endpoint = isPrice
                ? `http://localhost:4000/api/products/${selectedOption}`
                : `http://localhost:4000/api/descriptions/${selectedOption}`;
            const payload = isPrice
                ? { price: parseFloat(newValue) }
                : { description: newValue };

            const response = await fetch(endpoint, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(`Successfully updated: ${data.name || data.description}`);
                setErrorMessage('');

                // Update local state for prices dynamically
                if (isPrice) {
                    setProducts((prevProducts) =>
                        prevProducts.map((product) =>
                            product.name === selectedOption
                                ? { ...product, price: parseFloat(newValue) }
                                : product
                        )
                    );
                }
            } else {
                setErrorMessage(data.error || 'Failed to update.');
            }
        } catch {
            setErrorMessage('Error updating the value.');
        }
    };

    // Save the updated price of a specific product
    const handleSavePrice = async (product) => {
        try {
            const response = await fetch(`http://localhost:4000/api/products/${product.name}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ price: parseFloat(product.price) }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(`Price updated successfully for ${data.name}`);
                setErrorMessage('');
            } else {
                setErrorMessage(data.error || 'Failed to update price.');
            }
        } catch {
            setErrorMessage('Error updating price.');
        }
    };

    return (
        <div className="Edit-Website">
            {/* Navigation and Page Header */}
            <div className="box">
                <button type="button" className="back-button" onClick={handleBackClick}>
                    &lt;Back
                </button>
                <h1>Edit Website</h1>

                 {/* Form to Edit Description/Price */}
                <form className="w3-container" onSubmit={handleUpdate}>
                    <label htmlFor="page-select">Description/Price:</label>
                    <select
                        id="page-select"
                        className="w3-select w3-border"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select an option to edit
                        </option>
                        <option value="home-description-about1">Home-Description-About Me 1</option>
                        <option value="home-description-about2">Home-Description-About Me 2</option>
                        <option value="home-description-about3">Home-Description-About Me 3</option>
                        <option value="pool-lights-description">Pool Lights-Description</option>
                        <option value="pool-lights-price-7">Pool Lights-Price-7'</option>
                        <option value="pool-lights-price-8">Pool Lights-Price-8'</option>
                        <option value="pool-lights-price-9">Pool Lights-Price-9'</option>
                        <option value="pool-lights-price-dim">Pool Lights-Price-Dimmable</option>
                        <option value="pool-lights-price-color">Pool Lights-Price-Frame Color</option>
                        <option value="pool-lights-price-detail">Pool Lights-Price-Frame Detailing</option>
                        <option value="wall-racks-description">Wall Racks-Description</option>
                        <option value="wall-racks-price-4">Wall Racks-Price-4 Cues</option>
                        <option value="wall-racks-price-6">Wall Racks-Price-6 Cues</option>
                        <option value="wall-racks-price-8">Wall Racks-Price-8 Cues</option>
                        <option value="wall-racks-price-hold">Wall Racks-Price-Ball Holder</option>
                        <option value="wall-racks-price-color">Wall Racks-Price-Rack Color</option>
                        <option value="wall-racks-price-detailing">Wall Racks-Price-Rack Detailing</option>
                        <option value="installation-description">Installation-Description</option>
                        <option value="installation-pricing">Installation-Pricing and Delivery</option>
                        <option value="contact-us-description">Contact Us-Description</option>
                        </select>

                <label>New Value:</label>
                <input
                    className="w3-input w3-border"
                    type="text"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                />

                <button type="submit" className="w3-button w3-blue">
                    Update
                </button>
            </form>

                    
            </div>

            {/* Notifications */}
            <div>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>

            {/* Display Products List */}
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={product._id} className="product-item">
                        <h2>{product.name}</h2>
                        <label>
                            Price: $
                            <input
                                type="number"
                                value={product.price}
                                onChange={(e) => {
                                    const updatedProducts = [...products];
                                    updatedProducts[index].price = e.target.value;
                                    setProducts(updatedProducts);
                                }}
                            />
                        </label>
                        <button onClick={() => handleSavePrice(product)}>Save</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditDescriptions;
