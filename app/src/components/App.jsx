import React from 'react';
import Logo from './Logo/Logo.jsx';

import './app.scss';

const App = () => {
    console.log("App init");
    return (
        <div className="app">
            <Logo/>
        </div> 
    );
};

export default App;