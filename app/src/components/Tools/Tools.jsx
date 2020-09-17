import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button.jsx';
import ColorPicker from './ColorPicker.jsx';

import { onColorPickerClick } from '../../modules/colorPicker/actions.js';
import { showColorPicker } from '../../modules/selectors.js';

const Tools = () => {
    const needShowColorPicker = useSelector(showColorPicker);
    const dispacth = useDispatch();
    
    return (
        <div className="tools">
            { needShowColorPicker && <ColorPicker /> }
            <Button 
                className="color-picker-btn" 
                onClick={() => dispacth(onColorPickerClick())} 
                message={"Change color scheme"}
                />
            <Button 
                onClick={() => console.log('show users')} 
                message={"Refresh online users"}
                />
        </div>
    )
};

export default Tools;