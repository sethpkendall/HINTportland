export function selectReview(review){
    //selectReview is an ActionCreator. It needs to return an action: an object with a type property.
    return {
        type: "REVIEW_SELECTED",
        payload: review
    };
}