import api from '../api.js';

export const getOnlineUsers = (userId) => api().get(`onlineUsers/${userId}`).then(response => response.data);
export const loginRequest = (userId) => api().put(`login/${userId}`).then(response => response.data);
export const logoutRequest = (userId) => api().put(`logout/${userId}`).then(response => response.data);