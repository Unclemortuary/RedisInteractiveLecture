import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button.jsx';
import ColorPicker from './ColorPicker.jsx';

import { onColorPickerClick } from '../../modules/colorPicker/actions.js';
import { invokeFetch } from '../../modules/recommedations/actions.js';
import { invokeFetch as invokeUsersFetch } from '../../modules/user/actions.js';
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
                onClick={() => dispacth(invokeUsersFetch())} 
                message={"Refresh online users"}
                />
            <Button 
                onClick={() => dispacth(invokeFetch())}
                message={"Refresh recommendations"}
                />
        </div>
    )
};

export default Tools;