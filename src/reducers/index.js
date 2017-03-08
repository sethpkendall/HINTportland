import { combineReducers } from 'redux';
import{ reducer as formReducer } from 'redux-form';
import ReviewsReducer from './reducer_reviews';
import ActiveReview from './reducer_active_review';

const rootReducer = combineReducers({
    quadrants: ReviewsReducer,
    activeReview: ActiveReview,

    form: formReducer
});

export default rootReducer;
