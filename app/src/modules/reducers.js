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
import { COLOR_CHANGED, COLOR_PICKER_CLICKED } from './colorPicker/actionTypes.js';
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
        [COLOR_CHANGED]: (state, action) => ({
            ...state,
            value: action.payload.hex
        }),
        [COLOR_PICKER_CLICKED]: (state) => ({
            ...state,
            show: !state.show
        })
    }, 
    {
        show: false,
        value: '#040404'
    }
);

export default combineReducers({
    initialized,
    currentUser,
    color
});