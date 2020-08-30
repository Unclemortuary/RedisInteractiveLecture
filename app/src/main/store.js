import { createStore, applyMiddleware } from 'redux';
import thunx from 'redux-thunk';

import reducers from '../modules/reducers.js';

const store = createStore(reducers, applyMiddleware(thunx));

export default store;