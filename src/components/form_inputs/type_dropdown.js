import React, { Component } from "react";

export default class TypeDropdown extends Component {
    render() {
        return (
            <select className="form-control">
                <option value="1" >Restaurant</option>
                <option value="2">Bar</option>
                <option value="3">Indoor Activity</option>
                <option value="4">Outdoor Activity</option>
                <option value="5">Misc</option>
            </select>
        );
    }
}