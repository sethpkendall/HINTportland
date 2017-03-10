import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReview } from '../actions/select_review';
import { bindActionCreators } from 'redux';

class ReviewList extends Component {
    componentDidMount(){
        if(this.props.activeReview){
            document.getElementById(this.props.activeReview.key).style = 'background-color: lightgrey';
        }
    }
    componentDidUpdate(){
        document.getElementById(this.props.activeReview.key).style = 'background-color: lightgrey';
    }
    newSelection(review){
        document.getElementById(this.props.activeReview.key).style = 'background-color: #fff';
        this.props.selectReview(review)
    }
    renderList() {
        return this.props.quadrants[this.props.quadrant].reviews.map((review)=>{
            return(
                <li
                    id={review.key}
                    key={review.name}
                    onClick={() => this.newSelection(review)}
                    className="list-group-item">
                    {review.name}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-6">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned here will be props inside BookList
    return{
        quadrants: state.Quadrants,
        activeReview: state.ActiveReview
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