export const isAppInitialized = state => state.initialized;
export const isUserPicked = state => state.users.currentUser !== 0;
export const showUserPicker = state => isAppInitialized(state) && !isUserPicked(state);
export const showContent = state => isUserPicked(state);

export const getCurrentColor = state => state.color.value;
export const showColorPicker = state => state.color.show;
export const getFetchColorRequestId = state => state.color.requestId;

export const getFilms = state => state.recommendations.data;
export const getFetchFilmsRequestId = state => state.recommendations.requestId;
export const showFilmsLoader = state => state.recommendations.isLoading;

export const getUserId = state => state.users.currentUser;
export const getOnlineUsers = state => state.users.online;
export const getFetchUsersRequestId = state => state.users.requestId;