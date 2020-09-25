import React from 'react';
import { useDispatch } from 'react-redux';

import { pickUser } from '../../modules/user/actions.js';

const User = ({ id }) => {
    const dispatch = useDispatch();
    return (
        <div className="user" onClick={() => dispatch(pickUser(id))}>
            <span>User Id: {id}</span>
        </div>
    )
};

export default User;