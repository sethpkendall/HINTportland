import { ADD_REVIEW } from '../actions/add_review';

export default function(state = [], action) {
    console.log(state);
    switch (action.type) {
        case ADD_REVIEW:
            console.log(action.payload);
            console.log(state.Quadrants);
            return [ action.payload.data, ...state ];
        //...state means unpack this array and insert the contents here
        default:
            return state
    }
}