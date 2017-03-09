import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewDetail extends Component {
    render() {
        if(!this.props.review){
            return <div>Select a Review to get started.</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.review.name}</div>
                <div>Pages: {this.props.review.review}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        review: state.ActiveReview
    };
}

export default connect(mapStateToProps)(ReviewDetail);