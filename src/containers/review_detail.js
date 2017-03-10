import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            price: ''
        };
    }
    insertPrice(){
        var price = [];
        var greens = this.props.review.price;
        var greys = 5 - this.props.review.price;
        for(var i =0; i<greens; i++){
            price.push(<span key={'green' + i} className="fa fa-usd detailGreen"></span>);
        }
        for(var j =0; j<greys; j++){
            price.push(<span key={'grey' + j} className="fa fa-usd detailGrey"></span>);
        }

        return price.map((icon)=>{
            return(icon);
        });
    }

    render() {
        if(!this.props.review){
            return <div>Select a Review to get started.</div>;
        }
        return (
            <div className="detailsDiv">
                <h3>{this.props.review.name} | <span id="typeSpan">{this.props.review.type}</span></h3>
                <h5> <span>{this.insertPrice()}</span></h5>
                <h5>{this.props.review.description}</h5>
                <div className="card text-center">
                    <div><h5><u>Specialties/Deals</u></h5> {this.props.review.specialties}</div>
                    <div><h5><u>Review</u></h5> {this.props.review.review}</div>
                </div>

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