import { getColor } from './colorPicker/actions.js';

export const init = async () => dispatch => {
    const a = dispatch(getColor());
    console.log(a);
};