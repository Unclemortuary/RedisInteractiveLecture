import api from '../api.js';

export const fetchColor = () => api().get('color').then(response => response.data);