import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Screen1 extends Component {
    handleLogin() {
        this.props.navigation.navigate('Screen2');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Module Screen 1</Text>

                <TouchableOpacity onPress={() => this.handleLogin()}>
                    <Text>Go to Screen 2</Text>
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

export default Screen1;