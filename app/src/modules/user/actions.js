import { createAction } from 'redux-actions';
import { USER_PICKED } from './actionTypes.js';

export const pickUser = createAction(
    USER_PICKED,
    (userId) => userId
);