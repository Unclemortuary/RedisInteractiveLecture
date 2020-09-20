import { createAction } from 'redux-actions';
import { COLOR_CHANGED, COLOR_PICKER_CLICKED, FETCH_COLOR } from './actionTypes.js';
import { fetchColor, saveColor } from './api.js';
import { getUserId } from '../selectors.js';

export const changeColor = createAction(
    COLOR_CHANGED,
    (color) => color
);

export const invokeFetch = createAction(FETCH_COLOR);

export const onColorPickerClick = createAction(COLOR_PICKER_CLICKED);

export const requestForColor = () => async (dispatch, getState) => {
    const color = await fetchColor(getUserId(getState()));
    dispatch(changeColor(color));
};

export const onSaveButtonClick = (color) => (dispatch, getState) => {
    dispatch(onColorPickerClick());
    saveColor(getUserId(getState()), color)
        .then(() => dispatch(requestForColor()));
};