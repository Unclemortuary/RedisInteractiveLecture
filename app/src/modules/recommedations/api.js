import api from '../api.js';

export const fetchRecommendations = (userId) => api().get(`recommendations/${userId}`).then(response => response.data);