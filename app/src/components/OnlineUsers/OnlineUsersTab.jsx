import React from 'react';
import { useSelector } from 'react-redux';

import UserIcon from './UserIcon.jsx';

const onlineUsers = [
    { id: 1, online: true },
    { id: 2, online: false },
    { id: 3, online: false },
    { id: 4, online: true },
    { id: 5, online: false }
];

const OnlineUsersTab = () => {
    return (
        <div className="online-users-container">
            <h2>Online Users</h2>
            <div className="online-users-tab">
                {onlineUsers.map(u => <UserIcon isOnline={u.online} id={u.id} key={u.id} />)}
            </div>
        </div>
    )
};

export default OnlineUsersTab;