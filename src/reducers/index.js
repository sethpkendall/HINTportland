import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import{ reducer as formReducer } from 'redux-form';
import Quadrants from './reducer_quadrants';
import ActiveReview from './reducer_active_review';
import AddReview from './reducer_add_review';


const rootReducer = combineReducers({
    Quadrants,
    ActiveReview,
    AddReview,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer;
