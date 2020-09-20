import api from '../api.js';

export const fetchColor = (userId) => api().get(`color/${userId}`).then(response => response.data);
export const saveColor = (userId, color) => api().post(`saveColor/${userId}`, `\"${color}\"`, {headers: {"Content-Type": "application/json"}}).then(response => response.data);