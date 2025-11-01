import axios from 'axios';
import { API_BASE_URL, STORAGE_KEYS } from '../utils/constants';

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem(STORAGE_KEYS.TOKEN);
            localStorage.removeItem(STORAGE_KEYS.USER);
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// API methods
export const api = {
    // GET request
    get: (url, config = {}) => apiClient.get(url, config),

    // POST request
    post: (url, data, config = {}) => apiClient.post(url, data, config),

    // PUT request
    put: (url, data, config = {}) => apiClient.put(url, data, config),

    // DELETE request
    delete: (url, config = {}) => apiClient.delete(url, config),

    // PATCH request
    patch: (url, data, config = {}) => apiClient.patch(url, data, config),
};