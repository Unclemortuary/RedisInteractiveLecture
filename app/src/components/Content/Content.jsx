import React from 'react';
import { useSelector } from 'react-redux';

import { showContent, getUserId } from '../../modules/selectors.js';

import Header from '../Header/Header.jsx';
import MessageBox from '../MainMessageBox/MainMessageBox.jsx';
import FilmsContainer from '../FilmsContainer/FilmsContainer.jsx';
import OnlineUsersTab from '../OnlineUsers/OnlineUsersTab.jsx';

const Content = () => {
    const show = useSelector(showContent);
    const userId = useSelector(getUserId);
    return show ? (
        <>
            <Header/>
            <div className="post-header">
                <MessageBox>Recommended for user {userId}:</MessageBox>
                <OnlineUsersTab/>
            </div>
            <FilmsContainer/>
        </>
    ) : null;
};

export default Content;