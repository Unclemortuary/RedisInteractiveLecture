import React from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../modules/user/actions.js';

const User = ({ id }) => {
    const dispatch = useDispatch();
    return (
        <div className="user" onClick={() => dispatch(login(id))}>
            <span>User Id: {id}</span>
        </div>
    )
};

export default User;