import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Login extends Component {
    handleLogin() {
        this.setState({ signedIn: true });
        this.props.navigation.navigate('Welcome');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Login screen</Text>

                <TouchableOpacity onPress={() => this.handleLogin()}>
                    <Text>Click to login</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Login;