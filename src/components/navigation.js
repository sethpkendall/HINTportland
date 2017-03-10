import React, { Component } from "react";
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-div">
                <ul className="nav-list">
                    <li className="nav-link"><Link to="blog">Blog</Link></li>
                    <li className="nav-link"><Link to="quadrants">Reviews</Link></li>
                </ul>
            </div>
        );
    }
}