import { ADD_REVIEW } from '../actions/add_review';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_REVIEW:
            return [ action.payload.data, ...state ];
        //...state means unpack this array and insert the contents here
        default:
            return state
    }
}