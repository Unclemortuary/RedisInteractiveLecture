import { createAction } from 'redux-actions';
import { COLOR_CHANGED, COLOR_PICKER_CLICKED, FETCH_COLOR } from './actionTypes.js';
import { fetchColor} from './api.js';

export const changeColor = createAction(
    COLOR_CHANGED,
    (color) => color
);

export const invokeFetch = createAction(FETCH_COLOR);

export const onColorPickerClick = createAction(COLOR_PICKER_CLICKED);

export const requestForColor = () => async dispatch => {
    const color = await fetchColor();
    dispatch(changeColor(color));
};