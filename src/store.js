import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

// import Quadrants from './data/reviews';

// const preloadedState = {
//     Quadrants
// };
const store = createStore(rootReducer, applyMiddleware(thunk) );

export const history = syncHistoryWithStore(browserHistory, store);

export default store;