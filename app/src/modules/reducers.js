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

import { handleAction, handleActions, combineActions } from 'redux-actions';
import { INIT } from './logo/actionTypes.js';
import { USER_PICKED } from './user/actionTypes.js';
import { COLOR_CHANGED, COLOR_PICKER_CLICKED, GET_CURRENT_COLOR, FETCH } from './colorPicker/actionTypes.js';
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

const color = handleActions(
    {
        [FETCH]: (state, action) => ({
            ...state,
            requestId: state.requestId + 1
        }),
        [combineActions(COLOR_CHANGED, GET_CURRENT_COLOR)]: (state, action) => {
            console.log('sas');

            return ({
                ...state,
                value: action.payload
            });
        },
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
    color
});