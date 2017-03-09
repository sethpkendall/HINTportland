import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import TypeDropdown from './form_inputs/type_dropdown';
// import Rating from 'react-rating';

class ReviewForm extends Component {
    submit(){

    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group col-xs-9 col-xs-offset-2">
                    <label htmlFor="Name">Name: </label>
                    <br/>
                    <Field name="Name" component="input" type="text" className="form-control"/>
                </div>
                <div className="form-group col-xs-9 col-xs-offset-2">
                    <label htmlFor="Type">Type: </label>
                    <br/>
                    <Field name="Type" component={TypeDropdown} className="form-control"/>
                </div>
                <div className="form-group col-xs-9 col-xs-offset-2">
                    <label htmlFor="Review">Review: </label>
                    <br/>
                    <Field name="Review" component="textarea" rows="4" className="form-control"/>
                </div>
                    <button type="submit" className="btn btn-primary pull-right">Submit</button>
            </form>
        );
    }
}

ReviewForm = reduxForm({
    form: 'review' // a unique name for this form
})(ReviewForm);

export default ReviewForm;
// <form onSubmit={this.onFormSubmit}>
//     <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input type="text" className="form-control" id="name"></input>
//     </div>
//     <div className="form-group">
//         <label htmlFor="short-description">Short Description:</label>
//         <input className="form-control" id="short-description"></input>
//     </div>
//     <div className="form-group">
//         <label>Price Rating:</label>
//         <br/>
//         <Rating />
//     </div>
//     <div className="form-group">
//         <label htmlFor="specialties">Specialties or Recommendations:</label>
//         <textarea type="text" className="form-control" id="specialties" rows="2"></textarea>
//     </div>
//     <div className="form-group">
//         <label htmlFor="review">Review:</label>
//         <textarea type="text" className="form-control" id="review" rows="4"></textarea>
//     </div>
//     <div className="panel panel-default">
//         <div className="panel-heading" role="tab" id="detailsHeading">
//             <h4 className="panel-title">
//                 <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                     Details (optional)
//                 </a>
//             </h4>
//         </div>
//         <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="detailsHeading">
//             <div className="panel-body">
//                 <div className="form-group"></div>
//             </div>
//         </div>
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
// </form>