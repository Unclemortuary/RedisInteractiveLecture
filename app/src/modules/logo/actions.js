import { createAction } from 'redux-actions';
import { INIT } from './actionTypes.js';

const initApp = createAction(
    INIT,
    () => true
);

export const initAppAfterDelay = (dispatch) => setTimeout(
    dispatch(initApp),
    500
);