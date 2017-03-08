import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewForm from '../components/review_form';
import { addReview } from '../actions/add_review';
// import { bindActionCreators } from 'redux';

class QuadrantDetail extends Component {
    constructor(props){
        super(props);

        this.state = {form: {

        }};
    }
    renderList() {
        var title;
        this.props.quadrants.forEach(function(quadrant){
            if(quadrant.title === this.props.params.title){
                title = quadrant.reviews;
            }
        }.bind(this));
        return title.map((review)=>{
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
    handleSubmit = (values) => {
        // Do something with the form values
        console.log(values);
        console.log(this.props.form);
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-6">
                    <ReviewForm onSubmit={this.handleSubmit}/>
                </div>
                <div className="col-xs-6">
                    <ul className="list-group">
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned here will be props inside BookList
    // state.quadrants.forEach(function(quadrant){
    //     if(quadrant.title === )
    // });
    return{
        quadrants: state.quadrants,
        form: state.form
    };
}

// // Anything returned from this function becomes a prop of ReviewList container.
// function mapDispatchToProps(dispatch) {
//     //Whenever selectBook is called, result should be passed to all reducers.
//     return bindActionCreators({ selectReview: selectReview}, dispatch);
// }
//
// //Promote ReviewList from a component to a container. It needs to know about this new dispatch method selectReview. Make it
// //available as a prop.
export default connect(mapStateToProps)(QuadrantDetail);