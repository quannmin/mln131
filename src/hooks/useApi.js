import { useState, useEffect } from 'react';
import { apiClient } from '../services/api';

export const useApi = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await apiClient.get(url, options);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (url) {
            fetchData();
        }
    }, [url]);

    const refetch = async () => {
        if (url) {
            try {
                setIsLoading(true);
                setError(null);
                const response = await apiClient.get(url, options);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return { data, isLoading, error, refetch };
};