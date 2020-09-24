import { createAction } from 'redux-actions';
import { USER_PICKED, USERS_FETCHED, FETCH_USERS } from './actionTypes.js';
import { getOnlineUsers, loginRequest, logoutRequest } from './api.js';

export const pickUser = createAction(
    USER_PICKED,
    (userId) => userId
);

export const usersFetched = createAction(
    USERS_FETCHED,
    users => users
);

export const invokeFetch = createAction(FETCH_USERS);

export const login = (userId) => dispatch => {
    loginRequest(userId).then(() => dispatch(pickUser(userId)));
};

// export const logout = (userId) => dispatch => {
//     logoutRequest(userId).then(() => dispatch(pickUser(userId)));
// };

export const fetchOnlineUsers = (userId) => dispatch => {
    getOnlineUsers(userId).then(users => dispatch(usersFetched(users)));
};