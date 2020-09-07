import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isAppInitialized } from '../../modules/selectors.js';
import { initAppAfterDelay } from '../../modules/logo/actions.js';

const Logo = () => {
    const show = !useSelector(isAppInitialized);
    console.log(show);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if (show) {
    //         initAppAfterDelay(dispatch);
    //     }
    // })

    return show ? <span className="logo">Tetflix</span> : null;
};

export default Logo;