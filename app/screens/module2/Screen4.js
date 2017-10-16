import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Screen4 extends Component {
    handleLogin() {
        this.props.navigation.navigate('Screen3');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Module Screen 4</Text>

                <TouchableOpacity onPress={() => this.handleLogin()}>
                    <Text>Go to Screen 3</Text>
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

export default Screen4;