import React, { useState, useEffect } from 'react';
import 'w3-css/w3.css'

const EditDescriptions = () => {
    const [products, setProducts] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    // Handle input change for each product's price
    const handlePriceChange = (index, newPrice) => {
        const updatedProducts = [...products];
        updatedProducts[index].price = newPrice;
        setProducts(updatedProducts);
    };

    // Handle save button click to update the price of a specific product
    const handleSavePrice = async (product) => {
        try {
            const response = await fetch('http://localhost:4000/api/products/update-price', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: product.name, price: product.price }),
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
            <form class ="w3-container">
                <h1>Edit Website</h1>
                <div class="w3-dropdown-hover">
                    <h3>Page</h3>
                    <button class="w3-button">Select</button>
                    <div class="w3-dropdown-content w3-bar-block w3-border">
                        <a href="#" class="w3-bar-item w3-button">Home</a>
                        <a href="#" class="w3-bar-item w3-button">Pool Lights</a>
                        <a href="#" class="w3-bar-item w3-button">Wall Racks</a>
                        <a href="#" class="w3-bar-item w3-button">Installation</a>
                    </div>
                </div>
                <div class="w3-dropdown-hover">
                    <h3>Section</h3>
                    <button class="w3-button">Select</button>
                    <div class="w3-dropdown-content w3-bar-block w3-border">
                        <a href="#" class="w3-bar-item w3-button">Price</a>
                        <a href="#" class="w3-bar-item w3-button">Description</a>
                    </div>
                </div>
                <label>Text</label>
                <input class="w3-input w3-border-0" type="text"/>
                <button>Update</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

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
