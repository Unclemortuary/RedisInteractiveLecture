import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isAppInitialized } from '../../modules/selectors.js';
import { initAppAfterDelay } from '../../modules/logo/actions.js';

const Logo = () => {
    const show = !useSelector(isAppInitialized);
    const dispatch = useDispatch();
    useEffect(() => {
        if (show) {
            initAppAfterDelay(dispatch);
        }
    })

    return show ? (
        <div className="l-container">
            <span className="logo">Tetflix</span>
        </div> ) : null;
};

export default Logo;