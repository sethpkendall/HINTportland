import React, { Component } from 'react';
import ReviewList from "../containers/review_list";
import ReviewDetail from "../containers/review_detail";

class Reviews extends Component {
    render() {
        return (
            <div id="detailsDiv" className="row">
                <div className="col-xs-4 col-xs-offset-1">
                    <ReviewList quadrant={this.props.params.quadrant}/>
                </div>
                <div className="col-xs-6">
                    <ReviewDetail/>
                </div>
            </div>
        );
    }
}

export default Reviews;
