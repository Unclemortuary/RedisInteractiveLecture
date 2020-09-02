import { createStore, applyMiddleware, compose } from 'redux';
import thunx from 'redux-thunk';

import reducers from '../modules/reducers.js';

let composeEnhances = compose;

composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: "Tetflix"
});

export default () => {
    const store = createStore(
        reducers, 
        composeEnhances(applyMiddleware(thunx)));

    return store;
}