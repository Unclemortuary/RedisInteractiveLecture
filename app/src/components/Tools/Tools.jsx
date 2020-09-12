import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button.jsx';
import ColorPicker from './ColorPicker.jsx';

import { onColorPickerClick } from '../../modules/colorPicker/actions.js';
import { showColorPicker, showOnlineUsers } from '../../modules/selectors.js';

const Tools = () => {
    const needShowColorPicker = useSelector(showColorPicker);
    const needShowOnlineUsers = useSelector(showOnlineUsers);
    const dispacth = useDispatch();
    
    return (
        <div className="tools">
            <Button onClick={() => dispacth(onColorPickerClick())} />
            { needShowColorPicker && <ColorPicker /> }
            <Button onClick={() => console.log('show users')} />
        </div>
    )
};

export default Tools;