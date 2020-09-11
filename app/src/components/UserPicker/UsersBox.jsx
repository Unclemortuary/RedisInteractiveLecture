import React from 'react';

import User from './User.jsx';

let users = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
];

const UsersBox = () => {
    return (
        <div className="users-box">
            {users.map(u => <User id={u.id} key={u.id}/>) }
        </div>
    )
};

export default UsersBox;