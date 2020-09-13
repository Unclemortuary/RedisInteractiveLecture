import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrentColor } from '../modules/selectors.js';

import UserPicker from './UserPicker/UserPicker.jsx';
import Logo from './Logo/Logo.jsx';
import Content from './Content/Content.jsx';

import './app.scss';

const App = () => {
    const color = useSelector(getCurrentColor);
    return (
        <div className="app" style={{ "backgroundColor": color }}>
            <UserPicker/>
            <Logo/>
            <Content/>
        </div> 
    );
};

export default App;