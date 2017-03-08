import React, { Component } from "react";

export default class TypeDropdown extends Component {
    render() {
        return (
            <select className="form-control">
                <option>Restaurant</option>
                <option>Bar</option>
                <option>Indoor Activity</option>
                <option>Outdoor Activity</option>
                <option>Misc</option>
            </select>
        );
    }
}