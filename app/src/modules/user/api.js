import api from '../api.js';

export const getOnlineUsers = () => api.get('onlineUsers').then(response => response.data);
export const getOnlineFriends = () => api.get('onlineFrieds').then(response => response.data);