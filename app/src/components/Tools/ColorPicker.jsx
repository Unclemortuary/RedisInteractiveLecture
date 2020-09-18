import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';

import { getCurrentColor } from '../../modules/selectors.js';
import { changeColor, onSaveButtonClick } from '../../modules/colorPicker/actions.js';

const ColorPicker = () => {
    const currentColor = useSelector(getCurrentColor);
    const dispatch = useDispatch();

    return (
        <div className="color-picker-container">
            <SketchPicker 
                color={currentColor}
                onChangeComplete={(color) => dispatch(changeColor(color.hex))}/>
            <button className="save-button" onClick={() => dispatch(onSaveButtonClick())}>Save</button>
        </div>
    ) 
};

export default ColorPicker;