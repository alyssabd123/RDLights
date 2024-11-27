import React, { useState, useEffect } from "react";
import "w3-css/w3.css";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const EditDescriptions = () => {
    // State variables
    const [descriptions, setDescriptions] = useState([]); // All descriptions fetched from the API
    const [successMessage, setSuccessMessage] = useState(""); // Success notification
    const [errorMessage, setErrorMessage] = useState(""); // Error notification
    const [selectedOption, setSelectedOption] = useState(""); // Selected description/price field
    const [newValue, setNewValue] = useState(""); // New value for the selected field

    const navigate = useNavigate();


    const API_BASE_URL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_BASE_URL // Deployed backend URL
      : ''; // Empty string uses the proxy during local development


    // Navigate back to the home page
    const handleBackClick = () => navigate("/");
    
    
    
    // Fetch all descriptions on component mount
    useEffect(() => {
        const fetchDescriptions = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/descriptions`);
                const data = await response.json();

                if (response.ok) {
                    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
                    setDescriptions(data); // Populate descriptions state
                } else {
                    setErrorMessage("Failed to fetch descriptions");
                }
            } catch (error) {
                setErrorMessage("Error fetching descriptions");
            }
        };

        fetchDescriptions();
    }, []);

    // Handle dropdown selection change
    const handleDropdownChange = async (e) => {
        const selected = e.target.value;
        setSelectedOption(selected); // Update selected option

        try {
            const response = await fetch(
                `${API_BASE_URL}/api/descriptions/${selected}`
            );
            const data = await response.json();

            if (response.ok) {
                setNewValue(data.description || ""); // Populate the input with the fetched description
                setErrorMessage("");
            } else {
                setNewValue(""); // Reset if fetch fails
                setErrorMessage(data.error || "Description not found");
            }
        } catch (error) {
            setNewValue(""); // Reset if an error occurs
            setErrorMessage("Error fetching the description");
        }
    };

    // Update the selected description
    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!selectedOption || !newValue.trim()) {
            setErrorMessage("Please select an option and enter a valid value.");
            return;
        }

        try {
            const response = await fetch(
                `${API_BASE_URL}/api/descriptions/${selectedOption}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ description: newValue }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(`Successfully updated!`);
                setErrorMessage("");

                // Update the frontend state dynamically
                setDescriptions((prevDescriptions) =>
                    prevDescriptions.map((desc) =>
                        desc.name === selectedOption
                            ? { ...desc, description: newValue }
                            : desc
                    )
                );
            } else {
                setErrorMessage(data.error || "Failed to update.");
            }
        } catch {
            setErrorMessage("Error updating the value.");
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

                {/* Form to Edit Description */}
                <form className="w3-container" onSubmit={handleUpdate}>
                    <label htmlFor="page-select">Description:</label>
                    <select
                        id="page-select"
                        className="w3-select w3-border"
                        value={selectedOption}
                        onChange={handleDropdownChange}
                    >
                        <option value="" disabled>
                            Select an option to edit
                        </option>
                        {descriptions.map((desc) => (
                            <option key={desc.name} value={desc.name}>
                                {desc.name}
                            </option>
                        ))}
                    </select>

                    <label>New Value:</label>
                    <textarea
                        className="w3-border"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)} // Allow manual updates
                        rows={1} // Default number of visible rows
                        style={{
                            overflow: "auto", // Allow scroll bar when needed
                        }}
                    ></textarea>

                    <button type="submit" className="w3-button w3-blue">
                        Update
                    </button>

                    {/* Notifications */}
                    <div>
                        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDescriptions;
