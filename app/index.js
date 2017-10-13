import React, { Component } from 'react';
import { AppNavigator } from './config/router';

import Login from './screens/Login';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
        };
    }

    render() {
        const { signedIn } = this.state;

        const Layout = AppNavigator(signedIn);
        return <Layout />;
    }
}