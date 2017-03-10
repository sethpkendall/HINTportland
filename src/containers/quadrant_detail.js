import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import ReviewForm from '../components/review_form';
import { addReview } from '../actions/add_review';
import { selectReview } from '../actions/select_review';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class QuadrantDetail extends Component {
    componentDidMount(){
        document.getElementById('full').className = "backgroundSE"
    }
    constructor(props){
        super(props);

        this.state = {
            form: {},
            rating: ''
        };

        this.onRate = this.onRate.bind(this);
    }
    renderList() {
        var currentQuadrant = this.props.params.title;
        var reviews = this.props.quadrants[currentQuadrant].reviews;
        return reviews.map((review)=>{
            return(
                <Link key={review.key} to={"/" + currentQuadrant + "/" + review.key}><li
                    key={review.name}
                    onClick={() => this.props.selectReview(review)}
                    className="list-group-item">
                    {review.name}
                </li></Link>
            );
        });
    }
    handleSubmit = (reviewInfo) => {
        reviewInfo.key = '_' + Math.random().toString(36).substr(2, 9);
        reviewInfo.price = this.state.rating;
        var dispatched = {};
        dispatched.newReview = reviewInfo;
        dispatched.quadrant = this.props.params.title;
        console.log(reviewInfo);
        this.props.addReview(dispatched);
    }

    onRate(rating){
        this.setState({rating: rating});
    }
    render() {
        return (
            <div className="row" id="full">
                <div className="col-md-6">
                    <ReviewForm onSubmit={this.handleSubmit} onRate={this.onRate} />
                </div>
                <div className="col-md-6">
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
        quadrants: state.Quadrants,
        form: state.form
    };
}

// // Anything returned from this function becomes a prop of ReviewList container.
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, result should be passed to all reducers.
    return bindActionCreators({ addReview: addReview, selectReview: selectReview}, dispatch);
}

// //Promote ReviewList from a component to a container. It needs to know about this new dispatch method selectReview. Make it
// //available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(QuadrantDetail);