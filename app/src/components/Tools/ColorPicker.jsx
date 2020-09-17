import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';

import { getCurrentColor } from '../../modules/selectors.js';
import { changeColor } from '../../modules/colorPicker/actions.js';

const ColorPicker = () => {
    const currentColor = useSelector(getCurrentColor);
    const dispatch = useDispatch();

    return <SketchPicker 
            color={currentColor}
            onChangeComplete={(color) => dispatch(changeColor(color.hex))}/>
};

export default ColorPicker;