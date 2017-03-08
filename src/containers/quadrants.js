import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Quadrants extends Component {
    renderList() {
        console.log(this.props.quadrants);
        return this.props.quadrants.map((quadrant)=>{
            return(
                    <Link to={"/" + quadrant.title}><li className="list-group-item">{quadrant.title}</li></Link>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-8">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        quadrants: state.quadrants
    }
}

export default connect(mapStateToProps)(Quadrants);
