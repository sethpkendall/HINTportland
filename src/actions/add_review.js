export const ADD_REVIEW = 'ADD_REVIEW';

export function addReview(reviewInfo) {
    return {
        type: ADD_REVIEW,
        payload: reviewInfo
    };
}