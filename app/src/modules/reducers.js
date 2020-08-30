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

const initialized = handleAction(
    INIT,
    (state, action) => action.value,
    false
);

export default initialized;