import { handleAction, handleActions } from 'redux-actions';
import { INIT } from './logo/actionTypes.js';
import { USER_PICKED, USERS_FETCHED, FETCH_USERS } from './user/actionTypes.js';
import { COLOR_CHANGED, COLOR_PICKER_CLICKED, FETCH_COLOR } from './colorPicker/actionTypes.js';
import { FETCH_FILMS, FILMS_FETCHED } from './recommedations/actionTypes.js';
import { combineReducers } from 'redux';

const initialized = handleAction(
    INIT,
    (state, action) => action.payload,
    false
);

const users = handleActions(
    {
        [USER_PICKED]: (state, action) => ({
            ...state,
            currentUser: action.payload
        }),
        [USERS_FETCHED]: (state, action) => ({
            ...state,
            online: action.payload
        }),
        [FETCH_USERS]: (state) => ({
            ...state,
            requestId: state.requestId + 1
        })
    },
    {
        currentUser: 0,
        online: [],
        requestId: 0
    }
);

const recommendations = handleActions(
    {
        [FETCH_FILMS]: (state, action) => ({
            ...state,
            requestId: state.requestId + 1,
            isLoading: true
        }),
        [FILMS_FETCHED]: (state, action) => ({
            ...state,
            data: action.payload,
            isLoading: false
        })
    },
    {
        isLoading: true,
        requestId: 0,
        data: []
    }
);

const color = handleActions(
    {
        [FETCH_COLOR]: (state, action) => ({
            ...state,
            requestId: state.requestId + 1
        }),
        [COLOR_CHANGED]: (state, action) => ({
            ...state,
            value: action.payload
        }),
        [COLOR_PICKER_CLICKED]: (state) => ({
            ...state,
            show: !state.show
        })
    }, 
    {
        requestId: 0,
        show: false,
        value: ''
    }
);

export default combineReducers({
    initialized,
    users,
    recommendations,
    color
});