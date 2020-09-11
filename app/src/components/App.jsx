import React from 'react';

import UserPicker from './UserPicker/UserPicker.jsx';
import Logo from './Logo/Logo.jsx';

import './app.scss';

const App = () => {
    console.log("App init");
    return (
        <div className="app">
            <UserPicker/>
            <Logo/>
        </div> 
    );
};

export default App;