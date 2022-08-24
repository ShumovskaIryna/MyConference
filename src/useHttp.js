/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { useState, useCallback } from 'react';

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3002';

const useHttp = () => { // дозволяє працювати з асинхронними запитами на сервер
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }
      const response = await fetch(`${baseUrl}/${url}`, { method, body, headers });
      const jsonResponse = await response.json();

      setLoading(false);
      return jsonResponse;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);
  const clearError = useCallback(() => setError(null), []);
  return { loading, request, error, clearError };
};

export default useHttp;
