import React from 'react';
import { useSelector } from 'react-redux';

import { isAppInitialized, isUserPicked } from '../../modules/selectors.js';
import UsersBox from './UsersBox.jsx';

const UserPicker = () => {
    const initialized = useSelector(isAppInitialized);
    const userBeenPicked = useSelector(isUserPicked);
    const show = initialized && !userBeenPicked;
    
    return show ? (
        <div className="user-picker">
            <h2>Who are you?</h2>
            <UsersBox/>
        </div>
    ) : null;
};

export default UserPicker;