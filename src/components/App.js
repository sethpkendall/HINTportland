import React, { Component } from 'react';
import Navigation from './navigation';
import './styles/App.css';

class App extends Component {
    content() {
        if (this.props.children) {
            return this.props.children
        } else {
            return '';
        }
    }
    render() {
        return (
            <div id="rootDiv">
                <h1 className="text-center"><span id="H">H</span><span id="I">I</span><span id="N">N</span><span id="T">T</span>portland</h1>
                <Navigation />
                {this.content()}
                {/*{this.props.children}*/}
            </div>
        );
    }
}

export default App;
