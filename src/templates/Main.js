import React, { Component } from 'react';
import Head from '../components/Head'

class Main extends Component {

    render() {
        return (
            <html>
                <Head title='React and CSS Modules' />
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    };
}
export default Main;