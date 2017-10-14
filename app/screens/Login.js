import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Login extends Component {
    handleLogin() {
        // this.setState({ signedIn: true });

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Welcome' }),
            ],
        });

        this.props.navigation.dispatch(resetAction);
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