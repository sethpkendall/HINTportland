import React, { Component } from 'react';
import ReviewList from "../containers/review_list";
import ReviewDetail from "../containers/review_detail";

class Reviews extends Component {
    render() {
        console.log(this.props.params.quadrant)
        return (
            <div>
                <ReviewList quadrant={this.props.params.quadrant}/>
                <ReviewDetail/>
            </div>
        );
    }
}

export default Reviews;
