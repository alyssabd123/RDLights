import React, { useState, useEffect } from 'react';
import 'w3-css/w3.css';
import './EditDescriptions.css';
import { useNavigate } from 'react-router-dom';

const EditDescriptions = () => {
    const [products, setProducts] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedSection, setSelectedSection] = useState('');


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

    // Handle input change for each product's price
    const handlePriceChange = (index, newPrice) => {
        const updatedProducts = [...products];
        updatedProducts[index].price = newPrice;
        setProducts(updatedProducts);
    };

    
  // Handle save button click to update the price of a specific product
const handleSavePrice = async (product) => {
    try {
        const response = await fetch(`http://localhost:4000/api/products/${product.name}`, {
            method: 'PATCH', // Changed to PATCH
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price: product.price }), // Only sending the updated price
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

const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
};


    return ( 
        <div className="Edit-Website">
            <div className= "box">
            <button type="button" className="back-button" onClick={handleBackClick}>&lt;Back</button>
            <h1>Edit Website</h1>
                <form class ="w3-container">
                    <div class="w3-dropdown-hover">
                        
                        <label for="page-select">Page</label>
                    <select id="page-select" class="w3-select w3-border">
                    <option value="" disabled selected>Select a page</option>
                    <option value="home">Home</option>
                    <option value="pool-lights">Pool Lights</option>
                    <option value="wall-racks">Wall Racks</option>
                    <option value="installation">Installation!</option>
                    </select>

                   
                    <label for="section-select">Section</label>
                    <select id="section-select" className="w3-select w3-border" onChange={handleSectionChange}>
                    <option value="" disabled selected>Select a section</option>
                    <option value="price">Price</option>
                    <option value="description">Description</option>
                    </select>
                    
                    

                    <label>Text</label>
                    <input class="w3-input w3-border-0" type="text"/>

                    </div>

                    <button>Update</button>
                </form>
            </div>
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
