import { createAction } from 'redux-actions';
import { COLOR_CHANGED, COLOR_PICKER_CLICKED } from './actionTypes.js';

export const changeColor = createAction(
    COLOR_CHANGED,
    (color) => color
);

export const onColorPickerClick = createAction(COLOR_PICKER_CLICKED);