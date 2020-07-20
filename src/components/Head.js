import React, { Component } from 'react';

class Head extends Component {

    render() {
        return (
            <head>
                <title>{this.props.title}</title>
            </head>
        );
    }
}
export default Head;