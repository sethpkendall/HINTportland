import React, { Component } from 'react';
import ReviewList from "../containers/review_list";
import ReviewDetail from "../containers/review_detail";

class Reviews extends Component {
    render() {
        return (
            <div>
                <ReviewList/>
                <ReviewDetail/>
            </div>
        );
    }
}

export default Reviews;
