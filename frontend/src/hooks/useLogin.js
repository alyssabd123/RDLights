import { useState } from 'react';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/login', {
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
