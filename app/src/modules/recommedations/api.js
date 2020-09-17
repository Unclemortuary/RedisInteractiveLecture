import api from '../api.js';

export const fetchRecommendations = () => api().get('recommendations').then(response => response.data);