import { createAction } from 'redux-actions';
import { COLOR_CHANGED, COLOR_PICKER_CLICKED, GET_CURRENT_COLOR, FETCH } from './actionTypes.js';
import { fetchColor} from './api.js';

export const getCurrentColor = createAction(
    GET_CURRENT_COLOR,
    (color) => color
)

export const changeColor = createAction(
    COLOR_CHANGED,
    (color) => color
);

export const invokeFetch = createAction(FETCH);

export const onColorPickerClick = createAction(COLOR_PICKER_CLICKED);

export const getColor = () => async dispatch => {
    const color = await fetchColor();
    dispatch(getCurrentColor(color));
};