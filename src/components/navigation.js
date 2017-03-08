import React, { Component } from "react";
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="blog">Blog</Link></li>
                    <li><Link to="quadrants">Reviews</Link></li>
                </ul>
            </div>
        );
    }
}