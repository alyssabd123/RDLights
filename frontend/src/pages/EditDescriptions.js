import React, { useState, useEffect } from 'react';
import 'w3-css/w3.css';
import './EditDescriptions.css';
import { useNavigate } from 'react-router-dom';

const EditDescriptions = () => {
    const [products, setProducts] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [newValue, setNewValue] = useState('');

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    // Fetch all products on page load
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/products');
                const data = await response.json();
                if (response.ok) {
                    setProducts(data);
                } else {
                    setErrorMessage('Failed to fetch products');
                }
            } catch (error) {
                setErrorMessage('Error fetching products');
            }
        };
        fetchProducts();
    }, []);

    // Handle form submission to update the selected field
    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!selectedOption || !newValue) {
            setErrorMessage('Please select an option and enter a new value.');
            return;
        }

        try {
            const isPrice = selectedOption.includes('price');
            const endpoint = isPrice
                ? `http://localhost:4000/api/products/${selectedOption}`
                : `http://localhost:4000/api/descriptions/${selectedOption}`;

            const body = isPrice
                ? { price: newValue }
                : { description: newValue };

            const response = await fetch(endpoint, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(`Successfully updated: ${data.name || data.description}`);
                setErrorMessage('');
                // Update the UI locally if needed
                if (isPrice) {
                    setProducts((prev) =>
                        prev.map((product) =>
                            product.name === selectedOption
                                ? { ...product, price: newValue }
                                : product
                        )
                    );
                }
            } else {
                setErrorMessage(data.error || 'Failed to update.');
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error updating the value.');
        }
    };

    const handlePriceChange = (index, newPrice) => {
        const updatedProducts = [...products];
        updatedProducts[index].price = newPrice;
        setProducts(updatedProducts);
    };

    const handleSavePrice = async (product) => {
        try {
            const response = await fetch(`http://localhost:4000/api/products/${product.name}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ price: product.price }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage(`Price updated successfully for ${data.name}!`);
                setErrorMessage('');
            } else {
                setErrorMessage(data.error || 'Failed to update price.');
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error updating price.');
        }
    };

    return (
        <div className="Edit-Website">
            <div className="box">
                <button type="button" className="back-button" onClick={handleBackClick}>
                    &lt; Back
                </button>
                <h1>Edit Website</h1>
                <form className="w3-container" onSubmit={handleUpdate}>
                    <div className="w3-dropdown-hover">
                        <label htmlFor="page-select">Description/Price</label>
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
                            <option value="wall-racks-description">Wall Racks-Description</option>
                            <option value="wall-racks-price-4">Wall Racks-Price-4 Cues</option>
                            <option value="installation-description">Installation-Description</option>
                        </select>
                        <label htmlFor="text-input">Text</label>
                        <input
                            id="text-input"
                            className="w3-input w3-border-0"
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
            <div>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={product._id} className="product-item">
                        <h2>{product.name}</h2>
                        <label>
                            Price: $
                            <input
                                type="number"
                                value={product.price}
                                onChange={(e) => handlePriceChange(index, e.target.value)}
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
