import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getOnlineUsers, getFetchUsersRequestId, getUserId } from '../../modules/selectors.js';
import { fetchOnlineUsers } from '../../modules/user/actions.js';

import UserIcon from './UserIcon.jsx';

const allUsers = [1,2,3,4,5];

const OnlineUsersTab = () => {
    const onlineUsers = useSelector(getOnlineUsers);
    const requestId = useSelector(getFetchUsersRequestId);
    const userId = useSelector(getUserId);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetch(){
            await dispatch(fetchOnlineUsers(userId));
        }
        fetch();
    }, [requestId]);

    return (
        <div className="online-users-container">
            <h2>Online Users</h2>
            <div className="online-users-tab">
                {allUsers.map(u => <UserIcon isOnline={onlineUsers.includes(u)} id={u} key={u} />)}
            </div>
        </div>
    )
};

export default OnlineUsersTab;