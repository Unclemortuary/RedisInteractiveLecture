export const isAppInitialized = state => state.initialized;
export const isUserPicked = state => state.currentUser !== 0;
export const showUserPicker = state => isAppInitialized(state) && !isUserPicked(state);
export const showContent = state => isUserPicked(state);

export const getCurrentColor = state => state.color.value;
export const showColorPicker = state => state.color.show;

export const getFetchColorRequestId = state => state.color.requestId;

export const getUserId = state => state.currentUser;