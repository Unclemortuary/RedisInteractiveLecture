import React from 'react';
import { useSelector } from 'react-redux';

import img from './unnamed.png';
import { getUserId } from '../../modules/selectors.js';

const Header = () => {
    const userId = useSelector(getUserId);
    return (
        <div className="header-container">
            <img className="header" src={img}/>
            <div className="h-user">User id: {userId}</div>
        </div>
    )
};

export default Header;