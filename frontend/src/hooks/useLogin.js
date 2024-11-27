import { useState } from 'react';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_BASE_URL // Deployed backend URL
      : ''; // Empty string uses the proxy during local development
  
  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      setIsLoading(false);
      return true;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      return false
    }
  };

  return { login, isLoading, error };
};
