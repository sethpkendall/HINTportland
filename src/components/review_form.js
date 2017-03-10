import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import Rating from 'react-rating';

class ReviewForm extends Component {
    formReset(){
        document.getElementById('nameField').value = '';
        document.getElementById('descriptionField').value = '';
        document.getElementById('priceField').value = '';
        document.getElementById('typeField').value = '';
        document.getElementById('specialtiesField').value = '';
        document.getElementById('reviewField').value = '';
    }
    render() {
        const { handleSubmit, onRate } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group col-xs-10 col-xs-offset-1">
                    <label htmlFor="name">Name: </label>
                    <br/>
                    <Field id='nameField' name="name" component="input" type="text" className="form-control" placeholder="'Pok Pok'"/>
                </div>
                <div className="form-group col-xs-10 col-xs-offset-1">
                    <label htmlFor="description">Short Description: </label>
                    <br/>
                    <Field id='descriptionField' name="description" component="input" type="text" className="form-control" placeholder="'Thai Street Food'"/>
                </div>
                <div className="form-group col-xs-10 col-xs-offset-1">
                    <label htmlFor="price">Price Rating:</label>
                    <br/>
                    <Field id='priceField' name="price" component={Rating} onClick={onRate} empty="fa fa-usd grey" full="fa fa-usd green" />
                </div>
                <div className="form-group col-xs-10 col-xs-offset-1">
                    <label htmlFor="type">Type:</label>
                    <div>
                        <Field id='typeField' name="type" component="select" className="form-control">
                            <option></option>
                            <option value="Bar">Bar</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Indoor Activity">Indoor Activity</option>
                            <option value="Outdoor Activity">Outdoor Activity</option>
                            <option value="Event">Event</option>
                        </Field>
                    </div>
                </div>
                <div className="form-group col-xs-10 col-xs-offset-1">
                    <label htmlFor="specialties">Specialties: </label>
                    <Field id='specialtiesField' name="specialties" component="textarea" rows="2" className="form-control" placeholder="'Chicken Wings'"/>
                </div>
                <div className="form-group col-xs-10 col-xs-offset-1">
                    <label htmlFor="review">Review: </label>
                    <Field id='reviewField' name="review" component="textarea" rows="4" className="form-control"/>
                </div>
                <div id="submitDiv" >
                    <button type="submit" className="btn btn-primary" onClick={this.formReset}>Submit</button>
                </div>

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