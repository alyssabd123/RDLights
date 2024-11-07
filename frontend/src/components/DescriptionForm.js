import { useState, useEffect } from 'react';

const DescriptionForm = ({ descriptionId }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch the current description when the component loads
    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await fetch(`/api/products/${descriptionId}`);
                const data = await response.json();

                if (response.ok) {
                    setName(data.name);
                    setDescription(data.description);
                } else {
                    setError("Could not fetch the description data");
                }
            } catch (error) {
                setError("Error fetching description data");
            }
        };

        fetchDescription();
    }, [descriptionId]);

    // Handle form submission to update the description
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedDescription = { name, description };

        try {
            const response = await fetch(`/api/products/${descriptionId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDescription),
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.error || 'Failed to update description');
            } else {
                setSuccessMessage('Description updated successfully');
                setError(null);
            }
        } catch (error) {
            setError("Error updating description");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Description</h3>

            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}

            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label>Description:</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <button type="submit">Update Description</button>
        </form>
    );
};

export default DescriptionForm;
