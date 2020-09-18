// {
//     initialized: false,
//     currentUser: 12,
//     onlineUsersTab: {
//         show: false,
//         data: []
//     },
//     recommendations:[
//         {

//         },
//         {

//         }
//     ],
//     colorPicker: {
//         show: false,
//         value: "#40923"
//     }
// };

import { handleAction, handleActions } from 'redux-actions';
import { INIT } from './logo/actionTypes.js';
import { USER_PICKED } from './user/actionTypes.js';
import { COLOR_CHANGED, COLOR_PICKER_CLICKED, FETCH_COLOR } from './colorPicker/actionTypes.js';
import { FETCH_FILMS, FILMS_FETCHED } from './recommedations/actionTypes.js';
import { combineReducers } from 'redux';

const initialized = handleAction(
    INIT,
    (state, action) => action.payload,
    false
);

const currentUser = handleAction(
    USER_PICKED,
    (state, action) => action.payload,
    0
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
    currentUser,
    recommendations,
    color
});