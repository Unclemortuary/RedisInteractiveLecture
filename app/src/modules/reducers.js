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

import { handleAction } from 'redux-actions';
import { INIT } from './logo/actionTypes.js';
import { USER_PICKED } from './user/actionTypes.js';
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

export default combineReducers({
    initialized,
    currentUser
});