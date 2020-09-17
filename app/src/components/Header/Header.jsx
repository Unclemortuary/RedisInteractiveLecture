import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tools from '../Tools/Tools.jsx';
import img from './unnamed.png';

import { getColor } from '../../modules/colorPicker/actions.js';
import { getUserId, getFetchColorRequestId } from '../../modules/selectors.js';

const Header = () => {
    const userId = useSelector(getUserId);
    const requestId = useSelector(getFetchColorRequestId);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            await dispatch(getColor());
        };
        fetchData();
    }, [requestId]);

    return (
        <div className="header-container">
            <img className="header" src={img}/>
            <div className="h-user">User id: {userId}</div>
            <Tools/>
        </div>
    )
};

export default Header;