import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReview } from '../actions/select_review';
import { bindActionCreators } from 'redux';

class ReviewList extends Component {
    renderList() {
        return this.props.quadrants.Southeast.reviews.map((review)=>{
            return(
                <li
                    key={review.title}
                    onClick={() => this.props.selectReview(review)}
                    className="list-group-item">
                    {review.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned here will be props inside BookList
    return{
        quadrants: state.quadrants
    };
}

// Anything returned from this function becomes a prop of ReviewList container.
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, result should be passed to all reducers.
    return bindActionCreators({ selectReview: selectReview}, dispatch);
}

//Promote ReviewList from a component to a container. It needs to know about this new dispatch method selectReview. Make it
//available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);