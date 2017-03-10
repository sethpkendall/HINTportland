//State arguement is not application state it is just this reducer is responsible for.
export default function(state = null, action){
    switch(action.type){
        case 'REVIEW_SELECTED': return action.payload;
        default:
            return state
    }

}