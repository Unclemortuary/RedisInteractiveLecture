import { createAction } from 'redux-actions';
import { USER_PICKED, FETCH_ONLINE_USERS } from './actionTypes.js';
import { getOnlineUsers, getOnlineFriends } from './api.js';

export const pickUser = createAction(
    USER_PICKED,
    (userId) => userId
);

export const usersFetched = createAction(
    FETCH_ONLINE_USERS,
    users => users
);

export const fetchOnlineUsers = () => dispatch => {
    getOnlineUsers().then(users => dispatch(usersFetched(users)));
};

export const fetchOnlineFriends = () => dispatch => {
    getOnlineFriends().then(users => dispatch(usersFetched(users)));
};