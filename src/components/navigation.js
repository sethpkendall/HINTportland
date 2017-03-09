import React, { Component } from "react";
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-div">
                <ul className="nav-list">
                    <li><Link to="blog">Blog</Link></li>
                    <li><Link to="quadrants">Reviews</Link></li>
                </ul>
            </div>
        );
    }
}