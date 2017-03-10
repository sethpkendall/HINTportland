import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getQuadrants } from '../actions/get_quadrants';
import { bindActionCreators } from 'redux';
import '../components/styles/quadrants.css';

class Quadrants extends Component {
    componentWillMount(){
        this.props.getQuadrants();
    }
    renderList() {
        var quads = this.props.quadrants
        var keys = Object.keys(quads);
        return keys.map((quadrant)=>{
            return(
                    <Link key={quadrant} to={"/" + quadrant}><li key={quadrant} className="list-group-item">{quadrant}</li></Link>
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
        quadrants: state.Quadrants
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getQuadrants: getQuadrants}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quadrants);
